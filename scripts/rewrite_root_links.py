#!/usr/bin/env python3
"""Rewrite root-relative Markdown links using ``relref`` shortcodes.

This script scans Markdown files and rewrites any links that start with ``/``
to use Hugo ``relref`` shortcodes instead. When existing ``{{< ref/relref >}}``
shortcodes are used as links, they are converted to ``{{% … %}}`` shortcodes
and wrapped in parentheses. Files containing null bytes are skipped and
recorded in ``rewrite_root_links_skipped.txt`` at the repository root.

Paths to files or directories may be supplied on the command line. If no
paths are given, the script processes ``content/prefabs`` by default.

Links ending with ``/`` are rewritten to reference ``_index.md``. All other
links without an explicit suffix are rewritten to ``.md``. Anchors specified
with ``#anchor`` are preserved after the rewritten path.

For files under ``content/prefabs``, ``content/components``,
``content/systems/client`` and ``content/systems/server`` the first Markdown
heading after the front matter is removed so the body text starts immediately
with the description or tables.
"""

from __future__ import annotations

import sys
import re
from pathlib import Path

ROOT_LINK_RE = re.compile(r"\]\(/([^\s)]+)\)")
LINK_SHORTCODE_RE = re.compile(r"\[([^\]]+)\]\{\{<\s*(ref|relref)\s*\"([^\"]+)\"\s*>\}\}")
SHORTCODE_RE = re.compile(r"\{\{<\s*(ref|relref)\s*\"([^\"]+)\"\s*>\}\}")


def _strip_first_heading(text: str) -> str:
    """Remove the first Markdown heading following any front matter."""

    lines = text.splitlines()
    if lines and lines[0] == "---":
        try:
            fm_end = lines.index("---", 1)
        except ValueError:
            return text
        body_idx = fm_end + 1
    else:
        body_idx = 0

    while body_idx < len(lines) and not lines[body_idx].strip():
        body_idx += 1

    if body_idx < len(lines) and lines[body_idx].startswith("# "):
        del lines[body_idx]
        while body_idx < len(lines) and not lines[body_idx].strip():
            del lines[body_idx]
        return "\n".join(lines) + "\n"

    return text


def _normalize_target(target: str) -> str:
    path, _, anchor = target.lstrip("/").partition("#")
    if path.endswith("/"):
        path = f"{path.rstrip('/')}/_index.md"
    elif not Path(path).suffix:
        path = f"{path}.md"
    anchor = f"#{anchor}" if anchor else ""
    return f"{path}{anchor}"


def rewrite_links(text: str) -> str:
    def _replace(match: re.Match[str]) -> str:
        target = _normalize_target(match.group(1))
        return f']({{{{% relref "{target}" %}}}})'

    return ROOT_LINK_RE.sub(_replace, text)


def rewrite_shortcodes(text: str) -> str:
    def _replace_link(match: re.Match[str]) -> str:
        label, _, target = match.groups()
        target = _normalize_target(target)
        return f'[{label}]({{{{% relref "{target}" %}}}})'

    def _replace_sc(match: re.Match[str]) -> str:
        _, target = match.groups()
        target = _normalize_target(target)
        return f'{{{{% relref "{target}" %}}}}'

    text = LINK_SHORTCODE_RE.sub(_replace_link, text)
    return SHORTCODE_RE.sub(_replace_sc, text)


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
    new_text = rewrite_shortcodes(new_text)

    rel_parts = path.relative_to(repo_root).parts
    if (
        len(rel_parts) >= 2
        and rel_parts[0] == "content"
        and (
            rel_parts[1] in {"prefabs", "components"}
            or (
                rel_parts[1] == "systems"
                and len(rel_parts) >= 3
                and rel_parts[2] in {"client", "server"}
            )
        )
    ):
        new_text = _strip_first_heading(new_text)
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
