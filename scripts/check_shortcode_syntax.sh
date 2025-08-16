#!/usr/bin/env bash
set -euo pipefail

# Scan provided files for disallowed Hugo shortcodes and Liquid patterns.

# Shortcodes in this allowlist are permitted to use angle-bracket syntax.
# Add additional shortcodes to the pipe-delimited regex as needed.
readonly ALLOWED_SHORTCODES_REGEX='(figure|highlight)'

# Build a list of Markdown files from any provided files or directories.
mapfile -t files < <(find "$@" -type f -name '*.md' -print)

# Exit early if no matching files are found.
if [[ ${#files[@]} -eq 0 ]]; then
  exit 0
fi

# Look for any '{{<' occurrences not in the allowlist.
shortcode_hits=$(grep -nF '{{<' "${files[@]}" | grep -Ev "\\{\\{<\\s*(${ALLOWED_SHORTCODES_REGEX})\\b" || true)
if [[ -n "${shortcode_hits}" ]]; then
  echo "ERROR: Found disallowed angle-bracket shortcode. Use '{{% ... %}}' instead." >&2
  echo "${shortcode_hits}" >&2
  exit 1
fi

# Look for leftover Jekyll/Liquid constructs like '{{ site.foo }}'.
liquid_hits=$(grep -nE '\\{\\{\\s*site\\.' "${files[@]}" || true)
if [[ -n "${liquid_hits}" ]]; then
  echo "ERROR: Found Liquid template syntax '{{ site.* }}'. Convert to Hugo syntax." >&2
  echo "${liquid_hits}" >&2
  exit 1
fi

