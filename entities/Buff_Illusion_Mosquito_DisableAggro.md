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

- [DisableAggroBuff](/components/DisableAggroBuff){:target="_blank"}
  - `Mode: ProjectM.DisableAggroBuffMode TargetDontAttackOthers`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [ScriptDestroy](/components/ScriptDestroy){:target="_blank"}
  - `Handled: False`

- [Script_Buff_ModifyAggroFactor_DataServer](/components/Script_Buff_ModifyAggroFactor_DataServer){:target="_blank"}
  - `Factor: 0`
  - `Target: ProjectM.Gameplay.Scripting.Script_Buff_ModifyAggroFactor_Target BuffTarget`
  - `ModId: Unset`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 1934061152`

- [ScriptSpawn](/components/ScriptSpawn){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
