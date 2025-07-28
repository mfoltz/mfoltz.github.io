---
title: SpellPassive_Illusion_T02_FlowingSorcery
guid: -1979168975
categories: ['All', 'Spell']
nav_exclude: true
search_exclude: true
layout: default
---

# SpellPassive_Illusion_T02_FlowingSorcery

**GUID:** `-1979168975`

**Categories:** [All](/prefabs/All), [Spell](/prefabs/Spell)

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
  - `Level: 60`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -1979168975`

- **ProjectM.PassiveRequirementBuffer**
  - *(No fields)*

- **[0]**
  - `Guid: Item_NetherShard_T01 PrefabGuid(2103989354)`
  - `Amount: 400`

- **ProjectM.ModifyUnitStatBuff_DOTS**
  - *(No fields)*

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType SpellCooldownRecoveryRate`
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

