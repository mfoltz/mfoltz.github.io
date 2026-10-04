import assert from "node:assert/strict";
import test from "node:test";
import { buildIngredientRecipes, compareIngredientRecipes, indexIngredientDestinations,
  readIngredientRecipeDocument, validateIngredientRecipes, type IngredientRecipeDocument } from "./ingredient-recipes";

const item = { title: "Iron", prefab: "Item_Iron", guid: 0, slug: "item-iron", path: "/db/items/item-iron" };
const recipe = { title: "Sword Recipe", prefab: "Recipe_Sword", guid: -9, slug: "recipe-sword", path: "/db/recipes/recipe-sword" };
const doc: IngredientRecipeDocument = { prefabName: recipe.prefab, guid: recipe.guid,
  sourcePath: "content/prefabs/Recipe_Sword.md", entries: [{ Guid: "Item_Iron PrefabGuid(0)", Amount: "12" }] };
const identities = { Item_Iron: 0, Recipe_Sword: -9 };
const build = (docs = [doc], items = [item], recipes = [recipe], all = identities) =>
  buildIngredientRecipes(docs, indexIngredientDestinations(items), indexIngredientDestinations(recipes), all);
const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value));

test("reverse references retain required amount, exact recipe identity and source without artwork", () => {
  assert.deepEqual(clone(build().get(item.prefab)), [{ title: "Sword Recipe", prefab: "Recipe_Sword", guid: -9,
    slug: "recipe-sword", path: "/db/recipes/recipe-sword", amount: 12,
    sourceComponent: "ProjectM.RecipeRequirementBuffer", sourcePath: doc.sourcePath }]);
  assert.equal(doc.entries[0].Amount, "12");
  assert.equal(build([{ ...doc, entries: [] }]).size, 0);
});

test("source reader stops at the next component and supports CRLF and no requirements", () => {
  const markdown = `---\ntitle: Recipe_Sword\nguid: -9\n---\n- [ProjectM.RecipeRequirementBuffer](source)\n- **[0]**\n  - \`Guid: Item_Iron PrefabGuid(0)\`\n  - \`Amount: 12\`\n- [ProjectM.RecipeOutputBuffer](source)\n- **[0]**\n  - \`Guid: Item_Other PrefabGuid(1)\`\n  - \`Amount: 2\`\n`;
  assert.deepEqual(readIngredientRecipeDocument(doc.sourcePath, markdown.replace(/\n/g, "\r\n")), doc);
  assert.equal(readIngredientRecipeDocument(doc.sourcePath, "title: Recipe_Sword\nguid: -9\n").entries.length, 0);
  assert.throws(() => readIngredientRecipeDocument(doc.sourcePath, markdown + markdown), /duplicate ingredient buffers/);
  assert.throws(() => readIngredientRecipeDocument(doc.sourcePath, markdown.replace("Amount: 12", "Amount: 12\`\n  - \`Amount: 4")), /duplicate ingredient field/);
});

for (const amount of [undefined, "", "0", "-1", "NaN", "Infinity", "12abc", "1e999"]) {
  test(`reject invalid quantity ${String(amount)}`, () => {
    const changed = clone(doc);
    if (amount === undefined) delete changed.entries[0].Amount;
    else changed.entries[0].Amount = amount;
    assert.throws(() => build([changed]), /invalid ingredient quantity/);
  });
}

test("positive decimal quantities survive without rounding", () => {
  assert.equal(build([{ ...doc, entries: [{ ...doc.entries[0], Amount: "0.25" }] }]).get(item.prefab)?.[0].amount, 0.25);
});

test("missing, ambiguous, mismatched and malformed item identities cannot become links", () => {
  assert.throws(() => build([doc], []), /missing or ambiguous items destination/);
  assert.throws(() => build([doc], [item, item]), /missing or ambiguous items destination/);
  assert.throws(() => build([doc], [{ ...item, guid: 1 }]), /identity mismatch/);
  assert.throws(() => build([doc], [item], [recipe], { ...identities, Item_Iron: 1 }), /identity mismatch/);
  assert.throws(() => build([doc], [{ ...item, path: "/db/items/wrong" }]), /route mismatch/);
  assert.throws(() => build([{ ...doc, entries: [{ Guid: "GUID Not Found", Amount: "1" }] }]), /malformed ingredient identity/);
});

test("recipe destination and document identity remain exact", () => {
  assert.throws(() => build([doc], [item], []), /missing or ambiguous recipes destination/);
  assert.throws(() => build([doc], [item], [recipe, recipe]), /missing or ambiguous recipes destination/);
  assert.throws(() => build([{ ...doc, guid: null }]), /identity mismatch/);
  assert.throws(() => build([{ ...doc, sourcePath: "other.md" }]), /source path mismatch/);
  assert.throws(() => build([doc], [item], [{ ...recipe, path: "/db/items/recipe-sword" }]), /route mismatch/);
  assert.throws(() => build([doc, doc]), /duplicate recipe document/);
  assert.throws(() => build([{ ...doc, entries: [doc.entries[0], doc.entries[0]] }]), /duplicate item\/recipe pair/);
});

test("A-Z ordering is deterministic with complete prefab/GUID tie breakers", () => {
  const recipes = [recipe, { ...recipe, title: "apple Recipe", prefab: "Recipe_B", guid: 4, slug: "recipe-b", path: "/db/recipes/recipe-b" },
    { ...recipe, title: "Apple Recipe", prefab: "Recipe_A", guid: -2, slug: "recipe-a", path: "/db/recipes/recipe-a" }];
  const docs = recipes.map(row => ({ ...doc, prefabName: row.prefab, guid: row.guid, sourcePath: `content/prefabs/${row.prefab}.md` }));
  const all = { ...identities, Recipe_A: -2, Recipe_B: 4 };
  assert.deepEqual(build(docs, [item], recipes, all).get(item.prefab)?.map(row => row.prefab), ["Recipe_A", "Recipe_B", "Recipe_Sword"]);
  assert.deepEqual(build([...docs].reverse(), [item], recipes, all).get(item.prefab), build(docs, [item], recipes, all).get(item.prefab));
  assert(compareIngredientRecipes({ ...recipe, guid: -2 }, { ...recipe, guid: 0 }) < 0);
});

test("independent validation rejects missing, extra, reordered and corrupted backlinks", () => {
  const expected = build(), rows = clone(expected.get(item.prefab)!);
  const detail = { slug: item.slug, title: item.title, prefab: item.prefab, guid: item.guid, ingredientRecipes: rows };
  validateIngredientRecipes([detail], expected);
  for (const [key, value] of Object.entries({ amount: 2, guid: 9, title: "Wrong", path: "/db/recipes/wrong", sourcePath: "wrong.md", sourceComponent: "Wrong" })) {
    assert.throws(() => validateIngredientRecipes([{ ...detail, ingredientRecipes: [{ ...rows[0], [key]: value }] }], expected), /differ from independent source/);
  }
  assert.throws(() => validateIngredientRecipes([{ ...detail, ingredientRecipes: [] }], expected), /differ from independent source/);
  assert.throws(() => validateIngredientRecipes([{ ...detail, ingredientRecipes: [...rows, ...rows] }], expected), /differ from independent source/);
  assert.throws(() => validateIngredientRecipes([], expected), /missing ingredient item detail/);
  validateIngredientRecipes([{ slug: "unused", title: "Unused", prefab: "Item_Unused" }], new Map());
  assert.throws(() => validateIngredientRecipes([{ ...detail, ingredientRecipes: [] }], new Map()), /unexpected ingredient recipes/);
});
