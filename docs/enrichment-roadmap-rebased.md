# Historical Enrichment Sequencing

Retired as an active roadmap: 2026-09-30.

Use the [active source-backed roadmap](source-backed-next-thread-roadmap.md) for
delivered work, current priorities, verification, parked lanes, and stop gates.
The phases below preserve the earlier sequencing; they do not queue follow-on
work.

## Why this order

The current local inputs (`VRising.DataExtractor`, `VRising.GameData`, Bloodcraft resources, and asset dump files) are not a single stable prebuilt dataset.  
That makes source certainty the first bottleneck, so the roadmap is sequenced source-risk-first, then broader catalog enrichment.

## Historical order of operations

1. **Phase 0: Source contract reset**
   - lock canonical map contracts under `data/enrichment/*-map.json`
   - require deterministic map output (sorted keys, normalized strings, stable JSON formatting)
   - add per-entry provenance (`sourceKind`, `sourceRef`)
   - measure high-signal coverage separately from low-signal fallback rows

2. **Phase 1: Ability tooltip lane**
   - dedicated adapter for known DataExtractor ability/tooltip shapes
   - canonical output remains `ability-tooltip-map.json` keyed by `abilityPrefab`
   - strict conflict detection on duplicate prefab + GUID mismatch

3. **Phase 2: Item icon hardening**
   - two-stage resolution: extractor icon refs first, alias matching second
   - unresolved icon backlog emitted as `item-icon-unresolved.json`
   - repo-owned item icon materialization stays deterministic: only unique `iconAssetName` files referenced by the canonical `item-icon-map.json` are copied into `public/icons/items/`

4. **Phase 3: Catalog-first expansion**
   - items + recipes first, then workstations + NPCs, then blueprints/quests/buffs/itemsets
   - NPC classification is now a separate browse-readiness lane from NPC display enrichment
   - reuse the same contract + adapter + merge pattern in each domain

5. **Phase 4: Release discipline**
   - maintain threshold floors as non-regression gates
   - keep below-target warnings for incomplete domains
   - `npm run verify` remains the release-safe final gate

## Evidence pointers retained from the sequencing plan

- `data/enrichment/enrichment-coverage.json` tracks high-signal matched counts and low-signal exclusions per domain.
- `data/enrichment/blood-hunts-map.json` records the current source-backed Blood Hunts MonoBehaviour join.
- `data/enrichment/npc-classification-map.json` records server-first NPC level, boss, blood type, faction, servant, and unit-category metadata for browse slices.
- `data/enrichment/npc-portrait-map.json` records V Blood-scoped portrait evidence and existing materialized paths. Approved delivery now covers 50/69 rows; the earlier binary-policy/materialization blocker is resolved. Remaining and broader portrait lanes stay parked.
- `data/enrichment/buildable-portrait-map.json` records source-backed buildable portrait evidence and approved materialized paths.
- `data/enrichment/item-icon-manifest.json` records the currently materialized repo-backed item icon paths.
- `data/enrichment/item-icon-unresolved.json` is the manual icon curation work queue.

## State at retirement

- Source contracts, deterministic output, provenance, and high-signal coverage
  remain operating constraints.
- Ability tooltip coverage is 54/54; the item-icon pipeline is delivered with
  1128/1130 matched rows and a bounded unresolved queue.
- Recipes, workstation display, NPC classification, approved portrait delivery,
  and browse/search/detail refinements are delivered. Catalog expansion is no
  longer a blanket task queue.
- Blueprint source/book linkage and UI integration is verified locally;
  publication requires separate authority.
- Threshold floors, honest incomplete-domain warnings, and `npm run verify`
  remain required before authorized commits.

The original “finish V Blood portraits first” direction is superseded. The
[active roadmap](source-backed-next-thread-roadmap.md) owns current priorities,
including the later item-description audit candidate and its authorization gate.
