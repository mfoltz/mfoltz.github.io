# V Rising Knowledge Hub

Static React + Vite + Tailwind knowledge hub for V Rising content and DB browsing.

## Stack

- React
- Vite
- Tailwind CSS
- Static deployment to GitHub Pages

## Local development

### Prerequisites

- Node.js 20+

### Install

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

### Build static output

```bash
npm run build
```

Build output is written to `dist/`.

## Content conventions

Markdown source lives in:

- `content/prefabs/**/*.md`
- `content/systems/**/*.md`
- `content/queries/**/*.md`

Raw markdown is copied to:

- `public/content/<section>/...`

Generated markdown indexes:

- `public/data/indexes/prefabs.index.json`
- `public/data/indexes/systems.index.json`
- `public/data/indexes/queries.index.json`

## Data generation scripts

- `npm run generate:content` → builds markdown indexes + copies markdown assets
- `npm run generate:db` → builds DB section indexes and detail files
- `npm run generate:search` → builds unified search index
- `npm run generate:data` → runs all generation scripts

## DB conventions

Generated DB output:

- `public/data/db/<section>/index.json`
- `public/data/db/<section>/by-slug/<slug>.json`

Supported sections:

- items
- recipes
- npcs
- abilities
- workstations
- blueprints
- quests
- buffs
- itemsets

## Deploy behavior

On push to `main`, GitHub Actions:

1. installs dependencies
2. builds the site
3. deploys `dist/` to GitHub Pages

SPA deep-link support is enabled by generating `dist/404.html` from `dist/index.html`.

## Adding sections later

1. Add source content/data for the section.
2. Add section key to `src/config/sections.ts`.
3. Extend generation script mapping if needed.
4. Re-run `npm run generate:data` and verify routes.
