# Agent Instructions

- Keep individual commits between roughly 500 and 1000 lines of diff. This makes reviews easier and helps avoid environment limits.
- Do not create & commit binary files via Codex tasks. Commits are unable to generate properly with binary files present; binary files already in the repo itself are fine, just note that any changes or additions involving binary files are NOT allowed for Codex commits.
- Before committing, run the following scripts to verify changes:
  - `scripts/check_shortcode_syntax.sh`
  - `./scripts/dev.sh build`
