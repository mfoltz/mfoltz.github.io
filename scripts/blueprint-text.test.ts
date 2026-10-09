import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { blueprintPlainText, blueprintTextFields, blueprintTextTargets, overlayBlueprintText, readBlueprintText,
  validateBlueprintTextCapture, blueprintTextCoverage, assertBuildablePortraitDisplayName, type BlueprintTextDisplay } from "./blueprint-text";
const capture = await readBlueprintText(process.cwd());
const original = JSON.parse(await readFile("data/enrichment/blueprint-display-map.json", "utf8")) as Record<string, BlueprintTextDisplay>;

test("ten frozen signed identities reproduce retained Markdown and accepted witness", () => {
  assert.deepEqual(capture.rows.map(row => [row.prefab, row.guid]), blueprintTextTargets);
  assert.equal(capture.rows.filter(row => row.parameters.Count > 0).length, 1);
  assert.equal(capture.rows.at(-1)!.prefab.includes("Cross-Section"), true);
});
test("plain text removes only balanced audited colors and explicitly allowed newline escapes", () => {
  assert.equal(blueprintPlainText("A <teal1>blood potion</c>."), "A blood potion.");
  assert.equal(blueprintPlainText("One\\n\\nTwo", true), "One Two");
  assert.equal(blueprintPlainText("Speed <color=#6B9EB2>15%</color>", false, true), "Speed 15%");
  for (const text of ["<script>x</script>", "<teal4>x</c>", "<teal1>x", "x</c>", "{missing}", "x\\t", "x\\n", "<b>x</b>", "<teal1>x</color>", "<", ""]) {
    assert.throws(() => blueprintPlainText(text), text);
  }
});
test("native carpet result is imported exactly without formatting its raw value", () => {
  const row = capture.rows.at(-1)!;
  assert.equal(row.parameters.Rows[0].value, "15");
  assert.equal(blueprintTextFields(row).summaryEn,
    "A splendid carpet that increases your movement speed by 15%. There is no better way to hide all the dust!");
  assert.equal(capture.generalNumericRuleEstablished, false);
  assert.equal(capture.uiEquivalenceEstablished, false);
});
for (const [label, mutate] of Object.entries({
  "duplicate identity": (copy: typeof capture) => { copy.rows[1] = copy.rows[0]; },
  "wrong signed GUID": (copy: typeof capture) => { copy.rows[0].guid *= -1; },
  "wrong source path": (copy: typeof capture) => { copy.rows[0].sourcePath += ".other"; },
  "wrong source hash": (copy: typeof capture) => { copy.rows[0].sourceSha256 = "0".repeat(64); },
  "different localization key": (copy: typeof capture) => { copy.rows[0].nameKey = copy.rows[1].nameKey; },
  "different English text": (copy: typeof capture) => { copy.rows[0].nameRaw = "Substituted title"; },
  "unsafe range": (copy: typeof capture) => { copy.rows[9].parameters.Index = 1; },
  "incorrect native result key": (copy: typeof capture) => { copy.rows[9].nativeDescription!.resultKey = copy.rows[0].descriptionKey; },
  "native disagreement": (copy: typeof capture) => { copy.rows[9].nativeDescription!.toString += "!"; },
  "changed capture provenance": (copy: typeof capture) => { copy.batch.captureAssemblySha256 = "0".repeat(64); },
  "unresolved token": (copy: typeof capture) => { copy.rows[1].descriptionRaw += "{unknown}"; },
  "extra target": (copy: typeof capture) => { copy.rows.push(copy.rows[0]); }
})) test(`rejects ${label}`, () => {
  const copy = structuredClone(capture); mutate(copy); assert.throws(() => validateBlueprintTextCapture(copy));
});
test("overlay is deterministic/idempotent and preserves all artwork and unrelated rows", () => {
  const overlaid = overlayBlueprintText(original, capture);
  assert.deepEqual(overlayBlueprintText(overlaid, capture), overlaid);
  const targets = new Set<string>(capture.rows.map(row => row.prefab));
  for (const [prefab, before] of Object.entries(original)) {
    if (!targets.has(prefab)) assert.deepEqual(overlaid[prefab], before);
    assert.equal(overlaid[prefab].iconAssetName, before.iconAssetName);
    assert.equal(overlaid[prefab].iconAssetPath, before.iconAssetPath);
  }
  assert.deepEqual(blueprintTextCoverage(overlaid), { total: 1198, matched: 18, coveragePct: 0.015, signal: "high-signal", lowSignalExcluded: 1180 });
});
test("missing artwork is supported; missing or conflicting joins are rejected", () => {
  const map: Record<string, BlueprintTextDisplay> = Object.fromEntries(capture.rows.map(row => [row.prefab, { prefab: row.prefab, guid: row.guid }]));
  const overlaid = overlayBlueprintText(map, capture);
  assert(capture.rows.every(row => overlaid[row.prefab].iconAssetPath === undefined));
  for (const change of ["missing", "guid", "name", "summary"]) {
    const bad: Record<string, BlueprintTextDisplay> = structuredClone(map); const first = capture.rows[0].prefab;
    if (change === "missing") delete bad[first];
    if (change === "guid") bad[first].guid = 0;
    if (change === "name") bad[first].displayNameEn = "Conflicting";
    if (change === "summary") bad[first].summaryEn = "Conflicting";
    assert.throws(() => overlayBlueprintText(bad, capture));
  }
});

test("owned floor text coexists with an absent historical artwork label without accepting conflicts", () => {
  const row = capture.rows.find(row => row.prefab === "TM_Castle_Floor_AlchemyLab01")!;
  const portrait = { prefab: row.prefab, guid: row.guid };
  const display = { ...portrait, ...blueprintTextFields(row) };
  assert.doesNotThrow(() => assertBuildablePortraitDisplayName(portrait, display, capture));
  assert.throws(() => assertBuildablePortraitDisplayName({ ...portrait, guid: 0 }, display, capture));
  assert.throws(() => assertBuildablePortraitDisplayName({ ...portrait, displayNameEn: "Substituted" }, display, capture));
  for (const field of ["displayNameEn", "displayLocalizationGuid", "summaryEn", "sourceKind", "sourceRef"] as const) {
    assert.throws(() => assertBuildablePortraitDisplayName(portrait, { ...display, [field]: "Wrong" }, capture));
  }
  assert.throws(() => assertBuildablePortraitDisplayName(portrait, undefined, capture));
});
test("non-pilot and workstation artwork labels retain the original consistency check", () => {
  const portrait = { prefab: "TM_Other", guid: 1, displayNameEn: "Original" };
  const display = { ...portrait, displayNameEn: "Changed" };
  assert.throws(() => assertBuildablePortraitDisplayName(portrait, display, capture));
  assert.doesNotThrow(() => assertBuildablePortraitDisplayName(portrait, { ...display, displayNameEn: "Original" }, capture));
  const owned = capture.rows[0];
  assert.throws(() => assertBuildablePortraitDisplayName({ prefab: owned.prefab, guid: owned.guid },
    { prefab: owned.prefab, guid: owned.guid, displayNameEn: "Workstation name" }));
});
