---
title: Buff_Unholy_DeathKnight_DisableAggro
guid: 955278936
categories: ['All', 'Buff']
nav_exclude: true
search_exclude: true
layout: default
---

# Buff_Unholy_DeathKnight_DisableAggro

**GUID:** `955278936`

**Categories:** [All](/prefabs/All), [Buff](/prefabs/Buff)

## Components

- [ProjectM.Attach](/components/Attach)
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner](/components/EntityOwner)
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator)
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff](/components/Buff)
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

- [ProjectM.DisableAggroBuff](/components/DisableAggroBuff)
  - `Mode: ProjectM.DisableAggroBuffMode OthersDontAttackTarget`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age](/components/Age)
  - `Value: 0`

- [ProjectM.LifeTime](/components/LifeTime)
  - `Duration: 10`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.BuffModificationFlagData](/components/BuffModificationFlagData)
  - `ModificationTypes: 524`
  - `ModificationId: Unset`

- [ProjectM.Scripting.ScriptDestroy](/components/ScriptDestroy)
  - `Handled: False`

- [ProjectM.Gameplay.Scripting.Script_Buff_ModifyAggroFactor_DataServer](/components/Script_Buff_ModifyAggroFactor_DataServer)
  - `Factor: 0`
  - `Target: ProjectM.Gameplay.Scripting.Script_Buff_ModifyAggroFactor_Target BuffTarget`
  - `ModId: Unset`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: 955278936`

- [ProjectM.Scripting.ScriptSpawn](/components/ScriptSpawn)

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)
