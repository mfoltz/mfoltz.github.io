---
title: AB_ArchMage_MirrorImage_MoveBehaviourBuff
guid: -1099792891
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_ArchMage_MirrorImage_MoveBehaviourBuff

**GUID:** `-1099792891`

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
  - `BuffType: ProjectM.BuffType Replace`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: True`
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
  - `Duration: 4`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.BuffModificationFlagData]({< relref "components/BuffModificationFlagData.md" >})
  - `ModificationTypes: 33554432`
  - `ModificationId: Unset`

- [ProjectM.Scripting.ScriptDestroy]({< relref "components/ScriptDestroy.md" >})
  - `Handled: False`

- [ProjectM.Gameplay.Scripting.Script_Modify_Combat_Movement_Buff_Data]({< relref "components/Script_Modify_Combat_Movement_Buff_Data.md" >})
  - `MinDistance: 8`
  - `GoalDistance: 12`
  - `GoalDistanceOuter: 0`
  - `MaxDistance: 15`
  - `MovePattern: ProjectM.AiMovePattern Approach`
  - `ForceLookAtTarget: ProjectM.AiForceLookAtTarget None`
  - `CircleCurveInRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `CircleCurveOutOfRange: ProjectM.CurveReference ProjectM.CurveReference`

- [ProjectM.Gameplay.Scripting.Script_Modify_Combat_Movement_Buff_State]({< relref "components/Script_Modify_Combat_Movement_Buff_State.md" >})
  - `MinDistanceModId: Unset`
  - `GoalDistanceModId: Unset`
  - `GoalDistanceOuterModId: Unset`
  - `MaxDistanceModId: Unset`
  - `MovePatternModId: Unset`
  - `ForceLookAtTargetModId: Unset`
  - `OldCircleCurveInRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `OldCircleCurveOutOfRange: ProjectM.CurveReference ProjectM.CurveReference`

- [Stunlock.Core.PrefabGUID]({< relref "components/PrefabGUID.md" >})
  - `_Value: -1099792891`

- [ProjectM.Scripting.ScriptSpawn]({< relref "components/ScriptSpawn.md" >})

- [Unity.Entities.SpawnTag]({< relref "components/SpawnTag.md" >})

- [Unity.Entities.Prefab]({< relref "components/Prefab.md" >})

- [Unity.Entities.Simulate]({< relref "components/Simulate.md" >})
