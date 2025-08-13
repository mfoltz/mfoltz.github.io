# V Rising Modding Wiki
<img src="static/images/VRisingModdingLogoNew.png" width="250" height="250">

This repository contains the source for the V Rising Modding Wiki. It is built with [Hugo](https://gohugo.io/) using the Relearn theme. Markdown content lives in the `content/` directory.

## Visit the wiki: [Home](/)

## Local development

Install Hugo. Before running the site, generate the prefab file list and
start the development server:

```bash
python scripts/build_prefab_files.py
hugo server
```

This starts a live-reloading server at http://localhost:1313.

To generate the static site output:

```bash
python scripts/build_prefab_files.py
hugo
```

See [editing.md](editing.md) for guidelines on contributing.
