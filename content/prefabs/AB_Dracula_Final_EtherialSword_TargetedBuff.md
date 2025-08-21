---
title: AB_Dracula_Final_EtherialSword_TargetedBuff
guid: 1231883895
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `1231883895`

**Categories:** [AB]({{% relref "prefabs/AB.md" %}}), [All]({{% relref "prefabs/All.md" %}})

## Components

- [ProjectM.Attach]({{% relref "components/Attach.md" %}})
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner]({{% relref "components/EntityOwner.md" %}})
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]({{% relref "components/EntityCreator.md" %}})
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff]({{% relref "components/Buff.md" %}})
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

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age]({{% relref "components/Age.md" %}})
  - `Value: 0`

- [ProjectM.BuffCategory]({{% relref "components/BuffCategory.md" %}})
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [ProjectM.LifeTime]({{% relref "components/LifeTime.md" %}})
  - `Duration: 3.1`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.Gameplay.Scripting.AbilityThrowTowardsEventHitTarget_DataServer]({{% relref "components/AbilityThrowTowardsEventHitTarget_DataServer.md" %}})
  - `RandomHitRadius: 4`
  - `NewThrowEntity: AB_Dracula_Final_EtherialSword_Throw PrefabGuid(-500580519)`
  - `Count: 1`
  - `SetStartPositionToTarget: False`
  - `SpawnOffset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 1231883895`

- [ProjectM.CreateGameplayEventsOnTick]({{% relref "components/CreateGameplayEventsOnTick.md" %}})

- **[0]**
  - `EventId: Local - 325352405`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `TickInterval: 0.3`
  - `TickTime: -0`
  - `MaxTicks: 2147483647`
  - `CallScriptOnTick: False`
  - `RandomTickOffset: 0`
  - `RandomTickInterval: 0.2`
  - `ResetWhenBuffStacksChanged: False`
  - `ResetWhenCastingAbility: GUID Not Found`

- [ProjectM.GameplayEventIdMapping]({{% relref "components/GameplayEventIdMapping.md" %}})

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 325352405`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- [ProjectM.RunScriptOnGameplayEvent]({{% relref "components/RunScriptOnGameplayEvent.md" %}})

- **[0]**
  - `ScriptReference: ProjectM.ScriptMethodReference ProjectM.ScriptMethodReference`

- [ProjectM.GameplayEventListeners]({{% relref "components/GameplayEventListeners.md" %}})

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RunScript`
  - `GameplayEventId: Local - 325352405`

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})
