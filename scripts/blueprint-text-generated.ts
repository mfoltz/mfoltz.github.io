import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import type { BlueprintTextDisplay } from "./blueprint-text";
import { assertApprovedBlueprintTextDisplay, approvedBlueprintTextCoverage, readApprovedBlueprintText } from "./approved-blueprint-text";
import type { DbEntityDetail, DbIndexEntry, DbRelatedEntityRef } from "../src/types/db";
export async function validateGeneratedBlueprintText(root: string) {
  const json = async <T,>(relative: string): Promise<T> => JSON.parse(await readFile(path.join(root, relative), "utf8"));
  const capture = await readApprovedBlueprintText(root);
  const map = await json<Record<string, BlueprintTextDisplay>>("data/enrichment/blueprint-display-map.json");
  assertApprovedBlueprintTextDisplay(map, capture);
  const coverage = await json<Record<string, unknown>>("data/enrichment/enrichment-coverage.json");
  assert.deepEqual(coverage["blueprint-display-map"], approvedBlueprintTextCoverage(map));
  const index = await json<DbIndexEntry[]>("public/data/db/blueprints/index.json");
  const search = await json<DbIndexEntry[]>("public/data/search.index.json");
  const destinations = new Map<string, { entry: DbIndexEntry; detail: DbEntityDetail }>();
  for (const row of capture.rows) {
    const matches = index.filter(entry => entry.tags?.includes(row.prefab));
    assert.equal(matches.length, 1, `${row.prefab}: ambiguous generated destination`);
    const entry = matches[0];
    const detail = await json<DbEntityDetail>(`public/data/db/blueprints/by-slug/${entry.slug}.json`);
    const expected = row.fields;
    if (row.path) assert.equal(entry.path, row.path);
    assert.equal(detail.prefab, row.prefab); assert.equal(detail.guid, row.guid);
    assert.equal(detail.sourcePath, row.sourcePath); assert.equal(entry.path, `/db/blueprints/${detail.slug}`);
    assert.equal(entry.title, row.nameRaw); assert.equal(detail.title, row.nameRaw);
    assert.equal(entry.subtitle, row.prefab); assert.equal(detail.subtitle, row.prefab);
    assert.equal(entry.description, expected.summaryEn); assert.equal(detail.description, expected.summaryEn);
    assert.equal(detail.localizedDisplayNameEn, row.nameRaw); assert.equal(detail.localizedDisplayGuid, row.nameKey);
    assert.equal(detail.localizedSummaryEn, expected.summaryEn);
    assert.equal(detail.descriptionSourceKind, expected.sourceKind); assert.equal(detail.descriptionSourceRef, expected.sourceRef);
    const searchRows = search.filter(candidate => candidate.path === entry.path);
    assert.equal(searchRows.length, 1); assert.equal(searchRows[0].title, row.nameRaw);
    assert.equal(searchRows[0].excerpt, expected.summaryEn.slice(0, 220));
    for (const token of [row.prefab, String(row.guid)]) assert(entry.tags?.includes(token) && searchRows[0].tags?.includes(token));
    const source = await json<{ relationGroups: { title: string; items: { path?: string; title: string }[] }[] }>(
      "public/data/reference/prefabs/by-slug/" + detail.prefabPath!.split("/").at(-1) + ".json");
    const backlinks = source.relationGroups.filter(group => group.title === "DB Records").flatMap(group => group.items)
      .filter(link => link.path === entry.path);
    assert.equal(backlinks.length, 1); assert.equal(backlinks[0].title, row.nameRaw);
    destinations.set(row.prefab, { entry, detail });
  }
  let materialReferences = 0, bookReferences = 0, newMaterialReferences = 0, newBookReferences = 0;
  let remainingMaterialReferences = 0, remainingBookReferences = 0;
  const remainingOwners = new Set<string>(), remainingPrefabs = new Set(capture.remaining.rows.map(row => row.prefab));
  const itemOwners = new Set<string>(), newItemOwners = new Set<string>();
  const expansionPrefabs = new Set(capture.expansion.rows.map(row => row.prefab));
  for (const name of await readdir(path.join(root, "public/data/db/items/by-slug"))) {
    const item = await json<DbEntityDetail>(`public/data/db/items/by-slug/${name}`);
    for (const field of ["materialBlueprints", "bookBlueprints"] as const) for (const ref of (item[field] ?? []) as DbRelatedEntityRef[]) {
      const target = destinations.get(ref.prefab); if (!target) continue;
      assert.equal(ref.title, target.entry.title); assert.equal(ref.guid, target.detail.guid);
      assert.equal(ref.path, target.entry.path); assert.equal(ref.slug, target.detail.slug);
      assert.equal(ref.icon, target.entry.portraitAssetPath);
      itemOwners.add(item.prefab!);
      if (field === "materialBlueprints") materialReferences++; else bookReferences++;
      if (remainingPrefabs.has(ref.prefab)) {
        remainingOwners.add(item.prefab!);
        if (field === "materialBlueprints") remainingMaterialReferences++; else remainingBookReferences++;
      }
      if (expansionPrefabs.has(ref.prefab)) {
        newItemOwners.add(item.prefab!);
        if (field === "materialBlueprints") newMaterialReferences++; else newBookReferences++;
      }
    }
  }
  assert.equal(materialReferences, 909); assert.equal(bookReferences, 316); assert.equal(itemOwners.size, 104);
  assert.equal(remainingMaterialReferences, 824); assert.equal(remainingBookReferences, 283); assert.equal(remainingOwners.size, 67);
  assert.equal(newMaterialReferences, 66); assert.equal(newBookReferences, 32); assert.equal(newItemOwners.size, 43);
  for (const prefab of ["BP_Castle_Chain_Plant_BleedingHeart", "BP_Castle_Debug_Room"]) {
    const owned = capture.expansion.rows.find(row => row.prefab === prefab)!;
    assert.equal(map[prefab].sourceKind, "extractor-raw"); assert.equal(map[prefab].displayNameEn, owned.nameRaw);
    assert.equal(map[prefab].summaryEn, owned.native.text);
  }
  return { names: 838, descriptions: 838, materialReferences, bookReferences, itemOwners: itemOwners.size,
    newMaterialReferences, newBookReferences, newItemOwners: newItemOwners.size, remainingMaterialReferences, remainingBookReferences, remainingItemOwners: remainingOwners.size };
}
