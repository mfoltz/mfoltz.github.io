# Dual-Lane Review Loop Subtractive Calm Pass 01

## Goal

Trim the in-progress steering experiment back out of the shipped shell, keep the accepted player-first plus developer-secondary review loop intact, and preserve the March 28 data/materialization gains without leaving behind a hidden control surface.

## What Changed

- Removed the shell-level steering band, its persistent local-storage state, and the route-level evidence wiring that was pushing home, search, browse, and detail pages toward an operator surface.
- Kept the calmer page-owned presentation work already embedded in the real routes: quieter hierarchy, clearer browse framing, and short helper summaries that explain the current surface without continuity semantics.
- Removed steering-specific captures from the accepted visual-review pack so developer sanity returns to shell and provenance drift only.
- Preserved the recent website-facing data improvements: repo-backed item icons, refreshed item descriptions, and the current ingestion-readiness/reporting loop.

## What Visibly Improved

- Player-first routes no longer compete with a second band above the fold.
- Search, browse, and detail pages now read as page-owned surfaces again instead of local content living underneath a shell helm.
- The visual-review pack is easier to trust because a clean compare now means the accepted website surface stayed stable, not merely that the steering experiment matched itself.

## What Still Feels Weak

- NPC display coverage is still limited by upstream data and remains the only current ingestion-readiness warning.
- Some page-local helper copy could still become more concise over time now that the shell is quieter.
- Developer provenance remains intentionally secondary, so future improvements there should stay bounded and avoid reintroducing operator posture.

## Why This Was Accepted

The trim keeps the real player-facing and contributor-facing value from recent runs while removing the one slice that was drifting toward continuity ownership and control-surface behavior.

## What Was Intentionally Left Alone

The March 25 accepted milestone, the dual-lane review loop itself, the March 28 enrichment/materialization gains, and the current shell/provenance acceptance surfaces all remain in place.

## What The Compare Pack Caught

- This pass intentionally removes steering-specific acceptance from the developer-sanity pack rather than polishing that surface further.
- Player-first and developer-sanity captures remain the review loop, but the shell no longer freezes a global helm as part of accepted website behavior.

## Next Swing

Pause on steering experimentation and only resume website work through bounded player-first or developer-secondary passes that stay page-owned, visual, and receipt-producing.

## Acceptance Addendum

- Accepted compare report before baseline refresh: `36` captures, `16` matched, `20` changed, `0` missing baseline.
- All `18` player-first diffs were expected fold-collapse changes from removing the shell-level steering band rather than signs of a hidden replacement helm.
- The developer-sanity pack stayed stable except for the two `db-item-blood-essence-source-detail` captures, which remained acceptable because provenance stayed easy to inspect and clearly secondary to the player read.
- After refreshing the current 36-capture pack, `npm run visual:compare` settled back to clean at `36 matched`, `0 changed`, `0 missing baseline`.
