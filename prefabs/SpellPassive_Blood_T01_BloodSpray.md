---
title: SpellPassive_Blood_T01_BloodSpray
guid: -1027845865
categories: ['All', 'Spell']
nav_exclude: true
search_exclude: true
layout: default
---

# SpellPassive_Blood_T01_BloodSpray

**GUID:** `-1027845865`

**Categories:** All, Spell

## Components

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.Buff**
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

- **ProjectM.Gameplay.Scripting.Script_CreateGameplayEventIfKilledHasBuff_DataServer**
  - `BuffId: Blood_Vampire_Buff_Leech PrefabGuid(-1246704569)`
  - `GameplayEventId: Local - -1498044581`
  - `OnKillEventListener: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`

- **ProjectM.Gameplay.Scripting.Script_HealOnCriticalBuff_DataServer**
  - `HealModifier: 0.05`
  - `ScaleByStacks: False`
  - `StatChangeListener_Outgoing: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Passive**
  - `Level: 60`

- **ProjectM.Scripting.ScriptDestroy**
  - `Handled: False`

- **ProjectM.Gameplay.Scripting.EvenSpreadCluster_DataServer**
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

- **ProjectM.Gameplay.Scripting.Script_BranchOnRandomGameplayEventData**
  - `Chance: 0.25`
  - `ScaleOnBuffStacks: False`
  - `BuffStacksSource: GUID Not Found`
  - `OnTrue: Local - 1338452366`
  - `OnFalse: Local - 0`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -1027845865`

- **ProjectM.PassiveRequirementBuffer**
  - *(No fields)*

- **[0]**
  - `Guid: Item_NetherShard_T01 PrefabGuid(2103989354)`
  - `Amount: 400`

- **ProjectM.GameplayEventIdMapping**
  - *(No fields)*

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1498044581`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **ProjectM.RunScriptOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `ScriptReference: ProjectM.ScriptMethodReference ProjectM.ScriptMethodReference`

- **ProjectM.ModifyUnitStatBuff_DOTS**
  - *(No fields)*

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

- **ProjectM.GameplayEventListeners**
  - *(No fields)*

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RunScript`
  - `GameplayEventId: Local - -1498044581`

- **ProjectM.Buff_Persists_Through_Death**
  - *(No fields)*

- **ProjectM.RunScriptOnGameplayEvents isn't handled**
  - *(No fields)*

- **ProjectM.Scripting.ScriptSpawn**
  - *(No fields)*

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

- **Unity.Entities.BlobAssetOwner**
  - *(No fields)*

