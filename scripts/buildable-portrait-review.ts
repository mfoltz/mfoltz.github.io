import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { BuildablePortraitMapSnapshot, BuildablePortraitPublicAsset } from "./buildable-portraits";

export const buildablePortraitReviewPath = "data/enrichment/buildable-portrait-review.json";
export type BuildablePortraitEvidenceKind = "existing-curated" | "curated-unique-name-match";
export interface BuildablePortraitReviewEntry {
  prefab: string;
  guid: number;
  sourceRef: string;
  sha256: string;
  evidenceKind: BuildablePortraitEvidenceKind;
}
export interface BuildablePortraitReviewSnapshot {
  schemaVersion: 1;
  sourceKind: "reviewed-buildable-portrait-assets";
  reviewNote: string;
  entries: BuildablePortraitReviewEntry[];
}
export interface ReviewedBuildablePortraitPublicAsset extends BuildablePortraitPublicAsset {
  evidenceKind: BuildablePortraitEvidenceKind;
  sha256: string;
}

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");

// Recompute ownership independently of the older display map's icon guesses.
function nameOwners(allPrefabs: Record<string, number>, fileName: string): string[] {
  const subject = normalize(fileName.replace(/^Stunlock_Icon_Structure_/, "").replace(/\.png$/, ""));
  return Object.keys(allPrefabs).filter((prefab) => {
    if (!/^(BP|TM)_/.test(prefab)) return false;
    const stem = prefab.replace(/^(BP|TM)_/, "");
    return [stem, stem.replace(/^Castle_Floor_/, ""), stem.replace(/^Castle_/, "")].some((alias) => normalize(alias) === subject);
  });
}

export function selectReviewedBuildableAssets(
  review: BuildablePortraitReviewSnapshot,
  portraitMap: BuildablePortraitMapSnapshot,
  allPrefabs: Record<string, number>
): ReviewedBuildablePortraitPublicAsset[] {
  assert(review.schemaVersion === 1 && review.sourceKind === "reviewed-buildable-portrait-assets", "Invalid buildable artwork review schema");
  assert(review.reviewNote?.trim() && Array.isArray(review.entries) && review.entries.length > 0, "Missing buildable artwork review");
  const prefabs = new Set<string>(), guids = new Set<number>(), files = new Set<string>();
  return review.entries.map((approved) => {
    const entry = portraitMap.entriesByPrefab[approved.prefab];
    assert(entry && entry.prefab === approved.prefab && entry.guid === approved.guid && allPrefabs[approved.prefab] === approved.guid,
      `${approved.prefab}: reviewed prefab/GUID mismatch`);
    assert(!prefabs.has(approved.prefab) && !guids.has(approved.guid), `${approved.prefab}: duplicate reviewed identity`);
    prefabs.add(approved.prefab); guids.add(approved.guid);
    const match = /^Texture2D\/((?:Stunlock_Icon_Structure_|StructureIcon_)[A-Za-z0-9_]+\.png)$/.exec(approved.sourceRef);
    assert(match && match[1] === entry.portraitAssetName && entry.evidenceRefs.includes(approved.sourceRef), `${approved.prefab}: reviewed source mismatch`);
    const fileName = match[1];
    assert(!files.has(fileName), `${approved.prefab}: duplicate reviewed asset`);
    files.add(fileName);
    assert(/^[a-f0-9]{64}$/.test(approved.sha256), `${approved.prefab}: invalid source hash`);
    assert(entry.joinStatus === "source-backed", `${approved.prefab}: unusable candidate`);
    if (approved.evidenceKind === "curated-unique-name-match") {
      assert(/^(BP|TM)_Castle_(Stairs|Floor|Wall)_/.test(approved.prefab), `${approved.prefab}: outside reviewed castle scope`);
      assert.deepEqual(nameOwners(allPrefabs, fileName), [approved.prefab], `${approved.prefab}: ambiguous or unmatched asset name`);
    } else {
      assert(approved.evidenceKind === "existing-curated", `${approved.prefab}: unknown evidence kind`);
    }
    return { prefab: approved.prefab, fileName, sourceRef: approved.sourceRef,
      publicPath: `/icons/buildables/${fileName}`, evidenceKind: approved.evidenceKind, sha256: approved.sha256 };
  }).sort((left, right) => left.prefab.localeCompare(right.prefab));
}

export async function assertReviewedBuildableSourceHashes(assetDumpDir: string, assets: ReviewedBuildablePortraitPublicAsset[]): Promise<void> {
  for (const asset of assets) {
    const bytes = await readFile(path.join(assetDumpDir, ...asset.sourceRef.split("/")));
    assert.equal(createHash("sha256").update(bytes).digest("hex"), asset.sha256, `${asset.prefab}: reviewed source bytes changed`);
  }
}
