import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import type { DbEntityDetail, DbIndexEntry, DbRelatedEntityRef } from "../src/types/db";
import { buildIngredientRecipes, indexIngredientDestinations, readIngredientRecipeDocument,
  validateIngredientRecipes } from "./ingredient-recipes";

test("the retained ingredient census joins every generated backlink and forward requirement", async () => {
  const json = async <T,>(file: string): Promise<T> => JSON.parse(await readFile(file, "utf8"));
  const sections = await Promise.all(["items", "recipes"].map(async section => {
    const index = await json<DbIndexEntry[]>(`public/data/db/${section}/index.json`);
    const details = await Promise.all(index.map(entry => json<DbEntityDetail>(`public/data/db/${section}/by-slug/${entry.slug}.json`)));
    const destinations = index.map((entry, i) => ({ title: entry.title, prefab: details[i].prefab!,
      guid: details[i].guid ?? null, slug: entry.slug, path: entry.path, icon: entry.icon }));
    return { index, details, destinations };
  }));
  const [items, recipes] = sections;
  const docs = await Promise.all(recipes.details.map(async detail =>
    readIngredientRecipeDocument(detail.sourcePath!, await readFile(detail.sourcePath!, "utf8"))));
  const expected = buildIngredientRecipes(docs, indexIngredientDestinations(items.destinations),
    indexIngredientDestinations(recipes.destinations), await json<Record<string, number>>("data/prefabs/All.json"));
  validateIngredientRecipes(items.details, expected);
  assert.equal(expected.size, 221);
  assert.equal([...expected.values()].reduce((count, rows) => count + rows.length, 0), 1385);
  assert.equal(new Set([...expected.values()].flat().map(row => row.prefab)).size, 664);
  assert.equal(expected.get("Item_Ingredient_Mineral_IronBar")?.length, 88);
  const recipesByPrefab = new Map(recipes.details.map(detail => [detail.prefab, detail]));
  for (const item of items.details) {
    for (const use of (item.ingredientRecipes ?? []) as DbRelatedEntityRef[]) {
      const forward = recipesByPrefab.get(use.prefab)?.requirements as DbRelatedEntityRef[];
      assert.equal(forward.filter(row => row.prefab === item.prefab && row.guid === item.guid && row.amount === use.amount).length, 1);
    }
  }
  assert.equal(expected.get("Item_Boots_T01_Bone")?.length, 1);
  assert.equal(expected.get("Item_Ingredient_Emberglass")?.length, 3);
  assert.equal(expected.get("Item_Vampire_Coating_Blood"), undefined);
});
