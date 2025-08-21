---
title: SpellPassive_Illusion_T04_WickedPower
guid: 21458851
categories: ['All', 'Spell']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `21458851`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Spell]({{% relref "prefabs/Spell.md" %}})

## Components

- [ProjectM.EntityOwner]({{% relref "components/EntityOwner.md" %}})
  - `Owner: Entity(0:0)`

- [ProjectM.Buff]({{% relref "components/Buff.md" %}})
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

- [ProjectM.Gameplay.Scripting.Script_ApplyBuffWhenDamageDealt_DataServer]({{% relref "components/Script_ApplyBuffWhenDamageDealt_DataServer.md" %}})
  - `BuffId: Blood_Vampire_Buff_Leech PrefabGuid(-1246704569)`
  - `DamageListenerId: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `Condition: None`
  - `ProcChance: 0.5`
  - `ApplyOnTargetInsteadOfOwner: True`
  - `OnlyTriggerOnCriticalHit: True`
  - `OnlyTriggerOnSpecificDamageType: True`
  - `DamageType: ProjectM.MainDamageType Spell`
  - `RandomizeBuffFromList: True`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Passive]({{% relref "components/Passive.md" %}})
  - `Level: 80`

- [ProjectM.Scripting.ScriptDestroy]({{% relref "components/ScriptDestroy.md" %}})
  - `Handled: False`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 21458851`

- [ProjectM.PassiveRequirementBuffer]({{% relref "components/PassiveRequirementBuffer.md" %}})

- **[0]**
  - `Guid: Item_NetherShard_T02 PrefabGuid(576389135)`
  - `Amount: 600`

- [ProjectM.ModifyUnitStatBuff_DOTS]({{% relref "components/ModifyUnitStatBuff_DOTS.md" %}})

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

- [ProjectM.Buff_Persists_Through_Death]({{% relref "components/Buff_Persists_Through_Death.md" %}})

- [ProjectM.Scripting.ScriptSpawn]({{% relref "components/ScriptSpawn.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})
