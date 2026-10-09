import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { assertBlueprintTextDisplay, blueprintTextCoverage, blueprintTextFields, readBlueprintText, type BlueprintTextDisplay } from "./blueprint-text";
import type { DbEntityDetail, DbIndexEntry, DbRelatedEntityRef } from "../src/types/db";
export async function validateGeneratedBlueprintText(root: string) {
  const json = async <T,>(relative: string): Promise<T> => JSON.parse(await readFile(path.join(root, relative), "utf8"));
  const capture = await readBlueprintText(root);
  const map = await json<Record<string, BlueprintTextDisplay>>("data/enrichment/blueprint-display-map.json");
  assertBlueprintTextDisplay(map, capture);
  const coverage = await json<Record<string, unknown>>("data/enrichment/enrichment-coverage.json");
  assert.deepEqual(coverage["blueprint-display-map"], blueprintTextCoverage(map));
  const index = await json<DbIndexEntry[]>("public/data/db/blueprints/index.json");
  const search = await json<DbIndexEntry[]>("public/data/search.index.json");
  const destinations = new Map<string, { entry: DbIndexEntry; detail: DbEntityDetail }>();
  for (const row of capture.rows) {
    const matches = index.filter(entry => entry.tags?.includes(row.prefab));
    assert.equal(matches.length, 1, `${row.prefab}: ambiguous generated destination`);
    const entry = matches[0];
    const detail = await json<DbEntityDetail>(`public/data/db/blueprints/by-slug/${entry.slug}.json`);
    const expected = blueprintTextFields(row);
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
    destinations.set(row.prefab, { entry, detail });
  }
  let materialReferences = 0, bookReferences = 0; const itemOwners = new Set<string>();
  for (const name of await readdir(path.join(root, "public/data/db/items/by-slug"))) {
    const item = await json<DbEntityDetail>(`public/data/db/items/by-slug/${name}`);
    for (const field of ["materialBlueprints", "bookBlueprints"] as const) for (const ref of (item[field] ?? []) as DbRelatedEntityRef[]) {
      const target = destinations.get(ref.prefab); if (!target) continue;
      assert.equal(ref.title, target.entry.title); assert.equal(ref.guid, target.detail.guid);
      assert.equal(ref.path, target.entry.path); assert.equal(ref.slug, target.detail.slug);
      assert.equal(ref.icon, target.entry.portraitAssetPath);
      itemOwners.add(item.prefab!);
      if (field === "materialBlueprints") materialReferences++; else bookReferences++;
    }
  }
  assert.equal(materialReferences, 19); assert.equal(bookReferences, 1); assert.equal(itemOwners.size, 15);
  for (const prefab of ["BP_Castle_Chain_Plant_BleedingHeart", "BP_Castle_Debug_Room"]) {
    assert.equal(map[prefab].sourceKind, "generated-fallback");
    assert.equal(map[prefab].displayNameEn, undefined); assert.equal(map[prefab].summaryEn, "Blueprint record.");
  }
  return { names: 10, descriptions: 10, materialReferences, bookReferences, itemOwners: itemOwners.size };
}
