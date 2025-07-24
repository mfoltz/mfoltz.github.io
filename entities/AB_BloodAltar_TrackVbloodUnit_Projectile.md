---
title: AB_BloodAltar_TrackVbloodUnit_Projectile
guid: 746504391
categories: ['AB', 'All']
nav_exclude: true
search_exclude: false
layout: default
---

# AB_BloodAltar_TrackVbloodUnit_Projectile

**GUID:** `746504391`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [SpellTarget](/components/SpellTarget){:target="_blank"}
  - `Target: NetworkedEntity(0:0)`
  - `DestroyIfNotInteractable: False`

- [Height](/components/Height){:target="_blank"}
  - `LastPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Value: 0`
  - `ServerHeightLevel: 0`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [LifeTime](/components/LifeTime){:target="_blank"}
  - `Duration: 15`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [Script_HomingSpell_DataShared](/components/Script_HomingSpell_DataShared){:target="_blank"}
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

- [LastTranslation](/components/LastTranslation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ManualFirstFrameLastTranslation](/components/ManualFirstFrameLastTranslation){:target="_blank"}
  - `Value: Il2CppSystem.Nullable_Unboxed`1[float3]`

- [Team](/components/Team){:target="_blank"}
  - `Value: 1`
  - `FactionIndex: -1`

- [Networked](/components/Networked){:target="_blank"}
  - `CreateFrame: 0`

- [UpToDateUserBitMask](/components/UpToDateUserBitMask){:target="_blank"}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- [FrameChanged](/components/FrameChanged){:target="_blank"}
  - `Value: -1`

- [NetworkSnapshot](/components/NetworkSnapshot){:target="_blank"}
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_kbhfjjgek`

- [SpellModSetComponent](/components/SpellModSetComponent){:target="_blank"}
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

- [FallToHeight](/components/FallToHeight){:target="_blank"}
  - `Speed: 0`
  - `Gravity: 1`
  - `IsGrounded: False`

- [Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [TeamReference](/components/TeamReference){:target="_blank"}
  - `Value: ModifiableEntity(0:0)`

- [NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 746504391`

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 199`

- **[1]**
  - `Value: 192`

- **[2]**
  - `Value: 126`

- **[3]**
  - `Value: 44`

- **[4]**
  - `Value: 149`

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
  - `Value: 128`

- **[11]**
  - `Value: 63`

- **[12]**
  - `Value: 0`

- **[13]**
  - `Value: 0`

- **[14]**
  - `Value: 112`

- **[15]**
  - `Value: 65`

- **[16]**
  - `Value: 255`

- **[17]**
  - `Value: 255`

- **[18]**
  - `Value: 255`

- **[19]**
  - `Value: 255`

- **[20]**
  - `Value: 1`

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

- **[36]**
  - `Value: 0`

- **[37]**
  - `Value: 0`

- **[38]**
  - `Value: 0`

- **[39]**
  - `Value: 0`

- **40 total elements but only showing the first 36**
  - *(No fields)*

- [SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer){:target="_blank"}

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

- **[7]**
  - `Value: -1`

- **[8]**
  - `Value: -1`

- [SpellModArithmetic](/components/SpellModArithmetic){:target="_blank"}

- **[0]**
  - `Condition: None`
  - `SpellMod: SpellMod_Cyclone_IncreaseLifetime PrefabGuid(2062783787)`
  - `Operation: ProjectM.Shared.SpellModArithmeticOperation AddPercent`
  - `ValueIndex: 0`
  - `Target: ProjectM.Shared.SpellModArithmeticTarget LifeTime_Duration`
  - `TargetIndex: -1`

- [HomingSpellTag](/components/HomingSpellTag){:target="_blank"}
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

- [NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*
