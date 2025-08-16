#!/usr/bin/env bash
set -euo pipefail

# Scan provided files for disallowed Hugo shortcodes and Liquid patterns.

# Shortcodes in this allowlist are permitted to use angle-bracket syntax.
# Add additional shortcodes to the pipe-delimited regex as needed.
readonly ALLOWED_SHORTCODES_REGEX='(figure|highlight|relref|ref)'

# Look for any '{{<' occurrences not in the allowlist.
shortcode_hits=$(grep -nF '{{<' "$@" | grep -Ev "\\{\\{<\\s*(${ALLOWED_SHORTCODES_REGEX})\\b" || true)
if [[ -n "${shortcode_hits}" ]]; then
  echo "ERROR: Found disallowed angle-bracket shortcode. Use '{{% ... %}}' instead." >&2
  echo "${shortcode_hits}" >&2
  exit 1
fi

# Look for leftover Jekyll/Liquid constructs like '{{ site.foo }}'.
liquid_hits=$(grep -nE '\\{\\{\\s*site\\.' "$@" || true)
if [[ -n "${liquid_hits}" ]]; then
  echo "ERROR: Found Liquid template syntax '{{ site.* }}'. Convert to Hugo syntax." >&2
  echo "${liquid_hits}" >&2
  exit 1
fi

