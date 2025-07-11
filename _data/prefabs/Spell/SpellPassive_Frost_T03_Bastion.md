---
title: SpellPassive_Frost_T03_Bastion
nav_order: 1
parent: Spell Prefabs
---

# SpellPassive_Frost_T03_Bastion

**Prefab GUID:** `1023033912`

## Components

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.Buff**
  - `StartTimeUnmodified: 0`
  - `Target: Entity(0:0)`
  - `BuffType: ProjectM.BuffType Block`
  - `Stacks: 1`
  - `MaxStacks: 1`
  - `ResetAge: False`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: True`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Buff`

- **ProjectM.Gameplay.Scripting.Script_ReduceDamageTakenWhileCrowdControlled_DataServer**
  - `DamageReductionFactor: 0.25`
  - `DamageListenerId: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Passive**
  - `Level: 80`

- **ProjectM.Scripting.ScriptDestroy**
  - `Handled: False`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 1023033912`

- **ProjectM.PassiveRequirementBuffer**
  - *(No fields)*

- **[0]**
  - `Guid: Item_NetherShard_T02 PrefabGuid(576389135)`
  - `Amount: 600`

- **ProjectM.ModifyUnitStatBuff_DOTS**
  - *(No fields)*

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType BonusMaxHealth`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0`
  - `SoftCapValue: 1`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **ProjectM.Buff_Persists_Through_Death**
  - *(No fields)*

- **ProjectM.Scripting.ScriptSpawn**
  - *(No fields)*

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*
