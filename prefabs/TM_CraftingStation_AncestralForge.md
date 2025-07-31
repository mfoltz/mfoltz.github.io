---
title: TM_CraftingStation_AncestralForge
guid: 48521126
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

# TM_CraftingStation_AncestralForge

**GUID:** `48521126`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- [ProjectM.DismantleDestroyData](/components/DismantleDestroyData)
  - `DismantleDestroyTime: 0.75`
  - `DismantleSequenceInstance: SequenceState`
  - `Id: Entity(0:0)`
  - `SkipDismantleTimeIfReplaced: False`
  - `WasDismantled: False`

- [ProjectM.Forge_Shared](/components/Forge_Shared)
  - `ItemEntity: NetworkedEntity(0:0)`
  - `RepairStartTime: 0`
  - `State: ProjectM.ForgeState Empty`
  - `RepairTime: 8`
  - `InitialResourceMultiplier: 0`
  - `InitialWeaponDurability: 0`

- [ProjectM.BlueprintData](/components/BlueprintData)
  - `Entity: Prefab TM_CraftingStation_AncestralForge PrefabGuid(48521126) - Entity(41445:2)`
  - `Guid: TM_CraftingStation_AncestralForge PrefabGuid(48521126)`
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

- [ProjectM.EntityOwner](/components/EntityOwner)
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator)
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.BuffResistances](/components/BuffResistances)
  - `SettingsEntity: ModifiableEntity(0:0)`
  - `InitialSettingGuid: BuffResistance_Structures PrefabGuid(-641281679)`

- **ProjectM.InventoryRouteParent**
  - `RouteEntity: NetworkedEntity(0:0)`
  - `RouteType: ProjectM.InventoryRouteType Incoming, Outgoing`
  - `AutoRouteItems: False`

- [ProjectM.UserOwner](/components/UserOwner)
  - `Owner: NetworkedEntity(0:0)`

- [ProjectM.WorkstationAssignedServant](/components/WorkstationAssignedServant)
  - `ServantEntity: Entity(0:0)`

- [ProjectM.EditableTileModel](/components/EditableTileModel)
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

- [ProjectM.CastleBuilding.CastleHeartConnection](/components/CastleHeartConnection)
  - `CastleHeartEntity: NetworkedEntity(0:0)`

- [ProjectM.CastleBuilding.CastleRoomConnection](/components/CastleRoomConnection)
  - `RoomEntity: NetworkedEntity(0:0)`

- [ProjectM.Gameplay.Scripting.Script_ApplyBuffUnderHealthThreshold_DataServer](/components/Script_ApplyBuffUnderHealthThreshold_DataServer)
  - `HealthFactor: 0.01`
  - `NewBuffEntity: Buff_General_Station_Repair PrefabGuid(-359018142)`
  - `TriggerSequence: SequenceGUID 0`
  - `OnDamageTakenListener: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `ThresholdMet: False`
  - `DontTriggerOnDots: False`
  - `DontTriggerInFlight: False`

- [ProjectM.CastleDecayAndRegen](/components/CastleDecayAndRegen)
  - `LastUpdatedTime: 0`
  - `DecayFactorOnTick: Unity.Mathematics.half 0.0005002022`
  - `RegenFactorOnTick: Unity.Mathematics.half 0.002500534`
  - `DecayThreshold: Unity.Mathematics.half 0.04998779`
  - `CanDieFromDecay: False`

- [ProjectM.CastleAreaRequirement](/components/CastleAreaRequirement)
  - `RequirementType: ProjectM.CastleBuilding.Placement.CastleAreaRequirementType AttachToOwnedArea`
  - `BlockPlacementOnRoads: True`
  - `AllowPlaceInObjectsInRepairState: False`
  - `AllowTilesStickingOutOfTerritory: False`

- [ProjectM.Interactable](/components/Interactable)
  - `CurrentTargetSequenceGuid: SequenceGUID 0`
  - `IgnoreLineOfSight: False`
  - `IgnoreBlockInteract: False`
  - `UseInteractAbilityName: False`
  - `Disabled: False`

- [ProjectM.InteractedUpon](/components/InteractedUpon)
  - `Interacting: False`
  - `BlockBuildingMovement: False`
  - `BlockBuildingDisassemble: False`

- [ProjectM.NameableInteractable](/components/NameableInteractable)
  - `Name: Unity.Collections.FixedString64Bytes`
  - `OnlyAllyRename: True`
  - `OnlyAllySee: False`

- **ProjectM.LastEditedBy**
  - `User: ProjectM.Network.NetworkId (None)`

- [ProjectM.CastleBuilding.CastleRebuildPhaseState](/components/CastleRebuildPhaseState)
  - `State: ProjectM.CastleBuilding.PhaseState None`

- [ProjectM.StationServants](/components/StationServants)
  - `Servants: ProjectM.ServantType None`

- [ProjectM.CastleWorkstation](/components/CastleWorkstation)
  - `MatchingFloorType: ProjectM.CastleBuilding.CastleFloorTypes Forge`
  - `BonusServantType: ProjectM.ServantType Blacksmith`
  - `ForceUpdateInStation: False`
  - `WorkstationLevel: ProjectM.WorkstationLevel None`

- [ProjectM.PlacementDestroyData](/components/PlacementDestroyData)
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Buffable](/components/Buffable)
  - `KnockbackResistanceIndex: 13`
  - `UniqueBuffCategories: ProjectM.BuffCategoryFlag Travel, Shapeshift`

- [ProjectM.CreatedTime](/components/CreatedTime)
  - `CreateTime: 0`

- [ProjectM.Health](/components/Health)
  - `MaxHealth: 100`
  - `TimeOfDeath: 0`
  - `Value: 100`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- [ProjectM.HealthConstants](/components/HealthConstants)
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: False`
  - `DestroyAfterDuration: 0`
  - `DisableDamageSCT: False`

- [ProjectM.Immortal](/components/Immortal)
  - `IsImmortal: True`

- [ProjectM.InventoryOwner](/components/InventoryOwner)
  - `LastUpdateVersion: 0`
  - `HasItems: False`

- **ProjectM.InventoryRouteParent_Outgoing**
  - `LinkedItemCategory: ProjectM.ItemCategory NONE`
  - `BlockedItemCategory: ProjectM.ItemCategory NONE`
  - `GeneralStorageLinked: False`
  - `GeneralStorageBlocked: False`

- [ProjectM.CollisionRadius](/components/CollisionRadius)
  - `Radius: 0.5`

- [ProjectM.Team](/components/Team)
  - `Value: 1`
  - `FactionIndex: -1`

- [ProjectM.TileBounds](/components/TileBounds)
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- [ProjectM.TileModelSpatialData](/components/TileModelSpatialData)
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- [ProjectM.TileData](/components/TileData)
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

- [ProjectM.ArmorLevel](/components/ArmorLevel)
  - `Level: 0`
  - `ModificationId: Unset`

- [ProjectM.BuffableFlagState](/components/BuffableFlagState)
  - `Value: ProjectM.ModifiableLong ProjectM.ModifiableLong`

- [ProjectM.EntityCategory](/components/EntityCategory)
  - `MainCategoryInt: 0`
  - `UnitCategoryInt: 5`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 0`
  - `ResourceLevel: 0`

- [ProjectM.StaticTransformCompatible](/components/StaticTransformCompatible)
  - `UseStaticTransform: False`
  - `StaticTransform: ProjectM.StaticTransformIndex StaticTransformIndex(TerrainChunk: 0,0, TransformIndex: 0)`
  - `NonStaticTransform_Pos: Unity.Mathematics.float2 float2(0f, 0f)`
  - `NonStaticTransform_Height: 0`
  - `NonStaticTransform_Rotation: ProjectM.Tiles.TileRotation None`

- [ProjectM.Sequencer.ImpactMaterial](/components/ImpactMaterial)
  - `IntType: 3`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `PlayOnSelf: False`

- [ProjectM.Network.Networked](/components/Networked)
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask](/components/UpToDateUserBitMask)
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.FrameChanged](/components/FrameChanged)
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot](/components/NetworkSnapshot)
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_ahdggihbkg`

- [ProjectM.Tiles.TileModel](/components/TileModel)
  - `DisabledTileTypesInt: 0`

- [ProjectM.CastleBuilding.CastleBuildingAttachSettings](/components/CastleBuildingAttachSettings)
  - `MoveWithParentWhenAttached: False`
  - `DestroyWithParentWhenAttached: True`
  - `LinkDestroyToParentWhenAttached: False`
  - `RestrictMoveWhenAttached: False`
  - `RestrictDismantleWhenAttached: False`
  - `MoveWithParentAlsoMovesOtherParents: False`

- [ProjectM.CastleBuilding.CastleBuildingMaxRange](/components/CastleBuildingMaxRange)
  - `MaxRange: 180`

- [ProjectM.Hybrid.HybridModelSeed](/components/HybridModelSeed)
  - `Seed: 0`
  - `HasSetSeed: False`

- [Unity.Transforms.Rotation](/components/Rotation)
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation)
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Physics.PhysicsCollider](/components/PhysicsCollider)
  - `Value: Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider] Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider]`

- [Unity.Physics.Systems.StaticPhysicsWorldBodyIndex](/components/StaticPhysicsWorldBodyIndex)
  - `WorldBodyIndex: -1`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld)
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform)
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TeamReference](/components/TeamReference)
  - `Value: ModifiableEntity(0:0)`

- [ProjectM.TilePosition](/components/TilePosition)
  - `Tile: Unity.Mathematics.int2 int2(0, 0)`
  - `TileRotation: ProjectM.Tiles.TileRotation None`
  - `CompressedHeight: 0`

- [ProjectM.Network.NetworkId](/components/NetworkId)
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: 48521126`

- [ProjectM.CastleBuilding.CastleBuildingAttachToParentsBuffer](/components/CastleBuildingAttachToParentsBuffer)

- [ProjectM.CastleBuilding.CastleBuildingAttachedChildrenBuffer](/components/CastleBuildingAttachedChildrenBuffer)

- [ProjectM.BuffBuffer](/components/BuffBuffer)

- [ProjectM.InventoryInstanceElement](/components/InventoryInstanceElement)

- **[0]**
  - `Category: ProjectM.InventoryInstanceElement+InstanceCategory Main`
  - `Slots: 8`
  - `MaxSlots: 8`
  - `ExternalInventoryEntityPrefabGuid: External_Inventory PrefabGuid(1183666186)`
  - `ExternalInventoryEntity: NetworkedEntity(0:0)`
  - `RestrictedType: GUID Not Found`
  - `RestrictedCategory: 0`
  - `StartItems: Unity.Entities.BlobAssetReference`1[ProjectM.ExternalInventoryStartItems] Unity.Entities.BlobAssetReference`1[ProjectM.ExternalInventoryStartItems]`

- [ProjectM.InteractAbilityBuffer](/components/InteractAbilityBuffer)

- **[0]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab ���<  ��V�<  ��r�=  ��X�<  �`
  - `Component ��<         �s
�� `
  - `ConditionalElements`
  - `Ability: AB_Interact_UseForge_Ability_Group PrefabGuid(-827928543)`
  - `Importance: 1`
  - `HideInteractHUDWhileCasting: False`

- **[1]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab � `�Y6�@                      P`
  - `Component ��<  ���<  ��V�< `
  - `ConditionalElements`
  - `Ability: AB_Interact_UseForge_Ability_Group PrefabGuid(-827928543)`
  - `Importance: 1`
  - `HideInteractHUDWhileCasting: False`

- **[2]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                                  `
  - `Component                      `
  - `ConditionalElements`
  - `Ability: AB_Interact_OpenContainer_DisabledDummy_AbilityGroup PrefabGuid(1039955663)`
  - `Importance: 1`
  - `HideInteractHUDWhileCasting: False`

- [ProjectM.CreateGameplayEventsOnSpawn](/components/CreateGameplayEventsOnSpawn)

- **[0]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget Self`

- [ProjectM.ApplyBuffOnGameplayEvent](/components/ApplyBuffOnGameplayEvent)

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

- [ProjectM.GameplayEventIdMapping](/components/GameplayEventIdMapping)

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 373290447`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.Network.Snapshot_CastleBuildingAttachedChildrenBuffer](/components/Snapshot_CastleBuildingAttachedChildrenBuffer)

- [ProjectM.Network.Snapshot_CastleBuildingAttachToParentsBuffer](/components/Snapshot_CastleBuildingAttachToParentsBuffer)

- [ProjectM.Network.Snapshot_InventoryInstanceElement](/components/Snapshot_InventoryInstanceElement)

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

- [ProjectM.BlueprintRequirementBuffer](/components/BlueprintRequirementBuffer)

- **[0]**
  - `PrefabGUID: Item_BloodEssence_T03_Primal PrefabGuid(1566989408)`
  - `Amount: 1`

- **[1]**
  - `PrefabGUID: Item_Ingredient_RadiumAlloy PrefabGuid(2116142390)`
  - `Amount: 8`

- **[2]**
  - `PrefabGUID: Item_Ingredient_Mineral_IronBar PrefabGuid(-1750550553)`
  - `Amount: 16`

- [ProjectM.StationBonusBuffer](/components/StationBonusBuffer)

- **[0]**
  - `StationBonusGuid: StationBonus_Workstation_4_BloodEssence_Power PrefabGuid(-1264959599)`

- **[1]**
  - `StationBonusGuid: StationBonus_Workstation_1_ConfinedRoom PrefabGuid(-559914291)`

- **[2]**
  - `StationBonusGuid: StationBonus_Workstation_2_MatchingFloor PrefabGuid(2138932807)`

- [ProjectM.GameplayEventListeners](/components/GameplayEventListeners)

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - 373290447`

- [ProjectM.Network.NetSnapshot](/components/NetSnapshot)

- **[0]**
  - `Value: 166`

- **[1]**
  - `Value: 95`

- **[2]**
  - `Value: 228`

- **[3]**
  - `Value: 2`

- **[4]**
  - `Value: 170`

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
  - `Value: 200`

- **[80]**
  - `Value: 66`

- **[81]**
  - `Value: 0`

- **[82]**
  - `Value: 0`

- **[83]**
  - `Value: 128`

- **[84]**
  - `Value: 63`

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
  - `Value: 200`

- **[96]**
  - `Value: 66`

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

- [ProjectM.Network.SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer)

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

- **61 total elements but only showing the first 36**

- [ProjectM.MoveStopTrigger](/components/MoveStopTrigger)

- [ProjectM.CastleBuilding.Placement.RestrictPlacementToMapZones](/components/RestrictPlacementToMapZones)

- [ProjectM.TileCollisionTag](/components/TileCollisionTag)

- [ProjectM.TilePathfindingTag](/components/TilePathfindingTag)

- [ProjectM.TileLineOfSightTag](/components/TileLineOfSightTag)

- [ProjectM.TilePlacementTag](/components/TilePlacementTag)

- [ProjectM.DisableWhenNoPlayersInRange](/components/DisableWhenNoPlayersInRange)

- [ProjectM.Scripting.ScriptSpawn](/components/ScriptSpawn)

- [ProjectM.CastleBuilding.Rebuilding.CastleRebuildUniqueTag](/components/CastleRebuildUniqueTag)

- [ProjectM.CastleBuilding.Rebuilding.CastleRebuildRequiredTag](/components/CastleRebuildRequiredTag)

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner)

- [ProjectM.TileModelRegistrationState](/components/TileModelRegistrationState)

- [ProjectM.Network.NetworkSnapshotType](/components/NetworkSnapshotType)

- [ProjectM.Tiles.TileModelLayer](/components/TileModelLayer)

- [Unity.Physics.PhysicsWorldIndex](/components/PhysicsWorldIndex)
