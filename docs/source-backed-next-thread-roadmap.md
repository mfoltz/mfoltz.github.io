# Active Source-Backed Roadmap

Reviewed: 2026-10-02. This is the single active roadmap for this repository.
Older plans and checkpoints describe their dated state; they do not queue new
work. This roadmap records priorities and boundaries, not publication or
extraction authority.

## Current delivery state

The reviewed implementation/evidence stack ends at `e19d632d2a` on
`codex/jewel-ability-navigation`. Local main is `1f39c82fa2`, with nine Blueprint
commits above the published base; the jewel branch adds implementation
`861d98ed1b` and copy refinement `e19d632d2a`. Those 11 reviewed local commits
remain unpublished. Roadmap-only maintenance follows that reviewed stack.

A read-only remote check still resolves published main to
`6226c16382173aa34160bdf27894cad6cb22f177`. Local completion and publication are
separate states; the delivered foundation below includes both.

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
- Published main at `6226c16382173aa34160bdf27894cad6cb22f177` includes the prefab-reader
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
- Integration-only verification preserved global search and the eight other
  database index hashes. Blueprint-only search terms do not widen global search.

Those three integration commits have since been merged into local main by a
separate instruction. Remote publication remains pending. The dated receipt
preserves its original checkout, hashes, and delivery claims.

## Blueprint materials and existing artwork: complete locally

The user approved recorded build-material requirements, reuse of existing curated
images, and a retained-source castle sprite ownership scout. The verified local
commits are on `codex/blueprint-materials-artwork`, based on local main
`970eef1af8480456dea9c24c6f8658330f23b9c2`. See the
[materials/artwork receipt](checkpoints/2026-09-30-blueprint-materials-artwork.md).

- Exact source buffers support 1,080 Blueprint material lists with 1,470 positive
  rows linked to current item routes. Empty buffers remain unknown (117 records).
- One Blueprint, `TM_Castle_Wall_Tier02_Stone_EntranceWide`, records two zero-valued
  rows. Preserve them separately; they do not establish a free build.
- Reuse the 13 already-vendored, GUID-matched buildable images in Blueprint
  browse/detail/search. No curated asset or portrait-map changes are needed.
- Material links retain quantities, source components/paths, and current item
  destinations. Preserve existing source/book links, browse state, facts, and
  uncertainty wording. Blueprint display-text coverage remains 8/1198.
- The historical [castle sprite scout](blueprint-castle-sprite-scout-20260930.md)
  stopped at the missing sprite identity hop. Its 255 named candidates do not
  establish ownership. No new extraction occurred during the materials pass.

This pass ends at verified local commits and retained review evidence. No push,
PR, merge, deployment, or adjacent enrichment task is authorized here.

## Reviewed castle artwork and native capture: completed snapshots

A subsequent instruction approved the image-limit change and narrow capture
preparation. See the [artwork review](blueprint-artwork-review-20260930.md), the
[October 1 snapshot](checkpoints/2026-10-01-blueprint-artwork-capture.md), and the
[October 2 native capture](checkpoints/2026-10-02-blueprint-native-sprite-capture.md).

- The initial review replaced the workstation-only 25-image cap with 54
  images: the existing 13 plus 41 castle stairs/floors/walls. Materialize original
  Texture2D bytes and pin exact prefab GUIDs, filenames, and source hashes.
- That review labeled 41 associations `curated-unique-name-match`: illustrative
  icons with runtime ownership unproven at that checkpoint. Four ambiguous
  entrance records were held. The reconciliation below updates current status.
- The separately authorized repair established a matching isolated 1.1.13 pair.
  The October 1 version-mismatch hold remains a historical claim. A first native
  capture proved all 58 prefab/GUID and icon-GUID joins but could not bind the UI
  loader wrappers; those unknowns did not establish absent icons.
- The approved manual cache lookup now resolves 58/58 Sprite names across 57
  distinct icon GUIDs and 57 distinct Sprite names. The operator completed
  journal quests in a copied test save, opened the normal build menu, and issued
  one `extract_dump`. Automatic connection/dumping and explicit asset-load
  requests remained disabled. Original checkouts, saved state, and test plugins
  were preserved; preparation and native logs are retained with the new receipt.
- Runtime names agreed with 49/54 then-current curated associations. Five differed:
  the two Jewelcrafting floor variants, stone pillar, simple bench, and small
  sawmill. The four held entrances now have exact Sprite identities, including
  different Sprite names for the stone BP/TM pair. Existing dump filenames and
  hashes are recorded separately from runtime Sprite identity.
- The capture pass changed no artwork map, public asset, or acquisition claim.
  Its dated receipt preserves that boundary and the original restoration claims.

## Blueprint artwork reconciliation: complete locally

The user separately approved reconciliation of five differing associations and
four held entrances. See the
[reconciliation receipt](checkpoints/2026-10-02-blueprint-artwork-reconciliation.md).

- Pin the complete native capture unchanged and require exact current GUIDs,
  captured icon GUIDs and Sprite names for these nine records only. Each pinned
  Sprite export must match one exact visible RGBA crop of its unchanged texture.
- Correct the Jewelcrafting floor swap, stone pillar, simple bench and small
  sawmill. Add four entrance records. The wood BP/TM pair shares one proven icon
  GUID and image; the stone BP/TM pair uses distinct captured Sprite names.
- The reviewed manifest now covers 58 records and 57 files: nine
  `runtime-sprite-name`, 38 `curated-unique-name-match`, and 11 `existing-curated`
  records. Preserve all 49 unaffected associations and their evidence kinds.
- Materialization adds six unchanged source PNGs, retires only three pinned
  superseded files, and preserves 51 public image hashes. Repeat generation must
  produce identical map, review, lock and image hashes.
- Blueprint text/material/unlock/book coverage and acquisition wording stay
  unchanged. Localized text and broader portraits remain parked. The later
  item-description audit is complete as recorded below. End at verified local
  commits; publication stays separate.
- Native browser review passes all 92 baselines after accepting only 18 new
  native Blueprint captures and the two intentional stone-entrance materials
  captures. All 80 targeted artwork captures were inspected in both themes,
  including 320px width; existing interaction, responsive and zoom checks pass.

## Item-description audit and jewel navigation: complete locally

The separately authorized description audit found no recoverable item-owned text
for the 246 misses in retained snapshots. The 198 recorded blanks and 48 omitted
technical records remain distinct. No description ingestion is justified by that
record; fresh extraction and description ownership work stay parked.

A subsequent instruction authorized jewel-to-ability navigation. See the
[local implementation checkpoint](checkpoints/2026-10-02-jewel-ability-navigation.md)
and [copy-refinement checkpoint](checkpoints/2026-10-02-jewel-ability-copy-refinement.md).
All 154 jewel details now expose association state: 129 recorded links across 43
current ability routes, with 25 explicitly unrecorded. Generation and validation
require exact source-component prefab/GUID joins, unique ability destinations,
source provenance, and existing reverse Spell Jewels links. Ordinary items,
description text, indexes, other database sections, artwork and baselines are
unchanged. This is recorded navigation, without roll or acquisition claims.

Local Chromium checks cover both themes, mobile and desktop, keyboard navigation,
history/reload, image fallback and native 200% zoom. The 92 baseline comparisons
pass the existing comparator; they are not a claim of byte-identical screenshots.
The implementation is committed as `861d98ed1b`. The separate `e19d632d2a`
refinement removes redundant recorded-association copy while retaining the link,
source disclosure and explicit unrecorded message. Its required verification,
20 detail tests and 38 focused captures pass; all 16,501 checked data, map,
artwork, branding and baseline files remain identical. Both commits are local.
Publication and further enrichment remain separate instructions.

## Next menu: proposed, not started

1. **Mobile linked-record cards: recommended next implementation.** The latest
   320px jewel capture shows recipe GUIDs crowding titles and prefab identifiers
   wrapping into short fragments. Inspect the shared `DbReferenceList` layout
   across representative item, recipe, ability and workstation relations, then
   adjust mobile placement and wrapping. Preserve complete titles, identifiers,
   quantities, artwork and whole-card navigation. Accept only after both-theme
   320/390px, desktop, keyboard, artwork-fallback and 200% zoom checks. Do not
   change association data, source wording or unrelated page layouts.
2. **Publication preparation: separate delivery option.** Inventory the reviewed
   stack, reconcile local main and the jewel branch, and prepare a concrete
   review description with the retained checks and remaining limits. Any push,
   PR, merge or deployment needs a separate instruction. Native capture history
   and weaker curated artwork evidence must remain distinguishable in the
   delivery description.

The first candidate comes from the current copy-refinement capture
`targeted-captures/ability-focus-dark-320.png`, not an older task queue. It is a
readability issue in existing related-record cards; the new Associated ability
chip remains clear. Broader enrichment lanes below are still parked.

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
