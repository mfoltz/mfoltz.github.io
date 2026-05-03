# Quest Localization Join Proof

Generated: 2026-05-03T17:35:36.248Z

## Verdict

- Canonical promotion: partial
- Promoted rows: 81 (Journal_SubTask_* rows with direct AchievementSubTaskData.TaskTitle ownership only)
- Quest title/flavor promotion stopped: true
- Stop reason: No local ManagedAchievementData.Quest/Flavor content rows or equivalent ownership snapshot were found for actual Journal quest title/flavor promotion.
- Reward promotion: deferred until reward rows can join to tech/item/ability display sources.

## Counts

- Quest display rows: 163
- Row types: questCandidate=36, subtask=82, reward=41, asset=4, other=0
- Direct-decode subtask promotions: 81
- Subtask promotions confirmed by Bloodcraft English nodes: 81
- Subtask rows kept fallback due missing text: 1
- Quest display coverage: 0/163 -> 81/163

## Source Classification

| Source | Classification | Use | Promotion? |
| --- | --- | --- | --- |
| Bloodcraft PrefabGUIDs.cs | source-adjacent | Journal prefab IDs | no by itself |
| Bloodcraft PrefabNames.cs | source-adjacent | prefab-name localization joins; zero direct Journal_* mappings here | no for Journal copy |
| Bloodcraft Localization/English.json | source-adjacent | GUID -> English text nodes | no without owner row |
| content/prefabs/Journal_SubTask_*.md | direct-decode | AchievementSubTaskData.TaskTitle owner GUID/text | yes for subtask display names |
| content/prefabs/Journal_*.md actual quests | source-adjacent | AchievementData reward/subtask structure | no title/flavor without ManagedAchievementData |
| Eclipse LocalizationService.cs | source-adjacent | reverse name -> GUID -> prefab through PrefabNames | no Journal quest title/flavor owner |
| DataExtractor quest model definitions | structured-join | exact target fields for future dump | no content rows in this pass |
| public quest pages | layout-only | corroborate visible text shape | no authority |

## Required Spot Checks

- Journal_GettingReadyForTheHunt = 560247139
- f2991062-fb7d-458b-92c0-c2818bc260d3 -> Getting Ready for the Hunt
- 9f56f414-6356-442b-82eb-27c1c552ab5b -> I scavenged the area around me, gathering what I needed to prepare myself for my next hunt.
- Direct Journal_* PrefabNames mappings in Bloodcraft: 0

## Direct-Decode Examples

| Prefab | GUID | Localization GUID | Text | Source |
| --- | ---: | --- | --- | --- |
| Journal_SubTask_Interact_Sawmill | 167430230 | 61914bc9-3aaa-4040-b0e0-c1563896795f | Construct and interact with a <teal1>Sawmill</c> | content/prefabs/Journal_SubTask_Interact_Sawmill.md; C:/Users/mitch/source/Repos/Bloodcraft/Resources/Localization/English.json |
| Journal_SubTask_Obtain_Bones | -1643854004 | 5f366a9e-21e0-49c0-a0e9-60fe008a57ed | Collect <teal1>Bones</c> | content/prefabs/Journal_SubTask_Obtain_Bones.md; C:/Users/mitch/source/Repos/Bloodcraft/Resources/Localization/English.json |
| Journal_SubTask_Reach_GearLevel | 1059247569 | 8e19f85c-a9e6-469c-8feb-c3710afe5c04 | Increase your <teal1>Gear Level</c> by crafting stronger equipment | content/prefabs/Journal_SubTask_Reach_GearLevel.md; C:/Users/mitch/source/Repos/Bloodcraft/Resources/Localization/English.json |

## Deferred Subtask

- Journal_SubTask_Kill_Something: 9ff744b5-b218-4f58-b56c-313037c0ccfb has an owned TaskTitle GUID, but both Bloodcraft English and the component text lack player-visible copy, so it remains fallback.

## Blocked Quest Examples

- Journal_ArmorOfBones_All (1566228114): has AchievementData, reward Journal_Reward_Tech_BoneAxeAndBoneMace (-460319097), subtasks Journal_SubTask_Craft_Armor_BoneChest (-1792608518), Journal_SubTask_Craft_Armor_BoneLeggings (1613921629), Journal_SubTask_Craft_Armor_BoneGloves (-215213699), Journal_SubTask_Craft_Armor_BoneBoots (613087777); missing ManagedAchievementData.Quest.Key/Text and ManagedAchievementData.Flavor.Key/Text.
- Journal_ArmorOfBones_Lower (-1653648385): has AchievementData, reward Journal_Reward_Tech_BoneAxe (-1414383551), subtasks Journal_SubTask_Exit_Graveyard (315784360), Journal_SubTask_Craft_Armor_BoneGloves (-215213699), Journal_SubTask_Craft_Armor_BoneBoots (613087777); missing ManagedAchievementData.Quest.Key/Text and ManagedAchievementData.Flavor.Key/Text.
- Journal_ArmorOfBones_Upper (-2071097880): has AchievementData, reward Journal_Reward_Tech_BoneArmorLower (-1309749813), subtasks Journal_SubTask_Craft_Armor_BoneChest (-1792608518), Journal_SubTask_Craft_Armor_BoneLeggings (1613921629); missing ManagedAchievementData.Quest.Key/Text and ManagedAchievementData.Flavor.Key/Text.

## Follow-Up Lead: Aurelia VBlood Tracker

- Reviewed C:/Users/mitch/source/Repos/Aurelia/Patches/VBloodTrackerPatches.cs via sidecar subagent.
- Actionable now for runtime/UI prefab joins: AchievementsSystem._State.TrackVBloodSource and VBloodTrackingUnitEntry.UnitPrefabGuid expose VBlood prefab GUIDs.
- Future lead for client/UI-ready extraction because tracker/menu objects are player/UI-gated.
- Not a localization authority: the file force-sets UI text and uses hardcoded VBlood names, but does not expose a localization GUID/key ownership path.

## Next Prompt

Export or locate managed quest rows keyed by prefab GUID/entity id with ManagedAchievementData.Quest.Key/Text, ManagedAchievementData.Flavor.Key/Text, AchievementData.Reward, and AchievementSubTaskEntry prefab IDs. Join those keys to Bloodcraft Resources/Localization/English.json and accept promotion only when the prefab id and localization GUID are present in the same managed row.
