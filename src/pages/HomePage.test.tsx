import assert from "node:assert/strict";
import test from "node:test";
import { homeLandingBands } from "../config/home";

test("homepage gameplay cards include workstations without repeated gameplay eyebrows", () => {
  const gameplayBand = homeLandingBands.find((band) => band.id === "gameplay-data");
  assert.ok(gameplayBand);

  assert.equal(gameplayBand.title, "Gameplay Data");

  const byId = new Map(gameplayBand.items.map((item) => [item.id, item]));
  assert.equal(byId.get("workstations")?.to, "/db/workstations");
  assert.equal(byId.get("workstations")?.title, "Workstations");
  assert.equal(byId.get("workstations")?.actionLabel, "Open Workstations");
  assert.match(byId.get("workstations")?.description ?? "", /station roles/i);
  assert.match(byId.get("workstations")?.description ?? "", /matching floors/i);
  assert.match(byId.get("workstations")?.description ?? "", /servant bonuses/i);
  assert.match(byId.get("workstations")?.description ?? "", /recipes/i);
  assert.match(byId.get("workstations")?.description ?? "", /outputs/i);

  for (const id of ["abilities", "items", "npcs", "recipes"]) {
    assert.ok(byId.has(id), `Expected ${id} card to remain present`);
  }

  assert.deepEqual(
    gameplayBand.items.map((item) => item.eyebrow),
    ["Combat", "Inventory", "World", "Crafting", "Stations"]
  );

  assert.equal(gameplayBand.items.some((item) => item.eyebrow === "Gameplay Data"), false);
});
