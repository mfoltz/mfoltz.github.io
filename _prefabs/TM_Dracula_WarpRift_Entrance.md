---
title: TM_Dracula_WarpRift_Entrance
guid: 950546355
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

# TM_Dracula_WarpRift_Entrance

**GUID:** `950546355`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- [ProjectM.EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Gameplay.Scripting.Script_Dracula_WarpRiftData](/components/Script_Dracula_WarpRiftData){:target="_blank"}
  - `State: ProjectM.Gameplay.Scripting.Script_Dracula_WarpRiftData+RiftState Open`
  - `OpenSequenceState: SequenceState`
  - `Id: Entity(0:0)`
  - `OpenSequenceGuid: SequenceGUID 736119449`
  - `ChannelingSequenceState: SequenceState`
  - `Id: Entity(0:0)`
  - `ChannelingSequenceGuid: SequenceGUID 1724164611`
  - `ClosedSequenceState: SequenceState`
  - `Id: Entity(0:0)`
  - `ClosedSequenceGuid: SequenceGUID 1899971415`
  - `BeamSequenceGuid: SequenceGUID -480823063`
  - `EnterSequenceGuid: SequenceGUID -1183565755`
  - `ExitSequenceGuid: SequenceGUID -1183565755`
  - `TeleportBuffGuid: Buff_General_DraculaTeleport_In PrefabGuid(-1413417542)`
  - `TimeUntilWarp: 10`
  - `Time: 0`
  - `Radius: 12`
  - `NextExploitCheckTime: 0`

- [ProjectM.Interactable](/components/Interactable){:target="_blank"}
  - `CurrentTargetSequenceGuid: SequenceGUID 0`
  - `IgnoreLineOfSight: False`
  - `IgnoreBlockInteract: False`
  - `UseInteractAbilityName: False`
  - `Disabled: False`

- [ProjectM.InteractedUpon](/components/InteractedUpon){:target="_blank"}
  - `Interacting: False`
  - `BlockBuildingMovement: False`
  - `BlockBuildingDisassemble: False`

- [ProjectM.PlacementDestroyData](/components/PlacementDestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.TileBounds](/components/TileBounds){:target="_blank"}
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- [ProjectM.TileModelSpatialData](/components/TileModelSpatialData){:target="_blank"}
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- [ProjectM.TileData](/components/TileData){:target="_blank"}
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

- [ProjectM.Network.Networked](/components/Networked){:target="_blank"}
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask](/components/UpToDateUserBitMask){:target="_blank"}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- [ProjectM.Network.FrameChanged](/components/FrameChanged){:target="_blank"}
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot](/components/NetworkSnapshot){:target="_blank"}
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_hceehikbd`

- [ProjectM.Tiles.TileModel](/components/TileModel){:target="_blank"}
  - `DisabledTileTypesInt: 0`

- [Unity.Transforms.Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Physics.PhysicsCollider](/components/PhysicsCollider){:target="_blank"}
  - `Value: Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider] Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider]`

- [Unity.Physics.Systems.StaticPhysicsWorldBodyIndex](/components/StaticPhysicsWorldBodyIndex){:target="_blank"}
  - `WorldBodyIndex: -1`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TilePosition](/components/TilePosition){:target="_blank"}
  - `Tile: Unity.Mathematics.int2 int2(0, 0)`
  - `TileRotation: ProjectM.Tiles.TileRotation None`
  - `CompressedHeight: 0`

- [ProjectM.Network.NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 950546355`

- [ProjectM.Gameplay.Scripting.Script_Dracula_WarpRiftTargetData](/components/Script_Dracula_WarpRiftTargetData){:target="_blank"}
  - *(No fields)*

- [ProjectM.InteractAbilityBuffer](/components/InteractAbilityBuffer){:target="_blank"}

- **[0]**
  - `Condition: None`
  - `Ability: AB_Interact_WarpRift_AbilityGroup PrefabGuid(33571279)`
  - `Importance: 0`
  - `HideInteractHUDWhileCasting: False`

- [ProjectM.Network.Snapshot_Script_Dracula_WarpRiftTargetData](/components/Snapshot_Script_Dracula_WarpRiftTargetData){:target="_blank"}
  - *(No fields)*

- [ProjectM.Network.NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 179`

- **[1]**
  - `Value: 47`

- **[2]**
  - `Value: 168`

- **[3]**
  - `Value: 56`

- **[4]**
  - `Value: 106`

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

- **[12]**
  - `Value: 0`

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
  - `Value: 128`

- **[25]**
  - `Value: 63`

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

- **[40]**
  - `Value: 0`

- **[41]**
  - `Value: 0`

- **[42]**
  - `Value: 0`

- **[43]**
  - `Value: 0`

- **[44]**
  - `Value: 0`

- **[45]**
  - `Value: 0`

- **[46]**
  - `Value: 0`

- **[47]**
  - `Value: 0`

- **48 total elements but only showing the first 36**
  - *(No fields)*

- [ProjectM.Network.SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer){:target="_blank"}

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

- **[9]**
  - `Value: -1`

- **[10]**
  - `Value: -1`

- **[11]**
  - `Value: -1`

- **[12]**
  - `Value: -1`

- [ProjectM.DisableWhenNoPlayersInRange](/components/DisableWhenNoPlayersInRange){:target="_blank"}
  - *(No fields)*

- [ProjectM.Scripting.ScriptUpdate](/components/ScriptUpdate){:target="_blank"}
  - *(No fields)*

- [ProjectM.Tiles.StaticTileModel](/components/StaticTileModel){:target="_blank"}
  - *(No fields)*

- [ProjectM.Shared.StaticPhysicsCollider](/components/StaticPhysicsCollider){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*

- [ProjectM.TileModelRegistrationState](/components/TileModelRegistrationState){:target="_blank"}
  - *(No fields)*

- [ProjectM.Network.NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*

- [ProjectM.Tiles.TileModelLayer](/components/TileModelLayer){:target="_blank"}
  - *(No fields)*

- [Unity.Physics.PhysicsWorldIndex](/components/PhysicsWorldIndex){:target="_blank"}
  - *(No fields)*
