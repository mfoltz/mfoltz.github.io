import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import type { BuildablePortraitMapSnapshot } from "./buildable-portraits";
import type { BuildablePortraitReviewEntry, BuildablePortraitReviewSnapshot } from "./buildable-portrait-review";

export const blueprintIconCapturePath = "data/enrichment/blueprint-icon-capture.json";
export const blueprintIconCaptureSha256 = "d080ea52202cbd4319156cf593ed11d08a527b8e05cd39ee7c3410ddd0a9cea2";
export const runtimeBlueprintArtworkPrefabs = [
  "TM_Castle_Floor_Jewelcrafting01", "TM_Castle_Floor_Jewelcrafting02",
  "TM_Castle_Wall_Tier02_Stone_Pillar", "TM_CraftingStation_SimpleCraftingBench", "TM_RefinementStation_Sawmill_Small",
  "BP_Castle_Wall_Tier01_Wood_Entrance", "TM_Castle_Wall_Tier01_Wood_Entrance",
  "BP_Castle_Wall_Tier02_Stone_Entrance", "TM_Castle_Wall_Tier02_Stone_Entrance"
] as const;

export interface BlueprintIconCaptureRow {
  prefab: string; guid: number; runtimePrefab: string | null;
  iconAssetGuid: string | null; spriteName: string | null; status: string;
}
export interface BlueprintIconCaptureSnapshot {
  schemaVersion: number; sourceKind: string; targetManifestSha256: string;
  targetCount: number; resolvedCount: number; unknownCount: number; rows: BlueprintIconCaptureRow[];
}

export function validateBlueprintIconCapture(capture: BlueprintIconCaptureSnapshot, allPrefabs: Record<string, number>): void {
  assert(capture.schemaVersion === 1 && capture.sourceKind === "client-managed-blueprint-icon-names", "Invalid native icon capture schema");
  assert.equal(capture.targetManifestSha256, "4d73d2f8e639d1a5b8d91e11fb7d5106346166da5b0292ba61721a7a40f0441c", "Native target manifest changed");
  assert(capture.targetCount === 58 && capture.resolvedCount === 58 && capture.unknownCount === 0 && capture.rows.length === 58, "Native capture counts differ");
  const prefabs = new Set<string>(), guids = new Set<number>(), sprites = new Map<string, string>();
  for (const row of capture.rows) {
    assert(!prefabs.has(row.prefab) && !guids.has(row.guid), `${row.prefab}: duplicate captured identity`);
    prefabs.add(row.prefab); guids.add(row.guid);
    assert(row.runtimePrefab === row.prefab && allPrefabs[row.prefab] === row.guid, `${row.prefab}: captured prefab/GUID mismatch`);
    assert(row.status === "resolved" && /^[a-f0-9]{32}$/.test(row.iconAssetGuid ?? "") && /^[A-Za-z0-9_]+$/.test(row.spriteName ?? ""), `${row.prefab}: unresolved captured Sprite`);
    const previous = sprites.get(row.iconAssetGuid!);
    assert(!previous || previous === row.spriteName, `${row.prefab}: conflicting captured Sprite names`);
    sprites.set(row.iconAssetGuid!, row.spriteName!);
  }
  assert(sprites.size === 57 && new Set(sprites.values()).size === 57, "Native distinct icon/Sprite counts differ");
}

export function readBlueprintIconCapture(allPrefabs: Record<string, number>): BlueprintIconCaptureSnapshot {
  const bytes = readFileSync(blueprintIconCapturePath);
  assert.equal(createHash("sha256").update(bytes).digest("hex"), blueprintIconCaptureSha256, "Pinned native capture bytes changed");
  const capture = JSON.parse(bytes.toString("utf8")) as BlueprintIconCaptureSnapshot;
  validateBlueprintIconCapture(capture, allPrefabs);
  return capture;
}

export function assertCapturedBlueprintArtwork(approved: BuildablePortraitReviewEntry, capture: BlueprintIconCaptureSnapshot): void {
  assert((runtimeBlueprintArtworkPrefabs as readonly string[]).includes(approved.prefab), `${approved.prefab}: outside approved runtime artwork scope`);
  const row = capture.rows.find(row => row.prefab === approved.prefab);
  assert(row && row.guid === approved.guid && row.runtimePrefab === approved.prefab && row.status === "resolved", `${approved.prefab}: captured artwork identity mismatch`);
  assert(row.iconAssetGuid === approved.runtimeIconAssetGuid && approved.sourceRef === `Texture2D/${row.spriteName}.png`, `${approved.prefab}: captured icon/Sprite destination mismatch`);
  assert(/^[a-f0-9]{64}$/.test(approved.spriteSha256 ?? ""), `${approved.prefab}: missing Sprite export hash`);
}

/** Overlay only approved native joins; do not rerun or weaken the name scout. */
export function applyRuntimeBlueprintArtwork(review: BuildablePortraitReviewSnapshot, portraitMap: BuildablePortraitMapSnapshot, allPrefabs: Record<string, number>): BuildablePortraitMapSnapshot {
  const native = review.entries.filter(row => row.evidenceKind === "runtime-sprite-name");
  if (!native.length) return portraitMap;
  const capture = readBlueprintIconCapture(allPrefabs);
  const entriesByPrefab = { ...portraitMap.entriesByPrefab };
  for (const approved of native) {
    assertCapturedBlueprintArtwork(approved, capture);
    assert.equal(allPrefabs[approved.prefab], approved.guid, `${approved.prefab}: current GUID mismatch`);
    const fileName = approved.sourceRef.slice("Texture2D/".length);
    entriesByPrefab[approved.prefab] = {
      ...entriesByPrefab[approved.prefab], prefab: approved.prefab, guid: approved.guid,
      portraitAssetName: fileName, portraitAssetFamily: "stunlock-structure-icon", joinStatus: "source-backed",
      evidenceRefs: [approved.sourceRef, `Sprite/${fileName}`, `${blueprintIconCapturePath}:${approved.prefab}`, "data/prefabs/All.json"]
    };
  }
  return { ...portraitMap, entriesByPrefab };
}
