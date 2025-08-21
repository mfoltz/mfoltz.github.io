---
title: SpellPassive_Frost_T04_DarkEnchantment
guid: 1865004925
categories: ['All', 'Spell']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `1865004925`

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

- **ProjectM.Gameplay.Scripting.Script_ApplyBuffWhenDamageFactorTakenDuringDurationData**
  - `HealthFactor: 0.3`
  - `Duration: 2`
  - `InternalCooldown: 30`
  - `CurrentCooldown: 0`
  - `Buff: Buff_General_Shield_DarkEnchantment PrefabGuid(-684755394)`
  - `DamageListenerId: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Passive]({{% relref "components/Passive.md" %}})
  - `Level: 80`

- [ProjectM.Scripting.ScriptDestroy]({{% relref "components/ScriptDestroy.md" %}})
  - `Handled: False`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 1865004925`

- [ProjectM.PassiveRequirementBuffer]({{% relref "components/PassiveRequirementBuffer.md" %}})

- **[0]**
  - `Guid: Item_NetherShard_T02 PrefabGuid(576389135)`
  - `Amount: 600`

- [ProjectM.ModifyUnitStatBuff_DOTS]({{% relref "components/ModifyUnitStatBuff_DOTS.md" %}})

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType DamageReduction`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0`
  - `SoftCapValue: 1`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **ProjectM.Gameplay.Scripting.DamageTakenEntry**

- [ProjectM.Buff_Persists_Through_Death]({{% relref "components/Buff_Persists_Through_Death.md" %}})

- [ProjectM.Scripting.ScriptSpawn]({{% relref "components/ScriptSpawn.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
