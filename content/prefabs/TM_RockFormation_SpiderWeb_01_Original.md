---
title: TM_RockFormation_SpiderWeb_01_Original
guid: 445376197
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `445376197`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [TM]({{% relref "prefabs/TM.md" %}})

## Components

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
  - `_Value: 445376197`

- [ProjectM.TileCollisionTag]({{% relref "components/TileCollisionTag.md" %}})

- [ProjectM.TilePathfindingTag]({{% relref "components/TilePathfindingTag.md" %}})

- [ProjectM.TileLineOfSightTag]({{% relref "components/TileLineOfSightTag.md" %}})

- [ProjectM.TilePlacementTag]({{% relref "components/TilePlacementTag.md" %}})

- [ProjectM.Tiles.StaticTileModel]({{% relref "components/StaticTileModel.md" %}})

- [ProjectM.Shared.StaticPhysicsCollider]({{% relref "components/StaticPhysicsCollider.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})

- [ProjectM.TileModelRegistrationState]({{% relref "components/TileModelRegistrationState.md" %}})

- [ProjectM.Tiles.TileModelLayer]({{% relref "components/TileModelLayer.md" %}})

- [Unity.Physics.PhysicsWorldIndex]({{% relref "components/PhysicsWorldIndex.md" %}})
