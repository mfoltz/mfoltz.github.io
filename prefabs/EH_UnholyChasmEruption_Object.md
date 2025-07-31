---
title: EH_UnholyChasmEruption_Object
guid: 1428486515
categories: ['All', 'EH']
nav_exclude: true
search_exclude: true
layout: default
---

# EH_UnholyChasmEruption_Object

**GUID:** `1428486515`

**Categories:** [All](/prefabs/All), [EH](/prefabs/EH)

## Components

- [ProjectM.FactionReference](/components/FactionReference)
  - `FactionGuid: ModifiablePrefabGUID PrefabGuid(929074293)`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age](/components/Age)
  - `Value: 0`

- [ProjectM.LifeTime](/components/LifeTime)
  - `Duration: 15`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.Health](/components/Health)
  - `MaxHealth: 1`
  - `TimeOfDeath: 0`
  - `Value: 1`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- [ProjectM.HealthConstants](/components/HealthConstants)
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: True`
  - `DestroyAfterDuration: 0`
  - `DisableDamageSCT: False`

- [ProjectM.LastTranslation](/components/LastTranslation)
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Team](/components/Team)
  - `Value: 2`
  - `FactionIndex: 29`

- [ProjectM.EntityCategory](/components/EntityCategory)
  - `MainCategoryInt: 4`
  - `UnitCategoryInt: 3`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 0`
  - `ResourceLevel: 0`

- [ProjectM.UnitLevel](/components/UnitLevel)
  - `Level: 50`
  - `HideLevel: False`

- [ProjectM.UnitLevelServerData](/components/UnitLevelServerData)
  - `HealthUnitBaseStatsTypeInt: 0`
  - `UnitBaseStatsTypeInt: 1`

- [ProjectM.UnitStats](/components/UnitStats)
  - `PhysicalPower: 44.67777`
  - `SpellPower: 44.67777`
  - `ResourcePower: 30`
  - `SiegePower: 14`
  - `PhysicalResistance: 0`
  - `SpellResistance: 0`
  - `FireResistance: 0`
  - `PassiveHealthRegen: 1`
  - `CCReduction: 0`
  - `HealthRecovery: 1`
  - `DamageReduction: 0`
  - `HealingReceived: 0`
  - `ReducedBloodDrain: 0`
  - `BloodDrainMultiplier: 1`
  - `CorruptionDamageReduction: 1`

- [ProjectM.Network.Networked](/components/Networked)
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask](/components/UpToDateUserBitMask)
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.FrameChanged](/components/FrameChanged)
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot](/components/NetworkSnapshot)
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_jigekbbhd`

- [Unity.Transforms.Rotation](/components/Rotation)
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation)
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Gameplay.Scripting.EvenSpreadCluster_Tick_DataServer](/components/EvenSpreadCluster_Tick_DataServer)
  - `OffsetAngle: 0`
  - `RandomAngle: 6.2831855`
  - `RotationPerTick: 0.7853982`
  - `Count: 2`
  - `TicksDone: 0`
  - `IndividualRandom: True`
  - `UseAimDirection: False`
  - `UseSelfRotation: False`
  - `UseAIReturnPosAsOrigo: False`
  - `AlwaysMaxRange: False`
  - `SpawnOffset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `IgnoreCollision: False`
  - `FullCircleSpread: True`
  - `SpawnPrefabInsteadIfConditionTrue: GUID Not Found`
  - `Condition: None`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld)
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform)
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TeamReference](/components/TeamReference)
  - `Value: ModifiableEntity(0:0)`

- [ProjectM.Network.NetworkId](/components/NetworkId)
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: 1428486515`

- [ProjectM.CreateGameplayEventsOnTick](/components/CreateGameplayEventsOnTick)

- **[0]**
  - `EventId: Local - -1486120159`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `TickInterval: 2`
  - `TickTime: -0`
  - `MaxTicks: 3`
  - `CallScriptOnTick: False`
  - `RandomTickOffset: 0`
  - `RandomTickInterval: 0`
  - `ResetWhenBuffStacksChanged: False`
  - `ResetWhenCastingAbility: GUID Not Found`

- [ProjectM.GameplayEventIdMapping](/components/GameplayEventIdMapping)

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1486120159`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- [ProjectM.RunScriptOnGameplayEvent](/components/RunScriptOnGameplayEvent)

- **[0]**
  - `ScriptReference: ProjectM.ScriptMethodReference ProjectM.ScriptMethodReference`

- [ProjectM.GameplayEventListeners](/components/GameplayEventListeners)

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RunScript`
  - `GameplayEventId: Local - -1486120159`

- [ProjectM.Network.NetSnapshot](/components/NetSnapshot)

- **[0]**
  - `Value: 115`

- **[1]**
  - `Value: 249`

- **[2]**
  - `Value: 36`

- **[3]**
  - `Value: 85`

- **[4]**
  - `Value: 141`

- **[5]**
  - `Value: 1`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 0`

- **[9]**
  - `Value: 0`

- **[10]**
  - `Value: 112`

- **[11]**
  - `Value: 65`

- **[12]**
  - `Value: 29`

- **[13]**
  - `Value: 0`

- **[14]**
  - `Value: 0`

- **[15]**
  - `Value: 0`

- **[16]**
  - `Value: 2`

- **[17]**
  - `Value: 0`

- **[18]**
  - `Value: 0`

- **[19]**
  - `Value: 0`

- **[20]**
  - `Value: 0`

- **[21]**
  - `Value: 0`

- **[22]**
  - `Value: 0`

- **[23]**
  - `Value: 0`

- **[24]**
  - `Value: 0`

- **[25]**
  - `Value: 0`

- **[26]**
  - `Value: 0`

- **[27]**
  - `Value: 0`

- **[28]**
  - `Value: 0`

- **[29]**
  - `Value: 0`

- **[30]**
  - `Value: 0`

- **[31]**
  - `Value: 0`

- **[32]**
  - `Value: 0`

- **[33]**
  - `Value: 0`

- **[34]**
  - `Value: 0`

- **[35]**
  - `Value: 0`

- [ProjectM.Network.SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer)

- **[0]**
  - `Value: -1`

- **[1]**
  - `Value: -1`

- **[2]**
  - `Value: -1`

- **[3]**
  - `Value: -1`

- **[4]**
  - `Value: -1`

- **[5]**
  - `Value: -1`

- **[6]**
  - `Value: -1`

- [ProjectM.Gameplay.Scripting.Throw_Prefabs_To_Spawn](/components/Throw_Prefabs_To_Spawn)

- **[0]**
  - `Value: EH_UnholyChasmEruption_Throw PrefabGuid(-995980518)`

- [ProjectM.DisableWhenNoPlayersInRange](/components/DisableWhenNoPlayersInRange)

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner)

- [ProjectM.Network.NetworkSnapshotType](/components/NetworkSnapshotType)

- [Unity.Physics.PhysicsWorldIndex](/components/PhysicsWorldIndex)
