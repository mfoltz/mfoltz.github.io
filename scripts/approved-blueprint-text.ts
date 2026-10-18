import assert from "node:assert/strict";
import { readRemaining, remainingTextFields, overlayRemaining, validateRemainingEvidence, type RemainingEvidence } from "./blueprint-text-remaining";
const importedRemainingCount = 600;
import { assertBlueprintTextDisplay, assertBuildablePortraitDisplayName, blueprintTextFields,
  overlayBlueprintText, readBlueprintText, type BlueprintTextDisplay, type BlueprintTextCapture } from "./blueprint-text";
import { expansionTextFields, overlayExpansion, readExpansion, validateExpansionEvidence,
  type ExpansionEvidence } from "./blueprint-text-expansion";

export interface ApprovedBlueprintTextRow {
  prefab: string; guid: number; sourcePath: string; nameRaw: string; nameKey: string; path?: string;
  fields: ReturnType<typeof blueprintTextFields>;
}
export interface ApprovedBlueprintText {
  pilot: BlueprintTextCapture; expansion: ExpansionEvidence; remaining: RemainingEvidence; rows: ApprovedBlueprintTextRow[];
}
export async function readApprovedBlueprintText(root: string): Promise<ApprovedBlueprintText> {
  const [pilot, expansion, remaining] = await Promise.all([readBlueprintText(root), readExpansion(root), readRemaining(root)]);
  const rows = [...pilot.rows.map(row => ({ ...row, fields: blueprintTextFields(row) })),
    ...expansion.rows.map(row => ({ ...row, fields: expansionTextFields(row) })),
    ...remaining.rows.slice(0, importedRemainingCount).map(row => ({ ...row, fields: remainingTextFields(row) }))];
  assert.equal(rows.length, 138 + importedRemainingCount); assert.equal(new Set(rows.map(row => row.prefab)).size, 138 + importedRemainingCount);
  return { pilot, expansion, remaining, rows };
}
export function overlayApprovedBlueprintText<T extends BlueprintTextDisplay>(map: Record<string, T>, evidence: ApprovedBlueprintText) {
  return overlayRemaining(overlayExpansion(overlayBlueprintText(map, evidence.pilot), evidence.expansion), evidence.remaining, importedRemainingCount);
}
export function assertApprovedBlueprintTextDisplay(map: Record<string, BlueprintTextDisplay>, evidence: ApprovedBlueprintText): void {
  assertBlueprintTextDisplay(map, evidence.pilot);
  const expected = overlayExpansion(map, evidence.expansion);
  for (const row of evidence.expansion.rows)
    assert.deepEqual(map[row.prefab], expected[row.prefab], `${row.prefab}: display differs from exact expansion witness`);
  const remaining = overlayRemaining(map, evidence.remaining, importedRemainingCount);
  for (const row of evidence.remaining.rows.slice(0, importedRemainingCount))
    assert.deepEqual(map[row.prefab], remaining[row.prefab], row.prefab + ": display differs from exact remaining witness");
}
export function approvedBlueprintTextCoverage(map: Record<string, BlueprintTextDisplay>) {
  assert.equal(Object.keys(map).length, 1198, "Blueprint census divergence");
  const matched = Object.values(map).filter(row => !["catalog-seed", "generated-fallback", "alias-match"].includes(row.sourceKind ?? "")
    && Boolean(row.displayNameEn || row.displayLocalizationGuid || row.summaryEn || row.iconAssetName || row.iconAssetPath)).length;
  assert.equal(matched, 744, "Expected 744 approved display rows");
  return { total: 1198, matched, coveragePct: Number((matched / 1198).toFixed(4)), signal: "high-signal", lowSignalExcluded: 1198 - matched };
}
/** Keep artwork evidence and workstation checks independent of owned Blueprint copy. */
export function assertApprovedBuildablePortraitDisplayName(
  portrait: { prefab: string; guid: number; displayNameEn?: string }, display: BlueprintTextDisplay | undefined,
  evidence?: ApprovedBlueprintText
): void {
  const newer = evidence?.remaining.rows.slice(0, importedRemainingCount).find(row => row.prefab === portrait.prefab);
  const row = newer ?? evidence?.expansion.rows.find(row => row.prefab === portrait.prefab);
  if (!row) return assertBuildablePortraitDisplayName(portrait, display, evidence?.pilot);
  if (newer) validateRemainingEvidence(evidence!.remaining);
  else validateExpansionEvidence(evidence!.expansion);
  assert.equal(portrait.guid, row.guid, `${row.prefab}: owned text/artwork GUID mismatch`);
  assert(display && display.prefab === row.prefab && display.guid === row.guid, `${row.prefab}: owned display join mismatch`);
  const fields = newer ? remainingTextFields(row) : expansionTextFields(row);
  for (const key of Object.keys(fields) as (keyof typeof fields)[])
    assert.equal(display[key], fields[key], `${row.prefab}: display ${key} differs from witness`);
  if (portrait.displayNameEn !== undefined) assert.equal(portrait.displayNameEn, row.nameRaw, `${row.prefab}: conflicting artwork label`);
}
