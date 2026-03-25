# Ingestion Readiness Report

Generated: 2026-03-25T10:54:32.190Z
Repo root: C:/Users/mitch/source/Repos/mfoltz.github.io

## Overall

- Blockers: 0
- Warnings: 3
- Report directory: C:/Users/mitch/source/Repos/mfoltz.github.io/.codex-tmp/ingestion-readiness/20260325-055432

### Shared warnings

- recipes is currently satisfied by a transient stateful run artifact instead of a stable profile snapshot.
- Items rich asset lane: marked prep-needed.
- NPC display lane: proceed-with-warnings.

## Shared Source Readiness

- [ready] Bloodcraft resources: C:/Users/mitch/source/Repos/Bloodcraft/Resources (required)
- [ready] Asset dump: C:/Users/mitch/OneDrive/Documents/Assets (required)
- [ready] Extractor repo: C:/Users/mitch/source/Repos/VRising.DataExtractor (required)
- [ready] Enrichment snapshot: coverage-thresholds.json: C:/Users/mitch/source/Repos/mfoltz.github.io/data/enrichment/coverage-thresholds.json (required)
- [ready] Enrichment snapshot: enrichment-coverage.json: C:/Users/mitch/source/Repos/mfoltz.github.io/data/enrichment/enrichment-coverage.json (required)
- [ready] Enrichment snapshot: ability-tooltip-map.json: C:/Users/mitch/source/Repos/mfoltz.github.io/data/enrichment/ability-tooltip-map.json (required)
- [ready] Enrichment snapshot: item-icon-map.json: C:/Users/mitch/source/Repos/mfoltz.github.io/data/enrichment/item-icon-map.json (required)
- [ready] Enrichment snapshot: item-description-map.json: C:/Users/mitch/source/Repos/mfoltz.github.io/data/enrichment/item-description-map.json (required)
- [ready] Enrichment snapshot: item-icon-unresolved.json: C:/Users/mitch/source/Repos/mfoltz.github.io/data/enrichment/item-icon-unresolved.json (required)
- [ready] Enrichment snapshot: recipe-link-map.json: C:/Users/mitch/source/Repos/mfoltz.github.io/data/enrichment/recipe-link-map.json (required)
- [ready] Enrichment snapshot: npc-display-map.json: C:/Users/mitch/source/Repos/mfoltz.github.io/data/enrichment/npc-display-map.json (required)
- [ready] Enrichment snapshot: workstation-display-map.json: C:/Users/mitch/source/Repos/mfoltz.github.io/data/enrichment/workstation-display-map.json (required)

## Broad Control Readiness

- Status: READY
- [ready] abilities: 2010/2010 via profile:full-dumponly -> C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/persistent-data/profiles/vrising-dataextractor-client-connect-full-dumponly/VRising.DataExtractor/AbilityGroupsClient.json
  - Selected artifact comes from the full-dumponly regression-sentinel profile.
- [ready] items: 1076/1076 via profile:full-dumponly -> C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/persistent-data/profiles/vrising-dataextractor-client-connect-full-dumponly/VRising.DataExtractor/ItemsClient.json
  - Selected artifact comes from the full-dumponly regression-sentinel profile.
- [ready] recipes: 667/667 via run:stateful -> C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/runs/20260325-010859/vrising-dataextractor-client-connect-stateful-dump/snapshots/VRising.DataExtractor/RecipesClient.json
  - recipes is currently satisfied by a transient stateful run artifact instead of a stable profile snapshot.

## Stateful Harness Readiness

- Status: READY
- Saved-world evidence found: C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/persistent-data/profiles/vrising-dataextractor-server-host-stateful/Saves/v4/vrising-dataextractor-server-host-stateful/AutoSave_0.save.gz
- Stateful server-host session metadata is present.
- Recent stateful create/resume/dump evidence is present.
- Stateful harness readiness is required for stateful-only ingestion, not for canonical broad extraction.

### Latest stateful run evidence

- vrising-dataextractor-server-host-stateful (20260325-051422): C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/runs/20260325-051422/vrising-dataextractor-server-host-stateful
- vrising-dataextractor-client-connect-stateful-create (20260325-020655): C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/runs/20260325-020655/vrising-dataextractor-client-connect-stateful-create
- vrising-dataextractor-client-connect-stateful-resume (20260325-041151): C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/runs/20260325-041151/vrising-dataextractor-client-connect-stateful-resume
- vrising-dataextractor-client-connect-stateful-dump (20260325-010859): C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/runs/20260325-010859/vrising-dataextractor-client-connect-stateful-dump

## Core Domain Readiness

### Abilities tooltip lane

- Verdict: READY
- Summary: 54/54 high-signal tooltip rows matched.
- Note: Broad control artifact: profile:full-dumponly -> C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/persistent-data/profiles/vrising-dataextractor-client-connect-full-dumponly/VRising.DataExtractor/AbilityGroupsClient.json

| Metric | Matched | Coverage | Floor | Target |
| --- | --- | --- | --- | --- |
| ability-tooltip-map | 54/54 | 100.00% | pass | pass |

### Items rich asset lane

- Verdict: PREP NEEDED
- Summary: 66/1107 icons matched, 0/1107 descriptions matched, 1041 unresolved icons.
- Unresolved backlog: 1041
- Note: Item icon coverage is still below the current target threshold.
- Note: Item description coverage is still zero, so rich item ingestion needs more prep before it can feel complete.
- Note: Broad control artifact: profile:full-dumponly -> C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/persistent-data/profiles/vrising-dataextractor-client-connect-full-dumponly/VRising.DataExtractor/ItemsClient.json

| Metric | Matched | Coverage | Floor | Target |
| --- | --- | --- | --- | --- |
| item-icon-map | 66/1107 | 5.96% | pass | warn |
- item-icon-map: coverage 5.96% is below target 25.00%
| item-description-map | 0/1107 | 0.00% | pass | warn |
- item-description-map: matched 0 is below target 200
- item-description-map: coverage 0.00% is below target 20.00%

### Recipes link lane

- Verdict: READY
- Summary: 667/667 high-signal recipe link rows matched.
- Note: Broad control artifact: run:stateful -> C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/runs/20260325-010859/vrising-dataextractor-client-connect-stateful-dump/snapshots/VRising.DataExtractor/RecipesClient.json
- Note: This lane is currently satisfied by a transient stateful run artifact and should be stabilized before broader ingestion.

| Metric | Matched | Coverage | Floor | Target |
| --- | --- | --- | --- | --- |
| recipe-link-map | 667/667 | 100.00% | pass | pass |

### NPC display lane

- Verdict: PROCEED WITH WARNINGS
- Summary: 514/908 high-signal display rows matched.
- Note: 394 NPC rows are currently excluded as low-signal fallback display entries.

| Metric | Matched | Coverage | Floor | Target |
| --- | --- | --- | --- | --- |
| npc-display-map | 514/908 | 56.61% | pass | warn |
- npc-display-map: coverage 56.61% is below target 65.00%
- npc-display-map: 394 low-signal row(s) excluded from matched coverage

### Workstation display lane

- Verdict: READY
- Summary: 136/136 high-signal display rows matched.

| Metric | Matched | Coverage | Floor | Target |
| --- | --- | --- | --- | --- |
| workstation-display-map | 136/136 | 100.00% | pass | pass |

