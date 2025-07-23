import os
import yaml
import re


def extract_title(path):
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    if text.startswith('---'):
        parts = text.split('---', 2)
        if len(parts) >= 3:
            fm_text = parts[1]
            body = parts[2]
            try:
                fm = yaml.safe_load(fm_text) or {}
            except Exception:
                fm = {}
            title = fm.get('title')
            if title:
                return title.strip()
            m = re.search(r'^#\s*(.+)', body, re.MULTILINE)
            if m:
                return m.group(1).strip()
    # fallback to filename without extension
    return os.path.splitext(os.path.basename(path))[0]


def generate_index(dir_path, title):
    md_files = []
    for root, _, files in os.walk(dir_path):
        for fname in sorted(files):
            if not fname.endswith('.md') or fname == 'index.md':
                continue
            path = os.path.join(root, fname)
            rel = os.path.relpath(path, '.')
            url = '/' + os.path.splitext(rel)[0].replace('\\', '/')
            md_files.append((extract_title(path), url))

    index_path = os.path.join(dir_path, 'index.md')
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write('---\n')
        f.write(f'title: {title}\n')
        f.write('layout: default\n')
        f.write('has_children: true\n')
        f.write('---\n\n')
        f.write(f'# {title}\n\n')
        f.write('{% include data_table_search.html %}\n')
        f.write('<table>\n<thead><tr><th>Name</th></tr></thead>\n<tbody>\n')
        for name, url in md_files:
            f.write(f'<tr><td><a href="{{{{ site.baseurl }}}}{url}"><b>{name}</b></a></td></tr>\n')
        f.write('</tbody>\n</table>\n')
    print('Generated', index_path)

if __name__ == "__main__":
    generate_index('components', 'Components')
    generate_index('systems', 'Systems')
    generate_index('entities', 'Entities')
