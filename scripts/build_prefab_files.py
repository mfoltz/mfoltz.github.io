#!/usr/bin/env python3
"""Generate prefab content and data files from JSON input.

This script reads the complete prefab list from ``data/prefabs/All.json``
and ensures that a corresponding data file and content page exists for
every prefab.  For each prefab name ``Foo`` with id ``123`` it writes:

* ``data/prefabs/Foo.json`` containing ``{"Foo": 123}``
* ``content/prefabs/Foo.md`` with front matter specifying ``title`` and
  ``data_file`` so Hugo can render the page via
  ``layouts/prefabs/single.html``.

It also generates ``data/prefab_files.yml`` listing all prefab names.
Existing files are left untouched.
"""

from __future__ import annotations

import json
from pathlib import Path


def main() -> None:
    repo_root = Path(__file__).resolve().parents[1]
    prefab_dir = repo_root / "data" / "prefabs"
    content_dir = repo_root / "content" / "prefabs"
    output_file = repo_root / "data" / "prefab_files.yml"

    all_file = prefab_dir / "All.json"
    prefabs = json.loads(all_file.read_text())

    names = sorted(prefabs.keys())
    output_file.write_text("\n".join(f"- {name}" for name in names) + "\n")

    content_dir.mkdir(parents=True, exist_ok=True)

    for name in names:
        prefab_id = prefabs[name]

        data_path = prefab_dir / f"{name}.json"
        if not data_path.exists():
            data_path.write_text(json.dumps({name: prefab_id}, indent=2) + "\n")

        content_path = content_dir / f"{name}.md"
        if not content_path.exists():
            front_matter = (
                "---\n"
                f"title: {name}\n"
                f"data_file: {name}\n"
                "---\n"
            )
            content_path.write_text(front_matter)


if __name__ == "__main__":
    main()
