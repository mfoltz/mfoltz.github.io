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

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.Gameplay.Scripting.Script_Dracula_WarpRiftData**
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

- **ProjectM.Interactable**
  - `CurrentTargetSequenceGuid: SequenceGUID 0`
  - `IgnoreLineOfSight: False`
  - `IgnoreBlockInteract: False`
  - `UseInteractAbilityName: False`
  - `Disabled: False`

- **ProjectM.InteractedUpon**
  - `Interacting: False`
  - `BlockBuildingMovement: False`
  - `BlockBuildingDisassemble: False`

- **ProjectM.PlacementDestroyData**
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.TileBounds**
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- **ProjectM.TileModelSpatialData**
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- **ProjectM.TileData**
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_hceehikbd`

- **ProjectM.Tiles.TileModel**
  - `DisabledTileTypesInt: 0`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **Unity.Physics.PhysicsCollider**
  - `Value: Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider] Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider]`

- **Unity.Physics.Systems.StaticPhysicsWorldBodyIndex**
  - `WorldBodyIndex: -1`

- **Unity.Transforms.LocalToWorld**
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- **Unity.Transforms.LocalTransform**
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **ProjectM.TilePosition**
  - `Tile: Unity.Mathematics.int2 int2(0, 0)`
  - `TileRotation: ProjectM.Tiles.TileRotation None`
  - `CompressedHeight: 0`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 950546355`

- **ProjectM.Gameplay.Scripting.Script_Dracula_WarpRiftTargetData**

- **ProjectM.InteractAbilityBuffer**

- **[0]**
  - `Condition: None`
  - `Ability: AB_Interact_WarpRift_AbilityGroup PrefabGuid(33571279)`
  - `Importance: 0`
  - `HideInteractHUDWhileCasting: False`

- **ProjectM.Network.Snapshot_Script_Dracula_WarpRiftTargetData**

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.DisableWhenNoPlayersInRange**

- **ProjectM.Scripting.ScriptUpdate**

- **ProjectM.Tiles.StaticTileModel**

- **ProjectM.Shared.StaticPhysicsCollider**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.TileModelRegistrationState**

- **ProjectM.Network.NetworkSnapshotType**

- **ProjectM.Tiles.TileModelLayer**

- **Unity.Physics.PhysicsWorldIndex**
