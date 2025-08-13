#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo "Usage: $0 [serve|build]" >&2
  exit 1
}

if [[ $# -ne 1 ]]; then
  usage
fi

action="$1"

# Ensure submodules are initialized and updated
git submodule update --init --recursive

# Generate prefab file list
python scripts/build_prefab_files.py

case "$action" in
  serve)
    hugo server
    ;;
  build)
    hugo
    ;;
  *)
    usage
    ;;
esac
