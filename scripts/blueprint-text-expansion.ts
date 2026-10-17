import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { BlueprintTextDisplay, BlueprintTextRow } from "./blueprint-text";

export const expansionSource = "data/enrichment/blueprint-text-expansion-128.json";
export const expansionSemanticSha256 = "27cc0ee82677bad3bcf6c5856c1d9eb86d35ab3ae497babdd78850037a845d50";
export interface ExpansionRow {
  prefab: string; guid: number; path: string; sourcePath: string; sourceSha256: string; captureId: string;
  nameKey: string; nameRaw: string; descriptionKey: string; descriptionRaw: string;
  parameters: BlueprintTextRow["parameters"];
  native: { State: string; buildInvocations: number; reason: string | null; text: string; toString: string;
    resultKey: string; nameLookup: string | null; templateLookup: string | null };
}
export interface ExpansionManifest {
  schemaVersion: number; sourceKind: string; selectionSha256: string; englishSha256: string;
  uiEquivalenceEstablished: boolean; generalNumericRuleEstablished: boolean;
  ownership: { name: string; description: string };
  captures: Record<string, { [key: string]: unknown; captureSha256: string; englishSha256: string; artifactRef: string }>;
  rowsSemanticSha256: string; parts: { path: string; sha256: string; rowCount: number }[];
  targets: [string, number][];
}
export interface ExpansionEvidence { manifest: ExpansionManifest; rows: ExpansionRow[] }
const sha = (value: string | Buffer) => createHash("sha256").update(value).digest("hex");
const hash = /^[a-f0-9]{64}$/;
const key = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/;
const emptyParameters = { State: "absent-no-parameters-required", Index: 0, Count: 0,
  BufferLength: null, ErrorType: null, Rows: [] };

/** Exact literal observations only. No whitespace, escape, color or parameter formatter. */
export function literalBlueprintText(text: string): string {
  assert(typeof text === "string" && text.trim().length > 0, "Missing literal Blueprint text");
  assert(!/[<>{}\\\u0000-\u001f]/.test(text), "Unsupported literal Blueprint text");
  return text;
}
export function validateExpansionManifest(manifest: ExpansionManifest): void {
  assert.equal(manifest.schemaVersion, 2);
  assert.equal(manifest.sourceKind, "managed-blueprint-text-literal-expansion");
  assert.equal(manifest.selectionSha256, "cc5204af68cae017e3740deb5034b06584c2188ee120c765f4797e75ea88cb35");
  assert.equal(manifest.englishSha256, "9259f01bc5ef4bedd74e456c526fd3aedd154f852cc6bcfc8aba5ff6c535cbb7");
  assert.equal(manifest.uiEquivalenceEstablished, false);
  assert.equal(manifest.generalNumericRuleEstablished, false);
  assert.deepEqual(manifest.ownership, { name: "ManagedBlueprintData.Name.Key", description: "ManagedBlueprintData.Description.Key.Key" });
  assert.deepEqual(Object.keys(manifest.captures), ["blueprints-01", "blueprints-02", "blueprints-03"]);
  for (const capture of Object.values(manifest.captures)) {
    for (const field of ["captureSha256", "manifestSha256", "campaignIndexSha256", "catalogManifestSha256", "captureAssemblySha256",
      "runtimeReferenceSha256", "builderReferenceSha256", "localizationReferenceSha256"])
      assert(hash.test(String(capture[field])), `Invalid capture ${field}`);
    assert.equal(capture.englishSha256, manifest.englishSha256);
    assert(!/[\\:]|\.\./.test(capture.artifactRef), "Private path in witness");
  }
  assert.equal(manifest.parts.length, 8);
  for (const [index, part] of manifest.parts.entries()) {
    assert.equal(part.path, `data/enrichment/blueprint-text-expansion-128/part-${String(index + 1).padStart(2, "0")}.json`);
    assert.equal(part.rowCount, 16); assert(hash.test(part.sha256));
  }
  assert.equal(manifest.targets.length, 128); assert(hash.test(manifest.rowsSemanticSha256));
  assert.equal(sha(JSON.stringify(manifest)), expansionSemanticSha256, "Frozen expansion manifest drift");
}
export function validateExpansionEvidence(evidence: ExpansionEvidence): void {
  const { manifest, rows } = evidence; validateExpansionManifest(manifest);
  assert.equal(rows.length, 128);
  assert.deepEqual(rows.map(row => [row.prefab, row.guid]), manifest.targets, "Frozen identity/order mismatch");
  assert.equal(new Set(rows.map(row => row.prefab)).size, 128, "Duplicate Blueprint identity");
  for (const row of rows) {
    assert(Number.isInteger(row.guid) && row.guid >= -2147483648 && row.guid <= 2147483647, "Invalid signed GUID");
    assert.equal(row.sourcePath, `content/prefabs/${row.prefab}.md`); assert(hash.test(row.sourceSha256));
    assert(row.path.startsWith("/db/blueprints/") && !/[?#]/.test(row.path), "Invalid exact destination");
    assert(key.test(row.nameKey) && key.test(row.descriptionKey) && row.nameKey !== row.descriptionKey);
    literalBlueprintText(row.nameRaw); literalBlueprintText(row.descriptionRaw);
    assert.deepEqual(row.parameters, emptyParameters, "Only the frozen zero-parameter state is eligible");
    assert(manifest.captures[row.captureId], "Unowned capture reference");
    assert.equal(row.native.State, "recorded"); assert.equal(row.native.buildInvocations, 1); assert.equal(row.native.reason, null);
    assert.equal(row.native.resultKey, row.descriptionKey);
    assert.equal(row.native.text, row.descriptionRaw); assert.equal(row.native.toString, row.descriptionRaw);
    assert(row.native.nameLookup === null || row.native.nameLookup === row.nameRaw);
    assert(row.native.templateLookup === null || row.native.templateLookup === row.descriptionRaw);
  }
  assert.equal(sha(JSON.stringify(rows)), manifest.rowsSemanticSha256, "Frozen row evidence drift");
}
export async function readExpansion(root: string): Promise<ExpansionEvidence> {
  const manifest = JSON.parse(await readFile(path.join(root, expansionSource), "utf8")) as ExpansionManifest;
  validateExpansionManifest(manifest);
  const parts = await Promise.all(manifest.parts.map(async part => {
    const bytes = await readFile(path.join(root, part.path));
    assert.equal(sha(bytes), part.sha256, `Witness part hash: ${part.path}`);
    const data = JSON.parse(bytes.toString("utf8")) as { rows: ExpansionRow[] };
    assert.deepEqual(Object.keys(data), ["rows"]); assert.equal(data.rows.length, part.rowCount);
    return data.rows;
  }));
  const evidence = { manifest, rows: parts.flat() }; validateExpansionEvidence(evidence);
  const all = JSON.parse(await readFile(path.join(root, "data/prefabs/All.json"), "utf8")) as Record<string, number>;
  await Promise.all(evidence.rows.map(async row => {
    assert.equal(all[row.prefab], row.guid, `${row.prefab}: canonical GUID mismatch`);
    const bytes = await readFile(path.join(root, row.sourcePath));
    assert.equal(sha(bytes), row.sourceSha256, `${row.prefab}: source hash mismatch`);
    const lines = bytes.toString("utf8").replace(/\r\n?/g, "\n").split("\n");
    assert(lines.includes(`title: ${row.prefab}`) && lines.includes(`guid: ${row.guid}`), `${row.prefab}: source identity mismatch`);
    assert(lines.some(line => line.includes("- [ProjectM.BlueprintData]")), `${row.prefab}: missing BlueprintData`);
  }));
  return evidence;
}
export function expansionTextFields(row: ExpansionRow) {
  return { displayNameEn: row.nameRaw, displayLocalizationGuid: row.nameKey, summaryEn: row.native.text,
    sourceKind: "extractor-raw", sourceRef: `${expansionSource}#${row.prefab}` };
}
export function overlayExpansion<T extends BlueprintTextDisplay>(map: Record<string, T>, evidence: ExpansionEvidence): Record<string, T> {
  validateExpansionEvidence(evidence); const result = { ...map };
  for (const row of evidence.rows) {
    const existing = map[row.prefab];
    assert(existing && existing.prefab === row.prefab && existing.guid === row.guid, `${row.prefab}: missing/ambiguous display join`);
    const fields = expansionTextFields(row);
    for (const key of ["displayNameEn", "displayLocalizationGuid"] as const)
      assert(existing[key] === undefined || existing[key] === fields[key], `${row.prefab}: conflicting ${key}`);
    assert(existing.summaryEn === undefined || existing.summaryEn === "Blueprint record." || existing.summaryEn === fields.summaryEn,
      `${row.prefab}: conflicting summary`);
    result[row.prefab] = { ...existing, ...fields };
  }
  return result;
}
