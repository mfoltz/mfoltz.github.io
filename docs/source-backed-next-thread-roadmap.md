# Active Source-Backed Roadmap

Reviewed: 2026-09-30. This is the single active roadmap for this repository.
Older plans and checkpoints describe their dated state; they do not queue new
work. This roadmap records priorities and boundaries, not publication or
extraction authority.

## Delivered foundation

- Canonical enrichment contracts keep exact prefab/GUID joins, per-entry source
  provenance, deterministic generation, high-signal coverage, and threshold
  floors separate from fallback coverage.
- Recipe links cover 667/667 records; workstation display covers 136/136.
  Recipe, item, NPC, and workstation detail summaries and grouped Linked Records
  are implemented. Retire the older recipe/workstation summary candidates.
- Ability tooltip coverage is 54/54; item descriptions are 884/1130 and item icon
  joins are 1128/1130. These are enrichment-domain counts, not claims that every
  generated record has player-facing text or artwork.
- Blood Hunts joins 61/61 rows through
  `MonoBehaviour/BloodHuntsDataAuthoring.json`. Keep its narrow level, hide-level,
  localization, and provenance contract; it does not authorize asset widening.
- NPC classification covers 1114/1114; high-signal display remains 514/1110.
  The approved V Blood portrait lane is delivered for 50/69 rows. Buildable
  portrait evidence covers 177/3928. Existing portrait delivery is no longer the
  first unfinished task; unresolved rows and broader portrait lanes stay parked.
- Main at `6226c16382173aa34160bdf27894cad6cb22f177` includes the prefab-reader
  work (PR 144) and browse/search/detail refinements (PR 145). Those changes are
  merged and published. Preserve current compact rows, useful artwork and facts,
  filter disclosure, active summaries, source access, and breadcrumb continuity.

## Blueprint integration: complete locally, publication pending

The isolated `codex/integrate-blueprint-links` branch recovers only the Blueprint
behavior from `8760571f25` and `9d877f4dd1` onto the main base above. See the
[current integration receipt](checkpoints/2026-09-30-blueprint-integration.md).

| Verified source measure | Count |
| --- | ---: |
| Blueprint records | 1,198 |
| Linked / unlinked records | 895 / 303 |
| Unlock edges / distinct source records | 932 / 174 |
| Distinct linked books | 72 |
| Blueprints with book links | 396 |

- The ignored map is rebuilt from tracked `content/prefabs` documents. Ordinary
  technology requires `ProjectM.TechData` plus an unlock-buffer edge. Book
  requirements require an explicit item-requirement buffer, matching item data,
  and exact GUIDs. Empty buffers and missing links remain unknown/unlinked.
- Blueprint browse supports `q`, `source`, `coverage`, `books`, and `sort`,
  book-name search, deterministic ordering, 120-record increments, Clear,
  loading/retry/empty states, and reload/back navigation through current shared
  controls. Grouped source/book links use current generated destinations.
- Detail integration retains the current shell, breadcrumbs, source disclosure,
  artwork, and build facts. The existing homepage directory says: “Build rules,
  recorded unlock sources, and linked book requirements. Source coverage is
  partial.”
- Recorded links do not establish drops, vendors, guaranteed acquisition, or
  live-game availability. Blueprint display coverage remains only 8/1198;
  source-link coverage is a separate measure.
- Global search and the eight other database indexes retain their previous
  generated hashes. Blueprint-only search terms do not widen global search.

Outstanding: these three verified commits are local. Landing or publishing them
requires a separate instruction. Review the receipt and local diff before that
decision; this pass authorizes no push, PR, merge, or deployment.

## Later candidate, requiring a new instruction

The best currently identified enrichment candidate is a bounded item-description
audit of the 246 misses (1130 minus 884). Begin read-only and distinguish blank
upstream records from ingest gaps. A useful result is a classified evidence
sheet, an exact source contract, and a stop gate; it is not automatic permission
to extract, promote text, change assets, or implement the follow-up.

There is no authorized next enrichment task in this integration pass.

## Parked lanes

- Buff display is 7/3274. Historical mechanic-reference leads remain developer
  evidence, not a player acquisition or effect encyclopedia contract. The
  existing directory route does not promote its display readiness.
- Quest display is 0/163 high-signal. Reopening localization requires proof of
  the managed ownership hop for quest/flavor text. Direct-decode subtasks stay
  separate from parent title/flavor promotion.
- Itemsets, broad display enrichment, all-NPC portraits, unresolved V Blood
  portraits, Holy/V Blood/GateBoss blood icons, tiny icons, mesh/resource-drop
  interpretations, and duplicate-suffix asset guesses remain parked.
- No tracked server ECS component evidence artifact exists here. If it returns,
  preserve `raw-unverified` status until stronger semantics are demonstrated.
- Read-only asset-linkage scouting or Mutant/Putrid icon work needs its own
  bounded instruction. Blood Hunts is a cross-check, not authority to widen it.

## Verification requirements

- Before each commit: `npm run verify`. Keep all existing verification commands.
- Data changes: builder/validator tests, `npm test`, deterministic regeneration,
  `npm run validate:data`, exact destination checks, and no unrelated generated
  enrichment or asset changes.
- UI changes: targeted detail/directory/browse tests, `npm run test:db-artwork`,
  the existing capture pack and responsive checks, plus Blueprint interaction
  and 320px checks. Inspect changed captures before accepting scoped baselines.
- In a managed worktree, point `VRISING_DATAEXTRACTOR_ROOT` at the existing
  extractor to check broad-control receipts; do not perform a fresh extraction.
- Before a separately authorized broad source/asset pass, run
  `npm run qa:ingestion-readiness` and `npm run qa:spawn-readiness`. Distinguish
  baseline enrichment warnings from blockers for that pass.

## Stop gates

- Stop on weaker/fuzzy joins, new semantic or acquisition claims, unexplained
  count changes, duplicate links, broken destinations, or unrelated generated
  churn. Resolve the cause before accepting a result.
- Stop before new artwork, asset widening, or unsupported binary classes.
  Existing evidence and binary policy must cover any separately authorized lane.
- Stop if a product decision falls outside the supplied plan, or if source
  presence is being substituted for proven player-facing ownership.
- Native browser failure blocks visual acceptance. Build success cannot replace
  it, and this local pass does not authorize a remote workflow fallback.
- End at verified local commits. Publication and follow-on enrichment require
  separate instructions.

## Historical context

- [Enrichment sequencing](enrichment-roadmap-rebased.md)
- [Phase 1 snapshot](v-rising-database-phase-1.md)
- [April parity audit](database-parity-audit.md)
- [May Blueprint/Buff scout](blueprints-buffs-evidence-scout-20260514.md)
- [September 22 Blueprint checkpoint](blueprints-checkpoint-20260922.md)
- [September 25 visual checkpoint](checkpoints/2026-09-25-browse-visual-refinements.md)
- [September 26 refinement checkpoint](checkpoints/2026-09-26-database-refinement-followup.md)

Historical receipts retain their original claims. Current integration and
publication status is recorded here and in the new receipt, not rewritten into
those receipts.
