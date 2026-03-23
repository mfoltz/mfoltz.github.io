# Agent Instructions

- Keep individual commits within roughly 500–1000 lines of diff for easier review and to avoid environment limits.
- Binary changes are only allowed for repo-owned curated ability icons under `public/icons/abilities/` (typically via `npm run refresh:db-assets`). Do not add or modify unrelated binary files.
- Before committing, run the following scripts to verify changes:
  - `npm run verify`
