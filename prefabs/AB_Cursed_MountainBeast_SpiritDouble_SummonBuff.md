---
title: AB_Cursed_MountainBeast_SpiritDouble_SummonBuff
guid: 1123566272
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Cursed_MountainBeast_SpiritDouble_SummonBuff

**GUID:** `1123566272`

**Categories:** AB, All

## Components

- **ProjectM.Attach**
  - `Parent: Entity(0:0)`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.Buff**
  - `StartTimeUnmodified: 0`
  - `Target: Entity(0:0)`
  - `BuffType: ProjectM.BuffType Parallel`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: False`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Debuff`

- **ProjectM.GetOwnerRotation**
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.BuffCategory**
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- **ProjectM.LifeTime**
  - `Duration: 0.5`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.Team**
  - `Value: 1`
  - `FactionIndex: -1`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **Unity.Transforms.LocalToWorld**
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- **Unity.Transforms.LocalTransform**
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **ProjectM.TeamReference**
  - `Value: ModifiableEntity(0:0)`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 1123566272`

- **ProjectM.CreateGameplayEventsOnSpawn**
  - *(No fields)*

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`

- **ProjectM.GameplayEventIdMapping**
  - *(No fields)*

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -112044381`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **ProjectM.SpawnMinionOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `Location: ProjectM.SpawnMiniononGameplayEventLocation Owner`
  - `Rotation: ProjectM.SpawnMinionOnGameplayEventRotation SpellRotation`
  - `PrefabPickMode: ProjectM.SpawnMinionOnGameplayEventPrefabPickMode InOrder`
  - `OwnerSpawnDirection: False`
  - `MinDistance: 0`
  - `MaxDistance: 0`
  - `EventTargetAggroBoost: 50`
  - `MaxDistanceFromPreCombatPositionOverride: -1`
  - `Count: 1`
  - `IncludeInMinionCount: True`
  - `AllowCharm: False`
  - `CanBeConsumed: True`
  - `OverrideBloodQualityCurve: ProjectM.CurveReference ProjectM.CurveReference`
  - `ForceBadBloodQuality: True`
  - `TriggerMasterDeathActionOnDowned: True`
  - `InheritOwnerFaction: True`
  - `InheritOwner: False`
  - `AcceptSpawnInCollision: False`
  - `SetTeamToOwner: True`
  - `DisableDropsFromMinion: True`
  - `MasterDeathAction: ProjectM.MinionMasterDeathAction Destroy`
  - `MasterDeathBuffPrefabGuid: GUID Not Found`
  - `BlobData: Unity.Entities.BlobAssetReference`1[ProjectM.SpawnMinionOnGameplayEventBlob] Unity.Entities.BlobAssetReference`1[ProjectM.SpawnMinionOnGameplayEventBlob]`
  - `SpawnSequenceGuid: SequenceGUID 0`
  - `StatsOverrides: ProjectM.SpawnMinionOnGameplayEventStatsOverrides ProjectM.SpawnMinionOnGameplayEventStatsOverrides`

- **ProjectM.GameplayEventListeners**
  - *(No fields)*

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum SpawnMinion`
  - `GameplayEventId: Local - -112044381`

- **ProjectM.GetOwnerFactionOnSpawn**
  - *(No fields)*

- **ProjectM.GetOwnerRotationOnlyOnSpawnTag**
  - *(No fields)*

- **ProjectM.GetOwnerTeamOnSpawn**
  - *(No fields)*

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

- **Unity.Entities.BlobAssetOwner**
  - *(No fields)*

