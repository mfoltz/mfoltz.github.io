import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { readApprovedBlueprintText, blueprintTextBuildRows } from "./approved-blueprint-text";
import type { DbEntityDetail, DbIndexEntry } from "../src/types/db";

test("workstation output reuses 121 approved names and 119 descriptions without changing destinations", async () => {
  const json = async <T,>(p: string): Promise<T> => JSON.parse(await readFile(path.join(process.cwd(), p), "utf8"));
  const owned = new Map(blueprintTextBuildRows(await readApprovedBlueprintText(process.cwd())).map(row => [row.prefab, row]));
  const index = await json<DbIndexEntry[]>("public/data/db/workstations/index.json");
  let names = 0, descriptions = 0, vendors = 0;
  for (const entry of index) {
    const detail = await json<DbEntityDetail>(`public/data/db/workstations/by-slug/${entry.slug}.json`);
    const row = owned.get(detail.prefab!);
    assert.equal(entry.path, `/db/workstations/${detail.slug}`);
    if (!row) { assert.equal(detail.workstationRole, "Vendor"); vendors++; continue; }
    assert.equal(detail.guid, row.guid); assert.equal(detail.sourcePath, row.sourcePath);
    const fields = row.fields;
    assert.equal(entry.title, fields.displayNameEn); assert.equal(detail.title, fields.displayNameEn);
    assert.equal(detail.localizedDisplayGuid, fields.displayLocalizationGuid);
    assert.equal(detail.nameSourceRef, fields.sourceRef); names++;
    assert(entry.tags?.includes(row.prefab)); assert(entry.tags?.includes(String(row.guid)));
    if (fields.summaryEn !== undefined) {
      assert.equal(entry.description, fields.summaryEn); assert.equal(detail.description, fields.summaryEn);
      assert.equal(entry.excerpt, fields.summaryEn.slice(0, 220));
      assert.equal(detail.descriptionSourceRef, fields.sourceRef); descriptions++;
    } else {
      assert.equal(detail.descriptionSourceRef, undefined);
      assert.match(detail.description!, /workstation record with player-facing naming/);
    }
  }
  assert.deepEqual({ records: index.length, names, descriptions, vendors }, { records: 136, names: 121, descriptions: 119, vendors: 15 });
  for (const [slug, alias] of [["tm-crafting-station-blood-mixer", "Blood Mixer"],
    ["tm-refinement-station-fabricator", "Refinement Station Fabricator"],
    ["tm-crafting-station-alchemy-lab-small", "Alchemy Lab Small"]]) {
    assert(index.find(entry => entry.slug === slug)?.tags?.includes(alias), alias);
  }
});
