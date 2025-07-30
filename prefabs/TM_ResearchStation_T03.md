---
title: TM_ResearchStation_T03
guid: -1262194203
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

# TM_ResearchStation_T03

**GUID:** `-1262194203`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- **ProjectM.DismantleDestroyData**
  - `DismantleDestroyTime: 0.75`
  - `DismantleSequenceInstance: SequenceState`
  - `Id: Entity(0:0)`
  - `SkipDismantleTimeIfReplaced: False`
  - `WasDismantled: False`

- **ProjectM.BlueprintData**
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

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.BuffResistances**
  - `SettingsEntity: ModifiableEntity(0:0)`
  - `InitialSettingGuid: BuffResistance_Structures PrefabGuid(-641281679)`

- **ProjectM.ResearchStation**
  - `Level: 80`
  - `ConnectedTrophyUnlock: 39`
  - `ActiveSequenceGuid: SequenceGUID -1329790392`
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
  - `_Value: -1262194203`

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
  - `Prefab `{��<  ��V�<  ��r�=`
  - `Component  ��X�<  �Ҁ�<     `
  - `ConditionalElements`
  - `Ability: AB_Interact_UseResearchstation_AbilityGroup PrefabGuid(14271023)`
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

- **ProjectM.Network.Snapshot_ResearchBuffer**

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

- **ProjectM.BlueprintRequirementBuffer**

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

- **ProjectM.StationBonusBuffer**

- **[0]**
  - `StationBonusGuid: StationBonus_Research_1_ConfinedRoom PrefabGuid(-1143076987)`

- **[1]**
  - `StationBonusGuid: StationBonus_Research_2_MatchingFloor PrefabGuid(-1273877682)`

- **ProjectM.DiscoverCostBuffer**

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

- **ProjectM.ResearchBuffer**

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

- **ProjectM.Scripting.ScriptSpawn**

- **ProjectM.CastleBuilding.Rebuilding.CastleRebuildCommonTag**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.TileModelRegistrationState**

- **ProjectM.Network.NetworkSnapshotType**

- **ProjectM.Tiles.TileModelLayer**

- **Unity.Physics.PhysicsWorldIndex**
