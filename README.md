# V Rising Modding Wiki
<img src="static/images/VRisingModdingLogoNew.png" width="250" height="250">

This repository contains the source for the V Rising Modding Wiki. It is built with [Hugo](https://gohugo.io/) using the Relearn theme. Markdown content lives in the `content/` directory.

## Visit the wiki: [Home](/)

## Local development

### Prerequisites

* [Hugo](https://gohugo.io/) (extended version recommended)
* [Python 3](https://www.python.org/)
* [Git](https://git-scm.com/) with submodule support
* [Node.js](https://nodejs.org/) (provides `npx` for SCSS-to-CSS compilation)

### Clone and setup

```bash
git clone --recursive https://github.com/<org>/mfoltz.github.io
cd mfoltz.github.io
git submodule update --init --recursive
```

### Build

Generate the prefab file list and start the local preview server:

```bash
./scripts/dev.sh serve
```

On Windows PowerShell:

```powershell
./scripts/dev.ps1 serve
```

To generate the static site in the `public/` directory:

```bash
./scripts/dev.sh build
```

On Windows PowerShell:

```powershell
./scripts/dev.ps1 build
```

See [editing.md](editing.md) for guidelines on contributing.

If Node.js is not available, any Sass compiler can be used to convert `assets/css/theme-vampire.scss` to `assets/css/theme-vampire.css` before running the scripts.
