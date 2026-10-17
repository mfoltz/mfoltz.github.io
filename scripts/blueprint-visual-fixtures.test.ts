import assert from "node:assert/strict";
import { test } from "node:test";
import { getBlueprintVisualFixtures, blueprintVisualIdentityPins } from "./blueprint-visual-fixtures";
import { vrisingVisualReviewConfig } from "./visual-review-config";

test("owned localized subtitles preserve the original Anvil artwork capture identity", () => {
  const fixtures = getBlueprintVisualFixtures();
  assert.equal(fixtures.entries.find(row => row.slug === "tm-unit-station-nether-gate")?.subtitle, "TM_UnitStation_NetherGate");
  assert.equal(fixtures.artwork.path, "/db/blueprints/tm-crafting-station-anvil");
  assert.equal(fixtures.artwork.tags?.[0], "TM_CraftingStation_Anvil");
  assert(fixtures.artwork.tags?.includes("-437790980"));
  assert(fixtures.artwork.portraitAssetPath);
  assert.equal(vrisingVisualReviewConfig.captures.find(row => row.id === "db-blueprint-artwork-detail")?.path, fixtures.artwork.path);
});


test("all accepted fixture identities survive title and subtitle changes", () => {
  const fixtures = getBlueprintVisualFixtures();
  const actual = { linkedBooks: fixtures.linkedBooks, linkedNoBooks: fixtures.linkedNoBooks, unlinked: fixtures.unlinked,
    starter: fixtures.starter, materials: fixtures.materials, artwork: fixtures.artwork, emptyMaterials: fixtures.emptyMaterials,
    heldMaterials: fixtures.heldMaterials, castleArtworkStairs: fixtures.castleArtwork.find(row => row.category === "Stairs")!.entry,
    castleArtworkFloor: fixtures.castleArtwork.find(row => row.category === "Floor")!.entry,
    castleArtworkWall: fixtures.castleArtwork.find(row => row.category === "Wall")!.entry };
  for (const name of Object.keys(blueprintVisualIdentityPins) as (keyof typeof blueprintVisualIdentityPins)[]) {
    const [prefab, guid, destination] = blueprintVisualIdentityPins[name];
    assert.equal(actual[name].path, destination); assert.equal(actual[name].tags?.[0], prefab);
    assert(actual[name].tags?.includes(String(guid)));
  }
});
