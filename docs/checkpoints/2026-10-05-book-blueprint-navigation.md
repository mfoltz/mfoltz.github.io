# Book-to-Blueprint navigation checkpoint

Date: 2026-10-05. Local branch: `codex/book-blueprint-navigation`.
Base/local main: `3917522d940ecbac7b457f63111c2817ef1ca098`.
Data commit: `458112c86b`. UI, browser acceptance and documentation form a
separate bounded local commit. No merge, rebase, push, PR or deployment is authorized.

## Scope and source contract

The optional `bookBlueprints` field covers 401 unique mapped book/Blueprint
pairs across 72 books and 396 Blueprint destinations. The 74 book/technology
requirements all record quantity 1; the largest target list has 49 entries.
Exact book, technology and Blueprint prefab/GUID identities and current routes
are required. The declaring technology owns the quantity, retained Markdown
path, `ProjectM.TechItemRequirementBuffer` and
`ProjectM.TechUnlockBlueprintBuffer` provenance. Blueprint cards have no amount.
An independent Markdown reread compares every generated field and destination.
Malformed identities, ambiguous routes, duplicate requirements/unlock edges,
conflicting quantities and invalid recorded stacks are rejected.

Existing forward-map scope is frozen. The initial raw-buffer generator found
429 pairs; 28 additional carpet pairs are absent from the current forward map.
Its older identifier parser excludes/truncates hyphenated names such as
`Cross-Section` and `T-Section`. This implementation emits only the approved 401
mapped pairs and requires exact retained-source proof for each mapped edge.
The 28 held pairs are retained in `held-source-edges.json` for a separate map
audit; they are not silently promoted or described as absent source evidence.
These counts do not establish exhaustive raw-source coverage, guaranteed
unlocks, acquisition, consumption per Blueprint or live-game availability.

## Item behavior

Linked Blueprints follows Used in recipes in both consolidated and fallback
item layouts. Navigation/provenance counts include the full target list.
Declaring technology cards show complete identities, reference links and each
book requirement once; unknown quantities remain explicit. Multiple-source
books add per-target declaring links outside the whole-card Blueprint anchor.
Single-source books share the overview without repeated source footers.

Search uses all Blueprint and declaring-technology titles, prefabs and GUIDs,
case-insensitively with all whitespace-separated terms required. Cards expand
from 12 in increments of 12, focusing the first new link. Clear search restores
12 cards and input focus. `bookQ`/`bookShown` use history replacement, preserve
unrelated recipe parameters and anchors, clamp invalid counts, omit defaults
and restore search/expansion after back, reload or shared URLs. Unlinked items
receive no new group or no-use claim. Existing curated artwork is reused with
its original evidence strength; missing and failed images remain supported.

## Acceptance and preservation

Final acceptance gates passed: build, production browser checks, all 92
baseline comparisons and deterministic preservation confirmation.

- `npm test`, artwork tests and 30 focused UI/state/shared-card tests pass.
- `npm run verify` passed before the data commit. Final UI verification is
  also successful, retained separately in `verify-ui.log`.
- `npm run test:book-blueprints-visual` passes 60 checks, requiring loaded
  Inter/Cinzel fonts for captures. Fifty before and fifty default after captures
  cover both themes at 320, 390, 639, 640 and 1280px: Paintings, Simple Carpets,
  Armor Storage, Slim Blood Case and unlinked Blood Coating.
- Changed default captures were inspected across all four book fixtures, both
  themes and all five widths using contact sheets derived from native captures.
  Interaction, focus, failed-artwork and native 200% zoom captures are inspected
  separately. DOM assertions require complete text/routes, containment, no
  metadata overlap and mobile metadata below names.
- All ten unlinked Blood Coating before/after captures have identical dimensions
  and pixels; no new group is rendered.
- Full-list search, all 49 painting targets, keyboard activation, expansion
  focus, independent recipe state, Blueprint/source return state and exact
  source-buffer quantities/identities pass. Native browser zoom is confirmed
  through Chromium's zoom API, not CSS scaling.
- Existing ingredient, jewel, shared-card and responsive browse regressions pass.
- The final production build passes another 60 focused book-navigation checks
  with loaded fonts, plus the unchanged Blueprint regression's 54 captures and
  six interaction runs, including its injected failure and Retry recovery.
- All 50 default production captures are pixel-identical to the inspected
  development captures. All 92 existing baseline comparisons pass, with zero
  changed or missing baselines; no baseline was updated.
- The retained 101,410-file audit confirms exactly 72 item-detail
  additions, 401 pairs, 396 targets and 74 requirements, with zero original-field
  drift, unexplained changes or removals. Final repeat generation matches
  all accepted hashes. Maps, browse/global-search indexes, source content,
  artwork and every baseline remain protected.

The first before-capture attempt timed out waiting for full page load; the
successful capture uses DOM readiness with explicit loaded-font assertions.
The first data verify correctly rejected buildable portrait paths routed into
the legacy item-icon validator; dedicated Blueprint-index/source validation
now checks these references without weakening asset checks. The first focused
browser attempt checked a forward book link before the destination record
loaded; the corrected harness waits for that record and exact link.

The existing Blueprint retry regression failed against the development server.
An isolated reproduction recorded two index requests there: the second success
replaced the injected failure. The production preview recorded one request,
showed Retry and recovered correctly. The unchanged suite passes against the
final production build; no product fetch behavior or regression assertions are
changed by this diagnosis.

## Receipts and local boundary

Private evidence root:
`C:/Users/mitch/.codex/visualizations/2026/10/03/01a0ff3e-1b3d-7433-baac-02af7b8b154d/book-blueprints-acceptance/`.
It contains before/after captures, font/interaction measurements, exact command
logs, source holds, retry diagnosis and protected-file manifests. Failed attempts
remain distinguishable from successful acceptance runs. Final receipt records
both commit identities, exact exits and owned-preview shutdown.

Local main, archive tag and the detached browse-review worktree remain intact.
The owned development and production previews are stopped after acceptance;
their exact process identities and absent listeners are recorded. Publication,
the 28 held map edges, material backlinks and extraction need separate scope.
