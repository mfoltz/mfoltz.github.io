import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import type { DbEntityDetail, DbIndexEntry } from "../src/types/db";
import { runtimeBlueprintArtworkPrefabs } from "./blueprint-runtime-artwork";

export const blueprintVisualIdentityPins = {
  "linkedBooks": [
    "BP_Tier02_WallpaperSet_CastleStone01",
    -332335770,
    "/db/blueprints/bp-tier02-wallpaper-set-castle-stone01"
  ],
  "linkedNoBooks": [
    "BP_Castle_Stairs_Double_Stone01",
    77571580,
    "/db/blueprints/bp-castle-stairs-double-stone01"
  ],
  "unlinked": [
    "BP_Castle_Chain_Plant_BleedingHeart",
    -1473915226,
    "/db/blueprints/bp-castle-chain-plant-bleeding-heart"
  ],
  "starter": [
    "BP_Castle_Chain_Plant_BleedingHeart",
    -1473915226,
    "/db/blueprints/bp-castle-chain-plant-bleeding-heart"
  ],
  "materials": [
    "BP_Castle_Wall_Tier02_Stone_Entrance",
    -281098336,
    "/db/blueprints/bp-castle-wall-tier02-stone-entrance"
  ],
  "artwork": [
    "TM_CraftingStation_Anvil",
    -437790980,
    "/db/blueprints/tm-crafting-station-anvil"
  ],
  "emptyMaterials": [
    "BP_Tier02_WallpaperSet_Arena01_Base",
    -383968909,
    "/db/blueprints/bp-tier02-wallpaper-set-arena01-base"
  ],
  "heldMaterials": [
    "TM_Castle_Wall_Tier02_Stone_EntranceWide",
    996421136,
    "/db/blueprints/tm-castle-wall-tier02-stone-entrance-wide"
  ],
  "castleArtworkStairs": [
    "BP_Castle_Stairs_Double_Stone02",
    -887317616,
    "/db/blueprints/bp-castle-stairs-double-stone02"
  ],
  "castleArtworkFloor": [
    "TM_Castle_Floor_AlchemyLab01",
    -1269191198,
    "/db/blueprints/tm-castle-floor-alchemy-lab01"
  ],
  "castleArtworkWall": [
    "TM_Castle_Wall_Tier01_Wood",
    792289367,
    "/db/blueprints/tm-castle-wall-tier01-wood"
  ]
} as const;
const nativeIdentityPins = {
  "TM_Castle_Floor_Jewelcrafting01": [
    "TM_Castle_Floor_Jewelcrafting01",
    -1984599765,
    "/db/blueprints/tm-castle-floor-jewelcrafting01"
  ],
  "TM_Castle_Floor_Jewelcrafting02": [
    "TM_Castle_Floor_Jewelcrafting02",
    -1838091713,
    "/db/blueprints/tm-castle-floor-jewelcrafting02"
  ],
  "TM_Castle_Wall_Tier02_Stone_Pillar": [
    "TM_Castle_Wall_Tier02_Stone_Pillar",
    1506730526,
    "/db/blueprints/tm-castle-wall-tier02-stone-pillar"
  ],
  "TM_CraftingStation_SimpleCraftingBench": [
    "TM_CraftingStation_SimpleCraftingBench",
    -1107784271,
    "/db/blueprints/tm-crafting-station-simple-crafting-bench"
  ],
  "TM_RefinementStation_Sawmill_Small": [
    "TM_RefinementStation_Sawmill_Small",
    1094077710,
    "/db/blueprints/tm-refinement-station-sawmill-small"
  ],
  "BP_Castle_Wall_Tier01_Wood_Entrance": [
    "BP_Castle_Wall_Tier01_Wood_Entrance",
    106693260,
    "/db/blueprints/bp-castle-wall-tier01-wood-entrance"
  ],
  "TM_Castle_Wall_Tier01_Wood_Entrance": [
    "TM_Castle_Wall_Tier01_Wood_Entrance",
    -1293632412,
    "/db/blueprints/tm-castle-wall-tier01-wood-entrance"
  ],
  "BP_Castle_Wall_Tier02_Stone_Entrance": [
    "BP_Castle_Wall_Tier02_Stone_Entrance",
    -281098336,
    "/db/blueprints/bp-castle-wall-tier02-stone-entrance"
  ],
  "TM_Castle_Wall_Tier02_Stone_Entrance": [
    "TM_Castle_Wall_Tier02_Stone_Entrance",
    728150320,
    "/db/blueprints/tm-castle-wall-tier02-stone-entrance"
  ]
} as const;

/** Keep accepted fixture roles fixed while display names and sorting evolve. */
export function getBlueprintVisualFixtures() {
  const entries = JSON.parse(readFileSync("public/data/db/blueprints/index.json", "utf8")) as DbIndexEntry[];
  const sorted = [...entries].sort((a, b) => (a.subtitle ?? a.slug).localeCompare(b.subtitle ?? b.slug));
  function exact(identity: readonly [string, number, string]) {
    const [prefab, guid, destination] = identity;
    const matches = sorted.filter(entry => entry.tags?.[0] === prefab);
    assert.equal(matches.length, 1, "Missing/ambiguous pinned fixture: " + prefab);
    const entry = matches[0];
    assert.equal(entry.path, destination); assert(entry.tags?.includes(String(guid)));
    const detail = JSON.parse(readFileSync("public/data/db/blueprints/by-slug/" + entry.slug + ".json", "utf8")) as DbEntityDetail;
    assert.equal(detail.prefab, prefab); assert.equal(detail.guid, guid);
    return entry;
  }
  const fixture = (name: keyof typeof blueprintVisualIdentityPins) => exact(blueprintVisualIdentityPins[name]);
  const linkedBooks = fixture("linkedBooks");
  assert((linkedBooks.linkedBookCount ?? 0) > 0);
  const linkedNoBooks = fixture("linkedNoBooks");
  assert((linkedNoBooks.unlockSourceCount ?? 0) > 0 && !linkedNoBooks.linkedBookCount);
  const unlinked = fixture("unlinked"); assert(!unlinked.unlockSourceCount);
  const starter = fixture("starter"); assert(starter.isStartBlueprint);
  assert(linkedBooks && linkedNoBooks && unlinked && starter, "Missing Blueprint review fixture");
  const details = new Map(sorted.map((entry) => [entry.slug,
    JSON.parse(readFileSync(`public/data/db/blueprints/by-slug/${entry.slug}.json`, "utf8")) as DbEntityDetail]));
  const materials = fixture("materials");
  assert(materials.tags?.[0].startsWith("BP_Castle_Wall_Tier02_") &&
    details.get(materials.slug)?.buildMaterialStatus === "recorded" && (details.get(materials.slug)?.buildMaterials?.length ?? 0) >= 2);
  // Keep the accepted existing-curated fixture independent of localized subtitles.
  const artworkRows = sorted.filter(entry => entry.tags?.[0] === "TM_CraftingStation_Anvil");
  assert.equal(artworkRows.length, 1, "Original Anvil artwork fixture must be unique");
  const artwork = artworkRows[0];
  const artworkDetail = details.get(artwork.slug);
  assert(artwork.path === "/db/blueprints/tm-crafting-station-anvil" && artwork.tags?.includes("-437790980") &&
    artworkDetail?.prefab === "TM_CraftingStation_Anvil" && artworkDetail.guid === -437790980 &&
    artwork.portraitAssetPath && !artworkDetail.portraitSourceKind, "Original Anvil artwork identity/evidence must survive");
  const emptyMaterials = fixture("emptyMaterials"); assert.equal(details.get(emptyMaterials.slug)?.buildMaterialStatus, "empty");
  const heldMaterials = fixture("heldMaterials"); assert.equal(details.get(heldMaterials.slug)?.buildMaterialStatus, "zero-valued");
  assert(materials && artwork && emptyMaterials && heldMaterials, "Missing Blueprint material/artwork review fixture");
  const castleArtwork = ["Stairs", "Floor", "Wall"].map(category => {
    const entry = fixture(("castleArtwork" + category) as keyof typeof blueprintVisualIdentityPins);
    assert(entry.tags?.[0].includes("_Castle_" + category + "_") && details.get(entry.slug)?.portraitSourceKind === "curated-unique-name-match");
    assert(entry, `Missing reviewed castle ${category} fixture`);
    return { category, entry };
  });
  const nativeArtwork = runtimeBlueprintArtworkPrefabs.map(prefab => {
    const entry = exact(nativeIdentityPins[prefab as keyof typeof nativeIdentityPins]);
    assert(entry?.portraitAssetPath && details.get(entry.slug)?.portraitSourceKind === "runtime-sprite-name", `Missing native artwork fixture: ${prefab}`);
    return entry;
  });
  return { entries, linkedBooks, linkedNoBooks, unlinked, starter, materials, artwork, emptyMaterials, heldMaterials, castleArtwork, nativeArtwork };
}
