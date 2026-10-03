# Mobile linked-record cards: local checkpoint

Reviewed: October 2, 2026. Branch: `codex/jewel-ability-navigation`.
Starting commit: `6cdff3dde3ff14ae6e3acbf62671d52c004e79dd`.

## Goal

Give complete titles and prefab names room beside existing artwork at narrow
widths, while retaining quantities, GUIDs and whole-card navigation.

## What changed

Only the shared `DbReferenceList` product renderer changes. Below 640px, names
use the available width beside the existing 44px icon. Quantity precedes GUID
in a left-aligned wrapping row below, aligned with the names. Normal word
wrapping has an emergency break for unbroken names and identifiers. At 640px
and above, the existing horizontal layout and right-aligned metadata remain.

Rendering tests preserve complete identifiers, exact routes, order, optional
artwork, non-linked records, empty lists, quantity/GUID zero, negative GUIDs,
missing quantities and null GUIDs. Missing metadata produces no empty row.
The new `npm run test:linked-records-visual` uses private measurement hooks.

## What visibly improved

The six-fixture, two-theme matrix covers 320, 390, 639, 640 and 1280px. Across
250 card measurements, mobile title overflow falls from 16 instances to zero.
The Aftershock recipe name area at 320px grows from 63.75px to 156px; its 20px
title overflow disappears. All 36 changed mobile captures were inspected using
12 contact sheets containing complete card sections in both themes.

## What the compare pack caught

- All 24 focused desktop captures at 640/1280px match the before images byte for
  byte. The existing comparator passes 92 baselines with zero changed, missing
  or created; its matches are a separate, threshold-based measure.
- The focused run passes 60 matrix captures, four keyboard-focus captures, two
  failed-artwork captures and six native 200% zoom captures. Complete text,
  geometry, exact destinations, keyboard activation and back navigation pass.
  Missing artwork is covered by the renderer tests and icon-free fixture rows.
- Inter and Cinzel loaded before capture. Native zoom uses Chromium's tab zoom
  at factor 2, with a verified 640x480 CSS viewport and device pixel ratio 2.
  Representative focus, failed-artwork and native-zoom images were inspected.
- Existing jewel checks pass 38 captures, browse checks pass 92 captures and
  their interactions, and Blueprint checks pass 54 captures and six interaction
  runs. There are 348 fresh acceptance captures, plus 60 before captures.
- `npm run verify`, `npm test`, `npm run test:db-artwork` and TypeScript checking
  pass. All 16,501 checked data, map, artwork, branding and baseline hashes are
  unchanged, with no missing or added files in the checked directories.

An initial before-capture harness attempt failed while serializing a browser
helper. The corrected harness captured the unchanged starting build before the
renderer edit. Both logs remain retained; the failed attempt is not acceptance.

## Why This Was Accepted

Measured containment and complete text agree with the inspected mobile images;
desktop captures retain the existing presentation exactly.

## What Was Intentionally Left Alone

Associated ability chips, unrecorded messages, source disclosure, icons, record
ordering, hover/focus behavior and destinations remain intact. No public API,
type, schema, generated data, artwork or baseline changes occurred.

## What still feels weak

This establishes local Chromium behavior, not cross-browser acceptance. Recorded
relations and curated artwork retain their existing evidence limits; this pass
adds no source, ownership, acquisition or live-game claims.

## Next swing

End at one bounded local implementation commit and a stopped preview. Then
refresh remote main read-only and stop delivery preparation if it differs from
`6226c16382173aa34160bdf27894cad6cb22f177`. Prepare two local review drafts in
dependency order: Blueprint through `1f39c82fa2`, then jewel/mobile through this
verified implementation. Preserve history; no merge, rebase, push, PR or deploy.

Receipts, exact commit identity, logs, preservation hashes, capture manifests,
before/after measurements and inspected contact sheets are retained under:

`C:/Users/mitch/.codex/visualizations/2026/10/03/01a0ff3e-1b3d-7433-baac-02af7b8b154d/linked-record-cards/`
