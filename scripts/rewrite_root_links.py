#!/usr/bin/env python3
"""Rewrite root-relative Markdown links using relref shortcodes.

This script scans Markdown files and rewrites any links that start with ``/``
to use Hugo ``relref`` shortcodes instead. It also validates that no null
bytes are present in the source text or the rewritten output.

Paths to files or directories may be supplied on the command line. If no
paths are given, the script processes ``content/prefabs`` by default.

Links ending with ``/`` are rewritten to reference ``_index.md``. All other
links without an explicit suffix are rewritten to ``.md``. Anchors specified
with ``#anchor`` are preserved after the rewritten path.
"""

from __future__ import annotations

import sys
import re
from pathlib import Path

ROOT_LINK_RE = re.compile(r"\]\(/([^\s)]+)\)")


def rewrite_links(text: str) -> str:
    def _replace(match: re.Match[str]) -> str:
        target = match.group(1)
        path, _, anchor = target.partition("#")
        if path.endswith("/"):
            path = f"{path.rstrip('/')}/_index.md"
        elif not Path(path).suffix:
            path = f"{path}.md"
        anchor = f"#{anchor}" if anchor else ""
        return f']({{{{< relref "{path}{anchor}" >}}}})'

    return ROOT_LINK_RE.sub(_replace, text)


def process_file(path: Path) -> None:
    text = path.read_text(encoding="utf-8")
    if "\x00" in text:
        raise ValueError(f"{path} contains null bytes before rewrite")

    new_text = rewrite_links(text)
    if "\x00" in new_text:
        raise ValueError(f"{path} contains null bytes after rewrite")

    if new_text != text:
        path.write_text(new_text, encoding="utf-8")


def main(argv: list[str] | None = None) -> None:
    repo_root = Path(__file__).resolve().parents[1]
    targets = argv if argv is not None else sys.argv[1:]
    if not targets:
        targets = ["content/prefabs"]

    for target in targets:
        path = (repo_root / target).resolve()
        if path.is_dir():
            for md_path in path.rglob("*.md"):
                process_file(md_path)
        elif path.is_file():
            process_file(path)
        else:
            raise ValueError(f"Unknown path: {target}")


if __name__ == "__main__":
    main()
