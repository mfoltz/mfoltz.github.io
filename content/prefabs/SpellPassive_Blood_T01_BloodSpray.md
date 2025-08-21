---
title: SpellPassive_Blood_T01_BloodSpray
guid: -1027845865
categories: ['All', 'Spell']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `-1027845865`

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

- [ProjectM.Gameplay.Scripting.Script_CreateGameplayEventIfKilledHasBuff_DataServer]({{% relref "components/Script_CreateGameplayEventIfKilledHasBuff_DataServer.md" %}})
  - `BuffId: Blood_Vampire_Buff_Leech PrefabGuid(-1246704569)`
  - `GameplayEventId: Local - -1498044581`
  - `OnKillEventListener: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`

- [ProjectM.Gameplay.Scripting.Script_HealOnCriticalBuff_DataServer]({{% relref "components/Script_HealOnCriticalBuff_DataServer.md" %}})
  - `HealModifier: 0.05`
  - `ScaleByStacks: False`
  - `StatChangeListener_Outgoing: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Passive]({{% relref "components/Passive.md" %}})
  - `Level: 60`

- [ProjectM.Scripting.ScriptDestroy]({{% relref "components/ScriptDestroy.md" %}})
  - `Handled: False`

- [ProjectM.Gameplay.Scripting.EvenSpreadCluster_DataServer]({{% relref "components/EvenSpreadCluster_DataServer.md" %}})
  - `OffsetAngle: 0`
  - `RandomAngle: 6.2831855`
  - `NewThrowEntity: AB_General_HealingOrb_Leech_Throw PrefabGuid(1951858055)`
  - `Count: 1`
  - `IndividualRandom: False`
  - `UseAimDirection: False`
  - `AlwaysMaxRange: False`
  - `OnSpawn: False`
  - `OnDestroy: False`
  - `ListenerEventId: Local - 1338452366`
  - `UseGameplayEventTargetPosition: True`
  - `TryFindThrowLocationIterations: 1`

- [ProjectM.Gameplay.Scripting.Script_BranchOnRandomGameplayEventData]({{% relref "components/Script_BranchOnRandomGameplayEventData.md" %}})
  - `Chance: 0.25`
  - `ScaleOnBuffStacks: False`
  - `BuffStacksSource: GUID Not Found`
  - `OnTrue: Local - 1338452366`
  - `OnFalse: Local - 0`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: -1027845865`

- [ProjectM.PassiveRequirementBuffer]({{% relref "components/PassiveRequirementBuffer.md" %}})

- **[0]**
  - `Guid: Item_NetherShard_T01 PrefabGuid(2103989354)`
  - `Amount: 400`

- [ProjectM.GameplayEventIdMapping]({{% relref "components/GameplayEventIdMapping.md" %}})

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1498044581`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- [ProjectM.RunScriptOnGameplayEvent]({{% relref "components/RunScriptOnGameplayEvent.md" %}})

- **[0]**
  - `ScriptReference: ProjectM.ScriptMethodReference ProjectM.ScriptMethodReference`

- [ProjectM.ModifyUnitStatBuff_DOTS]({{% relref "components/ModifyUnitStatBuff_DOTS.md" %}})

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

- [ProjectM.GameplayEventListeners]({{% relref "components/GameplayEventListeners.md" %}})

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RunScript`
  - `GameplayEventId: Local - -1498044581`

- [ProjectM.Buff_Persists_Through_Death]({{% relref "components/Buff_Persists_Through_Death.md" %}})

- **ProjectM.RunScriptOnGameplayEvents isn't handled**

- [ProjectM.Scripting.ScriptSpawn]({{% relref "components/ScriptSpawn.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})
