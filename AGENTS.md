# Agent Instructions

- Keep individual commits within roughly 500–1000 lines of diff for easier review and to avoid environment limits.
- Binary changes are only allowed for:
  - repo-owned curated ability icons under `public/icons/abilities/` (typically via `npm run refresh:db-assets`)
  - unchanged current-wiki branding and homepage artwork under `static/wiki-assets/`, sourced from `Odjit/VRising-Mod-Wiki` on branch `explore/theme-revamp`
- Current-wiki branding and homepage artwork vendored under `static/wiki-assets/` must remain unchanged:
  - do not recolor, redraw, crop in ways that alter the artwork, or generate substitutes
  - preserve the approved source assets faithfully and use them as-is
- Before committing, run the following scripts to verify changes:
  - `npm run verify`
