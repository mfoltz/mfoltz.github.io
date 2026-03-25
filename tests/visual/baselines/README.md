# Visual Baselines

This directory stores accepted screenshot baselines for the fixed visual review pack.

Current player-first full-page pack:

- `home`
- `db-item-blood-essence-detail`
- `db-item-vampire-coating-detail`
- `db-ability-apply-weapon-coating-blood-detail`
- `db-recipe-armor-boots-t01-bone-detail`
- `db-npc-char-bandit-bomber-v-blood-detail`
- `db-abilities-list`
- `db-abilities-list-blood-school`
- `search-blood-db`

Current developer sanity pack:

- `reference-prefabs-list`
- `reference-prefab-blood-essence-detail`
- `shell-home`
- `shell-components`
- `shell-systems`
- `shell-queries`
- `shell-prefabs`
- `shell-search`

Each route is captured in both `dark` and `light` themes using the `vrising-theme` local-storage key.

The shell captures are clipped top-of-page reviews used to freeze the header layout and catch unintended shell drift during later content/theme passes.

The screenshot runner is config-driven on top of a reusable engine so later local apps can define their own shell/control packs without cloning a second visual-review script.

Typical workflow:

1. Accept a UI change.
2. Run `npx playwright install chromium` once if the browser is not installed yet.
3. Run `npm run visual:baseline` to refresh accepted screenshots in this directory.
4. Run `npm run visual:compare` during later passes to compare current output against these accepted baselines.
5. After a qualifying broad extractor run, run `npm run qa:accepted-broad-run` and review the generated report, starting with the player-first pack.

Run artifacts and diffs are written to `.codex-tmp/visual-review/latest/`.
