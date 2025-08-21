---
title: AB_WerewolfChieftain_OpenTheCages_MinionBuff
guid: 794010503
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `794010503`

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
  - `BuffType: ProjectM.BuffType Replace`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: True`
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

- [ProjectM.Scripting.ScriptDestroy]({{% relref "components/ScriptDestroy.md" %}})
  - `Handled: False`

- [ProjectM.Gameplay.Scripting.Script_Modify_Combat_Movement_Buff_Data]({{% relref "components/Script_Modify_Combat_Movement_Buff_Data.md" %}})
  - `MinDistance: 0`
  - `GoalDistance: 6`
  - `GoalDistanceOuter: 0`
  - `MaxDistance: 12`
  - `MovePattern: ProjectM.AiMovePattern Circle`
  - `ForceLookAtTarget: ProjectM.AiForceLookAtTarget None`
  - `CircleCurveInRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `CircleCurveOutOfRange: ProjectM.CurveReference ProjectM.CurveReference`

- [ProjectM.Gameplay.Scripting.Script_Modify_Combat_Movement_Buff_State]({{% relref "components/Script_Modify_Combat_Movement_Buff_State.md" %}})
  - `MinDistanceModId: Unset`
  - `GoalDistanceModId: Unset`
  - `GoalDistanceOuterModId: Unset`
  - `MaxDistanceModId: Unset`
  - `MovePatternModId: Unset`
  - `ForceLookAtTargetModId: Unset`
  - `OldCircleCurveInRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `OldCircleCurveOutOfRange: ProjectM.CurveReference ProjectM.CurveReference`

- [ProjectM.Gameplay.Scripting.Script_Buff_GenerateAggro_DataServer]({{% relref "components/Script_Buff_GenerateAggro_DataServer.md" %}})
  - `Value: 0.5`
  - `From: ProjectM.Gameplay.Scripting.Script_Buff_GenerateAggro_Target BuffTarget`
  - `Towards: ProjectM.Gameplay.Scripting.Script_Buff_GenerateAggro_Target Owner`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 794010503`

- [ProjectM.CreateGameplayEventsOnSpawn]({{% relref "components/CreateGameplayEventsOnSpawn.md" %}})

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget Owner`

- [ProjectM.GenerateAggroOnGameplayEvent]({{% relref "components/GenerateAggroOnGameplayEvent.md" %}})

- **[0]**
  - `From: ProjectM.AggroGameplayEventWho BuffTarget`
  - `Towards: ProjectM.AggroGameplayEventWho Owner`
  - `Value: 1`

- [ProjectM.GameplayEventIdMapping]({{% relref "components/GameplayEventIdMapping.md" %}})

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -112044381`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.GameplayEventListeners]({{% relref "components/GameplayEventListeners.md" %}})

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum GenerateAggro`
  - `GameplayEventId: Local - -112044381`

- [ProjectM.Scripting.ScriptSpawn]({{% relref "components/ScriptSpawn.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})
