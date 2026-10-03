# Jewel association copy refinement: local checkpoint

Reviewed: October 2, 2026. Commit: `e19d632d2ae5836eef0702a400f421d00b8f4235`.
Parent: `861d98ed1b0668cf750ffe576964a6309bb98989`.
Branch: `codex/jewel-ability-navigation`.

## Result

Removed "Recorded ability association from the source snapshot." and its
paragraph from linked jewel details. The Associated ability heading now leads
directly to the existing link. Source disclosure and provenance remain available;
unlinked jewels still show their explicit unrecorded message.

This two-file change updates the renderer and its existing test. It adds no
data, artwork, schema or source interpretation.

## Validation and preservation

- `npm run verify` passes. All 20 detail-rendering tests pass.
- The focused Chromium run passes 38 captures across both themes, 320px and
  1280px, six spell schools, keyboard navigation, reverse links, history/reload,
  filtered browse restoration, source access and artwork fallback. Two native
  200% zoom checks pass.
- Representative mobile, desktop and unlinked captures were visually inspected.
  The Associated ability link remains clear. Existing narrow recipe cards still
  crowd the title with the GUID; that separate readability candidate is recorded
  in the active roadmap.
- All 16,501 checked generated-data, source-map, artwork, branding and baseline
  file hashes match the prior accepted implementation; none are missing.

Receipts, logs, checks, capture hashes and production bundle hashes are retained
under:

`C:/Users/mitch/.codex/visualizations/2026/10/03/01a0ff3e-1b3d-7433-baac-02af7b8b154d/jewel-ability-copy-refinement/`

## Delivery boundary

The worktree was clean after this local commit, and the preview was stopped.
No push, PR, merge, deployment, extraction or baseline replacement occurred.
The original implementation checkpoint retains its dated one-commit scope.
