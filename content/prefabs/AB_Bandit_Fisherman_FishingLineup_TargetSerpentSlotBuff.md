---
title: AB_Bandit_Fisherman_FishingLineup_TargetSerpentSlotBuff
guid: -459325308
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Bandit_Fisherman_FishingLineup_TargetSerpentSlotBuff

**GUID:** `-459325308`

**Categories:** [AB]({< relref "prefabs/AB.md" >}), [All]({< relref "prefabs/All.md" >})

## Components

- [ProjectM.Attach]({< relref "components/Attach.md" >})
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner]({< relref "components/EntityOwner.md" >})
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]({< relref "components/EntityCreator.md" >})
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff]({< relref "components/Buff.md" >})
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

- [ProjectM.DestroyData]({< relref "components/DestroyData.md" >})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({< relref "components/DestroyState.md" >})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age]({< relref "components/Age.md" >})
  - `Value: 0`

- [ProjectM.BuffCategory]({< relref "components/BuffCategory.md" >})
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [ProjectM.LifeTime]({< relref "components/LifeTime.md" >})
  - `Duration: 20`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [Unity.Transforms.Rotation]({< relref "components/Rotation.md" >})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({< relref "components/Translation.md" >})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld]({< relref "components/LocalToWorld.md" >})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({< relref "components/LocalTransform.md" >})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID]({< relref "components/PrefabGUID.md" >})
  - `_Value: -459325308`

- [ProjectM.CreateGameplayEventsOnDestroy]({< relref "components/CreateGameplayEventsOnDestroy.md" >})

- **[0]**
  - `EventId: Local - -136930912`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.CreateGameplayEventsOnSpawn]({< relref "components/CreateGameplayEventsOnSpawn.md" >})

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`

- [ProjectM.ApplyBuffOnGameplayEvent]({< relref "components/ApplyBuffOnGameplayEvent.md" >})

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget Owner`
  - `SpellTarget: ProjectM.SetSpellTarget EventTarget`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: AB_Bandit_Fisherman_FishingLineup_WalkToPosBuff PrefabGuid(1667669669)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- [ProjectM.GameplayEventIdMapping]({< relref "components/GameplayEventIdMapping.md" >})

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -112044381`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.GameplayEventListeners]({< relref "components/GameplayEventListeners.md" >})

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -112044381`

- [Unity.Entities.SpawnTag]({< relref "components/SpawnTag.md" >})

- [Unity.Entities.Prefab]({< relref "components/Prefab.md" >})

- [Unity.Entities.Simulate]({< relref "components/Simulate.md" >})

- [Unity.Entities.BlobAssetOwner]({< relref "components/BlobAssetOwner.md" >})
