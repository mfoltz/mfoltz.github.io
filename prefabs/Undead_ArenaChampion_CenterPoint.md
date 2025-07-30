---
title: Undead_ArenaChampion_CenterPoint
guid: -288427482
categories: ['All', 'Undead']
nav_exclude: true
search_exclude: true
layout: default
---

# Undead_ArenaChampion_CenterPoint

**GUID:** `-288427482`

**Categories:** [All](/prefabs/All), [Undead](/prefabs/Undead)

## Components

- **ProjectM.Contest.ContestOwner_Server**
  - `ContestInstance: Entity(0:0)`

- **ProjectM.DuelArea**
  - `OriginalRadius: 17.5`
  - `Radius: 17.5`
  - `StartDuration: 5`
  - `DefeatedBuff: GUID Not Found`
  - `VictoryBuff: Buff_Duel_Victory PrefabGuid(-1497879222)`
  - `HealUpBuff: GUID Not Found`
  - `ActiveBuff: Buff_Duel_Active_VBlood PrefabGuid(1364946010)`
  - `CountdownBuff: Buff_Contest_Countdown PrefabGuid(-782266626)`
  - `OutsideOfAreaBuff: Buff_Contest_OutOfArea PrefabGuid(-964147691)`
  - `StartingSequence: SequenceGUID -679471019`
  - `SuddenDeathSequence: SequenceGUID 405175564`
  - `SuddenDeathFogCurve: ProjectM.CurveReference ProjectM.CurveReference`
  - `SuddenDeathStartTime: 15`
  - `SuddenDeathDuration: 120`

- **ProjectM.VBloodDuelInstance**
  - `VBloodDuelId: 1`

- **ProjectM.AiPointOfInterest**
  - `Type: ProjectM.AiPointOfInterestType BossCenterPosition`

- **ProjectM.PlacementDestroyData**
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.CollisionRadius**
  - `Radius: 1`

- **ProjectM.Team**
  - `Value: 1`
  - `FactionIndex: -1`

- **ProjectM.TileBounds**
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- **ProjectM.TileModelSpatialData**
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- **ProjectM.TileData**
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

- **ProjectM.EntityCategory**
  - `MainCategoryInt: 4`
  - `UnitCategoryInt: 7`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 0`
  - `ResourceLevel: 0`

- **ProjectM.StaticTransformCompatible**
  - `UseStaticTransform: False`
  - `StaticTransform: ProjectM.StaticTransformIndex StaticTransformIndex(TerrainChunk: 0,0, TransformIndex: 0)`
  - `NonStaticTransform_Pos: Unity.Mathematics.float2 float2(0f, 0f)`
  - `NonStaticTransform_Height: 0`
  - `NonStaticTransform_Rotation: ProjectM.Tiles.TileRotation None`

- **ProjectM.Contest.ContestOwner_Shared**
  - `ContestStatus: ProjectM.Contest.ContestStatus Inactive`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_akffggicc`

- **ProjectM.Tiles.TileModel**
  - `DisabledTileTypesInt: 0`

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

- **ProjectM.TeamReference**
  - `Value: ModifiableEntity(0:0)`

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
  - `_Value: -288427482`

- **ProjectM.DuelAreaParticipant**

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.AiPointOfInterest_BossCenterPosition**

- **ProjectM.DisableWhenNoPlayersInRange**

- **ProjectM.Tiles.StaticTileModel**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.TileModelRegistrationState**

- **ProjectM.Network.NetworkSnapshotType**

- **ProjectM.Tiles.TileModelLayer**
