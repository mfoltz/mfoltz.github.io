---
title: AB_Vampire_CrimsonIronMaiden_DistanceChecker_Buff
guid: 1269197489
categories:
- AB
- All
nav_exclude: true
search_exclude: true
layout: default
components:
- Attach
- EntityOwner
- EntityCreator
- Buff
- GetOwnerRotation
- GetTranslationOnSpawn
- UpdateTranslationWithOffset
- DestroyData
- DestroyState
- Age
- BuffCategory
- LifeTime
- ManualFirstFrameLastTranslation
- Rotation
- Translation
- LocalToWorld
- LocalTransform
- PrefabGUID
- CreateGameplayEventOnDistanceReached
- DestroyOnGameplayEvent
- GameplayEventIdMapping
- GameplayEventListeners
- GetOwnerRotationOnlyOnSpawnTag
- Buff_Destroy_On_Owner_Death
- SpawnTag
- Prefab
- Simulate
- BlobAssetOwner
---

# AB_Vampire_CrimsonIronMaiden_DistanceChecker_Buff

**GUID:** `1269197489`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [Attach](/components/Attach){:target="_blank"}
  - `Parent: Entity(0:0)`

- [EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [Buff](/components/Buff){:target="_blank"}
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

- [GetOwnerRotation](/components/GetOwnerRotation){:target="_blank"}
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource BuffTarget`
  - `InverseRotation: False`

- [GetTranslationOnSpawn](/components/GetTranslationOnSpawn){:target="_blank"}
  - `TranslationSource: ProjectM.GetTranslationSource BuffTarget`
  - `SnapToGround: False`

- [UpdateTranslationWithOffset](/components/UpdateTranslationWithOffset){:target="_blank"}
  - `TranslationOffset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `TranslationSource: ProjectM.UpdateTranslationTarget_Enum BuffTarget`
  - `RotationSource: ProjectM.UpdateRotationTarget_Enum Owner`
  - `VelocityOffsetFactor: 0`
  - `MaxSpeedClamp: 0`
  - `VelocityOffsetIsOnlyPerpendicular: False`
  - `ResolveCollision: False`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [BuffCategory](/components/BuffCategory){:target="_blank"}
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [LifeTime](/components/LifeTime){:target="_blank"}
  - `Duration: 3`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ManualFirstFrameLastTranslation](/components/ManualFirstFrameLastTranslation){:target="_blank"}
  - `Value: Il2CppSystem.Nullable_Unboxed`1[float3]`

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

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 1269197489`

- [CreateGameplayEventOnDistanceReached](/components/CreateGameplayEventOnDistanceReached){:target="_blank"}

- **[0]**
  - `DistanceSqThreshold: 81`
  - `TriggerWhen: ProjectM.CreateGameplayEventOnDistanceReachedTriggerWhen Closer`
  - `TriggerContinously: False`
  - `PreviousDistanceSq: -1`
  - `Continous: ProjectM.CreateGameplayEventOnDistanceReached+ContinousData ProjectM.CreateGameplayEventOnDistanceReached+ContinousData`
  - `EventId: Local - -734495057`
  - `Entity0: ProjectM.GameplayEventTarget BuffTarget`
  - `Entity1: ProjectM.GameplayEventTarget Owner`

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
  - `GameplayEventId: Local - -734495057`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - -734495057`

- [GetOwnerRotationOnlyOnSpawnTag](/components/GetOwnerRotationOnlyOnSpawnTag){:target="_blank"}
  - *(No fields)*

- [Buff_Destroy_On_Owner_Death](/components/Buff_Destroy_On_Owner_Death){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*
