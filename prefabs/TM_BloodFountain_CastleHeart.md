---
title: TM_BloodFountain_CastleHeart
guid: -485210554
categories:
- All
- TM
nav_exclude: true
search_exclude: true
layout: default
components:
- DismantleDestroyData
- BlueprintData
- BuffResistances
- UserOwner
- WorkstationAssignedServant
- EditableTileModel
- CastleHeart
- CastleHeartConnection
- CastleFloor
- CastleFloorRoof
- CastleRoomConnection
- CastleDecayAndRegen
- CastleAreaRequirement
- DurabilityTarget
- Interactable
- InteractedUpon
- CastleRebuildPhaseState
- StationServants
- CastleWorkstation
- PlacementDestroyData
- DestroyData
- DestroyState
- Buffable
- CreatedTime
- Health
- HealthConstants
- Immortal
- InventoryOwner
- CollisionRadius
- Team
- TileBounds
- TileModelSpatialData
- TileData
- BuffableFlagState
- EntityCategory
- StaticTransformCompatible
- ImpactMaterial
- Networked
- UpToDateUserBitMask
- SyncToUserBitMask
- FrameChanged
- NetworkSnapshot
- SyncBoundingBox
- TileModel
- CastleBuildingAttachSettings
- CastleBuildingMaxRange
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
- CastleBuildingAttachToParentsBuffer
- CastleBuildingAttachedChildrenBuffer
- BuffBuffer
- InventoryInstanceElement
- SyncToUserBuffer
- ActiveServantMission
- CastleTeleporterElement
- InteractAbilityBuffer
- Snapshot_ActiveServantMission
- Snapshot_CastleBuildingAttachedChildrenBuffer
- Snapshot_CastleBuildingAttachToParentsBuffer
- Snapshot_CastleMemberNames
- Snapshot_CastleTeleporterElement
- Snapshot_InventoryInstanceElement
- BlueprintRequirementBuffer
- AttachMapIconsToEntity
- RefinementstationRecipesBuffer
- NetSnapshot
- SnapshotFrameChangedBuffer
- CastleMemberNames
- MoveStopTrigger
- RestrictPlacementToMapZones
- TileCollisionTag
- TilePathfindingTag
- TileHeightTag
- TileLineOfSightTag
- TilePlacementTag
- ScriptSpawn
- RequireGroundedTag
- SpawnTag
- Prefab
- Simulate
- BlobAssetOwner
- TileModelRegistrationState
- NetworkSnapshotType
- TileModelLayer
- PhysicsWorldIndex
---

# TM_BloodFountain_CastleHeart

**GUID:** `-485210554`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- [DismantleDestroyData](/components/DismantleDestroyData){:target="_blank"}
  - `DismantleDestroyTime: 0.75`
  - `DismantleSequenceInstance: SequenceState`
  - `Id: Entity(0:0)`
  - `SkipDismantleTimeIfReplaced: False`
  - `WasDismantled: False`

- [BlueprintData](/components/BlueprintData){:target="_blank"}
  - `Entity: Prefab TM_BloodFountain_CastleHeart PrefabGuid(-485210554) - Entity(7155:3)`
  - `Guid: TM_BloodFountain_CastleHeart PrefabGuid(-485210554)`
  - `PlaceSequence: SequenceGUID -450089786`
  - `InvalidPlaceSequence: SequenceGUID 29614748`
  - `EditSequence: SequenceGUID -450089786`
  - `InvalidEditSequence: SequenceGUID 29614748`
  - `BuildingSequence: SequenceGUID 1733594134`
  - `PhasedBuildingSequence: SequenceGUID -1982272969`
  - `DismantledSequence: SequenceGUID 189290689`
  - `DestroyedSequence: SequenceGUID 189290689`
  - `RepairedSequence: SequenceGUID 1733594134`
  - `DismantleFraction: 0`
  - `FullDismantleTime: 300`
  - `IsStartBlueprint: False`
  - `IsInventoryItemBuilding: False`
  - `ExitBuildModeWhenBuilt: False`
  - `RequiresLineOfSight: False`
  - `RequiresSuccessfullPathfinding: True`

- [BuffResistances](/components/BuffResistances){:target="_blank"}
  - `SettingsEntity: ModifiableEntity(0:0)`
  - `InitialSettingGuid: BuffResistance_Structures PrefabGuid(-641281679)`

- [UserOwner](/components/UserOwner){:target="_blank"}
  - `Owner: NetworkedEntity(0:0)`

- [WorkstationAssignedServant](/components/WorkstationAssignedServant){:target="_blank"}
  - `ServantEntity: Entity(0:0)`

- [EditableTileModel](/components/EditableTileModel){:target="_blank"}
  - `CurrentEditor: NetworkedEntity(0:0)`
  - `DismantleAbility: AB_Interact_Dismantle_Medium_AbilityGroup PrefabGuid(-449872140)`
  - `PlaceAbility: GUID Not Found`
  - `RepairAbility: AB_Interact_Repair_Medium_AbilityGroup PrefabGuid(109530037)`
  - `IsEdited: False`
  - `IsDismantling: False`
  - `IsRepairing: False`
  - `CanRotateDuringBuild: True`
  - `CanMoveAfterBuild: True`
  - `CanRotateAfterBuild: True`
  - `CanDismantle: True`
  - `CanRepair: False`

- [CastleHeart](/components/CastleHeart){:target="_blank"}
  - `State: ProjectM.CastleBuilding.CastleHeartState None`
  - `ActiveEvent: ProjectM.CastleBuilding.CastleHeartEvent None`
  - `Level: 1`
  - `TombCount: 0`
  - `NestCount: 0`
  - `SafetyBoxCount: 0`
  - `EyeStructuresCount: 0`
  - `PrisonCellCount: 0`
  - `ServantCount: 0`
  - `NetherGateCount: 0`
  - `ThroneOfDarknessCount: 0`
  - `MusicPlayerCount: 0`
  - `ArenaStationCount: 0`
  - `RoutingStationsCount: 0`
  - `StationsWithOutputRoutedCount: 0`
  - `FloorCount: 0`
  - `CastleTerritoryId: MapZoneID(ZoneId: 0, ZoneIndex: -1, Chunk: (0, 0))`
  - `CastleTerritoryEntity: Entity(0:0)`
  - `FuelQuantity: 0`
  - `FuelEndTime: 0`
  - `EventEndTime: 0`
  - `RaidProtectionEndTime: 0`
  - `LastRelocationTime: -∞`
  - `LastAnnouncementTime: 0`
  - `Data: Unity.Entities.BlobAssetReference`1[CastleHeartBlobData] Unity.Entities.BlobAssetReference`1[CastleHeartBlobData]`
  - `SharedCastleInventoryPrefab: CastleHeart_SharedInventoryManager PrefabGuid(-1882137875)`
  - `LastUserOwner: NetworkedEntity(0:0)`

- [CastleHeartConnection](/components/CastleHeartConnection){:target="_blank"}
  - `CastleHeartEntity: NetworkedEntity(0:0)`

- **ProjectM.CastleBuilding.SharedCastleInventoryConnection**
  - `SharedInventoryManager: NetworkedEntity(0:0)`

- [CastleFloor](/components/CastleFloor){:target="_blank"}
  - `FloorType: ProjectM.CastleBuilding.CastleFloorTypes UniversalFloor`
  - `RoofType: ProjectM.Roofs.RoofCategoryType CastleRoof`
  - `GroundConnectionType: ProjectM.CastleBuilding.GroundConnectionType None`
  - `Impassable: False`
  - `NeighbourFloorNorth: ProjectM.CastleBuilding.NeighbourData Entity: Entity.Null, MatchingFilter: None`
  - `NeighbourFloorEast: ProjectM.CastleBuilding.NeighbourData Entity: Entity.Null, MatchingFilter: None`
  - `NeighbourFloorSouth: ProjectM.CastleBuilding.NeighbourData Entity: Entity.Null, MatchingFilter: None`
  - `NeighbourFloorWest: ProjectM.CastleBuilding.NeighbourData Entity: Entity.Null, MatchingFilter: None`
  - `NeighbourFloorUp: ProjectM.CastleBuilding.NeighbourData Entity: Entity.Null, MatchingFilter: None`
  - `NeighbourFloorDown: ProjectM.CastleBuilding.NeighbourData Entity: Entity.Null, MatchingFilter: None`
  - `WallNorth: Entity(0:0)`
  - `WallEast: Entity(0:0)`
  - `WallSouth: Entity(0:0)`
  - `WallWest: Entity(0:0)`

- [CastleFloorRoof](/components/CastleFloorRoof){:target="_blank"}
  - `RoofEntity: NetworkedEntity(0:0)`

- [CastleRoomConnection](/components/CastleRoomConnection){:target="_blank"}
  - `RoomEntity: NetworkedEntity(0:0)`

- [CastleDecayAndRegen](/components/CastleDecayAndRegen){:target="_blank"}
  - `LastUpdatedTime: 0`
  - `DecayFactorOnTick: Unity.Mathematics.half 0.0005002022`
  - `RegenFactorOnTick: Unity.Mathematics.half 0.002500534`
  - `DecayThreshold: Unity.Mathematics.half 0.04998779`
  - `CanDieFromDecay: False`

- [CastleAreaRequirement](/components/CastleAreaRequirement){:target="_blank"}
  - `RequirementType: ProjectM.CastleBuilding.Placement.CastleAreaRequirementType PlaceableInClaimableTerritory`
  - `BlockPlacementOnRoads: True`
  - `AllowPlaceInObjectsInRepairState: False`
  - `AllowTilesStickingOutOfTerritory: False`

- [DurabilityTarget](/components/DurabilityTarget){:target="_blank"}
  - `DurabilityFactor: 3`

- [Interactable](/components/Interactable){:target="_blank"}
  - `CurrentTargetSequenceGuid: SequenceGUID 0`
  - `IgnoreLineOfSight: False`
  - `IgnoreBlockInteract: False`
  - `UseInteractAbilityName: True`
  - `Disabled: False`

- [InteractedUpon](/components/InteractedUpon){:target="_blank"}
  - `Interacting: False`
  - `BlockBuildingMovement: False`
  - `BlockBuildingDisassemble: False`

- **ProjectM.LastEditedBy**
  - `User: ProjectM.Network.NetworkId (None)`

- [CastleRebuildPhaseState](/components/CastleRebuildPhaseState){:target="_blank"}
  - `State: ProjectM.CastleBuilding.PhaseState None`

- [StationServants](/components/StationServants){:target="_blank"}
  - `Servants: ProjectM.ServantType None`

- [CastleWorkstation](/components/CastleWorkstation){:target="_blank"}
  - `MatchingFloorType: ProjectM.CastleBuilding.CastleFloorTypes None`
  - `BonusServantType: ProjectM.ServantType None`
  - `ForceUpdateInStation: False`
  - `WorkstationLevel: ProjectM.WorkstationLevel None`

- [PlacementDestroyData](/components/PlacementDestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Buffable](/components/Buffable){:target="_blank"}
  - `KnockbackResistanceIndex: 13`
  - `UniqueBuffCategories: ProjectM.BuffCategoryFlag Travel, Shapeshift`

- [CreatedTime](/components/CreatedTime){:target="_blank"}
  - `CreateTime: 0`

- [Health](/components/Health){:target="_blank"}
  - `MaxHealth: 2500`
  - `TimeOfDeath: 0`
  - `Value: 2500`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- [HealthConstants](/components/HealthConstants){:target="_blank"}
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: True`
  - `DestroyAfterDuration: 0`
  - `DisableDamageSCT: False`

- [Immortal](/components/Immortal){:target="_blank"}
  - `IsImmortal: True`

- [InventoryOwner](/components/InventoryOwner){:target="_blank"}
  - `LastUpdateVersion: 0`
  - `HasItems: False`

- [CollisionRadius](/components/CollisionRadius){:target="_blank"}
  - `Radius: 1`

- [Team](/components/Team){:target="_blank"}
  - `Value: 0`
  - `FactionIndex: -1`

- [TileBounds](/components/TileBounds){:target="_blank"}
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- [TileModelSpatialData](/components/TileModelSpatialData){:target="_blank"}
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- [TileData](/components/TileData){:target="_blank"}
  - `Data: Unity.Entities.BlobAssetReference`1[TileBlob] Unity.Entities.BlobAssetReference`1[TileBlob]`

- [BuffableFlagState](/components/BuffableFlagState){:target="_blank"}
  - `Value: ProjectM.ModifiableLong ProjectM.ModifiableLong`

- [EntityCategory](/components/EntityCategory){:target="_blank"}
  - `MainCategoryInt: 2`
  - `UnitCategoryInt: 5`
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
  - `IntType: 2`
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

- [SyncToUserBitMask](/components/SyncToUserBitMask){:target="_blank"}
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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_igekbcbeg`

- [SyncBoundingBox](/components/SyncBoundingBox){:target="_blank"}
  - `MaxX: 0`
  - `MinX: 0`
  - `MaxZ: 0`
  - `MinZ: 0`

- [TileModel](/components/TileModel){:target="_blank"}
  - `DisabledTileTypesInt: 0`

- [CastleBuildingAttachSettings](/components/CastleBuildingAttachSettings){:target="_blank"}
  - `MoveWithParentWhenAttached: False`
  - `DestroyWithParentWhenAttached: False`
  - `LinkDestroyToParentWhenAttached: False`
  - `RestrictMoveWhenAttached: False`
  - `RestrictDismantleWhenAttached: True`
  - `MoveWithParentAlsoMovesOtherParents: False`

- [CastleBuildingMaxRange](/components/CastleBuildingMaxRange){:target="_blank"}
  - `MaxRange: 180`

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
  - `_Value: -485210554`

- [CastleBuildingAttachToParentsBuffer](/components/CastleBuildingAttachToParentsBuffer){:target="_blank"}
  - *(No fields)*

- [CastleBuildingAttachedChildrenBuffer](/components/CastleBuildingAttachedChildrenBuffer){:target="_blank"}
  - *(No fields)*

- [BuffBuffer](/components/BuffBuffer){:target="_blank"}
  - *(No fields)*

- [InventoryInstanceElement](/components/InventoryInstanceElement){:target="_blank"}

- **[0]**
  - `Category: ProjectM.InventoryInstanceElement+InstanceCategory Main`
  - `Slots: 1`
  - `MaxSlots: 1`
  - `ExternalInventoryEntityPrefabGuid: External_Inventory PrefabGuid(1183666186)`
  - `ExternalInventoryEntity: NetworkedEntity(0:0)`
  - `RestrictedType: Item_BloodEssence_T01 PrefabGuid(862477668)`
  - `RestrictedCategory: 0`
  - `StartItems: Unity.Entities.BlobAssetReference`1[ExternalInventoryStartItems] Unity.Entities.BlobAssetReference`1[ExternalInventoryStartItems]`

- [SyncToUserBuffer](/components/SyncToUserBuffer){:target="_blank"}
  - *(No fields)*

- [ActiveServantMission](/components/ActiveServantMission){:target="_blank"}
  - *(No fields)*

- [CastleTeleporterElement](/components/CastleTeleporterElement){:target="_blank"}
  - *(No fields)*

- [InteractAbilityBuffer](/components/InteractAbilityBuffer){:target="_blank"}

- **[0]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                             `
  - `Component                      `
  - `ConditionalElements`
  - `Ability: AB_Interact_UseCastleHeart_AbilityGroup PrefabGuid(-801968342)`
  - `Importance: 0`
  - `HideInteractHUDWhileCasting: False`

- **[1]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                             `
  - `Component                      `
  - `ConditionalElements`
  - `Ability: AB_Interact_UseCastleHeart_AbilityGroup_Enemy PrefabGuid(1473393531)`
  - `Importance: 0`
  - `HideInteractHUDWhileCasting: False`

- [Snapshot_ActiveServantMission](/components/Snapshot_ActiveServantMission){:target="_blank"}
  - *(No fields)*

- [Snapshot_CastleBuildingAttachedChildrenBuffer](/components/Snapshot_CastleBuildingAttachedChildrenBuffer){:target="_blank"}
  - *(No fields)*

- [Snapshot_CastleBuildingAttachToParentsBuffer](/components/Snapshot_CastleBuildingAttachToParentsBuffer){:target="_blank"}
  - *(No fields)*

- [Snapshot_CastleMemberNames](/components/Snapshot_CastleMemberNames){:target="_blank"}
  - *(No fields)*

- [Snapshot_CastleTeleporterElement](/components/Snapshot_CastleTeleporterElement){:target="_blank"}
  - *(No fields)*

- [Snapshot_InventoryInstanceElement](/components/Snapshot_InventoryInstanceElement){:target="_blank"}

- **[0]**
  - `Value: 1`

- **[1]**
  - `Value: 0`

- **[2]**
  - `Value: 0`

- **[3]**
  - `Value: 0`

- **[4]**
  - `Value: 0`

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
  - `Value: 0`

- **[28]**
  - `Value: 1`

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
  - `Value: 1`

- **[45]**
  - `Value: 0`

- **[46]**
  - `Value: 0`

- **[47]**
  - `Value: 0`

- **[48]**
  - `Value: 0`

- **[49]**
  - `Value: 0`

- **[50]**
  - `Value: 0`

- **[51]**
  - `Value: 0`

- **52 total elements but only showing the first 36**
  - *(No fields)*

- [BlueprintRequirementBuffer](/components/BlueprintRequirementBuffer){:target="_blank"}

- **[0]**
  - `PrefabGUID: Item_BloodEssence_T01 PrefabGuid(862477668)`
  - `Amount: 30`

- **[1]**
  - `PrefabGUID: Item_Ingredient_Stone PrefabGuid(-1531666018)`
  - `Amount: 240`

- [AttachMapIconsToEntity](/components/AttachMapIconsToEntity){:target="_blank"}

- **[0]**
  - `Prefab: MapIcon_CastleObject_CastleHeart PrefabGuid(652170644)`

- [RefinementstationRecipesBuffer](/components/RefinementstationRecipesBuffer){:target="_blank"}

- **[0]**
  - `RecipeGuid: Recipe_CastleUpkeep_T01 PrefabGuid(155119506)`
  - `Unlocked: True`
  - `Disabled: False`

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 70`

- **[1]**
  - `Value: 70`

- **[2]**
  - `Value: 20`

- **[3]**
  - `Value: 227`

- **[4]**
  - `Value: 122`

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
  - `Value: 0`

- **[25]**
  - `Value: 0`

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

- **[48]**
  - `Value: 0`

- **[49]**
  - `Value: 0`

- **[50]**
  - `Value: 0`

- **[51]**
  - `Value: 0`

- **[52]**
  - `Value: 0`

- **[53]**
  - `Value: 0`

- **[54]**
  - `Value: 0`

- **[55]**
  - `Value: 0`

- **[56]**
  - `Value: 0`

- **[57]**
  - `Value: 0`

- **[58]**
  - `Value: 0`

- **[59]**
  - `Value: 0`

- **[60]**
  - `Value: 0`

- **[61]**
  - `Value: 0`

- **[62]**
  - `Value: 0`

- **[63]**
  - `Value: 0`

- **[64]**
  - `Value: 240`

- **[65]**
  - `Value: 255`

- **[66]**
  - `Value: 0`

- **[67]**
  - `Value: 0`

- **[68]**
  - `Value: 0`

- **[69]**
  - `Value: 0`

- **[70]**
  - `Value: 0`

- **[71]**
  - `Value: 0`

- **[72]**
  - `Value: 0`

- **[73]**
  - `Value: 0`

- **[74]**
  - `Value: 0`

- **[75]**
  - `Value: 0`

- **[76]**
  - `Value: 0`

- **[77]**
  - `Value: 0`

- **[78]**
  - `Value: 1`

- **[79]**
  - `Value: 0`

- **[80]**
  - `Value: 0`

- **[81]**
  - `Value: 0`

- **[82]**
  - `Value: 0`

- **[83]**
  - `Value: 0`

- **[84]**
  - `Value: 0`

- **[85]**
  - `Value: 0`

- **[86]**
  - `Value: 0`

- **[87]**
  - `Value: 0`

- **[88]**
  - `Value: 0`

- **[89]**
  - `Value: 0`

- **[90]**
  - `Value: 0`

- **[91]**
  - `Value: 0`

- **[92]**
  - `Value: 0`

- **[93]**
  - `Value: 0`

- **[94]**
  - `Value: 0`

- **[95]**
  - `Value: 0`

- **[96]**
  - `Value: 0`

- **[97]**
  - `Value: 0`

- **[98]**
  - `Value: 0`

- **[99]**
  - `Value: 0`

- **[100]**
  - `Value: 0`

- **[101]**
  - `Value: 0`

- **[102]**
  - `Value: 0`

- **[103]**
  - `Value: 0`

- **[104]**
  - `Value: 0`

- **[105]**
  - `Value: 0`

- **[106]**
  - `Value: 0`

- **[107]**
  - `Value: 0`

- **[108]**
  - `Value: 0`

- **[109]**
  - `Value: 0`

- **[110]**
  - `Value: 0`

- **[111]**
  - `Value: 0`

- **[112]**
  - `Value: 0`

- **[113]**
  - `Value: 0`

- **[114]**
  - `Value: 0`

- **[115]**
  - `Value: 0`

- **[116]**
  - `Value: 0`

- **[117]**
  - `Value: 0`

- **[118]**
  - `Value: 0`

- **[119]**
  - `Value: 0`

- **[120]**
  - `Value: 0`

- **[121]**
  - `Value: 0`

- **[122]**
  - `Value: 0`

- **[123]**
  - `Value: 0`

- **[124]**
  - `Value: 0`

- **[125]**
  - `Value: 0`

- **[126]**
  - `Value: 0`

- **[127]**
  - `Value: 0`

- **[128]**
  - `Value: 0`

- **[129]**
  - `Value: 0`

- **[130]**
  - `Value: 0`

- **[131]**
  - `Value: 0`

- **[132]**
  - `Value: 0`

- **[133]**
  - `Value: 0`

- **[134]**
  - `Value: 0`

- **[135]**
  - `Value: 0`

- **[136]**
  - `Value: 0`

- **[137]**
  - `Value: 0`

- **[138]**
  - `Value: 0`

- **[139]**
  - `Value: 0`

- **[140]**
  - `Value: 0`

- **[141]**
  - `Value: 0`

- **[142]**
  - `Value: 0`

- **[143]**
  - `Value: 0`

- **[144]**
  - `Value: 0`

- **[145]**
  - `Value: 0`

- **[146]**
  - `Value: 0`

- **[147]**
  - `Value: 0`

- **[148]**
  - `Value: 0`

- **[149]**
  - `Value: 0`

- **[150]**
  - `Value: 0`

- **[151]**
  - `Value: 64`

- **[152]**
  - `Value: 28`

- **[153]**
  - `Value: 69`

- **[154]**
  - `Value: 0`

- **[155]**
  - `Value: 0`

- **[156]**
  - `Value: 128`

- **[157]**
  - `Value: 63`

- **[158]**
  - `Value: 0`

- **[159]**
  - `Value: 0`

- **[160]**
  - `Value: 0`

- **[161]**
  - `Value: 0`

- **[162]**
  - `Value: 0`

- **[163]**
  - `Value: 0`

- **[164]**
  - `Value: 0`

- **[165]**
  - `Value: 0`

- **[166]**
  - `Value: 0`

- **[167]**
  - `Value: 64`

- **[168]**
  - `Value: 28`

- **[169]**
  - `Value: 69`

- **[170]**
  - `Value: 0`

- **[171]**
  - `Value: 0`

- **[172]**
  - `Value: 0`

- **[173]**
  - `Value: 0`

- **[174]**
  - `Value: 0`

- **[175]**
  - `Value: 0`

- **[176]**
  - `Value: 0`

- **[177]**
  - `Value: 0`

- **[178]**
  - `Value: 0`

- **[179]**
  - `Value: 0`

- **[180]**
  - `Value: 0`

- **[181]**
  - `Value: 0`

- **[182]**
  - `Value: 0`

- **[183]**
  - `Value: 0`

- **[184]**
  - `Value: 0`

- **[185]**
  - `Value: 0`

- **[186]**
  - `Value: 0`

- **[187]**
  - `Value: 0`

- **[188]**
  - `Value: 0`

- **[189]**
  - `Value: 0`

- **[190]**
  - `Value: 0`

- **[191]**
  - `Value: 0`

- **[192]**
  - `Value: 0`

- **[193]**
  - `Value: 0`

- **[194]**
  - `Value: 0`

- **[195]**
  - `Value: 0`

- **[196]**
  - `Value: 0`

- **[197]**
  - `Value: 0`

- **[198]**
  - `Value: 0`

- **[199]**
  - `Value: 0`

- **[200]**
  - `Value: 0`

- **[201]**
  - `Value: 0`

- **[202]**
  - `Value: 0`

- **[203]**
  - `Value: 0`

- **[204]**
  - `Value: 0`

- **[205]**
  - `Value: 0`

- **[206]**
  - `Value: 0`

- **[207]**
  - `Value: 0`

- **[208]**
  - `Value: 0`

- **[209]**
  - `Value: 0`

- **[210]**
  - `Value: 0`

- **[211]**
  - `Value: 0`

- **[212]**
  - `Value: 0`

- **[213]**
  - `Value: 0`

- **[214]**
  - `Value: 0`

- **[215]**
  - `Value: 0`

- **[216]**
  - `Value: 0`

- **[217]**
  - `Value: 0`

- **[218]**
  - `Value: 0`

- **[219]**
  - `Value: 255`

- **[220]**
  - `Value: 255`

- **[221]**
  - `Value: 255`

- **[222]**
  - `Value: 255`

- **[223]**
  - `Value: 0`

- **[224]**
  - `Value: 0`

- **[225]**
  - `Value: 0`

- **[226]**
  - `Value: 0`

- **[227]**
  - `Value: 0`

- **[228]**
  - `Value: 0`

- **[229]**
  - `Value: 0`

- **[230]**
  - `Value: 0`

- **[231]**
  - `Value: 0`

- **[232]**
  - `Value: 0`

- **[233]**
  - `Value: 0`

- **[234]**
  - `Value: 0`

- **[235]**
  - `Value: 0`

- **[236]**
  - `Value: 0`

- **[237]**
  - `Value: 0`

- **[238]**
  - `Value: 0`

- **[239]**
  - `Value: 0`

- **[240]**
  - `Value: 0`

- **[241]**
  - `Value: 0`

- **[242]**
  - `Value: 0`

- **[243]**
  - `Value: 0`

- **[244]**
  - `Value: 0`

- **[245]**
  - `Value: 0`

- **[246]**
  - `Value: 0`

- **[247]**
  - `Value: 0`

- **248 total elements but only showing the first 36**
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

- **[13]**
  - `Value: -1`

- **[14]**
  - `Value: -1`

- **[15]**
  - `Value: -1`

- **[16]**
  - `Value: -1`

- **[17]**
  - `Value: -1`

- **[18]**
  - `Value: -1`

- **[19]**
  - `Value: -1`

- **[20]**
  - `Value: -1`

- **[21]**
  - `Value: -1`

- **[22]**
  - `Value: -1`

- **[23]**
  - `Value: -1`

- **[24]**
  - `Value: -1`

- **[25]**
  - `Value: -1`

- **[26]**
  - `Value: -1`

- **[27]**
  - `Value: -1`

- **[28]**
  - `Value: -1`

- **[29]**
  - `Value: -1`

- **[30]**
  - `Value: -1`

- **[31]**
  - `Value: -1`

- **[32]**
  - `Value: -1`

- **[33]**
  - `Value: -1`

- **[34]**
  - `Value: -1`

- **[35]**
  - `Value: -1`

- **[36]**
  - `Value: -1`

- **[37]**
  - `Value: -1`

- **[38]**
  - `Value: -1`

- **[39]**
  - `Value: -1`

- **[40]**
  - `Value: -1`

- **[41]**
  - `Value: -1`

- **[42]**
  - `Value: -1`

- **[43]**
  - `Value: -1`

- **[44]**
  - `Value: -1`

- **[45]**
  - `Value: -1`

- **[46]**
  - `Value: -1`

- **[47]**
  - `Value: -1`

- **[48]**
  - `Value: -1`

- **[49]**
  - `Value: -1`

- **[50]**
  - `Value: -1`

- **[51]**
  - `Value: -1`

- **[52]**
  - `Value: -1`

- **[53]**
  - `Value: -1`

- **[54]**
  - `Value: -1`

- **[55]**
  - `Value: -1`

- **[56]**
  - `Value: -1`

- **[57]**
  - `Value: -1`

- **[58]**
  - `Value: -1`

- **[59]**
  - `Value: -1`

- **[60]**
  - `Value: -1`

- **[61]**
  - `Value: -1`

- **[62]**
  - `Value: -1`

- **[63]**
  - `Value: -1`

- **[64]**
  - `Value: -1`

- **[65]**
  - `Value: -1`

- **[66]**
  - `Value: -1`

- **[67]**
  - `Value: -1`

- **[68]**
  - `Value: -1`

- **[69]**
  - `Value: -1`

- **[70]**
  - `Value: -1`

- **[71]**
  - `Value: -1`

- **[72]**
  - `Value: -1`

- **[73]**
  - `Value: -1`

- **[74]**
  - `Value: -1`

- **[75]**
  - `Value: -1`

- **[76]**
  - `Value: -1`

- **[77]**
  - `Value: -1`

- **[78]**
  - `Value: -1`

- **[79]**
  - `Value: -1`

- **[80]**
  - `Value: -1`

- **[81]**
  - `Value: -1`

- **[82]**
  - `Value: -1`

- **83 total elements but only showing the first 36**
  - *(No fields)*

- [CastleMemberNames](/components/CastleMemberNames){:target="_blank"}
  - *(No fields)*

- [MoveStopTrigger](/components/MoveStopTrigger){:target="_blank"}
  - *(No fields)*

- [RestrictPlacementToMapZones](/components/RestrictPlacementToMapZones){:target="_blank"}
  - *(No fields)*

- [TileCollisionTag](/components/TileCollisionTag){:target="_blank"}
  - *(No fields)*

- [TilePathfindingTag](/components/TilePathfindingTag){:target="_blank"}
  - *(No fields)*

- [TileHeightTag](/components/TileHeightTag){:target="_blank"}
  - *(No fields)*

- [TileLineOfSightTag](/components/TileLineOfSightTag){:target="_blank"}
  - *(No fields)*

- [TilePlacementTag](/components/TilePlacementTag){:target="_blank"}
  - *(No fields)*

- [ScriptSpawn](/components/ScriptSpawn){:target="_blank"}
  - *(No fields)*

- [RequireGroundedTag](/components/RequireGroundedTag){:target="_blank"}
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
