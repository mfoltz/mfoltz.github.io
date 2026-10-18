import assert from "node:assert/strict";
import { readFile, writeFile, mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { readBlueprintText, overlayBlueprintText, type BlueprintTextDisplay } from "./blueprint-text";
import { readExpansion, validateExpansionEvidence, expansionTextFields, overlayExpansion, literalBlueprintText,
  expansionSource, type ExpansionEvidence } from "./blueprint-text-expansion";
import { readApprovedBlueprintText, overlayApprovedBlueprintText, approvedBlueprintTextCoverage,
  assertApprovedBuildablePortraitDisplayName } from "./approved-blueprint-text";

const root = process.cwd(), evidence = await readExpansion(root), approved = await readApprovedBlueprintText(root);
const map = JSON.parse(await readFile("data/enrichment/blueprint-display-map.json", "utf8")) as Record<string, BlueprintTextDisplay>;
test("exact frozen 128 identities, signed GUIDs and portable retained-source evidence", () => {
  assert.equal(evidence.rows.length, 128); assert(evidence.rows.some(row => row.guid < 0));
  assert.equal(evidence.rows[0].prefab, "BP_Castle_Chain_Plant_BleedingHeart");
  assert.equal(evidence.rows.at(-1)!.prefab, "TM_Castle_Fence_Iron02");
  assert(evidence.rows.every(row => row.parameters.Count === 0 && row.native.text === row.descriptionRaw));
  assert.equal(approved.rows.length, 738); assert.equal(approved.pilot.rows.length, 10);
});
test("literal text is preserved without whitespace or numeric formatting", () => {
  for (const text of ["Plant", "A  literal sentence.", "â€˜Ownedâ€™ punctuation â€” intact.", "15% remains 15%."])
    assert.equal(literalBlueprintText(text), text);
  for (const text of ["", "   ", "{slots}", "<teal1>x</c>", "<", "x\\n", "x\n", "x\t", "x\0"])
    assert.throws(() => literalBlueprintText(text));
});
for (const [label, change] of Object.entries({
  "duplicate identity": (e: ExpansionEvidence) => { e.rows[1] = e.rows[0]; },
  "signed GUID": (e: ExpansionEvidence) => { e.rows[0].guid *= -1; },
  "source path": (e: ExpansionEvidence) => { e.rows[0].sourcePath += ".other"; },
  "source hash": (e: ExpansionEvidence) => { e.rows[0].sourceSha256 = "0".repeat(64); },
  "name key": (e: ExpansionEvidence) => { e.rows[0].nameKey = e.rows[14].nameKey; },
  "description key": (e: ExpansionEvidence) => { e.rows[0].descriptionKey = e.rows[14].descriptionKey; },
  "raw/native disagreement": (e: ExpansionEvidence) => { e.rows[0].descriptionRaw += "!"; },
  "native text and string": (e: ExpansionEvidence) => { e.rows[0].native.toString += "!"; },
  "native result key": (e: ExpansionEvidence) => { e.rows[0].native.resultKey = e.rows[14].descriptionKey; },
  "nonzero parameters": (e: ExpansionEvidence) => { e.rows[0].parameters.Count = 1; },
  "unsafe range": (e: ExpansionEvidence) => { e.rows[0].parameters.Index = -1; },
  "buffer metadata": (e: ExpansionEvidence) => { e.rows[0].parameters.BufferLength = 1; },
  "markup": (e: ExpansionEvidence) => { e.rows[0].nameRaw = "<b>Plant</b>"; },
  "placeholder": (e: ExpansionEvidence) => { e.rows[0].descriptionRaw += "{unknown}"; },
  "native lookup": (e: ExpansionEvidence) => { e.rows[0].native.nameLookup = "Substituted"; },
  "capture membership": (e: ExpansionEvidence) => { e.rows[0].captureId = "unapproved"; },
  "capture hash": (e: ExpansionEvidence) => { e.manifest.captures["blueprints-01"].captureSha256 = "0".repeat(64); },
  "English hash": (e: ExpansionEvidence) => { e.manifest.englishSha256 = "0".repeat(64); },
  "extra identity": (e: ExpansionEvidence) => { e.rows.push(e.rows[0]); },
  "part path escape": (e: ExpansionEvidence) => { e.manifest.parts[0].path = "../outside.json"; },
  "exact destination": (e: ExpansionEvidence) => { e.rows[0].path += "-wrong"; }
})) test(`rejects mutated ${label}`, () => {
  const copy = structuredClone(evidence); change(copy); assert.throws(() => validateExpansionEvidence(copy));
});
test("shared owned keys and duplicate names remain distinct exact records", () => {
  const plants = evidence.rows.filter(row => row.nameRaw === "Plant");
  assert.equal(plants.length, 14); assert.equal(new Set(plants.map(row => row.nameKey)).size, 1);
  assert.equal(new Set(plants.map(row => row.path)).size, 14);
  assert.doesNotThrow(() => validateExpansionEvidence(evidence));
});
test("overlays are deterministic, preserve artwork and all unselected rows", () => {
  const updated = overlayApprovedBlueprintText(map, approved);
  assert.deepEqual(overlayApprovedBlueprintText(updated, approved), updated);
  const selected = new Set(approved.rows.map(row => row.prefab));
  for (const [prefab, row] of Object.entries(map)) {
    if (!selected.has(prefab)) assert.deepEqual(updated[prefab], row);
    for (const field of ["iconAssetName", "iconAssetPath"] as const) assert.equal(updated[prefab][field], row[field]);
  }
  assert.deepEqual(approvedBlueprintTextCoverage(updated), { total: 1198, matched: 744, coveragePct: 0.621, signal: "high-signal", lowSignalExcluded: 454 });
});
test("version-1 pilot still leaves Plant and Debug outside its standalone overlay", async () => {
  const pilot = await readBlueprintText(root);
  const seed = Object.fromEntries(pilot.rows.map(row => [row.prefab, { prefab: row.prefab, guid: row.guid }]));
  for (const prefab of ["BP_Castle_Chain_Plant_BleedingHeart", "BP_Castle_Debug_Room"])
    seed[prefab] = { prefab, guid: map[prefab].guid };
  const result = overlayBlueprintText(seed, pilot);
  for (const prefab of ["BP_Castle_Chain_Plant_BleedingHeart", "BP_Castle_Debug_Room"]) assert.deepEqual(result[prefab], seed[prefab]);
  assert(pilot.rows.at(-1)!.prefab.includes("Cross-Section"));
});
test("missing artwork works and missing/conflicting joins remain rejected", () => {
  const seed: Record<string, BlueprintTextDisplay> = Object.fromEntries(evidence.rows.map(row => [row.prefab, { prefab: row.prefab, guid: row.guid }]));
  assert(evidence.rows.every(row => overlayExpansion(seed, evidence)[row.prefab].iconAssetPath === undefined));
  for (const kind of ["missing", "guid", "name", "summary"]) {
    const copy = structuredClone(seed), prefab = evidence.rows[0].prefab;
    if (kind === "missing") delete copy[prefab];
    if (kind === "guid") copy[prefab].guid = 0;
    if (kind === "name") copy[prefab].displayNameEn = "Wrong";
    if (kind === "summary") copy[prefab].summaryEn = "Wrong";
    assert.throws(() => overlayExpansion(copy, evidence));
  }
});
test("source-owned copy does not promote artwork evidence or accept conflicting labels", () => {
  const row = evidence.rows.find(row => row.prefab === "BP_Castle_Wall_Tier01_Wood_Entrance")!;
  const portrait = { prefab: row.prefab, guid: row.guid }, display = { ...portrait, ...expansionTextFields(row) };
  assert.doesNotThrow(() => assertApprovedBuildablePortraitDisplayName(portrait, display, approved));
  assert.throws(() => assertApprovedBuildablePortraitDisplayName({ ...portrait, guid: -1 }, display, approved));
  assert.throws(() => assertApprovedBuildablePortraitDisplayName({ ...portrait, displayNameEn: "Wrong" }, display, approved));
});
async function withFixture(run: (directory: string) => Promise<void>) {
  const directory = await mkdtemp(path.join(tmpdir(), "blueprint-evidence-"));
  try {
    for (const relative of [expansionSource, ...evidence.manifest.parts.map(part => part.path), ...evidence.rows.map(row => row.sourcePath)]) {
      await mkdir(path.dirname(path.join(directory, relative)), { recursive: true });
      await writeFile(path.join(directory, relative), await readFile(path.join(root, relative)));
    }
    await mkdir(path.join(directory, "data/prefabs"), { recursive: true });
    await writeFile(path.join(directory, "data/prefabs/All.json"), JSON.stringify(Object.fromEntries(evidence.rows.map(row => [row.prefab, row.guid]))));
    await run(directory);
  } finally {
    assert.equal(path.dirname(directory), path.resolve(tmpdir())); assert(path.basename(directory).startsWith("blueprint-evidence-"));
    await rm(directory, { recursive: true, force: true });
  }
}
test("ordinary source validation rejects stale retained bytes independently", async () => withFixture(async directory => {
  await readExpansion(directory);
  await writeFile(path.join(directory, evidence.rows[0].sourcePath), "Changed snapshot");
  await assert.rejects(readExpansion(directory), /source hash mismatch/);
}));
test("canonical GUID and witness part tampering fail closed", async () => withFixture(async directory => {
  const all = Object.fromEntries(evidence.rows.map(row => [row.prefab, row.guid])); all[evidence.rows[0].prefab] *= -1;
  await writeFile(path.join(directory, "data/prefabs/All.json"), JSON.stringify(all));
  await assert.rejects(readExpansion(directory), /canonical GUID mismatch/);
  await writeFile(path.join(directory, evidence.manifest.parts[0].path), "{\"rows\":[]}");
  await assert.rejects(readExpansion(directory), /Witness part hash/);
}));
