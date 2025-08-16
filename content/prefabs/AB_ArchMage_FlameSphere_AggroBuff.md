---
title: AB_ArchMage_FlameSphere_AggroBuff
guid: -240922728
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_ArchMage_FlameSphere_AggroBuff

**GUID:** `-240922728`

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
  - `Duration: 25`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.Scripting.ScriptDestroy]({< relref "components/ScriptDestroy.md" >})
  - `Handled: False`

- [ProjectM.Gameplay.Scripting.Script_Buff_GenerateAggro_DataServer]({< relref "components/Script_Buff_GenerateAggro_DataServer.md" >})
  - `Value: 500`
  - `From: ProjectM.Gameplay.Scripting.Script_Buff_GenerateAggro_Target SpellTarget`
  - `Towards: ProjectM.Gameplay.Scripting.Script_Buff_GenerateAggro_Target BuffTarget`

- [Stunlock.Core.PrefabGUID]({< relref "components/PrefabGUID.md" >})
  - `_Value: -240922728`

- [ProjectM.Scripting.ScriptSpawn]({< relref "components/ScriptSpawn.md" >})

- [Unity.Entities.SpawnTag]({< relref "components/SpawnTag.md" >})

- [Unity.Entities.Prefab]({< relref "components/Prefab.md" >})

- [Unity.Entities.Simulate]({< relref "components/Simulate.md" >})
