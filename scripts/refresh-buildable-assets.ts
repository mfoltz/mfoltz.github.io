import assert from "node:assert/strict";
import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { assertAssetDumpLock, syncAssetRefDirectory, writeAssetDumpLock } from "./asset-dump-lock";
import { resolveAssetDumpDir } from "./asset-dump-resolver";
import { attachBuildablePortraitAssetPaths, type BuildablePortraitMapSnapshot } from "./buildable-portraits";
import { applyRuntimeBlueprintArtwork } from "./blueprint-runtime-artwork";
import { assertReviewedBuildableSourceHashes, buildablePortraitReviewPath, selectReviewedBuildableAssets, type BuildablePortraitReviewSnapshot } from "./buildable-portrait-review";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = async <T,>(file: string): Promise<T> => JSON.parse(await readFile(path.join(repoRoot, file), "utf8"));

async function main() {
  const resolution = await resolveAssetDumpDir();
  await assertAssetDumpLock(repoRoot, resolution);
  const [review, portraitMap, allPrefabs] = await Promise.all([
    read<BuildablePortraitReviewSnapshot>(buildablePortraitReviewPath),
    read<BuildablePortraitMapSnapshot>("data/enrichment/buildable-portrait-map.json"),
    read<Record<string, number>>("data/prefabs/All.json")
  ]);
  const reviewedMap = applyRuntimeBlueprintArtwork(review, portraitMap, allPrefabs);
  const assets = selectReviewedBuildableAssets(review, reviewedMap, allPrefabs);
  await assertReviewedBuildableSourceHashes(resolution.assetDumpDir, assets);
  const expected = new Set(assets.map(asset => asset.fileName));
  const targetDir = path.join(repoRoot, "public/icons/buildables");
  // This bounded command may add reviewed files, but never quietly remove old ones.
  for (const file of await readdir(targetDir)) assert(expected.has(file), `Unreviewed existing buildable file: ${file}`);
  const result = await syncAssetRefDirectory({ assetDumpDir: resolution.assetDumpDir, targetDir, files: assets });
  assert.equal(result.deleted, 0);
  await writeFile(path.join(repoRoot, "data/enrichment/buildable-portrait-map.json"), JSON.stringify(attachBuildablePortraitAssetPaths(reviewedMap, assets), null, 2) + "\n");
  await writeAssetDumpLock(repoRoot, resolution);
  console.log(JSON.stringify({ reviewedAssets: assets.length, ...result }));
}

main().catch(error => { console.error(error); process.exitCode = 1; });
