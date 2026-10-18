import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { BlueprintTextDisplay } from "./blueprint-text";
import { literalBlueprintText, type ExpansionRow } from "./blueprint-text-expansion";

export const remainingSource = "data/enrichment/blueprint-text-remaining-literals.json";
export const remainingSemanticSha256 = "8ff3f60c3d221fc20a0ac17e0ae3c9905fb61776303209942802ccf5c56afea1";
const hash = (value: string | Buffer) => createHash("sha256").update(value).digest("hex");
const shaPattern = /^[a-f0-9]{64}$/;
const keyPattern = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/;
export interface RemainingManifest {
  schemaVersion: number; sourceKind: string; selectionSha256: string; englishSha256: string;
  uiEquivalenceEstablished: boolean; generalNumericRuleEstablished: boolean;
  ownership: { name: string; description: string };
  captures: Record<string, Record<string, unknown>>; rowCount: number; rowsSemanticSha256: string;
  parts: { path: string; sha256: string; rowCount: number }[];
}
export interface RemainingEvidence { manifest: RemainingManifest; rows: ExpansionRow[] }

export function validateRemainingManifest(manifest: RemainingManifest): void {
  assert.equal(manifest.schemaVersion, 3);
  assert.equal(manifest.sourceKind, "managed-blueprint-text-remaining-literals");
  assert.equal(manifest.rowCount, 790);
  assert.equal(manifest.selectionSha256, "b05632e932583ff4fe355abfbd748654a3431ca729da0d5abc5f8f2d0991433a");
  assert.equal(manifest.englishSha256, "9259f01bc5ef4bedd74e456c526fd3aedd154f852cc6bcfc8aba5ff6c535cbb7");
  assert.equal(manifest.uiEquivalenceEstablished, false);
  assert.equal(manifest.generalNumericRuleEstablished, false);
  assert.deepEqual(manifest.ownership, { name: "ManagedBlueprintData.Name.Key", description: "ManagedBlueprintData.Description.Key.Key" });
  assert.deepEqual(Object.keys(manifest.captures), ["blueprints-01", "blueprints-03", "blueprints-04", "blueprints-05",
    "blueprints-06", "blueprints-07", "blueprints-08", "blueprints-09", "blueprints-10"]);
  for (const capture of Object.values(manifest.captures)) {
    for (const field of ["captureSha256", "manifestSha256", "campaignIndexSha256", "catalogManifestSha256",
      "captureAssemblySha256", "runtimeReferenceSha256", "builderReferenceSha256", "localizationReferenceSha256"])
      assert(shaPattern.test(String(capture[field])), "Invalid capture hash: " + field);
    assert.equal(capture.englishSha256, manifest.englishSha256);
    assert(typeof capture.artifactRef === "string" && !/[\\:]|\.\./.test(capture.artifactRef), "Nonportable capture reference");
  }
  assert.equal(manifest.parts.length, 8);
  for (const [index, part] of manifest.parts.entries()) {
    assert.equal(part.path, "data/enrichment/blueprint-text-remaining-literals/part-" + String(index + 1).padStart(2, "0") + ".json");
    assert.equal(part.rowCount, index === 7 ? 90 : 100); assert(shaPattern.test(part.sha256));
  }
  assert.equal(hash(JSON.stringify(manifest)), remainingSemanticSha256, "Frozen remaining-literal manifest drift");
}
export function validateRemainingEvidence(evidence: RemainingEvidence): void {
  const { manifest, rows } = evidence; validateRemainingManifest(manifest);
  assert.equal(rows.length, 790);
  assert.equal(new Set(rows.map(row => row.prefab)).size, 790, "Duplicate prefab identity");
  assert.equal(new Set(rows.map(row => row.guid)).size, 790, "Ambiguous GUID identity");
  assert.equal(hash(JSON.stringify(rows.map(row => [row.prefab, row.guid]))), manifest.selectionSha256, "Frozen identity/order drift");
  for (const row of rows) {
    assert(Number.isInteger(row.guid) && row.guid >= -2147483648 && row.guid <= 2147483647, "Invalid signed GUID");
    assert.equal(row.sourcePath, "content/prefabs/" + row.prefab + ".md"); assert(shaPattern.test(row.sourceSha256));
    assert(row.path.startsWith("/db/blueprints/") && !/[?#]/.test(row.path), "Invalid exact route");
    assert(keyPattern.test(row.nameKey) && keyPattern.test(row.descriptionKey) && row.nameKey !== row.descriptionKey);
    literalBlueprintText(row.nameRaw); literalBlueprintText(row.descriptionRaw);
    assert.deepEqual(row.parameters, { State: "absent-no-parameters-required", Index: 0, Count: 0,
      BufferLength: null, ErrorType: null, Rows: [] }, "Only exact zero-parameter evidence is eligible");
    assert(manifest.captures[row.captureId], "Unowned capture reference");
    assert.equal(row.native.State, "recorded"); assert.equal(row.native.buildInvocations, 1); assert.equal(row.native.reason, null);
    assert.equal(row.native.resultKey, row.descriptionKey);
    assert.equal(row.native.text, row.descriptionRaw); assert.equal(row.native.toString, row.descriptionRaw);
    assert(row.native.nameLookup === null || row.native.nameLookup === row.nameRaw);
    assert(row.native.templateLookup === null || row.native.templateLookup === row.descriptionRaw);
  }
  assert.equal(hash(JSON.stringify(rows)), manifest.rowsSemanticSha256, "Frozen remaining-literal row drift");
}
export async function readRemaining(root: string): Promise<RemainingEvidence> {
  const manifest = JSON.parse(await readFile(path.join(root, remainingSource), "utf8")) as RemainingManifest;
  validateRemainingManifest(manifest);
  const parts = await Promise.all(manifest.parts.map(async part => {
    const bytes = await readFile(path.join(root, part.path)); assert.equal(hash(bytes), part.sha256, "Witness part hash: " + part.path);
    const data = JSON.parse(bytes.toString("utf8")) as { rows: ExpansionRow[] };
    assert.deepEqual(Object.keys(data), ["rows"]); assert.equal(data.rows.length, part.rowCount);
    return data.rows;
  }));
  const evidence = { manifest, rows: parts.flat() }; validateRemainingEvidence(evidence);
  const all = JSON.parse(await readFile(path.join(root, "data/prefabs/All.json"), "utf8")) as Record<string, number>;
  await Promise.all(evidence.rows.map(async row => {
    assert.equal(all[row.prefab], row.guid, row.prefab + ": canonical GUID mismatch");
    const bytes = await readFile(path.join(root, row.sourcePath));
    assert.equal(hash(bytes), row.sourceSha256, row.prefab + ": source hash mismatch");
    const lines = bytes.toString("utf8").replace(/\r\n?/g, "\n").split("\n");
    assert(lines.includes("title: " + row.prefab) && lines.includes("guid: " + row.guid), row.prefab + ": retained identity mismatch");
    assert(lines.some(line => line.includes("- [ProjectM.BlueprintData]")), row.prefab + ": BlueprintData absent");
  }));
  return evidence;
}
export function remainingTextFields(row: ExpansionRow) {
  return { displayNameEn: row.nameRaw, displayLocalizationGuid: row.nameKey, summaryEn: row.native.text,
    sourceKind: "extractor-raw", sourceRef: remainingSource + "#" + row.prefab };
}
export function overlayRemaining<T extends BlueprintTextDisplay>(map: Record<string, T>, evidence: RemainingEvidence, limit = 790): Record<string, T> {
  validateRemainingEvidence(evidence);
  assert([100, 200, 300, 400, 500, 600, 700, 790].includes(limit), "Invalid reviewed activation boundary");
  const result = { ...map };
  for (const row of evidence.rows.slice(0, limit)) {
    const existing = map[row.prefab], fields = remainingTextFields(row);
    assert(existing && existing.prefab === row.prefab && existing.guid === row.guid, row.prefab + ": missing/ambiguous display join");
    for (const field of ["displayNameEn", "displayLocalizationGuid"] as const)
      assert(existing[field] === undefined || existing[field] === fields[field], row.prefab + ": conflicting " + field);
    assert(existing.summaryEn === undefined || existing.summaryEn === "Blueprint record." || existing.summaryEn === fields.summaryEn,
      row.prefab + ": conflicting summary");
    result[row.prefab] = { ...existing, ...fields };
  }
  return result;
}
