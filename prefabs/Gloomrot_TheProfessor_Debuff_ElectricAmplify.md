---
title: Gloomrot_TheProfessor_Debuff_ElectricAmplify
guid: -343432994
categories: ['All', 'Remainders']
nav_exclude: true
search_exclude: true
layout: default
---

# Gloomrot_TheProfessor_Debuff_ElectricAmplify

**GUID:** `-343432994`

**Categories:** [All](/prefabs/All), [Remainders](/prefabs/Remainders)

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
  - `MaxStacks: 100`
  - `ResetAge: True`
  - `IncreaseStacks: True`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Debuff`

- **ProjectM.AmplifyBuff**
  - `AmplifyModifier: 0.04`

- **ProjectM.AmplifyStackModifier**
  - `BaseValue: 0.04`
  - `Modifier: 1`

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
  - `Duration: 45`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_ajchjhccfg`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -343432994`

- **ProjectM.Gameplay.Scripting.Script_CreateGameplayEventOnDamageTakenToEntityCategory_DataServer**

- **[0]**
  - `TargetUnitCategory: ProjectM.UnitCategory Human`
  - `TargetMainCategory: ProjectM.MainEntityCategory Unit`
  - `OnDamageTakenListener: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `GameplayEventId: Local - -1492877716`
  - `DamageType: ProjectM.MainDamageType Spell`
  - `FilterByUnitCategory: False`
  - `FilterByEntityCategory: False`
  - `FilterByDamageType: True`
  - `IsBuffTarget: True`
  - `IsStatChangeTarget: False`
  - `TriggerOnZeroDamage: False`
  - `TriggerOnDots: True`
  - `RandomTriggerChance: 1`
  - `Condition: None`

- **ProjectM.GameplayEventIdMapping**

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0.1`
  - `GameplayEventId: Local - -1492877716`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **ProjectM.PlayImpactOnGameplayEvent**

- **[0]**
  - `PrimarySequenceGuid: SequenceGUID 2061504361`
  - `ImpactMappingGuid: Magic_ImpactMapping PrefabGuid(-1184337946)`
  - `SkipMaterialSequence: False`
  - `RotationOffsetEulerMin: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `RotationOffsetEulerMax: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget ImpactLocation`

- **ProjectM.GameplayEventListeners**

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlayImpact`
  - `GameplayEventId: Local - -1492877716`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.Buff_Destroy_On_Owner_Death**

- **ProjectM.Scripting.ScriptSpawn**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.Network.NetworkSnapshotType**
