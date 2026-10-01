# Blueprint materials, existing artwork, and castle sprite scout

Date: 2026-09-30. Local branch: `codex/blueprint-materials-artwork`.
Base/local main: `970eef1af8480456dea9c24c6f8658330f23b9c2`.

## Scope and local commits

The approved pass adds recorded build materials, reuses 13 existing curated
buildable images, and scouts retained castle sprite ownership evidence. No new
extraction, artwork, localized text, acquisition inference, or adjacent enrichment.

| Group | Commit |
| --- | --- |
| Exact material generation, validation, types, tests, existing-image reuse | `6b0390b7b5` |
| Material detail UI, browser checks, accepted Blueprint captures, scout and roadmap | The commit containing this receipt |

Both commits run `npm run verify` before commit and remain below 1,000 changed
text lines. The external receipt records both full SHAs and retained review files.
Local main stays at the base. No push, PR, merge, or deployment occurs.

## Evidence and behavior

| Measure | Count |
| --- | ---: |
| Blueprints | 1,198 |
| Positive material buffers / linked material rows | 1,080 / 1,470 |
| Empty buffers / missing buffers | 117 / 0 |
| Held zero-valued buffers / rows | 1 / 2 |
| Reused Blueprint images | 13 |
| Linked / unlinked Blueprint source records | 895 / 303 |
| Unlock edges / distinct sources | 932 / 174 |
| Distinct linked books / Blueprints with book links | 72 / 396 |

Materials retain exact prefab/GUID identity, source-buffer order, quantities,
source component/path, current item titles/icons, and current item destinations.
Validation independently reads the tracked source buffer and rejects mismatched
GUIDs, duplicates, wrong routes, quantities, status, provenance, and counts.

`TM_Castle_Wall_Tier02_Stone_EntranceWide` records two zero-valued rows. The entire
buffer remains held separately in developer data. Empty and held buffers display
“Build cost is unknown”; they do not establish free builds. Positive lists display
material quantities and links alongside existing build facts and source/book links.

All 13 images reuse GUID-matched, source-backed entries in the existing portrait
map. No asset, lock, or portrait-map changes occur. Blueprint browse/detail/global
search share the existing artwork behavior, including its failed-image fallback.

## Regeneration and preservation

Repeated full generation reproduces the same 1,198 detail hashes, Blueprint index,
global search index, and unlock map. The external receipt retains individual hashes
and their aggregate. All 46 preserved input/asset/other-index hashes match the base:
25 enrichment files, 13 curated buildable PNGs, and eight other database indexes.

Stripping exactly the 13 new Blueprint `portraitAssetPath` fields reproduces the
base Blueprint index and global search hashes. No other search titles, terms, tags,
excerpts, or index data change. The unlock map remains
`e75a57c71e8dc9228cc0d79cd18f44fdb664d8340c4dc706f1b7d673ec42b3dd`.
The tracked prefab corpus is unchanged. Historical receipts retain original claims.

## Verification and visual acceptance

- `npm test` passes the full existing suite plus the eight material builder,
  validator, and generated-census tests. The 18 detail render tests pass.
- All three `npm run test:db-artwork` tests pass, including Blueprint image
  propagation and index/detail agreement.
- `npm run verify` passes types, shortcodes, full generation/validation, production
  build, and Pages artifact checks. Existing broad-control receipts are checked via
  `VRISING_DATAEXTRACTOR_ROOT=C:\Users\mitch\source\Repos\VRising.DataExtractor`.
- The existing responsive browser matrix passes 86 captures and interactions.
- Blueprint checks pass 54 route/theme/viewport captures and six interaction runs:
  combined filters, book-name search, sorting, pagination reset, Clear, retry,
  empty results, reload/back/forward, source/book destinations, and breadcrumbs.
- Supplemental checks pass four Tab/Enter navigation/reload/fallback runs and two
  native Chromium 200% zoom checks. The effective CSS viewport is 640x480 at DPR 2.
  Material links remain keyboard reachable with no horizontal overflow. Ten
  screenshots cover focused links, failed artwork, and zoom in both themes.
- Every changed standard capture and all Blueprint/supplemental screenshots were
  inspected. Only 12 Blueprint baselines were accepted: four existing detail
  captures and eight new material/artwork/empty/held captures. All 56 established
  captures matched before acceptance; the final strict pack is **68 matched,
  0 changed, 0 missing**. The homepage and other established routes are unchanged.

Fixtures are selected deterministically from generated data, including a castle
entrance with two materials, Anvil with existing artwork, an empty wallpaper
buffer, and the held wide entrance. Checks include 320px mobile in both themes.

The sandbox initially blocked the site's existing web fonts and produced fallback
font differences. Authorized native-browser reruns loaded those fonts; fallback
font captures were not accepted. Native browser execution succeeded.

## Scout result and remaining limits

The [castle sprite scout](../blueprint-castle-sprite-scout-20260930.md) proves the
Nether Gate authoring owner and its icon asset GUID, but cannot resolve the retained
GUID to an exact sprite/PNG. The 255 canonical filename candidates are inventory,
not ownership evidence. Castle artwork and localized text remain held. Locating a
retained identity bridge or obtaining new capture authority is a separate task.

Blueprint display-text coverage remains 8/1198. Existing coverage target warnings
for NPCs, Blueprints, quests, Buffs, and itemsets remain; required floors pass.
The existing stale `caniuse-lite` and test-only server-rendering/router warnings
remain. Recorded source links and material requirements do not establish verified
acquisition routes or live-game availability.

## Retained review evidence

External receipt and evidence directory:
`C:\Users\mitch\.codex\visualizations\2026\09\30\01a0f347-a14d-77f1-9cf0-5f6b3fd2d4af\blueprint-enrichment`.
It contains per-commit verification/test logs, generation hashes, source-scout
hashes, accepted-baseline hashes, visual reports, browser checks, and screenshots.

To reproduce, run `npm run verify`, `npm test`, `npm run test:db-artwork`, and
`npm run visual:compare:capture`. Start the local preview on port 5174 for
`npm run test:browse-visual`, `npm run test:blueprint-visual`, and
`npm run test:blueprint-materials-visual`. Baselines are tracked; other evidence is
copied outside ignored repository folders. Publication, the item-description
audit, and broader portrait work require separate instructions.
