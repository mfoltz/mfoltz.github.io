#!/usr/bin/env bash
set -euo pipefail

BATCH_SIZE=${BATCH_SIZE:-25}
LOG_DIR=${LOG_DIR:-logs/bulk_relref}
mkdir -p "$LOG_DIR"

find_paths() {
  rg '\]\(/' "$@" -l
}

process_batch() {
  local batch=("$@")
  printf '%s\n' "${batch[@]}" | xargs python scripts/rewrite_root_links.py
  scripts/check_shortcode_syntax.sh "${batch[@]}"
  ./scripts/dev.sh build 2>&1 | tee "$LOG_DIR/build-$(date +%Y%m%d%H%M%S).log"
  rg -q 'REF_NOT_FOUND' "$LOG_DIR"/build-* && {
    echo "Missing refs found; check log."
    return 1
  }
}

main() {
  files=($(find_paths "$@"))
  while ((${#files[@]})); do
    batch=("${files[@]:0:BATCH_SIZE}")
    process_batch "${batch[@]}" || break
    git commit -am "Migrate relrefs: ${batch[0]}…"
    files=("${files[@]:BATCH_SIZE}")
  done
}

main "$@"
