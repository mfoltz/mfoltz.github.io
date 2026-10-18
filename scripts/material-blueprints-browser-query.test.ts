import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import type { DbEntityDetail, DbRelatedEntityRef } from "../src/types/db";
import { filterMaterialBlueprints } from "../src/lib/materialBlueprintBrowse";

const detail = JSON.parse(await readFile("public/data/db/items/by-slug/item-ingredient-stone-brick.json", "utf8")) as DbEntityDetail;
const refs = detail.materialBlueprints as DbRelatedEntityRef[];
const fixture = refs.find(row => row.prefab === "TM_Castle_Floor_Treasury01")!;

test("the real artwork fixture has an ambiguous prefab-prefix search", () => {
  assert.equal(fixture.guid, -1887758253);
  assert.equal(fixture.amount, 4);
  assert.equal(fixture.path, "/db/blueprints/tm-castle-floor-treasury01");
  assert(fixture.icon?.startsWith("/icons/buildables/"));
  assert.deepEqual(filterMaterialBlueprints(refs, fixture.prefab).map(row => row.prefab), [
    fixture.prefab, "TM_Castle_Floor_Treasury01_DLCStrongblade01"
  ]);
});

test("prefab plus signed GUID preserves the exact artwork identity, quantity and destination", () => {
  assert.deepEqual(filterMaterialBlueprints(refs, fixture.prefab + " " + fixture.guid), [fixture]);
  assert.deepEqual(filterMaterialBlueprints(refs, "  " + fixture.prefab.toUpperCase() + "\t" + fixture.guid + " "), [fixture]);
  assert.deepEqual(filterMaterialBlueprints(refs, fixture.prefab + " -773919175"), [refs.find(row => row.guid === -773919175)]);
  assert.deepEqual(filterMaterialBlueprints(refs, fixture.prefab + " -1887758254"), []);
});

test("the browser failure fixture qualifies its search without weakening measured identities", async () => {
  const harness = await readFile("scripts/material-blueprints-visual-check.ts", "utf8");
  assert(harness.includes('encodeURIComponent(`' + '${art.prefab} ${art.guid}' + '`)'));
  assert(harness.includes("await measure(page, [art]);"));
  assert(harness.includes("assert(failures > 0);"));
});
