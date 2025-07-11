---
title: TM_CraftingStation_TailorBench
nav_order: 1
parent: TM Prefabs
---

# TM_CraftingStation_TailorBench

**Prefab GUID:** `-952755594`

## Components

- **ProjectM.DismantleDestroyData**
  - `DismantleDestroyTime: 0.75`
  - `DismantleSequenceInstance: SequenceState`
  - `Id: Entity(0:0)`
  - `SkipDismantleTimeIfReplaced: False`
  - `WasDismantled: False`

- **ProjectM.BlueprintData**
  - `Entity: Prefab TM_CraftingStation_TailorBench PrefabGuid(-952755594) - Entity(4923:3)`
  - `Guid: TM_CraftingStation_TailorBench PrefabGuid(-952755594)`
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
  - `Value: Unity.Mathematics.float4x4 float4x4(-1f, 0f, 5.662441E-07f, 0.09f,  0f, 1f, 0f, 0f,  -5.662441E-07f, 0f, -1f, 1f,  0f, 0f, 0f, 1f)`

- **ProjectM.StationServants**
  - `Servants: ProjectM.ServantType None`

- **ProjectM.CastleWorkstation**
  - `MatchingFloorType: ProjectM.CastleBuilding.CastleFloorTypes Tailor`
  - `BonusServantType: ProjectM.ServantType Tailor`
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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_ciidcefbbb`

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
  - `_Value: -952755594`

- **ProjectM.QueuedWorkstationCraftAction**
  - *(No fields)*

- **ProjectM.QueuedWorkstationCraftActionItems**
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
  - `Prefab �/¡�  �u���  ��S��  p�"��`
  - `Component  ����         g��`
  - `ConditionalElements`
  - `Ability: AB_Interact_UseWorkstation_AbilityGroup PrefabGuid(2038916168)`
  - `Importance: 1`
  - `HideInteractHUDWhileCasting: False`

- **[1]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab �?��+`

- **�@                    **
  - `Component  �,¡�  �/¡�  �u��`
  - `ConditionalElements`
  - `Ability: AB_Interact_UseWorkstation_AbilityGroup PrefabGuid(2038916168)`
  - `Importance: 1`
  - `HideInteractHUDWhileCasting: False`

- **[2]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                               `
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

- **ProjectM.Network.Snapshot_QueuedWorkstationCraftAction**
  - *(No fields)*

- **ProjectM.BlueprintRequirementBuffer**
  - *(No fields)*

- **[0]**
  - `PrefabGUID: Item_BloodEssence_T01 PrefabGuid(862477668)`
  - `Amount: 200`

- **[1]**
  - `PrefabGUID: Item_Ingredient_Plank PrefabGuid(-1017402979)`
  - `Amount: 40`

- **[2]**
  - `PrefabGUID: Item_Ingredient_CottonYarn PrefabGuid(444400639)`
  - `Amount: 24`

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
  - `RecipeGuid: Recipe_Cloak_Main_T01 PrefabGuid(-1602222491)`

- **[1]**
  - `RecipeGuid: Recipe_Cloak_T01_DraculasCloak PrefabGuid(-71891063)`

- **[2]**
  - `RecipeGuid: Recipe_Cloak_T01_RazerCloak PrefabGuid(-778599774)`

- **[3]**
  - `RecipeGuid: Recipe_Cloak_T01_GloomrotCloak PrefabGuid(1882617197)`

- **[4]**
  - `RecipeGuid: Recipe_Cloak_Main_T02 PrefabGuid(1004984938)`

- **[5]**
  - `RecipeGuid: Recipe_Cloak_T02_DraculasCloak PrefabGuid(1801950047)`

- **[6]**
  - `RecipeGuid: Recipe_Cloak_T02_RazerCloak PrefabGuid(-2120661831)`

- **[7]**
  - `RecipeGuid: Recipe_Cloak_T02_GloomrotCloak PrefabGuid(950343746)`

- **[8]**
  - `RecipeGuid: Recipe_Cloak_Main_T03 PrefabGuid(544114772)`

- **[9]**
  - `RecipeGuid: Recipe_Cloak_T03_DraculasCloak PrefabGuid(489696550)`

- **[10]**
  - `RecipeGuid: Recipe_Cloak_T03_RazerCloak PrefabGuid(-1620745454)`

- **[11]**
  - `RecipeGuid: Recipe_Cloak_T03_GloomrotCloak PrefabGuid(1581753666)`

- **[12]**
  - `RecipeGuid: Recipe_Cloak_ShroudOfTheForest PrefabGuid(-1118059274)`

- **[13]**
  - `RecipeGuid: Recipe_Cloak_T0X_PMK PrefabGuid(-682982599)`

- **[14]**
  - `RecipeGuid: Recipe_Armor_Chest_T0X_Cosmetic_Dress01 PrefabGuid(-790370630)`

- **[15]**
  - `RecipeGuid: Recipe_Armor_Chest_T0X_Cosmetic_Suit01 PrefabGuid(115376160)`

- **[16]**
  - `RecipeGuid: Recipe_Armor_Legs_T0X_Cosmetic_Suit01 PrefabGuid(-1197884715)`

- **[17]**
  - `RecipeGuid: Recipe_Armor_Chest_T0X_PMK PrefabGuid(-434051712)`

- **[18]**
  - `RecipeGuid: Recipe_Armor_Legs_T0X_PMK PrefabGuid(587362253)`

- **[19]**
  - `RecipeGuid: Recipe_Armor_Gloves_T0X_PMK PrefabGuid(1318164039)`

- **[20]**
  - `RecipeGuid: Recipe_Armor_Boots_T0X_PMK PrefabGuid(-2073504211)`

- **[21]**
  - `RecipeGuid: Recipe_Armor_Chest_T0X_PMK_02 PrefabGuid(639186567)`

- **[22]**
  - `RecipeGuid: Recipe_Armor_Legs_T0X_PMK_02 PrefabGuid(-2087888734)`

- **[23]**
  - `RecipeGuid: Recipe_Armor_Chest_T0X_PMK_03 PrefabGuid(1712328309)`

- **[24]**
  - `RecipeGuid: Recipe_Armor_Legs_T0X_PMK_03 PrefabGuid(706994576)`

- **[25]**
  - `RecipeGuid: Recipe_Armor_Boots_T0X_PMK_03 PrefabGuid(-1595671236)`

- **[26]**
  - `RecipeGuid: Recipe_Armor_Chest_T0X_BlackfangSultan PrefabGuid(2082549756)`

- **[27]**
  - `RecipeGuid: Recipe_Armor_Legs_T0X_BlackfangSultan PrefabGuid(83251839)`

- **[28]**
  - `RecipeGuid: Recipe_Armor_Gloves_T0X_BlackfangSultan PrefabGuid(-2121295872)`

- **[29]**
  - `RecipeGuid: Recipe_Armor_Boots_T0X_BlackfangSultan PrefabGuid(-1358062441)`

- **[30]**
  - `RecipeGuid: Recipe_Armor_Chest_T05_Cotton PrefabGuid(724016990)`

- **[31]**
  - `RecipeGuid: Recipe_Armor_Legs_T05_Cotton PrefabGuid(321376258)`

- **[32]**
  - `RecipeGuid: Recipe_Armor_Gloves_T05_Cotton PrefabGuid(1314134803)`

- **[33]**
  - `RecipeGuid: Recipe_Armor_Boots_T05_Cotton PrefabGuid(1859811298)`

- **[34]**
  - `RecipeGuid: Recipe_Armor_Chest_T06_Iron_Rogue PrefabGuid(-921085381)`

- **[35]**
  - `RecipeGuid: Recipe_Armor_Legs_T06_Iron_Rogue PrefabGuid(1989724461)`

- **[36]**
  - `RecipeGuid: Recipe_Armor_Gloves_T06_Iron_Rogue PrefabGuid(550971753)`

- **[37]**
  - `RecipeGuid: Recipe_Armor_Boots_T06_Iron_Rogue PrefabGuid(-501436877)`

- **[38]**
  - `RecipeGuid: Recipe_Armor_Chest_T06_Iron_Brute PrefabGuid(1640689004)`

- **[39]**
  - `RecipeGuid: Recipe_Armor_Legs_T06_Iron_Brute PrefabGuid(1446070886)`

- **[40]**
  - `RecipeGuid: Recipe_Armor_Gloves_T06_Iron_Brute PrefabGuid(55560401)`

- **[41]**
  - `RecipeGuid: Recipe_Armor_Boots_T06_Iron_Brute PrefabGuid(564937663)`

- **[42]**
  - `RecipeGuid: Recipe_Armor_Chest_T06_Iron_Warrior PrefabGuid(917114760)`

- **[43]**
  - `RecipeGuid: Recipe_Armor_Legs_T06_Iron_Warrior PrefabGuid(1489561003)`

- **[44]**
  - `RecipeGuid: Recipe_Armor_Gloves_T06_Iron_Warrior PrefabGuid(1321683558)`

- **[45]**
  - `RecipeGuid: Recipe_Armor_Boots_T06_Iron_Warrior PrefabGuid(1598255582)`

- **[46]**
  - `RecipeGuid: Recipe_Armor_Chest_T06_Iron_Scholar PrefabGuid(969479018)`

- **[47]**
  - `RecipeGuid: Recipe_Armor_Legs_T06_Iron_Scholar PrefabGuid(1934342576)`

- **[48]**
  - `RecipeGuid: Recipe_Armor_Gloves_T06_Iron_Scholar PrefabGuid(2029351741)`

- **[49]**
  - `RecipeGuid: Recipe_Armor_Boots_T06_Iron_Scholar PrefabGuid(-1790839980)`

- **[50]**
  - `RecipeGuid: Recipe_Armor_Chest_T07_Silk PrefabGuid(590293987)`

- **[51]**
  - `RecipeGuid: Recipe_Armor_Legs_T07_Silk PrefabGuid(-1310297862)`

- **[52]**
  - `RecipeGuid: Recipe_Armor_Gloves_T07_Silk PrefabGuid(-1221068660)`

- **[53]**
  - `RecipeGuid: Recipe_Armor_Boots_T07_Silk PrefabGuid(-18516146)`

- **[54]**
  - `RecipeGuid: Recipe_Armor_Chest_T08_DarkSilver_Rogue PrefabGuid(2080647005)`

- **[55]**
  - `RecipeGuid: Recipe_Armor_Legs_T08_DarkSilver_Rogue PrefabGuid(24363319)`

- **[56]**
  - `RecipeGuid: Recipe_Armor_Gloves_T08_DarkSilver_Rogue PrefabGuid(894482163)`

- **[57]**
  - `RecipeGuid: Recipe_Armor_Boots_T08_DarkSilver_Rogue PrefabGuid(1020324654)`

- **[58]**
  - `RecipeGuid: Recipe_Armor_Chest_T08_DarkSilver_Brute PrefabGuid(909405972)`

- **[59]**
  - `RecipeGuid: Recipe_Armor_Legs_T08_DarkSilver_Brute PrefabGuid(392270656)`

- **[60]**
  - `RecipeGuid: Recipe_Armor_Gloves_T08_DarkSilver_Brute PrefabGuid(-693799437)`

- **[61]**
  - `RecipeGuid: Recipe_Armor_Boots_T08_DarkSilver_Brute PrefabGuid(481223129)`

- **[62]**
  - `RecipeGuid: Recipe_Armor_Chest_T08_DarkSilver_Warrior PrefabGuid(636393327)`

- **[63]**
  - `RecipeGuid: Recipe_Armor_Legs_T08_DarkSilver_Warrior PrefabGuid(1912958943)`

- **[64]**
  - `RecipeGuid: Recipe_Armor_Gloves_T08_DarkSilver_Warrior PrefabGuid(1193907705)`

- **[65]**
  - `RecipeGuid: Recipe_Armor_Boots_T08_DarkSilver_Warrior PrefabGuid(-1671420432)`

- **[66]**
  - `RecipeGuid: Recipe_Armor_Chest_T08_DarkSilver_Scholar PrefabGuid(-246992105)`

- **[67]**
  - `RecipeGuid: Recipe_Armor_Legs_T08_DarkSilver_Scholar PrefabGuid(1352971933)`

- **[68]**
  - `RecipeGuid: Recipe_Armor_Gloves_T08_DarkSilver_Scholar PrefabGuid(-494730465)`

- **[69]**
  - `RecipeGuid: Recipe_Armor_Boots_T08_DarkSilver_Scholar PrefabGuid(26969974)`

- **[70]**
  - `RecipeGuid: Recipe_Armor_Chest_T09_Dracula_Rogue PrefabGuid(-640317541)`

- **[71]**
  - `RecipeGuid: Recipe_Armor_Legs_T09_Dracula_Rogue PrefabGuid(1779568881)`

- **[72]**
  - `RecipeGuid: Recipe_Armor_Gloves_T09_Dracula_Rogue PrefabGuid(-338932204)`

- **[73]**
  - `RecipeGuid: Recipe_Armor_Boots_T09_Dracula_Rogue PrefabGuid(-850978565)`

- **[74]**
  - `RecipeGuid: Recipe_Armor_Chest_T09_Dracula_Brute PrefabGuid(1130263669)`

- **[75]**
  - `RecipeGuid: Recipe_Armor_Legs_T09_Dracula_Brute PrefabGuid(39790654)`

- **[76]**
  - `RecipeGuid: Recipe_Armor_Gloves_T09_Dracula_Brute PrefabGuid(-1622946659)`

- **[77]**
  - `RecipeGuid: Recipe_Armor_Boots_T09_Dracula_Brute PrefabGuid(240689181)`

- **[78]**
  - `RecipeGuid: Recipe_Armor_Chest_T09_Dracula_Warrior PrefabGuid(-510627751)`

- **[79]**
  - `RecipeGuid: Recipe_Armor_Legs_T09_Dracula_Warrior PrefabGuid(-1621263742)`

- **[80]**
  - `RecipeGuid: Recipe_Armor_Gloves_T09_Dracula_Warrior PrefabGuid(1103938523)`

- **[81]**
  - `RecipeGuid: Recipe_Armor_Boots_T09_Dracula_Warrior PrefabGuid(-1023773403)`

- **[82]**
  - `RecipeGuid: Recipe_Armor_Chest_T09_Dracula_Scholar PrefabGuid(-1905495055)`

- **[83]**
  - `RecipeGuid: Recipe_Armor_Legs_T09_Dracula_Scholar PrefabGuid(-195466783)`

- **[84]**
  - `RecipeGuid: Recipe_Armor_Gloves_T09_Dracula_Scholar PrefabGuid(-1548502696)`

- **[85]**
  - `RecipeGuid: Recipe_Armor_Boots_T09_Dracula_Scholar PrefabGuid(-2040897849)`

- **86 total elements but only showing the first 36**
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
  - `Value: 118`

- **[1]**
  - `Value: 26`

- **[2]**
  - `Value: 54`

- **[3]**
  - `Value: 199`

- **[4]**
  - `Value: 32`

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

- **216 total elements but only showing the first 36**
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

- **58 total elements but only showing the first 36**
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
