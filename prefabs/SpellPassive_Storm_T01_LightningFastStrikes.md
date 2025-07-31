---
title: SpellPassive_Storm_T01_LightningFastStrikes
guid: -1042692472
categories: ['All', 'Spell']
nav_exclude: true
search_exclude: true
layout: default
---

# SpellPassive_Storm_T01_LightningFastStrikes

**GUID:** `-1042692472`

**Categories:** [All](/prefabs/All), [Spell](/prefabs/Spell)

## Components

- [ProjectM.EntityOwner](/components/EntityOwner)
  - `Owner: Entity(0:0)`

- [ProjectM.Buff](/components/Buff)
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

- [ProjectM.Gameplay.Scripting.Script_IncreaseDamageFromSource_Entry](/components/Script_IncreaseDamageFromSource_Entry)
  - `SpellSourceId: Storm_Vampire_Buff_Static PrefabGuid(-1576512627)`
  - `DamageFactor: 0.2`
  - `DamageType: ProjectM.MainDamageType Physical`
  - `BaseMultiply: False`
  - `LimitToType: False`
  - `DamageListenerId: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `SpellSourceId2: GUID Not Found`
  - `SpellSourceId3: GUID Not Found`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Passive](/components/Passive)
  - `Level: 60`

- [ProjectM.Scripting.ScriptDestroy](/components/ScriptDestroy)
  - `Handled: False`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: -1042692472`

- [ProjectM.PassiveRequirementBuffer](/components/PassiveRequirementBuffer)

- **[0]**
  - `Guid: Item_NetherShard_T01 PrefabGuid(2103989354)`
  - `Amount: 400`

- [ProjectM.ModifyUnitStatBuff_DOTS](/components/ModifyUnitStatBuff_DOTS)

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType PrimaryAttackSpeed`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0`
  - `SoftCapValue: 1`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- [ProjectM.Buff_Persists_Through_Death](/components/Buff_Persists_Through_Death)

- [ProjectM.Scripting.ScriptSpawn](/components/ScriptSpawn)

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)
