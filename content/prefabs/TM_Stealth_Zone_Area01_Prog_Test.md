---
title: TM_Stealth_Zone_Area01_Prog_Test
guid: -1275256745
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `-1275256745`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [TM]({{% relref "prefabs/TM.md" %}})

## Components

- [ProjectM.Gameplay.Scripting.Script_StealthBush_Environment_Data]({{% relref "components/Script_StealthBush_Environment_Data.md" %}})
  - `RootEntity: Entity(0:0)`

- [ProjectM.Gameplay.Scripting.RadialZone_Environment_Data]({{% relref "components/RadialZone_Environment_Data.md" %}})
  - `Debuff: Buff_General_Holy_Area_T01 PrefabGuid(1593142604)`

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
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 1f, 0f, -4.371139E-08f)`

- [Unity.Transforms.Translation]({{% relref "components/Translation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(27.5f, 0f, 122.5f)`

- [Unity.Transforms.LocalToWorld]({{% relref "components/LocalToWorld.md" %}})
  - `Value: Unity.Mathematics.float4x4 float4x4(-1f, 0f, -8.742278E-08f, 27.5f,  0f, 1f, 0f, 0f,  8.742278E-08f, 0f, -1f, 122.5f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({{% relref "components/LocalTransform.md" %}})
  - `Position: Unity.Mathematics.float3 float3(27.5f, 0f, 122.5f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 1f, 0f, -4.371139E-08f)`

- [ProjectM.TilePosition]({{% relref "components/TilePosition.md" %}})
  - `Tile: Unity.Mathematics.int2 int2(0, 0)`
  - `TileRotation: ProjectM.Tiles.TileRotation None`
  - `CompressedHeight: 0`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: -1275256745`

- [ProjectM.Gameplay.Scripting.Script_StealthBush_Environment_ActiveStealths]({{% relref "components/Script_StealthBush_Environment_ActiveStealths.md" %}})

- [ProjectM.Gameplay.Scripting.RadialZone_Environment_HitSpheres]({{% relref "components/RadialZone_Environment_HitSpheres.md" %}})

- **[0]**
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Radius: 6`

- [ProjectM.Gameplay.Scripting.Script_StealthBush_Environment_HitSpheres]({{% relref "components/Script_StealthBush_Environment_HitSpheres.md" %}})

- **[0]**
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Radius: 6`

- [ProjectM.Gameplay.Scripting.HolyArea]({{% relref "components/HolyArea.md" %}})

- [ProjectM.DisableWhenNoPlayersInRange]({{% relref "components/DisableWhenNoPlayersInRange.md" %}})

- [ProjectM.Scripting.ScriptSpawn]({{% relref "components/ScriptSpawn.md" %}})

- [ProjectM.Scripting.ScriptUpdate]({{% relref "components/ScriptUpdate.md" %}})

- [ProjectM.Tiles.StaticTileModel]({{% relref "components/StaticTileModel.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})

- [ProjectM.TileModelRegistrationState]({{% relref "components/TileModelRegistrationState.md" %}})

- [ProjectM.Tiles.TileModelLayer]({{% relref "components/TileModelLayer.md" %}})

- [Unity.Physics.PhysicsWorldIndex]({{% relref "components/PhysicsWorldIndex.md" %}})
