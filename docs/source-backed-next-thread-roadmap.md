# Source-Backed Next Thread Roadmap

This note sequences the next source-backed enrichment threads after the current V Blood portrait investigation. It is a coordination artifact only: it does not promote new data, approve new binary classes, or reinterpret parked evidence.

## Current anchors

- `data/enrichment/npc-portrait-map.json` contains V Blood-scoped portrait evidence, but this branch has no `public/icons/npcs/` directory and `AGENTS.md` does not yet allow NPC portrait binaries. Treat public NPC portrait rendering as the first unfinished lane, not as a closed precedent.
- `data/enrichment/blood-hunts-map.json` is the strongest completed MonoBehaviour lane. It is sourced from `MonoBehaviour/BloodHuntsDataAuthoring.json`, joins 61 rows, and keeps narrow Blood Hunts fields plus localization provenance.
- `data/enrichment/quest-display-map.json` is not ready for broader quest title/flavor promotion in this branch. Current output is low-signal fallback until the managed ownership hop for player-facing quest/flavor text is proven.
- No tracked `data/enrichment/server-ecs-component-evidence.json` exists in this checkout. If server ECS evidence is reintroduced, keep it raw-unverified until a later probe proves stronger semantics.
- `npm run qa:ingestion-readiness` and `npm run qa:spawn-readiness` are the right preflight commands before larger source-backed or visual-review lanes. Visual capture remains dependent on native spawn readiness.

## Roadmap order

1. **Close the V Blood portrait lane.**
   - Update the repo-owned binary policy before adding `public/icons/npcs/`.
   - Promote only approved `npc-portrait-map.json` rows with exact `Texture2D` or `Sprite` evidence and existing public files.
   - Stop if the implementation needs fuzzy matching, circumstantial rows, duplicate-suffix guesses, substitute art, or all-NPC generalization.

2. **Tighten the harness posture.**
   - Run and capture `qa:ingestion-readiness` plus `qa:spawn-readiness` before the next broad asset pass.
   - Record which warnings are baseline enrichment gaps versus blockers for the active lane.
   - If Vite, esbuild, Playwright, or Chromium hits native-spawn failure, stop local visual claims and use the GitHub Actions visual-review artifact path.

3. **Scout exact asset dump linkage.**
   - Keep the first pass read-only across `MonoBehaviour`, `Texture2D`, `Sprite`, `Mesh`, `AssetGuid`, and `m_PathID` evidence.
   - Classify candidates as `lift now`, `adapt later`, `document only`, or `leave consumer-owned`.
   - Do not create canonical enrichment or public assets unless prefab/guid/path linkage and repo binary policy are already proven.

4. **Use Blood Hunts as a cross-check, not a widening lane.**
   - Keep Blood Hunts centered on `bloodHuntLevel`, `bloodHuntHideLevel`, `nameKey`, localization GUIDs, and provenance.
   - Do not promote `AssetGuid`, `m_PathID`, sprite path ids, portraits, tiny icons, or menu UI fields from the Blood Hunts source.
   - Treat `npc-classification-map.isVBlood` as auxiliary, not authoritative, for this lane.

5. **Reopen journal/quest localization only as proof work.**
   - Look for the missing managed ownership hop for `ManagedAchievementData.Quest.Key/Text` and `ManagedAchievementData.Flavor.Key/Text`.
   - Keep direct-decode subtask rows separate from parent quest title/flavor promotion.
   - Stop on placeholder localization, client-gated lore/tutorial/journal claims, or installed/static evidence that proves presence but not ownership.

6. **Keep server ECS diagnostic until proven otherwise.**
   - If the draft evidence artifact returns, preserve `raw-unverified` interpretation status.
   - Tighten validators and receipts before surfacing any player-facing content.
   - Do not attach tooltip, lore, tutorial, journal, or text-variable claims without a stronger source contract.

7. **Park adjacent icon and visual lanes.**
   - Mutant <- Putrid remains the narrow blood-icon candidate.
   - Holy, V Blood/GateBoss blood types, tiny icons, all-NPC portraits, mesh/resource drops, and duplicate-suffix assets stay parked until exact joins are proven.
   - Ability icons can stay on the existing implementation path; NPC/workstation portrait placement is the more malleable detail-page pattern for future UI work.

## Verification defaults

- Data lane: targeted script tests, `npm run validate:data`, then `npm run verify` before commit.
- Asset lane: prove source refs, public file existence, binary-policy allowance, asset-lock stability, and no unrelated generated churn.
- UI lane: targeted component tests plus visual review when native spawn is healthy.
- Scout lane: no canonical data mutation; produce only a receipt or classified table.

## Stop gates

- Stop if a lane depends on fuzzy matching, broad visual taxonomy, generated substitute art, or source rows marked circumstantial/unsafe.
- Stop if `refresh:db-assets` introduces unrelated churn beyond the active lane and expected lock updates.
- Stop before binary additions if `AGENTS.md` does not explicitly allow the target public asset directory.
- Stop before public generated content if the evidence only proves raw installed/static presence rather than player-facing ownership.
