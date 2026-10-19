# Manual release smoke

Run this after a successful deployment, from the checkout whose generated data is expected on the site:

```sh
npm run smoke:release -- --url https://mfoltz.github.io
```

The default evidence parent is the operating system's temporary directory under `vrising-release-smoke`. To retain evidence elsewhere, choose an absolute directory outside every Git checkout:

```sh
npm run smoke:release -- --url https://mfoltz.github.io --output /external/release-evidence
```

On Windows, quote a path such as `"C:/Users/you/Documents/release-evidence"`. The URL must be a site origin with no credentials, path, query or fragment. An existing root-hosted preview such as `http://127.0.0.1:5195` also works; this command does not start a preview.

Install the repository dependencies with `npm ci`. If Playwright Chromium is not already installed, install its matching browser once with `npx playwright install chromium`.

Check fixture/configuration readiness without network access, browser launch or output writes:

```sh
npm run smoke:release -- --url https://mfoltz.github.io --preflight
```

The check covers eight fixed Blueprint identities from the accepted enrichment smoke, in dark mode at 390px and light mode at 1280px. Expected names, descriptions, routes, quantities and identities come from repository-owned generated data. Stone Brick and the existing artwork/identity fixtures share their established fixture helpers. Complete prefab and signed GUID checks include opening and restoring Source & provenance.

It also checks Blueprint browse, global prefab search, material search across the full list, 12-to-24 expansion and focus, keyboard activation, source access, independent query parameters, back/reload restoration and content containment. Both Inter and Cinzel must load. Visible images must finish loading and decoding before capture; offscreen lazy artwork does not block the viewport check. Loading and decoding share a 15-second deadline. Requests use normal browser headers; a global `Cache-Control` override previously broke cross-origin font preflights.

Each invocation creates a unique `release-*` subdirectory containing 24 screenshots on success and `receipt.json`. The receipt records local HEAD/tree, dirty status, input hashes, URLs, observed direct-route status, assertions, request failures and screenshot hashes. Failures return a nonzero exit code and retain partial evidence plus a diagnostic screenshot when possible. Browser contexts and the owned browser close before the receipt is written. There are no automatic retries or baseline updates. Only the exact global-search result has a 60-second loading wait; ordinary locator waits remain 15 seconds. Search-index response and completion timestamps are retained.

GitHub Pages serves existing deep routes through `404.html`; a direct 404 is accepted only when the expected app content renders. The homepage must return 200. Browser JavaScript errors fail the run. Font failures fail acceptance rather than allowing fallback-font screenshots.

The command neither deploys nor proves which commit the server is serving. Confirm deployment success separately and use the matching local data. A pass supplements `npm run verify` and full visual regression; it does not replace responsive, zoom, artwork-failure or all-record acceptance. Inspect the fresh screenshots before recording release acceptance. Nothing runs in CI automatically.

Offline contract tests are included in `npm test`, or run them alone:

```sh
npm run test:release-smoke
```
