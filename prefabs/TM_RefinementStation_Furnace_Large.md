---
title: TM_RefinementStation_Furnace_Large
guid: -222851985
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

# TM_RefinementStation_Furnace_Large

**GUID:** `-222851985`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- **ProjectM.DismantleDestroyData**
  - `DismantleDestroyTime: 0.75`
  - `DismantleSequenceInstance: SequenceState`
  - `Id: Entity(0:0)`
  - `SkipDismantleTimeIfReplaced: False`
  - `WasDismantled: False`

- **ProjectM.BlueprintData**
  - `Entity: Prefab TM_RefinementStation_Furnace_Large PrefabGuid(-222851985) - Entity(41417:2)`
  - `Guid: TM_RefinementStation_Furnace_Large PrefabGuid(-222851985)`
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

- **ProjectM.BuffResistances**
  - `SettingsEntity: ModifiableEntity(0:0)`
  - `InitialSettingGuid: BuffResistance_Structures PrefabGuid(-641281679)`

- **ProjectM.InventoryRouteParent**
  - `RouteEntity: NetworkedEntity(0:0)`
  - `RouteType: ProjectM.InventoryRouteType Incoming, Outgoing`
  - `AutoRouteItems: False`

- **ProjectM.Refinementstation**
  - `RefiningStartTime: 0`
  - `InputInventoryEntity: NetworkedEntity(0:0)`
  - `OutputInventoryEntity: NetworkedEntity(0:0)`
  - `CurrentRecipeGuid: GUID Not Found`
  - `Status: ProjectM.RefinementStatus NoInput`
  - `InventoryPrefabGuid: Refinementstation_Inventory_Big PrefabGuid(1436956144)`
  - `ActiveSequenceGuid: SequenceGUID -334555180`
  - `InactiveSequenceGuid: SequenceGUID 93473232`
  - `ActiveSequenceState: SequenceState`
  - `Id: Entity(0:0)`
  - `InactiveSequenceState: SequenceState`
  - `Id: Entity(0:0)`
  - `IsWorking: False`
  - `LastInventoryChangedVersion: 0`

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

- **ProjectM.NameableInteractable**
  - `Name: Unity.Collections.FixedString64Bytes`
  - `OnlyAllyRename: True`
  - `OnlyAllySee: False`

- **ProjectM.LastEditedBy**
  - `User: ProjectM.Network.NetworkId (None)`

- **ProjectM.CastleBuilding.CastleRebuildPhaseState**
  - `State: ProjectM.CastleBuilding.PhaseState None`

- **ProjectM.ServantInteractPointLocalTransform**
  - `Value: Unity.Mathematics.float4x4 float4x4(-1f, 0f, -3.278255E-06f, 0.0400093f,  0f, 1f, 0f, -0.01f,  3.278255E-06f, 0f, -1f, 2.04f,  0f, 0f, 0f, 1f)`

- **ProjectM.StationServants**
  - `Servants: ProjectM.ServantType None`

- **ProjectM.CastleWorkstation**
  - `MatchingFloorType: ProjectM.CastleBuilding.CastleFloorTypes Forge`
  - `BonusServantType: ProjectM.ServantType Blacksmith`
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
  - `DestroyAfterDuration: 1`
  - `DisableDamageSCT: False`

- **ProjectM.Immortal**
  - `IsImmortal: True`

- **ProjectM.InventoryOwner**
  - `LastUpdateVersion: 0`
  - `HasItems: False`

- **ProjectM.InventoryRouteParent_Outgoing**
  - `LinkedItemCategory: ProjectM.ItemCategory NONE`
  - `BlockedItemCategory: ProjectM.ItemCategory NONE`
  - `GeneralStorageLinked: False`
  - `GeneralStorageBlocked: False`

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
  - `IntType: 3`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `PlayOnSelf: False`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.SyncToUserBitMask**
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acfkgbkdkdk`

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
  - `_Value: -222851985`

- **ProjectM.CastleBuilding.CastleBuildingAttachToParentsBuffer**

- **ProjectM.CastleBuilding.CastleBuildingAttachedChildrenBuffer**

- **ProjectM.BuffBuffer**

- **ProjectM.InventoryInstanceElement**

- **ProjectM.Network.SyncToUserBuffer**

- **ProjectM.InteractAbilityBuffer**

- **[0]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab Уհ<  ��V�<  ��r�=  ��X�<  ��`
  - `Component �<         �s
��  `
  - `ConditionalElements`
  - `Ability: AB_Interact_UseRefinementStation_AbilityGroup PrefabGuid(897325595)`
  - `Importance: 1`
  - `HideInteractHUDWhileCasting: False`

- **[1]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab �� sY�@                      ��`
  - `Component �<  Уհ<  ��V�<  `
  - `ConditionalElements`
  - `Ability: AB_Interact_UseRefinementStation_AbilityGroup PrefabGuid(897325595)`
  - `Importance: 1`
  - `HideInteractHUDWhileCasting: False`

- **[2]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                                   `
  - `Component                      `
  - `ConditionalElements`
  - `Ability: AB_Interact_OpenContainer_DisabledDummy_AbilityGroup PrefabGuid(1039955663)`
  - `Importance: 1`
  - `HideInteractHUDWhileCasting: False`

- **ProjectM.CreateGameplayEventsOnSpawn**

- **[0]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget Self`

- **ProjectM.ApplyBuffOnGameplayEvent**

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

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 373290447`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **ProjectM.Network.Snapshot_CastleBuildingAttachedChildrenBuffer**

- **ProjectM.Network.Snapshot_CastleBuildingAttachToParentsBuffer**

- **ProjectM.Network.Snapshot_RefinementstationRecipesBuffer**

- **[0]**
  - `Value: 11`

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
  - `Value: 138`

- **[57]**
  - `Value: 146`

- **[58]**
  - `Value: 146`

- **[59]**
  - `Value: 2`

- **[60]**
  - `Value: 1`

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
  - `Value: 190`

- **[69]**
  - `Value: 222`

- **[70]**
  - `Value: 147`

- **[71]**
  - `Value: 153`

- **[72]**
  - `Value: 1`

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
  - `Value: 119`

- **[81]**
  - `Value: 91`

- **[82]**
  - `Value: 34`

- **[83]**
  - `Value: 167`

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
  - `Value: 235`

- **[93]**
  - `Value: 2`

- **[94]**
  - `Value: 226`

- **[95]**
  - `Value: 10`

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
  - `Value: 94`

- **[105]**
  - `Value: 234`

- **[106]**
  - `Value: 74`

- **[107]**
  - `Value: 194`

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
  - `Value: 38`

- **[117]**
  - `Value: 134`

- **[118]**
  - `Value: 135`

- **[119]**
  - `Value: 23`

- **[120]**
  - `Value: 1`

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
  - `Value: 13`

- **[129]**
  - `Value: 62`

- **[130]**
  - `Value: 208`

- **[131]**
  - `Value: 39`

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
  - `Value: 66`

- **[141]**
  - `Value: 27`

- **[142]**
  - `Value: 112`

- **[143]**
  - `Value: 107`

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
  - `Value: 159`

- **[153]**
  - `Value: 207`

- **[154]**
  - `Value: 21`

- **[155]**
  - `Value: 105`

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
  - `Value: 19`

- **[165]**
  - `Value: 94`

- **[166]**
  - `Value: 95`

- **[167]**
  - `Value: 203`

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
  - `Value: 157`

- **[177]**
  - `Value: 57`

- **[178]**
  - `Value: 173`

- **[179]**
  - `Value: 113`

- **[180]**
  - `Value: 0`

- **[181]**
  - `Value: 0`

- **[182]**
  - `Value: 0`

- **[183]**
  - `Value: 0`

- **184 total elements but only showing the first 36**

- **ProjectM.BlueprintRequirementBuffer**

- **[0]**
  - `PrefabGUID: Item_Ingredient_StoneBrick PrefabGuid(1788016417)`
  - `Amount: 16`

- **[1]**
  - `PrefabGUID: Item_Ingredient_RadiumAlloy PrefabGuid(2116142390)`
  - `Amount: 8`

- **ProjectM.StationBonusBuffer**

- **[0]**
  - `StationBonusGuid: StationBonus_Refinementstation_4_BloodEssence_Power PrefabGuid(587452849)`

- **[1]**
  - `StationBonusGuid: StationBonus_Refinementstation_6_ConfinedRoom_Big PrefabGuid(1561598423)`

- **[2]**
  - `StationBonusGuid: StationBonus_Refinementstation_2_MatchingFloor PrefabGuid(19937529)`

- **ProjectM.RefinementstationRecipesBuffer**

- **[0]**
  - `RecipeGuid: Recipe_Ingredient_CopperBar PrefabGuid(43160202)`
  - `Unlocked: True`
  - `Disabled: False`

- **[1]**
  - `RecipeGuid: Recipe_Ingredient_Sulfur PrefabGuid(-1718362434)`
  - `Unlocked: True`
  - `Disabled: False`

- **[2]**
  - `RecipeGuid: Recipe_Ingredient_Whetstone PrefabGuid(-1490920585)`
  - `Unlocked: False`
  - `Disabled: False`

- **[3]**
  - `RecipeGuid: Recipe_Ingredient_IronBar PrefabGuid(182584043)`
  - `Unlocked: False`
  - `Disabled: False`

- **[4]**
  - `RecipeGuid: Recipe_Ingredient_Glass PrefabGuid(-1035277730)`
  - `Unlocked: False`
  - `Disabled: False`

- **[5]**
  - `RecipeGuid: Recipe_Consumable_EmptyBottle_T02_Refinement PrefabGuid(461575192)`
  - `Unlocked: True`
  - `Disabled: False`

- **[6]**
  - `RecipeGuid: Recipe_Ingredient_Scourgestone PrefabGuid(667958797)`
  - `Unlocked: False`
  - `Disabled: False`

- **[7]**
  - `RecipeGuid: Recipe_Ingredient_RadiumAlloy PrefabGuid(1802509122)`
  - `Unlocked: False`
  - `Disabled: False`

- **[8]**
  - `RecipeGuid: Recipe_Ingredient_DarkSilverBar PrefabGuid(1763037087)`
  - `Unlocked: False`
  - `Disabled: False`

- **[9]**
  - `RecipeGuid: Recipe_Ingredient_GoldBar PrefabGuid(-882942445)`
  - `Unlocked: False`
  - `Disabled: False`

- **[10]**
  - `RecipeGuid: Recipe_Ingredient_Emberglass PrefabGuid(1907177885)`
  - `Unlocked: False`
  - `Disabled: False`

- **ProjectM.GameplayEventListeners**

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - 373290447`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.CastleBuilding.Placement.RestrictPlacementToMapZones**

- **ProjectM.TileCollisionTag**

- **ProjectM.TilePathfindingTag**

- **ProjectM.TileHeightTag**

- **ProjectM.TileLineOfSightTag**

- **ProjectM.TilePlacementTag**

- **ProjectM.DisableWhenNoPlayersInRange**

- **ProjectM.Scripting.ScriptSpawn**

- **ProjectM.CastleBuilding.Rebuilding.CastleRebuildUniqueTag**

- **ProjectM.CastleBuilding.Rebuilding.CastleRebuildRequiredTag**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.TileModelRegistrationState**

- **ProjectM.Network.NetworkSnapshotType**

- **ProjectM.Tiles.TileModelLayer**

- **Unity.Physics.PhysicsWorldIndex**
