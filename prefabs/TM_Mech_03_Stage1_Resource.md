---
title: TM_Mech_03_Stage1_Resource
guid: 535826937
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

# TM_Mech_03_Stage1_Resource

**GUID:** `535826937`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- [ProjectM.BuffResistances](/components/BuffResistances){:target="_blank"}
  - `SettingsEntity: ModifiableEntity(0:0)`
  - `InitialSettingGuid: BuffResistance_SpellImmune PrefabGuid(138461582)`

- [ProjectM.DurabilityTarget](/components/DurabilityTarget){:target="_blank"}
  - `DurabilityFactor: 0.75`

- [ProjectM.AoETargetImportance](/components/AoETargetImportance){:target="_blank"}
  - `Importance: 1`

- [ProjectM.SpawnPhysicsObjectOnDeath](/components/SpawnPhysicsObjectOnDeath){:target="_blank"}
  - `PhysicsObjectPrefab: SpiderTankScrap03_Broken PrefabGuid(1699935899)`
  - `AlwaysSpawn: False`

- [ProjectM.PlacementDestroyData](/components/PlacementDestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Buffable](/components/Buffable){:target="_blank"}
  - `KnockbackResistanceIndex: 13`
  - `UniqueBuffCategories: ProjectM.BuffCategoryFlag Travel, Shapeshift`

- [ProjectM.Health](/components/Health){:target="_blank"}
  - `MaxHealth: 180`
  - `TimeOfDeath: 0`
  - `Value: 180`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- [ProjectM.HealthConstants](/components/HealthConstants){:target="_blank"}
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: True`
  - `DestroyAfterDuration: 0`
  - `DisableDamageSCT: False`

- [ProjectM.CollisionRadius](/components/CollisionRadius){:target="_blank"}
  - `Radius: 1`

- [ProjectM.Team](/components/Team){:target="_blank"}
  - `Value: 1`
  - `FactionIndex: -1`

- [ProjectM.TileBounds](/components/TileBounds){:target="_blank"}
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- [ProjectM.TileModelSpatialData](/components/TileModelSpatialData){:target="_blank"}
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- [ProjectM.TileData](/components/TileData){:target="_blank"}
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

- [ProjectM.BuffableFlagState](/components/BuffableFlagState){:target="_blank"}
  - `Value: ProjectM.ModifiableLong ProjectM.ModifiableLong`

- [ProjectM.EntityCategory](/components/EntityCategory){:target="_blank"}
  - `MainCategoryInt: 1`
  - `UnitCategoryInt: 7`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 2`
  - `ResourceLevel: 60`

- [ProjectM.UnitLevel](/components/UnitLevel){:target="_blank"}
  - `Level: 70`
  - `HideLevel: False`

- [ProjectM.UnitLevelServerData](/components/UnitLevelServerData){:target="_blank"}
  - `HealthUnitBaseStatsTypeInt: 0`
  - `UnitBaseStatsTypeInt: 1`

- [ProjectM.StaticTransformCompatible](/components/StaticTransformCompatible){:target="_blank"}
  - `UseStaticTransform: False`
  - `StaticTransform: ProjectM.StaticTransformIndex StaticTransformIndex(TerrainChunk: 0,0, TransformIndex: 0)`
  - `NonStaticTransform_Pos: Unity.Mathematics.float2 float2(0f, 0f)`
  - `NonStaticTransform_Height: 0`
  - `NonStaticTransform_Rotation: ProjectM.Tiles.TileRotation None`

- [ProjectM.UnitStats](/components/UnitStats){:target="_blank"}
  - `PhysicalPower: 66.814064`
  - `SpellPower: 66.814064`
  - `ResourcePower: 38`
  - `SiegePower: 18`
  - `PhysicalResistance: 0`
  - `SpellResistance: 0`
  - `FireResistance: 0`
  - `PassiveHealthRegen: 1`
  - `CCReduction: 0`
  - `HealthRecovery: 1`
  - `DamageReduction: 0`
  - `HealingReceived: 0`
  - `ReducedBloodDrain: 0`
  - `BloodDrainMultiplier: 1`
  - `CorruptionDamageReduction: 1`

- [ProjectM.Sequencer.ImpactMaterial](/components/ImpactMaterial){:target="_blank"}
  - `IntType: 3`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `PlayOnSelf: False`

- [ProjectM.Scripting.ScriptDestroy](/components/ScriptDestroy){:target="_blank"}
  - `Handled: False`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_ceedkcedgc`

- [ProjectM.Tiles.TileModel](/components/TileModel){:target="_blank"}
  - `DisabledTileTypesInt: 0`

- [ProjectM.Shared.DropTableOnDeath](/components/DropTableOnDeath){:target="_blank"}
  - `Dropped: False`
  - `CustomDropArc: GUID Not Found`
  - `MinRange: 0`
  - `MaxRange: 0`

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
  - `_Value: 535826937`

- [ProjectM.BuffBuffer](/components/BuffBuffer){:target="_blank"}
  - *(No fields)*

- [ProjectM.CreateGameplayEventOnDamageTaken](/components/CreateGameplayEventOnDamageTaken){:target="_blank"}

- **[0]**
  - `EventId: Local - -2015634130`
  - `Condition: None`
  - `Source: ProjectM.DamageTakenTarget Self`
  - `IncludeDoTs: False`
  - `IgnoreWhenInContest: False`

- [ProjectM.ApplyBuffOnGameplayEvent](/components/ApplyBuffOnGameplayEvent){:target="_blank"}

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget Self`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: AB_Mech_Activate_Explosive_Buff PrefabGuid(597124880)`
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
  - `GameplayEventId: Local - -2015634130`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- [ProjectM.YieldResourcesOnDamageTaken](/components/YieldResourcesOnDamageTaken){:target="_blank"}
  - *(No fields)*

- [ProjectM.PlaySequenceOnDeath](/components/PlaySequenceOnDeath){:target="_blank"}

- **[0]**
  - `SequenceGuid: SequenceGUID 911101096`

- [ProjectM.GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                           `
  - `Component                                  `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -2015634130`

- [ProjectM.Network.NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 249`

- **[1]**
  - `Value: 17`

- **[2]**
  - `Value: 240`

- **[3]**
  - `Value: 31`

- **[4]**
  - `Value: 243`

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
  - `Value: 255`

- **[36]**
  - `Value: 255`

- **[37]**
  - `Value: 255`

- **[38]**
  - `Value: 255`

- **[39]**
  - `Value: 1`

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

- **48 total elements but only showing the first 36**
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

- [ProjectM.Shared.DropTableBuffer](/components/DropTableBuffer){:target="_blank"}

- **[0]**
  - `DropTableGuid: DT_Resource_Vein_Mech_Rare PrefabGuid(-345957318)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnDeath`
  - `RelicType: ProjectM.Shared.RelicType None`

- **[1]**
  - `DropTableGuid: DT_Resource_Vein_Mech_General PrefabGuid(1927925502)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType YieldResourceOnDamageTaken`
  - `RelicType: ProjectM.Shared.RelicType None`

- [ProjectM.MoveStopTrigger](/components/MoveStopTrigger){:target="_blank"}
  - *(No fields)*

- [ProjectM.TileCollisionTag](/components/TileCollisionTag){:target="_blank"}
  - *(No fields)*

- [ProjectM.TilePathfindingTag](/components/TilePathfindingTag){:target="_blank"}
  - *(No fields)*

- [ProjectM.TileLineOfSightTag](/components/TileLineOfSightTag){:target="_blank"}
  - *(No fields)*

- [ProjectM.TilePlacementTag](/components/TilePlacementTag){:target="_blank"}
  - *(No fields)*

- [ProjectM.DisableWhenNoPlayersInRange](/components/DisableWhenNoPlayersInRange){:target="_blank"}
  - *(No fields)*

- [ProjectM.Tiles.StaticTileModel](/components/StaticTileModel){:target="_blank"}
  - *(No fields)*

- [ProjectM.Shared.DropTable](/components/DropTable){:target="_blank"}
  - *(No fields)*

- [ProjectM.Shared.StaticPhysicsCollider](/components/StaticPhysicsCollider){:target="_blank"}
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
