#!/usr/bin/env bash
set -euo pipefail

# Scan provided files for old-style Hugo ref/relref shortcodes
if grep -nE '\{\{<\s*(ref|relref)' "$@"; then
  echo "ERROR: Found deprecated angle-bracket ref or relref shortcode. Use '{{% ref %}}' or '{{% relref %}}' instead." >&2
  exit 1
fi
