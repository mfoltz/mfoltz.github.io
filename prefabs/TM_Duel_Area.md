---
title: TM_Duel_Area
guid: -893175652
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

# TM_Duel_Area

**GUID:** `-893175652`

**Categories:** [All](/prefabs/All/), [TM](/prefabs/TM/)

## Components

- **ProjectM.DuelInstance**
  - `DuelFlagInstance: Entity(0:0)`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.UserOwner**
  - `Owner: NetworkedEntity(0:0)`

- **ProjectM.Contest.ContestOwner_Server**
  - `ContestInstance: Entity(0:0)`

- **ProjectM.DuelArea**
  - `OriginalRadius: 15`
  - `Radius: 15`
  - `StartDuration: 5`
  - `DefeatedBuff: Buff_Duel_Defeated PrefabGuid(2029766917)`
  - `VictoryBuff: Buff_Duel_Victory PrefabGuid(-1497879222)`
  - `HealUpBuff: Buff_Duel_HealUp PrefabGuid(577687477)`
  - `ActiveBuff: Buff_Duel_Active PrefabGuid(508104437)`
  - `CountdownBuff: Buff_Contest_Countdown PrefabGuid(-782266626)`
  - `OutsideOfAreaBuff: Buff_Contest_OutOfArea PrefabGuid(-964147691)`
  - `StartingSequence: SequenceGUID 1618564752`
  - `SuddenDeathSequence: SequenceGUID 405175564`
  - `SuddenDeathFogCurve: ProjectM.CurveReference ProjectM.CurveReference`
  - `SuddenDeathStartTime: 90`
  - `SuddenDeathDuration: 30`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Contest.ContestOwner_Shared**
  - `ContestStatus: ProjectM.Contest.ContestStatus Inactive`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_achcedecgfg`

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

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -893175652`

- **ProjectM.DuelAreaParticipant**
  - *(No fields)*

- **ProjectM.Network.NetSnapshot**
  - *(No fields)*

- **[0]**
  - `Value: 156`

- **[1]**
  - `Value: 56`

- **[2]**
  - `Value: 195`

- **[3]**
  - `Value: 202`

- **[4]**
  - `Value: 62`

- **[5]**
  - `Value: 0`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 0`

- **[9]**
  - `Value: 0`

- **[10]**
  - `Value: 0`

- **[11]**
  - `Value: 112`

- **[12]**
  - `Value: 65`

- **[13]**
  - `Value: 0`

- **[14]**
  - `Value: 0`

- **[15]**
  - `Value: 0`

- **[16]**
  - `Value: 0`

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

- **ProjectM.Network.SnapshotFrameChangedBuffer**
  - *(No fields)*

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

- **ProjectM.DisableWhenNoPlayersInRange**
  - *(No fields)*

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

- **ProjectM.Network.NetworkSnapshotType**
  - *(No fields)*

