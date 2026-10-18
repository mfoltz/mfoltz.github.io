import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { activeCompletionRows, completionPlainText, completionTextFields, hasCompletionDescription, hasCompletionName,
  overlayCompletion, readCompletion, validateCompletionEvidence, validateCompletionRow, type CompletionEvidence } from "./blueprint-text-completion";
import type { BlueprintTextDisplay } from "./blueprint-text";
const evidence = await readCompletion(process.cwd());
const map = JSON.parse(await readFile("data/enrichment/blueprint-display-map.json", "utf8")) as Record<string, BlueprintTextDisplay>;
const row = (prefab: string) => evidence.rows.find(r => r.prefab === prefab)!;

test("270 exact catalog identities provide 244 names, 252 descriptions and 227 additional pairs", () => {
  assert.equal(evidence.rows.length, 270);
  assert.equal(evidence.rows.filter(hasCompletionName).length, 244);
  assert.equal(evidence.rows.filter(hasCompletionDescription).length, 252);
  assert.equal(evidence.rows.filter(r => hasCompletionName(r) && hasCompletionDescription(r)).length, 227);
  assert.equal(activeCompletionRows(evidence, 270).length, 269);
  assert(evidence.rows.some(r => r.guid < 0));
  assert.equal(evidence.rows.filter(r => r.parameters.Count > 0).length, 175);
});
test("native colors/newlines normalize narrowly while punctuation and exact observed percentages survive", () => {
  assert.equal(completionPlainText("One <color=#B2F2FF>word</color>.\n\nNext!"), "One word. Next!");
  assert.equal(completionPlainText("  <color=white>15%</color>, 'complete' text. "), "15%, 'complete' text.");
  const carpet = evidence.rows.find(r => r.observedFragments.some(f => f.nativeFragment.includes("%")))!;
  assert(completionTextFields(carpet).summaryEn?.includes(carpet.observedFragments[0].nativeFragment));
});
for (const text of ["<b>Other</b>", "<color=#000000>Other</color>", "<color=white>Unclosed",
  "</color>Unopened", "{slots}", "literal\\nsequence", "bad\u0000text", "bad\uFFFDtext", "   "]) {
  test("reject unsupported native text: " + JSON.stringify(text), () => assert.throws(() => completionPlainText(text)));
}
test("five pedestals and relocation bags retain unused slots metadata without injecting it into descriptions", () => {
  const rows = evidence.rows.filter(r => r.descriptionDisposition === "resolved-unused-parameters");
  assert.equal(rows.length, 6);
  for (const r of rows) {
    validateCompletionRow(r); assert.deepEqual(r.unusedOwnedKeys, ["slots"]);
    assert.equal(r.observedFragments.length, 0);
    assert(!r.description.EnglishText?.includes("{slots}"));
    assert.equal(r.parameters.Count, 1); assert(completionTextFields(r).summaryEn);
  }
});
test("Stables preserves both spellings and promotes only its exact native observation", () => {
  const r = row("TM_CraftingStation_Stables");
  assert(r.description.EnglishText!.includes("nutrious"));
  assert(completionTextFields(r).summaryEn!.includes("nutritious"));
  assert.equal(r.descriptionDisposition, "resolved-native-spelling");
});
test("Safety Box pins the exact 14 observation and preserves the complete source template and string metadata", () => {
  const r = row("TM_Stash_Chest_SafetyBox"); validateCompletionRow(r);
  assert.equal(r.parameters.Rows[0].value, "14"); assert.equal(r.parameters.Rows[0].numericFormatValue, 0);
  assert(r.description.EnglishText!.includes("{slots}"));
  assert(completionTextFields(r).summaryEn!.includes("14 items"));
});
test("partial fields never promote a shared description key as a name or infer text for empty keys", () => {
  const heldNames = evidence.rows.filter(r => r.nameDisposition === "held-shared-key");
  assert.equal(heldNames.length, 17);
  for (const r of heldNames) {
    const f = completionTextFields(r); assert.equal(f.displayNameEn, undefined);
    assert.equal(f.displayLocalizationGuid, undefined); assert(f.summaryEn);
  }
  for (const r of evidence.rows.filter(r => r.nameDisposition === "unknown"))
    assert.equal(completionTextFields(r).displayNameEn, undefined);
  const tower = row("TM_CastleOuterWalls_Towerl01"); assert.deepEqual(completionTextFields(tower), {});
});
test("the incomplete Soulshard sentence and malformed Mega Planter description stay held", () => {
  for (const prefab of ["TM_Castle_RefinementStation_Soulshard", "TM_Castle_SaplingPlanter_7x_Castle_Mega_Planter02"]) {
    const r = row(prefab), fields = completionTextFields(r);
    assert(fields.displayNameEn); assert.equal(fields.summaryEn, undefined);
    assert(r.native.text && r.description.EnglishText);
  }
});
test("overlay is deterministic, preserves artwork/old rows and keeps unpromoted fields intact", () => {
  const result = overlayCompletion(map, evidence, 270);
  assert.deepEqual(overlayCompletion(result, evidence, 270), result);
  const selected = new Map(evidence.rows.map(r => [r.prefab, r]));
  for (const [prefab, before] of Object.entries(map)) {
    const r = selected.get(prefab);
    assert.deepEqual(result[prefab], r ? { ...before, ...completionTextFields(r) } : before);
  }
  assert.deepEqual(overlayCompletion(map, evidence, 0), map);
  assert.throws(() => overlayCompletion(map, evidence, 44));
  const wrong = structuredClone(map); wrong[evidence.rows[0].prefab].guid++;
  assert.throws(() => overlayCompletion(wrong, evidence, 270));
});
for (const [name, mutate] of Object.entries({
  "duplicate identity": (e: CompletionEvidence) => { e.rows[1] = e.rows[0]; },
  "unsigned GUID": (e: CompletionEvidence) => { e.rows[0].guid = 4294967295; },
  "source hash": (e: CompletionEvidence) => { e.rows[0].sourceSha256 = "0".repeat(64); },
  "signed identity": (e: CompletionEvidence) => { e.rows[0].guid++; },
  "localization key": (e: CompletionEvidence) => { e.rows[0].description.Key = e.rows[1].description.Key; e.rows[0].name.Key = "0".repeat(36); },
  "capture": (e: CompletionEvidence) => { e.rows[0].captureId = "other"; },
  "unresolved promotion": (e: CompletionEvidence) => { e.rows.find(r => r.nameDisposition === "unknown")!.nameDisposition = "promote"; },
  "held promotion": (e: CompletionEvidence) => { e.rows.find(r => r.descriptionDisposition === "held-empty-fragment")!.descriptionDisposition = "promote-native"; },
  "name from description": (e: CompletionEvidence) => { e.rows.find(r => r.nameDisposition === "held-shared-key")!.nameDisposition = "promote"; },
  "raw text": (e: CompletionEvidence) => { e.rows[0].description.EnglishText += "!"; },
  "native text": (e: CompletionEvidence) => { e.rows[0].native.text += "!"; },
  "unused row removed": (e: CompletionEvidence) => { e.rows.find(r => r.descriptionDisposition === "resolved-unused-parameters")!.parameters.Rows = []; },
  "parameter bound": (e: CompletionEvidence) => { e.rows[0].parameters.Count = 65; },
  "foreign parameter slice": (e: CompletionEvidence) => { const r = e.rows.find(r => r.parameters.Count > 0)!; r.parameters.Rows[0].bufferIndex++; },
  "computed parameter": (e: CompletionEvidence) => { const r = e.rows.find(r => r.observedFragments.length > 0)!; r.observedFragments[0].nativeFragment += "0"; },
  "numeric format": (e: CompletionEvidence) => { e.rows.find(r => r.parameters.Count > 0)!.parameters.Rows[0].numericFormatValue = 99; },
  "manifest": (e: CompletionEvidence) => { e.manifest.generalNumericRuleEstablished = true; }
})) test("reject completion evidence mutation: " + name, () => {
  const changed = structuredClone(evidence); mutate(changed); assert.throws(() => validateCompletionEvidence(changed));
});
