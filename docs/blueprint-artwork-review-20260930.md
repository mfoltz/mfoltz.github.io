# Blueprint artwork review — September 30, 2026

The approved image expansion preserves 13 existing buildable PNGs and adds 41
castle structure PNGs: 8 stairs, 29 floors, and 4 walls/pillars. The authoritative
materialization allowlist is `data/enrichment/buildable-portrait-review.json`.
Each entry pins the current prefab GUID, original Texture2D filename, SHA256,
and evidence kind. The count follows this reviewed set rather than a fixed cap.

The added artwork is a **curated unique name match**. Normalize case and
separators; strip the BP/TM and structure-icon prefixes and the closed Castle
or Castle_Floor prefixes. Preserve every material, tier, style, orientation,
and variant token. Recompute uniqueness against all current BP/TM catalog
entries, independently of older display-map guesses. This supports an
illustrative association; it does not establish runtime Sprite ownership.

All 43 structural Texture2D candidates were inspected in three retained
contact sheets. Their Sprite versions match a crop within the unchanged
Texture2D image, ignoring RGB values only where alpha is zero. Materialize
the original standalone Texture2D PNGs without editing their pixels.

Two entrance filenames still have two possible BP/TM owners each. Their four
records remain unmaterialized. Do not infer a shared-icon rule from the names.
The historical scout remains a dated account of the missing explicit link.

## Targeted runtime capture

The first target list contains 58 exact prefab/GUID identities: the 13 existing
images and all 45 structural records, including the four held entrance records.
Capture only those identities, `ManagedBlueprintData.Icon.name`, and explicit
missing states. Do not enumerate unrelated entities, export localized strings,
or run the full snapshot extractor. A missing icon remains unknown.

The initial read-only extractor inspection found the isolated client/server
version pair mismatched. Its latest retained tooltip-floor receipt timed out
before runtime initialization. No game launch, install update, deployment, or
connection retry is justified by that inspection alone. Prepare the narrow
capture implementation and retain its contract; hold execution until the
version prerequisite passes. This does not reopen the parked tooltip lane.

Review evidence and execution receipts live outside the checkout under
`C:\Users\mitch\.codex\visualizations\2026\09\30\01a0f347-a14d-77f1-9cf0-5f6b3fd2d4af\blueprint-icons-capture`.

## Acceptance

- Reject stale GUIDs, duplicate identities/files, changed source hashes,
  ambiguous names, and assets outside the reviewed manifest.
- Keep the 1,198 Blueprint corpus and material/unlock/book counts unchanged.
- Retain all existing verification commands. Run the complete tests, artwork
  tests, `npm run verify`, and native visual/responsive checks.
- Inspect new castle artwork in browsing, global search, and detail views in
  both themes, including 320px width. Preserve established route baselines.
- Preserve original asset bytes, unrelated enrichment, and both original
  checkout histories. No publication is included in this pass.
