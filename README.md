# V Rising Data Base

Static React + Vite generated data companion for V Rising abilities, items, NPCs, workstations, prefabs, systems, components, queries, and linked reference views.

The community-facing guides, user help, developer docs, Discord links, and Thunderstore direction live at the [V Rising Mod Wiki](https://wiki.vrisingmods.com/). This app stays focused on dense generated records and prefab traceability.

## Architecture

The app is fully structured and static-first:

- React + Vite for the UI shell
- Tailwind CSS for styling
- generated JSON as the canonical content contract
- GitHub Pages deployment from `dist/`

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

Optional enrichment snapshots and curated ability icons live in:

- `data/enrichment/*.json`
- `public/icons/abilities/*`

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

### Refresh enrichment snapshots and curated DB icons

```bash
npm run refresh:db-assets
```

This is a manual refresh step for repo-owned enrichment inputs. It reads local Bloodcraft resources plus the local AssetRipper-style asset dump, writes deterministic snapshots under `data/enrichment/`, normalizes canonical join maps (abilities, items, recipes, NPC classification/display, workstation display, and remaining DB display maps), and copies curated ability and item icons into `public/icons/abilities/` and `public/icons/items/`.

The refresh output now includes per-entry provenance (`sourceKind`, `sourceRef`) in enrichment maps, emits `data/enrichment/npc-classification-map.json` for NPC browse slices, and emits `data/enrichment/item-icon-unresolved.json` for icon curation follow-up. When the unresolved item-icon queue only contains `catalog-seed` generic equip-buff placeholders, treat it as parked until a source-backed icon appears instead of generating or guessing substitute artwork.

Asset dump discovery:

- `VRISING_ASSET_DUMP_DIR` selects a single dump root
- `VRISING_ASSET_DUMP_DIRS` checks multiple dump roots (comma/semicolon/newline separated)
- otherwise the scripts check known local defaults, including the moved `Documents/Unorganized/Assets` dump
- a usable dump must contain `Texture2D/` with `Stunlock_Icon_*.png` files

Optional legacy source discovery:

- `VRISING_TOOLTIP_LEGACY_SOURCE` for a single JSON file path
- `VRISING_TOOLTIP_LEGACY_SOURCES` for multiple JSON file paths (comma/semicolon separated)
- equivalent `*_LEGACY_SOURCE` / `*_LEGACY_SOURCES` pairs also exist for item icons/descriptions, recipe links, and section display maps
- otherwise the script checks known local defaults and safely continues when none are found

### Validate generated output

```bash
npm run validate:data
```

`validate:data` runs path/slug validation plus enrichment threshold-floor checks from `data/enrichment/coverage-thresholds.json` against the generated `data/enrichment/enrichment-coverage.json` snapshot. Coverage metrics are high-signal only, with low-signal fallback rows tracked separately; NPC browse classification is tracked separately from NPC display overlay coverage.

The generated-data and validation scripts run through `jiti` instead of `tsx` so Windows/Codex sandboxed runs do not need the `tsx`/esbuild service process for routine extractor work.

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

On Windows inside a restricted Codex sandbox, Vite and esbuild may still fail with `spawn EPERM` during `npm run build`, `npm run verify`, dev-server startup, or visual review. Treat that as an execution-lane limit rather than a repo failure: rerun the same canonical command from an environment where native child-process spawning is allowed, or use approved Codex escalation for that command. Do not replace `verify` with a weaker check before push or merge.

Spawn readiness preflight:

```bash
npm run qa:spawn-readiness
```

This helper reports whether the current environment can spawn Node child processes, run the esbuild/Vite lane, launch Playwright Chromium, and reuse existing `dist/` output for capture-only visual review. It is diagnostic only: blocked native-spawn lanes still need a normal host shell or approved escalation, while `npm run test:visual-review` remains the sandbox-friendly visual-review engine check.

Spawn-enabled commands:

When Codex needs native process spawning for this repo, use repo-owned npm scripts as the approval boundary. Request approval for the exact command being run and, if persistence is useful, suggest only that exact prefix rule. Do not request broad persistent approval for raw `npm`, `node`, `npx`, `pwsh`, `python`, `vite`, Playwright, Chromium, or browser executables.

Approved spawn-enabled lanes:

- `npm run qa:spawn-readiness`
- `npm run build`
- `npm run verify`
- `npm run visual:compare`
- `npm run visual:baseline`
- `npm run visual:compare:capture`
- `npm run visual:baseline:capture`
- `npm run visual:compare:ci`

If an exact-script approval is unavailable or inconvenient, use the GitHub Actions `Visual Review` artifact instead. Baseline refresh remains an explicit accepted-visual-change step even when the command is approved to spawn.

### Visual review screenshots

```bash
npx playwright install chromium
npm run visual:baseline
npm run visual:baseline -- db-workstation-jewelcrafting-table-source-detail
npm run visual:compare
npm run visual:compare:capture
npm run visual:feedback
```

The visual-review workflow captures an explicit player-first pack plus a developer sanity pack in both dark and light themes using the `vrising-theme` local-storage key.

- `npm run visual:baseline` writes accepted screenshots to `tests/visual/baselines/`
- `npm run visual:baseline -- <capture-id> [capture-id...]` refreshes only the named captures and leaves other accepted screenshots untouched
- `npm run visual:compare` captures current screenshots, generates diffs, and writes an HTML report under `.codex-tmp/visual-review/latest/`
- `npm run visual:compare:capture` and `npm run visual:baseline:capture` run only the screenshot capture step against an existing `dist/`; use the build-then-capture commands for canonical review
- `npm run visual:feedback` turns the latest `.codex-tmp/visual-review/latest/report.json` into a tracked Markdown packet under `docs/design-feedback/`; grouped dark/light items keep one `Human feedback` paragraph for later implementation routing, not baseline acceptance
- the GitHub Actions `Visual Review` workflow runs `npm run visual:compare:ci`, uploads `.codex-tmp/visual-review/latest/` as `visual-review-report`, and does not fail solely because screenshots changed
- missing baselines, build failures, invalid config, and Playwright capture failures still fail the CI visual workflow
- the player-first pack includes home, search/list browse, and these detail captures:
  `/db/items/item-blood-essence-t01`, `/db/items/item-vampire-coating-blood`, `/db/abilities/ab-apply-weapon-coating-blood-ability-group`, `/db/recipes/recipe-armor-boots-t01-bone`, `/db/npcs/char-bandit-bomber-v-blood`
- the player-first pack also keeps the URL-backed ability school slice visible at `/db/abilities?view=catalog&school=blood`; item jewel browse can be checked at `/db/items?view=jewels`, and NPC browse slices can be checked at `/db/npcs?view=bosses` and `/db/npcs?view=blood-carriers&blood=warrior`
- the developer sanity pack keeps the reference prefab list/detail plus the clipped shell/header captures so top-bar drift stays obvious during later UI passes
- the runner is now config-driven on top of a generic engine so later local apps can define their own shell/control packs without a second bespoke review stack
- this is a review aid for UI passes and is intentionally separate from `npm run verify`
- small exploratory human edits are expected; only refresh baselines when a visual change is intentionally accepted as the new standard

Accepted broad-run QA routine:

```bash
npm run qa:accepted-broad-run
```

This helper runs the accepted Dual-Lane Review Loop sequence after a qualifying broad extractor run:

1. `npm run refresh:db-assets`
2. `npm run verify`
3. `npm run visual:compare`
4. review the generated `.codex-tmp/visual-review/latest/` report, starting with the player-first pack
5. for taste/design feedback that should survive across threads, run `npm run visual:feedback` and fill in one paragraph on only the relevant packet items

The repeatable Dual-Lane Review Loop and checkpoint format are documented in `docs/track-3-iteration-playbook.md`.
The original-site comparison notes and deliberate parity decisions live in `docs/database-parity-audit.md`.

Ingestion readiness preflight:

```bash
npm run qa:ingestion-readiness
```

This helper is the non-mutating preflight companion to the accepted broad-run QA flow.

- it writes a Markdown report plus machine-readable JSON under `.codex-tmp/ingestion-readiness/`
- it checks shared source availability, broad control coverage, stateful harness evidence, and core-domain enrichment verdicts for abilities, items, recipes, NPC browse/display, and workstations
- it includes next-action hints for incomplete NPC display overlays and small item residual queues, including when a tiny generic equip-buff icon queue should be parked, without changing canonical enrichment snapshots
- it exits successfully when only warnings are present, and fails only on shared blockers such as missing required roots or broken broad control coverage
- it is meant to run before the next larger asset-ingestion push, not to replace `npm run qa:accepted-broad-run`

## Generation Scripts

- `npm run generate:reference` builds the structured reference graph
- `npm run generate:db` builds DB section indexes and detail files
- `npm run generate:search` builds the lightweight unified search index
- `npm run generate:data` runs the full generation pipeline
- `npm run refresh:db-assets` refreshes canonical enrichment snapshots and curated ability/item icon inputs from local external dumps
- `npm run validate:data` performs path/slug sanity checks plus enrichment threshold-floor validation
- `npm run verify` runs the full pre-push verification path used locally and in CI
- `npm run visual:baseline` refreshes accepted visual baselines for the fixed screenshot review pack
- `npm run visual:baseline:capture` refreshes accepted visual baselines from an already-built `dist/`
- `npm run visual:compare` compares the current UI against accepted visual baselines and writes a diff report under `.codex-tmp/visual-review/latest/`
- `npm run visual:compare:capture` compares screenshots from an already-built `dist/`
- `npm run visual:compare:ci` builds and compares the visual pack while allowing screenshot diffs so CI can upload review artifacts
- `npm run visual:compare:capture:ci` compares screenshots from an already-built `dist/` while allowing screenshot diffs
- `npm run visual:feedback` writes a draft design-feedback packet from the latest visual-review `report.json`
- `npm run visual:summary` writes visual-review counts and artifact instructions to the GitHub Actions step summary when available
- `npm run test:visual-review` exercises the idempotent visual-review engine helpers and config validation through `jiti`, without `tsx`, esbuild, or Node's `--test` runner
- `npm run qa:accepted-broad-run` runs the accepted broad-run QA sequence for the Dual-Lane Review Loop
- `npm run qa:ingestion-readiness` writes a core-domain ingestion readiness report under `.codex-tmp/ingestion-readiness/`
- `npm run qa:spawn-readiness` reports whether the current shell can run native-spawn lanes required by build and visual capture commands

## Contributor Notes

- `public/data/` and `dist/` are build-generated. `public/icons/abilities/` is a repo-owned curated asset input preserved across generation.
- This project is an unofficial, non-commercial fan reference. V Rising names, art, and related assets remain the property of Stunlock Studios.
- Keep game-derived assets scoped to approved pipeline inputs and honor rights-holder takedown requests promptly.
- `src/config/sections.ts` is the app-level section contract for reference and DB routing.
- `src/config/shell.ts` is the frozen shell destination contract; adjust top-nav routes there instead of freehand restyling the header.
- `src/config/home.ts` is the homepage landing contract; change grouped homepage discovery surfaces and future enrichment seams there instead of mirroring shell changes by hand.
- `node scripts/check_shortcode_syntax.js content` is still useful because the source corpus contains relref-style markdown that the extractors depend on parsing cleanly.
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

## Extending The Database

1. Decide whether the new content belongs in `reference` or `db`.
2. Extend the relevant generator in `scripts/`.
3. Add or update the section contract in `src/config/sections.ts`.
4. Update the UI mapping layer if the new data benefits from schema-aware rendering.
5. Re-run `npm run verify` and then spot-check routes and search results.
