---
title: SpellPassive_Chaos_T03_Overpower
nav_order: 1
parent: Spell Prefabs
---

# SpellPassive_Chaos_T03_Overpower

**Prefab GUID:** `1250779598`

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

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Passive**
  - `Level: 80`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 1250779598`

- **ProjectM.PassiveRequirementBuffer**
  - *(No fields)*

- **[0]**
  - `Guid: Item_NetherShard_T02 PrefabGuid(576389135)`
  - `Amount: 600`

- **ProjectM.ModifyUnitStatBuff_DOTS**
  - *(No fields)*

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType WeaponCooldownRecoveryRate`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0`
  - `SoftCapValue: 1`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **[1]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType WeaponFreeCast`
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

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*
