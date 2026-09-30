# Blueprint integration and roadmap receipt

Date: 2026-09-30. Local branch: `codex/integrate-blueprint-links`.
Worktree: `C:\Users\mitch\.codex\worktrees\integrate-blueprint-links\mfoltz.github.io`.

## Goal

Recover the exact Blueprint source/book contracts and browse/detail behavior from
local commits `8760571f25` and `9d877f4dd1` onto current main, preserving the newer
reader, browse/search, artwork, and detail implementation. Consolidate guidance
under [one active roadmap](../source-backed-next-thread-roadmap.md).

Base: `6226c16382173aa34160bdf27894cad6cb22f177` (refreshed `origin/main`).
This base already includes merged reader PR 144 and refinement PR 145. Its Pages
deployment was successful (run `36292959247`); this integration is local only.

## Local commit groups

| Group | Commit | Changed text lines |
| --- | --- | ---: |
| Exact generation, optional types, destination/count validation and tests | `1137203f2a` | 875 |
| Current Blueprint browse/detail integration, interaction checks and accepted captures | `657bcf22ae` | 538 |
| Guidance cleanup, recovered historical documents and this receipt | The commit containing this receipt | Below 1,000 |

Each group runs `npm run verify` before commit. The final external JSON receipt
records all three exact SHAs, including the commit containing this file.

## What changed

- The generated Blueprint map is ignored and rebuilt from tracked prefab
  documents, never copied from the original checkout. The existing map schema,
  exact name/GUID joins, ordinary-technology classification, explicit book
  requirements, and provenance remain intact.
- Validation reconciles map/detail/index counts, rejects mismatched GUIDs and
  duplicate links, and checks current generated source/book destinations.
- Blueprint browse uses current shared controls with URL filters, book-name
  search, deterministic sort, 120-record increments, Clear, loading, retry, and
  empty states. The obsolete `stickyOnMobile` addition was omitted.
- Detail source records group book requirements under their declaring source,
  retaining the current shell, breadcrumbs, source disclosure, facts, and artwork.
- The current homepage directory is tested through rendered markup and carries
  the approved partial-coverage description. The obsolete landing configuration
  was not restored.
- `blueprintSearchTerms` keeps book/source search within specialized Blueprint
  browse. Global search tags/excerpts and all unrelated index hashes are unchanged.
- The active roadmap records delivered work, local Blueprint completion and
  pending publication, parked lanes, verification, and stop gates. The earlier
  enrichment plan is historical sequencing; Phase 1/parity are dated snapshots.
  Completed summary candidates are retired, and Wisp Dance is removed from the
  outdated missing-icon list.
- The May scout and September 22 Blueprint checkpoint are recovered verbatim.
  September 25/26 checkpoint claims are preserved unchanged. Current status is
  recorded separately here, not written back into their original claims.

## Evidence and determinism

| Measure | Reproduced count |
| --- | ---: |
| Blueprints | 1,198 |
| Linked / unlinked records | 895 / 303 |
| Unlock edges / distinct sources | 932 / 174 |
| Distinct linked books | 72 |
| Blueprints with book links | 396 |

Repeated generation with the source corpus unchanged produced equal hashes:

- Blueprint map SHA256:
  `e75a57c71e8dc9228cc0d79cd18f44fdb664d8340c4dc706f1b7d673ec42b3dd`.
- Final Blueprint index SHA256:
  `464103053dae7e919d1313697fdb46a096ee4a0497c25fd00a8086ab304b7d93`.
- Preserved global search SHA256:
  `edfb3a1907cbe35f39eef8b10b481e4f15bd7cbf1e753aee75751b46b9619d6c`.

The eight non-Blueprint database indexes match the delivered base exactly.
No tracked corpus, enrichment input, curated asset, or asset-lock changes occur.

## Verification

- Blueprint builder/validator/browse tests pass, including corrupt GUID, count,
  duplicate-link, source-destination, and book-destination rejection cases.
- The full existing `npm test` suite and all three `test:db-artwork` tests pass.
- `npm run verify` passes before each commit: types, shortcode syntax, full
  generation/validation, production build, and Pages artifact checks.
- Broad-control validation uses the existing extractor receipts through
  `VRISING_DATAEXTRACTOR_ROOT=C:\Users\mitch\source\Repos\VRising.DataExtractor`:
  2,010 ability, 1,076 item, and 667 recipe controls. The first ordinary worktree
  build skipped this optional sibling lookup; explicit validation passed before
  that commit. Subsequent verification includes the configured lookup.
- Native Chromium ran successfully. The existing responsive matrix passes all
  86 captures plus filter, URL, tooltip, breadcrumb, and failed-artwork checks.
  Its keyboard disclosure assertion now waits for the native closed state.
- Blueprint review passes 30 route/theme/viewport captures and six interaction
  runs at 320x700, 390x844, and 1280x960 in both themes. Checks cover combined
  filters, book display-name/prefab search, sort, pagination reset, Clear,
  reload/back/forward, retry, zero results, source/book navigation, breadcrumbs,
  runtime errors, and horizontal overflow.
- Every changed capture was inspected. Before acceptance the standard pack had
  50 unchanged captures, two intentional homepage-copy changes, and eight new
  Blueprint captures. Only those ten baselines were accepted. The final strict
  comparison is **60 matched, 0 changed, 0 missing**.

Representative records are selected deterministically by prefab/subtitle order:

- Linked books: `/db/blueprints/bp-tier02-wallpaper-set-castle-stone01`.
- Linked source without books: `/db/blueprints/bp-castle-stairs-double-dlc-gloomrot01`.
- Unlinked/starter: `/db/blueprints/bp-castle-chain-plant-bleeding-heart`.

## Remaining warnings and limits

Coverage targets remain warnings for NPC display, Blueprint display, quests,
Buffs, and itemsets; all required floors pass. Blueprint display remains 8/1198.
The build also reports the existing stale `caniuse-lite` warning. Test-only
server-rendering/router warnings do not establish browser runtime failures.

Recorded source/book links are not verified acquisition routes. Empty buffers
and missing links do not establish availability. No new extraction, artwork,
display enrichment, Buff/quest/itemset changes, or broader portrait work occurs.

## Preservation and delivery boundary

Original checkout: `C:\Users\mitch\source\Repos\mfoltz.github.io` remains on
`40f8cd8c1d503d37325603a8a2de2faf4031bb0f`, with only its original untracked
`data/enrichment/blueprint-unlock-map.json`. Its SHA256 remains
`E75A57C71E8DC9228CC0D79CD18F44FDB664D8340C4DC706F1B7D673EC42B3DD`.

No push, PR, merge, deployment, or remote workflow was initiated. This pass ends
at three verified local commits. Publication and the later item-description
audit candidate require separate instructions.

## Local evidence and reproduction

- Logs/counts/hashes: `.codex-tmp/dev-review/blueprint-integration/`.
  The per-commit logs are `core-verify.log`, `ui-precommit-verify.log`, and
  `docs-precommit-verify.log`; `evidence.json` records counts and preserved hashes.
- Final baseline report: `.codex-tmp/visual-review/latest/report.html`.
- Blueprint screenshots/checks: `.codex-tmp/visual-review/blueprint-integration/`.
- Existing responsive checks: `.codex-tmp/visual-review/refinement-matrix/`.
- External exact-commit receipt:
  `C:\Users\mitch\.codex\visualizations\2026\09\30\01a0f347-a14d-77f1-9cf0-5f6b3fd2d4af\blueprint-integration-receipt.json`.

To reproduce: generate/build with `npm run verify`, run `npm test` and
`npm run test:db-artwork`, then run `npm run visual:compare:capture`. Start the
local preview on port 5174 for `npm run test:browse-visual` and
`npm run test:blueprint-visual`. Screenshots/logs are ignored local evidence;
accepted baseline PNGs are tracked.
