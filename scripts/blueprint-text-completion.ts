import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { BlueprintTextDisplay, BlueprintTextRow } from "./blueprint-text";

export const completionSource = "data/enrichment/blueprint-text-completion.json";
export const completionManifestSha256 = "137b627340fc6f2e889ad9bd02cbf4d784f25759ac1a5653bab90c1ffa826202";
export const completionActivationCount: number = 90;
const completionCountsByActivation: Record<number, { signals: number; names: number; descriptions: number; pairs: number }> = {"0":{"signals":928,"names":928,"descriptions":928,"pairs":928},"45":{"signals":972,"names":972,"descriptions":968,"pairs":968},"90":{"signals":1017,"names":1017,"descriptions":1013,"pairs":1013},"135":{"signals":1062,"names":1062,"descriptions":1058,"pairs":1058},"180":{"signals":1107,"names":1097,"descriptions":1101,"pairs":1091},"225":{"signals":1152,"names":1127,"descriptions":1143,"pairs":1118},"270":{"signals":1197,"names":1172,"descriptions":1180,"pairs":1155}};
export const completionExpectedCounts = completionCountsByActivation[completionActivationCount];
type Field = { State: string; Key: string; EnglishText: string | null };
type Parameter = BlueprintTextRow["parameters"]["Rows"][number];
export interface CompletionRow {
  prefab: string; guid: number; sourcePath: string; sourceSha256: string; path: string; captureId: string;
  name: Field; description: Field; parameters: BlueprintTextRow["parameters"];
  native: { State: string; buildInvocations: number; reason: string | null; text: string | null;
    toString: string | null; resultKey: string | null; nameLookup: string | null; templateLookup: string | null };
  priorEligibility: { name: string; description: string };
  nameDisposition: string; descriptionDisposition: string;
  observedFragments: { key: string; ownedRow: Parameter; nativeFragment: string }[];
  unusedOwnedKeys: string[]; priorReasons: { name: string[]; description: string[] };
}
export interface CompletionManifest {
  schemaVersion: number; sourceKind: string; rowCount: number; englishSha256: string;
  selectionSha256: string; rowsSemanticSha256: string; counts: Record<string, number>;
  captures: Record<string, Record<string, unknown>>;
  parts: { path: string; sha256: string; rowCount: number }[];
  generalNumericRuleEstablished: boolean; uiEquivalenceEstablished: boolean;
  auditSha256: string;
}
export interface CompletionEvidence { manifest: CompletionManifest; rows: CompletionRow[] }
const hash = (x: string | Buffer) => createHash("sha256").update(x).digest("hex");
const keyPattern = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/;
const shaPattern = /^[a-f0-9]{64}$/;
const emptyKey = "00000000-0000-0000-0000-000000000000";
const codeMap: Record<string, string> = {
  "<teal3>": "<color=#B2F2FF>", "<teal1>": "<color=#82C9D9>", "<skillcolor>": "<color=#E6E6E6>",
  "<teal2>": "<color=#6B9EB2>", "<red1>": "<color=#C52443>", "<white>": "<color=white>", "</c>": "</color>"
};
const unusedWitnesses = new Set([
  "TM_Castle_Container_Specialized_Soulshards_Dracula", "TM_Castle_Container_Specialized_Soulshards_Manticore",
  "TM_Castle_Container_Specialized_Soulshards_Monster", "TM_Castle_Container_Specialized_Soulshards_Morgana",
  "TM_Castle_Container_Specialized_Soulshards_Solarus", "TM_Stash_Chest_Rebuilding"
]);
export const hasCompletionName = (row: CompletionRow) => row.nameDisposition === "promote";
export const hasCompletionDescription = (row: CompletionRow) => row.descriptionDisposition === "promote-native"
  || row.descriptionDisposition.startsWith("resolved-");

/** Only the captured native color vocabulary; never evaluates HTML or parameter values. */
export function completionPlainText(text: string): string {
  assert(typeof text === "string" && text.length > 0, "Missing native text");
  const openings = new Set(Object.values(codeMap).filter(token => token !== "</color>"));
  let depth = 0;
  for (const token of text.match(/<[^>]*>/g) ?? []) {
    if (openings.has(token)) depth++;
    else { assert.equal(token, "</color>", "Unsupported native markup"); assert(depth-- > 0, "Unbalanced native color"); }
  }
  assert.equal(depth, 0, "Unclosed native color");
  const plain = text.replace(/<[^>]*>/g, "");
  assert(!/[<>{}\\\u0000-\u0009\u000b\u000c\u000e-\u001f\ufffd]/.test(plain), "Unsupported text or unresolved token");
  const result = plain.replace(/\s+/g, " ").trim();
  assert(result.length > 0, "Empty native description");
  return result;
}
function nativeTemplate(raw: string) {
  return raw.replace(/<[^>]*>/g, token => { assert(codeMap[token], "Unsupported source code"); return codeMap[token]; })
    .replace(/\\n/g, "\n");
}
export function validateCompletionRow(row: CompletionRow): void {
  assert(Number.isInteger(row.guid) && row.guid >= -2147483648 && row.guid <= 2147483647, "Signed GUID required");
  assert.equal(row.sourcePath, "content/prefabs/" + row.prefab + ".md");
  assert(shaPattern.test(row.sourceSha256) && /^\/db\/blueprints\/[^?#/]+$/.test(row.path), "Invalid ownership path/hash");
  for (const f of [row.name, row.description]) {
    assert(keyPattern.test(f.Key));
    if (f.State === "empty-key") assert.deepEqual(f, { State: "empty-key", Key: emptyKey, EnglishText: null });
    else { assert.equal(f.State, "resolved"); assert(f.Key !== emptyKey && typeof f.EnglishText === "string" && f.EnglishText.length > 0); }
  }
  const p = row.parameters;
  assert(Number.isSafeInteger(p.Index) && Number.isSafeInteger(p.Count) && p.Index >= 0 && p.Count >= 0 && p.Count <= 64);
  assert.equal(p.Rows.length, p.Count); assert.equal(p.ErrorType, null);
  assert.equal(new Set(p.Rows.map(r => r.key)).size, p.Count, "Duplicate parameter key");
  if (p.Count) {
    assert.equal(p.State, "recorded-owned-range");
    assert(Number.isSafeInteger(p.BufferLength) && p.Index + p.Count <= p.BufferLength!);
  } else assert.deepEqual(p, { State: "absent-no-parameters-required", Index: 0, Count: 0, BufferLength: null, ErrorType: null, Rows: [] });
  p.Rows.forEach((r, i) => {
    assert.equal(r.bufferIndex, p.Index + i); assert(r.key && typeof r.value === "string");
    assert((r.numericFormat === "Default" && r.numericFormatValue === 0)
      || (r.numericFormat === "Percent100" && r.numericFormatValue === 2), "Unobserved parameter format");
  });
  if (hasCompletionName(row)) {
    assert.equal(row.priorEligibility.name, "candidate"); assert(row.name.Key !== row.description.Key);
    assert.equal(completionPlainText(row.name.EnglishText!), row.name.EnglishText, "Exact literal name required");
    if (row.native.nameLookup !== null) assert.equal(row.native.nameLookup, row.name.EnglishText);
  } else if (row.nameDisposition === "held-shared-key") {
    assert.equal(row.priorEligibility.name, "held"); assert.equal(row.name.Key, row.description.Key);
  } else { assert.equal(row.nameDisposition, "unknown"); assert.equal(row.name.State, "empty-key"); }

  if (!hasCompletionDescription(row)) {
    assert(["unknown", "held-empty-fragment", "held-malformed-markup"].includes(row.descriptionDisposition));
    if (row.descriptionDisposition === "unknown") assert.equal(row.description.State, "empty-key");
    else assert.equal(row.priorEligibility.description, "held");
    return;
  }
  const native = row.native;
  assert.equal(row.description.State, "resolved"); assert.equal(native.State, "recorded");
  assert.equal(native.buildInvocations, 1); assert.equal(native.reason, null);
  assert.equal(native.text, native.toString); assert.equal(native.resultKey, row.description.Key);
  assert(native.text && native.templateLookup);
  let template = nativeTemplate(row.description.EnglishText!);
  if (row.descriptionDisposition === "resolved-native-spelling") {
    assert.equal(row.prefab, "TM_CraftingStation_Stables"); assert.equal(row.guid, 472278220);
    assert.equal(row.description.Key, "ce54f153-f389-4848-ba04-e5bf20a245e7");
    assert.equal(row.captureId, "blueprints-10"); assert.equal(p.Count, 0);
    assert.equal(template.split("nutrious").length, 2);
    template = template.replace("nutrious", "nutritious");
  }
  assert.equal(native.templateLookup, template, "Owned English/native template disagreement");
  if (row.descriptionDisposition === "resolved-unused-parameters") {
    assert(unusedWitnesses.has(row.prefab)); assert.equal(row.priorEligibility.description, "review");
    assert.deepEqual(row.unusedOwnedKeys, ["slots"]); assert.equal(p.Count, 1);
    assert.deepEqual(row.observedFragments, []); assert(!/[{}]/.test(template));
  } else if (row.descriptionDisposition === "resolved-inline-observation") {
    assert.equal(row.prefab, "TM_Stash_Chest_SafetyBox"); assert.equal(row.guid, 1842080060);
    assert.equal(row.description.Key, "2dd4f037-152e-48a8-a020-0662cb575cc1");
    assert.deepEqual(p.Rows, [{ bufferIndex: 0, key: "slots", value: "14", numericFormat: "Default", numericFormatValue: 0 }]);
    assert.deepEqual(row.observedFragments, [{ key: "slots", ownedRow: p.Rows[0], nativeFragment: "14" }]);
  } else {
    assert(["promote-native", "resolved-native-spelling"].includes(row.descriptionDisposition));
    if (row.descriptionDisposition === "promote-native") assert.equal(row.priorEligibility.description, "candidate");
    assert.deepEqual(row.unusedOwnedKeys, []);
  }
  const fragments = new Map<string, string>();
  for (const o of row.observedFragments) {
    assert(o.key && o.nativeFragment, "Empty observed fragment remains held");
    assert.deepEqual(o.ownedRow, p.Rows.find(r => r.key === o.key), "Fragment belongs to another slice");
    if (fragments.has(o.key)) assert.equal(fragments.get(o.key), o.nativeFragment);
    fragments.set(o.key, o.nativeFragment);
  }
  const observed = template.replace(/\{([^{}]+)\}/g, (_, key: string) => {
    assert(fragments.has(key), "Missing exact observed parameter fragment"); return fragments.get(key)!;
  });
  assert.equal(observed, native.text, "Native literal content changed");
  completionPlainText(native.text);
}
export function validateCompletionEvidence(evidence: CompletionEvidence) {
  const m = evidence.manifest;
  assert.equal(m.schemaVersion, 1); assert.equal(m.sourceKind, "managed-blueprint-text-completion");
  assert.equal(m.rowCount, 270); assert.equal(m.parts.length, 6);
  assert.equal(m.englishSha256, "9259f01bc5ef4bedd74e456c526fd3aedd154f852cc6bcfc8aba5ff6c535cbb7");
  assert.equal(m.generalNumericRuleEstablished, false); assert.equal(m.uiEquivalenceEstablished, false);
  assert(shaPattern.test(m.auditSha256));
  assert.equal(hash(JSON.stringify(m)), completionManifestSha256, "Frozen completion manifest drift");
  assert.equal(evidence.rows.length, 270);
  assert.equal(new Set(evidence.rows.map(r => r.prefab)).size, 270);
  assert.equal(new Set(evidence.rows.map(r => r.guid)).size, 270);
  assert.equal(hash(JSON.stringify(evidence.rows.map(r => [r.prefab, r.guid]))), m.selectionSha256);
  for (const row of evidence.rows) { assert(m.captures[row.captureId], "Unowned capture"); validateCompletionRow(row); }
  assert.equal(hash(JSON.stringify(evidence.rows)), m.rowsSemanticSha256, "Frozen completion evidence drift");
  assert.equal(evidence.rows.filter(hasCompletionName).length, 244);
  assert.equal(evidence.rows.filter(hasCompletionDescription).length, 252);
}
export async function readCompletion(root: string): Promise<CompletionEvidence> {
  const manifest = JSON.parse(await readFile(path.join(root, completionSource), "utf8")) as CompletionManifest;
  const parts = await Promise.all(manifest.parts.map(async (part, i) => {
    assert.equal(part.path, "data/enrichment/blueprint-text-completion/part-" + String(i + 1).padStart(2, "0") + ".json");
    const bytes = await readFile(path.join(root, part.path)); assert.equal(hash(bytes), part.sha256);
    const data = JSON.parse(bytes.toString("utf8")) as { rows: CompletionRow[] };
    assert.deepEqual(Object.keys(data), ["rows"]); assert.equal(data.rows.length, part.rowCount); return data.rows;
  }));
  const evidence = { manifest, rows: parts.flat() }; validateCompletionEvidence(evidence);
  const all = JSON.parse(await readFile(path.join(root, "data/prefabs/All.json"), "utf8")) as Record<string, number>;
  await Promise.all(evidence.rows.map(async row => {
    assert.equal(all[row.prefab], row.guid, "Canonical identity mismatch");
    const source = await readFile(path.join(root, row.sourcePath));
    assert.equal(hash(source), row.sourceSha256, "Retained source changed");
    const lines = source.toString("utf8").replace(/\r\n?/g, "\n").split("\n");
    assert(lines.includes("title: " + row.prefab) && lines.includes("guid: " + row.guid)
      && lines.some(line => line.includes("- [ProjectM.BlueprintData]")), "Retained identity/component missing");
  }));
  return evidence;
}
export function completionTextFields(row: CompletionRow): Partial<BlueprintTextDisplay> {
  const fields: Partial<BlueprintTextDisplay> = {};
  if (hasCompletionName(row)) { fields.displayNameEn = row.name.EnglishText!; fields.displayLocalizationGuid = row.name.Key; }
  if (hasCompletionDescription(row)) fields.summaryEn = completionPlainText(row.native.text!);
  if (Object.keys(fields).length) { fields.sourceKind = "extractor-raw"; fields.sourceRef = completionSource + "#" + row.prefab; }
  return fields;
}
export function activeCompletionRows(evidence: CompletionEvidence, limit = completionActivationCount) {
  assert([0, 45, 90, 135, 180, 225, 270].includes(limit), "Unreviewed activation boundary");
  return evidence.rows.slice(0, limit).filter(r => hasCompletionName(r) || hasCompletionDescription(r));
}
export function overlayCompletion<T extends BlueprintTextDisplay>(map: Record<string, T>, evidence: CompletionEvidence,
  limit = completionActivationCount): Record<string, T> {
  validateCompletionEvidence(evidence); const result = { ...map };
  for (const row of activeCompletionRows(evidence, limit)) {
    const existing = map[row.prefab]; assert(existing && existing.prefab === row.prefab && existing.guid === row.guid, "Ambiguous completion join");
    const fields = completionTextFields(row);
    for (const key of ["displayNameEn", "displayLocalizationGuid", "summaryEn"] as const)
      if (fields[key] !== undefined) assert(existing[key] === undefined || existing[key] === fields[key]
        || (key === "summaryEn" && existing[key] === "Blueprint record."), "Conflicting completion field: " + key);
    result[row.prefab] = { ...existing, ...fields };
  }
  return result;
}
