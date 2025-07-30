---
title: TM_CraftingStation_SimpleCraftingBench
guid: -1107784271
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

# TM_CraftingStation_SimpleCraftingBench

**GUID:** `-1107784271`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- **ProjectM.DismantleDestroyData**
  - `DismantleDestroyTime: 0.75`
  - `DismantleSequenceInstance: SequenceState`
  - `Id: Entity(0:0)`
  - `SkipDismantleTimeIfReplaced: False`
  - `WasDismantled: False`

- **ProjectM.BlueprintData**
  - `Entity: Prefab TM_CraftingStation_SimpleCraftingBench PrefabGuid(-1107784271) - Entity(14160:3)`
  - `Guid: TM_CraftingStation_SimpleCraftingBench PrefabGuid(-1107784271)`
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
  - `Value: Unity.Mathematics.float4x4 float4x4(-1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, -1f, 0.8f,  0f, 0f, 0f, 1f)`

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
  - `_Value: -1107784271`

- **ProjectM.QueuedWorkstationCraftAction**

- **ProjectM.QueuedWorkstationCraftActionItems**

- **ProjectM.CastleBuilding.CastleBuildingAttachToParentsBuffer**

- **ProjectM.CastleBuilding.CastleBuildingAttachedChildrenBuffer**

- **ProjectM.BuffBuffer**

- **ProjectM.InventoryInstanceElement**

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

- **[0]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab ��Ű<  ��V�<  ��r�=  ��X�<  �Ҁ�<`
  - `Component         �s
��  �.�`
  - `ConditionalElements`
  - `Ability: AB_Interact_UseWorkstation_AbilityGroup PrefabGuid(2038916168)`
  - `Importance: 1`
  - `HideInteractHUDWhileCasting: False`

- **[1]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab �D�`

- **qZ�@                      ��Ű<**
  - `Component  ��Ű<  ��V�<  ��r�`
  - `ConditionalElements`
  - `Ability: AB_Interact_UseWorkstation_AbilityGroup PrefabGuid(2038916168)`
  - `Importance: 1`
  - `HideInteractHUDWhileCasting: False`

- **[2]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                                       `
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

- **ProjectM.Network.Snapshot_InventoryInstanceElement**

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

- **ProjectM.Network.Snapshot_QueuedWorkstationCraftAction**

- **ProjectM.BlueprintRequirementBuffer**

- **[0]**
  - `PrefabGUID: Item_Ingredient_Plank PrefabGuid(-1017402979)`
  - `Amount: 8`

- **[1]**
  - `PrefabGUID: Item_Ingredient_Stone PrefabGuid(-1531666018)`
  - `Amount: 80`

- **[2]**
  - `PrefabGUID: Item_Ingredient_RuggedHide PrefabGuid(-1222725729)`
  - `Amount: 120`

- **ProjectM.StationBonusBuffer**

- **[0]**
  - `StationBonusGuid: StationBonus_Workstation_4_BloodEssence_Power PrefabGuid(-1264959599)`

- **[1]**
  - `StationBonusGuid: StationBonus_Workstation_1_ConfinedRoom PrefabGuid(-559914291)`

- **[2]**
  - `StationBonusGuid: StationBonus_Workstation_2_MatchingFloor PrefabGuid(2138932807)`

- **ProjectM.WorkstationRecipesBuffer**

- **[0]**
  - `RecipeGuid: Recipe_Weapon_Sword_T02_Bone_Reinforced PrefabGuid(1742703328)`

- **[1]**
  - `RecipeGuid: Recipe_Weapon_Axe_T02_Bone_Reinforced PrefabGuid(1031414138)`

- **[2]**
  - `RecipeGuid: Recipe_Weapon_Mace_T02_Bone_Reinforced PrefabGuid(1377610318)`

- **[3]**
  - `RecipeGuid: Recipe_Weapon_Spear_T02_Bone_Reinforced PrefabGuid(-1328539101)`

- **[4]**
  - `RecipeGuid: Recipe_Weapon_Crossbow_T02_Bone_Reinforced PrefabGuid(-1421664082)`

- **[5]**
  - `RecipeGuid: Recipe_Armor_Chest_T02_Bone_Reinforced PrefabGuid(1236392443)`

- **[6]**
  - `RecipeGuid: Recipe_Armor_Legs_T02_Bone_Reinforced PrefabGuid(-270797694)`

- **[7]**
  - `RecipeGuid: Recipe_Armor_Gloves_T02_Bone_Reinforced PrefabGuid(-2140040968)`

- **[8]**
  - `RecipeGuid: Recipe_Armor_Boots_T02_Bone_Reinforced PrefabGuid(785023263)`

- **[9]**
  - `RecipeGuid: Recipe_Cloak_Main_T01 PrefabGuid(-1602222491)`

- **[10]**
  - `RecipeGuid: Recipe_Cloak_T01_DraculasCloak PrefabGuid(-71891063)`

- **[11]**
  - `RecipeGuid: Recipe_Cloak_T01_RazerCloak PrefabGuid(-778599774)`

- **[12]**
  - `RecipeGuid: Recipe_Cloak_T01_GloomrotCloak PrefabGuid(1882617197)`

- **[13]**
  - `RecipeGuid: Recipe_MagicSource_General_T02_BloodRoseRing PrefabGuid(-377694156)`

- **[14]**
  - `RecipeGuid: Recipe_MagicSource_General_T03_GravediggerRing PrefabGuid(-84929462)`

- **[15]**
  - `RecipeGuid: Recipe_MagicSource_General_T04_KnightRing PrefabGuid(134822591)`

- **[16]**
  - `RecipeGuid: Recipe_MagicSource_General_T04_SorcererRing PrefabGuid(-1954484110)`

- **[17]**
  - `RecipeGuid: Recipe_MagicSource_General_T04_EmberChain PrefabGuid(606793986)`

- **[18]**
  - `RecipeGuid: Recipe_MagicSource_General_T04_FrozenEye PrefabGuid(-1252143324)`

- **[19]**
  - `RecipeGuid: Recipe_MagicSource_General_T04_Duskwatcher PrefabGuid(-1392969895)`

- **[20]**
  - `RecipeGuid: Recipe_MagicSource_General_T04_MistSignet PrefabGuid(-1643108625)`

- **[21]**
  - `RecipeGuid: Recipe_Weapon_Sword_T03_Copper PrefabGuid(-267802321)`

- **[22]**
  - `RecipeGuid: Recipe_Weapon_Axe_T03_Copper PrefabGuid(-1864396632)`

- **[23]**
  - `RecipeGuid: Recipe_Weapon_Mace_T03_Copper PrefabGuid(-356991727)`

- **[24]**
  - `RecipeGuid: Recipe_Weapon_Spear_T03_Copper PrefabGuid(-791471134)`

- **[25]**
  - `RecipeGuid: Recipe_Weapon_Crossbow_T03_Copper PrefabGuid(841082368)`

- **[26]**
  - `RecipeGuid: Recipe_Weapon_Longbow_T03_Copper PrefabGuid(-514405267)`

- **[27]**
  - `RecipeGuid: Recipe_Weapon_Sword_T04_Copper_Reinforced PrefabGuid(774557022)`

- **[28]**
  - `RecipeGuid: Recipe_Weapon_Axe_T04_Copper_Reinforced PrefabGuid(-411123427)`

- **[29]**
  - `RecipeGuid: Recipe_Weapon_Mace_T04_Copper_Reinforced PrefabGuid(897446828)`

- **[30]**
  - `RecipeGuid: Recipe_Weapon_Spear_T04_Copper_Reinforced PrefabGuid(-118222260)`

- **[31]**
  - `RecipeGuid: Recipe_Weapon_Crossbow_T04_Copper_Reinforced PrefabGuid(-283375796)`

- **[32]**
  - `RecipeGuid: Recipe_Weapon_Longbow_T04_Copper_Reinforced PrefabGuid(777859879)`

- **[33]**
  - `RecipeGuid: Recipe_Armor_Chest_T03_Cloth PrefabGuid(1384522986)`

- **[34]**
  - `RecipeGuid: Recipe_Armor_Legs_T03_Cloth PrefabGuid(951656438)`

- **[35]**
  - `RecipeGuid: Recipe_Armor_Gloves_T03_Cloth PrefabGuid(-1213072175)`

- **[36]**
  - `RecipeGuid: Recipe_Armor_Boots_T03_Cloth PrefabGuid(1159379254)`

- **[37]**
  - `RecipeGuid: Recipe_Armor_Chest_T04_Copper_Rogue PrefabGuid(-235084625)`

- **[38]**
  - `RecipeGuid: Recipe_Armor_Legs_T04_Copper_Rogue PrefabGuid(-1585906930)`

- **[39]**
  - `RecipeGuid: Recipe_Armor_Gloves_T04_Copper_Rogue PrefabGuid(-1109520881)`

- **[40]**
  - `RecipeGuid: Recipe_Armor_Boots_T04_Copper_Rogue PrefabGuid(30410046)`

- **[41]**
  - `RecipeGuid: Recipe_Armor_Chest_T04_Copper_Brute PrefabGuid(-42975513)`

- **[42]**
  - `RecipeGuid: Recipe_Armor_Legs_T04_Copper_Brute PrefabGuid(-1149764556)`

- **[43]**
  - `RecipeGuid: Recipe_Armor_Gloves_T04_Copper_Brute PrefabGuid(928177888)`

- **[44]**
  - `RecipeGuid: Recipe_Armor_Boots_T04_Copper_Brute PrefabGuid(-211066785)`

- **[45]**
  - `RecipeGuid: Recipe_Armor_Chest_T04_Copper_Warrior PrefabGuid(-850288860)`

- **[46]**
  - `RecipeGuid: Recipe_Armor_Legs_T04_Copper_Warrior PrefabGuid(-1228356397)`

- **[47]**
  - `RecipeGuid: Recipe_Armor_Gloves_T04_Copper_Warrior PrefabGuid(872441116)`

- **[48]**
  - `RecipeGuid: Recipe_Armor_Boots_T04_Copper_Warrior PrefabGuid(-1573355501)`

- **[49]**
  - `RecipeGuid: Recipe_Armor_Chest_T04_Copper_Scholar PrefabGuid(1490955797)`

- **[50]**
  - `RecipeGuid: Recipe_Armor_Legs_T04_Copper_Scholar PrefabGuid(1891096609)`

- **[51]**
  - `RecipeGuid: Recipe_Armor_Gloves_T04_Copper_Scholar PrefabGuid(1404998399)`

- **[52]**
  - `RecipeGuid: Recipe_Armor_Boots_T04_Copper_Scholar PrefabGuid(1241016364)`

- **[53]**
  - `RecipeGuid: Recipe_Ingredient_CastleKey_T01 PrefabGuid(-1158613345)`

- **[54]**
  - `RecipeGuid: Recipe_Ingredient_CastleKey_T02 PrefabGuid(-1538704240)`

- **55 total elements but only showing the first 36**

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
