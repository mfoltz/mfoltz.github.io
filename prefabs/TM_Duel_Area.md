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

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

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

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.DisableWhenNoPlayersInRange**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **ProjectM.Network.NetworkSnapshotType**
