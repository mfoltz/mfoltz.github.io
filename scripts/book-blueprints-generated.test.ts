import assert from "node:assert/strict";
import test from "node:test";
import { readGeneratedBookBlueprints } from "./book-blueprints-generated";
import { validateBookBlueprints } from "./book-blueprints";

test("all reverse links reproduce retained requirements and existing forward links without quantity promotion", async () => {
  const { details, expected, map } = await readGeneratedBookBlueprints(process.cwd());
  validateBookBlueprints(details, expected);
  const rows = [...expected.values()].flat();
  assert.equal(expected.size, 72); assert.equal(rows.length, 401);
  assert.equal(new Set(rows.map(row => row.prefab)).size, 396);
  assert.equal(Math.max(...[...expected.values()].map(rows => rows.length)), 49);
  const requirements = new Map<string, number | undefined>();
  for (const [book, refs] of expected) for (const ref of refs) {
    assert(!("amount" in ref));
    for (const owner of ref.declaringSources) {
      requirements.set(`${book}|${owner.prefab}`, owner.amount);
      const forward = map.entriesByPrefab[ref.prefab].unlockSources.filter(source => source.sourcePrefab === owner.prefab);
      assert.equal(forward.length, 1);
      assert.equal(forward[0].sourceGuid, owner.guid);
      assert.equal(forward[0].sourcePath, owner.sourcePath);
      assert.equal(forward[0].sourceComponent, owner.unlockSourceComponent);
      assert.equal(forward[0].requiredBooks?.filter(row => row.prefab === book && row.amount === owner.amount).length, 1);
    }
  }
  assert.equal(requirements.size, 74); assert([...requirements.values()].every(amount => amount === 1));
  const carpets = expected.get("Item_Ingredient_Book_Structure_Carpets_T01")!;
  assert.equal(new Set(carpets.flatMap(row => row.declaringSources.map(owner => owner.prefab))).size, 3);
  assert.equal(expected.get("Item_Vampire_Coating_Blood"), undefined);
});
