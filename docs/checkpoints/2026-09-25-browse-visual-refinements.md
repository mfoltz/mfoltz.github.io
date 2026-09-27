# Database visual refinements

Implemented locally on `codex/browse-visual-refinements`, based on refreshed
`origin/main` at `0bde1a88fef41f6dab5c4346a7bef2d55c8ffe89`.

## Result

- Database browsing and global search keep their primary view switches visible.
  Detailed filters start collapsed, retain their open state during adjustments,
  and reset on page entry or database-section navigation. URL filter semantics
  and reference browsing are unchanged.
- Indexes carry existing sprite and approved portrait paths into browse/search
  rows. Recipes reuse the first output already selected by the generator.
  Thumbnails are 48px on mobile and 64px above it; detail sprites use 64/96/128px,
  with proportionately wider portraits. Missing or failed artwork has no well.
- Titles precede row badges. Redundant database-search labels and route text,
  repeated stack/type metadata, duplicate detail badges, and badge-covered
  recipe Group/Family facts are removed. Other facts and zero values remain.
- Recipe summary labels stack above values. Ingredient quantities and icons
  retain their width, and names wrap at word boundaries.
- Detail breadcrumbs use the loaded title and wrap on narrow screens. Loading
  and errors retain the route-derived fallback, without another detail fetch.
  Tooltip source starts collapsed; its existing hash opens it before scrolling.

## Verification

- `npm run verify` passed before each implementation commit.
- `npm test` passed, including focused row, badge, retained-fact, artwork,
  disclosure, and breadcrumb regressions.
- `npm run test:db-artwork` passed against regenerated data: optional artwork
  propagation, exact recipe primary-output selection, and portrait consistency.
- `npm run test:browse-visual` produced 64 route/theme/viewport captures at
  390×844, 768×1024, 1280×720, and 1440×960. Every layout check passed, and all
  captures were visually inspected in both themes.
- Keyboard/pointer checks passed for primary switches, detailed facets, Clear,
  URL restoration, page-entry disclosure reset, tooltip deep links, delayed
  detail navigation, breadcrumb fallback, single detail fetching, and failed
  images.
- No page-wide horizontal overflow or recipe words split across lines occurred.
- The separate visual pack passed: **52 matched, 0 changed, 0 missing** after
  reviewing and refreshing the baselines. Fourteen captures are new, covering
  collapsed/expanded controls, artwork-bearing rows, and Tooltip source.
- The 38 older baselines also included changes already on refreshed `main`,
  notably `f4c3dac3fa` and the prefab-reader work. Their original images and
  comparison report remain saved. A separate base-commit UI comparison uses
  identical current data/assets on both sides; its home and technical-reference
  first-screen controls match exactly (zero differing pixels).
- The optional broad-control check was run separately with
  `VRISING_DATAEXTRACTOR_ROOT=C:\Users\mitch\source\Repos\VRising.DataExtractor`.
  It covered all 2,010 ability, 1,076 item, and 667 recipe controls using existing
  extracted records. The ordinary build skips this check when the extractor is
  not a sibling of the managed worktree. Existing enrichment warnings remain;
  required coverage floors pass.

Both themes have the same first-record measurements:

| View | Items | Abilities |
| --- | ---: | ---: |
| First title bottom at 390×844 | 712.5px | 637.5px |
| First full row bottom at 1280×720 | 695.5px | 644.5px |

## Local visual evidence

- This pass against the refreshed base UI:
  `.codex-tmp/visual-review/base-comparison/index.html`.
- Previous accepted-baseline pack:
  `.codex-tmp/visual-review/initial-compare/report.html`.
  Original baselines are preserved in `.codex-tmp/visual-review/before/`.
- Responsive gallery: `.codex-tmp/visual-review/refinement-matrix/index.html`.
- Layout and interaction receipts:
  `.codex-tmp/visual-review/refinement-matrix/checks.json`.
- Final baseline comparison: `.codex-tmp/visual-review/latest/report.html`.

To repeat the interactive checks, generate/build the data, run
`npm run dev -- --host 127.0.0.1 --port 5174 --strictPort`, then run
`npm run test:browse-visual` in another terminal.
The standard pack is separate: `npm run visual:compare:capture`.

## Delivery boundary

No extraction, artwork generation, enrichment edits, ranking changes, push, or
deployment. Targeted records already had usable artwork. Other records with no
existing artwork remain text-only. The original checkout remains on its original
`main` commit, with its untracked `data/enrichment/blueprint-unlock-map.json`
preserved (SHA256
`E75A57C71E8DC9228CC0D79CD18F44FDB664D8340C4DC706F1B7D673EC42B3DD`).
