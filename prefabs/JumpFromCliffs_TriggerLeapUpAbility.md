---
title: JumpFromCliffs_TriggerLeapUpAbility
guid: -1752769220
categories: ['All', 'Remainders']
nav_exclude: true
search_exclude: true
layout: default
---

# JumpFromCliffs_TriggerLeapUpAbility

**GUID:** `-1752769220`

**Categories:** [All](/prefabs/All), [Remainders](/prefabs/Remainders)

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
  - `BuffType: ProjectM.BuffType Block`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: False`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Debuff`

- [GetTranslationOnSpawn](/components/GetTranslationOnSpawn){:target="_blank"}
  - `TranslationSource: ProjectM.GetTranslationSource Owner`
  - `SnapToGround: False`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [BuffCategory](/components/BuffCategory){:target="_blank"}
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag Travel`
  - `KeepOldest: False`

- [LifeTime](/components/LifeTime){:target="_blank"}
  - `Duration: 0.1`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ManualFirstFrameLastTranslation](/components/ManualFirstFrameLastTranslation){:target="_blank"}
  - `Value: Il2CppSystem.Nullable_Unboxed`1[float3]`

- [Team](/components/Team){:target="_blank"}
  - `Value: 1`
  - `FactionIndex: -1`

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

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -1752769220`

- [CreateGameplayEventsOnDestroy](/components/CreateGameplayEventsOnDestroy){:target="_blank"}

- **[0]**
  - `EventId: Local - -1285857012`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- [CreateGameplayEventsOnSpawn](/components/CreateGameplayEventsOnSpawn){:target="_blank"}

- **[0]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget Owner`

- [ForceCastOnGameplayEvent](/components/ForceCastOnGameplayEvent){:target="_blank"}

- **[0]**
  - `ForceCastAbility: AB_VampireCliffLeap_Travel_AbilityGroup PrefabGuid(-999342671)`
  - `Target: ProjectM.ForceCastTarget Owner`

- [GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1285857012`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ForceCast`
  - `GameplayEventId: Local - -1285857012`

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
