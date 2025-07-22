---
title: TM_ResearchStation_T03
guid: -1262194203
categories: ['All', 'TM']
nav_exclude: true
search_exclude: false
layout: default
---

# TM_ResearchStation_T03

**GUID:** `-1262194203`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- [ProjectM.DismantleDestroyData](/components/DismantleDestroyData){:target="_blank"}
  - `DismantleDestroyTime: 0.75`
  - `DismantleSequenceInstance: SequenceState`
  - `Id: Entity(0:0)`
  - `SkipDismantleTimeIfReplaced: False`
  - `WasDismantled: False`

- [ProjectM.BlueprintData](/components/BlueprintData){:target="_blank"}
  - `Entity: Prefab TM_ResearchStation_T03 PrefabGuid(-1262194203) - Entity(41258:2)`
  - `Guid: TM_ResearchStation_T03 PrefabGuid(-1262194203)`
  - `PlaceSequence: SequenceGUID -450089786`
  - `InvalidPlaceSequence: SequenceGUID 29614748`
  - `EditSequence: SequenceGUID -450089786`
  - `InvalidEditSequence: SequenceGUID 29614748`
  - `BuildingSequence: SequenceGUID 1352661667`
  - `PhasedBuildingSequence: SequenceGUID -1982272969`
  - `DismantledSequence: SequenceGUID 189290689`
  - `DestroyedSequence: SequenceGUID 189290689`
  - `RepairedSequence: SequenceGUID 1733594134`
  - `DismantleFraction: 1`
  - `FullDismantleTime: 300`
  - `IsStartBlueprint: False`
  - `IsInventoryItemBuilding: False`
  - `ExitBuildModeWhenBuilt: False`
  - `RequiresLineOfSight: False`
  - `RequiresSuccessfullPathfinding: False`

- [ProjectM.EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.BuffResistances](/components/BuffResistances){:target="_blank"}
  - `SettingsEntity: ModifiableEntity(0:0)`
  - `InitialSettingGuid: BuffResistance_Structures PrefabGuid(-641281679)`

- [ProjectM.ResearchStation](/components/ResearchStation){:target="_blank"}
  - `Level: 80`
  - `ConnectedTrophyUnlock: 39`
  - `ActiveSequenceGuid: SequenceGUID -1329790392`
  - `ActiveSequenceState: SequenceState`
  - `Id: Entity(0:0)`
  - `InactiveSequenceGuid: SequenceGUID 93473232`
  - `InactiveSequenceState: SequenceState`
  - `Id: Entity(0:0)`
  - `ResearchCompletedGuid: SequenceGUID 1813704946`

- [ProjectM.UserOwner](/components/UserOwner){:target="_blank"}
  - `Owner: NetworkedEntity(0:0)`

- [ProjectM.WorkstationAssignedServant](/components/WorkstationAssignedServant){:target="_blank"}
  - `ServantEntity: Entity(0:0)`

- [ProjectM.EditableTileModel](/components/EditableTileModel){:target="_blank"}
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

- [ProjectM.CastleBuilding.CastleHeartConnection](/components/CastleHeartConnection){:target="_blank"}
  - `CastleHeartEntity: NetworkedEntity(0:0)`

- [ProjectM.CastleBuilding.CastleRoomConnection](/components/CastleRoomConnection){:target="_blank"}
  - `RoomEntity: NetworkedEntity(0:0)`

- [ProjectM.Gameplay.Scripting.Script_ApplyBuffUnderHealthThreshold_DataServer](/components/Script_ApplyBuffUnderHealthThreshold_DataServer){:target="_blank"}
  - `HealthFactor: 0.01`
  - `NewBuffEntity: Buff_General_Station_Repair PrefabGuid(-359018142)`
  - `TriggerSequence: SequenceGUID 0`
  - `OnDamageTakenListener: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `ThresholdMet: False`
  - `DontTriggerOnDots: False`
  - `DontTriggerInFlight: False`

- [ProjectM.CastleDecayAndRegen](/components/CastleDecayAndRegen){:target="_blank"}
  - `LastUpdatedTime: 0`
  - `DecayFactorOnTick: Unity.Mathematics.half 0.0005002022`
  - `RegenFactorOnTick: Unity.Mathematics.half 0.002500534`
  - `DecayThreshold: Unity.Mathematics.half 0.04998779`
  - `CanDieFromDecay: False`

- [ProjectM.CastleAreaRequirement](/components/CastleAreaRequirement){:target="_blank"}
  - `RequirementType: ProjectM.CastleBuilding.Placement.CastleAreaRequirementType AttachToOwnedArea`
  - `BlockPlacementOnRoads: True`
  - `AllowPlaceInObjectsInRepairState: False`
  - `AllowTilesStickingOutOfTerritory: False`

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

- **ProjectM.LastEditedBy**
  - `User: ProjectM.Network.NetworkId (None)`

- [ProjectM.CastleBuilding.CastleRebuildPhaseState](/components/CastleRebuildPhaseState){:target="_blank"}
  - `State: ProjectM.CastleBuilding.PhaseState None`

- [ProjectM.ServantInteractPointLocalTransform](/components/ServantInteractPointLocalTransform){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(-1f, 0f, 1.16229E-06f, -0.02f,  0f, 1f, 0f, 0f,  -1.16229E-06f, 0f, -1f, 1.22f,  0f, 0f, 0f, 1f)`

- [ProjectM.StationServants](/components/StationServants){:target="_blank"}
  - `Servants: ProjectM.ServantType None`

- [ProjectM.CastleWorkstation](/components/CastleWorkstation){:target="_blank"}
  - `MatchingFloorType: ProjectM.CastleBuilding.CastleFloorTypes Library`
  - `BonusServantType: ProjectM.ServantType None`
  - `ForceUpdateInStation: False`
  - `WorkstationLevel: ProjectM.WorkstationLevel None`

- [ProjectM.PlacementDestroyData](/components/PlacementDestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Buffable](/components/Buffable){:target="_blank"}
  - `KnockbackResistanceIndex: 13`
  - `UniqueBuffCategories: ProjectM.BuffCategoryFlag Travel, Shapeshift`

- [ProjectM.CreatedTime](/components/CreatedTime){:target="_blank"}
  - `CreateTime: 0`

- [ProjectM.Health](/components/Health){:target="_blank"}
  - `MaxHealth: 100`
  - `TimeOfDeath: 0`
  - `Value: 100`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- [ProjectM.HealthConstants](/components/HealthConstants){:target="_blank"}
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: False`
  - `DestroyAfterDuration: 0`
  - `DisableDamageSCT: False`

- [ProjectM.Immortal](/components/Immortal){:target="_blank"}
  - `IsImmortal: True`

- [ProjectM.InventoryOwner](/components/InventoryOwner){:target="_blank"}
  - `LastUpdateVersion: 0`
  - `HasItems: False`

- [ProjectM.CollisionRadius](/components/CollisionRadius){:target="_blank"}
  - `Radius: 0.5`

- [ProjectM.Team](/components/Team){:target="_blank"}
  - `Value: 1`
  - `FactionIndex: -1`

- [ProjectM.TileBounds](/components/TileBounds){:target="_blank"}
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- [ProjectM.TileModelSpatialData](/components/TileModelSpatialData){:target="_blank"}
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- [ProjectM.TileData](/components/TileData){:target="_blank"}
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

- [ProjectM.ArmorLevel](/components/ArmorLevel){:target="_blank"}
  - `Level: 0`
  - `ModificationId: Unset`

- [ProjectM.BuffableFlagState](/components/BuffableFlagState){:target="_blank"}
  - `Value: ProjectM.ModifiableLong ProjectM.ModifiableLong`

- [ProjectM.EntityCategory](/components/EntityCategory){:target="_blank"}
  - `MainCategoryInt: 0`
  - `UnitCategoryInt: 5`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 0`
  - `ResourceLevel: 0`

- [ProjectM.StaticTransformCompatible](/components/StaticTransformCompatible){:target="_blank"}
  - `UseStaticTransform: False`
  - `StaticTransform: ProjectM.StaticTransformIndex StaticTransformIndex(TerrainChunk: 0,0, TransformIndex: 0)`
  - `NonStaticTransform_Pos: Unity.Mathematics.float2 float2(0f, 0f)`
  - `NonStaticTransform_Height: 0`
  - `NonStaticTransform_Rotation: ProjectM.Tiles.TileRotation None`

- [ProjectM.Sequencer.ImpactMaterial](/components/ImpactMaterial){:target="_blank"}
  - `IntType: 1`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `PlayOnSelf: False`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_ackcfddgjkb`

- [ProjectM.Tiles.TileModel](/components/TileModel){:target="_blank"}
  - `DisabledTileTypesInt: 0`

- [ProjectM.CastleBuilding.CastleBuildingAttachSettings](/components/CastleBuildingAttachSettings){:target="_blank"}
  - `MoveWithParentWhenAttached: False`
  - `DestroyWithParentWhenAttached: True`
  - `LinkDestroyToParentWhenAttached: False`
  - `RestrictMoveWhenAttached: False`
  - `RestrictDismantleWhenAttached: False`
  - `MoveWithParentAlsoMovesOtherParents: False`

- [ProjectM.CastleBuilding.CastleBuildingMaxRange](/components/CastleBuildingMaxRange){:target="_blank"}
  - `MaxRange: 180`

- [ProjectM.Hybrid.HybridModelSeed](/components/HybridModelSeed){:target="_blank"}
  - `Seed: 0`
  - `HasSetSeed: False`

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

- [ProjectM.TeamReference](/components/TeamReference){:target="_blank"}
  - `Value: ModifiableEntity(0:0)`

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
  - `_Value: -1262194203`

- [ProjectM.CastleBuilding.CastleBuildingAttachToParentsBuffer](/components/CastleBuildingAttachToParentsBuffer){:target="_blank"}
  - *(No fields)*

- [ProjectM.CastleBuilding.CastleBuildingAttachedChildrenBuffer](/components/CastleBuildingAttachedChildrenBuffer){:target="_blank"}
  - *(No fields)*

- [ProjectM.BuffBuffer](/components/BuffBuffer){:target="_blank"}
  - *(No fields)*

- [ProjectM.InventoryInstanceElement](/components/InventoryInstanceElement){:target="_blank"}

- **[0]**
  - `Category: ProjectM.InventoryInstanceElement+InstanceCategory Main`
  - `Slots: 8`
  - `MaxSlots: 8`
  - `ExternalInventoryEntityPrefabGuid: External_Inventory PrefabGuid(1183666186)`
  - `ExternalInventoryEntity: NetworkedEntity(0:0)`
  - `RestrictedType: GUID Not Found`
  - `RestrictedCategory: 0`
  - `StartItems: Unity.Entities.BlobAssetReference`1[ProjectM.ExternalInventoryStartItems] Unity.Entities.BlobAssetReference`1[ProjectM.ExternalInventoryStartItems]`

- [ProjectM.InteractAbilityBuffer](/components/InteractAbilityBuffer){:target="_blank"}

- **[0]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab `{��<  ��V�<  ��r�=`
  - `Component  ��X�<  �Ҁ�<     `
  - `ConditionalElements`
  - `Ability: AB_Interact_UseResearchstation_AbilityGroup PrefabGuid(14271023)`
  - `Importance: 1`
  - `HideInteractHUDWhileCasting: False`

- [ProjectM.CreateGameplayEventsOnSpawn](/components/CreateGameplayEventsOnSpawn){:target="_blank"}

- **[0]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget Self`

- [ProjectM.ApplyBuffOnGameplayEvent](/components/ApplyBuffOnGameplayEvent){:target="_blank"}

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget EventTarget`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: Buff_General_Build_Spawn_Buff_WeakStructure PrefabGuid(237078863)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- [ProjectM.GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 373290447`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.Network.Snapshot_CastleBuildingAttachedChildrenBuffer](/components/Snapshot_CastleBuildingAttachedChildrenBuffer){:target="_blank"}
  - *(No fields)*

- [ProjectM.Network.Snapshot_CastleBuildingAttachToParentsBuffer](/components/Snapshot_CastleBuildingAttachToParentsBuffer){:target="_blank"}
  - *(No fields)*

- [ProjectM.Network.Snapshot_InventoryInstanceElement](/components/Snapshot_InventoryInstanceElement){:target="_blank"}

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
  - `Value: 8`

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
  - `Value: 8`

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

- [ProjectM.Network.Snapshot_ResearchBuffer](/components/Snapshot_ResearchBuffer){:target="_blank"}

- **[0]**
  - `Value: 48`

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
  - `Value: 0`

- **[65]**
  - `Value: 0`

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
  - `Value: 0`

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
  - `Value: 0`

- **[152]**
  - `Value: 0`

- **[153]**
  - `Value: 0`

- **[154]**
  - `Value: 0`

- **[155]**
  - `Value: 0`

- **[156]**
  - `Value: 0`

- **[157]**
  - `Value: 0`

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
  - `Value: 0`

- **[168]**
  - `Value: 0`

- **[169]**
  - `Value: 0`

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
  - `Value: 112`

- **[205]**
  - `Value: 28`

- **[206]**
  - `Value: 141`

- **[207]**
  - `Value: 224`

- **[208]**
  - `Value: 0`

- **[209]**
  - `Value: 0`

- **[210]**
  - `Value: 0`

- **[211]**
  - `Value: 0`

- **[212]**
  - `Value: 231`

- **[213]**
  - `Value: 144`

- **[214]**
  - `Value: 140`

- **[215]**
  - `Value: 21`

- **[216]**
  - `Value: 0`

- **[217]**
  - `Value: 0`

- **[218]**
  - `Value: 0`

- **[219]**
  - `Value: 0`

- **[220]**
  - `Value: 249`

- **[221]**
  - `Value: 200`

- **[222]**
  - `Value: 254`

- **[223]**
  - `Value: 112`

- **[224]**
  - `Value: 0`

- **[225]**
  - `Value: 0`

- **[226]**
  - `Value: 0`

- **[227]**
  - `Value: 0`

- **[228]**
  - `Value: 31`

- **[229]**
  - `Value: 108`

- **[230]**
  - `Value: 108`

- **[231]**
  - `Value: 231`

- **[232]**
  - `Value: 0`

- **[233]**
  - `Value: 0`

- **[234]**
  - `Value: 0`

- **[235]**
  - `Value: 0`

- **[236]**
  - `Value: 39`

- **[237]**
  - `Value: 115`

- **[238]**
  - `Value: 184`

- **[239]**
  - `Value: 210`

- **[240]**
  - `Value: 0`

- **[241]**
  - `Value: 0`

- **[242]**
  - `Value: 0`

- **[243]**
  - `Value: 0`

- **[244]**
  - `Value: 198`

- **[245]**
  - `Value: 221`

- **[246]**
  - `Value: 130`

- **[247]**
  - `Value: 176`

- **[248]**
  - `Value: 0`

- **[249]**
  - `Value: 0`

- **[250]**
  - `Value: 0`

- **[251]**
  - `Value: 0`

- **[252]**
  - `Value: 245`

- **[253]**
  - `Value: 106`

- **[254]**
  - `Value: 88`

- **[255]**
  - `Value: 232`

- **[256]**
  - `Value: 0`

- **[257]**
  - `Value: 0`

- **[258]**
  - `Value: 0`

- **[259]**
  - `Value: 0`

- **[260]**
  - `Value: 218`

- **[261]**
  - `Value: 30`

- **[262]**
  - `Value: 158`

- **[263]**
  - `Value: 231`

- **[264]**
  - `Value: 0`

- **[265]**
  - `Value: 0`

- **[266]**
  - `Value: 0`

- **[267]**
  - `Value: 0`

- **[268]**
  - `Value: 19`

- **[269]**
  - `Value: 136`

- **[270]**
  - `Value: 209`

- **[271]**
  - `Value: 197`

- **[272]**
  - `Value: 0`

- **[273]**
  - `Value: 0`

- **[274]**
  - `Value: 0`

- **[275]**
  - `Value: 0`

- **[276]**
  - `Value: 75`

- **[277]**
  - `Value: 14`

- **[278]**
  - `Value: 187`

- **[279]**
  - `Value: 51`

- **[280]**
  - `Value: 0`

- **[281]**
  - `Value: 0`

- **[282]**
  - `Value: 0`

- **[283]**
  - `Value: 0`

- **[284]**
  - `Value: 167`

- **[285]**
  - `Value: 192`

- **[286]**
  - `Value: 152`

- **[287]**
  - `Value: 213`

- **[288]**
  - `Value: 0`

- **[289]**
  - `Value: 0`

- **[290]**
  - `Value: 0`

- **[291]**
  - `Value: 0`

- **[292]**
  - `Value: 248`

- **[293]**
  - `Value: 182`

- **[294]**
  - `Value: 59`

- **[295]**
  - `Value: 34`

- **[296]**
  - `Value: 0`

- **[297]**
  - `Value: 0`

- **[298]**
  - `Value: 0`

- **[299]**
  - `Value: 0`

- **584 total elements but only showing the first 36**
  - *(No fields)*

- [ProjectM.BlueprintRequirementBuffer](/components/BlueprintRequirementBuffer){:target="_blank"}

- **[0]**
  - `PrefabGUID: Item_Ingredient_Research_Schematic PrefabGuid(2085163661)`
  - `Amount: 20`

- **[1]**
  - `PrefabGUID: Item_Ingredient_Emery PrefabGuid(-1578565561)`
  - `Amount: 100`

- **[2]**
  - `PrefabGUID: Item_Ingredient_ReinforcedPlank PrefabGuid(-1397591435)`
  - `Amount: 8`

- **[3]**
  - `PrefabGUID: Item_Ingredient_Mineral_DarkSilverBar PrefabGuid(-762000259)`
  - `Amount: 4`

- [ProjectM.StationBonusBuffer](/components/StationBonusBuffer){:target="_blank"}

- **[0]**
  - `StationBonusGuid: StationBonus_Research_1_ConfinedRoom PrefabGuid(-1143076987)`

- **[1]**
  - `StationBonusGuid: StationBonus_Research_2_MatchingFloor PrefabGuid(-1273877682)`

- [ProjectM.DiscoverCostBuffer](/components/DiscoverCostBuffer){:target="_blank"}

- **[0]**
  - `PrefabGUID: Item_Ingredient_Research_Schematic PrefabGuid(2085163661)`
  - `Amount: 100`

- **ProjectM.DiscoverCategoryCostBuffer**

- **[0]**
  - `Category: ProjectM.TechCategory Weapon`
  - `PrefabGUID: Item_Ingredient_Research_Schematic PrefabGuid(2085163661)`
  - `Amount: 120`

- **[1]**
  - `Category: ProjectM.TechCategory Magic`
  - `PrefabGUID: Item_Ingredient_Research_Schematic PrefabGuid(2085163661)`
  - `Amount: 120`

- **[2]**
  - `Category: ProjectM.TechCategory Structure`
  - `PrefabGUID: Item_Ingredient_Research_Schematic PrefabGuid(2085163661)`
  - `Amount: 60`

- [ProjectM.ResearchBuffer](/components/ResearchBuffer){:target="_blank"}

- **[0]**
  - `ResearchGuid: Tech_Storage_T03 PrefabGuid(-527623056)`
  - `IsResearchByStation: False`

- **[1]**
  - `ResearchGuid: Tech_Weapon_Sword_T08 PrefabGuid(361533671)`
  - `IsResearchByStation: False`

- **[2]**
  - `ResearchGuid: Tech_Weapon_Axe_T08 PrefabGuid(1895745785)`
  - `IsResearchByStation: False`

- **[3]**
  - `ResearchGuid: Tech_Weapon_Mace_T08 PrefabGuid(-412324833)`
  - `IsResearchByStation: False`

- **[4]**
  - `ResearchGuid: Tech_Weapon_Spear_T08 PrefabGuid(-759663833)`
  - `IsResearchByStation: False`

- **[5]**
  - `ResearchGuid: Tech_Weapon_Crossbow_T08 PrefabGuid(-1333600826)`
  - `IsResearchByStation: False`

- **[6]**
  - `ResearchGuid: Tech_Weapon_Longbow_T08 PrefabGuid(-396858635)`
  - `IsResearchByStation: False`

- **[7]**
  - `ResearchGuid: Tech_Weapon_Reaper_T08 PrefabGuid(-409067814)`
  - `IsResearchByStation: False`

- **[8]**
  - `ResearchGuid: Tech_Weapon_GreatSword_T08 PrefabGuid(-976123885)`
  - `IsResearchByStation: False`

- **[9]**
  - `ResearchGuid: Tech_Weapon_Daggers_T08 PrefabGuid(867896907)`
  - `IsResearchByStation: False`

- **[10]**
  - `ResearchGuid: Tech_Weapon_TwinBlades_T08 PrefabGuid(-711409497)`
  - `IsResearchByStation: False`

- **[11]**
  - `ResearchGuid: Tech_Weapon_Claws_T08 PrefabGuid(574338808)`
  - `IsResearchByStation: False`

- **[12]**
  - `ResearchGuid: Tech_Weapon_Pistols_T08 PrefabGuid(-1917260012)`
  - `IsResearchByStation: False`

- **[13]**
  - `ResearchGuid: Tech_Weapon_Slashers_T08 PrefabGuid(575105000)`
  - `IsResearchByStation: False`

- **[14]**
  - `ResearchGuid: Tech_Armor_Chest_T08_Rogue PrefabGuid(-1170753047)`
  - `IsResearchByStation: False`

- **[15]**
  - `ResearchGuid: Tech_Armor_Legs_T08_Rogue PrefabGuid(419994007)`
  - `IsResearchByStation: False`

- **[16]**
  - `ResearchGuid: Tech_Armor_Gloves_T08_Rogue PrefabGuid(693752504)`
  - `IsResearchByStation: False`

- **[17]**
  - `ResearchGuid: Tech_Armor_Boots_T08_Rogue PrefabGuid(-592100304)`
  - `IsResearchByStation: False`

- **[18]**
  - `ResearchGuid: Tech_Armor_Chest_T08_Brute PrefabGuid(750468260)`
  - `IsResearchByStation: False`

- **[19]**
  - `ResearchGuid: Tech_Armor_Legs_T08_Brute PrefabGuid(-996734096)`
  - `IsResearchByStation: False`

- **[20]**
  - `ResearchGuid: Tech_Armor_Gloves_T08_Brute PrefabGuid(-371547835)`
  - `IsResearchByStation: False`

- **[21]**
  - `ResearchGuid: Tech_Armor_Boots_T08_Brute PrefabGuid(1941997114)`
  - `IsResearchByStation: False`

- **[22]**
  - `ResearchGuid: Tech_Armor_Chest_T08_Warrior PrefabGuid(-1435202677)`
  - `IsResearchByStation: False`

- **[23]**
  - `ResearchGuid: Tech_Armor_Legs_T08_Warrior PrefabGuid(1738492884)`
  - `IsResearchByStation: False`

- **[24]**
  - `ResearchGuid: Tech_Armor_Gloves_T08_Warrior PrefabGuid(-1696823248)`
  - `IsResearchByStation: False`

- **[25]**
  - `ResearchGuid: Tech_Armor_Boots_T08_Warrior PrefabGuid(1673193738)`
  - `IsResearchByStation: False`

- **[26]**
  - `ResearchGuid: Tech_Armor_Chest_T08_Scholar PrefabGuid(1188570352)`
  - `IsResearchByStation: False`

- **[27]**
  - `ResearchGuid: Tech_Armor_Legs_T08_Scholar PrefabGuid(1190578873)`
  - `IsResearchByStation: False`

- **[28]**
  - `ResearchGuid: Tech_Armor_Gloves_T08_Scholar PrefabGuid(-2038786647)`
  - `IsResearchByStation: False`

- **[29]**
  - `ResearchGuid: Tech_Armor_Boots_T08_Scholar PrefabGuid(-1816818535)`
  - `IsResearchByStation: False`

- **[30]**
  - `ResearchGuid: Tech_MagicSource_General_T08_CrimsonSky PrefabGuid(-1976191252)`
  - `IsResearchByStation: False`

- **[31]**
  - `ResearchGuid: Tech_MagicSource_General_T08_FrozenCrypt PrefabGuid(-1618357223)`
  - `IsResearchByStation: False`

- **[32]**
  - `ResearchGuid: Tech_MagicSource_General_T08_Beast PrefabGuid(2057306510)`
  - `IsResearchByStation: False`

- **[33]**
  - `ResearchGuid: Tech_MagicSource_General_T08_WickedProphet PrefabGuid(1018971284)`
  - `IsResearchByStation: False`

- **[34]**
  - `ResearchGuid: Tech_MagicSource_General_T08_Delusion PrefabGuid(1827501900)`
  - `IsResearchByStation: False`

- **[35]**
  - `ResearchGuid: Tech_MagicSource_General_T08_Madness PrefabGuid(438329698)`
  - `IsResearchByStation: False`

- **[36]**
  - `ResearchGuid: Tech_Collection_Braziers03 PrefabGuid(-1841292034)`
  - `IsResearchByStation: False`

- **[37]**
  - `ResearchGuid: Tech_Collection_Carpet_T03 PrefabGuid(-166104992)`
  - `IsResearchByStation: False`

- **[38]**
  - `ResearchGuid: Tech_Curtains_T03_Royal PrefabGuid(638346506)`
  - `IsResearchByStation: False`

- **[39]**
  - `ResearchGuid: Tech_Collection_Furniture_Sofas_T03 PrefabGuid(1333706297)`
  - `IsResearchByStation: False`

- **[40]**
  - `ResearchGuid: Tech_Collection_Furniture_DressingTables_T03 PrefabGuid(-1708158238)`
  - `IsResearchByStation: False`

- **[41]**
  - `ResearchGuid: Tech_Collection_Light_GardenLampPosts_T03 PrefabGuid(-732367543)`
  - `IsResearchByStation: False`

- **[42]**
  - `ResearchGuid: Tech_Collection_FlyingCandles_T03 PrefabGuid(1863270378)`
  - `IsResearchByStation: False`

- **[43]**
  - `ResearchGuid: Tech_Consumable_PhysicalBrew_Potion_T03 PrefabGuid(-11827994)`
  - `IsResearchByStation: False`

- **[44]**
  - `ResearchGuid: Tech_Consumable_SpellBrew_Potion_T03 PrefabGuid(-446090633)`
  - `IsResearchByStation: False`

- **[45]**
  - `ResearchGuid: Tech_Collection_Garden_PlantersDecor_T03 PrefabGuid(303243522)`
  - `IsResearchByStation: False`

- **[46]**
  - `ResearchGuid: Tech_Collection_Fountain_T03 PrefabGuid(-1296064423)`
  - `IsResearchByStation: False`

- **[47]**
  - `ResearchGuid: Tech_Collection_Wallpapers_Classical01 PrefabGuid(1405536938)`
  - `IsResearchByStation: False`

- **48 total elements but only showing the first 36**
  - *(No fields)*

- [ProjectM.GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - 373290447`

- [ProjectM.Network.NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 229`

- **[1]**
  - `Value: 113`

- **[2]**
  - `Value: 196`

- **[3]**
  - `Value: 180`

- **[4]**
  - `Value: 101`

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
  - `Value: 200`

- **[59]**
  - `Value: 66`

- **[60]**
  - `Value: 0`

- **[61]**
  - `Value: 0`

- **[62]**
  - `Value: 128`

- **[63]**
  - `Value: 63`

- **[64]**
  - `Value: 0`

- **[65]**
  - `Value: 0`

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
  - `Value: 200`

- **[75]**
  - `Value: 66`

- **[76]**
  - `Value: 0`

- **[77]**
  - `Value: 0`

- **[78]**
  - `Value: 0`

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

- **120 total elements but only showing the first 36**
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

- **48 total elements but only showing the first 36**
  - *(No fields)*

- [ProjectM.CastleBuilding.Placement.RestrictPlacementToMapZones](/components/RestrictPlacementToMapZones){:target="_blank"}
  - *(No fields)*

- [ProjectM.TileCollisionTag](/components/TileCollisionTag){:target="_blank"}
  - *(No fields)*

- [ProjectM.TilePathfindingTag](/components/TilePathfindingTag){:target="_blank"}
  - *(No fields)*

- [ProjectM.TileHeightTag](/components/TileHeightTag){:target="_blank"}
  - *(No fields)*

- [ProjectM.TileLineOfSightTag](/components/TileLineOfSightTag){:target="_blank"}
  - *(No fields)*

- [ProjectM.TilePlacementTag](/components/TilePlacementTag){:target="_blank"}
  - *(No fields)*

- [ProjectM.Scripting.ScriptSpawn](/components/ScriptSpawn){:target="_blank"}
  - *(No fields)*

- [ProjectM.CastleBuilding.Rebuilding.CastleRebuildCommonTag](/components/CastleRebuildCommonTag){:target="_blank"}
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
