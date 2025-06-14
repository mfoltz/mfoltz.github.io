---
title: AB_Wendigo_SnowStorm_TargetedBuff
nav_order: 1
parent: AB Prefabs
---

# AB_Wendigo_SnowStorm_TargetedBuff

**Prefab GUID:** `486057639`

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
  - `BuffType: ProjectM.BuffType Replace`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: True`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Debuff`

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
  - `Duration: 5`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.Scripting.ScriptDestroy**
  - `Handled: False`

- **ProjectM.Gameplay.Scripting.Script_Buff_ModifyAggroFactor_DataServer**
  - `Factor: 0.01`
  - `Target: ProjectM.Gameplay.Scripting.Script_Buff_ModifyAggroFactor_Target BuffTarget`
  - `ModId: Unset`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 486057639`

- **ProjectM.Scripting.ScriptSpawn**
  - *(No fields)*

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*
