# Agent Instructions

- Keep individual commits within roughly 500–1000 lines of diff for easier review and to avoid environment limits.
- Binary changes are only allowed for:
  - repo-owned curated ability icons under `public/icons/abilities/` (typically via `npm run refresh:db-assets`)
  - repo-owned curated item icons under `public/icons/items/` (typically via `npm run refresh:db-assets`)
  - approved Data Base branding assets under `static/database-assets/`, with provenance recorded in that folder
  - unchanged current-wiki branding and homepage artwork under `static/wiki-assets/`, sourced from `Odjit/VRising-Mod-Wiki` on branch `explore/theme-revamp`
  - accepted visual review baselines under `tests/visual/baselines/`
- Data Base branding assets vendored under `static/database-assets/` must remain unchanged from the approved source:
  - do not recolor, redraw, crop in ways that alter the artwork, or generate substitutes
  - record original filename, dimensions, transparency, and SHA256 in the folder README
- Current-wiki branding and homepage artwork vendored under `static/wiki-assets/` must remain unchanged:
  - do not recolor, redraw, crop in ways that alter the artwork, or generate substitutes
  - preserve the approved source assets faithfully and use them as-is
- Before committing, run the following scripts to verify changes:
  - `npm run verify`
