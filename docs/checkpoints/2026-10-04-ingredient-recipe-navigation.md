# Ingredient-to-recipe navigation: complete locally

Date: October 4, 2026. Branch: `codex/ingredient-recipe-navigation`.
Starting main: `d8206b489c617752269fc8a4886b036143ec3bca`.
Data commit: `029160b3c1822062103af9f4950cdda500bacaf7`.
The separate UI/browser acceptance commit includes this checkpoint. Exact commit
identities and the final clean-tree state are retained in `delivery-receipt.json`.

## Delivered behavior

Optional `ingredientRecipes` appears only on the 221 items with recorded uses.
Its 1,385 references target 664 recipes, retaining exact prefab/GUID identities,
required quantities, destinations, recipe snapshot paths and
`ProjectM.RecipeRequirementBuffer` provenance. Independent retained-Markdown
validation checks every reference. Malformed/nonpositive quantities, ambiguous
destinations and duplicate item/recipe pairs are rejected. English title ordering
uses prefab/GUID ties; existing forward ingredient ordering and maps remain.

Used in recipes follows crafting and repair groups in Linked Records. It shows
12 whole-card links initially, complete identifiers and quantities such as
“12 required.” Search covers the full title/prefab/GUID list, matching every
case-insensitive whitespace-separated term. Show more adds 12 and focuses the
first newly revealed link; visible/matching counts, Clear search and unmatched
search feedback remain available. `usesQ`/`usesShown` restore shared, reload and
back-navigation state using history replacement while retaining other URL fields.
Source access follows each recipe's existing Open Prefab Reference action.
Both consolidated and fallback item layouts work. Zero-use items receive no
new group or claims about having no uses.

## Verification and visual acceptance

- `npm run verify` passed before each bounded commit. `npm test`, all four
  artwork tests, 16 source/census tests and renderer/browse-helper checks pass.
- Fifty before captures and 80 focused after captures cover both themes at
  320, 390, 639, 640 and 1280px. Loaded Inter/Cinzel fonts are required. Sixty
  acceptance entries cover complete text, quantities, routes, containment,
  search beyond the initial page, all 88 Iron Ingot uses, keyboard activation,
  history/reload, exact source-buffer access, artwork fallback and native 200%
  Chromium tab zoom. Focus captures explicitly frame the visible recipe link.
- Inspected changed recipe-group captures across every planned width/theme,
  including long identifiers, icon-free Emberglass recipes, visible keyboard
  focus, failed artwork and native zoom. The new group uses the shared mobile
  layout below 640px and preserves its horizontal desktop layout.
- Existing jewel checks pass 38 captures; shared-card checks pass 72 captures.
  The fresh responsive browse suite passes its 92 matrix captures and filter,
  URL, tooltip, breadcrumb and failed-artwork interactions.
- Inspected before/current Blood Essence detail and source fixtures in both
  themes. Only these four baselines were updated. All 92 final comparisons pass
  the existing comparator; this is not a claim of exact screenshot identity.
- The 221 intended item details are byte-identical across repeated generation.
  Across 72,477 checked files, only those item details and the four authorized
  baselines changed. Original item fields, other generated data, canonical maps,
  browse/global-search indexes, artwork and branding are preserved. No checked
  files were added or removed; unaffected baseline hashes are unchanged.

## Retained failed attempts and authorized retry

The initial font-network attempt could not establish acceptance. Authorized
font access succeeded. An initial focused run stopped on callback serialization;
the corrected harness passed. Its later capture refinement waits for the focused
card to be in view, rather than capturing an unfinished smooth scroll.

The first responsive browse run timed out at `scripts/browse-visual-check.ts:221`
waiting for the 1280px Aftershock tooltip's reload alignment. Delivery stopped
before baseline updates or the second commit. The user subsequently authorized
retry and remaining work. An isolated diagnostic reached the expected summary
position at both 390 and 1280px; the full suite then passed in a separate run.
No tooltip product code or assertion was changed. The earlier timeout's cause
remains unestablished; failed logs are retained separately from acceptance.

## Scope and remaining limits

Recipe artwork reuses existing associations, without promoting curated matches
to native Sprite evidence. Three references lack artwork: Greater Blood Essence's
Castle Upkeep T02 and Emberglass's two Fusion Forge recipes. All remain navigable.
Recorded requirements do not prove crafting access, acquisition or live-game
availability; absent reverse rows do not establish that an item has no uses.
Acceptance is local Chromium evidence, not a cross-browser or live-game claim.

The owned preview is stopped. Main and existing history remain intact. Nothing
was merged, rebased, pushed, published or deployed. Book/Blueprint backlinks,
fresh extraction, new artwork and publication remain separate work.

Logs, manifests, measurements, inspection sheets, hashes, comparison reports,
generation determinism, cleanup evidence and the final delivery receipt are at:

`C:/Users/mitch/.codex/visualizations/2026/10/03/01a0ff3e-1b3d-7433-baac-02af7b8b154d/ingredient-recipe-navigation-20261004/`
