#!/usr/bin/env python3
"""Generate data/prefab_files.yml listing prefab file names.

This script enumerates all files under data/prefabs/ and writes a YAML
list to data/prefab_files.yml. Each entry is the basename of a prefab
file without its extension.
"""
from pathlib import Path


def main() -> None:
    repo_root = Path(__file__).resolve().parents[1]
    prefab_dir = repo_root / "data" / "prefabs"
    output_file = repo_root / "data" / "prefab_files.yml"

    filenames = sorted(p.stem for p in prefab_dir.iterdir() if p.is_file())
    content = "\n".join(f"- {name}" for name in filenames)
    output_file.write_text(content + "\n")


if __name__ == "__main__":
    main()
