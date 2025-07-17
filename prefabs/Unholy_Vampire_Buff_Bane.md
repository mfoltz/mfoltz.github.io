---
title: Unholy_Vampire_Buff_Bane
guid: 1688799287
categories: ['All', 'Unholy']
nav_exclude: true
search_exclude: true
layout: default
---

# Unholy_Vampire_Buff_Bane

**GUID:** `1688799287`

**Categories:** [All](/prefabs/All), [Unholy](/prefabs/Unholy)

## Components

- [ProjectM.Attach](/components/Attach){:target="_blank"}
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff](/components/Buff){:target="_blank"}
  - `StartTimeUnmodified: 0`
  - `Target: Entity(0:0)`
  - `BuffType: ProjectM.BuffType Replace`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: True`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Debuff`

- [ProjectM.SpellTarget](/components/SpellTarget){:target="_blank"}
  - `Target: NetworkedEntity(0:0)`
  - `DestroyIfNotInteractable: True`

- [ProjectM.Gameplay.Scripting.Script_CreateGameplayEventOnBuffTargetDeath_DataServer](/components/Script_CreateGameplayEventOnBuffTargetDeath_DataServer){:target="_blank"}
  - `OnTargetDeathListener: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `GameplayEventId: Local - 1121014505`
  - `EventTriggerTarget: ProjectM.Gameplay.Scripting.EventTriggerTarget BuffTarget`
  - `Target: Entity(0:0)`
  - `TriggerForMinionMasterIfMinion: False`

- [ProjectM.SchoolDebuffData](/components/SchoolDebuffData){:target="_blank"}
  - `AbilitySchool: ProjectM.AbilitySchoolType Unholy`

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [ProjectM.BuffCategory](/components/BuffCategory){:target="_blank"}
  - `Level: 2`
  - `Groups: ProjectM.BuffCategoryFlag Corruption, SpellSchool`
  - `KeepOldest: False`

- [ProjectM.LifeTime](/components/LifeTime){:target="_blank"}
  - `Duration: 5`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.Team](/components/Team){:target="_blank"}
  - `Value: 1`
  - `FactionIndex: -1`

- [ProjectM.Network.Networked](/components/Networked){:target="_blank"}
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask](/components/UpToDateUserBitMask){:target="_blank"}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- [ProjectM.Network.FrameChanged](/components/FrameChanged){:target="_blank"}
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot](/components/NetworkSnapshot){:target="_blank"}
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_jceehdeeh`

- [ProjectM.Gameplay.Scripting.Script_BranchOnRandomGameplayEventData](/components/Script_BranchOnRandomGameplayEventData){:target="_blank"}
  - `Chance: 0.16`
  - `ScaleOnBuffStacks: True`
  - `BuffStacksSource: SpellPassive_Unholy_T01_ArcaneAnimator PrefabGuid(-539962543)`
  - `OnTrue: Local - 1535508645`
  - `OnFalse: Local - -807171151`

- [ProjectM.TeamReference](/components/TeamReference){:target="_blank"}
  - `Value: ModifiableEntity(0:0)`

- [ProjectM.Network.NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 1688799287`

- [ProjectM.CreateGameplayEventsOnTick](/components/CreateGameplayEventsOnTick){:target="_blank"}

- **[0]**
  - `EventId: Local - -1486120159`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `TickInterval: 0.25`
  - `TickTime: -0`
  - `MaxTicks: 2147483647`
  - `CallScriptOnTick: False`
  - `RandomTickOffset: 0`
  - `RandomTickInterval: 0`
  - `ResetWhenBuffStacksChanged: False`
  - `ResetWhenCastingAbility: GUID Not Found`

- [ProjectM.DestroyOnGameplayEvent](/components/DestroyOnGameplayEvent){:target="_blank"}

- **[0]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: True`

- [ProjectM.GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -807171151`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1486120159`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1486120159`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[3]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 1535508645`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.RunScriptOnGameplayEvent](/components/RunScriptOnGameplayEvent){:target="_blank"}

- **[0]**
  - `ScriptReference: ProjectM.ScriptMethodReference ProjectM.ScriptMethodReference`

- [ProjectM.SpawnMinionOnGameplayEvent](/components/SpawnMinionOnGameplayEvent){:target="_blank"}

- **[0]**
  - `Location: ProjectM.SpawnMiniononGameplayEventLocation Target`
  - `Rotation: ProjectM.SpawnMinionOnGameplayEventRotation Random`
  - `PrefabPickMode: ProjectM.SpawnMinionOnGameplayEventPrefabPickMode InOrder`
  - `OwnerSpawnDirection: False`
  - `MinDistance: 0`
  - `MaxDistance: 0`
  - `EventTargetAggroBoost: 0`
  - `MaxDistanceFromPreCombatPositionOverride: -1`
  - `Count: 1`
  - `IncludeInMinionCount: True`
  - `AllowCharm: False`
  - `CanBeConsumed: True`
  - `OverrideBloodQualityCurve: ProjectM.CurveReference ProjectM.CurveReference`
  - `ForceBadBloodQuality: True`
  - `TriggerMasterDeathActionOnDowned: True`
  - `InheritOwnerFaction: True`
  - `InheritOwner: True`
  - `AcceptSpawnInCollision: False`
  - `SetTeamToOwner: True`
  - `DisableDropsFromMinion: True`
  - `MasterDeathAction: ProjectM.MinionMasterDeathAction Kill`
  - `MasterDeathBuffPrefabGuid: GUID Not Found`
  - `BlobData: Unity.Entities.BlobAssetReference`1[ProjectM.SpawnMinionOnGameplayEventBlob] Unity.Entities.BlobAssetReference`1[ProjectM.SpawnMinionOnGameplayEventBlob]`
  - `SpawnSequenceGuid: SequenceGUID 296862313`
  - `StatsOverrides: ProjectM.SpawnMinionOnGameplayEventStatsOverrides ProjectM.SpawnMinionOnGameplayEventStatsOverrides`

- **[1]**
  - `Location: ProjectM.SpawnMiniononGameplayEventLocation Target`
  - `Rotation: ProjectM.SpawnMinionOnGameplayEventRotation Random`
  - `PrefabPickMode: ProjectM.SpawnMinionOnGameplayEventPrefabPickMode InOrder`
  - `OwnerSpawnDirection: False`
  - `MinDistance: 0`
  - `MaxDistance: 0`
  - `EventTargetAggroBoost: 0`
  - `MaxDistanceFromPreCombatPositionOverride: -1`
  - `Count: 1`
  - `IncludeInMinionCount: True`
  - `AllowCharm: False`
  - `CanBeConsumed: True`
  - `OverrideBloodQualityCurve: ProjectM.CurveReference ProjectM.CurveReference`
  - `ForceBadBloodQuality: True`
  - `TriggerMasterDeathActionOnDowned: True`
  - `InheritOwnerFaction: True`
  - `InheritOwner: True`
  - `AcceptSpawnInCollision: False`
  - `SetTeamToOwner: True`
  - `DisableDropsFromMinion: True`
  - `MasterDeathAction: ProjectM.MinionMasterDeathAction Kill`
  - `MasterDeathBuffPrefabGuid: GUID Not Found`
  - `BlobData: Unity.Entities.BlobAssetReference`1[ProjectM.SpawnMinionOnGameplayEventBlob] Unity.Entities.BlobAssetReference`1[ProjectM.SpawnMinionOnGameplayEventBlob]`
  - `SpawnSequenceGuid: SequenceGUID 296862313`
  - `StatsOverrides: ProjectM.SpawnMinionOnGameplayEventStatsOverrides ProjectM.SpawnMinionOnGameplayEventStatsOverrides`

- [ProjectM.GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                         `
  - `Component                                    `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum SpawnMinion`
  - `GameplayEventId: Local - -807171151`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                         `
  - `Component                                `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - -1486120159`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 0`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                         `
  - `Component                                  `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RunScript`
  - `GameplayEventId: Local - -1486120159`

- **[3]**
  - `EventIdIndex: 3`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum SpawnMinion`
  - `GameplayEventId: Local - 1535508645`

- [ProjectM.Network.NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 55`

- **[1]**
  - `Value: 8`

- **[2]**
  - `Value: 169`

- **[3]**
  - `Value: 100`

- **[4]**
  - `Value: 130`

- **[5]**
  - `Value: 1`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 0`

- **[9]**
  - `Value: 0`

- **[10]**
  - `Value: 0`

- **[11]**
  - `Value: 0`

- **[12]**
  - `Value: 0`

- **[13]**
  - `Value: 0`

- **[14]**
  - `Value: 0`

- **[15]**
  - `Value: 0`

- **[16]**
  - `Value: 0`

- **[17]**
  - `Value: 0`

- **[18]**
  - `Value: 0`

- **[19]**
  - `Value: 0`

- **[20]**
  - `Value: 0`

- **[21]**
  - `Value: 0`

- **[22]**
  - `Value: 0`

- **[23]**
  - `Value: 0`

- **[24]**
  - `Value: 0`

- **[25]**
  - `Value: 0`

- **[26]**
  - `Value: 0`

- **[27]**
  - `Value: 0`

- **[28]**
  - `Value: 0`

- **[29]**
  - `Value: 0`

- **[30]**
  - `Value: 0`

- **[31]**
  - `Value: 0`

- **[32]**
  - `Value: 0`

- **[33]**
  - `Value: 0`

- **[34]**
  - `Value: 0`

- **[35]**
  - `Value: 0`

- **[36]**
  - `Value: 0`

- **[37]**
  - `Value: 0`

- **[38]**
  - `Value: 0`

- **[39]**
  - `Value: 0`

- **[40]**
  - `Value: 0`

- **[41]**
  - `Value: 0`

- **[42]**
  - `Value: 0`

- **[43]**
  - `Value: 0`

- **[44]**
  - `Value: 0`

- **[45]**
  - `Value: 0`

- **[46]**
  - `Value: 0`

- **[47]**
  - `Value: 0`

- **[48]**
  - `Value: 0`

- **[49]**
  - `Value: 0`

- **[50]**
  - `Value: 0`

- **[51]**
  - `Value: 0`

- **[52]**
  - `Value: 0`

- **[53]**
  - `Value: 0`

- **[54]**
  - `Value: 0`

- **[55]**
  - `Value: 160`

- **[56]**
  - `Value: 64`

- **[57]**
  - `Value: 0`

- **[58]**
  - `Value: 0`

- **[59]**
  - `Value: 0`

- **[60]**
  - `Value: 0`

- **[61]**
  - `Value: 0`

- **[62]**
  - `Value: 0`

- **[63]**
  - `Value: 0`

- **[64]**
  - `Value: 0`

- **[65]**
  - `Value: 0`

- **[66]**
  - `Value: 0`

- **[67]**
  - `Value: 0`

- **[68]**
  - `Value: 0`

- **[69]**
  - `Value: 255`

- **[70]**
  - `Value: 255`

- **[71]**
  - `Value: 255`

- **[72]**
  - `Value: 255`

- **[73]**
  - `Value: 1`

- **[74]**
  - `Value: 0`

- **[75]**
  - `Value: 0`

- **[76]**
  - `Value: 0`

- **[77]**
  - `Value: 0`

- **[78]**
  - `Value: 0`

- **[79]**
  - `Value: 0`

- **80 total elements but only showing the first 36**
  - *(No fields)*

- [ProjectM.Network.SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer){:target="_blank"}

- **[0]**
  - `Value: -1`

- **[1]**
  - `Value: -1`

- **[2]**
  - `Value: -1`

- **[3]**
  - `Value: -1`

- **[4]**
  - `Value: -1`

- **[5]**
  - `Value: -1`

- **[6]**
  - `Value: -1`

- **[7]**
  - `Value: -1`

- **[8]**
  - `Value: -1`

- **[9]**
  - `Value: -1`

- **[10]**
  - `Value: -1`

- **[11]**
  - `Value: -1`

- **[12]**
  - `Value: -1`

- **[13]**
  - `Value: -1`

- **[14]**
  - `Value: -1`

- [ProjectM.GetOwnerTeamOnSpawn](/components/GetOwnerTeamOnSpawn){:target="_blank"}
  - *(No fields)*

- [ProjectM.Buff_Persists_Through_Death](/components/Buff_Persists_Through_Death){:target="_blank"}
  - *(No fields)*

- [ProjectM.Scripting.ScriptSpawn](/components/ScriptSpawn){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*

- [ProjectM.Network.NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*
