---
title: BP_Castle_Chain_Tree_Spruce_01
guid: 1218240817
categories: ['All', 'BP']
nav_exclude: true
search_exclude: true
layout: default
---

# BP_Castle_Chain_Tree_Spruce_01

**GUID:** `1218240817`

**Categories:** [All](/prefabs/All), [BP](/prefabs/BP)

## Components

- **ProjectM.DismantleDestroyData**
  - `DismantleDestroyTime: 0.75`
  - `DismantleSequenceInstance: SequenceState`
  - `Id: Entity(0:0)`
  - `SkipDismantleTimeIfReplaced: False`
  - `WasDismantled: False`

- **ProjectM.BlueprintData**
  - `Entity: Prefab BP_Castle_Chain_Tree_Spruce_01 PrefabGuid(1218240817) - Entity(29710:2)`
  - `Guid: BP_Castle_Chain_Tree_Spruce_01 PrefabGuid(1218240817)`
  - `PlaceSequence: SequenceGUID -450089786`
  - `InvalidPlaceSequence: SequenceGUID 29614748`
  - `EditSequence: SequenceGUID -450089786`
  - `InvalidEditSequence: SequenceGUID 29614748`
  - `BuildingSequence: SequenceGUID 1867308716`
  - `PhasedBuildingSequence: SequenceGUID 0`
  - `DismantledSequence: SequenceGUID -344174753`
  - `DestroyedSequence: SequenceGUID -344174753`
  - `RepairedSequence: SequenceGUID 0`
  - `DismantleFraction: 0.5`
  - `FullDismantleTime: 300`
  - `IsStartBlueprint: True`
  - `IsInventoryItemBuilding: True`
  - `ExitBuildModeWhenBuilt: False`
  - `RequiresLineOfSight: False`
  - `RequiresSuccessfullPathfinding: False`

- **ProjectM.SpawnChainData+ActiveChildElement**
  - `ChainElementIndex: 1`
  - `ActiveEntity: Entity(0:0)`

- **ProjectM.EditableTileModel**
  - `CurrentEditor: NetworkedEntity(0:0)`
  - `DismantleAbility: AB_Interact_Dismantle_Medium_AbilityGroup PrefabGuid(-449872140)`
  - `PlaceAbility: GUID Not Found`
  - `RepairAbility: GUID Not Found`
  - `IsEdited: False`
  - `IsDismantling: False`
  - `IsRepairing: False`
  - `CanRotateDuringBuild: True`
  - `CanMoveAfterBuild: True`
  - `CanRotateAfterBuild: True`
  - `CanDismantle: True`
  - `CanRepair: False`

- **ProjectM.CastleBuilding.CastleHeartConnection**
  - `CastleHeartEntity: NetworkedEntity(0:0)`

- **ProjectM.CastleAreaRequirement**
  - `RequirementType: ProjectM.CastleBuilding.Placement.CastleAreaRequirementType AttachToOwnedArea`
  - `BlockPlacementOnRoads: True`
  - `AllowPlaceInObjectsInRepairState: False`
  - `AllowTilesStickingOutOfTerritory: False`

- **ProjectM.LastEditedBy**
  - `User: ProjectM.Network.NetworkId (None)`

- **ProjectM.StaticHierarchyData**
  - `Blob: StaticHierarchyBlobAsset`
  - `LocalToParents: Unity.Entities.BlobArray`1[Unity.Mathematics.float4x4] Unity.Entities.BlobArray`1[Unity.Mathematics.float4x4]`

- **ProjectM.PlacementDestroyData**
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.AutoChainInstanceData**
  - `NextTransitionAttempt: -1`

- **ProjectM.SpawnChainData+SpawnChainConstants**
  - `Data: SpawnChainBlobAsset(main 1 out of)`

- **ProjectM.SpawnChainData+SpawnChainInstance**
  - `LoopOnEndOfChain: True`

- **ProjectM.Team**
  - `Value: 1`
  - `FactionIndex: -1`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_afjfgbdcii`

- **ProjectM.Tiles.TileModel**
  - `DisabledTileTypesInt: 0`

- **ProjectM.CastleBuilding.CastleBuildingAttachSettings**
  - `MoveWithParentWhenAttached: True`
  - `DestroyWithParentWhenAttached: True`
  - `LinkDestroyToParentWhenAttached: False`
  - `RestrictMoveWhenAttached: False`
  - `RestrictDismantleWhenAttached: False`
  - `MoveWithParentAlsoMovesOtherParents: False`

- **ProjectM.CastleBuilding.CastleBuildingMaxRange**
  - `MaxRange: 180`

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
  - `_Value: 1218240817`

- **ProjectM.StaticHierarchyBuffer**

- **[0]**
  - `Entity: Prefab GUID Not Found - Entity(29697:2)`
  - `BlobIndex: 0`

- **ProjectM.CastleBuilding.CastleBuildingAttachToParentsBuffer**

- **ProjectM.SpawnChainData+QueuedTransitionRequests**

- **Unity.Entities.LinkedEntityGroup**

- **[0]**
  - `Value: Prefab BP_Castle_Chain_Tree_Spruce_01 PrefabGuid(1218240817) - Entity(29710:2)`

- **[1]**
  - `Value: Prefab GUID Not Found - Entity(29697:2)`

- **ProjectM.Network.Snapshot_CastleBuildingAttachToParentsBuffer**

- **ProjectM.BlueprintRequirementBuffer**

- **[0]**
  - `PrefabGUID: Item_Building_Sapling_Spruce_Cone PrefabGuid(1227483037)`
  - `Amount: 1`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.CastleBuilding.Placement.RestrictPlacementToMapZones**

- **ProjectM.TilePlacementTag**

- **ProjectM.DisableWhenNoPlayersInRange**

- **ProjectM.CastleBuilding.Rebuilding.CastleRebuildCommonTag**

- **ProjectM.CastleBuilding.Rebuilding.CastleRebuildHiddenTag**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.TileModelRegistrationState**

- **ProjectM.Network.NetworkSnapshotType**

- **ProjectM.Tiles.TileModelLayer**
