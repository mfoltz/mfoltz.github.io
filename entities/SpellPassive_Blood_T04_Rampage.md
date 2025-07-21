---
title: SpellPassive_Blood_T04_Rampage
guid: 596456522
categories: ['All', 'Spell']
nav_exclude: true
search_exclude: true
layout: default
---

# SpellPassive_Blood_T04_Rampage

**GUID:** `596456522`

**Categories:** [All](/prefabs/All), [Spell](/prefabs/Spell)

## Components

- [ProjectM.EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [ProjectM.Buff](/components/Buff){:target="_blank"}
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

- [ProjectM.Gameplay.Scripting.Script_ApplyBuffWhenDamageDealt_DataServer](/components/Script_ApplyBuffWhenDamageDealt_DataServer){:target="_blank"}
  - `BuffId: Buff_General_AttackSpeed_Rampage PrefabGuid(-822514423)`
  - `DamageListenerId: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `Condition: None`
  - `ProcChance: 1`
  - `ApplyOnTargetInsteadOfOwner: False`
  - `OnlyTriggerOnCriticalHit: True`
  - `OnlyTriggerOnSpecificDamageType: True`
  - `DamageType: ProjectM.MainDamageType Physical`
  - `RandomizeBuffFromList: False`

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Passive](/components/Passive){:target="_blank"}
  - `Level: 80`

- [ProjectM.Scripting.ScriptDestroy](/components/ScriptDestroy){:target="_blank"}
  - `Handled: False`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 596456522`

- [ProjectM.PassiveRequirementBuffer](/components/PassiveRequirementBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_NetherShard_T02 PrefabGuid(576389135)`
  - `Amount: 600`

- [ProjectM.ModifyUnitStatBuff_DOTS](/components/ModifyUnitStatBuff_DOTS){:target="_blank"}

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType PhysicalCriticalStrikeChance`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0`
  - `SoftCapValue: 1`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **ProjectM.Gameplay.Scripting.Randomized_Buff_Entry**
  - *(No fields)*

- [ProjectM.Buff_Persists_Through_Death](/components/Buff_Persists_Through_Death){:target="_blank"}
  - *(No fields)*

- [ProjectM.Scripting.ScriptSpawn](/components/ScriptSpawn){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*
