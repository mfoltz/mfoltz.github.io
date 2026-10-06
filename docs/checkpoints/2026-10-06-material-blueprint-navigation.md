# Material-to-Blueprint navigation checkpoint

Date: 2026-10-06. Branch: `codex/material-blueprint-navigation`.
Starting tip: `464af995ad92f44d5ee2cbdefeb0bc04187625c0`.
Local main remains `3917522d940ecbac7b457f63111c2817ef1ca098`.
Data commit: `7fa74ca4c756d820f9bf5f63899a44c6ca25fa98`.
UI, browser acceptance and documentation form the second bounded local commit.
The final private delivery receipt records both complete commit identities.

## Source contract

Optional `materialBlueprints` adds 1,470 unique positive requirements across
96 items and 1,080 Blueprint targets. Generation inverts existing validated
`buildMaterials`, requiring exact item/Blueprint prefab, GUID and destination
joins. Each target carries its complete identity, current route, recorded
requirement amount, retained Blueprint source path and
`ProjectM.BlueprintRequirementBuffer` provenance. Invalid quantities,
ambiguous destinations, duplicate pairs and inconsistent identities stop
generation. English case-insensitive title order uses complete prefab and
GUID tie breakers.

Validation independently rereads all 1,198 retained Blueprint Markdown files
and compares source identities, quantities, routes, provenance and artwork
with both forward rows and every backlink. The 117 empty buffers and two
held zero-valued rows in one Blueprint remain outside the positive-use group.
Unused items omit the field. Technical and DLC targets are included as
recorded destinations, without claiming live availability or acquisition.

Existing Blueprint portraits are reused without changing their evidence:
`runtime-sprite-name` captures have native Sprite evidence; curated unique-name
matches and existing curated associations retain their weaker recorded basis.
Missing artwork remains supported. No extraction or artwork work occurred.

## Item behavior

Used in Blueprints follows Used in recipes and precedes Linked Blueprints in
both consolidated and fallback item layouts. Navigation and provenance totals
include every target; the array is handled rather than exposed as generic JSON.
Whole-card links preserve complete names, prefabs, GUIDs and quantities such
as `12 required`, using the existing responsive shared-card amount formatter.

Search used-in Blueprints matches every whitespace-separated term across the
complete title, prefab and GUID list, case-insensitively. Twelve matches appear
initially; Show more adds twelve and focuses the first newly revealed link.
Clear search resets expansion and focuses the input. Visible/matching counts
and the explicit unmatched-search message remain available.

`buildQ` and `buildShown` use history replacement, preserve unrelated recipe
and book parameters and anchors, omit defaults, and safely default or clamp
counts. Back, reload and shared URLs restore search and expansion. Blueprint
details retain forward material links and Open Prefab Reference for inspecting
the declaring requirement buffer. Items without uses receive no new group or
absence claim.

## Acceptance

- `npm run verify` passed before the data commit; `verify-final.log` records
  the final gate before the UI commit, including regeneration and the artifact
  check. `npm test` and all four artwork tests pass.
- Source/join tests cover ordering, duplicate titles, invalid quantities,
  ambiguous joins, exact routes and optional artwork. Rendering/state tests
  cover both item layouts, empty lists, full identifiers, preserved query state
  and existing shared-card zero/null/negative GUID behavior.
- `npm run test:material-blueprints-visual` passes 70 checks and produces 90
  after captures. Sixty before captures cover the same six fixtures and both
  themes at 320, 390, 639, 640 and 1280px: Stone Brick, Plank, Iron Ingot,
  Carpet Roll, Blood Essence and Blood Coating.
- Loaded Inter/Cinzel fonts are required. All 90 after captures were inspected
  using native-image contact sheets, including search, unmatched results,
  restoration, keyboard focus, source buffers, failed artwork and native zoom.
  Complete text/routes, containment and mobile/desktop metadata placement pass.
- All 147 Stone Brick uses expand with correct focus. Full-list identifier
  search, independent recipe/material state, keyboard activation, back/reload,
  forward material navigation and source-buffer identity/quantity checks pass.
  Four native 200% Chromium zoom checks verify zoom factor 2 and a 640x480 CSS
  viewport, including missing artwork; CSS scaling is not used as zoom evidence.
- All ten unlinked Blood Coating captures are pixel-identical before/after.
- Existing ingredient, book, hyphen, jewel, shared-card, responsive browse and
  Blueprint integration checks pass. The Blueprint suite retains 54 captures
  and six interaction runs; the hyphen suite retains 130 checks and 60 captures.
- Initial baseline comparison found exactly 88 passing comparisons and the
  four permitted Blood Essence detail/source changes in both themes. Those
  four comparisons were inspected and accepted individually. All 92 final
  comparisons pass with zero changed or missing images.

The ingredient regression initially stopped because its page-wide Show more
locator found both recipe and material controls. The user explicitly approved
scoping recipe controls to `#item-recipe-uses` and completing acceptance. The
repair preserves every assertion and the rerun passes. The unchanged book
suite initially timed out starting the zoom extension service worker; its
isolated retry passes. That first timeout's cause remains unestablished.
Failed runs are retained separately and do not establish acceptance.

An early artwork run preceded regenerated search output and failed with a
missing-file error; the completed-generation run passes all four tests. An
initial before-capture helper failed to resolve its module before launching a
browser; the successful before run supplies the loaded-font evidence.

## Preservation and local delivery

The successful protected-file audit starts from the accepted hash manifest at exact base
`464af995ad`, with a fresh snapshot of all 1,130 item details. Fresh Node hashing
checks all 101,410 protected files after generation. Exactly the 96 intended
item details add the optional field, with no original-field drift. The only
other allowed hash changes are the four inspected Blood Essence baselines.
Maps, forward materials, browse/global-search indexes, unrelated data, source
content, artwork and unaffected baselines remain unchanged. Repeat generation
reproduces every generated hash; the final manifest differs from the earlier
data manifest only in the four accepted baseline images. The final receipt
permits exactly 100 changed protected files: 96 item details and four baselines.

Private evidence root:
`C:/Users/mitch/.codex/visualizations/2026/10/03/01a0ff3e-1b3d-7433-baac-02af7b8b154d/material-blueprints-acceptance/`.
Receipts retain exact command exits, source/preservation proofs, all captures,
font/DOM measurements, inspected baseline hashes and intentional preview stops.
The final delivery receipt confirms a clean task branch and stopped owned preview.
The detached browse-review worktree, archive tag, local main and existing
book/hyphen history remain intact. No merge, rebase, push, PR or deployment occurs.
