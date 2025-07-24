---
title: SpellPassive_Blood_T01_BloodSpray
guid: -1027845865
categories: ['All', 'Spell']
nav_exclude: true
search_exclude: false
layout: default
---

# SpellPassive_Blood_T01_BloodSpray

**GUID:** `-1027845865`

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

- [Script_CreateGameplayEventIfKilledHasBuff_DataServer](/components/Script_CreateGameplayEventIfKilledHasBuff_DataServer){:target="_blank"}
  - `BuffId: Blood_Vampire_Buff_Leech PrefabGuid(-1246704569)`
  - `GameplayEventId: Local - -1498044581`
  - `OnKillEventListener: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`

- [Script_HealOnCriticalBuff_DataServer](/components/Script_HealOnCriticalBuff_DataServer){:target="_blank"}
  - `HealModifier: 0.05`
  - `ScaleByStacks: False`
  - `StatChangeListener_Outgoing: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Passive](/components/Passive){:target="_blank"}
  - `Level: 60`

- [ScriptDestroy](/components/ScriptDestroy){:target="_blank"}
  - `Handled: False`

- [EvenSpreadCluster_DataServer](/components/EvenSpreadCluster_DataServer){:target="_blank"}
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

- [Script_BranchOnRandomGameplayEventData](/components/Script_BranchOnRandomGameplayEventData){:target="_blank"}
  - `Chance: 0.25`
  - `ScaleOnBuffStacks: False`
  - `BuffStacksSource: GUID Not Found`
  - `OnTrue: Local - 1338452366`
  - `OnFalse: Local - 0`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -1027845865`

- [PassiveRequirementBuffer](/components/PassiveRequirementBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_NetherShard_T01 PrefabGuid(2103989354)`
  - `Amount: 400`

- [GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1498044581`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- [RunScriptOnGameplayEvent](/components/RunScriptOnGameplayEvent){:target="_blank"}

- **[0]**
  - `ScriptReference: ProjectM.ScriptMethodReference ProjectM.ScriptMethodReference`

- [ModifyUnitStatBuff_DOTS](/components/ModifyUnitStatBuff_DOTS){:target="_blank"}

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

- [GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RunScript`
  - `GameplayEventId: Local - -1498044581`

- [Buff_Persists_Through_Death](/components/Buff_Persists_Through_Death){:target="_blank"}
  - *(No fields)*

- **ProjectM.RunScriptOnGameplayEvents isn't handled**
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
