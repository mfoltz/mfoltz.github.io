import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { applyRuntimeBlueprintArtwork, readBlueprintIconCapture, runtimeBlueprintArtworkPrefabs, validateBlueprintIconCapture } from "./blueprint-runtime-artwork";
import { selectReviewedBuildableAssets, type BuildablePortraitReviewSnapshot } from "./buildable-portrait-review";
import type { BuildablePortraitMapSnapshot } from "./buildable-portraits";

const allPrefabs = JSON.parse(readFileSync("data/prefabs/All.json", "utf8")) as Record<string, number>;
const capture = readBlueprintIconCapture(allPrefabs);
const wood = capture.rows.filter(row => row.prefab.endsWith("_Tier01_Wood_Entrance"));
const review: BuildablePortraitReviewSnapshot = {
  schemaVersion: 1, sourceKind: "reviewed-buildable-portrait-assets", reviewNote: "Captured Sprite identity; pinned original PNGs.",
  entries: wood.map(row => ({ prefab: row.prefab, guid: row.guid, sourceRef: `Texture2D/${row.spriteName}.png`,
    sha256: "a".repeat(64), evidenceKind: "runtime-sprite-name", runtimeIconAssetGuid: row.iconAssetGuid!, spriteSha256: "b".repeat(64) }))
};
const emptyMap: BuildablePortraitMapSnapshot = { schemaVersion: 1, sourceKind: "provisional-buildable-portrait-map",
  sourceRef: "data/enrichment/buildable-portrait-candidates.json", totalCurrentBuildableRows: 3928, entriesByPrefab: {} };

test("the pinned native snapshot has 58 exact identities and nine authorized artwork subjects", () => {
  assert.equal(capture.rows.length, 58);
  assert.equal(new Set(capture.rows.map(row => row.iconAssetGuid)).size, 57);
  assert.equal(runtimeBlueprintArtworkPrefabs.length, 9);
  assert(runtimeBlueprintArtworkPrefabs.every(prefab => capture.rows.some(row => row.prefab === prefab)));
});

test("reject stale GUIDs, duplicate identities, unknown states, conflicts and inconsistent counts", () => {
  for (const change of [
    (copy: typeof capture) => { copy.rows[0].guid++; },
    (copy: typeof capture) => { copy.rows[1] = { ...copy.rows[0] }; },
    (copy: typeof capture) => { copy.rows[0].status = "asset-not-loaded"; },
    (copy: typeof capture) => { copy.rows[1].iconAssetGuid = copy.rows[0].iconAssetGuid; },
    (copy: typeof capture) => { copy.resolvedCount--; }
  ]) {
    const copy = structuredClone(capture); change(copy);
    assert.throws(() => validateBlueprintIconCapture(copy, allPrefabs));
  }
});

test("shared wood artwork requires the same captured icon GUID, Sprite destination and hashes", () => {
  const map = applyRuntimeBlueprintArtwork(review, emptyMap, allPrefabs);
  const assets = selectReviewedBuildableAssets(review, map, allPrefabs);
  assert.equal(assets.length, 2);
  assert.equal(new Set(assets.map(asset => asset.publicPath)).size, 1);
  for (const change of [{ runtimeIconAssetGuid: "0".repeat(32) }, { sourceRef: "Texture2D/Stunlock_Icon_Structure_Guessed.png" },
    { sha256: "c".repeat(64) }, { spriteSha256: "c".repeat(64) }]) {
    const changed = { ...review, entries: [review.entries[0], { ...review.entries[1], ...change }] };
    assert.throws(() => selectReviewedBuildableAssets(changed, map, allPrefabs));
  }
});

test("native overlays reject artwork outside the approved nine and preserve unrelated entries", () => {
  const unrelated = { prefab: "Unrelated", guid: 7, portraitAssetName: "Held.png", portraitAssetFamily: "held",
    joinStatus: "source-backed" as const, evidenceRefs: [] };
  const map = applyRuntimeBlueprintArtwork(review, { ...emptyMap, entriesByPrefab: { Unrelated: unrelated } }, allPrefabs);
  assert.deepEqual(map.entriesByPrefab.Unrelated, unrelated);
  const outside = capture.rows.find(row => !runtimeBlueprintArtworkPrefabs.includes(row.prefab as typeof runtimeBlueprintArtworkPrefabs[number]))!;
  assert.throws(() => applyRuntimeBlueprintArtwork({ ...review, entries: [{ ...review.entries[0], prefab: outside.prefab,
    guid: outside.guid, runtimeIconAssetGuid: outside.iconAssetGuid!, sourceRef: `Texture2D/${outside.spriteName}.png` }] }, emptyMap, allPrefabs), /outside/);
});
