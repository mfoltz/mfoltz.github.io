---
title: TM_Castle_GeneratedRailing_Default01
guid: 1196518637
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

# TM_Castle_GeneratedRailing_Default01

**GUID:** `1196518637`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- [ProjectM.DismantleDestroyData](/components/DismantleDestroyData)
  - `DismantleDestroyTime: 0.5`
  - `DismantleSequenceInstance: SequenceState`
  - `Id: Entity(0:0)`
  - `SkipDismantleTimeIfReplaced: False`
  - `WasDismantled: False`

- [ProjectM.BlueprintData](/components/BlueprintData)
  - `Entity: Prefab TM_Castle_GeneratedRailing_Default01 PrefabGuid(1196518637) - Entity(41286:2)`
  - `Guid: TM_Castle_GeneratedRailing_Default01 PrefabGuid(1196518637)`
  - `PlaceSequence: SequenceGUID 0`
  - `InvalidPlaceSequence: SequenceGUID 0`
  - `EditSequence: SequenceGUID 0`
  - `InvalidEditSequence: SequenceGUID 0`
  - `BuildingSequence: SequenceGUID 0`
  - `PhasedBuildingSequence: SequenceGUID 0`
  - `DismantledSequence: SequenceGUID 0`
  - `DestroyedSequence: SequenceGUID 0`
  - `RepairedSequence: SequenceGUID 0`
  - `DismantleFraction: 1`
  - `FullDismantleTime: 300`
  - `IsStartBlueprint: False`
  - `IsInventoryItemBuilding: False`
  - `ExitBuildModeWhenBuilt: False`
  - `RequiresLineOfSight: False`
  - `RequiresSuccessfullPathfinding: False`

- [ProjectM.CastleBuilding.CastleHeartConnection](/components/CastleHeartConnection)
  - `CastleHeartEntity: NetworkedEntity(0:0)`

- [ProjectM.CastleAreaRequirement](/components/CastleAreaRequirement)
  - `RequirementType: ProjectM.CastleBuilding.Placement.CastleAreaRequirementType AttachToOwnedArea`
  - `BlockPlacementOnRoads: True`
  - `AllowPlaceInObjectsInRepairState: False`
  - `AllowTilesStickingOutOfTerritory: False`

- **ProjectM.LastEditedBy**
  - `User: ProjectM.Network.NetworkId (None)`

- [ProjectM.CastleBuilding.CastleRailing](/components/CastleRailing)
  - `Type: ProjectM.CastleBuilding.RailingType Wall`

- [ProjectM.PlacementDestroyData](/components/PlacementDestroyData)
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.TileBounds](/components/TileBounds)
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- [ProjectM.TileModelSpatialData](/components/TileModelSpatialData)
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- [ProjectM.TileData](/components/TileData)
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

- [ProjectM.Tiles.TileModel](/components/TileModel)
  - `DisabledTileTypesInt: 0`

- [ProjectM.CastleBuilding.CastleBuildingMaxRange](/components/CastleBuildingMaxRange)
  - `MaxRange: 180`

- [Unity.Transforms.Rotation](/components/Rotation)
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation)
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Physics.PhysicsCollider](/components/PhysicsCollider)
  - `Value: Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider] Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider]`

- [Unity.Physics.Systems.StaticPhysicsWorldBodyIndex](/components/StaticPhysicsWorldBodyIndex)
  - `WorldBodyIndex: -1`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld)
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform)
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TilePosition](/components/TilePosition)
  - `Tile: Unity.Mathematics.int2 int2(0, 0)`
  - `TileRotation: ProjectM.Tiles.TileRotation None`
  - `CompressedHeight: 0`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: 1196518637`

- [ProjectM.BlueprintRequirementBuffer](/components/BlueprintRequirementBuffer)

- [ProjectM.CastleBuilding.Placement.RestrictPlacementToMapZones](/components/RestrictPlacementToMapZones)

- [ProjectM.TileCollisionTag](/components/TileCollisionTag)

- [ProjectM.TilePathfindingTag](/components/TilePathfindingTag)

- [ProjectM.TileLineOfSightTag](/components/TileLineOfSightTag)

- [ProjectM.TilePlacementTag](/components/TilePlacementTag)

- [ProjectM.DisableWhenNoPlayersInRange](/components/DisableWhenNoPlayersInRange)

- [ProjectM.Tiles.StaticTileModel](/components/StaticTileModel)

- [ProjectM.Shared.StaticPhysicsCollider](/components/StaticPhysicsCollider)

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner)

- [ProjectM.TileModelRegistrationState](/components/TileModelRegistrationState)

- [ProjectM.Tiles.TileModelLayer](/components/TileModelLayer)

- [Unity.Physics.PhysicsWorldIndex](/components/PhysicsWorldIndex)
