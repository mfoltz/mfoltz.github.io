# Quest Localization Managed Hop Follow-Up

## Result

Canonical promotion is still stopped for actual quest title/flavor rows.

I did not find a local managed quest snapshot or equivalent source row that proves:

`Journal prefab/entity id -> ManagedAchievementData.Quest.Key/Text + ManagedAchievementData.Flavor.Key/Text -> English localization text`

The key positive finding is that `VRising.DataExtractor` already has the model-level ownership path. The missing piece is export coverage, not a new localization dictionary join.

## Evidence

| Source | Classification | Finding | Promotion status |
| --- | --- | --- | --- |
| `VRising.Models/Quests/QuestModelBuilder.cs:21-29` | direct-decode model path | `QuestModelBuilder` maps `entity.ManagedAchievementData.Quest.Key/Text` and `entity.ManagedAchievementData.Flavor.Key/Text` into localized quest name/flavor fields. | Not promotable until exported rows exist. |
| `VRising.Models/Quests/DatabaseQuests.cs:14-15` | structured-join model path | Quest rows are selected from `ComponentTypeToEntitiesMap["ManagedAchievementData"]` and filtered through `KnownEntities.ValidQuests`. | Not promotable until the runtime database includes those component/entity rows. |
| `VRising.Models/Constants/KnownEntities.cs:10-31` | structured-join support | The valid quest ID set includes `Journal_GettingReadyForTheHunt = 560247139`. | Useful filter for export. |
| `VRising.DataExtractor/EntityManagerExtensions.cs:254-257` | direct-decode component reader | The extractor can already read `ManagedAchievementData` from a prefab GUID and map it to `MappedManagedAchievementData`. | Useful lower-level fallback/export path. |
| `VRising.DataExtractor/Mappers/Models/MappedManagedAchievementData.cs:5-9` | direct-decode shape | Mapped managed achievement data contains `Quest`, `Flavor`, and `OverrideRewardText`. | Enough shape for the title/flavor hop. |
| `VRising.DataExtractor/ExtractionSnapshotBuilder.cs:20-48` | source-adjacent gap | Snapshot set/build options expose ability groups, items, NPCs, and recipes only. | No quest output emitted. |
| `VRising.DataExtractor/ExtractionSnapshotBuilder.cs:66-96` | source-adjacent gap | Required component types omit `ManagedAchievementData`, `AchievementData`, `AchievementSubTaskEntry`, and `AchievementSubTaskData`. | Runtime database cannot populate quest models from the snapshot builder path. |
| `VRising.DataExtractor/DatabaseBuilder.cs:159-165` and `:297-325` | source-adjacent gap | Snapshot writers emit `AbilityGroups*.json`, `Items*.json`, `Npcs*.json`, and `Recipes*.json`; no `Quests*.json`. | No existing generated quest snapshot. |
| `Bloodcraft/Resources/PrefabGUIDs.cs:15461` | source-adjacent | `Journal_GettingReadyForTheHunt = 560247139`. | Prefab ID exists but does not own title/flavor GUIDs here. |
| `Bloodcraft/Resources/Localization/English.json:15122-15127` | source-adjacent | English text exists for `f2991062-fb7d-458b-92c0-c2818bc260d3` and `9f56f414-6356-442b-82eb-27c1c552ab5b`. | Text exists but ownership hop is still absent. |
| `data/enrichment/quest-display-map.json:114-119` | fallback | `Journal_GettingReadyForTheHunt` remains generated fallback. | Leave unchanged. |

## Minimal DataExtractor Export Needed

Add a narrow quest snapshot export to `VRising.DataExtractor`; do not infer from filenames or localization proximity.

Required component/entity coverage:

- Add `ManagedAchievementData` to `ExtractionSnapshotBuilder.RequiredComponentTypes`.
- Add `AchievementData` so reward/dependency fields can remain attached to the same quest row.
- Add `AchievementSubTaskEntry` so quest-to-subtask links remain visible.
- Add `AchievementSubTaskData` only if the same export should include subtask title rows for validation; keep those rows separate from quest title/flavor promotion.

Required emitted quest row shape:

```json
{
  "PrefabName": "Journal_GettingReadyForTheHunt",
  "QuestId": 560247139,
  "LocalizedName": {
    "Key": "f2991062-fb7d-458b-92c0-c2818bc260d3",
    "Text": "Getting Ready for the Hunt"
  },
  "LocalizedFlavor": {
    "Key": "9f56f414-6356-442b-82eb-27c1c552ab5b",
    "Text": "I scavenged the area around me, gathering what I needed to prepare myself for my next hunt."
  },
  "RewardId": 0,
  "DependencyId": 0,
  "QuestSubTaskEntryIds": []
}
```

Implementation route with least conceptual churn:

1. Extend `ExtractionSnapshotSet` and `ExtractionSnapshotBuildOptions` with `Quests`.
2. In `ExtractionSnapshotBuilder.Build`, after `BuildRuntimeDatabase`, project `database.Quests.Values` into a new `QuestSnapshot`.
3. Sort by `PrefabName`, then `QuestId`, matching existing snapshot patterns.
4. Write `Quests{suffix}.json` beside `AbilityGroups{suffix}.json`, `Items{suffix}.json`, `Npcs{suffix}.json`, and `Recipes{suffix}.json` in both full extraction writer paths.
5. Keep subtask rows either as nested validation fields or as a separate `QuestSubTasks{suffix}.json`; do not merge subtask title evidence into actual quest `displayNameEn` or `summaryEn`.

## Promotion Rule After Export

Only update `data/enrichment/quest-display-map.json` when each canonical row has this exact chain in one exported row:

`PrefabName/QuestId -> LocalizedName.Key/Text + LocalizedFlavor.Key/Text -> Bloodcraft English GUID/text match`

Permitted field updates only:

- `displayNameEn` from `LocalizedName.Text`
- `displayLocalizationGuid` from `LocalizedName.Key`
- `summaryEn` from `LocalizedFlavor.Text`
- `sourceKind` to an extractor-backed value already accepted by the enrichment pipeline
- `sourceRef` to the exact quest snapshot file/path

Leave reward rows fallback until reward ownership joins to a known tech/item/ability display source.

## Stop Reason

The current repo and sibling sources prove the intended join path and the English text nodes, but they do not contain the exported managed ownership rows needed for canonical quest title/flavor promotion.

Next action should be the narrow `VRising.DataExtractor` quest snapshot export above.
