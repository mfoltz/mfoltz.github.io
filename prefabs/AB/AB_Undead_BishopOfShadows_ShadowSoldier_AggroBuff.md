---
title: AB_Undead_BishopOfShadows_ShadowSoldier_AggroBuff
nav_order: 1
parent: AB Prefabs
---

# AB_Undead_BishopOfShadows_ShadowSoldier_AggroBuff

**Prefab GUID:** `-138162557`

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
  - `Duration: 1.5`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.Scripting.ScriptDestroy**
  - `Handled: False`

- **ProjectM.Gameplay.Scripting.Script_Buff_GenerateAggro_DataServer**
  - `Value: 500`
  - `From: ProjectM.Gameplay.Scripting.Script_Buff_GenerateAggro_Target SpellTarget`
  - `Towards: ProjectM.Gameplay.Scripting.Script_Buff_GenerateAggro_Target BuffTarget`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -138162557`

- **ProjectM.Scripting.ScriptSpawn**
  - *(No fields)*

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*
