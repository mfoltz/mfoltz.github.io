# Active Source-Backed Roadmap

Reviewed: 2026-10-06. This is the single active roadmap for this repository.
Older plans and checkpoints describe their dated state; they do not queue new
work. This roadmap records priorities and boundaries, not publication or
extraction authority.

## Current delivery state

Material-to-Blueprint navigation is accepted locally on
`codex/material-blueprint-navigation`, starting at `464af995ad`. It adds 1,470
positive requirements across 96 materials and 1,080 Blueprints, with searchable
12-card expansion, recorded quantities and independent `buildQ`/`buildShown`
return state. The book/hyphen stack remains an ancestor; local main stays at
`3917522d94`. See the [material checkpoint](checkpoints/2026-10-06-material-blueprint-navigation.md).
Integration and publication require separate authorization.

The reviewed application stack is published on remote main at
`660e88efaeb5eb1511bca9520721b61acb472d17`. An October 5 read-only remote check
confirms that tip. The separately approved consolidation fast-forwarded local
main from `d8206b489c` without changing the accepted tree, deleted only the fully
merged ingredient branch, and published all 16 reviewed commits with one normal
push. Pages build/deploy succeeded for that exact commit. Roadmap-only maintenance
after this release remains local until separately authorized for publication.

Ingredient-to-recipe navigation is delivered. Data commit `029160b3c1` adds
1,385 independently validated backlinks across 221 items and 664 recipes.
UI/acceptance commit `660e88efae` adds searchable, paged cards and a focused
browser harness. Automation passes 80 captures, including search, expansion,
history, source access, artwork fallback and native zoom; jewel/shared-card
regressions pass. `npm run verify`, `npm test` and artwork tests pass.

The first responsive browse run stopped at the Aftershock tooltip reload check.
After separately authorized diagnosis/retry, the isolated check and full suite
pass without product changes or weakened assertions; the initial cause remains
unestablished. Changed captures were inspected with loaded Inter/Cinzel fonts.
Only the four permitted Blood Essence detail/source baselines were accepted;
all 92 final comparisons pass. Existing item fields, maps, other generated data,
artwork and unaffected baselines remain unchanged. The owned preview is stopped.
See [the ingredient checkpoint](checkpoints/2026-10-04-ingredient-recipe-navigation.md).

Fresh publication checks passed `npm run verify`, `npm test`, all four artwork
tests and all 92 baseline comparisons (zero changed/missing). The 72,477-file
preservation audit found exactly the 221 accepted ingredient-detail additions
and four approved Blood Essence baseline changes relative to the retained
pre-ingredient snapshot, with no original-field drift or unexpected changes.
Eleven live smoke checks passed; four captures were inspected with loaded
Inter/Cinzel fonts. Live checks supplement the full local acceptance, rather
than establishing exhaustive live-route or cross-browser coverage.

The published stack includes nine Blueprint commits, four jewel/mobile commits,
one roadmap maintenance commit and two ingredient-navigation commits. The
October 4 jewel fast-forward and October 5 ingredient fast-forward preserved
their accepted trees; both fully merged task branches were deleted.

The older `codex/dev-prefab-clarity` branch was reconciled and deleted locally.
Its original `8760571f25` and `9d877f4dd1` commits remain reachable through local
tag `archive/dev-prefab-clarity-2026-10-04`. Their source/book behavior, UI and
historical documents were recovered by `1137203f2a`, `657bcf22ae` and `970eef1af8`.
The detached browse-review worktree remains intact. The historical remote base
`6226c16382173aa34160bdf27894cad6cb22f177` was refreshed and confirmed before the
approved push. No rebase, force push, PR or unrelated branch deletion occurred.

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
- The historical published base `6226c16382173aa34160bdf27894cad6cb22f177` includes the prefab-reader
  work (PR 144) and browse/search/detail refinements (PR 145). Those changes are
  merged and published. Preserve current compact rows, useful artwork and facts,
  filter disclosure, active summaries, source access, and breadcrumb continuity.

## Blueprint integration: published

The September 30 integration recovered only the Blueprint behavior from
`8760571f25` and `9d877f4dd1` onto historical main `6226c16382`. See the
[current integration receipt](checkpoints/2026-09-30-blueprint-integration.md).

| Published source measure (before local hyphen recovery) | Count |
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

Those three integration commits were merged into local main and published in
the October 5 stack by separate instructions. The dated receipt
preserves its original checkout, hashes, and delivery claims.

## Blueprint materials and existing artwork: published

The user approved recorded build-material requirements, reuse of existing curated
images, and a retained-source castle sprite ownership scout. The verified local
commits were produced on `codex/blueprint-materials-artwork`, based on local main
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

That dated pass ended at verified local commits and retained review evidence.
Its work is now published in the separately approved October 5 stack; its
original receipt does not authorize adjacent enrichment.

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

## Blueprint artwork reconciliation: published

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
  item-description audit is complete as recorded below. The reconciliation
  ended locally before the separately approved October 5 publication.
- Native browser review passes all 92 baselines after accepting only 18 new
  native Blueprint captures and the two intentional stone-entrance materials
  captures. All 80 targeted artwork captures were inspected in both themes,
  including 320px width; existing interaction, responsive and zoom checks pass.

## Item-description audit and jewel navigation: delivered

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
artwork, branding and baseline files remained identical at that checkpoint.
Both commits are now published; further enrichment requires a separate instruction.

## Mobile linked-record cards: published

The approved shared-card refinement moves quantity/GUID metadata below full
names at widths below 640px. The existing icon and whole-card navigation remain;
metadata aligns with the text, including icon-free rows. At 640px and above,
the current horizontal layout and right-aligned metadata are preserved. See the
[mobile-card checkpoint](checkpoints/2026-10-02-mobile-linked-record-cards.md).

All 36 changed mobile captures were inspected across six detail fixtures, both
themes and 320/390/639px. The 24 desktop captures at 640/1280px match their before
images byte for byte. The focused checks cover full text, zero/negative/null
values, exact destinations, keyboard/back navigation, artwork failure and native
200% zoom. Inter and Cinzel loaded for acceptance. Required verification, unit,
artwork, jewel, responsive browse, Blueprint and baseline checks pass; all 16,501
checked data, map, artwork, branding and baseline hashes remain unchanged.

## Publication: complete; review drafts retained

Dependency-ordered local Markdown review drafts are complete. Their fixed ranges
preserve the reviewed application stack:

1. **Blueprint:** recorded remote base `6226c16382173aa34160bdf27894cad6cb22f177`
   through the Blueprint tip `1f39c82fa2`, including source/book/material navigation and
   the bounded native artwork reconciliation.
2. **Jewel/mobile:** `1f39c82fa2` through verified mobile implementation `4eb8e790c6`,
   including recorded ability navigation, copy refinement and shared cards.

Both drafts include full commit inventories, diff statistics, validation receipts,
preservation and remaining limits. These are historical review ranges, not
pending delivery units. The October 5 release also includes roadmap maintenance
and the two ingredient commits through `660e88efae`. Keep native Sprite identity
and the nine proven artwork joins distinct from weaker curated associations.

Drafts are retained under:

`C:/Users/mitch/.codex/visualizations/2026/10/03/01a0ff3e-1b3d-7433-baac-02af7b8b154d/publication-preparation/`

Publication and live acceptance evidence are retained under:

`C:/Users/mitch/.codex/visualizations/2026/10/03/01a0ff3e-1b3d-7433-baac-02af7b8b154d/local-main-publication-20261005/`

See `receipt.md`, `publication-receipt.json`, the validation/preservation logs
and live smoke captures. [Deploy Pages run 37345738832](https://github.com/mfoltz/mfoltz.github.io/actions/runs/37345738832)
completed build and deployment successfully for the published tip. Publication
is no longer an unfinished menu item. This roadmap update authorizes no new
push, PR or deployment.

## Book-to-Blueprint navigation: complete locally

The approved reverse-navigation pass is on `codex/book-blueprint-navigation`,
based on clean local main `3917522d940ecbac7b457f63111c2817ef1ca098`.
Data commit `458112c86b` adds 401 mapped pairs across 72 books and 396
Blueprints, independently checked against retained Markdown and exact routes.
The UI/acceptance commit adds Linked Blueprints, full-list target/technology
search, 12-card expansion with focus, and independent `bookQ`/`bookShown`
return state. The 74 book/source requirements own their quantities; Blueprint
cards have no amount. Simple Carpets retains all three declaring sources.

Acceptance is recorded in the [book navigation checkpoint](checkpoints/2026-10-05-book-blueprint-navigation.md).
Final verification, production browser acceptance and all 92 baseline comparisons
pass. Loaded-font captures are inspected; all 50 default production captures
match the inspected development captures pixel-for-pixel. Repeat generation
preserves all accepted hashes across 101,410 protected files, with exactly 72
item-detail additions and no original-field drift. Ingredient, jewel, shared-card,
responsive browse and Blueprint regressions pass; no baseline update is needed.
Both owned previews are stopped after acceptance.
Local main and published application main remain unchanged. This pass authorizes
no merge, push, PR, deployment, map widening, new artwork or extraction.

## Hyphenated Blueprint forward-map recovery: complete locally

The separately approved audit repairs complete `Cross-Section` and `T-Section`
identifiers in the existing prefab-reference parser. The initial 28 book-linked
pairs comprise 24 carpets and four cobblestone paths. The same repair finds ten
additional DLC/framework carpet edges without recorded books; work stopped at
the census gate, and the user explicitly approved all 38 forward additions.

The local map now covers 933 linked and 265 unlinked Blueprints, with 970 edges
across the same 174 sources. Book navigation now covers 429 pairs across 72
books and 424 Blueprint targets. All 932 earlier edges, 74 source-owned book
requirements, source ordering and original unrelated fields are preserved.
The three affected book lists grow from 18/18/6 to 30/30/10. Ten source-only
edges receive no invented book requirements. These counts are local, not live.

See the [hyphen recovery checkpoint](checkpoints/2026-10-05-blueprint-hyphen-link-recovery.md).
Independent retained-source proof, required verification, unit/artwork tests,
130 focused browser checks and existing Blueprint/book regressions pass.
All 60 changed captures are inspected with loaded Inter/Cinzel fonts. Four
inspected Blueprint browse counter baselines are accepted; the final 92
comparisons pass. Repeated generation and the 101,410-file audit permit exactly
43 generated changes plus those four baselines, with no unrelated drift.
The owned preview is stopped. Local main and published main remain unchanged.

## Material-to-Blueprint navigation: complete locally

Data commit `7fa74ca4c7` adds the approved 1,470 requirements across 96 material
items and 1,080 Blueprint destinations. Generation inverts validated positive
forward rows; independent retained-Markdown validation compares every identity,
quantity, destination and provenance field. The 117 empty buffers and both held
zero-valued rows remain excluded. Original item fields and forward source
ordering, maps, browse/global-search indexes and artwork are preserved.

The UI adds Used in Blueprints after Used in recipes and before Linked Blueprints
in both item layouts. Complete names, prefabs, GUIDs and recorded quantities
remain visible in responsive whole-card links. Search covers the full list;
12-card expansion, focus, clear search and URL-preserved return state reuse the
accepted navigation behavior. Recipe, book and material parameters are independent.
Unused items receive no group or absence claim. Existing portrait associations
retain their evidence strength; recorded technical targets imply no live access.

The [material checkpoint](checkpoints/2026-10-06-material-blueprint-navigation.md)
records 70 focused browser checks, 60 before and 90 after captures with loaded
Inter/Cinzel fonts, all 147 Stone Brick uses, keyboard/source navigation, artwork
fallback and native 200% zoom. All changed captures are inspected. Existing
ingredient/book/hyphen/jewel/shared-card/browse/Blueprint regressions pass.
Only the four inspected Blood Essence detail/source baselines are updated. All 92
final comparisons pass; repeat generation reproduces every generated hash.
The 101,410-file preservation proof permits exactly 96 item-detail additions and
those four baselines, with no original-field drift or unexpected changes.

The ingredient harness repair was separately approved after its page-wide
Show more locator became ambiguous. Scoped recipe controls preserve all assertions
and pass. The unchanged book suite passes an isolated retry after a zoom worker
startup timeout; that initial cause remains unestablished. Failed runs remain
separate from acceptance evidence. The owned preview is stopped for local delivery.

## Next menu: local review and delivery

The approved reverse-navigation candidates are now implemented. Their local
counts reflect the retained source and current exact routes:

| Candidate | Recorded links | Items | Target records | Largest item list |
| --- | ---: | ---: | ---: | ---: |
| Book to declaring Blueprint requirements (implemented locally) | 429 | 72 | 424 Blueprints | 49 |
| Material to Blueprint uses (implemented locally) | 1,470 | 96 | 1,080 Blueprints | 147 |

The ready high-value action is review of the local book, hyphen recovery and
material stack before a separately authorized consolidation/publication pass.
Preserve dependency order and refresh remote authority at that point. This
checkpoint does not authorize merge, push, PR, deployment or branch cleanup.

The delivered ingredient group still covers 1,385 requirements across 221 items
and 664 recipes, with a largest list of 88. Sparse Blueprint display text (8/1198)
remains a limitation; complete source titles and identifiers are retained. Absent
reverse rows do not establish absence of uses, and recorded requirements do not
establish crafting access, acquisition or availability.

Further enrichment needs its own bounded source audit and plan. No new extraction,
artwork widening or source promotion is queued here. The October 5 census remains
historical evidence under `roadmap-next-pass-20261005/census.json` in the local
artifact root. Broader enrichment lanes below remain parked.

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
