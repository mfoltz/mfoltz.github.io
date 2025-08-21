---
title: TM_Castle_GeneratedRailing_Default01
guid: 1196518637
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `1196518637`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [TM]({{% relref "prefabs/TM.md" %}})

## Components

- [ProjectM.DismantleDestroyData]({{% relref "components/DismantleDestroyData.md" %}})
  - `DismantleDestroyTime: 0.5`
  - `DismantleSequenceInstance: SequenceState`
  - `Id: Entity(0:0)`
  - `SkipDismantleTimeIfReplaced: False`
  - `WasDismantled: False`

- [ProjectM.BlueprintData]({{% relref "components/BlueprintData.md" %}})
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

- [ProjectM.CastleBuilding.CastleHeartConnection]({{% relref "components/CastleHeartConnection.md" %}})
  - `CastleHeartEntity: NetworkedEntity(0:0)`

- [ProjectM.CastleAreaRequirement]({{% relref "components/CastleAreaRequirement.md" %}})
  - `RequirementType: ProjectM.CastleBuilding.Placement.CastleAreaRequirementType AttachToOwnedArea`
  - `BlockPlacementOnRoads: True`
  - `AllowPlaceInObjectsInRepairState: False`
  - `AllowTilesStickingOutOfTerritory: False`

- **ProjectM.LastEditedBy**
  - `User: ProjectM.Network.NetworkId (None)`

- [ProjectM.CastleBuilding.CastleRailing]({{% relref "components/CastleRailing.md" %}})
  - `Type: ProjectM.CastleBuilding.RailingType Wall`

- [ProjectM.PlacementDestroyData]({{% relref "components/PlacementDestroyData.md" %}})
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.TileBounds]({{% relref "components/TileBounds.md" %}})
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- [ProjectM.TileModelSpatialData]({{% relref "components/TileModelSpatialData.md" %}})
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- [ProjectM.TileData]({{% relref "components/TileData.md" %}})
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

- [ProjectM.Tiles.TileModel]({{% relref "components/TileModel.md" %}})
  - `DisabledTileTypesInt: 0`

- [ProjectM.CastleBuilding.CastleBuildingMaxRange]({{% relref "components/CastleBuildingMaxRange.md" %}})
  - `MaxRange: 180`

- [Unity.Transforms.Rotation]({{% relref "components/Rotation.md" %}})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({{% relref "components/Translation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Physics.PhysicsCollider]({{% relref "components/PhysicsCollider.md" %}})
  - `Value: Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider] Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider]`

- [Unity.Physics.Systems.StaticPhysicsWorldBodyIndex]({{% relref "components/StaticPhysicsWorldBodyIndex.md" %}})
  - `WorldBodyIndex: -1`

- [Unity.Transforms.LocalToWorld]({{% relref "components/LocalToWorld.md" %}})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({{% relref "components/LocalTransform.md" %}})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TilePosition]({{% relref "components/TilePosition.md" %}})
  - `Tile: Unity.Mathematics.int2 int2(0, 0)`
  - `TileRotation: ProjectM.Tiles.TileRotation None`
  - `CompressedHeight: 0`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 1196518637`

- [ProjectM.BlueprintRequirementBuffer]({{% relref "components/BlueprintRequirementBuffer.md" %}})

- [ProjectM.CastleBuilding.Placement.RestrictPlacementToMapZones]({{% relref "components/RestrictPlacementToMapZones.md" %}})

- [ProjectM.TileCollisionTag]({{% relref "components/TileCollisionTag.md" %}})

- [ProjectM.TilePathfindingTag]({{% relref "components/TilePathfindingTag.md" %}})

- [ProjectM.TileLineOfSightTag]({{% relref "components/TileLineOfSightTag.md" %}})

- [ProjectM.TilePlacementTag]({{% relref "components/TilePlacementTag.md" %}})

- [ProjectM.DisableWhenNoPlayersInRange]({{% relref "components/DisableWhenNoPlayersInRange.md" %}})

- [ProjectM.Tiles.StaticTileModel]({{% relref "components/StaticTileModel.md" %}})

- [ProjectM.Shared.StaticPhysicsCollider]({{% relref "components/StaticPhysicsCollider.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})

- [ProjectM.TileModelRegistrationState]({{% relref "components/TileModelRegistrationState.md" %}})

- [ProjectM.Tiles.TileModelLayer]({{% relref "components/TileModelLayer.md" %}})

- [Unity.Physics.PhysicsWorldIndex]({{% relref "components/PhysicsWorldIndex.md" %}})
