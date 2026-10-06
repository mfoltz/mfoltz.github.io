import assert from "node:assert/strict";
import test from "node:test";
import { filterMaterialBlueprints, resolveMaterialBlueprintsShown, materialBlueprintParams } from "./materialBlueprintBrowse";
const items = [{ title: "Complete Cross-Section Title", prefab: "BP_Long_Cross-Section", guid: -12 },
  { title: "Other", prefab: "BP_Zero", guid: 0 }, { title: "Missing", prefab: "BP_Null", guid: null }];
test("full-list search matches all terms across complete title/prefab/GUID", () => {
  assert.deepEqual(filterMaterialBlueprints(items, "  CROSS-section \t -12"), [items[0]]);
  assert.deepEqual(filterMaterialBlueprints(items, "zero 0"), [items[1]]);
  assert.deepEqual(filterMaterialBlueprints(items, "zero -12"), []);
  assert.deepEqual(filterMaterialBlueprints(items, "  "), items);
});
test("shown counts safely default/clamp and URL state preserves the other groups", () => {
  for (const value of [null, "garbage", "-12", "0", "11", "2.5", "Infinity", "9007199254740992"]) assert.equal(resolveMaterialBlueprintsShown(value, 147), 12);
  assert.equal(resolveMaterialBlueprintsShown("9999", 147), 147); assert.equal(resolveMaterialBlueprintsShown("24", 147), 24);
  assert.equal(resolveMaterialBlueprintsShown(null, 3), 3); assert.equal(resolveMaterialBlueprintsShown("24", 0), 0);
  const params = new URLSearchParams("usesQ=iron&usesShown=36&bookQ=wall&bookShown=24&keep=yes&buildShown=48");
  const next = materialBlueprintParams(params, "Cross -12");
  assert.equal(next.get("buildQ"), "Cross -12"); assert.equal(next.get("buildShown"), null);
  for (const key of ["usesQ", "usesShown", "bookQ", "bookShown", "keep"]) assert.equal(next.get(key), params.get(key));
  assert.equal(params.get("buildShown"), "48"); assert.equal(materialBlueprintParams(next, "", 24).get("buildShown"), "24");
  assert.equal(materialBlueprintParams(next, " ").get("buildQ"), null);
});
