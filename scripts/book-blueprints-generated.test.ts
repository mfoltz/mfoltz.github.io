import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { readGeneratedBookBlueprints } from "./book-blueprints-generated";
import { readBookBlueprintDocument, validateBookBlueprints } from "./book-blueprints";

test("all reverse links reproduce retained requirements and existing forward links without quantity promotion", async () => {
  const { details, expected, map } = await readGeneratedBookBlueprints(process.cwd());
  validateBookBlueprints(details, expected);
  const rows = [...expected.values()].flat();
  assert.equal(expected.size, 72); assert.equal(rows.length, 429);
  assert.equal(new Set(rows.map(row => row.prefab)).size, 424);
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

test("all 38 recovered hyphenated source edges retain exact identities and book ownership", async () => {
  const pins: Array<{ source: string; sourceGuid: number; target: string; guid: number; book: string | null }> =
    JSON.parse(await readFile("scripts/fixtures/blueprint-hyphen-links.json", "utf8"));
  const { expected, map, blueprints } = await readGeneratedBookBlueprints(process.cwd());
  assert.equal(pins.length, 38); assert.equal(pins.filter(pin => pin.book).length, 28);
  assert.equal(new Set(pins.map(pin => pin.target)).size, 38);
  assert.equal(Object.keys(map.entriesByPrefab).length, 933);
  const edges = Object.values(map.entriesByPrefab).flatMap(row => row.unlockSources);
  assert.equal(edges.length, 970); assert.equal(new Set(edges.map(row => row.sourcePrefab)).size, 174);
  for (const pin of pins) {
    const sources = map.entriesByPrefab[pin.target].unlockSources;
    assert.equal(sources.length, 1);
    const source = sources[0], sourcePath = `content/prefabs/${pin.source}.md`;
    const doc = readBookBlueprintDocument(sourcePath, await readFile(sourcePath, "utf8"));
    assert.equal(doc.guid, pin.sourceGuid); assert(doc.components.has("ProjectM.TechData"));
    assert.equal(source.sourcePrefab, pin.source); assert.equal(source.sourceGuid, pin.sourceGuid);
    assert.equal(source.sourcePath, sourcePath); assert.equal(source.targetBlueprintGuid, pin.guid);
    assert.equal(source.sourceComponent, "ProjectM.TechUnlockBlueprintBuffer");
    assert.equal(doc.components.get(source.sourceComponent)!.entries.filter(row => row.Guid === `${pin.target} PrefabGuid(${pin.guid})`).length, 1);
    const target = blueprints.filter(row => row.prefab === pin.target);
    assert.equal(target.length, 1); assert.equal(target[0].guid, pin.guid);
    if (pin.book) {
      assert(source.requiredBooks?.length === 1); assert.equal(source.requiredBooks[0].prefab, pin.book);
      assert.equal(source.requiredBooks[0].amount, 1);
      const reverse = expected.get(pin.book)!.filter(row => row.prefab === pin.target);
      assert.equal(reverse.length, 1); assert.equal(reverse[0].guid, pin.guid);
      assert.equal(reverse[0].declaringSources.length, 1); assert.equal(reverse[0].declaringSources[0].amount, 1);
    } else {
      assert.equal(source.requiredBooks, undefined);
      assert(![...expected.values()].flat().some(row => row.prefab === pin.target), "No invented book backlink for a DLC/framework source");
    }
  }
});
