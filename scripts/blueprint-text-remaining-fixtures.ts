import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { DbEntityDetail, DbIndexEntry } from "../src/types/db";
export const remainingItemReviewPins = [
  { prefab: "Item_Ingredient_StoneBrick", guid: 1788016417, slug: "item-ingredient-stone-brick" },
  { prefab: "Item_BloodEssence_T01", guid: 862477668, slug: "item-blood-essence-t01" },
  { prefab: "Item_Ingredient_Mineral_IronBar", guid: -1750550553, slug: "item-ingredient-mineral-iron-bar" },
  { prefab: "Item_Ingredient_Book_Structure_Paintings_T01", guid: 38319072, slug: "item-ingredient-book-structure-paintings-t01" }
] as const;
type Pin = typeof remainingItemReviewPins[number];
export function assertRemainingReviewItem(pin: Pin, entries: DbIndexEntry[], detail: DbEntityDetail,
  canonical: Record<string, number>) {
  const matches = entries.filter(entry => entry.tags?.includes(pin.prefab));
  assert.equal(matches.length, 1, pin.prefab + ": missing/ambiguous review fixture");
  const entry = matches[0];
  assert.equal(entry.slug, pin.slug); assert.equal(entry.path, "/db/items/" + pin.slug);
  assert(entry.tags?.includes(String(pin.guid)), "Review fixture GUID tag mismatch");
  assert.equal(detail.slug, pin.slug); assert.equal(detail.prefab, pin.prefab); assert.equal(detail.guid, pin.guid);
  assert.equal(detail.sourcePath, "content/prefabs/" + pin.prefab + ".md");
  assert.equal(canonical[pin.prefab], pin.guid, "Review fixture canonical GUID mismatch");
  return entry;
}
export async function readRemainingReviewItems(root: string) {
  const json = async <T,>(relative: string): Promise<T> => JSON.parse(await readFile(path.join(root, relative), "utf8"));
  const entries = await json<DbIndexEntry[]>("public/data/db/items/index.json");
  const canonical = await json<Record<string, number>>("data/prefabs/All.json");
  return Promise.all(remainingItemReviewPins.map(async pin => {
    const detail = await json<DbEntityDetail>("public/data/db/items/by-slug/" + pin.slug + ".json");
    const entry = assertRemainingReviewItem(pin, entries, detail, canonical);
    return { id: entry.slug, route: entry.path, detail };
  }));
}
