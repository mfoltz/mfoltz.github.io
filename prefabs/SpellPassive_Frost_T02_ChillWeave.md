---
title: SpellPassive_Frost_T02_ChillWeave
guid: -492383335
categories: ['All', 'Spell']
nav_exclude: true
search_exclude: true
layout: default
---

# SpellPassive_Frost_T02_ChillWeave

**GUID:** `-492383335`

**Categories:** [All](/prefabs/All), [Spell](/prefabs/Spell)

## Components

- [EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [Buff](/components/Buff){:target="_blank"}
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

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Passive](/components/Passive){:target="_blank"}
  - `Level: 60`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -492383335`

- [PassiveRequirementBuffer](/components/PassiveRequirementBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_NetherShard_T01 PrefabGuid(2103989354)`
  - `Amount: 400`

- [ModifyUnitStatBuff_DOTS](/components/ModifyUnitStatBuff_DOTS){:target="_blank"}

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType IncreasedShieldEfficiency`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0`
  - `SoftCapValue: 1`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- [Buff_Persists_Through_Death](/components/Buff_Persists_Through_Death){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
