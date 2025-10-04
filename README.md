# V Rising Modding Wiki (Jekyll -> Hugo; WIP!)
<img src="static/images/VRisingModdingLogoNew.png" width="250" height="250">

This repository contains the source for the V Rising Modding Wiki. It is built with [Hugo](https://gohugo.io/) using the Relearn theme. Markdown content lives in the `content/` directory.

## Visit the wiki: [Home]({{% relref "_index.md" %}})

## Local development

### Prerequisites

* [Hugo \u2265 0.126.3](https://gohugo.io/installation/) (extended version recommended; dev scripts download it if needed)
* [Python 3](https://www.python.org/)
* [Git](https://git-scm.com/) with submodule support
* [Node.js](https://nodejs.org/) (provides `npx` for SCSS-to-CSS compilation)

The `dev.sh` and `dev.ps1` scripts automatically fetch this Hugo version. To install or upgrade manually:

```bash
# macOS
brew install hugo        # or: brew upgrade hugo

# Windows
choco install hugo-extended -y    # or: choco upgrade hugo-extended -y

# Linux (Snap)
sudo snap install hugo --channel=extended
```

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

For streaming progress output, install the [ThreadJob](https://www.powershellgallery.com/packages/ThreadJob) module (`Install-Module ThreadJob`) or run the script in PowerShell 7. Without it, steps run sequentially.

To generate the static site in the `public/` directory:

```bash
./scripts/dev.sh build
```

On Windows PowerShell:

```powershell
./scripts/dev.ps1 build
```

See [editing.md](editing.md) for guidelines on contributing.
Refer to [AGENTS.md](AGENTS.md) for commit limits, binary file restrictions, and required checks before submitting changes.

If Node.js is not available, any Sass compiler can be used to convert `assets/css/theme-vampire.scss` to `assets/css/theme-vampire.css` before running the scripts.
