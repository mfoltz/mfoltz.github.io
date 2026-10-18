import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { activeCompletionRows, completionActivationCount, completionExpectedCounts, completionTextFields,
  hasCompletionName, readCompletion } from "./blueprint-text-completion";
import type { DbEntityDetail, DbIndexEntry, DbRelatedEntityRef } from "../src/types/db";
import type { BlueprintTextDisplay } from "./blueprint-text";
export async function validateGeneratedCompletion(root: string) {
  const json = async <T,>(file: string): Promise<T> => JSON.parse(await readFile(path.join(root, file), "utf8"));
  const evidence = await readCompletion(root), rows = activeCompletionRows(evidence);
  const map = await json<Record<string, BlueprintTextDisplay>>("data/enrichment/blueprint-display-map.json");
  const index = await json<DbIndexEntry[]>("public/data/db/blueprints/index.json");
  const search = await json<DbIndexEntry[]>("public/data/search.index.json");
  const targets = new Map<string, { row: typeof rows[number]; entry: DbIndexEntry; detail: DbEntityDetail }>();
  for (const row of rows) {
    const matches = index.filter(r => r.tags?.includes(row.prefab)); assert.equal(matches.length, 1);
    const entry = matches[0], detail = await json<DbEntityDetail>("public/data/db/blueprints/by-slug/" + entry.slug + ".json");
    assert.equal(entry.path, row.path); assert.equal(detail.prefab, row.prefab); assert.equal(detail.guid, row.guid);
    assert.equal(detail.sourcePath, row.sourcePath); assert.equal(entry.path, "/db/blueprints/" + detail.slug);
    const fields = completionTextFields(row);
    for (const [key, value] of Object.entries(fields)) assert.equal(map[row.prefab][key as keyof BlueprintTextDisplay], value);
    if (fields.displayNameEn !== undefined) {
      assert.equal(detail.title, fields.displayNameEn); assert.equal(entry.title, fields.displayNameEn);
      assert.equal(detail.subtitle, row.prefab);
      assert.equal(detail.localizedDisplayNameEn, fields.displayNameEn); assert.equal(detail.localizedDisplayGuid, row.name.Key);
    } else {
      assert.equal(map[row.prefab].displayNameEn, undefined); assert.equal(detail.localizedDisplayNameEn, undefined);
      assert.equal(detail.localizedDisplayGuid, undefined); assert.equal(detail.title, entry.title);
    }
    const searchRows = search.filter(r => r.path === row.path); assert.equal(searchRows.length, 1);
    assert.equal(searchRows[0].title, detail.title);
    for (const id of [row.prefab, String(row.guid)]) assert(entry.tags?.includes(id) && searchRows[0].tags?.includes(id));
    if (fields.summaryEn !== undefined) {
      for (const text of [detail.description, detail.localizedSummaryEn, entry.description]) assert.equal(text, fields.summaryEn);
      assert.equal(searchRows[0].excerpt, fields.summaryEn.slice(0, 220));
      assert.equal(detail.descriptionSourceKind, fields.sourceKind); assert.equal(detail.descriptionSourceRef, fields.sourceRef);
      assert(!/[<>{}\\]/.test(detail.description!), "Only complete normalized native copy may reach the detail");
    } else {
      assert.equal(detail.description, undefined); assert.equal(detail.descriptionSourceKind, undefined);
      assert.equal(detail.descriptionSourceRef, undefined);
    }
    const source = await json<{ relationGroups: { title: string; items: { title: string; path?: string }[] }[] }>(
      "public/data/reference/prefabs/by-slug/" + detail.prefabPath!.split("/").at(-1) + ".json");
    const refs = source.relationGroups.filter(g => g.title === "DB Records").flatMap(g => g.items).filter(r => r.path === row.path);
    assert.equal(refs.length, 1); assert.equal(refs[0].title, detail.title);
    targets.set(row.prefab, { row, entry, detail });
  }
  let materialLabels = 0, bookLabels = 0;
  const owners = new Set<string>();
  for (const filename of await readdir(path.join(root, "public/data/db/items/by-slug"))) {
    const item = await json<DbEntityDetail>("public/data/db/items/by-slug/" + filename);
    for (const field of ["materialBlueprints", "bookBlueprints"] as const)
      for (const ref of (item[field] ?? []) as DbRelatedEntityRef[]) {
        const target = targets.get(ref.prefab); if (!target || !hasCompletionName(target.row)) continue;
        assert.equal(ref.guid, target.detail.guid); assert.equal(ref.title, target.entry.title);
        assert.equal(ref.slug, target.detail.slug); assert.equal(ref.path, target.entry.path);
        assert.equal(ref.icon, target.entry.portraitAssetPath);
        owners.add(item.prefab!); if (field === "materialBlueprints") materialLabels++; else bookLabels++;
      }
  }
  const owned = Object.values(map).filter(r => r.sourceKind === "extractor-raw" && r.sourceRef?.startsWith("data/enrichment/blueprint-text-"));
  assert.equal(owned.filter(r => r.displayNameEn).length, completionExpectedCounts.names);
  assert.equal(owned.filter(r => r.summaryEn && r.summaryEn !== "Blueprint record.").length, completionExpectedCounts.descriptions);
  assert.equal(owned.filter(r => r.displayNameEn && r.summaryEn && r.summaryEn !== "Blueprint record.").length, completionExpectedCounts.pairs);
  if (completionActivationCount === 270) {
    assert.equal(materialLabels, 341); assert.equal(bookLabels, 109); assert.equal(owners.size, 75);
    const tower = await json<DbEntityDetail>("public/data/db/blueprints/by-slug/tm-castle-outer-walls-towerl01.json");
    assert.equal(tower.guid, 754211521); assert.equal(tower.description, undefined);
    assert.equal(tower.localizedDisplayNameEn, undefined); assert.equal(tower.localizedDisplayGuid, undefined);
  }
  return { ...completionExpectedCounts, materialLabels, bookLabels, itemOwners: owners.size };
}
