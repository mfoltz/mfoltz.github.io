# Visual Baselines

This directory stores accepted screenshot baselines for the fixed visual review pack.

Current full-page route pack:

- `home`
- `db-abilities-list`
- `db-item-blood-essence-detail`
- `search-blood-db`
- `reference-prefabs-list`
- `reference-prefab-blood-essence-detail`

Current shell/header pack:

- `shell-home`
- `shell-database`
- `shell-components`
- `shell-systems`
- `shell-queries`
- `shell-prefabs`
- `shell-search`

Each route is captured in both `dark` and `light` themes using the `vrising-theme` local-storage key.

The shell captures are clipped top-of-page reviews used to freeze the header layout and catch unintended shell drift during later content/theme passes.

Typical workflow:

1. Accept a UI change.
2. Run `npx playwright install chromium` once if the browser is not installed yet.
3. Run `npm run visual:baseline` to refresh accepted screenshots in this directory.
4. Run `npm run visual:compare` during later passes to compare current output against these accepted baselines.

Run artifacts and diffs are written to `.codex-tmp/visual-review/`.
