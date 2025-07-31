---
title: SpellPassive_Illusion_T04_WickedPower
guid: 21458851
categories: ['All', 'Spell']
nav_exclude: true
search_exclude: true
layout: default
---

# SpellPassive_Illusion_T04_WickedPower

**GUID:** `21458851`

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

- [ProjectM.Gameplay.Scripting.Script_ApplyBuffWhenDamageDealt_DataServer](/components/Script_ApplyBuffWhenDamageDealt_DataServer)
  - `BuffId: Blood_Vampire_Buff_Leech PrefabGuid(-1246704569)`
  - `DamageListenerId: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `Condition: None`
  - `ProcChance: 0.5`
  - `ApplyOnTargetInsteadOfOwner: True`
  - `OnlyTriggerOnCriticalHit: True`
  - `OnlyTriggerOnSpecificDamageType: True`
  - `DamageType: ProjectM.MainDamageType Spell`
  - `RandomizeBuffFromList: True`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Passive](/components/Passive)
  - `Level: 80`

- [ProjectM.Scripting.ScriptDestroy](/components/ScriptDestroy)
  - `Handled: False`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: 21458851`

- [ProjectM.PassiveRequirementBuffer](/components/PassiveRequirementBuffer)

- **[0]**
  - `Guid: Item_NetherShard_T02 PrefabGuid(576389135)`
  - `Amount: 600`

- [ProjectM.ModifyUnitStatBuff_DOTS](/components/ModifyUnitStatBuff_DOTS)

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType SpellCriticalStrikeChance`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0`
  - `SoftCapValue: 1`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **ProjectM.Gameplay.Scripting.Randomized_Buff_Entry**

- **[0]**
  - `BuffType: Blood_Vampire_Buff_Leech PrefabGuid(-1246704569)`

- **[1]**
  - `BuffType: Chaos_Vampire_Buff_Ignite PrefabGuid(348724578)`

- **[2]**
  - `BuffType: Frost_Vampire_Buff_Chill PrefabGuid(27300215)`

- **[3]**
  - `BuffType: Illusion_Vampire_Buff_Weaken PrefabGuid(1723455773)`

- **[4]**
  - `BuffType: Storm_Vampire_Buff_Static PrefabGuid(-1576512627)`

- **[5]**
  - `BuffType: Unholy_Vampire_Buff_Condemn PrefabGuid(-325758519)`

- [ProjectM.Buff_Persists_Through_Death](/components/Buff_Persists_Through_Death)

- [ProjectM.Scripting.ScriptSpawn](/components/ScriptSpawn)

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner)
