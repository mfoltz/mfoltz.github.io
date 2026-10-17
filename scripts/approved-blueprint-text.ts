import assert from "node:assert/strict";
import { assertBlueprintTextDisplay, assertBuildablePortraitDisplayName, blueprintTextFields,
  overlayBlueprintText, readBlueprintText, type BlueprintTextDisplay, type BlueprintTextCapture } from "./blueprint-text";
import { expansionTextFields, overlayExpansion, readExpansion, validateExpansionEvidence,
  type ExpansionEvidence } from "./blueprint-text-expansion";

export interface ApprovedBlueprintTextRow {
  prefab: string; guid: number; sourcePath: string; nameRaw: string; nameKey: string; path?: string;
  fields: ReturnType<typeof blueprintTextFields>;
}
export interface ApprovedBlueprintText {
  pilot: BlueprintTextCapture; expansion: ExpansionEvidence; rows: ApprovedBlueprintTextRow[];
}
export async function readApprovedBlueprintText(root: string): Promise<ApprovedBlueprintText> {
  const [pilot, expansion] = await Promise.all([readBlueprintText(root), readExpansion(root)]);
  const rows = [...pilot.rows.map(row => ({ ...row, fields: blueprintTextFields(row) })),
    ...expansion.rows.map(row => ({ ...row, fields: expansionTextFields(row) }))];
  assert.equal(rows.length, 138); assert.equal(new Set(rows.map(row => row.prefab)).size, 138);
  return { pilot, expansion, rows };
}
export function overlayApprovedBlueprintText<T extends BlueprintTextDisplay>(map: Record<string, T>, evidence: ApprovedBlueprintText) {
  return overlayExpansion(overlayBlueprintText(map, evidence.pilot), evidence.expansion);
}
export function assertApprovedBlueprintTextDisplay(map: Record<string, BlueprintTextDisplay>, evidence: ApprovedBlueprintText): void {
  assertBlueprintTextDisplay(map, evidence.pilot);
  const expected = overlayExpansion(map, evidence.expansion);
  for (const row of evidence.expansion.rows)
    assert.deepEqual(map[row.prefab], expected[row.prefab], `${row.prefab}: display differs from exact expansion witness`);
}
export function approvedBlueprintTextCoverage(map: Record<string, BlueprintTextDisplay>) {
  assert.equal(Object.keys(map).length, 1198, "Blueprint census divergence");
  const matched = Object.values(map).filter(row => !["catalog-seed", "generated-fallback", "alias-match"].includes(row.sourceKind ?? "")
    && Boolean(row.displayNameEn || row.displayLocalizationGuid || row.summaryEn || row.iconAssetName || row.iconAssetPath)).length;
  assert.equal(matched, 144, "Expected 138 owned-text and six remaining existing display rows");
  return { total: 1198, matched, coveragePct: Number((matched / 1198).toFixed(4)), signal: "high-signal", lowSignalExcluded: 1198 - matched };
}
/** Keep artwork evidence and workstation checks independent of owned Blueprint copy. */
export function assertApprovedBuildablePortraitDisplayName(
  portrait: { prefab: string; guid: number; displayNameEn?: string }, display: BlueprintTextDisplay | undefined,
  evidence?: ApprovedBlueprintText
): void {
  const row = evidence?.expansion.rows.find(row => row.prefab === portrait.prefab);
  if (!row) return assertBuildablePortraitDisplayName(portrait, display, evidence?.pilot);
  validateExpansionEvidence(evidence!.expansion);
  assert.equal(portrait.guid, row.guid, `${row.prefab}: owned text/artwork GUID mismatch`);
  assert(display && display.prefab === row.prefab && display.guid === row.guid, `${row.prefab}: owned display join mismatch`);
  const fields = expansionTextFields(row);
  for (const key of Object.keys(fields) as (keyof typeof fields)[])
    assert.equal(display[key], fields[key], `${row.prefab}: display ${key} differs from witness`);
  if (portrait.displayNameEn !== undefined) assert.equal(portrait.displayNameEn, row.nameRaw, `${row.prefab}: conflicting artwork label`);
}
