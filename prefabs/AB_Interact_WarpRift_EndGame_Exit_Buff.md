---
title: AB_Interact_WarpRift_EndGame_Exit_Buff
guid: -757873625
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Interact_WarpRift_EndGame_Exit_Buff

**GUID:** `-757873625`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

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

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [ProjectM.BuffCategory](/components/BuffCategory){:target="_blank"}
  - `Level: 10`
  - `Groups: ProjectM.BuffCategoryFlag Interact`
  - `KeepOldest: False`

- [ProjectM.BuffModificationFlagData](/components/BuffModificationFlagData){:target="_blank"}
  - `ModificationTypes: 33554436`
  - `ModificationId: Unset`

- [Unity.Transforms.Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -757873625`

- [ProjectM.CreateGameplayEventsOnSpawn](/components/CreateGameplayEventsOnSpawn){:target="_blank"}

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget Owner`

- [ProjectM.ApplyBuffOnGameplayEvent](/components/ApplyBuffOnGameplayEvent){:target="_blank"}

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget EventTarget`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: Buff_General_EndGameCredits PrefabGuid(260113502)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- [ProjectM.GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -112044381`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -112044381`

- [ProjectM.DestroyOnSpawn](/components/DestroyOnSpawn){:target="_blank"}
  - *(No fields)*

- [ProjectM.ActivateDraculaWarpRift](/components/ActivateDraculaWarpRift){:target="_blank"}
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
