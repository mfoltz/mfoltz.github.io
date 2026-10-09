import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import type { DbEntityDetail, DbIndexEntry } from "../src/types/db";
import { runtimeBlueprintArtworkPrefabs } from "./blueprint-runtime-artwork";

/** Pick representative records by source identity, independent of browse sorting. */
export function getBlueprintVisualFixtures() {
  const entries = JSON.parse(readFileSync("public/data/db/blueprints/index.json", "utf8")) as DbIndexEntry[];
  const sorted = [...entries].sort((a, b) => (a.subtitle ?? a.slug).localeCompare(b.subtitle ?? b.slug));
  const linkedBooks = sorted.find((entry) => (entry.linkedBookCount ?? 0) > 0);
  const linkedNoBooks = sorted.find((entry) => (entry.unlockSourceCount ?? 0) > 0 && !entry.linkedBookCount);
  const unlinked = sorted.find((entry) => !entry.unlockSourceCount);
  const starter = sorted.find((entry) => entry.isStartBlueprint);
  assert(linkedBooks && linkedNoBooks && unlinked && starter, "Missing Blueprint review fixture");
  const details = new Map(sorted.map((entry) => [entry.slug,
    JSON.parse(readFileSync(`public/data/db/blueprints/by-slug/${entry.slug}.json`, "utf8")) as DbEntityDetail]));
  const materials = sorted.find((entry) => entry.tags?.[0].startsWith("BP_Castle_Wall_Tier02_") &&
    details.get(entry.slug)?.buildMaterialStatus === "recorded" && (details.get(entry.slug)?.buildMaterials?.length ?? 0) >= 2);
  // Keep the accepted existing-curated fixture independent of localized subtitles.
  const artworkRows = sorted.filter(entry => entry.tags?.[0] === "TM_CraftingStation_Anvil");
  assert.equal(artworkRows.length, 1, "Original Anvil artwork fixture must be unique");
  const artwork = artworkRows[0];
  const artworkDetail = details.get(artwork.slug);
  assert(artwork.path === "/db/blueprints/tm-crafting-station-anvil" && artwork.tags?.includes("-437790980") &&
    artworkDetail?.prefab === "TM_CraftingStation_Anvil" && artworkDetail.guid === -437790980 &&
    artwork.portraitAssetPath && !artworkDetail.portraitSourceKind, "Original Anvil artwork identity/evidence must survive");
  const emptyMaterials = sorted.find((entry) => details.get(entry.slug)?.buildMaterialStatus === "empty");
  const heldMaterials = sorted.find((entry) => details.get(entry.slug)?.buildMaterialStatus === "zero-valued");
  assert(materials && artwork && emptyMaterials && heldMaterials, "Missing Blueprint material/artwork review fixture");
  const castleArtwork = ["Stairs", "Floor", "Wall"].map(category => {
    const entry = sorted.find(row => row.tags?.[0].includes(`_Castle_${category}_`) &&
      details.get(row.slug)?.portraitSourceKind === "curated-unique-name-match");
    assert(entry, `Missing reviewed castle ${category} fixture`);
    return { category, entry };
  });
  const nativeArtwork = runtimeBlueprintArtworkPrefabs.map(prefab => {
    const entry = sorted.find(row => row.tags?.[0] === prefab);
    assert(entry?.portraitAssetPath && details.get(entry.slug)?.portraitSourceKind === "runtime-sprite-name", `Missing native artwork fixture: ${prefab}`);
    return entry;
  });
  return { entries, linkedBooks, linkedNoBooks, unlinked, starter, materials, artwork, emptyMaterials, heldMaterials, castleArtwork, nativeArtwork };
}
