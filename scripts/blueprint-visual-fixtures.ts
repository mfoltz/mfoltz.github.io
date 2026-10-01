import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import type { DbEntityDetail, DbIndexEntry } from "../src/types/db";

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
  const artwork = sorted.find((entry) => entry.portraitAssetPath && !details.get(entry.slug)?.portraitSourceKind);
  const emptyMaterials = sorted.find((entry) => details.get(entry.slug)?.buildMaterialStatus === "empty");
  const heldMaterials = sorted.find((entry) => details.get(entry.slug)?.buildMaterialStatus === "zero-valued");
  assert(materials && artwork && emptyMaterials && heldMaterials, "Missing Blueprint material/artwork review fixture");
  const castleArtwork = ["Stairs", "Floor", "Wall"].map(category => {
    const entry = sorted.find(row => row.tags?.[0].includes(`_Castle_${category}_`) &&
      details.get(row.slug)?.portraitSourceKind === "curated-unique-name-match");
    assert(entry, `Missing reviewed castle ${category} fixture`);
    return { category, entry };
  });
  return { entries, linkedBooks, linkedNoBooks, unlinked, starter, materials, artwork, emptyMaterials, heldMaterials, castleArtwork };
}
