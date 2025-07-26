---
title: Buff_Undead_CursedSmith_FloatingWeapon_Hard_StatBoost
guid: 1672630457
categories: ['All', 'Buff']
nav_exclude: true
search_exclude: true
layout: default
---

# Buff_Undead_CursedSmith_FloatingWeapon_Hard_StatBoost

**GUID:** `1672630457`

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

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [BuffCategory](/components/BuffCategory){:target="_blank"}
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [ModifyUnitBaseStatsTypeBuff](/components/ModifyUnitBaseStatsTypeBuff){:target="_blank"}
  - `Priority: 0`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Normal`
  - `UnitBaseStatsTypeModId: Unset`
  - `HealthUnitBaseStatsType: ProjectM.UnitBaseStatsType Normal`
  - `HealthUnitBaseStatsTypeModId: Unset`
  - `MaxHealthFactor: 1.3`
  - `MaxHealthFactorModId: Unset`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 1672630457`

- [ModifyUnitStatBuff_DOTS](/components/ModifyUnitStatBuff_DOTS){:target="_blank"}

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType PhysicalPower`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 8`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **[1]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType SpellPower`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 8`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
