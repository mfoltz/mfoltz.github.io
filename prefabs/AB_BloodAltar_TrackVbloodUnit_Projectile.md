---
title: AB_BloodAltar_TrackVbloodUnit_Projectile
guid: 746504391
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_BloodAltar_TrackVbloodUnit_Projectile

**GUID:** `746504391`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.SpellTarget**
  - `Target: NetworkedEntity(0:0)`
  - `DestroyIfNotInteractable: False`

- **ProjectM.Height**
  - `LastPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Value: 0`
  - `ServerHeightLevel: 0`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.LifeTime**
  - `Duration: 15`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.Script_HomingSpell_DataShared**
  - `SyncPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `SyncRotation: UnityEngine.Quaternion (0.00000, 0.00000, 0.00000, 0.00000)`
  - `SyncServerTime: 0`
  - `SyncTargetPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `LastSyncedServerTime: 0`
  - `DistanceBasedData: ProjectM.Homing_DistanceBasedData ProjectM.Homing_DistanceBasedData`
  - `PreHomingSpeedData: ProjectM.Homing_SpeedLerpData ProjectM.Homing_SpeedLerpData`
  - `PreHomingRangeData: ProjectM.Homing_RangeLerpData ProjectM.Homing_RangeLerpData`
  - `HomingData: ProjectM.Homing_LerpData ProjectM.Homing_LerpData`
  - `PreHomingMode: ProjectM.Script_HomingSpell_DataShared+PreHomingModeType None`
  - `Type: ProjectM.Script_HomingSpell_DataShared+HomingSpellType LifeTimeBased`
  - `PreHomingDuration: 0`
  - `PreHomingWait: 0`
  - `InitialHeight: 0`
  - `GameplayHeight: 0`
  - `HomingInitiated: False`
  - `ResetHitTriggersOnChangeHomingMode: True`
  - `TriggerHitBeforeReturning: False`
  - `AllowHomingHeight: True`

- **ProjectM.LastTranslation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.ManualFirstFrameLastTranslation**
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- **ProjectM.Team**
  - `Value: 1`
  - `FactionIndex: -1`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_kbhfjjgek`

- **ProjectM.Shared.SpellModSetComponent**
  - `SpellMods: SpellModSet`
  - `SyncId: 0`
  - `Mod0: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod1: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod2: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod3: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod4: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod5: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod6: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod7: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Count: 0`

- **ProjectM.Shared.FallToHeight**
  - `Speed: 0`
  - `Gravity: 1`
  - `IsGrounded: False`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **Unity.Transforms.LocalToWorld**
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- **Unity.Transforms.LocalTransform**
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **ProjectM.TeamReference**
  - `Value: ModifiableEntity(0:0)`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 746504391`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.Shared.SpellModArithmetic**

- **[0]**
  - `Condition: None`
  - `SpellMod: SpellMod_Cyclone_IncreaseLifetime PrefabGuid(2062783787)`
  - `Operation: ProjectM.Shared.SpellModArithmeticOperation AddPercent`
  - `ValueIndex: 0`
  - `Target: ProjectM.Shared.SpellModArithmeticTarget LifeTime_Duration`
  - `TargetIndex: -1`

- **ProjectM.HomingSpellTag**

- **ProjectM.Scripting.ScriptSpawn**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.Network.NetworkSnapshotType**
