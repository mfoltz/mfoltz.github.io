---
title: AB_Gloomrot_RailgunSergeant_HomePosSpawn
guid: -415573136
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `-415573136`

**Categories:** [AB]({{% relref "prefabs/AB.md" %}}), [All]({{% relref "prefabs/All.md" %}})

## Components

- [ProjectM.EntityOwner]({{% relref "components/EntityOwner.md" %}})
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]({{% relref "components/EntityCreator.md" %}})
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.GetOwnerRotation]({{% relref "components/GetOwnerRotation.md" %}})
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

- [ProjectM.GetTranslationOnSpawn]({{% relref "components/GetTranslationOnSpawn.md" %}})
  - `TranslationSource: ProjectM.GetTranslationSource Owner`
  - `SnapToGround: False`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.ManualFirstFrameLastTranslation]({{% relref "components/ManualFirstFrameLastTranslation.md" %}})
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- [ProjectM.Team]({{% relref "components/Team.md" %}})
  - `Value: 1`
  - `FactionIndex: -1`

- [Unity.Transforms.Rotation]({{% relref "components/Rotation.md" %}})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({{% relref "components/Translation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld]({{% relref "components/LocalToWorld.md" %}})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({{% relref "components/LocalTransform.md" %}})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TeamReference]({{% relref "components/TeamReference.md" %}})
  - `Value: ModifiableEntity(0:0)`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: -415573136`

- [ProjectM.CreateGameplayEventsOnSpawn]({{% relref "components/CreateGameplayEventsOnSpawn.md" %}})

- **[0]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget Owner`

- [ProjectM.GameplayEventIdMapping]({{% relref "components/GameplayEventIdMapping.md" %}})

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 373290447`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- [ProjectM.SpawnMinionOnGameplayEvent]({{% relref "components/SpawnMinionOnGameplayEvent.md" %}})

- **[0]**
  - `Location: ProjectM.SpawnMiniononGameplayEventLocation Spell`
  - `Rotation: ProjectM.SpawnMinionOnGameplayEventRotation Random`
  - `PrefabPickMode: ProjectM.SpawnMinionOnGameplayEventPrefabPickMode InOrder`
  - `OwnerSpawnDirection: False`
  - `MinDistance: 0`
  - `MaxDistance: 0`
  - `EventTargetAggroBoost: 0`
  - `MaxDistanceFromPreCombatPositionOverride: -1`
  - `Count: 1`
  - `IncludeInMinionCount: False`
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
  - `MasterDeathAction: ProjectM.MinionMasterDeathAction None`
  - `MasterDeathBuffPrefabGuid: GUID Not Found`
  - `BlobData: Unity.Entities.BlobAssetReference`1[ProjectM.SpawnMinionOnGameplayEventBlob] Unity.Entities.BlobAssetReference`1[ProjectM.SpawnMinionOnGameplayEventBlob]`
  - `SpawnSequenceGuid: SequenceGUID 0`
  - `StatsOverrides: ProjectM.SpawnMinionOnGameplayEventStatsOverrides ProjectM.SpawnMinionOnGameplayEventStatsOverrides`

- [ProjectM.GameplayEventListeners]({{% relref "components/GameplayEventListeners.md" %}})

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum SpawnMinion`
  - `GameplayEventId: Local - 373290447`

- [ProjectM.DestroyOnSpawn]({{% relref "components/DestroyOnSpawn.md" %}})

- [ProjectM.GetOwnerRotationOnlyOnSpawnTag]({{% relref "components/GetOwnerRotationOnlyOnSpawnTag.md" %}})

- [ProjectM.GetOwnerTeamOnSpawn]({{% relref "components/GetOwnerTeamOnSpawn.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})
