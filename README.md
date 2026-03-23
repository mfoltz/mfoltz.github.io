# V Rising Knowledge Hub

Static React + Vite reference hub for V Rising data, prefabs, systems, components, queries, and curated DB views.

## Architecture

The app is fully structured and static-first:

- React + Vite for the UI shell
- Tailwind CSS for styling
- generated JSON as the canonical content contract
- GitHub Pages deployment from `dist/`

Hugo is no longer part of the shipping path.

## Canonical Data Outputs

Reference content is generated to:

- `public/data/reference/<section>/index.json`
- `public/data/reference/<section>/by-slug/<slug>.json`
- `public/data/reference/aliases.json`

Supported reference sections:

- `prefabs`
- `components`
- `systems`
- `queries`

DB content is generated to:

- `public/data/db/<section>/index.json`
- `public/data/db/<section>/by-slug/<slug>.json`

Current DB sections:

- `items`
- `recipes`
- `npcs`
- `abilities`
- `workstations`
- `blueprints`
- `quests`
- `buffs`
- `itemsets`

Search content is generated to:

- `public/data/search.index.json`

## Source Inputs

The structured generators currently read from source material in:

- `content/prefabs/**/*.md`
- `content/components/**/*.md`
- `content/systems/**/*.md`

These markdown files are treated as extraction input, not as the public rendering model.

`content/dev`, `content/user`, and `content/editing` remain out of the current app scope unless we explicitly revive authored guides later.

## Local Development

### Prerequisites

- Node.js 20+

### Install

```bash
npm install
```

### Run the app

```bash
npm run dev
```

### Generate static data only

```bash
npm run generate:data
```

This starts from a clean generated-output root so stale legacy files under `public/` cannot leak into deploy artifacts.

### Validate generated output

```bash
npm run validate:data
```

### Build for Pages

```bash
npm run build
```

Build output is written to `dist/`. The build also generates `dist/404.html` for SPA deep-link support on GitHub Pages.

### Verify before push or merge

```bash
npm run verify
```

This is the canonical release-safe check. It runs TypeScript verification, shortcode syntax validation, the full build/generation pipeline, and a Pages artifact sanity pass that confirms the expected `dist/` and `public/` output shape.

## Generation Scripts

- `npm run generate:reference` builds the structured reference graph
- `npm run generate:db` builds DB section indexes and detail files
- `npm run generate:search` builds the lightweight unified search index
- `npm run generate:data` runs the full generation pipeline
- `npm run validate:data` performs basic path/slug sanity checks on generated files
- `npm run verify` runs the full pre-push verification path used locally and in CI

## Contributor Notes

- `public/` and `dist/` are generated outputs and should stay build-generated.
- `src/config/sections.ts` is the app-level section contract for reference and DB routing.
- `scripts/check_shortcode_syntax.sh content` is still useful because the source corpus contains relref-style markdown that the extractors depend on parsing cleanly.
- `scripts/dev.sh` is no longer part of the current architecture or verification path.

## Ship Smoke Checklist

Run the canonical verification pass first:

```bash
npm run verify
```

Then do one quick human smoke pass against the built app and spot-check these routes:

- `/`
- `/prefabs`
- `/components`
- `/systems`
- `/queries`
- `/db/items`
- `/db/recipes`
- `/db/npcs`
- `/db/abilities`
- `/db/workstations`
- `/db/blueprints`
- `/db/quests`
- `/db/buffs`
- `/db/itemsets`
- `/search`

Representative detail and legacy-alias checks:

- `/prefabs/item-consumable-healingpotion-t01`
- `/components/itemdata`
- `/systems/server--gamedatasystem`
- `/queries/server--gamedatasystem--query-1748745749-1`
- `/prefabs/Item_Consumable_HealingPotion_T01`
- `/components/ItemData`
- `/systems/server/GameDataSystem`

Deploy artifact sanity:

- `dist/404.html` exists and matches the SPA fallback strategy
- `dist/` only contains the app shell, assets, and generated data
- `public/` only contains generated data plus `.nojekyll`
- search results show both reference and DB entries without shipping full markdown bodies

## Deployment

On push to `main`, GitHub Actions:

1. installs dependencies
2. runs `npm run verify`
3. deploys `dist/` to GitHub Pages

## Extending The Hub

1. Decide whether the new content belongs in `reference` or `db`.
2. Extend the relevant generator in `scripts/`.
3. Add or update the section contract in `src/config/sections.ts`.
4. Update the UI mapping layer if the new data benefits from schema-aware rendering.
5. Re-run `npm run verify` and then spot-check routes and search results.
