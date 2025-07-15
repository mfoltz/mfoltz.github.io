---
title: AB_Undead_Infiltrator_AfterImage_AggroImageBuff
guid: 1771020451
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Undead_Infiltrator_AfterImage_AggroImageBuff

**GUID:** `1771020451`

**Categories:** [AB](/prefabs/AB/), [All](/prefabs/All/)

## Components

- **ProjectM.Attach**
  - `Parent: Entity(0:0)`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.Buff**
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

- **ProjectM.SpellTarget**
  - `Target: NetworkedEntity(0:0)`
  - `DestroyIfNotInteractable: True`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.BuffCategory**
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- **ProjectM.LifeTime**
  - `Duration: 3`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.Scripting.ScriptDestroy**
  - `Handled: False`

- **ProjectM.Gameplay.Scripting.Script_Buff_GenerateAggro_DataServer**
  - `Value: 500`
  - `From: ProjectM.Gameplay.Scripting.Script_Buff_GenerateAggro_Target SpellTarget`
  - `Towards: ProjectM.Gameplay.Scripting.Script_Buff_GenerateAggro_Target BuffTarget`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 1771020451`

- **ProjectM.Scripting.ScriptSpawn**
  - *(No fields)*

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

