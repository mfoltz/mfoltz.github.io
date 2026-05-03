# Tooltip/Journal Asset Inference Scout

Generated: 2026-05-03T16:55:56.503Z

## Verdict

No canonical promotion candidate was found in this pass. The existing dumps are useful for decode shape, UI binding, formatter keys, and some stale direct names, but the scout did not find a joinable gameplay localization table or current journal/quest content rows that would justify updating canonical enrichment maps.

Stop boundary reached: journal/quest evidence is currently layout/key/shape evidence unless a managed-data dump or gameplay localization join is added. No live client dump was attempted.

## Write Boundary

- Outputs only: `.codex-tmp/tooltip-journal-asset-scout/report.md` and `.codex-tmp/tooltip-journal-asset-scout/report.json`
- Canonical files mutated: no
- Live client or player-gated dump attempted: no
- Canonical enrichment, generated DB output, icons, UI, and resolver defaults were left untouched.

## Input Summary

- Asset dump: `C:\Users\mitch\OneDrive\Documents\Unorganized\Assets` (known-local-default, exists: true)
- MonoBehaviour JSON files: 117189
- TextAsset files: 83
- Texture2D PNG files: 12329; Stunlock icon PNG files: 2139
- Extractor receipt count: 376
- Quest/journal/achievement snapshot-name hits under extractor runs: 0

## Current Coverage Snapshot

| Map | Matched | Total | Coverage | Low Signal Excluded |
| --- | --- | --- | --- | --- |
| ability-tooltip-map | 54 | 54 | 100.00% | 0 |
| blueprint-display-map | 8 | 1198 | 0.67% | 1190 |
| buff-display-map | 7 | 3274 | 0.21% | 3267 |
| item-description-map | 884 | 1130 | 78.23% | 0 |
| item-icon-map | 1128 | 1130 | 99.82% | 0 |
| itemset-display-map | 4 | 143 | 2.80% | 139 |
| npc-classification-map | 1114 | 1114 | 100.00% | 0 |
| npc-display-map | 514 | 1110 | 46.31% | 596 |
| quest-display-map | 0 | 163 | 0.00% | 163 |
| recipe-link-map | 667 | 667 | 100.00% | 0 |
| workstation-display-map | 136 | 136 | 100.00% | 0 |

## Evidence Classifications

| Domain | Classification | Confidence | Finding | Promote Now |
| --- | --- | --- | --- | --- |
| ability tooltips | direct-decode | bounded-current-canonical | Current canonical map remains high-signal for 54/54 catalog entries. | no |
| journal and quests | structured-join | medium for shape, low for content | Quest display coverage remains 0/163 high-signal with 163 low-signal excluded rows. | no |
| localization tables | speculative | low | TextAsset scan saw 83 files; marker hits did not identify a gameplay localization table suitable for joining hashed keys to English copy. | no |
| client tooltip snapshots | direct-decode | limited-stale | Latest successful tooltipread (20260328-041533) has 2010 AbilityGroupsClient rows with first-row keys PrefabName, AbilityGroupId, LocalizedName. | no |
| server ECS values | source-adjacent | medium for numeric values, low for copy | Server ECS evidence file is present (2861834 bytes) and is appropriate only as raw-unverified variable/value evidence. | no |
| managed data model definitions | structured-join | high for target components, no content rows here | Model files expose ManagedAchievementData, AchievementSubTaskData, ManagedJournalTooltip, and AbilityTooltipData shapes, but existing snapshots do not include quest/journal content rows. | no |

## MonoBehaviour Target Families

| Family | Count | Class | LKey Fields | Hash Objects | Object Refs | Reason |
| --- | --- | --- | --- | --- | --- | --- |
| JournalSettings | 1 | structured-join | 22 | 22 | 4 | Formatter/localization-key settings for the journal surface; no per-entry player copy found in this file. |
| AchievementEntry | 3 | structured-join | 0 | 1 | 46 | Journal/achievement UI binding and formatting surface; useful for decode shape but not canonical quest copy by itself. |
| AchievementSubEntry | 12 | structured-join | 0 | 1 | 8 | Journal/achievement UI binding and formatting surface; useful for decode shape but not canonical quest copy by itself. |
| AbilityTooltip | 14 | structured-join | 5 | 5 | 30 | Ability tooltip formatter/localization-key surface; useful for joining text and variables but not sufficient alone. |
| AbilityTooltipSettingsLocalizationKeysAsset | 1 | structured-join | 0 | 22 | 4 | Ability tooltip formatter/localization-key surface; useful for joining text and variables but not sufficient alone. |
| TooltipEntry | 1 | layout-only | 0 | 0 | 12 | UI component surface with references rather than standalone player-visible content. |
| TooltipAbilityDataEntry | 140 | structured-join | 0 | 0 | 6 | UI component surface with references rather than standalone player-visible content. |
| TooltipSetItemEntry | 1390 | structured-join | 0 | 0 | 6 | UI component surface with references rather than standalone player-visible content. |
| TooltipSpellModEntry | 549 | structured-join | 0 | 0 | 8 | UI component surface with references rather than standalone player-visible content. |
| TooltipItemStatsEntry | 305 | structured-join | 0 | 0 | 8 | UI component surface with references rather than standalone player-visible content. |
| LocalizedText | 8514 | layout-only | 0 | 1 | 4 | UI component surface with references rather than standalone player-visible content. |
| TextMeshProUGUI | 11939 | layout-only | 0 | 0 | 24 | UI component surface with references rather than standalone player-visible content. |

## Extractor Run Read

- Latest successful tooltipread: 20260328-041533 (2026-03-28T04:15:55.9824544-05:00, versionMismatch: true)
- Latest failed/timeout tooltipread: 20260502-204254 (2026-05-02T20:42:54.8381252-05:00, classification: floor-not-green, diagnosticFocus: client-steamipv4-timeout-before-runtime-init, versionMismatch: true)
- Latest successful AbilityGroupsClient rows: 2010
- Latest successful AbilityGroupsClient first-row keys: PrefabName, AbilityGroupId, LocalizedName
- Quest/journal/achievement snapshot-name hits: none

## TextAsset Read

TextAsset files did not expose an obvious gameplay localization table suitable for joining MonoBehaviour hashed keys to English player copy. Marker-hit files are listed in `report.json`; the hits were treated as speculative rather than source data.

## Spot Checks

| Source | Expected | Result | Note |
| --- | --- | --- | --- |
| JournalSettings.json | structured-join | structured-join |  |
| AchievementEntry*.json | structured-join | structured-join |  |
| AbilityTooltip*.json | structured-join | structured-join |  |
| AbilityGroupsClient.json | direct-decode | direct-decode | Direct only for stale ability-group name rows; not rich tooltip or journal copy. |
| server-ecs-component-evidence.json | source-adjacent | source-adjacent |  |

## Next Moves

- Keep quest-display rows low-signal until a gameplay localization table or managed-data content dump can join keys to player copy.
- Use managed component shapes as the next direct-decode target: `ManagedAchievementData`, `AchievementSubTaskData`, `ManagedJournalTooltip`, and `AbilityTooltipData`.
- Treat server ECS evidence as variable/value support only after copy exists.
- Do not retry live tooltipprobe/read from this scout; runtime/client startup readiness remains the blocker.
