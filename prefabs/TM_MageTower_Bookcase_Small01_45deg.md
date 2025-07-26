---
title: TM_MageTower_Bookcase_Small01_45deg
guid: 1527415091
categories:
- All
- TM
nav_exclude: true
search_exclude: true
layout: default
components:
- SpawnPhysicsObjectOnDeath
- PlacementDestroyData
- DestroyData
- DestroyState
- Health
- HealthConstants
- CollisionRadius
- Team
- TileBounds
- TileModelSpatialData
- TileData
- EntityCategory
- StaticTransformCompatible
- ImpactMaterial
- Networked
- UpToDateUserBitMask
- FrameChanged
- NetworkSnapshot
- TileModel
- Rotation
- Translation
- PhysicsCollider
- StaticPhysicsWorldBodyIndex
- LocalToWorld
- LocalTransform
- TeamReference
- TilePosition
- NetworkId
- PrefabGUID
- PlaySequenceOnDeath
- NetSnapshot
- SnapshotFrameChangedBuffer
- TileCollisionTag
- TilePathfindingTag
- TileLineOfSightTag
- TilePlacementTag
- DisableWhenNoPlayersInRange
- MegaStaticCompatibleTag
- StaticTileModel
- DropTable
- StaticPhysicsCollider
- SpawnTag
- Prefab
- Simulate
- BlobAssetOwner
- TileModelRegistrationState
- NetworkSnapshotType
- TileModelLayer
- PhysicsWorldIndex
---

# TM_MageTower_Bookcase_Small01_45deg

**GUID:** `1527415091`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- [SpawnPhysicsObjectOnDeath](/components/SpawnPhysicsObjectOnDeath){:target="_blank"}
  - `PhysicsObjectPrefab: Dynamic_MageTower_Bookcase01_45deg PrefabGuid(-124310159)`
  - `AlwaysSpawn: False`

- [PlacementDestroyData](/components/PlacementDestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Health](/components/Health){:target="_blank"}
  - `MaxHealth: 1`
  - `TimeOfDeath: 0`
  - `Value: 1`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- [HealthConstants](/components/HealthConstants){:target="_blank"}
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: True`
  - `DestroyAfterDuration: 0`
  - `DisableDamageSCT: False`

- [CollisionRadius](/components/CollisionRadius){:target="_blank"}
  - `Radius: 1`

- [Team](/components/Team){:target="_blank"}
  - `Value: 1`
  - `FactionIndex: -1`

- [TileBounds](/components/TileBounds){:target="_blank"}
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- [TileModelSpatialData](/components/TileModelSpatialData){:target="_blank"}
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- [TileData](/components/TileData){:target="_blank"}
  - `Data: Unity.Entities.BlobAssetReference`1[TileBlob] Unity.Entities.BlobAssetReference`1[TileBlob]`

- [EntityCategory](/components/EntityCategory){:target="_blank"}
  - `MainCategoryInt: 1`
  - `UnitCategoryInt: 7`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 0`
  - `ResourceLevel: 0`

- [StaticTransformCompatible](/components/StaticTransformCompatible){:target="_blank"}
  - `UseStaticTransform: False`
  - `StaticTransform: ProjectM.StaticTransformIndex StaticTransformIndex(TerrainChunk: 0,0, TransformIndex: 0)`
  - `NonStaticTransform_Pos: Unity.Mathematics.float2 float2(0f, 0f)`
  - `NonStaticTransform_Height: 0`
  - `NonStaticTransform_Rotation: ProjectM.Tiles.TileRotation None`

- [ImpactMaterial](/components/ImpactMaterial){:target="_blank"}
  - `IntType: 6`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `PlayOnSelf: False`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acfikjcfik`

- [TileModel](/components/TileModel){:target="_blank"}
  - `DisabledTileTypesInt: 0`

- [Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [PhysicsCollider](/components/PhysicsCollider){:target="_blank"}
  - `Value: Unity.Entities.BlobAssetReference`1[Collider] Unity.Entities.BlobAssetReference`1[Collider]`

- [StaticPhysicsWorldBodyIndex](/components/StaticPhysicsWorldBodyIndex){:target="_blank"}
  - `WorldBodyIndex: -1`

- [LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [TeamReference](/components/TeamReference){:target="_blank"}
  - `Value: ModifiableEntity(0:0)`

- [TilePosition](/components/TilePosition){:target="_blank"}
  - `Tile: Unity.Mathematics.int2 int2(0, 0)`
  - `TileRotation: ProjectM.Tiles.TileRotation None`
  - `CompressedHeight: 0`

- [NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 1527415091`

- [PlaySequenceOnDeath](/components/PlaySequenceOnDeath){:target="_blank"}

- **[0]**
  - `SequenceGuid: SequenceGUID 115036222`

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 51`

- **[1]**
  - `Value: 129`

- **[2]**
  - `Value: 10`

- **[3]**
  - `Value: 91`

- **[4]**
  - `Value: 49`

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
  - `Value: 0`

- **[25]**
  - `Value: 0`

- **[26]**
  - `Value: 0`

- **[27]**
  - `Value: 255`

- **[28]**
  - `Value: 255`

- **[29]**
  - `Value: 255`

- **[30]**
  - `Value: 255`

- **[31]**
  - `Value: 1`

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

- **40 total elements but only showing the first 36**
  - *(No fields)*

- [SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer){:target="_blank"}

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

- [TileCollisionTag](/components/TileCollisionTag){:target="_blank"}
  - *(No fields)*

- [TilePathfindingTag](/components/TilePathfindingTag){:target="_blank"}
  - *(No fields)*

- [TileLineOfSightTag](/components/TileLineOfSightTag){:target="_blank"}
  - *(No fields)*

- [TilePlacementTag](/components/TilePlacementTag){:target="_blank"}
  - *(No fields)*

- [DisableWhenNoPlayersInRange](/components/DisableWhenNoPlayersInRange){:target="_blank"}
  - *(No fields)*

- [MegaStaticCompatibleTag](/components/MegaStaticCompatibleTag){:target="_blank"}
  - *(No fields)*

- [StaticTileModel](/components/StaticTileModel){:target="_blank"}
  - *(No fields)*

- [DropTable](/components/DropTable){:target="_blank"}
  - *(No fields)*

- [StaticPhysicsCollider](/components/StaticPhysicsCollider){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*

- [TileModelRegistrationState](/components/TileModelRegistrationState){:target="_blank"}
  - *(No fields)*

- [NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*

- [TileModelLayer](/components/TileModelLayer){:target="_blank"}
  - *(No fields)*

- [PhysicsWorldIndex](/components/PhysicsWorldIndex){:target="_blank"}
  - *(No fields)*
