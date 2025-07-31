---
title: Buff_Illusion_Mosquito_DisableAggro
guid: 1934061152
categories: ['All', 'Buff']
nav_exclude: true
search_exclude: true
layout: default
---

# Buff_Illusion_Mosquito_DisableAggro

**GUID:** `1934061152`

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
  - `Mode: ProjectM.DisableAggroBuffMode TargetDontAttackOthers`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age](/components/Age)
  - `Value: 0`

- [ProjectM.Scripting.ScriptDestroy](/components/ScriptDestroy)
  - `Handled: False`

- [ProjectM.Gameplay.Scripting.Script_Buff_ModifyAggroFactor_DataServer](/components/Script_Buff_ModifyAggroFactor_DataServer)
  - `Factor: 0`
  - `Target: ProjectM.Gameplay.Scripting.Script_Buff_ModifyAggroFactor_Target BuffTarget`
  - `ModId: Unset`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: 1934061152`

- [ProjectM.Scripting.ScriptSpawn](/components/ScriptSpawn)

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)
