import assert from "node:assert/strict";
import test from "node:test";
import { buildBookBlueprints, compareBookBlueprintRecords, indexBookBlueprintDestinations,
  readBookBlueprintDocument, validateBookBlueprints, bookRequirementComponent, bookUnlockComponent,
  type BookBlueprintDocument, type BookBlueprintDestination } from "./book-blueprints";

const book: BookBlueprintDestination = { title: "Book", prefab: "Item_Ingredient_Book_Test", guid: 0, slug: "book", path: "/db/items/book" };
const bp: BookBlueprintDestination = { title: "Blueprint", prefab: "BP_A-Section", guid: -2, slug: "bp-a-section", path: "/db/blueprints/bp-a-section" };
const owner: BookBlueprintDocument = { prefabName: "Tech_Test", guid: -9, sourcePath: "content/prefabs/Tech_Test.md",
  components: new Map([["ProjectM.TechData", { entries: [] }],
    [bookRequirementComponent, { entries: [{ Guid: `${book.prefab} PrefabGuid(0)`, Stacks: "1" }] }],
    [bookUnlockComponent, { entries: [{ Guid: `${bp.prefab} PrefabGuid(-2)` }] }]]) };
const bookDoc: BookBlueprintDocument = { prefabName: book.prefab, guid: 0, sourcePath: `content/prefabs/${book.prefab}.md`,
  components: new Map([["ProjectM.ItemData", { entries: [] }]]) };
const all = { [book.prefab]: 0, [bp.prefab]: -2, Tech_Test: -9 };
const copy = (doc: BookBlueprintDocument) => structuredClone(doc);
const build = (docs = [owner, bookDoc], items = [book], blueprints = [bp], identities: Record<string, number> = all) =>
  buildBookBlueprints(docs, indexBookBlueprintDestinations(items), indexBookBlueprintDestinations(blueprints), identities);
const rows = () => JSON.parse(JSON.stringify(build().get(book.prefab)!));

test("target has no amount; its exact source owns quantity and both provenance components", () => {
  const [row] = rows();
  assert.deepEqual(row, { ...bp, declaringSources: [{ title: "Tech Test", prefab: "Tech_Test", guid: -9,
    path: "/prefabs/tech-test", amount: 1, sourcePath: owner.sourcePath,
    sourceComponent: bookRequirementComponent, unlockSourceComponent: bookUnlockComponent }] });
  assert(!("amount" in row));
  assert.equal(build([]).size, 0);
  const unknown = copy(owner); delete unknown.components.get(bookRequirementComponent)!.entries[0].Stacks;
  assert.equal(build([unknown, bookDoc]).get(book.prefab)![0].declaringSources[0].amount, undefined);
});

for (const value of ["", "0", "-1", "0.5", "NaN", "Infinity", "1e2", "12abc", "9007199254740992"]) {
  test(`reject recorded invalid quantity ${value}`, () => {
    const bad = copy(owner); bad.components.get(bookRequirementComponent)!.entries[0].Stacks = value;
    assert.throws(() => build([bad, bookDoc]), /invalid book quantity/);
  });
}
test("duplicates and conflicts stop; different owners consolidate without losing quantity", () => {
  const bad = copy(owner), req = bad.components.get(bookRequirementComponent)!.entries;
  req.push({ ...req[0] });
  assert.throws(() => build([bad, bookDoc]), /duplicate book\/source/);
  req[1].Stacks = "2";
  assert.throws(() => build([bad, bookDoc]), /conflicting book quantities/);
  const duplicate = copy(owner); duplicate.components.get(bookUnlockComponent)!.entries.push({ Guid: `${bp.prefab} PrefabGuid(-2)` });
  assert.throws(() => build([duplicate, bookDoc]), /duplicate unlock edge/);
  assert.throws(() => build([owner, owner, bookDoc]), /duplicate declaring document/);
  const second = copy(owner); second.prefabName = "Tech_Second"; second.guid = 12; second.sourcePath = "content/prefabs/Tech_Second.md";
  second.components.get(bookRequirementComponent)!.entries[0].Stacks = "2";
  const result = build([owner, second, bookDoc], [book], [bp], { ...all, Tech_Second: 12 }).get(book.prefab)!;
  assert.equal(result.length, 1);
  assert.deepEqual(result[0].declaringSources.map(row => [row.prefab, row.amount]), [["Tech_Second", 2], ["Tech_Test", 1]]);
});
test("one owner can declare multiple books and targets with deterministic ties", () => {
  const secondBook = { ...book, prefab: "Item_Ingredient_Book_Other", guid: -3, slug: "other", path: "/db/items/other" };
  const secondDoc = { ...bookDoc, prefabName: secondBook.prefab, guid: -3, sourcePath: `content/prefabs/${secondBook.prefab}.md` };
  const secondBp = { ...bp, prefab: "BP_Z", guid: 0, slug: "bp-z", path: "/db/blueprints/bp-z", icon: "/icons/buildables/existing.png" };
  const changed = copy(owner);
  changed.components.get(bookRequirementComponent)!.entries.push({ Guid: `${secondBook.prefab} PrefabGuid(-3)`, Stacks: "1" });
  changed.components.get(bookUnlockComponent)!.entries.push({ Guid: "BP_Z PrefabGuid(0)" });
  const identities = { ...all, [secondBook.prefab]: -3, BP_Z: 0 };
  const result = build([changed, bookDoc, secondDoc], [secondBook, book], [secondBp, bp], identities);
  assert.equal(result.size, 2); assert.equal(result.get(book.prefab)!.length, 2);
  assert.deepEqual(result.get(book.prefab)!.map(row => row.prefab), [bp.prefab, "BP_Z"]);
  assert.equal(result.get(book.prefab)![1].icon, secondBp.icon);
  assert.deepEqual(build([secondDoc, bookDoc, changed], [book, secondBook], [bp, secondBp], identities), result);
  assert(compareBookBlueprintRecords({ ...bp, guid: -1 }, { ...bp, guid: 0 }) < 0);
});
test("owner, book and Blueprint identities and destinations must be exact and unambiguous", () => {
  assert.throws(() => build([owner, bookDoc], []), /missing or ambiguous items/);
  assert.throws(() => build([owner, bookDoc], [book, book]), /missing or ambiguous items/);
  assert.throws(() => build([owner, bookDoc], [{ ...book, guid: 1 }]), /identity mismatch/);
  assert.throws(() => build([owner, bookDoc], [{ ...book, path: "/db/items/wrong" }]), /destination mismatch/);
  assert.throws(() => build([owner, bookDoc], [book], []), /missing or ambiguous blueprints/);
  assert.throws(() => build([owner, bookDoc], [book], [bp, bp]), /missing or ambiguous blueprints/);
  assert.throws(() => build([owner, bookDoc], [book], [{ ...bp, path: "/db/items/bp-a-section" }]), /destination mismatch/);
  assert.throws(() => build([owner, bookDoc], [book], [bp], { ...all, Tech_Test: 1 }), /source identity mismatch/);
  assert.throws(() => build([{ ...owner, sourcePath: "wrong.md" }, bookDoc]), /source path mismatch/);
  assert.throws(() => build([owner]), /book ItemData/);
  assert.throws(() => build([owner, { ...bookDoc, components: new Map() }]), /book ItemData/);
  assert.throws(() => build([owner, bookDoc, bookDoc]), /book ItemData/);
  const malformed = copy(owner); malformed.components.get(bookUnlockComponent)!.entries[0].Guid = "BP_A-Section PrefabGuid(NaN)";
  assert.throws(() => build([malformed, bookDoc]), /Malformed/);
  const ineligible = copy(owner); ineligible.components.delete("ProjectM.TechData");
  assert.equal(build([ineligible, bookDoc]).size, 0);
});
test("independent reader preserves zero/negative GUIDs, hyphenated references and component boundaries", () => {
  const markdown = `title: Tech_Test\nguid: -9\n- [ProjectM.TechData](source)\n- [${bookRequirementComponent}](source)\n- **[0]**\n  - \`Guid: ${book.prefab} PrefabGuid(0)\`\n  - \`Stacks: 1\`\n- [${bookUnlockComponent}](source)\n- **[0]**\n  - \`Guid: ${bp.prefab} PrefabGuid(-2)\`\n- **ProjectM.Unrelated**\n- **[0]**\n  - \`Guid: BP_Bad PrefabGuid(99)\`\n`;
  assert.deepEqual(readBookBlueprintDocument(owner.sourcePath, markdown.replace(/\n/g, "\r\n")), owner);
  assert.throws(() => readBookBlueprintDocument(owner.sourcePath, markdown + markdown), /duplicate/);
  assert.throws(() => readBookBlueprintDocument(owner.sourcePath, markdown.replace("Stacks: 1", "Stacks: 1\`\n  - \`Stacks: 2")), /duplicate Stacks/);
});
test("independent validation rejects lost sources, fields, links and extra item claims", () => {
  const expected = build(), detail = { title: "Book", slug: book.slug, prefab: book.prefab, guid: 0, bookBlueprints: rows() };
  validateBookBlueprints([detail], expected);
  for (const field of ["path", "guid", "title", "icon"]) {
    const changed = rows(); changed[0][field] = "corrupt";
    assert.throws(() => validateBookBlueprints([{ ...detail, bookBlueprints: changed }], expected), /differ from independent/);
  }
  for (const field of ["amount", "prefab", "guid", "path", "sourcePath", "sourceComponent", "unlockSourceComponent"]) {
    const changed = rows(); changed[0].declaringSources[0][field] = "corrupt";
    assert.throws(() => validateBookBlueprints([{ ...detail, bookBlueprints: changed }], expected), /differ from independent/);
  }
  const changed = rows(); changed[0].declaringSources = [];
  assert.throws(() => validateBookBlueprints([{ ...detail, bookBlueprints: changed }], expected), /differ from independent/);
  assert.throws(() => validateBookBlueprints([], expected), /missing book item/);
  assert.throws(() => validateBookBlueprints([detail], new Map()), /unexpected book Blueprints/);
  validateBookBlueprints([{ title: "Unused", slug: "unused", prefab: "Item_Unused" }], new Map());
});

test("a frozen mapped scope excludes raw extras but cannot accept an unproven mapped edge", () => {
  const key = `${book.prefab}|0|Tech_Test|-9|${bp.prefab}|-2`;
  const lookup = indexBookBlueprintDestinations;
  assert.deepEqual(buildBookBlueprints([owner, bookDoc], lookup([book]), lookup([bp]), all, new Set([key])), build());
  assert.equal(buildBookBlueprints([owner, bookDoc], lookup([book]), lookup([bp]), all, new Set()).size, 0);
  assert.throws(() => buildBookBlueprints([owner, bookDoc], lookup([book]), lookup([bp]), all, new Set([key + "wrong"])), /lack exact retained-source proof/);
});
