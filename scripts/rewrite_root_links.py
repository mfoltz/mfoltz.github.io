#!/usr/bin/env python3
"""Rewrite root-relative Markdown links using relref shortcodes.

This script scans Markdown files and rewrites any links that start with ``/``
to use Hugo ``relref`` shortcodes instead. Files containing null bytes are
skipped and recorded in ``rewrite_root_links_skipped.txt`` at the repository
root.

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


def process_file(path: Path, repo_root: Path, log_path: Path) -> bool:
    """Rewrite links in ``path``.

    Returns ``True`` if the file was modified, ``False`` otherwise.
    Files containing null bytes are recorded in ``log_path`` and skipped.
    """

    data = path.read_bytes()
    if b"\x00" in data:
        with log_path.open("a", encoding="utf-8") as log:
            log.write(f"{path.relative_to(repo_root)}\n")
        return False

    text = data.decode("utf-8")
    new_text = rewrite_links(text)
    if "\x00" in new_text:
        raise ValueError(f"{path} contains null bytes after rewrite")

    if new_text != text:
        path.write_text(new_text, encoding="utf-8")
        print(f"Updated {path.relative_to(repo_root)}")
        return True

    return False


def main(argv: list[str] | None = None) -> None:
    repo_root = Path(__file__).resolve().parents[1]
    targets = argv if argv is not None else sys.argv[1:]
    if not targets:
        targets = ["content/prefabs"]

    log_path = repo_root / "rewrite_root_links_skipped.txt"
    log_path.write_text("")

    updated = 0
    errors: list[str] = []

    for target in targets:
        path = (repo_root / target).resolve()
        md_paths: list[Path]
        if path.is_dir():
            md_paths = list(path.rglob("*.md"))
        elif path.is_file():
            md_paths = [path]
        else:
            errors.append(f"Unknown path: {target}")
            continue

        for md_path in md_paths:
            try:
                if process_file(md_path, repo_root, log_path):
                    updated += 1
            except Exception as exc:  # pragma: no cover - broad catch for CLI
                errors.append(f"{md_path}: {exc}")

    print(f"Updated {updated} file{'s' if updated != 1 else ''}.")
    if errors:
        print("Errors encountered:")
        for err in errors:
            print(f"  {err}")
        raise SystemExit(1)


if __name__ == "__main__":
    main()
