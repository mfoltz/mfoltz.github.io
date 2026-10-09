import assert from "node:assert/strict";
import { test } from "node:test";
import { getBlueprintVisualFixtures } from "./blueprint-visual-fixtures";
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
