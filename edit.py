import os
import re

folders = ["components", "prefabs", "systems/server", "systems/client"]

def update_frontmatter(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Find frontmatter: starts with --- and ends with ---
    m = re.match(r"^---\n(.*?\n)---\n", content, re.DOTALL)
    if not m:
        # No frontmatter, skip file
        return

    frontmatter = m.group(1)
    lines = frontmatter.splitlines()
    found = False
    new_lines = []
    for line in lines:
        if line.strip().startswith("search_exclude:"):
            new_lines.append("search_exclude: false")
            found = True
        else:
            new_lines.append(line)
    if not found:
        # Insert new line at the end of frontmatter
        new_lines.append("search_exclude: false")

    new_frontmatter = "---\n" + "\n".join(new_lines) + "\n---\n"
    new_content = new_frontmatter + content[m.end():]

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)

for folder in folders:
    for root, dirs, files in os.walk(folder):
        for file in files:
            if file.lower().endswith(".md"):
                path = os.path.join(root, file)
                update_frontmatter(path)
                print(f"Updated: {path}")
