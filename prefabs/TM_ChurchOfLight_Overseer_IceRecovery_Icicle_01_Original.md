---
title: TM_ChurchOfLight_Overseer_IceRecovery_Icicle_01_Original
guid: 701017812
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

# TM_ChurchOfLight_Overseer_IceRecovery_Icicle_01_Original

**GUID:** `701017812`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- [EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [BuffResistances](/components/BuffResistances){:target="_blank"}
  - `SettingsEntity: ModifiableEntity(0:0)`
  - `InitialSettingGuid: BuffResistance_UberMobNoKnockback PrefabGuid(-995401394)`

- [GetOwnerRotation](/components/GetOwnerRotation){:target="_blank"}
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType RandomDirection`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Creator`
  - `InverseRotation: True`

- [GetTranslationOnSpawn](/components/GetTranslationOnSpawn){:target="_blank"}
  - `TranslationSource: ProjectM.GetTranslationSource Creator`
  - `SnapToGround: False`

- [Aggroable](/components/Aggroable){:target="_blank"}
  - `DistanceFactor: 1`
  - `AggroFactor: 1`
  - `Value: True`

- [FactionReference](/components/FactionReference){:target="_blank"}
  - `FactionGuid: ModifiablePrefabGUID PrefabGuid(1597367490)`

- [AiPointOfInterest](/components/AiPointOfInterest){:target="_blank"}
  - `Type: ProjectM.AiPointOfInterestType ResourceNode`

- [PlacementDestroyData](/components/PlacementDestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [LifeTime](/components/LifeTime){:target="_blank"}
  - `Duration: 40`
  - `EndAction: ProjectM.LifeTimeEndAction Kill`

- [Health](/components/Health){:target="_blank"}
  - `MaxHealth: 70`
  - `TimeOfDeath: 0`
  - `Value: 70`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- [HealthConstants](/components/HealthConstants){:target="_blank"}
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: True`
  - `DestroyAfterDuration: 0`
  - `DisableDamageSCT: False`

- [LastTranslation](/components/LastTranslation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ManualFirstFrameLastTranslation](/components/ManualFirstFrameLastTranslation){:target="_blank"}
  - `Value: Il2CppSystem.Nullable_Unboxed`1[float3]`

- [CollisionRadius](/components/CollisionRadius){:target="_blank"}
  - `Radius: 0.4`

- [Team](/components/Team){:target="_blank"}
  - `Value: 1`
  - `FactionIndex: 19`

- [TileBounds](/components/TileBounds){:target="_blank"}
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- [TileModelSpatialData](/components/TileModelSpatialData){:target="_blank"}
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- [TileData](/components/TileData){:target="_blank"}
  - `Data: Unity.Entities.BlobAssetReference`1[TileBlob] Unity.Entities.BlobAssetReference`1[TileBlob]`

- [EntityCategory](/components/EntityCategory){:target="_blank"}
  - `MainCategoryInt: 1`
  - `UnitCategoryInt: 7`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 2`
  - `ResourceLevel: 0`

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

- [FrameChanged](/components/FrameChanged){:target="_blank"}
  - `Value: -1`

- [NetworkSnapshot](/components/NetworkSnapshot){:target="_blank"}
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acekdgegehc`

- [TileModel](/components/TileModel){:target="_blank"}
  - `DisabledTileTypesInt: 0`

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

- [PostTransformMatrix](/components/PostTransformMatrix){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1.357f, 0f, 0f, 0f,  0f, 1.001547f, 0f, 0f,  0f, 0f, 1.357f, 0f,  0f, 0f, 0f, 1f)`

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
  - `_Value: 701017812`

- [CreateGameplayEventsOnDestroy](/components/CreateGameplayEventsOnDestroy){:target="_blank"}

- **[0]**
  - `EventId: Local - -136930912`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- [CreateGameplayEventsOnTick](/components/CreateGameplayEventsOnTick){:target="_blank"}

- **[0]**
  - `EventId: Local - -2037759647`
  - `Target: ProjectM.GameplayEventTarget Self`
  - `TickInterval: 1`
  - `TickTime: -0`
  - `MaxTicks: 2147483647`
  - `CallScriptOnTick: False`
  - `RandomTickOffset: 0`
  - `RandomTickInterval: 0`
  - `ResetWhenBuffStacksChanged: False`
  - `ResetWhenCastingAbility: GUID Not Found`

- [HealOnGameplayEvent](/components/HealOnGameplayEvent){:target="_blank"}

- **[0]**
  - `Health: 0`
  - `HealthPercent: 0.1`
  - `HealthPerSpellPower: 0`
  - `showSCT: True`
  - `TrueHealing: False`
  - `Who: ProjectM.HealOnGameplayEventWho Self`
  - `MultiplyMainFactorWithStacks: False`

- [GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -2037759647`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- [PlaySequenceOnDeath](/components/PlaySequenceOnDeath){:target="_blank"}

- **[0]**
  - `SequenceGuid: SequenceGUID 1914312735`

- [GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                                                         `
  - `Component                             `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Heal`
  - `GameplayEventId: Local - -2037759647`

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 212`

- **[1]**
  - `Value: 174`

- **[2]**
  - `Value: 200`

- **[3]**
  - `Value: 41`

- **[4]**
  - `Value: 41`

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
  - `Value: 32`

- **[11]**
  - `Value: 66`

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
  - `Value: 128`

- **[27]**
  - `Value: 63`

- **[28]**
  - `Value: 19`

- **[29]**
  - `Value: 0`

- **[30]**
  - `Value: 0`

- **[31]**
  - `Value: 0`

- **[32]**
  - `Value: 1`

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

- **56 total elements but only showing the first 36**
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

- [GetOwnerRotationOnlyOnSpawnTag](/components/GetOwnerRotationOnlyOnSpawnTag){:target="_blank"}
  - *(No fields)*

- [TileCollisionTag](/components/TileCollisionTag){:target="_blank"}
  - *(No fields)*

- [TilePathfindingTag](/components/TilePathfindingTag){:target="_blank"}
  - *(No fields)*

- [TileLineOfSightTag](/components/TileLineOfSightTag){:target="_blank"}
  - *(No fields)*

- [TilePlacementTag](/components/TilePlacementTag){:target="_blank"}
  - *(No fields)*

- [DisableWhenNoPlayersInRange](/components/DisableWhenNoPlayersInRange){:target="_blank"}
  - *(No fields)*

- [StaticTileModel](/components/StaticTileModel){:target="_blank"}
  - *(No fields)*

- [DropTable](/components/DropTable){:target="_blank"}
  - *(No fields)*

- [StaticPhysicsCollider](/components/StaticPhysicsCollider){:target="_blank"}
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
