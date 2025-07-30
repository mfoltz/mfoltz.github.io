---
title: Buff_BloodBuff_Creature_Tier4_Empower
guid: -604757170
categories: ['All', 'Buff']
nav_exclude: true
search_exclude: true
layout: default
---

# Buff_BloodBuff_Creature_Tier4_Empower

**GUID:** `-604757170`

**Categories:** [All](/prefabs/All), [Buff](/prefabs/Buff)

## Components

- **ProjectM.Attach**
  - `Parent: Entity(0:0)`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.Buff**
  - `StartTimeUnmodified: 0`
  - `Target: Entity(0:0)`
  - `BuffType: ProjectM.BuffType Replace`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: True`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Buff`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.BuffCategory**
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- **ProjectM.LifeTime**
  - `Duration: 5`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_ajchjhccfg`

- **ProjectM.Gameplay.Scripting.ScaleWithBloodEfficiency**
  - `ScaleLifeTime: False`
  - `ScaleAbsorb: False`
  - `ScaleModifyUnitStat: True`
  - `ScaleHealOnGameplayEvent: True`
  - `ScaleDealDamageOnGameplayEvent: False`
  - `ScaleModifyMovementSpeed: False`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -604757170`

- **ProjectM.CreateGameplayEventsOnSpawn**

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget Owner`

- **ProjectM.HealOnGameplayEvent**

- **[0]**
  - `Health: 0`
  - `HealthPercent: 0.05`
  - `HealthPerSpellPower: 0`
  - `showSCT: True`
  - `TrueHealing: False`
  - `Who: ProjectM.HealOnGameplayEventWho BuffTarget`
  - `MultiplyMainFactorWithStacks: False`

- **ProjectM.GameplayEventIdMapping**

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -112044381`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **ProjectM.ModifyUnitStatBuff_DOTS**

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType HardCapped`
  - `StatType: ProjectM.UnitStatType PrimaryAttackSpeed`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0.25`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **[1]**
  - `AttributeCapType: ProjectM.AttributeCapType HardCapped`
  - `StatType: ProjectM.UnitStatType BonusPhysicalPower`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0.25`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **ProjectM.GameplayEventListeners**

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Heal`
  - `GameplayEventId: Local - -112044381`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.Gameplay.Scripting.ScaleModifyUnitStatWithBloodEfficiency_Data**

- **[0]**
  - `StatType: ProjectM.UnitStatType PrimaryAttackSpeed`

- **[1]**
  - `StatType: ProjectM.UnitStatType BonusPhysicalPower`

- **ProjectM.Gameplay.Scripting.ScaleHealOnGameplayEventWithBloodEfficiency_Data**

- **[0]**
  - `EventId: Local - -112044381`

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.Network.NetworkSnapshotType**
