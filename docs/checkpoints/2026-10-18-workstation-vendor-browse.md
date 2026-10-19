# Workstation artwork, approved text, and Vendors

Accepted locally: 2026-10-18. No integration or publication is included.

The [October 19 follow-up review](2026-10-19-workstation-vendor-final-review.md)
records the subsequent vendor-detail cleanup and integration-readiness checks.

## Goal

Apply the approved [implementation plan](../design-feedback/workstation-browse-implementation-plan-2026-10-18.md):
reuse source-owned Blueprint copy, improve workstation artwork visibility through
shared rendering, remove trailing browse metadata, and separate Vendors.

## What changed

The execution branch is `codex/workstation-vendor-browse`, based on accepted main
`49075761cfda88bcc62548ac5294fd6590a12dc9`. Its managed checkout is
`C:/Users/mitch/.codex/worktrees/workstation-vendor-browse/mfoltz.github.io`.
The original chat checkout remains on `codex/reference-focus-start-repair`.

All 121 non-vendor workstation identities join the already validated Blueprint
text by exact prefab, signed GUID, and source path. Names and descriptions qualify
independently: 121 eligible names, 119 descriptions, and 105 changed titles.
Prior normalized titles remain search aliases. The Soulshard refinement station
and Tesla Lightning Rod have eligible names but no eligible description;
neither receives the normalized map's generic `Blueprint record.` fallback.
Independent field provenance is retained in the workstation detail schema.

`DbArtwork` adds an opt-in prominent portrait row size: 56px high below `sm`,
80px from `sm`, with bounded width and preserved aspect ratio. Workstations and
Vendors use it through the shared row. Default ability, item, detail, and
ingredient sizes remain unchanged. Missing or failed images collapse cleanly.
Browse rows keep full eligible prose, titles, role/facet badges, identifiers,
and links while omitting the trailing servant/status/duplicate-region slot.
Only complete generated workstation/vendor boilerplate is suppressed.

`/db/vendors` browses the exact 15 `workstationRole === "Vendor"` records;
`/db/workstations` browses the other 121. Vendor search and Region/Inventory
filters use their own population, retain valid selections on empty results,
normalize unsupported query state, and keep Clear within Vendors. Both directories,
global search groups/scopes/counts, and loaded vendor breadcrumbs expose Vendors.
Search replaces the legacy vendor `Castle Workstation` display badge with `Vendor`.

Vendor storage and canonical details remain under `/data/db/workstations/` and
`/db/workstations/<slug>`. Search adds `browseCategory: "vendors"` to those 15
existing entries, with no duplicate records or invented vendor storage section.
Legacy `role=vendor` browse URLs redirect with replacement, translating `area`
to `region` and preserving `q`. The two same-title Noctem Vampire Merchants keep
their distinct prefab/GUID identities, inventory badges, and destinations.

## What visibly improved

Existing rectangular portraits read larger, approved names replace technical
fallbacks, and full owned descriptions explain stations without trailing status
clutter. Vendors have a direct catalog and correct search/detail navigation.
Representative inspection covers narrow layouts, the `sm` boundary, long titles
and prose, absent/failed art, and the same-title merchant pair in both themes.

## Verification and acceptance

`npm run verify`, `npm test`, `npm run test:db-artwork`, and the focused final
type check pass. The verifier includes TypeScript, shortcode checks, generation,
data validation/coverage floors, production build, and the Pages artifact check.
The optional sibling-extractor broad-control check reports its unavailable
repository and is skipped; this pass does not repair or install that dependency.

The final workstation/vendor harness passes 114 automated captures with loaded
Inter/Cinzel and no page errors: both themes at 320, 390, 639, 640, and 1280px,
plus real native 200% zoom. It checks complete copy, titles and images, overflow,
the 121/15 partition, all 15 vendor detail routes, legacy URLs, search aliases,
keyboard activation/focus, browser Back/reload, valid empty-filter state,
directories, search category labels, and image failure. `visual-accepted/receipt.json`
and its zoom/geometry receipts are the accepted set. Earlier `visual/`,
`visual-corrected/`, and `visual-final/` runs retain harness diagnostics and
are superseded for acceptance.

All seven existing browser suites pass: `test:browse-visual`,
`test:blueprint-visual`, `test:blueprint-materials-visual`,
`test:blueprint-artwork-visual`, `test:material-blueprints-visual`,
`test:book-blueprints-visual`, and `test:linked-records-visual`.
These cover shared artwork, recipe/material/book links and query state,
keyboard navigation, failure behavior, and native zoom. Existing product
assertions and fixtures are unchanged.

The generated-data allowance is exactly 228 JSON files: 121 workstation details,
105 existing prefab backlink pages, and the workstation/search indexes. The
other 46,408 of 46,636 JSON files remain byte-identical. Within changed files,
the field audit permits only approved non-vendor copy, independent provenance,
old-title aliases, dependent backlink titles/order, and the 15 vendor search
category markers. Vendor source records, all other aggregate rows, identities,
relationships, quantities, and artwork remain intact.

## What the compare pack caught

The first targeted harness incorrectly treated a legitimate `Servant Coffin`
title as forbidden metadata; the assertion now checks the trailing metadata
slot. Visual inspection also caught the legacy vendor search badge and a native
zoom screenshot cropping issue. The badge is corrected in display only. Zoom
captures use the existing linked-record suite's physical viewport method,
with real tab zoom 2, a 640x480 CSS viewport, and geometry receipts.
Earlier failed/cropped captures remain separate from the final acceptance set.
The added all-vendor detail assertion also normalizes CSS-transformed heading
case, matching the earlier single-vendor assertion.

The full 92-capture comparison passes the 84 unchanged frames and identifies
eight reviewed updates: `home`, `search-blood-items-filters`, `search-blood-db`,
and `db-workstation-jewelcrafting-table-source-detail`, each dark/light.
Home adds Vendors; search splits the category, uses approved text, and replaces
the stale vendor badge. The Source-anchor captures have minor scroll/raster
alignment differences following the new hero copy; visible source routes,
recipe/output joins, and their counts are preserved. A one-pixel-high light
search-control shadow delta was also inspected. No comparator tolerance or
product assertion is weakened. Only these eight baseline PNGs are updated;
the other 84 baseline hashes remain identical. Fresh targeted recapture passes
all eight updated frames. Together with the full run's 84 unchanged comparisons,
all 92 configured frames are accounted for. The production build comes from
`npm run verify`; both comparisons use `npm run visual:compare:capture`.

## Why this was accepted

The change follows independently approved text and exact source-role membership.
It simplifies browse presentation while retaining source access, full identities,
canonical destinations, and shared artwork behavior. Automated capture checks
and personal inspection have distinct scopes; capture count is not a claim
that every matrix frame was personally inspected.

## What was intentionally left alone

No extraction, localization-table or witness edits, new artwork, source schema
migration, broader vendor inference, or unrelated category cleanup is included.
The original checkout's two reference-focus script edits and two planning notes
are protected by before/after hashes. No integration into main, push, PR,
deployment, remote smoke, or publication action is included.

Local implementation commits are `02ef6b2df0` (approved workstation text) and
`edd18258e7` (shared artwork, Vendors, and acceptance harness). This receipt,
the historical planning notes, roadmap pointer, and eight inspected baselines
form the separate delivery-documentation commit.

## What still feels weak

Only 13 workstation records currently have curated portraits; this pass adds no
assets. The two name-only matches still lack an independently approved description.
Vendor inventory labels reflect recorded source fields, not a live-game stock
or acquisition claim. The optional sibling-extractor broad-control check is
unavailable in this isolated worktree; repository coverage floors still run.

## Evidence and next swing

Logs, exact generated-field and baseline-hash audits, screenshots, and the
browser receipts are retained at:

`C:/Users/mitch/.codex/visualizations/2026/10/16/01a14637-a7d7-7761-ac09-68e216720a9c/workstations-review/implementation/`.

Next is a separate review/integration/publication decision. The branch and
checkpoint are the handoff; this local delivery does not authorize that step.
