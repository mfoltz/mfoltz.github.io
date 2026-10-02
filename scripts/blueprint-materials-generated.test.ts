import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import type { DbEntityDetail, DbIndexEntry } from "../src/types/db";
import { buildBlueprintMaterials, readBlueprintMaterialDocument, validateBlueprintMaterials, type BlueprintMaterialItem } from "./blueprint-materials";

const read = async <T,>(file: string): Promise<T> => JSON.parse(await readFile(file, "utf8"));
test("generated Blueprint materials reproduce the source census and existing curated artwork", async () => {
  const index = await read<DbIndexEntry[]>("public/data/db/blueprints/index.json");
  const itemIndex = await read<DbIndexEntry[]>("public/data/db/items/index.json");
  const items = new Map<string, BlueprintMaterialItem>();
  for (const row of itemIndex) {
    const item = await read<DbEntityDetail>(`public/data/db/items/by-slug/${row.slug}.json`);
    items.set(item.prefab!, { prefab: item.prefab!, guid: item.guid!, title: item.title, path: row.path, icon: row.icon });
  }
  const catalog = await read<Record<string, number>>("data/prefabs/All.json");
  const map = await read<{ entriesByPrefab: Record<string, { guid: number; joinStatus: string; portraitAssetPath?: string }> }>("data/enrichment/buildable-portrait-map.json");
  const counts = { recorded: 0, empty: 0, missing: 0, "zero-valued": 0, materials: 0, held: 0, portraits: 0 };
  for (const row of index) {
    const detail = await read<DbEntityDetail>(`public/data/db/blueprints/by-slug/${row.slug}.json`);
    const doc = readBlueprintMaterialDocument(detail.prefab!, detail.sourcePath!, await readFile(detail.sourcePath!, "utf8"));
    const expected = buildBlueprintMaterials(doc, items);
    validateBlueprintMaterials(detail, expected, items, catalog);
    counts[expected.buildMaterialStatus]++;
    counts.materials += detail.buildMaterials!.length;
    counts.held += detail.heldBuildMaterialRows?.length ?? 0;
    assert.equal(row.portraitAssetPath, detail.portraitAssetPath);
    const portrait = map.entriesByPrefab[detail.prefab!];
    assert.equal(detail.portraitAssetPath, portrait?.joinStatus === "source-backed" && portrait.guid === detail.guid ? portrait.portraitAssetPath : undefined);
    if (row.portraitAssetPath) counts.portraits++;
  }
  assert.equal(index.length, 1198);
  assert.deepEqual(counts, { recorded: 1080, empty: 117, missing: 0, "zero-valued": 1, materials: 1470, held: 2, portraits: 58 });
});
