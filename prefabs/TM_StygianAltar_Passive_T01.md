---
title: TM_StygianAltar_Passive_T01
guid: -1938449679
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

# TM_StygianAltar_Passive_T01

**GUID:** `-1938449679`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- **ProjectM.DismantleDestroyData**
  - `DismantleDestroyTime: 0.75`
  - `DismantleSequenceInstance: SequenceState`
  - `Id: Entity(0:0)`
  - `SkipDismantleTimeIfReplaced: False`
  - `WasDismantled: False`

- **ProjectM.BlueprintData**
  - `Entity: Prefab TM_StygianAltar_Passive_T01 PrefabGuid(-1938449679) - Entity(12358:3)`
  - `Guid: TM_StygianAltar_Passive_T01 PrefabGuid(-1938449679)`
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
  - `Level: -1`
  - `ConnectedTrophyUnlock: 37`
  - `ActiveSequenceGuid: SequenceGUID -1789594440`
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
  - `IntType: 2`
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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acefdecbehb`

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
  - `_Value: -1938449679`

- **ProjectM.CastleBuilding.CastleBuildingAttachToParentsBuffer**
  - *(No fields)*

- **ProjectM.CastleBuilding.CastleBuildingAttachedChildrenBuffer**
  - *(No fields)*

- **ProjectM.BuffBuffer**
  - *(No fields)*

- **ProjectM.InteractAbilityBuffer**
  - *(No fields)*

- **[0]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab P(ݰ<  ��V�<  ��r�=  ��X`
  - `Component <  �Ҁ�<         �`
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

- **ProjectM.Network.Snapshot_ResearchBuffer**
  - *(No fields)*

- **[0]**
  - `Value: 24`

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
  - `Value: 185`

- **[109]**
  - `Value: 111`

- **[110]**
  - `Value: 115`

- **[111]**
  - `Value: 170`

- **[112]**
  - `Value: 0`

- **[113]**
  - `Value: 0`

- **[114]**
  - `Value: 0`

- **[115]**
  - `Value: 0`

- **[116]**
  - `Value: 230`

- **[117]**
  - `Value: 92`

- **[118]**
  - `Value: 225`

- **[119]**
  - `Value: 109`

- **[120]**
  - `Value: 0`

- **[121]**
  - `Value: 0`

- **[122]**
  - `Value: 0`

- **[123]**
  - `Value: 0`

- **[124]**
  - `Value: 203`

- **[125]**
  - `Value: 144`

- **[126]**
  - `Value: 180`

- **[127]**
  - `Value: 210`

- **[128]**
  - `Value: 0`

- **[129]**
  - `Value: 0`

- **[130]**
  - `Value: 0`

- **[131]**
  - `Value: 0`

- **[132]**
  - `Value: 247`

- **[133]**
  - `Value: 43`

- **[134]**
  - `Value: 104`

- **[135]**
  - `Value: 26`

- **[136]**
  - `Value: 0`

- **[137]**
  - `Value: 0`

- **[138]**
  - `Value: 0`

- **[139]**
  - `Value: 0`

- **[140]**
  - `Value: 139`

- **[141]**
  - `Value: 164`

- **[142]**
  - `Value: 225`

- **[143]**
  - `Value: 181`

- **[144]**
  - `Value: 0`

- **[145]**
  - `Value: 0`

- **[146]**
  - `Value: 0`

- **[147]**
  - `Value: 0`

- **[148]**
  - `Value: 53`

- **[149]**
  - `Value: 7`

- **[150]**
  - `Value: 238`

- **[151]**
  - `Value: 12`

- **[152]**
  - `Value: 0`

- **[153]**
  - `Value: 0`

- **[154]**
  - `Value: 0`

- **[155]**
  - `Value: 0`

- **[156]**
  - `Value: 157`

- **[157]**
  - `Value: 245`

- **[158]**
  - `Value: 84`

- **[159]**
  - `Value: 156`

- **[160]**
  - `Value: 0`

- **[161]**
  - `Value: 0`

- **[162]**
  - `Value: 0`

- **[163]**
  - `Value: 0`

- **[164]**
  - `Value: 59`

- **[165]**
  - `Value: 243`

- **[166]**
  - `Value: 111`

- **[167]**
  - `Value: 180`

- **[168]**
  - `Value: 0`

- **[169]**
  - `Value: 0`

- **[170]**
  - `Value: 0`

- **[171]**
  - `Value: 0`

- **[172]**
  - `Value: 165`

- **[173]**
  - `Value: 7`

- **[174]**
  - `Value: 198`

- **[175]**
  - `Value: 109`

- **[176]**
  - `Value: 0`

- **[177]**
  - `Value: 0`

- **[178]**
  - `Value: 0`

- **[179]**
  - `Value: 0`

- **[180]**
  - `Value: 104`

- **[181]**
  - `Value: 168`

- **[182]**
  - `Value: 142`

- **[183]**
  - `Value: 69`

- **[184]**
  - `Value: 0`

- **[185]**
  - `Value: 0`

- **[186]**
  - `Value: 0`

- **[187]**
  - `Value: 0`

- **[188]**
  - `Value: 251`

- **[189]**
  - `Value: 68`

- **[190]**
  - `Value: 43`

- **[191]**
  - `Value: 218`

- **[192]**
  - `Value: 0`

- **[193]**
  - `Value: 0`

- **[194]**
  - `Value: 0`

- **[195]**
  - `Value: 0`

- **[196]**
  - `Value: 53`

- **[197]**
  - `Value: 242`

- **[198]**
  - `Value: 227`

- **[199]**
  - `Value: 230`

- **[200]**
  - `Value: 0`

- **[201]**
  - `Value: 0`

- **[202]**
  - `Value: 0`

- **[203]**
  - `Value: 0`

- **[204]**
  - `Value: 67`

- **[205]**
  - `Value: 134`

- **[206]**
  - `Value: 104`

- **[207]**
  - `Value: 208`

- **[208]**
  - `Value: 0`

- **[209]**
  - `Value: 0`

- **[210]**
  - `Value: 0`

- **[211]**
  - `Value: 0`

- **[212]**
  - `Value: 81`

- **[213]**
  - `Value: 155`

- **[214]**
  - `Value: 202`

- **[215]**
  - `Value: 119`

- **[216]**
  - `Value: 0`

- **[217]**
  - `Value: 0`

- **[218]**
  - `Value: 0`

- **[219]**
  - `Value: 0`

- **[220]**
  - `Value: 165`

- **[221]**
  - `Value: 64`

- **[222]**
  - `Value: 14`

- **[223]**
  - `Value: 115`

- **[224]**
  - `Value: 0`

- **[225]**
  - `Value: 0`

- **[226]**
  - `Value: 0`

- **[227]**
  - `Value: 0`

- **[228]**
  - `Value: 1`

- **[229]**
  - `Value: 74`

- **[230]**
  - `Value: 50`

- **[231]**
  - `Value: 5`

- **[232]**
  - `Value: 0`

- **[233]**
  - `Value: 0`

- **[234]**
  - `Value: 0`

- **[235]**
  - `Value: 0`

- **[236]**
  - `Value: 177`

- **[237]**
  - `Value: 83`

- **[238]**
  - `Value: 0`

- **[239]**
  - `Value: 10`

- **[240]**
  - `Value: 0`

- **[241]**
  - `Value: 0`

- **[242]**
  - `Value: 0`

- **[243]**
  - `Value: 0`

- **[244]**
  - `Value: 81`

- **[245]**
  - `Value: 129`

- **[246]**
  - `Value: 206`

- **[247]**
  - `Value: 24`

- **[248]**
  - `Value: 0`

- **[249]**
  - `Value: 0`

- **[250]**
  - `Value: 0`

- **[251]**
  - `Value: 0`

- **[252]**
  - `Value: 243`

- **[253]**
  - `Value: 241`

- **[254]**
  - `Value: 250`

- **[255]**
  - `Value: 84`

- **[256]**
  - `Value: 0`

- **[257]**
  - `Value: 0`

- **[258]**
  - `Value: 0`

- **[259]**
  - `Value: 0`

- **[260]**
  - `Value: 26`

- **[261]**
  - `Value: 215`

- **[262]**
  - `Value: 62`

- **[263]**
  - `Value: 61`

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
  - `Value: 23`

- **[270]**
  - `Value: 204`

- **[271]**
  - `Value: 32`

- **[272]**
  - `Value: 0`

- **[273]**
  - `Value: 0`

- **[274]**
  - `Value: 0`

- **[275]**
  - `Value: 0`

- **[276]**
  - `Value: 216`

- **[277]**
  - `Value: 90`

- **[278]**
  - `Value: 2`

- **[279]**
  - `Value: 50`

- **[280]**
  - `Value: 0`

- **[281]**
  - `Value: 0`

- **[282]**
  - `Value: 0`

- **[283]**
  - `Value: 0`

- **[284]**
  - `Value: 30`

- **[285]**
  - `Value: 62`

- **[286]**
  - `Value: 156`

- **[287]**
  - `Value: 227`

- **[288]**
  - `Value: 0`

- **[289]**
  - `Value: 0`

- **[290]**
  - `Value: 0`

- **[291]**
  - `Value: 0`

- **[292]**
  - `Value: 168`

- **[293]**
  - `Value: 140`

- **[294]**
  - `Value: 159`

- **[295]**
  - `Value: 255`

- **296 total elements but only showing the first 36**
  - *(No fields)*

- **ProjectM.BlueprintRequirementBuffer**
  - *(No fields)*

- **[0]**
  - `PrefabGUID: Item_Ingredient_Gem_Ruby_T02 PrefabGuid(51046573)`
  - `Amount: 1`

- **[1]**
  - `PrefabGUID: Item_Ingredient_Mineral_IronBar PrefabGuid(-1750550553)`
  - `Amount: 12`

- **[2]**
  - `PrefabGUID: Item_BloodEssence_T02_Greater PrefabGuid(271594022)`
  - `Amount: 4`

- **ProjectM.StationBonusBuffer**
  - *(No fields)*

- **[0]**
  - `StationBonusGuid: StationBonus_Research_1_ConfinedRoom PrefabGuid(-1143076987)`

- **[1]**
  - `StationBonusGuid: StationBonus_Research_2_MatchingFloor PrefabGuid(-1273877682)`

- **ProjectM.DiscoverCostBuffer**
  - *(No fields)*

- **[0]**
  - `PrefabGUID: Item_NetherShard_T01 PrefabGuid(2103989354)`
  - `Amount: 500`

- **ProjectM.DiscoverCategoryCostBuffer**
  - *(No fields)*

- **[0]**
  - `Category: ProjectM.TechCategory ElementalAwakenings`
  - `PrefabGUID: Item_NetherShard_T01 PrefabGuid(2103989354)`
  - `Amount: 400`

- **[1]**
  - `Category: ProjectM.TechCategory VampireAwakenings`
  - `PrefabGUID: Item_NetherShard_T02 PrefabGuid(576389135)`
  - `Amount: 600`

- **ProjectM.ResearchBuffer**
  - *(No fields)*

- **[0]**
  - `ResearchGuid: Tech_SpellPassive_Blood_T01_BloodSpray PrefabGuid(-1435275335)`
  - `IsResearchByStation: False`

- **[1]**
  - `ResearchGuid: Tech_SpellPassive_Chaos_T01_ChaosKindling PrefabGuid(1843485926)`
  - `IsResearchByStation: False`

- **[2]**
  - `ResearchGuid: Tech_SpellPassive_Unholy_T01_ArcaneAnimator PrefabGuid(-759918389)`
  - `IsResearchByStation: False`

- **[3]**
  - `ResearchGuid: Tech_SpellPassive_Illusion_T01_SpiritualInfusion PrefabGuid(443034615)`
  - `IsResearchByStation: False`

- **[4]**
  - `ResearchGuid: Tech_SpellPassive_Frost_T01_ColdSoul PrefabGuid(-1243503477)`
  - `IsResearchByStation: False`

- **[5]**
  - `ResearchGuid: Tech_SpellPassive_Storm_T01_LightningFastStrikes PrefabGuid(216926005)`
  - `IsResearchByStation: False`

- **[6]**
  - `ResearchGuid: Tech_SpellPassive_Blood_T02_BloodTypeEfficiency PrefabGuid(-1672153699)`
  - `IsResearchByStation: False`

- **[7]**
  - `ResearchGuid: Tech_SpellPassive_Chaos_T02_RenewingFlames PrefabGuid(-1267731653)`
  - `IsResearchByStation: False`

- **[8]**
  - `ResearchGuid: Tech_SpellPassive_Unholy_T02_SoulDrinker PrefabGuid(1841694629)`
  - `IsResearchByStation: False`

- **[9]**
  - `ResearchGuid: Tech_SpellPassive_Illusion_T02_FlowingSorcery PrefabGuid(1166977128)`
  - `IsResearchByStation: False`

- **[10]**
  - `ResearchGuid: Tech_SpellPassive_Frost_T02_ChillWeave PrefabGuid(-634698501)`
  - `IsResearchByStation: False`

- **[11]**
  - `ResearchGuid: Tech_SpellPassive_Storm_T02_EnhancedConductivity PrefabGuid(-421268939)`
  - `IsResearchByStation: False`

- **[12]**
  - `ResearchGuid: Tech_SpellPassive_Blood_T03_VBloodSlayer PrefabGuid(-798456253)`
  - `IsResearchByStation: False`

- **[13]**
  - `ResearchGuid: Tech_SpellPassive_Chaos_T03_Overpower PrefabGuid(2009766737)`
  - `IsResearchByStation: False`

- **[14]**
  - `ResearchGuid: Tech_SpellPassive_Unholy_T03_LethalStrikes PrefabGuid(1930313893)`
  - `IsResearchByStation: False`

- **[15]**
  - `ResearchGuid: Tech_SpellPassive_Illusion_T03_FeralHaste PrefabGuid(87181825)`
  - `IsResearchByStation: False`

- **[16]**
  - `ResearchGuid: Tech_SpellPassive_Frost_T03_Bastion PrefabGuid(167793585)`
  - `IsResearchByStation: False`

- **[17]**
  - `ResearchGuid: Tech_SpellPassive_Storm_T03_HungerForPower PrefabGuid(416186705)`
  - `IsResearchByStation: False`

- **[18]**
  - `ResearchGuid: Tech_SpellPassive_Blood_T04_Rampage PrefabGuid(1425732083)`
  - `IsResearchByStation: False`

- **[19]**
  - `ResearchGuid: Tech_SpellPassive_Chaos_T04_RavenousStrikes PrefabGuid(1027528474)`
  - `IsResearchByStation: False`

- **[20]**
  - `ResearchGuid: Tech_SpellPassive_Unholy_T04_EmbraceMayhem PrefabGuid(550246163)`
  - `IsResearchByStation: False`

- **[21]**
  - `ResearchGuid: Tech_SpellPassive_Illusion_T04_WickedPower PrefabGuid(839015128)`
  - `IsResearchByStation: False`

- **[22]**
  - `ResearchGuid: Tech_SpellPassive_Frost_T04_DarkEnchantment PrefabGuid(-476299746)`
  - `IsResearchByStation: False`

- **[23]**
  - `ResearchGuid: Tech_SpellPassive_Storm_T04_TurbulentVelocity PrefabGuid(-6320984)`
  - `IsResearchByStation: False`

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
  - `Value: 241`

- **[1]**
  - `Value: 154`

- **[2]**
  - `Value: 117`

- **[3]**
  - `Value: 140`

- **[4]**
  - `Value: 36`

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

- **43 total elements but only showing the first 36**
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

