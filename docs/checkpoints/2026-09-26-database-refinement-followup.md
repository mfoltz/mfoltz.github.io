# Database refinement follow-up

Local continuation on `codex/browse-visual-refinements` from
`fbf1419195282e4645fcbe48b5bd60acf60c28b5`.

Implementation and validation are complete. Delivery remains local in two
reviewable commit groups: row/facet cleanup, then mobile/search layout and visual
evidence. The preview is stopped and the worktree is parked for the night.

## Changes

- Item browse and search rows share one presentation helper. Only complete
  `Tech item, max stack 1` and `None item, max stack 1` summaries are hidden,
  ignoring case, surrounding whitespace and an optional final period. Original
  summaries still drive metadata deduplication and remain in the search index.
- NPC rows show V Blood status once, preferring V Blood Boss. Level, faction,
  servant status and other blood types remain. Archive rows omit their generated
  section badge and deduplicate exact badge repetitions before overflow counts.
- Database facets appear only when selected or when an option narrows their input
  set. Quests have no default disclosure; saved Journal selections remain
  available with Clear. Reference browsing and search section choices retain
  their existing behavior.
- Below 640px, detail titles are 28px with an 8px artwork gap and 16px hero padding.
  Existing sprite/portrait dimensions, proportions, ingredient icons, related
  thumbnails and all detail facts remain unchanged.
- Search uses one result/section status, three equal mobile scope columns, and a
  compact scope/disclosure/Clear row. Query-only searches retain Clear without a
  repeated query chip. Section headers retain the exact 24-result cap counts.

## Verification

- Row/facet commit: `f7a580e0c74831b1faf432b7ada2c5f654822662` (156 changed lines).
  `npm run verify` passed before committing.
- Focused row/control, retained-fact and breadcrumb tests passed. `npm test`
  passed; all three `npm run test:db-artwork` regressions passed.
- The responsive matrix covers the original eight routes in both themes at
  390x844, 768x1024, 1280x720 and 1440x960, five additional NPC/archive routes
  at 390 and 1280, and Jewelcrafting at 360 in both themes: 86 captures.
- Every layout assertion passed: no page-wide overflow, overlapping title/artwork,
  split Jewelcrafting word, or split recipe name. Tablet/desktop detail captures
  and the Abilities list match the previous matrix exactly (38 captures).
- Final pointer/keyboard checks passed for primary scopes, detailed facets, Clear,
  URL restoration, disclosure reset/retention, empty and zero-result searches,
  long queries, tooltip deep links, breadcrumbs and missing artwork.
- All ten rebuilt database/search index hashes matched their saved originals.
- Final `npm run verify` passed before the second commit, including regenerated
  data validation, the production build and Pages artifact validation. The disk
  space blocker was resolved after space was freed; the three failed attempt
  logs remain alongside the successful `verify-layout.log`.
- The fresh responsive run passed against the production preview. Tooltip
  captures now wait for scrolling to settle before taking the screenshot.
- The separate 52-capture pack initially matched 44 baselines. The eight
  intentional differences were inspected and refreshed: Items, item-scoped
  search, expanded item-search filters, and database-scoped search in both
  themes. The final strict comparison matched all 52, with no missing baselines.
- Artwork tests passed again after rebuilding. No application changes were made
  after final verification; only reviewed baselines and this checkpoint changed.

Both themes have the same visibility measurements:

| Check | Bottom edge | Viewport height |
| --- | ---: | ---: |
| First Items title, mobile | 712.5px | 844px |
| First Abilities title, mobile | 637.5px | 844px |
| First item-search title, mobile | 620px | 844px |
| First item-search thumbnail, mobile | 644px | 844px |
| First complete Items row, desktop | 661.5px | 720px |
| First complete Abilities row, desktop | 644.5px | 720px |

## Local evidence

- Before/after gallery: `.codex-tmp/visual-review/followup/index.html`.
- Layout and interaction receipts: `.codex-tmp/visual-review/followup/checks.json`.
- Pixel comparison: `.codex-tmp/visual-review/followup/matrix-comparison.json`.
- Preserved initial capture-pack comparison, including original baselines:
  `.codex-tmp/visual-review/followup/pack-before-refresh/report.html`.
- Final strict capture-pack report: `.codex-tmp/visual-review/latest/report.html`.
- Index preservation receipt:
  `.codex-tmp/visual-review/followup/index-hashes-check.json`.
- Test/build logs: `.codex-tmp/visual-review/followup/`.

To reproduce, run `npm run verify`, then start
`npm run preview -- --host 127.0.0.1 --port 5174 --strictPort` and run
`npm run test:browse-visual`. The standard capture pack is a separate
`npm run visual:compare:capture` command. Screenshots and logs are local evidence
under the ignored `.codex-tmp` directory; accepted baselines are committed.

## Preservation and boundaries

No extraction, enrichment, new artwork, source-image edits, generated-record or
schema changes, asset-join changes, ranking changes, push or deployment.
Specialized recipe, NPC, workstation, blueprint, quest and buff facts remain.
The original checkout stays on `40f8cd8c1d503d37325603a8a2de2faf4031bb0f`, with
its untracked `data/enrichment/blueprint-unlock-map.json` unchanged (SHA256
`E75A57C71E8DC9228CC0D79CD18F44FDB664D8340C4DC706F1B7D673EC42B3DD`).
