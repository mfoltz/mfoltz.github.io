# Blueprints And Buffs Evidence Scout

Date: May 14, 2026

Purpose:

- compare Blueprints and Buffs honestly against the more mature Recipes, NPCs, and Workstations database surfaces
- identify linkage seams already present in the current repo
- avoid promoting fallback display enrichment into player-facing promises

Non-goals:

- no generated data mutation
- no homepage or UI changes
- no schema rename or new public asset class
- no fabricated display names, icons, summaries, or gameplay interpretation

## Maturity Baseline

| Section | Indexed rows | Strong current signal | Current UI posture |
| --- | ---: | --- | --- |
| Recipes | 667 | `recipe-link-map` is 667 / 667 high-signal | Mature player-facing browse/detail surface |
| NPCs | 533 | classification is 1114 / 1114; display is 514 / 1110 | Mature browse model, partial display overlay |
| Workstations | 136 | `workstation-display-map` is 136 / 136 | Mature player-facing browse/detail surface |
| Blueprints | 1198 | display map is 8 / 1198, but unlock refs cover 895 rows | Promising archive; not polished catalog |
| Buffs | 3254 | display map is 7 / 3274, but mechanic refs cover 1810 rows | Developer graph candidate; not player-ready |

The important split is display readiness versus graph/linkage readiness. Blueprints and Buffs both look weak if judged only by localized display/icon coverage, but both have stronger structural evidence in the prefab corpus.

## Blueprint Evidence Sheet

Current generated surface:

- `public/data/db/blueprints/index.json` has 1198 indexed rows.
- Detail rows split into 1052 `TM_` rows and 146 `BP_` rows.
- `ProjectM.BlueprintData` extraction currently provides build-rule fields for every detail row: `buildingSequence`, `placeSequence`, dismantle time, starter-build flags, inventory-build flags, pathfinding, and line-of-sight fields.
- Current generated detail rows have 0 localized display names and 0 icon asset paths from `blueprint-display-map`.

Display/enrichment status:

- `data/enrichment/enrichment-coverage.json` reports `blueprint-display-map` at 8 / 1198 high-signal rows, with 1190 low-signal fallback rows excluded.
- `data/enrichment/buildable-portrait-map.json` has source-backed portrait matches for 177 blueprint/buildable prefabs.
- Only 13 buildable portrait rows currently have public `portraitAssetPath` values, because the public materialization path is currently workstation-focused.

Best linkage lead:

- 895 blueprint prefabs are referenced by unlock/progression surfaces gated on `TechUnlockBlueprintBuffer` or `ProgressionBookBlueprintElement`.
- Those references produce 932 inbound unlock refs.
- Examples:
  - `TM_BloodAltar_T01` is referenced by `Journal_Reward_Tech_BloodAltar` and `Tech_Collection_Structures_T01`.
  - `TM_Castle_Throne_01` is referenced by `Journal_Reward_Tech_BatThrone`.
  - `TM_ResearchStation_T01` is referenced by `Journal_Reward_Tech_ResearchStation`.
  - `TM_SpecialStation_MusicPlayer` is referenced by `Journal_Reward_Tech_MusicPlayer`.

Interpretation:

- Blueprints are not ready to be described as a polished building catalog.
- Blueprints are close to a useful archive if the copy centers build rules, prefab traceability, unlock sources, and source-backed buildable portrait coverage.
- The most valuable next enrichment pass is an unlock-source map keyed by blueprint prefab, not a display-name chase.

Recommended next scout/implementation lane:

- Build a read-only proof sheet or generated enrichment map for `blueprint-unlock-map`.
- Source rows from `TechUnlockBlueprintBuffer` and `ProgressionBookBlueprintElement`.
- Store source prefab, source GUID, source component, target blueprint prefab, target blueprint GUID, and source path.
- Keep journal/tech source titles prefab-derived unless a separate localization proof exists.

Stop gates:

- Stop before calling unlock refs player-facing names unless localization ownership is proven.
- Stop before materializing additional buildable icons unless binary policy and exact source refs are explicitly in scope.
- Stop if a candidate join is only substring or family-name matching rather than a parsed `PrefabGuid(...)` ref.

## Buff Evidence Sheet

Current generated surface:

- `public/data/db/buffs/index.json` has 3254 indexed rows.
- 3231 detail rows expose `buffType`.
- 3231 detail rows expose `effectType`.
- 2540 detail rows expose `categoryGroups`.
- 12 detail rows expose `uniqueBuffCategories`.
- Current generated detail rows have 0 localized display names and 0 icon asset paths from `buff-display-map`.

Display/enrichment status:

- `data/enrichment/enrichment-coverage.json` reports `buff-display-map` at 7 / 3274 high-signal rows, with 3267 low-signal fallback rows excluded.
- The configured display domain currently only accepts `Buff_` prefabs for display-map enrichment, while the generated Buff section includes many `AB_*` technical buff prefabs.
- That means display coverage is not just incomplete; it also does not describe the whole generated Buff section shape.

Mechanic/linkage lead:

- 1810 buff prefabs are referenced from current prefab docs that include buff/mechanics components such as `ApplyBuffOnGameplayEvent`, `BuffModificationFlagData`, `BuffCategory`, or `GameplayEventListeners`.
- Those references produce 7997 inbound mechanic refs.
- Examples:
  - `Buff_General_Chill` is referenced by multiple Frost ability/projectile prefabs.
  - `Buff_General_Freeze` is referenced by Frost and bandit frost attack prefabs.
  - `Buff_General_Ignite` is referenced by fire attack prefabs.
  - `Frost_Vampire_Buff_Freeze` is referenced by player and NPC Frost surfaces.

Current category shape:

- Effect types are dominated by `Debuff` (2464) and `Buff` (767), with 23 missing.
- Buff types are dominated by `Parallel` (2006), `Replace` (1048), and `Block` (177), with 23 missing.
- Category groups are mostly `None` (1896) or absent (714), but useful groups such as `Travel`, `Interact`, `Stun`, `RemovableBuff`, `Slow`, and `Shapeshift` exist.

Interpretation:

- Buffs are not ready for a player-facing homepage card.
- Buffs are promising as a developer graph surface: applied-by, referenced-by, effect type, buff type, and category group.
- The first useful UX is probably a technical graph/archive lane, not a polished buff encyclopedia.

Recommended next scout/implementation lane:

- Build a read-only proof sheet or generated enrichment map for `buff-reference-map`.
- Source rows from parsed `PrefabGuid(...)` refs in docs that include known buff/mechanics components.
- Store source prefab, source GUID, source component family when identifiable, target buff prefab, target buff GUID, and source path.
- Keep relationship labels conservative: `referenced by`, `applied by candidate`, or `mechanic reference`, depending on component certainty.

Stop gates:

- Stop before claiming exact gameplay meaning from component presence alone.
- Stop before merging AB-prefab technical buffs into a player-facing "Buffs" catalog.
- Stop before using icon/name coverage as acceptance criteria; the stronger near-term value is graph provenance.

## Comparison Against Mature Surfaces

Recipes, NPCs, and Workstations became good because they each had at least one strong contract:

- Recipes have normalized output/requirement/repair links and complete recipe-link coverage.
- NPCs have reliable classification, plus enough display overlay to make the player browse useful while keeping provenance visible.
- Workstations have complete display coverage and buffer-backed recipe/output joins.

Blueprints are closest to Workstations and Recipes:

- They have reliable build-rule extraction.
- They have a strong unlock-source lead.
- They have partial source-backed structure art evidence already parked in buildable portraits.

Buffs are closest to Abilities and the technical Reference lane:

- They have many raw records and real mechanics links.
- They lack player-facing names/icons/summaries.
- Their value is currently graph navigation, not presentation polish.

## Suggested Routing

1. Blueprint unlock map first.
   - Highest chance of a source-backed, player-understandable improvement.
   - Likely enough to justify a careful Blueprints card later.

2. Buff reference map second.
   - Useful for developer inspection and future ability-detail back-links.
   - Should stay clearly technical until display/localization evidence improves.

3. Homepage decision after both maps are proven.
   - Blueprints can probably join the main page as "Blueprints" or "Buildables" with conservative copy.
   - Buffs should probably wait for either a technical archive band or a focused "Effects" surface, not the same player-facing treatment as Recipes/NPCs/Workstations.
