import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import type { DbEntityDetail, DbIndexEntry, DbRelatedEntityRef } from "../src/types/db";
import type { SearchEntry } from "../src/types/content";

// Run after generate:data: exercise the real index pipeline and approved joins.
const read = async <T,>(path: string): Promise<T> => JSON.parse(await readFile(new URL(`../public/data/${path}`, import.meta.url), "utf8"));
const search = await read<SearchEntry[]>("search.index.json");
const byPath = new Map(search.map((entry) => [entry.path, entry]));

test("database artwork reaches global search unchanged, including absent artwork", async () => {
  let sprites = 0, portraits = 0, absent = 0;
  for (const section of ["items", "abilities", "npcs", "workstations", "recipes", "blueprints"]) {
    for (const entry of await read<DbIndexEntry[]>(`db/${section}/index.json`)) {
      const result = byPath.get(entry.path);
      assert.ok(result, entry.path);
      assert.equal(result.icon, entry.icon, entry.path);
      assert.equal(result.portraitAssetPath, entry.portraitAssetPath, entry.path);
      if (entry.icon) sprites++;
      if (entry.portraitAssetPath) portraits++;
      if (!entry.icon && !entry.portraitAssetPath) absent++;
    }
  }
  assert.ok(sprites > 0 && portraits > 0 && absent > 0);
});

test("recipe artwork uses precisely the existing first output, even when it has no icon", async () => {
  const recipes = await read<DbIndexEntry[]>("db/recipes/index.json");
  let withArtwork = 0, withoutArtwork = 0;
  for (const entry of recipes) {
    const detail = await read<DbEntityDetail>(`db/recipes/by-slug/${entry.slug}.json`);
    const outputs = detail.outputs as DbRelatedEntityRef[];
    assert.equal(entry.icon, outputs[0]?.icon, entry.path);
    assert.equal(detail.icon, outputs[0]?.icon, entry.path);
    if (entry.icon) withArtwork++; else withoutArtwork++;
  }
  assert.ok(withArtwork > 0 && withoutArtwork > 0);
});

test("approved portrait paths agree between detail, browsing, and search", async () => {
  for (const section of ["npcs", "workstations", "blueprints"]) {
    const entries = await read<DbIndexEntry[]>(`db/${section}/index.json`);
    const portraits = entries.filter((entry) => entry.portraitAssetPath);
    assert.ok(portraits.length > 0, section);
    for (const entry of portraits) {
      const detail = await read<DbEntityDetail>(`db/${section}/by-slug/${entry.slug}.json`);
      assert.equal(entry.portraitAssetPath, detail.portraitAssetPath, entry.path);
    }
  }
});

test("reconciled Blueprints retain native provenance while other curated associations keep their evidence", async () => {
  const entries = await read<DbIndexEntry[]>("db/blueprints/index.json");
  let curated = 0, native = 0, entrances = 0;
  for (const entry of entries) {
    const detail = await read<DbEntityDetail>(`db/blueprints/by-slug/${entry.slug}.json`);
    if (detail.portraitSourceKind === "curated-unique-name-match") {
      curated++;
      assert.ok(entry.portraitAssetPath);
      assert.equal(detail.portraitSourceRef, `data/enrichment/buildable-portrait-review.json:${detail.prefab}`);
    }
    if (/^(BP|TM)_Castle_Wall_Tier0[12]_(Wood|Stone)_Entrance$/.test(detail.prefab ?? "")) {
      entrances++;
      assert.ok(entry.portraitAssetPath);
      assert.equal(detail.portraitSourceKind, "runtime-sprite-name");
    }
    if (detail.portraitSourceKind === "runtime-sprite-name") {
      native++;
      assert.equal(detail.portraitSourceRef, `data/enrichment/buildable-portrait-review.json:${detail.prefab}`);
    }
  }
  assert.equal(curated, 38); assert.equal(native, 9); assert.equal(entrances, 4);
  for (const [prefab, file] of Object.entries({
    TM_Castle_Floor_Jewelcrafting01: "Floor_JewelCrafting02", TM_Castle_Floor_Jewelcrafting02: "Floor_JewelCrafting01",
    TM_Castle_Wall_Tier02_Stone_Pillar: "CastlePillar01", TM_CraftingStation_SimpleCraftingBench: "SimpleWorkbench",
    TM_RefinementStation_Sawmill_Small: "Sawmill", BP_Castle_Wall_Tier01_Wood_Entrance: "CastleWallTier01WoodEntrance",
    TM_Castle_Wall_Tier01_Wood_Entrance: "CastleWallTier01WoodEntrance", BP_Castle_Wall_Tier02_Stone_Entrance: "CastleGate01",
    TM_Castle_Wall_Tier02_Stone_Entrance: "CastleWallTier02StoneEntrance"
  })) {
    assert.equal(entries.find(entry => entry.tags?.[0] === prefab)?.portraitAssetPath, `/icons/buildables/Stunlock_Icon_Structure_${file}.png`, prefab);
  }
});
