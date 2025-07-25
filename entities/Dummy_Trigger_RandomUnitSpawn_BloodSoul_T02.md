---
title: Dummy_Trigger_RandomUnitSpawn_BloodSoul_T02
guid: -1129363767
categories: ['All', 'Remainders']
nav_exclude: true
search_exclude: true
layout: default
---

# Dummy_Trigger_RandomUnitSpawn_BloodSoul_T02

**GUID:** `-1129363767`

**Categories:** [All](/prefabs/All), [Remainders](/prefabs/Remainders)

## Components

- [EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [GetOwnerRotation](/components/GetOwnerRotation){:target="_blank"}
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

- [GetTranslationOnSpawn](/components/GetTranslationOnSpawn){:target="_blank"}
  - `TranslationSource: ProjectM.GetTranslationSource Owner`
  - `SnapToGround: False`

- [MinionMaster](/components/MinionMaster){:target="_blank"}
  - `TotalMaxMinions: 1`
  - `MinionSpawnsThisFrame: 0`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [ManualFirstFrameLastTranslation](/components/ManualFirstFrameLastTranslation){:target="_blank"}
  - `Value: Il2CppSystem.Nullable_Unboxed`1[float3]`

- [Team](/components/Team){:target="_blank"}
  - `Value: 1`
  - `FactionIndex: -1`

- [Networked](/components/Networked){:target="_blank"}
  - `CreateFrame: 0`

- [UpToDateUserBitMask](/components/UpToDateUserBitMask){:target="_blank"}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- [FrameChanged](/components/FrameChanged){:target="_blank"}
  - `Value: -1`

- [NetworkSnapshot](/components/NetworkSnapshot){:target="_blank"}
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_cbffeddche`

- [Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [TeamReference](/components/TeamReference){:target="_blank"}
  - `Value: ModifiableEntity(0:0)`

- [NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -1129363767`

- [CreateGameplayEventsOnDestroy](/components/CreateGameplayEventsOnDestroy){:target="_blank"}

- **[0]**
  - `EventId: Local - -1285857012`
  - `Target: ProjectM.GameplayEventTarget Self`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- [CreateGameplayEventOnMinionDeath](/components/CreateGameplayEventOnMinionDeath){:target="_blank"}

- **[0]**
  - `EventId: Local - 1608243110`

- [CreateGameplayEventsOnSpawn](/components/CreateGameplayEventsOnSpawn){:target="_blank"}

- **[0]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget Owner`

- [DestroyOnGameplayEvent](/components/DestroyOnGameplayEvent){:target="_blank"}

- **[0]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: False`

- [GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 373290447`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 1608243110`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1285857012`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [RunScriptOnGameplayEvent](/components/RunScriptOnGameplayEvent){:target="_blank"}

- **[0]**
  - `ScriptReference: ProjectM.ScriptMethodReference ProjectM.ScriptMethodReference`

- [SpawnMinionOnGameplayEvent](/components/SpawnMinionOnGameplayEvent){:target="_blank"}

- **[0]**
  - `Location: ProjectM.SpawnMiniononGameplayEventLocation Spell`
  - `Rotation: ProjectM.SpawnMinionOnGameplayEventRotation Random`
  - `PrefabPickMode: ProjectM.SpawnMinionOnGameplayEventPrefabPickMode RandomNoDuplicates`
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
  - `TriggerMasterDeathActionOnDowned: False`
  - `InheritOwnerFaction: True`
  - `InheritOwner: False`
  - `AcceptSpawnInCollision: False`
  - `SetTeamToOwner: False`
  - `DisableDropsFromMinion: False`
  - `MasterDeathAction: ProjectM.MinionMasterDeathAction Destroy`
  - `MasterDeathBuffPrefabGuid: GUID Not Found`
  - `BlobData: Unity.Entities.BlobAssetReference`1[SpawnMinionOnGameplayEventBlob] Unity.Entities.BlobAssetReference`1[SpawnMinionOnGameplayEventBlob]`
  - `SpawnSequenceGuid: SequenceGUID 0`
  - `StatsOverrides: ProjectM.SpawnMinionOnGameplayEventStatsOverrides ProjectM.SpawnMinionOnGameplayEventStatsOverrides`

- [MaxMinionsPerPlayerElement](/components/MaxMinionsPerPlayerElement){:target="_blank"}
  - *(No fields)*

- [GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum SpawnMinion`
  - `GameplayEventId: Local - 373290447`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - 1608243110`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RunScript`
  - `GameplayEventId: Local - -1285857012`

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 201`

- **[1]**
  - `Value: 70`

- **[2]**
  - `Value: 175`

- **[3]**
  - `Value: 188`

- **[4]**
  - `Value: 211`

- **[5]**
  - `Value: 0`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 255`

- **[9]**
  - `Value: 255`

- **[10]**
  - `Value: 255`

- **[11]**
  - `Value: 255`

- **[12]**
  - `Value: 1`

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

- [SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer){:target="_blank"}

- **[0]**
  - `Value: -1`

- **[1]**
  - `Value: -1`

- **[2]**
  - `Value: -1`

- [GetOwnerRotationOnlyOnSpawnTag](/components/GetOwnerRotationOnlyOnSpawnTag){:target="_blank"}
  - *(No fields)*

- [GetOwnerTeamOnSpawn](/components/GetOwnerTeamOnSpawn){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*

- [NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*
