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

- [Script_ApplyBuffWhenDamageDealt_DataServer](/components/Script_ApplyBuffWhenDamageDealt_DataServer){:target="_blank"}
  - `BuffId: Blood_Vampire_Buff_Leech PrefabGuid(-1246704569)`
  - `DamageListenerId: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `Condition: None`
  - `ProcChance: 0.5`
  - `ApplyOnTargetInsteadOfOwner: True`
  - `OnlyTriggerOnCriticalHit: True`
  - `OnlyTriggerOnSpecificDamageType: True`
  - `DamageType: ProjectM.MainDamageType Spell`
  - `RandomizeBuffFromList: True`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Passive](/components/Passive){:target="_blank"}
  - `Level: 80`

- [ScriptDestroy](/components/ScriptDestroy){:target="_blank"}
  - `Handled: False`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 21458851`

- [PassiveRequirementBuffer](/components/PassiveRequirementBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_NetherShard_T02 PrefabGuid(576389135)`
  - `Amount: 600`

- [ModifyUnitStatBuff_DOTS](/components/ModifyUnitStatBuff_DOTS){:target="_blank"}

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

- [Buff_Persists_Through_Death](/components/Buff_Persists_Through_Death){:target="_blank"}
  - *(No fields)*

- [ScriptSpawn](/components/ScriptSpawn){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*
