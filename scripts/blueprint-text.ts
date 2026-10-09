import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const blueprintTextSource = "data/enrichment/blueprint-text-capture.json";
export const blueprintTextSemanticSha256 = "8f5b4bce6ecc8c1102f4c0dc5e1166ac49a3cd5550bf1d7129a942e5a4470b1b";
export const blueprintTextTargets = [
  ["TM_UnitStation_NetherGate", -218354895], ["TM_BloodFountain_CastleHeart", -485210554],
  ["TM_RefinementStation_Furnace_Small", -1150411622], ["TM_RefinementStation_Sawmill_Small", 1094077710],
  ["TM_SpecialStation_ServantCoffin", 723455393], ["TM_SpecialStation_PrisonCell", -1253061408],
  ["TM_Castle_Floor_AlchemyLab01", -1269191198], ["BP_Castle_Stairs_Double_Stone01", 77571580],
  ["TM_Castle_Gate_Wall_Door_01", -1110124667], ["TM_Castle_FloorDecor_Carpet01_Cross-Section_Black", 2126004642]
] as const;
export interface BlueprintTextRow {
  prefab: string; guid: number; sourcePath: string; sourceSha256: string;
  nameKey: string; nameRaw: string; descriptionKey: string; descriptionRaw: string;
  parameters: { State: string; Index: number; Count: number; BufferLength: number | null; ErrorType: string | null;
    Rows: { bufferIndex: number; key: string; value: string; numericFormat: string; numericFormatValue: number }[] };
  nativeDescription?: { text: string; toString: string; resultKey: string; buildInvocations: number };
}
export interface BlueprintTextCapture {
  schemaVersion: number; sourceKind: string; englishSha256: string;
  batch: Record<string, unknown>; nativeComparison: Record<string, unknown>;
  uiEquivalenceEstablished: boolean; generalNumericRuleEstablished: boolean; rows: BlueprintTextRow[];
}
export interface BlueprintTextDisplay {
  prefab: string; guid: number; displayNameEn?: string; displayLocalizationGuid?: string; summaryEn?: string;
  sourceKind?: string; sourceRef?: string; iconAssetName?: string; iconAssetPath?: string;
}
const sha256 = (text: string | Buffer) => createHash("sha256").update(text).digest("hex");
const guidPattern = /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/;
const stairsPrefab = blueprintTextTargets[7][0];
const carpetPrefab = blueprintTextTargets[9][0];

/** The pilot's audited token set only; this is not a general game-text formatter. */
export function blueprintPlainText(text: string, allowNewlines = false, native = false): string {
  assert(typeof text === "string" && text.length > 0, "Missing Blueprint text");
  const tokens = text.match(/<[^>]*>/g) ?? [];
  const stack: string[] = [];
  for (const token of tokens) {
    if (!native && /^<teal[123]>$/.test(token)) stack.push("</c>");
    else if (native && token === "<color=#6B9EB2>") stack.push("</color>");
    else assert.equal(stack.pop(), token, `Unsupported or unbalanced Blueprint markup: ${token}`);
  }
  assert.equal(stack.length, 0, "Unclosed Blueprint color tag");
  let plain = text.replace(/<[^>]*>/g, "");
  assert(!/[<>{}]/.test(plain), "Unsupported markup or unresolved Blueprint placeholder");
  if (allowNewlines) plain = plain.replace(/\\n/g, " ");
  assert(!plain.includes("\\"), "Unsupported Blueprint escape");
  plain = plain.replace(/\s+/g, " ").trim();
  assert(plain, "Empty normalized Blueprint text");
  return plain;
}

export function validateBlueprintTextCapture(capture: BlueprintTextCapture): void {
  assert.equal(capture.schemaVersion, 1); assert.equal(capture.sourceKind, "managed-blueprint-text-pilot");
  assert.equal(capture.uiEquivalenceEstablished, false); assert.equal(capture.generalNumericRuleEstablished, false);
  assert.equal(capture.rows.length, 10, "Exactly ten approved Blueprints required");
  for (const [index, row] of capture.rows.entries()) {
    assert.deepEqual([row.prefab, row.guid], blueprintTextTargets[index], "Frozen Blueprint identity/order mismatch");
    assert.equal(row.sourcePath, `content/prefabs/${row.prefab}.md`);
    assert(/^[a-f0-9]{64}$/.test(row.sourceSha256), "Invalid source hash");
    assert(guidPattern.test(row.nameKey) && guidPattern.test(row.descriptionKey), "Invalid localization key");
    assert.equal(blueprintPlainText(row.nameRaw), row.nameRaw, "Names must remain exact");
    if (row.prefab !== carpetPrefab) {
      assert.deepEqual(row.parameters, { State: "absent-no-parameters-required", Index: 0, Count: 0,
        BufferLength: null, ErrorType: null, Rows: [] }, "Unexpected nonzero parameter slice");
      assert.equal(row.nativeDescription, undefined);
      blueprintPlainText(row.descriptionRaw, row.prefab === stairsPrefab);
    } else {
      assert.deepEqual(row.parameters, { State: "recorded-owned-range", Index: 0, Count: 1, BufferLength: 1,
        ErrorType: null, Rows: [{ bufferIndex: 0, key: "movefactor", value: "15", numericFormat: "Percent100", numericFormatValue: 2 }] });
      assert(row.nativeDescription, "Missing exact native carpet result");
      assert.equal(row.nativeDescription.resultKey, row.descriptionKey);
      assert.equal(row.nativeDescription.buildInvocations, 1);
      assert.equal(row.nativeDescription.text, row.nativeDescription.toString);
      blueprintPlainText(row.nativeDescription.text, false, true);
    }
  }
  assert.equal(sha256(JSON.stringify(capture)), blueprintTextSemanticSha256, "Accepted capture integrity mismatch");
}

export async function readBlueprintText(root: string): Promise<BlueprintTextCapture> {
  const capture = JSON.parse(await readFile(path.join(root, blueprintTextSource), "utf8")) as BlueprintTextCapture;
  validateBlueprintTextCapture(capture);
  const all = JSON.parse(await readFile(path.join(root, "data/prefabs/All.json"), "utf8")) as Record<string, number>;
  for (const row of capture.rows) {
    assert.equal(all[row.prefab], row.guid, `${row.prefab}: canonical GUID mismatch`);
    const bytes = await readFile(path.join(root, row.sourcePath));
    assert.equal(sha256(bytes), row.sourceSha256, `${row.prefab}: source hash mismatch`);
    const text = bytes.toString("utf8").replace(/\r\n?/g, "\n");
    assert(text.split("\n").includes(`title: ${row.prefab}`), `${row.prefab}: retained prefab mismatch`);
    assert(text.split("\n").includes(`guid: ${row.guid}`), `${row.prefab}: retained GUID mismatch`);
    assert(text.includes("- [ProjectM.BlueprintData]"), `${row.prefab}: missing BlueprintData`);
  }
  return capture;
}
export function blueprintTextFields(row: BlueprintTextRow) {
  return { displayNameEn: row.nameRaw, displayLocalizationGuid: row.nameKey,
    summaryEn: blueprintPlainText(row.nativeDescription?.text ?? row.descriptionRaw, row.prefab === stairsPrefab, Boolean(row.nativeDescription)),
    sourceKind: "extractor-raw", sourceRef: `${blueprintTextSource}#${row.prefab}` };
}
/** Apply only the approved rows after ordinary display imports, preserving artwork and every other entry. */
export function overlayBlueprintText<T extends BlueprintTextDisplay>(map: Record<string, T>, capture: BlueprintTextCapture): Record<string, T> {
  validateBlueprintTextCapture(capture);
  const result = { ...map };
  for (const row of capture.rows) {
    const existing = map[row.prefab];
    assert(existing && existing.prefab === row.prefab && existing.guid === row.guid, `${row.prefab}: missing/ambiguous display join`);
    const fields = blueprintTextFields(row);
    for (const key of ["displayNameEn", "displayLocalizationGuid"] as const)
      assert(existing[key] === undefined || existing[key] === fields[key], `${row.prefab}: conflicting ${key}`);
    assert(existing.summaryEn === undefined || existing.summaryEn === "Blueprint record." || existing.summaryEn === fields.summaryEn,
      `${row.prefab}: conflicting summary`);
    result[row.prefab] = { ...existing, ...fields };
  }
  return result;
}
export function blueprintTextCoverage(map: Record<string, BlueprintTextDisplay>) {
  assert.equal(Object.keys(map).length, 1198, "Blueprint census divergence");
  const matched = Object.values(map).filter(row => !["catalog-seed", "generated-fallback", "alias-match"].includes(row.sourceKind ?? "")
    && Boolean(row.displayNameEn || row.displayLocalizationGuid || row.summaryEn || row.iconAssetName || row.iconAssetPath)).length;
  assert.equal(matched, 18, "Expected eight existing and ten owned-text display rows");
  return { total: 1198, matched, coveragePct: Number((matched / 1198).toFixed(4)), signal: "high-signal", lowSignalExcluded: 1198 - matched };
}
