import { completionExpectedCounts } from "./blueprint-text-completion";
import assert from "node:assert/strict";
import { readFile, writeFile, mkdir, mkdtemp, rm } from "node:fs/promises";
import path from "node:path";
import { tmpdir } from "node:os";
import test from "node:test";
import { remainingSource, readRemaining, validateRemainingEvidence, overlayRemaining, remainingTextFields,
  type RemainingEvidence } from "./blueprint-text-remaining";
import type { BlueprintTextDisplay } from "./blueprint-text";
import { readApprovedBlueprintText, overlayApprovedBlueprintText, approvedBlueprintTextCoverage,
  assertApprovedBuildablePortraitDisplayName, preserveApprovedBlueprintTextValues } from "./approved-blueprint-text";

const root = process.cwd(), evidence = await readRemaining(root), approved = await readApprovedBlueprintText(root);
const map = JSON.parse(await readFile("data/enrichment/blueprint-display-map.json", "utf8")) as Record<string, BlueprintTextDisplay>;
test("all 790 exact remaining identities retain literal raw/native text, source hashes and signed GUIDs", () => {
  assert.equal(evidence.rows.length, 790); assert.equal(approved.rows.length, 928);
  assert.equal(approved.pilot.rows.length, 10); assert.equal(approved.expansion.rows.length, 128);
  assert.equal(evidence.rows[0].prefab, "TM_Castle_Fence_Iron03");
  assert.equal(evidence.rows.at(-1)!.prefab, "TM_Workstation_Waypoint_Castle_StrongbladeDLC");
  assert(evidence.rows.some(row => row.guid < 0));
  assert(approved.rows.some(row => row.prefab.includes("-")), "Accepted hyphenated identity remains present");
  assert(evidence.rows.every(row => row.descriptionRaw === row.native.text && row.parameters.Count === 0));
  assert.equal(new Set(evidence.rows.map(row => row.captureId)).size, 9);
});
for (const [label, mutate] of Object.entries({
  "duplicate prefab": (x: RemainingEvidence) => { x.rows[1] = x.rows[0]; },
  "ambiguous GUID": (x: RemainingEvidence) => { x.rows[1].guid = x.rows[0].guid; },
  "identity/order": (x: RemainingEvidence) => { [x.rows[0], x.rows[1]] = [x.rows[1], x.rows[0]]; },
  "unsigned GUID": (x: RemainingEvidence) => { x.rows[0].guid = 4294967295; },
  "route": (x: RemainingEvidence) => { x.rows[0].path += "-other"; },
  "source path": (x: RemainingEvidence) => { x.rows[0].sourcePath += ".other"; },
  "source hash": (x: RemainingEvidence) => { x.rows[0].sourceSha256 = "0".repeat(64); },
  "name key": (x: RemainingEvidence) => { x.rows[0].nameKey = x.rows[1].nameKey; },
  "description key": (x: RemainingEvidence) => { x.rows[0].descriptionKey = x.rows.find(row => row.descriptionKey !== x.rows[0].descriptionKey)!.descriptionKey; },
  "substituted string": (x: RemainingEvidence) => { x.rows[0].nameRaw += "!"; },
  "markup": (x: RemainingEvidence) => { x.rows[0].nameRaw = "<teal1>Other</c>"; },
  "placeholder": (x: RemainingEvidence) => { x.rows[0].descriptionRaw += "{unresolved}"; },
  "escape": (x: RemainingEvidence) => { x.rows[0].descriptionRaw += "\\n"; },
  "control character": (x: RemainingEvidence) => { x.rows[0].descriptionRaw += "\t"; },
  "nonzero parameter": (x: RemainingEvidence) => { x.rows[0].parameters.Count = 1; },
  "buffer metadata": (x: RemainingEvidence) => { x.rows[0].parameters.BufferLength = 0; },
  "parameter offset": (x: RemainingEvidence) => { x.rows[0].parameters.Index = 1; },
  "native disagreement": (x: RemainingEvidence) => { x.rows[0].native.toString += "!"; },
  "native lookup": (x: RemainingEvidence) => { x.rows[0].native.nameLookup = "Other"; },
  "capture membership": (x: RemainingEvidence) => { x.rows[0].captureId = "unknown"; },
  "capture provenance": (x: RemainingEvidence) => { x.manifest.captures["blueprints-10"].captureSha256 = "0".repeat(64); },
  "English table hash": (x: RemainingEvidence) => { x.manifest.englishSha256 = "0".repeat(64); },
  "part traversal": (x: RemainingEvidence) => { x.manifest.parts[0].path = "../outside.json"; },
  "unexpected row": (x: RemainingEvidence) => { x.rows.push(x.rows[0]); }
})) test("rejects mutated " + label, () => {
  const copy = structuredClone(evidence); mutate(copy); assert.throws(() => validateRemainingEvidence(copy));
});
test("shared description keys retain distinct exact owners", () => { assert.equal(evidence.rows[0].descriptionKey, evidence.rows[1].descriptionKey); assert.notEqual(evidence.rows[0].guid, evidence.rows[1].guid); assert.doesNotThrow(() => validateRemainingEvidence(evidence)); });
test("duplicate literal names preserve all distinct GUIDs and destinations", () => {
  const paintings = evidence.rows.filter(row => row.nameRaw === "Painting");
  assert.equal(paintings.length, 41); assert.equal(new Set(paintings.map(row => row.path)).size, 41);
  assert.equal(new Set(paintings.map(row => row.guid)).size, 41);
  assert.doesNotThrow(() => validateRemainingEvidence(evidence));
});
test("combined overlay is idempotent, preserves accepted records, icons and every unselected field", () => {
  const updated = overlayApprovedBlueprintText(map, approved), selected = new Set(evidence.rows.map(row => row.prefab));
  assert.deepEqual(overlayApprovedBlueprintText(updated, approved), updated);
  for (const [prefab, before] of Object.entries(map)) {
    if (!selected.has(prefab)) assert.deepEqual(updated[prefab], before);
    for (const field of ["iconAssetName", "iconAssetPath"] as const) assert.equal(updated[prefab][field], before[field]);
  }
  assert.deepEqual(approvedBlueprintTextCoverage(updated),
    { total: 1198, matched: completionExpectedCounts.signals, coveragePct: Number((completionExpectedCounts.signals / 1198).toFixed(4)), signal: "high-signal", lowSignalExcluded: 1198 - completionExpectedCounts.signals });
});
test("missing artwork works; missing, ambiguous and conflicting display joins fail closed", () => {
  const seed: Record<string, BlueprintTextDisplay> = Object.fromEntries(evidence.rows.map(row => [row.prefab, { prefab: row.prefab, guid: row.guid }]));
  const result = overlayRemaining(seed, evidence);
  assert(evidence.rows.every(row => result[row.prefab].iconAssetPath === undefined));
  for (const kind of ["missing", "guid", "name", "summary"]) {
    const copy = structuredClone(seed), prefab = evidence.rows[0].prefab;
    if (kind === "missing") delete copy[prefab];
    if (kind === "guid") copy[prefab].guid = 0;
    if (kind === "name") copy[prefab].displayNameEn = "Other";
    if (kind === "summary") copy[prefab].summaryEn = "Other";
    assert.throws(() => overlayRemaining(copy, evidence));
  }
});
test("internal review prefixes preserve unactivated rows without weakening full-witness validation", () => {
  const prefix = overlayRemaining(map, evidence, 100);
  for (const row of evidence.rows.slice(100)) assert.deepEqual(prefix[row.prefab], map[row.prefab]);
  for (const value of [0, 1, 101, 791, NaN]) assert.throws(() => overlayRemaining(map, evidence, value));
});
test("native artwork consistency accepts only source-owned copy and preserves weaker evidence", () => {
  const row = evidence.rows.find(row => row.prefab === "TM_Castle_Wall_Tier01_Wood_Entrance")!;
  const portrait = { prefab: row.prefab, guid: row.guid }, display = { ...portrait, ...remainingTextFields(row) };
  assert.doesNotThrow(() => assertApprovedBuildablePortraitDisplayName(portrait, display, approved));
  assert.throws(() => assertApprovedBuildablePortraitDisplayName({ ...portrait, guid: 0 }, display, approved));
  assert.throws(() => assertApprovedBuildablePortraitDisplayName({ ...portrait, displayNameEn: "Other" }, display, approved));
});
test("parameterized, held and missing-field records are excluded from the literal import", () => {
  for (const prefab of ["TM_Castle_SaplingPlanter_7x_Castle_Mega_Planter02", "TM_CraftingStation_Stables",
    "TM_Stash_Chest_SafetyBox", "TM_Castle_RefinementStation_Soulshard", "TM_Castle_Floor_TreasuryBase"])
    assert(!evidence.rows.some(row => row.prefab === prefab));
});
test("ordinary repository verification rejects stale source, canonical identity and evidence-part bytes", async () => {
  const directory = await mkdtemp(path.join(tmpdir(), "blueprint-remaining-"));
  try {
    for (const relative of [remainingSource, ...evidence.manifest.parts.map(part => part.path), ...evidence.rows.map(row => row.sourcePath)]) {
      await mkdir(path.dirname(path.join(directory, relative)), { recursive: true });
      await writeFile(path.join(directory, relative), await readFile(path.join(root, relative)));
    }
    await mkdir(path.join(directory, "data/prefabs"), { recursive: true });
    const all = Object.fromEntries(evidence.rows.map(row => [row.prefab, row.guid]));
    await writeFile(path.join(directory, "data/prefabs/All.json"), JSON.stringify(all));
    await readRemaining(directory);
    await writeFile(path.join(directory, evidence.rows[0].sourcePath), "Changed source");
    await assert.rejects(readRemaining(directory), /source hash mismatch/);
    await writeFile(path.join(directory, evidence.rows[0].sourcePath), await readFile(path.join(root, evidence.rows[0].sourcePath)));
    all[evidence.rows[0].prefab] = 0; await writeFile(path.join(directory, "data/prefabs/All.json"), JSON.stringify(all));
    await assert.rejects(readRemaining(directory), /canonical GUID mismatch/);
    await writeFile(path.join(directory, evidence.manifest.parts[0].path), '{"rows":[]}');
    await assert.rejects(readRemaining(directory), /Witness part hash/);
  } finally {
    assert.equal(path.dirname(directory), path.resolve(tmpdir())); assert(path.basename(directory).startsWith("blueprint-remaining-"));
    await rm(directory, { recursive: true, force: true });
  }
});

test("owned loader retains the captured Ancestral Forge space without masking source or identity drift", () => {
  const prefab = "TM_CraftingStation_AncestralForge", exact = "A workstation used for restoring ancient shattered weapons. ";
  assert.equal(map[prefab].summaryEn, exact);
  const parsed = Object.fromEntries(Object.entries(map).map(([key, value]) => [key, { ...value, summaryEn: value.summaryEn?.trim() }]));
  const preserved = preserveApprovedBlueprintTextValues(map, parsed, approved);
  assert.equal(preserved[prefab].summaryEn, exact);
  assert.equal(parsed[prefab].summaryEn, exact.trim());
  assert.equal(map[prefab].summaryEn, exact);
  const selected = new Set(approved.rows.map(row => row.prefab));
  for (const [key, value] of Object.entries(parsed)) {
    if (!selected.has(key)) assert.deepEqual(preserved[key], value);
    assert.equal(preserved[key].iconAssetName, value.iconAssetName);
    assert.equal(preserved[key].iconAssetPath, value.iconAssetPath);
  }
  const wrongRaw = structuredClone(map); wrongRaw[prefab].summaryEn = exact.trim();
  assert.throws(() => preserveApprovedBlueprintTextValues(wrongRaw, parsed, approved));
  const wrongIdentity = structuredClone(parsed); wrongIdentity[prefab].guid = 0;
  assert.throws(() => preserveApprovedBlueprintTextValues(map, wrongIdentity, approved));
});
