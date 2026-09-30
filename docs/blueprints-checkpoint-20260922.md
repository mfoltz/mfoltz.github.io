# Blueprint Linkage And Browse Checkpoint

## Scope

This checkpoint follows the approved blueprint sequence: repair links and validation, classify ordinary technologies, expose explicit book requirements, and review browse/detail presentation before adding a conservative homepage entry. Buffs and broad display enrichment remain parked. No live-game extraction, deployment, or acquisition inference is included.

## Evidence

The checked-in prefab snapshot yields:

| Measure | Count |
| --- | ---: |
| Blueprint records | 1,198 |
| Records with an unlock-source link | 895 |
| Records without a linked source | 303 |
| Unlock edges / distinct source records | 932 / 174 |
| Ordinary technologies / their blueprint edges | 40 / 84 |
| Ordinary technologies with book requirements | 35 |
| Additional collections with book requirements | 39 |
| Distinct linked books | 72 |
| Blueprints with at least one linked book | 396 |

Sources are joined through exact prefab names and GUIDs. Ordinary technology classification requires `ProjectM.TechData` and a `ProjectM.TechUnlockBlueprintBuffer` edge. Book links require an explicit `ProjectM.TechItemRequirementBuffer` entry and a matching book item document with `ProjectM.ItemData`.

Collection records expose more book linkage than the original ordinary-tech scout: for example, `Tech_Collection_Wallpapers_Bricks01` explicitly requires `Item_Ingredient_Book_Structure_Wallpaper_Bricks_T01` (GUID `-1957642407`, stacks `1`). This uses the same checked join, not a name-based acquisition guess.

The five ordinary technologies with empty item requirement buffers remain without a linked book. Neither an empty buffer nor an unlinked blueprint establishes availability. Source labels describe records, not verified ways of acquiring the blueprint. Starter status comes from the blueprint flag, never from matching a source name against `Start` or `Default`.

## Implementation

- Source routes use the reference generator's canonical relative-path slug rules.
- Validation recalculates per-record and aggregate counts, checks map/detail/index coverage in both directions, rejects duplicates, and resolves actual prefab and item destination files.
- Book requirements remain grouped under their declaring source. Existing item names and curated icons are reused; no artwork is added.
- Browse supports source type, linked/unlinked sources, linked/unlinked books, book-name search, sorting, and incremental results. Filter state survives reload/back navigation.
- The filter panel is non-sticky on mobile. The established ledger, detail, and homepage styles are retained.
- The homepage entry explicitly states partial source coverage. Display-name/icon enrichment is still sparse; this is an archive, not a complete player acquisition guide.

`data/enrichment/blueprint-unlock-map.json` is generated and ignored. Run `npm run generate:db` or `npm run verify` to rebuild it entirely from tracked `content/prefabs` documents.

## Verification

- `npm run test:blueprint-unlocks`: builder joins/classification, routes, corruption rejection, browse filtering and deterministic ordering.
- Detail/homepage tests: book ownership, actual source/item hrefs, unresolved states, conservative homepage entry, and mature-page regression coverage.
- `npm run verify`: required full generation, type checking, data validation, production build, and artifact checks.
- Local Playwright review at 1440x1000, 390x844, and 320x700: filter combinations, empty states, pagination, reload/back navigation, source/book destinations, homepage navigation, retry, horizontal overflow, images, and runtime errors. Recipes, NPCs, and Workstations were captured as layout references.

Local review script and screenshots are retained under `.codex-tmp/visual-review/blueprint-review.mjs` and `.codex-tmp/visual-review/blueprints-20260922/`; they are not accepted visual baselines. Existing enrichment target warnings are not promoted to successes by this work.
