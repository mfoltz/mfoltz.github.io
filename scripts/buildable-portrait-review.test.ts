import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtemp, mkdir, writeFile, rm, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { assertReviewedBuildableSourceHashes, selectReviewedBuildableAssets, type BuildablePortraitReviewSnapshot } from "./buildable-portrait-review";
import { buildablePortraitMapSourceKind, type BuildablePortraitMapSnapshot } from "./buildable-portraits";
import { PNG } from "pngjs";

const prefab = "BP_Castle_Stairs_Single_Stone02";
const sourceRef = "Texture2D/Stunlock_Icon_Structure_Stairs_Single_Stone02.png";
const hash = createHash("sha256").update("original").digest("hex");
const catalog = { [prefab]: 42 };
const map: BuildablePortraitMapSnapshot = { schemaVersion: 1, sourceKind: buildablePortraitMapSourceKind,
  sourceRef: "data/enrichment/buildable-portrait-candidates.json", totalCurrentBuildableRows: 1,
  entriesByPrefab: { [prefab]: { prefab, guid: 42, portraitAssetName: path.posix.basename(sourceRef),
    portraitAssetFamily: "stunlock-structure-icon", joinStatus: "source-backed", evidenceRefs: [sourceRef] } } };
const review: BuildablePortraitReviewSnapshot = { schemaVersion: 1, sourceKind: "reviewed-buildable-portrait-assets", reviewNote: "Reviewed original pixels; runtime ownership unproven.",
  entries: [{ prefab, guid: 42, sourceRef, sha256: hash, evidenceKind: "curated-unique-name-match" }] };

test("reviewed castle artwork joins an exact current GUID and canonical filename", () => {
  assert.equal(selectReviewedBuildableAssets(review, map, catalog)[0].publicPath, `/icons/buildables/${path.posix.basename(sourceRef)}`);
  assert.deepEqual(selectReviewedBuildableAssets(review, { ...map, entriesByPrefab: { ...map.entriesByPrefab,
    TM_Unreviewed: { ...map.entriesByPrefab[prefab], prefab: "TM_Unreviewed", guid: 99 } } }, catalog).map(row => row.prefab), [prefab]);
});

test("reject stale GUIDs, duplicate records, unsafe paths and unreviewed evidence kinds", () => {
  for (const changed of [{ guid: 43 }, { sourceRef: `../${sourceRef}` }, { sha256: "weak" }, { evidenceKind: "runtime-proven" }]) {
    assert.throws(() => selectReviewedBuildableAssets({ ...review, entries: [{ ...review.entries[0], ...changed } as typeof review.entries[0]] }, map, catalog));
  }
  assert.throws(() => selectReviewedBuildableAssets({ ...review, entries: [...review.entries, ...review.entries] }, map, catalog), /duplicate/);
});

test("reject an exact basename with two BP/TM owners without relaxing variant tokens", () => {
  assert.throws(() => selectReviewedBuildableAssets(review, map, { ...catalog, TM_Castle_Stairs_Single_Stone02: 43 }), /ambiguous/);
  assert.equal(selectReviewedBuildableAssets(review, map, { ...catalog, TM_Castle_Stairs_Single_Stone03: 43 }).length, 1);
});

test("source bytes must match the reviewed hash before materialization", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "buildable-review-"));
  try {
    await mkdir(path.join(root, "Texture2D"));
    const file = path.join(root, sourceRef);
    await writeFile(file, "original");
    const assets = selectReviewedBuildableAssets(review, map, catalog);
    await assertReviewedBuildableSourceHashes(root, assets);
    await writeFile(file, "changed");
    await assert.rejects(assertReviewedBuildableSourceHashes(root, assets), /bytes changed/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("native materialization checks both pinned exports before accepting their crop", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "buildable-sprite-review-"));
  try {
    await mkdir(path.join(root, "Texture2D")); await mkdir(path.join(root, "Sprite"));
    const image = new PNG({ width: 1, height: 1 }); image.data.set([1, 2, 3, 255]);
    const bytes = PNG.sync.write(image), sha256 = createHash("sha256").update(bytes).digest("hex");
    const fileName = path.posix.basename(sourceRef);
    await writeFile(path.join(root, "Texture2D", fileName), bytes);
    await writeFile(path.join(root, "Sprite", fileName), bytes);
    const asset = { ...selectReviewedBuildableAssets(review, map, catalog)[0], evidenceKind: "runtime-sprite-name" as const, sha256, spriteSha256: sha256 };
    await assertReviewedBuildableSourceHashes(root, [asset]);
    await assert.rejects(assertReviewedBuildableSourceHashes(root, [{ ...asset, spriteSha256: "0".repeat(64) }]), /Sprite bytes changed/);
    await assert.rejects(assertReviewedBuildableSourceHashes(root, [{ ...asset, sha256: "0".repeat(64) }]), /source bytes changed/);
  } finally { await rm(root, { recursive: true, force: true }); }
});

test("the accepted manifest retains 49 associations and reconciles exactly nine native records", async () => {
  const read = async <T,>(file: string): Promise<T> => JSON.parse(await readFile(file, "utf8"));
  const accepted = await read<BuildablePortraitReviewSnapshot>("data/enrichment/buildable-portrait-review.json");
  const assets = selectReviewedBuildableAssets(accepted, await read<BuildablePortraitMapSnapshot>("data/enrichment/buildable-portrait-map.json"), await read<Record<string, number>>("data/prefabs/All.json"));
  assert.equal(assets.length, 58);
  assert.equal(new Set(assets.map(row => row.fileName)).size, 57);
  assert.equal(assets.filter(row => row.evidenceKind === "existing-curated").length, 11);
  assert.equal(assets.filter(row => row.evidenceKind === "curated-unique-name-match").length, 38);
  assert.equal(assets.filter(row => row.evidenceKind === "runtime-sprite-name").length, 9);
  assert.equal(assets.filter(row => row.prefab.endsWith("_Entrance")).length, 4);
});
