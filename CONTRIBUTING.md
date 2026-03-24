# Contributing

Thank you for helping improve the V Rising Mod Database!

Please review [AGENTS.md](AGENTS.md) for commit limits, curated binary asset rules, and required checks before submitting changes.

Before pushing or opening a PR, run the canonical verification pass:

```bash
npm run verify
```

`npm run build` remains the direct build command, but `npm run verify` is the release-safe check we use before merge and in GitHub Pages CI.
If you changed enrichment inputs under `data/enrichment/`, run `npm run refresh:db-assets` first so `enrichment-coverage.json` and threshold-floor checks stay in sync.

## Visual review workflow

UI/theme passes can use the visual review scripts without changing the normal verification pipeline:

```bash
npx playwright install chromium
npm run visual:baseline
npm run visual:compare
```

- `npm run visual:baseline` refreshes accepted screenshots under `tests/visual/baselines/`.
- `npm run visual:compare` captures current screenshots, diffs them against the accepted baselines, and writes a report under `.codex-tmp/visual-review/`.
- The visual pack includes shell-only header captures; refresh those baselines only when the shell itself changes on purpose.
- Homepage-only visual changes should refresh the homepage route baseline while leaving shell-focused captures unchanged.
- These screenshot checks are review tooling only for now; they are not part of `npm run verify`.

## Style guide

- Treat `content/` as extractor input for the structured database app, not as the shipping site.
- Prefer editing the generator or React UI when the requested change affects the live app experience.
- When you are editing source markdown inside `content/`, keep relref-style internal links so extractor aliasing stays stable:
  
  ```md
  [link text]({{% relref "path/to/page.md" %}})
  ```
- During reviews, search for root-relative links like `[text](/path/)` and replace them with relref-style source links:
  
  ```bash
  rg '\]\(/'
  ```

## Asset use guardrails

- This repository is an unofficial, non-commercial fan reference project.
- Keep game-derived assets limited to approved repo-owned inputs (currently curated ability icons and enrichment snapshots used by the data pipeline).
- Include or preserve clear attribution/disclaimer language, and treat rights-holder takedown requests as high priority.
