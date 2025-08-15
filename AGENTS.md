# Agent Instructions

- Keep individual commits between roughly 500 and 1000 lines of diff. This makes reviews easier and helps avoid environment limits.
- Do not commit binary files. The current environment cannot process them.
- Before committing, run the following scripts to verify changes:
  - `scripts/check_shortcode_syntax.sh`
  - `./scripts/dev.sh build`
