# Jewel-to-ability navigation: local checkpoint

Reviewed: October 2, 2026. Branch: `codex/jewel-ability-navigation`, based on
`1f39c82fa202fe5cd68616f905ab3a6c1a759e27` (the nine unpublished Blueprint commits).

## Result and source contract

Jewel detail pages expose an Associated ability link inside Linked Records.
The ability title and existing icon lead to its current database route. An image
failure preserves the label and navigation. Crafting, repair, breadcrumbs and
the existing reverse Spell Jewels links remain intact.

| Source measure | Count |
| --- | ---: |
| Jewel records | 154 |
| Recorded associations | 129 |
| Distinct current ability routes | 43 |
| Explicitly unrecorded jewels | 25 |

The only association authority is the tracked item's
`ProjectM.Shared.JewelInstance.OverrideAbilityType`. Both item and ability
prefab/GUID identities must match `data/prefabs/All.json`, the source document and
current generated destination. Missing or ambiguous destinations, conflicting
GUIDs, malformed references and unsafe routes stop generation. `GUID Not Found`
remains unrecorded; names, icons and ability text do not substitute for that field.

Generated relations retain the source component/path and numeric ability GUID.
The source disclosure exposes component, source file, ability prefab/GUID and
copy controls. A reader independently reconstructs the component field during
normal data validation, and verifies the reciprocal Spell Jewels link.

## Validation and preservation

- `npm run verify`, `npm test`, the detail-render tests and
  `npm run test:db-artwork` pass. Negative tests reject forged identities,
  ambiguous or unsafe destinations, lost provenance and fabricated unknown links.
- A second database generation reproduces all 16,501 checked file hashes.
  Exactly 154 jewel detail JSON files gained five association/provenance fields;
  stripping those fields restores each original hash. Existing fields, item
  indexes, search, other database sections, enrichment maps, artwork and accepted
  baselines are unchanged.
- Local Chromium acceptance covers 38 jewel captures in both themes at 320px and
  1280px, six spell schools, keyboard Tab/Enter, reciprocal links, back/reload,
  filtered browse-state restoration, breadcrumbs, source access, artwork fallback
  and two native 200% zoom checks. Representative captures were visually inspected.
- The existing comparison passes 92 baselines with zero changed, missing or
  created. Responsive browse and Blueprint interaction checks also pass.

The first managed capture attempt could not load Google Fonts
(`ERR_NETWORK_ACCESS_DENIED`) and reported 92 baseline differences. Its evidence
is retained separately. The subsequent font preflight loaded Inter and Cinzel
without request failures, and recapture passed without baseline or product
changes. A tooltip-disclosure assertion failed in the first broader browse run
and passed under the validated capture conditions; no tooltip code was changed.

Detailed receipts, exact association/source hashes, preservation results,
capture manifests and logs are retained under:

`C:/Users/mitch/.codex/visualizations/2026/10/03/01a0ff3e-1b3d-7433-baac-02af7b8b154d/jewel-ability-navigation/`

## Delivery boundary

One local commit only; no push, PR, merge or deployment. This establishes source
joins and local Chromium navigation, not jewel rolls, modifiers, acquisition,
live-game availability, description ownership or cross-browser acceptance.
No extraction, source promotion, asset refresh or baseline acceptance occurred.
