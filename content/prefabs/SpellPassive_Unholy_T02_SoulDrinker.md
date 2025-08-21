---
title: SpellPassive_Unholy_T02_SoulDrinker
guid: -1612317745
categories: ['All', 'Spell']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `-1612317745`

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

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Passive]({{% relref "components/Passive.md" %}})
  - `Level: 60`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: -1612317745`

- [ProjectM.PassiveRequirementBuffer]({{% relref "components/PassiveRequirementBuffer.md" %}})

- **[0]**
  - `Guid: Item_NetherShard_T01 PrefabGuid(2103989354)`
  - `Amount: 400`

- [ProjectM.ModifyUnitStatBuff_DOTS]({{% relref "components/ModifyUnitStatBuff_DOTS.md" %}})

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType FeedCooldownRecoveryRate`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0`
  - `SoftCapValue: 2`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- [ProjectM.Buff_Persists_Through_Death]({{% relref "components/Buff_Persists_Through_Death.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
