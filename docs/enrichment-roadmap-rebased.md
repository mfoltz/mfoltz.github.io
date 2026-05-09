# Rebased Enrichment Roadmap

## Why this order

The current local inputs (`VRising.DataExtractor`, `VRising.GameData`, Bloodcraft resources, and asset dump files) are not a single stable prebuilt dataset.  
That makes source certainty the first bottleneck, so the roadmap is sequenced source-risk-first, then broader catalog enrichment.

## Order of operations

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

## Current baseline outputs

- `data/enrichment/enrichment-coverage.json` tracks high-signal matched counts and low-signal exclusions per domain.
- `data/enrichment/blood-hunts-map.json` records the current source-backed Blood Hunts MonoBehaviour join.
- `data/enrichment/npc-classification-map.json` records server-first NPC level, boss, blood type, faction, servant, and unit-category metadata for browse slices.
- `data/enrichment/npc-portrait-map.json` records V Blood-scoped portrait evidence, but public NPC portrait binaries are not approved in this checkout until the policy and materialization lane land.
- `data/enrichment/buildable-portrait-map.json` records source-backed buildable portrait evidence and approved materialized paths.
- `data/enrichment/item-icon-manifest.json` records the currently materialized repo-backed item icon paths.
- `data/enrichment/item-icon-unresolved.json` is the manual icon curation work queue.

## Current follow-up roadmap

Use `docs/source-backed-next-thread-roadmap.md` for the next source-backed thread order, blockers, and stop gates. The near-term sequence is to close the V Blood portrait lane first, then tighten harness confidence, then reopen only one evidence lane at a time.
