---
title: TM_PortalOneWayExit
guid: 558835178
categories:
- All
- TM
nav_exclude: true
search_exclude: true
layout: default
components:
- DestroyData
- DestroyState
- ChunkPortal
- Networked
- UpToDateUserBitMask
- FrameChanged
- NetworkSnapshot
- Rotation
- Translation
- LocalToWorld
- LocalTransform
- NetworkId
- PrefabGUID
- NetSnapshot
- SnapshotFrameChangedBuffer
- DisableWhenNoPlayersInRange
- SpawnTag
- Prefab
- Simulate
- NetworkSnapshotType
---

# TM_PortalOneWayExit

**GUID:** `558835178`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ChunkPortal](/components/ChunkPortal){:target="_blank"}
  - `FromChunk: ProjectM.Terrain.TerrainChunk 0,0`
  - `FromChunkPortalIndex: 0`
  - `ToChunk: ProjectM.Terrain.TerrainChunk 0,0`
  - `ToChunkPortalIndex: 0`
  - `InPositionOffset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_iddhiekfi`

- [Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(21.25f, 5f, 80.25f)`

- [LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 21.25f,  0f, 1f, 0f, 5f,  0f, 0f, 1f, 80.25f,  0f, 0f, 0f, 1f)`

- [LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(21.25f, 5f, 80.25f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 558835178`

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 234`

- **[1]**
  - `Value: 37`

- **[2]**
  - `Value: 79`

- **[3]**
  - `Value: 33`

- **[4]**
  - `Value: 118`

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
  - `Value: 0`

- **[11]**
  - `Value: 0`

- [SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer){:target="_blank"}

- **[0]**
  - `Value: -1`

- **[1]**
  - `Value: -1`

- [DisableWhenNoPlayersInRange](/components/DisableWhenNoPlayersInRange){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*
