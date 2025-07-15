---
title: TM_CraftingStation_JewelcraftingTable
guid: 508953830
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

# TM_CraftingStation_JewelcraftingTable

**GUID:** `508953830`

**Categories:** All, TM

## Components

- **ProjectM.DismantleDestroyData**
  - `DismantleDestroyTime: 0.75`
  - `DismantleSequenceInstance: SequenceState`
  - `Id: Entity(0:0)`
  - `SkipDismantleTimeIfReplaced: False`
  - `WasDismantled: False`

- **ProjectM.JewelCraftingStation**
  - `ActiveRecipeGuid: GUID Not Found`
  - `CraftProgress: 0`
  - `Status: ProjectM.CraftingStatus Normal`
  - `CraftedItem: NetworkedEntity(0:0)`
  - `CraftedItemTypeGuid: GUID Not Found`
  - `ActiveSequenceGuid: SequenceGUID -297576039`
  - `ActiveSequenceState: SequenceState`
  - `Id: Entity(0:0)`
  - `InactiveSequenceGuid: SequenceGUID 93473232`
  - `InactiveSequenceState: SequenceState`
  - `Id: Entity(0:0)`

- **ProjectM.BlueprintData**
  - `Entity: Prefab TM_CraftingStation_JewelcraftingTable PrefabGuid(508953830) - Entity(41256:2)`
  - `Guid: TM_CraftingStation_JewelcraftingTable PrefabGuid(508953830)`
  - `PlaceSequence: SequenceGUID -450089786`
  - `InvalidPlaceSequence: SequenceGUID 29614748`
  - `EditSequence: SequenceGUID -450089786`
  - `InvalidEditSequence: SequenceGUID 29614748`
  - `BuildingSequence: SequenceGUID 1352661667`
  - `PhasedBuildingSequence: SequenceGUID -1982272969`
  - `DismantledSequence: SequenceGUID -871915695`
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

- **ProjectM.InventoryRouteParent**
  - `RouteEntity: NetworkedEntity(0:0)`
  - `RouteType: ProjectM.InventoryRouteType Incoming, Outgoing`
  - `AutoRouteItems: False`

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
  - `Value: Unity.Mathematics.float4x4 float4x4(-0.7071071f, 0f, 0.7071069f, -1.22f,  0f, 1f, 0f, 0.2500002f,  -0.7071069f, 0f, -0.7071071f, 0.922f,  0f, 0f, 0f, 1f)`

- **ProjectM.StationServants**
  - `Servants: ProjectM.ServantType None`

- **ProjectM.CastleWorkstation**
  - `MatchingFloorType: ProjectM.CastleBuilding.CastleFloorTypes Temple`
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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_dcbbcheifg`

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
  - `_Value: 508953830`

- **ProjectM.JewelCraftingProcessingRequiredItem**
  - *(No fields)*

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
  - `Prefab �Ű<  ��V�<  ��r�=  ��X�<  �Ҁ�<`
  - `Component          �s��  �.`
  - `ConditionalElements`
  - `Ability: AB_Interact_UseJewelCraftingStation_AbilityGroup PrefabGuid(-191894025)`
  - `Importance: 1`
  - `HideInteractHUDWhileCasting: False`

- **[1]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab �}����@                      @�Ű<`
  - `Component   �Ű<  ��V�<  ��r`
  - `ConditionalElements`
  - `Ability: AB_Interact_UseJewelCraftingStation_AbilityGroup PrefabGuid(-191894025)`
  - `Importance: 1`
  - `HideInteractHUDWhileCasting: False`

- **[2]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                                      `
  - `Component                      `
  - `ConditionalElements`
  - `Ability: AB_Interact_OpenContainer_DisabledDummy_AbilityGroup PrefabGuid(1039955663)`
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

- **ProjectM.BlueprintRequirementBuffer**
  - *(No fields)*

- **[0]**
  - `PrefabGUID: Item_BloodEssence_T02_Greater PrefabGuid(271594022)`
  - `Amount: 4`

- **[1]**
  - `PrefabGUID: Item_Ingredient_Scourgestone PrefabGuid(1005440012)`
  - `Amount: 8`

- **[2]**
  - `PrefabGUID: Item_Ingredient_Gemdust PrefabGuid(820932258)`
  - `Amount: 64`

- **ProjectM.StationBonusBuffer**
  - *(No fields)*

- **[0]**
  - `StationBonusGuid: StationBonus_Workstation_4_BloodEssence_Power PrefabGuid(-1264959599)`

- **[1]**
  - `StationBonusGuid: StationBonus_Workstation_1_ConfinedRoom PrefabGuid(-559914291)`

- **[2]**
  - `StationBonusGuid: StationBonus_Workstation_2_MatchingFloor PrefabGuid(2138932807)`

- **ProjectM.WorkstationRecipesBuffer**
  - *(No fields)*

- **[0]**
  - `RecipeGuid: Recipe_Jewel_Blood_T04_Shadowbolt PrefabGuid(-1124531408)`

- **[1]**
  - `RecipeGuid: Recipe_Jewel_Blood_T04_BloodRite PrefabGuid(1349479077)`

- **[2]**
  - `RecipeGuid: Recipe_Jewel_Blood_T04_BloodRage PrefabGuid(1616468375)`

- **[3]**
  - `RecipeGuid: Recipe_Jewel_Blood_T04_BloodFountain PrefabGuid(-1647468496)`

- **[4]**
  - `RecipeGuid: Recipe_Jewel_Blood_T04_SanguineCoil PrefabGuid(-1824834918)`

- **[5]**
  - `RecipeGuid: Recipe_Jewel_Blood_T04_CarrionSwarm PrefabGuid(1394410783)`

- **[6]**
  - `RecipeGuid: Recipe_Jewel_Blood_T04_VeilOfBlood PrefabGuid(-389291045)`

- **[7]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T04_ChaosVolley PrefabGuid(-1862071851)`

- **[8]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T04_Aftershock PrefabGuid(-1432868001)`

- **[9]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T04_ChaosBarrier PrefabGuid(249492436)`

- **[10]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T04_PowerSurge PrefabGuid(-1231616717)`

- **[11]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T04_Void PrefabGuid(1628679944)`

- **[12]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T04_RainOfChaos PrefabGuid(-255313331)`

- **[13]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T04_VeilOfChaos PrefabGuid(-273088264)`

- **[14]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T04_CorruptedSkull PrefabGuid(-299276760)`

- **[15]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T04_CorpseExplosion PrefabGuid(-263798740)`

- **[16]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T04_WardOfTheDamned PrefabGuid(-1026108429)`

- **[17]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T04_DeathKnight PrefabGuid(-624069541)`

- **[18]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T04_Soulburn PrefabGuid(-530631333)`

- **[19]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T04_ChainsOfDeath PrefabGuid(495345726)`

- **[20]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T04_VeilOfBones PrefabGuid(-1669971047)`

- **[21]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T04_SpectralWolf PrefabGuid(253232005)`

- **[22]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T04_PhantomAegis PrefabGuid(-32531606)`

- **[23]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T04_MistTrance PrefabGuid(113014730)`

- **[24]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T04_WraithSpear PrefabGuid(1099730006)`

- **[25]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T04_Mosquito PrefabGuid(817310228)`

- **[26]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T04_Curse PrefabGuid(-1255084741)`

- **[27]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T04_VeilOfIllusion PrefabGuid(941258392)`

- **[28]**
  - `RecipeGuid: Recipe_Jewel_Frost_T04_FrostBat PrefabGuid(1669439853)`

- **[29]**
  - `RecipeGuid: Recipe_Jewel_Frost_T04_FrostBarrier PrefabGuid(-1916181867)`

- **[30]**
  - `RecipeGuid: Recipe_Jewel_Frost_T04_IceNova PrefabGuid(2058110132)`

- **[31]**
  - `RecipeGuid: Recipe_Jewel_Frost_T04_ColdSnap PrefabGuid(1548333309)`

- **[32]**
  - `RecipeGuid: Recipe_Jewel_Frost_T04_CrystalLance PrefabGuid(-366508312)`

- **[33]**
  - `RecipeGuid: Recipe_Jewel_Frost_T04_FrostCone PrefabGuid(-586089909)`

- **[34]**
  - `RecipeGuid: Recipe_Jewel_Frost_T04_VeilOfFrost PrefabGuid(-1413146031)`

- **[35]**
  - `RecipeGuid: Recipe_Jewel_Storm_T04_Cyclone PrefabGuid(-794779743)`

- **[36]**
  - `RecipeGuid: Recipe_Jewel_Storm_T04_PolarityShift PrefabGuid(-636221299)`

- **[37]**
  - `RecipeGuid: Recipe_Jewel_Storm_T04_Discharge PrefabGuid(1385565480)`

- **[38]**
  - `RecipeGuid: Recipe_Jewel_Storm_T04_LightningWall PrefabGuid(199150725)`

- **[39]**
  - `RecipeGuid: Recipe_Jewel_Storm_T04_BallLightning PrefabGuid(891968939)`

- **[40]**
  - `RecipeGuid: Recipe_Jewel_Storm_T04_LightningTendrils PrefabGuid(-38691585)`

- **[41]**
  - `RecipeGuid: Recipe_Jewel_Storm_T04_VeilOfStorm PrefabGuid(185593335)`

- **[42]**
  - `RecipeGuid: Recipe_Jewel_Blood_T03_Shadowbolt PrefabGuid(-132912845)`

- **[43]**
  - `RecipeGuid: Recipe_Jewel_Blood_T03_BloodRite PrefabGuid(1332879261)`

- **[44]**
  - `RecipeGuid: Recipe_Jewel_Blood_T03_BloodRage PrefabGuid(-117709259)`

- **[45]**
  - `RecipeGuid: Recipe_Jewel_Blood_T03_BloodFountain PrefabGuid(1536138304)`

- **[46]**
  - `RecipeGuid: Recipe_Jewel_Blood_T03_SanguineCoil PrefabGuid(-998540356)`

- **[47]**
  - `RecipeGuid: Recipe_Jewel_Blood_T03_CarrionSwarm PrefabGuid(265064568)`

- **[48]**
  - `RecipeGuid: Recipe_Jewel_Blood_T03_VeilOfBlood PrefabGuid(-1280075933)`

- **[49]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T03_ChaosVolley PrefabGuid(1013687480)`

- **[50]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T03_Aftershock PrefabGuid(19321091)`

- **[51]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T03_ChaosBarrier PrefabGuid(-1390850741)`

- **[52]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T03_PowerSurge PrefabGuid(-621123461)`

- **[53]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T03_Void PrefabGuid(-1993706550)`

- **[54]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T03_RainOfChaos PrefabGuid(-620902396)`

- **[55]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T03_VeilOfChaos PrefabGuid(-871123559)`

- **[56]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T03_CorruptedSkull PrefabGuid(625989230)`

- **[57]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T03_CorpseExplosion PrefabGuid(-476269715)`

- **[58]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T03_WardOfTheDamned PrefabGuid(405933740)`

- **[59]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T03_DeathKnight PrefabGuid(-145359715)`

- **[60]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T03_Soulburn PrefabGuid(-1836185186)`

- **[61]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T03_ChainsOfDeath PrefabGuid(912357966)`

- **[62]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T03_VeilOfBones PrefabGuid(-1660160596)`

- **[63]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T03_SpectralWolf PrefabGuid(1192126839)`

- **[64]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T03_PhantomAegis PrefabGuid(-244123374)`

- **[65]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T03_MistTrance PrefabGuid(593821386)`

- **[66]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T03_WraithSpear PrefabGuid(-970138509)`

- **[67]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T03_Mosquito PrefabGuid(1949752494)`

- **[68]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T03_Curse PrefabGuid(1646432213)`

- **[69]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T03_VeilOfIllusion PrefabGuid(832118211)`

- **[70]**
  - `RecipeGuid: Recipe_Jewel_Frost_T03_FrostBat PrefabGuid(1589453917)`

- **[71]**
  - `RecipeGuid: Recipe_Jewel_Frost_T03_FrostBarrier PrefabGuid(513866428)`

- **[72]**
  - `RecipeGuid: Recipe_Jewel_Frost_T03_IceNova PrefabGuid(995009212)`

- **[73]**
  - `RecipeGuid: Recipe_Jewel_Frost_T03_ColdSnap PrefabGuid(-1863610651)`

- **[74]**
  - `RecipeGuid: Recipe_Jewel_Frost_T03_CrystalLance PrefabGuid(-1334648733)`

- **[75]**
  - `RecipeGuid: Recipe_Jewel_Frost_T03_FrostCone PrefabGuid(-1217040138)`

- **[76]**
  - `RecipeGuid: Recipe_Jewel_Frost_T03_VeilOfFrost PrefabGuid(-245144906)`

- **[77]**
  - `RecipeGuid: Recipe_Jewel_Storm_T03_Cyclone PrefabGuid(-57395936)`

- **[78]**
  - `RecipeGuid: Recipe_Jewel_Storm_T03_PolarityShift PrefabGuid(-697842923)`

- **[79]**
  - `RecipeGuid: Recipe_Jewel_Storm_T03_Discharge PrefabGuid(20833766)`

- **[80]**
  - `RecipeGuid: Recipe_Jewel_Storm_T03_BallLightning PrefabGuid(595324174)`

- **[81]**
  - `RecipeGuid: Recipe_Jewel_Storm_T03_LightningWall PrefabGuid(-12176904)`

- **[82]**
  - `RecipeGuid: Recipe_Jewel_Storm_T03_LightningTendrils PrefabGuid(1717016346)`

- **[83]**
  - `RecipeGuid: Recipe_Jewel_Storm_T03_VeilOfStorm PrefabGuid(-1164864103)`

- **[84]**
  - `RecipeGuid: Recipe_Jewel_Blood_T02_Shadowbolt PrefabGuid(2140352508)`

- **[85]**
  - `RecipeGuid: Recipe_Jewel_Blood_T02_BloodRite PrefabGuid(-1673417294)`

- **[86]**
  - `RecipeGuid: Recipe_Jewel_Blood_T02_BloodRage PrefabGuid(-1730685483)`

- **[87]**
  - `RecipeGuid: Recipe_Jewel_Blood_T02_BloodFountain PrefabGuid(1790399614)`

- **[88]**
  - `RecipeGuid: Recipe_Jewel_Blood_T02_SanguineCoil PrefabGuid(805999157)`

- **[89]**
  - `RecipeGuid: Recipe_Jewel_Blood_T02_CarrionSwarm PrefabGuid(1327091316)`

- **[90]**
  - `RecipeGuid: Recipe_Jewel_Blood_T02_VeilOfBlood PrefabGuid(-471735309)`

- **[91]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T02_ChaosVolley PrefabGuid(2130221261)`

- **[92]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T02_Aftershock PrefabGuid(-2125962345)`

- **[93]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T02_ChaosBarrier PrefabGuid(-1441194655)`

- **[94]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T02_PowerSurge PrefabGuid(-421166152)`

- **[95]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T02_Void PrefabGuid(1804676837)`

- **[96]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T02_RainOfChaos PrefabGuid(-354986500)`

- **[97]**
  - `RecipeGuid: Recipe_Jewel_Chaos_T02_VeilOfChaos PrefabGuid(-712982171)`

- **[98]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T02_CorruptedSkull PrefabGuid(986923658)`

- **[99]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T02_CorpseExplosion PrefabGuid(-548400473)`

- **[100]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T02_WardOfTheDamned PrefabGuid(812735179)`

- **[101]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T02_DeathKnight PrefabGuid(-338535841)`

- **[102]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T02_Soulburn PrefabGuid(1259976804)`

- **[103]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T02_ChainsOfDeath PrefabGuid(1098089916)`

- **[104]**
  - `RecipeGuid: Recipe_Jewel_Unholy_T02_VeilOfBones PrefabGuid(-20844245)`

- **[105]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T02_SpectralWolf PrefabGuid(-1099144954)`

- **[106]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T02_PhantomAegis PrefabGuid(1588865021)`

- **[107]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T02_MistTrance PrefabGuid(-1972338710)`

- **[108]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T02_WraithSpear PrefabGuid(1130803007)`

- **[109]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T02_Mosquito PrefabGuid(251557275)`

- **[110]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T02_Curse PrefabGuid(-1928857475)`

- **[111]**
  - `RecipeGuid: Recipe_Jewel_Illusion_T02_VeilOfIllusion PrefabGuid(-899623094)`

- **[112]**
  - `RecipeGuid: Recipe_Jewel_Frost_T02_FrostBat PrefabGuid(-739674375)`

- **[113]**
  - `RecipeGuid: Recipe_Jewel_Frost_T02_FrostBarrier PrefabGuid(-722322275)`

- **[114]**
  - `RecipeGuid: Recipe_Jewel_Frost_T02_IceNova PrefabGuid(-1743625798)`

- **[115]**
  - `RecipeGuid: Recipe_Jewel_Frost_T02_ColdSnap PrefabGuid(-1921009561)`

- **[116]**
  - `RecipeGuid: Recipe_Jewel_Frost_T02_CrystalLance PrefabGuid(-295731844)`

- **[117]**
  - `RecipeGuid: Recipe_Jewel_Frost_T02_FrostCone PrefabGuid(-1885123423)`

- **[118]**
  - `RecipeGuid: Recipe_Jewel_Frost_T02_VeilOfFrost PrefabGuid(955124009)`

- **[119]**
  - `RecipeGuid: Recipe_Jewel_Storm_T02_Cyclone PrefabGuid(-1385380788)`

- **[120]**
  - `RecipeGuid: Recipe_Jewel_Storm_T02_PolarityShift PrefabGuid(-1843641524)`

- **[121]**
  - `RecipeGuid: Recipe_Jewel_Storm_T02_Discharge PrefabGuid(-1829203567)`

- **[122]**
  - `RecipeGuid: Recipe_Jewel_Storm_T02_BallLightning PrefabGuid(-269714118)`

- **[123]**
  - `RecipeGuid: Recipe_Jewel_Storm_T02_LightningWall PrefabGuid(793838493)`

- **[124]**
  - `RecipeGuid: Recipe_Jewel_Storm_T02_LightningTendrils PrefabGuid(1839373951)`

- **[125]**
  - `RecipeGuid: Recipe_Jewel_Storm_T02_VeilOfStorm PrefabGuid(-2021884201)`

- **126 total elements but only showing the first 36**
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
  - `Value: 230`

- **[1]**
  - `Value: 4`

- **[2]**
  - `Value: 86`

- **[3]**
  - `Value: 30`

- **[4]**
  - `Value: 59`

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

- **240 total elements but only showing the first 36**
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

- **62 total elements but only showing the first 36**
  - *(No fields)*

- **ProjectM.CastleBuilding.Placement.RestrictPlacementToMapZones**
  - *(No fields)*

- **ProjectM.TileCollisionTag**
  - *(No fields)*

- **ProjectM.TilePathfindingTag**
  - *(No fields)*

- **ProjectM.TileLineOfSightTag**
  - *(No fields)*

- **ProjectM.TilePlacementTag**
  - *(No fields)*

- **ProjectM.DisableWhenNoPlayersInRange**
  - *(No fields)*

- **ProjectM.Scripting.ScriptSpawn**
  - *(No fields)*

- **ProjectM.CastleBuilding.Rebuilding.CastleRebuildUniqueTag**
  - *(No fields)*

- **ProjectM.CastleBuilding.Rebuilding.CastleRebuildRequiredTag**
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

