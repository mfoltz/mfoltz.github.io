import assert from "node:assert/strict";
import test from "node:test";
import type { DbRelatedEntityRef } from "../src/types/db";
import { readGeneratedMaterialBlueprints } from "./material-blueprints-generated";
import { validateMaterialBlueprints } from "./material-blueprints";
test("all 1,470 backlinks reproduce retained requirements, quantities, identities and destinations", async () => {
  const { details, blueprints, docs, expected } = await readGeneratedMaterialBlueprints(process.cwd());
  validateMaterialBlueprints(details, expected);
  const rows = [...expected.values()].flat();
  assert.equal(expected.size, 96); assert.equal(rows.length, 1470);
  assert.equal(new Set(rows.map(row => row.prefab)).size, 1080);
  assert.equal(expected.get("Item_Ingredient_StoneBrick")?.length, 147);
  assert.equal(expected.get("Item_Ingredient_Plank")?.length, 143);
  assert.equal(expected.get("Item_Ingredient_Mineral_IronBar")?.length, 109);
  assert.equal(expected.get("Item_Ingredient_CarpetRoll")?.length, 107);
  assert.equal(expected.get("Item_BloodEssence_T01")?.length, 11);
  assert.equal(expected.get("Item_Vampire_Coating_Blood"), undefined);
  assert.equal(docs.filter(row => row.status === "empty").length, 117);
  assert.equal(docs.filter(row => row.status === "zero-valued").length, 1);
  assert.equal(blueprints.flatMap(row => row.heldBuildMaterialRows ?? []).length, 2);
  const targets = new Map(blueprints.map(row => [row.prefab, row]));
  for (const item of details) for (const use of (item.materialBlueprints ?? []) as DbRelatedEntityRef[]) {
    const target = targets.get(use.prefab)!;
    assert.equal(target.guid, use.guid); assert.equal(target.portraitAssetPath, use.icon);
    assert.equal(use.sourcePath, target.sourcePath);
    assert.equal(target.buildMaterials!.filter(row => row.prefab === item.prefab && row.guid === item.guid && row.amount === use.amount).length, 1);
  }
});
