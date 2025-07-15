---
title: TM_ResearchStation_T02
guid: -1292809886
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

# TM_ResearchStation_T02

**GUID:** `-1292809886`

**Categories:** All, TM

## Components

- **ProjectM.DismantleDestroyData**
  - `DismantleDestroyTime: 0.75`
  - `DismantleSequenceInstance: SequenceState`
  - `Id: Entity(0:0)`
  - `SkipDismantleTimeIfReplaced: False`
  - `WasDismantled: False`

- **ProjectM.BlueprintData**
  - `Entity: Prefab TM_ResearchStation_T02 PrefabGuid(-1292809886) - Entity(41257:2)`
  - `Guid: TM_ResearchStation_T02 PrefabGuid(-1292809886)`
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

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.BuffResistances**
  - `SettingsEntity: ModifiableEntity(0:0)`
  - `InitialSettingGuid: BuffResistance_Structures PrefabGuid(-641281679)`

- **ProjectM.ResearchStation**
  - `Level: 60`
  - `ConnectedTrophyUnlock: 38`
  - `ActiveSequenceGuid: SequenceGUID 1438487636`
  - `ActiveSequenceState: SequenceState`
  - `Id: Entity(0:0)`
  - `InactiveSequenceGuid: SequenceGUID 93473232`
  - `InactiveSequenceState: SequenceState`
  - `Id: Entity(0:0)`
  - `ResearchCompletedGuid: SequenceGUID 1813704946`

- **ProjectM.UserOwner**
  - `Owner: NetworkedEntity(0:0)`

- **ProjectM.WorkstationAssignedServant**
  - `ServantEntity: Entity(0:0)`

- **ProjectM.EditableTileModel**
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

- **ProjectM.CastleBuilding.CastleHeartConnection**
  - `CastleHeartEntity: NetworkedEntity(0:0)`

- **ProjectM.CastleBuilding.CastleRoomConnection**
  - `RoomEntity: NetworkedEntity(0:0)`

- **ProjectM.Gameplay.Scripting.Script_ApplyBuffUnderHealthThreshold_DataServer**
  - `HealthFactor: 0.01`
  - `NewBuffEntity: Buff_General_Station_Repair PrefabGuid(-359018142)`
  - `TriggerSequence: SequenceGUID 0`
  - `OnDamageTakenListener: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `ThresholdMet: False`
  - `DontTriggerOnDots: False`
  - `DontTriggerInFlight: False`

- **ProjectM.CastleDecayAndRegen**
  - `LastUpdatedTime: 0`
  - `DecayFactorOnTick: Unity.Mathematics.half 0.0005002022`
  - `RegenFactorOnTick: Unity.Mathematics.half 0.002500534`
  - `DecayThreshold: Unity.Mathematics.half 0.04998779`
  - `CanDieFromDecay: False`

- **ProjectM.CastleAreaRequirement**
  - `RequirementType: ProjectM.CastleBuilding.Placement.CastleAreaRequirementType AttachToOwnedArea`
  - `BlockPlacementOnRoads: True`
  - `AllowPlaceInObjectsInRepairState: False`
  - `AllowTilesStickingOutOfTerritory: False`

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

- **ProjectM.LastEditedBy**
  - `User: ProjectM.Network.NetworkId (None)`

- **ProjectM.CastleBuilding.CastleRebuildPhaseState**
  - `State: ProjectM.CastleBuilding.PhaseState None`

- **ProjectM.ServantInteractPointLocalTransform**
  - `Value: Unity.Mathematics.float4x4 float4x4(-1f, 0f, 1.16229E-06f, -0.02f,  0f, 1f, 0f, 0f,  -1.16229E-06f, 0f, -1f, 1.22f,  0f, 0f, 0f, 1f)`

- **ProjectM.StationServants**
  - `Servants: ProjectM.ServantType None`

- **ProjectM.CastleWorkstation**
  - `MatchingFloorType: ProjectM.CastleBuilding.CastleFloorTypes Library`
  - `BonusServantType: ProjectM.ServantType None`
  - `ForceUpdateInStation: False`
  - `WorkstationLevel: ProjectM.WorkstationLevel None`

- **ProjectM.PlacementDestroyData**
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Buffable**
  - `KnockbackResistanceIndex: 13`
  - `UniqueBuffCategories: ProjectM.BuffCategoryFlag Travel, Shapeshift`

- **ProjectM.CreatedTime**
  - `CreateTime: 0`

- **ProjectM.Health**
  - `MaxHealth: 100`
  - `TimeOfDeath: 0`
  - `Value: 100`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- **ProjectM.HealthConstants**
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: False`
  - `DestroyAfterDuration: 0`
  - `DisableDamageSCT: False`

- **ProjectM.Immortal**
  - `IsImmortal: True`

- **ProjectM.InventoryOwner**
  - `LastUpdateVersion: 0`
  - `HasItems: False`

- **ProjectM.CollisionRadius**
  - `Radius: 0.5`

- **ProjectM.Team**
  - `Value: 1`
  - `FactionIndex: -1`

- **ProjectM.TileBounds**
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- **ProjectM.TileModelSpatialData**
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- **ProjectM.TileData**
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

- **ProjectM.ArmorLevel**
  - `Level: 0`
  - `ModificationId: Unset`

- **ProjectM.BuffableFlagState**
  - `Value: ProjectM.ModifiableLong ProjectM.ModifiableLong`

- **ProjectM.EntityCategory**
  - `MainCategoryInt: 0`
  - `UnitCategoryInt: 5`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 0`
  - `ResourceLevel: 0`

- **ProjectM.StaticTransformCompatible**
  - `UseStaticTransform: False`
  - `StaticTransform: ProjectM.StaticTransformIndex StaticTransformIndex(TerrainChunk: 0,0, TransformIndex: 0)`
  - `NonStaticTransform_Pos: Unity.Mathematics.float2 float2(0f, 0f)`
  - `NonStaticTransform_Height: 0`
  - `NonStaticTransform_Rotation: ProjectM.Tiles.TileRotation None`

- **ProjectM.Sequencer.ImpactMaterial**
  - `IntType: 1`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `PlayOnSelf: False`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_ackcfddgjkb`

- **ProjectM.Tiles.TileModel**
  - `DisabledTileTypesInt: 0`

- **ProjectM.CastleBuilding.CastleBuildingAttachSettings**
  - `MoveWithParentWhenAttached: False`
  - `DestroyWithParentWhenAttached: True`
  - `LinkDestroyToParentWhenAttached: False`
  - `RestrictMoveWhenAttached: False`
  - `RestrictDismantleWhenAttached: False`
  - `MoveWithParentAlsoMovesOtherParents: False`

- **ProjectM.CastleBuilding.CastleBuildingMaxRange**
  - `MaxRange: 180`

- **ProjectM.Hybrid.HybridModelSeed**
  - `Seed: 0`
  - `HasSetSeed: False`

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
  - `_Value: -1292809886`

- **ProjectM.CastleBuilding.CastleBuildingAttachToParentsBuffer**
  - *(No fields)*

- **ProjectM.CastleBuilding.CastleBuildingAttachedChildrenBuffer**
  - *(No fields)*

- **ProjectM.BuffBuffer**
  - *(No fields)*

- **ProjectM.InventoryInstanceElement**
  - *(No fields)*

- **[0]**
  - `Category: ProjectM.InventoryInstanceElement+InstanceCategory Main`
  - `Slots: 8`
  - `MaxSlots: 8`
  - `ExternalInventoryEntityPrefabGuid: External_Inventory PrefabGuid(1183666186)`
  - `ExternalInventoryEntity: NetworkedEntity(0:0)`
  - `RestrictedType: GUID Not Found`
  - `RestrictedCategory: 0`
  - `StartItems: Unity.Entities.BlobAssetReference`1[ProjectM.ExternalInventoryStartItems] Unity.Entities.BlobAssetReference`1[ProjectM.ExternalInventoryStartItems]`

- **ProjectM.InteractAbilityBuffer**
  - *(No fields)*

- **[0]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab 0Ȱ<  ��V�<  ��r�=`
  - `Component  ��X�<  �Ҁ�<     `
  - `ConditionalElements`
  - `Ability: AB_Interact_UseResearchstation_AbilityGroup PrefabGuid(14271023)`
  - `Importance: 1`
  - `HideInteractHUDWhileCasting: False`

- **ProjectM.CreateGameplayEventsOnSpawn**
  - *(No fields)*

- **[0]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget Self`

- **ProjectM.ApplyBuffOnGameplayEvent**
  - *(No fields)*

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

- **ProjectM.GameplayEventIdMapping**
  - *(No fields)*

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 373290447`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **ProjectM.Network.Snapshot_CastleBuildingAttachedChildrenBuffer**
  - *(No fields)*

- **ProjectM.Network.Snapshot_CastleBuildingAttachToParentsBuffer**
  - *(No fields)*

- **ProjectM.Network.Snapshot_InventoryInstanceElement**
  - *(No fields)*

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

- **ProjectM.Network.Snapshot_ResearchBuffer**
  - *(No fields)*

- **[0]**
  - `Value: 59`

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
  - `Value: 0`

- **[220]**
  - `Value: 0`

- **[221]**
  - `Value: 0`

- **[222]**
  - `Value: 0`

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

- **[248]**
  - `Value: 238`

- **[249]**
  - `Value: 223`

- **[250]**
  - `Value: 19`

- **[251]**
  - `Value: 253`

- **[252]**
  - `Value: 0`

- **[253]**
  - `Value: 0`

- **[254]**
  - `Value: 0`

- **[255]**
  - `Value: 0`

- **[256]**
  - `Value: 9`

- **[257]**
  - `Value: 113`

- **[258]**
  - `Value: 171`

- **[259]**
  - `Value: 145`

- **[260]**
  - `Value: 0`

- **[261]**
  - `Value: 0`

- **[262]**
  - `Value: 0`

- **[263]**
  - `Value: 0`

- **[264]**
  - `Value: 110`

- **[265]**
  - `Value: 18`

- **[266]**
  - `Value: 14`

- **[267]**
  - `Value: 124`

- **[268]**
  - `Value: 0`

- **[269]**
  - `Value: 0`

- **[270]**
  - `Value: 0`

- **[271]**
  - `Value: 0`

- **[272]**
  - `Value: 40`

- **[273]**
  - `Value: 203`

- **[274]**
  - `Value: 143`

- **[275]**
  - `Value: 155`

- **[276]**
  - `Value: 0`

- **[277]**
  - `Value: 0`

- **[278]**
  - `Value: 0`

- **[279]**
  - `Value: 0`

- **[280]**
  - `Value: 143`

- **[281]**
  - `Value: 171`

- **[282]**
  - `Value: 18`

- **[283]**
  - `Value: 136`

- **[284]**
  - `Value: 0`

- **[285]**
  - `Value: 0`

- **[286]**
  - `Value: 0`

- **[287]**
  - `Value: 0`

- **[288]**
  - `Value: 141`

- **[289]**
  - `Value: 81`

- **[290]**
  - `Value: 235`

- **[291]**
  - `Value: 229`

- **[292]**
  - `Value: 0`

- **[293]**
  - `Value: 0`

- **[294]**
  - `Value: 0`

- **[295]**
  - `Value: 0`

- **[296]**
  - `Value: 174`

- **[297]**
  - `Value: 79`

- **[298]**
  - `Value: 193`

- **[299]**
  - `Value: 172`

- **716 total elements but only showing the first 36**
  - *(No fields)*

- **ProjectM.BlueprintRequirementBuffer**
  - *(No fields)*

- **[0]**
  - `PrefabGUID: Item_Ingredient_Research_Scroll PrefabGuid(2065714452)`
  - `Amount: 20`

- **[1]**
  - `PrefabGUID: Item_Ingredient_ReinforcedPlank PrefabGuid(-1397591435)`
  - `Amount: 8`

- **[2]**
  - `PrefabGUID: Item_Ingredient_Cloth PrefabGuid(-700774739)`
  - `Amount: 8`

- **ProjectM.StationBonusBuffer**
  - *(No fields)*

- **[0]**
  - `StationBonusGuid: StationBonus_Research_1_ConfinedRoom PrefabGuid(-1143076987)`

- **[1]**
  - `StationBonusGuid: StationBonus_Research_2_MatchingFloor PrefabGuid(-1273877682)`

- **ProjectM.DiscoverCostBuffer**
  - *(No fields)*

- **[0]**
  - `PrefabGUID: Item_Ingredient_Research_Scroll PrefabGuid(2065714452)`
  - `Amount: 75`

- **ProjectM.DiscoverCategoryCostBuffer**
  - *(No fields)*

- **[0]**
  - `Category: ProjectM.TechCategory Weapon`
  - `PrefabGUID: Item_Ingredient_Research_Scroll PrefabGuid(2065714452)`
  - `Amount: 90`

- **[1]**
  - `Category: ProjectM.TechCategory Magic`
  - `PrefabGUID: Item_Ingredient_Research_Scroll PrefabGuid(2065714452)`
  - `Amount: 90`

- **[2]**
  - `Category: ProjectM.TechCategory Structure`
  - `PrefabGUID: Item_Ingredient_Research_Scroll PrefabGuid(2065714452)`
  - `Amount: 50`

- **ProjectM.ResearchBuffer**
  - *(No fields)*

- **[0]**
  - `ResearchGuid: Tech_Floor_Tailor PrefabGuid(-49029138)`
  - `IsResearchByStation: False`

- **[1]**
  - `ResearchGuid: Tech_Floor_Library PrefabGuid(-1851035383)`
  - `IsResearchByStation: False`

- **[2]**
  - `ResearchGuid: Tech_Storage_T02 PrefabGuid(2081297006)`
  - `IsResearchByStation: False`

- **[3]**
  - `ResearchGuid: Tech_Weapon_Sword_T06 PrefabGuid(-1685075160)`
  - `IsResearchByStation: False`

- **[4]**
  - `ResearchGuid: Tech_Weapon_Axe_T06 PrefabGuid(-2012042353)`
  - `IsResearchByStation: False`

- **[5]**
  - `ResearchGuid: Tech_Weapon_Mace_T06 PrefabGuid(-437562995)`
  - `IsResearchByStation: False`

- **[6]**
  - `ResearchGuid: Tech_Weapon_Spear_T06 PrefabGuid(-1396617298)`
  - `IsResearchByStation: False`

- **[7]**
  - `ResearchGuid: Tech_Weapon_Reaper_T06 PrefabGuid(1184108243)`
  - `IsResearchByStation: False`

- **[8]**
  - `ResearchGuid: Tech_Weapon_Crossbow_T06 PrefabGuid(1000023879)`
  - `IsResearchByStation: False`

- **[9]**
  - `ResearchGuid: Tech_Weapon_Longbow_T06 PrefabGuid(-1988689265)`
  - `IsResearchByStation: False`

- **[10]**
  - `ResearchGuid: Tech_Weapon_GreatSword_T06 PrefabGuid(175562220)`
  - `IsResearchByStation: False`

- **[11]**
  - `ResearchGuid: Tech_Weapon_Daggers_T06 PrefabGuid(-1688466299)`
  - `IsResearchByStation: False`

- **[12]**
  - `ResearchGuid: Tech_Weapon_TwinBlades_T06 PrefabGuid(928267897)`
  - `IsResearchByStation: False`

- **[13]**
  - `ResearchGuid: Tech_Weapon_Claws_T06 PrefabGuid(1738256866)`
  - `IsResearchByStation: False`

- **[14]**
  - `ResearchGuid: Tech_Weapon_Pistols_T06 PrefabGuid(-1341416577)`
  - `IsResearchByStation: False`

- **[15]**
  - `ResearchGuid: Tech_Weapon_Slashers_T06 PrefabGuid(-2121238754)`
  - `IsResearchByStation: False`

- **[16]**
  - `ResearchGuid: Tech_Weapon_Whip_T06 PrefabGuid(1500666524)`
  - `IsResearchByStation: False`

- **[17]**
  - `ResearchGuid: Tech_Armor_Chest_T06_Rogue PrefabGuid(-962794065)`
  - `IsResearchByStation: False`

- **[18]**
  - `ResearchGuid: Tech_Armor_Legs_T06_Rogue PrefabGuid(1811127257)`
  - `IsResearchByStation: False`

- **[19]**
  - `ResearchGuid: Tech_Armor_Gloves_T06_Rogue PrefabGuid(-1831064302)`
  - `IsResearchByStation: False`

- **[20]**
  - `ResearchGuid: Tech_Armor_Boots_T06_Rogue PrefabGuid(399247086)`
  - `IsResearchByStation: False`

- **[21]**
  - `ResearchGuid: Tech_Armor_Chest_T06_Brute PrefabGuid(320958383)`
  - `IsResearchByStation: False`

- **[22]**
  - `ResearchGuid: Tech_Armor_Legs_T06_Brute PrefabGuid(754248969)`
  - `IsResearchByStation: False`

- **[23]**
  - `ResearchGuid: Tech_Armor_Gloves_T06_Brute PrefabGuid(1232232420)`
  - `IsResearchByStation: False`

- **[24]**
  - `ResearchGuid: Tech_Armor_Boots_T06_Brute PrefabGuid(-867568357)`
  - `IsResearchByStation: False`

- **[25]**
  - `ResearchGuid: Tech_Armor_Chest_T06_Warrior PrefabGuid(-1191678823)`
  - `IsResearchByStation: False`

- **[26]**
  - `ResearchGuid: Tech_Armor_Legs_T06_Warrior PrefabGuid(-1866364260)`
  - `IsResearchByStation: False`

- **[27]**
  - `ResearchGuid: Tech_Armor_Boots_T06_Warrior PrefabGuid(-2023969604)`
  - `IsResearchByStation: False`

- **[28]**
  - `ResearchGuid: Tech_Armor_Gloves_T06_Warrior PrefabGuid(-215891793)`
  - `IsResearchByStation: False`

- **[29]**
  - `ResearchGuid: Tech_Armor_Chest_T06_Scholar PrefabGuid(1291904224)`
  - `IsResearchByStation: False`

- **[30]**
  - `ResearchGuid: Tech_Armor_Legs_T06_Scholar PrefabGuid(-1857837378)`
  - `IsResearchByStation: False`

- **[31]**
  - `ResearchGuid: Tech_Armor_Gloves_T06_Scholar PrefabGuid(-2034432336)`
  - `IsResearchByStation: False`

- **[32]**
  - `ResearchGuid: Tech_Armor_Boots_T06_Scholar PrefabGuid(-2051781325)`
  - `IsResearchByStation: False`

- **[33]**
  - `ResearchGuid: Tech_MagicSource_General_T06_AmethystPendant PrefabGuid(2120978146)`
  - `IsResearchByStation: False`

- **[34]**
  - `ResearchGuid: Tech_MagicSource_General_T06_RubyPendant PrefabGuid(75174829)`
  - `IsResearchByStation: False`

- **[35]**
  - `ResearchGuid: Tech_MagicSource_General_T06_SapphirePendant PrefabGuid(2105959904)`
  - `IsResearchByStation: False`

- **[36]**
  - `ResearchGuid: Tech_MagicSource_General_T06_EmeraldNecklace PrefabGuid(-2004423580)`
  - `IsResearchByStation: False`

- **[37]**
  - `ResearchGuid: Tech_MagicSource_General_T06_MistStoneNecklace PrefabGuid(-678626936)`
  - `IsResearchByStation: False`

- **[38]**
  - `ResearchGuid: Tech_MagicSource_General_T06_TopazAmulet PrefabGuid(1266173480)`
  - `IsResearchByStation: False`

- **[39]**
  - `ResearchGuid: Tech_Consumable_FireResistance_Canteen_T01 PrefabGuid(844019492)`
  - `IsResearchByStation: False`

- **[40]**
  - `ResearchGuid: Tech_Consumable_WranglersTea_GlassBottle_T01 PrefabGuid(-1805160530)`
  - `IsResearchByStation: False`

- **[41]**
  - `ResearchGuid: Tech_Consumable_GarlicResistance_GlassBottle_T02 PrefabGuid(1329925559)`
  - `IsResearchByStation: False`

- **[42]**
  - `ResearchGuid: Tech_Collection_Braziers02 PrefabGuid(1928348865)`
  - `IsResearchByStation: False`

- **[43]**
  - `ResearchGuid: Tech_Collection_CandleStands_T02 PrefabGuid(1186146964)`
  - `IsResearchByStation: False`

- **[44]**
  - `ResearchGuid: Tech_Collection_Furniture_Chairs_T02 PrefabGuid(-1393827852)`
  - `IsResearchByStation: False`

- **[45]**
  - `ResearchGuid: Tech_Collection_Fireplaces PrefabGuid(-820554605)`
  - `IsResearchByStation: False`

- **[46]**
  - `ResearchGuid: Tech_Collection_Pavement_Cobblestone PrefabGuid(1029462093)`
  - `IsResearchByStation: False`

- **[47]**
  - `ResearchGuid: Tech_Collection_Carpet_T02 PrefabGuid(-59044434)`
  - `IsResearchByStation: False`

- **[48]**
  - `ResearchGuid: Tech_Collection_FenceFountain_Noble_T02 PrefabGuid(-1776617088)`
  - `IsResearchByStation: False`

- **[49]**
  - `ResearchGuid: Tech_Collection_Furniture_Tables_T02 PrefabGuid(1970685025)`
  - `IsResearchByStation: False`

- **[50]**
  - `ResearchGuid: Tech_Collection_HangingLanterns_T02 PrefabGuid(-986883360)`
  - `IsResearchByStation: False`

- **[51]**
  - `ResearchGuid: Tech_Collection_Ornaments_Banners_T02 PrefabGuid(2134771043)`
  - `IsResearchByStation: False`

- **[52]**
  - `ResearchGuid: Tech_Collection_Garden_PlantersDecor_T02 PrefabGuid(1643488994)`
  - `IsResearchByStation: False`

- **[53]**
  - `ResearchGuid: Tech_Collection_Garden_Furniture_Lanterns_T02 PrefabGuid(-547241268)`
  - `IsResearchByStation: False`

- **[54]**
  - `ResearchGuid: Tech_Collection_Wallpapers_Prison01 PrefabGuid(1345992385)`
  - `IsResearchByStation: False`

- **[55]**
  - `ResearchGuid: Tech_Collection_Wallpapers_Cordial01 PrefabGuid(-1047045523)`
  - `IsResearchByStation: False`

- **[56]**
  - `ResearchGuid: Tech_Collection_Workshop_Decoration PrefabGuid(-1212695091)`
  - `IsResearchByStation: False`

- **[57]**
  - `ResearchGuid: Tech_Collection_Furniture_Desks_T02 PrefabGuid(-1949258784)`
  - `IsResearchByStation: False`

- **[58]**
  - `ResearchGuid: Tech_Collection_Furniture_Desk_Chairs_T02 PrefabGuid(-398123938)`
  - `IsResearchByStation: False`

- **59 total elements but only showing the first 36**
  - *(No fields)*

- **ProjectM.GameplayEventListeners**
  - *(No fields)*

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - 373290447`

- **ProjectM.Network.NetSnapshot**
  - *(No fields)*

- **[0]**
  - `Value: 98`

- **[1]**
  - `Value: 73`

- **[2]**
  - `Value: 241`

- **[3]**
  - `Value: 178`

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

- **ProjectM.Network.SnapshotFrameChangedBuffer**
  - *(No fields)*

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

- **ProjectM.CastleBuilding.Placement.RestrictPlacementToMapZones**
  - *(No fields)*

- **ProjectM.TileCollisionTag**
  - *(No fields)*

- **ProjectM.TilePathfindingTag**
  - *(No fields)*

- **ProjectM.TileHeightTag**
  - *(No fields)*

- **ProjectM.TileLineOfSightTag**
  - *(No fields)*

- **ProjectM.TilePlacementTag**
  - *(No fields)*

- **ProjectM.Scripting.ScriptSpawn**
  - *(No fields)*

- **ProjectM.CastleBuilding.Rebuilding.CastleRebuildCommonTag**
  - *(No fields)*

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

- **Unity.Entities.BlobAssetOwner**
  - *(No fields)*

- **ProjectM.TileModelRegistrationState**
  - *(No fields)*

- **ProjectM.Network.NetworkSnapshotType**
  - *(No fields)*

- **ProjectM.Tiles.TileModelLayer**
  - *(No fields)*

- **Unity.Physics.PhysicsWorldIndex**
  - *(No fields)*

