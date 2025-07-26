---
title: TM_MechCorpse_UnitCorpse_Tank_LightningRod_01
guid: 1252063697
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

# TM_MechCorpse_UnitCorpse_Tank_LightningRod_01

**GUID:** `1252063697`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- **ProjectM.DurabilityTarget**
  - `DurabilityFactor: 0.75`

- **ProjectM.GetOwnerRotation**
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

- **ProjectM.AoETargetImportance**
  - `Importance: 1`

- **ProjectM.PlacementDestroyData**
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.LifeTime**
  - `Duration: 180`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.Health**
  - `MaxHealth: 200`
  - `TimeOfDeath: 0`
  - `Value: 200`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- **ProjectM.HealthConstants**
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: True`
  - `DestroyAfterDuration: 0`
  - `DisableDamageSCT: False`

- **ProjectM.CollisionRadius**
  - `Radius: 1`

- **ProjectM.Team**
  - `Value: 1`
  - `FactionIndex: -1`

- **ProjectM.TileBounds**
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- **ProjectM.TileModelSpatialData**
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- **ProjectM.TileData**
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

- **ProjectM.EntityCategory**
  - `MainCategoryInt: 1`
  - `UnitCategoryInt: 7`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 2`
  - `ResourceLevel: 40`

- **ProjectM.UnitLevel**
  - `Level: 90`
  - `HideLevel: False`

- **ProjectM.UnitLevelServerData**
  - `HealthUnitBaseStatsTypeInt: 0`
  - `UnitBaseStatsTypeInt: 1`

- **ProjectM.StaticTransformCompatible**
  - `UseStaticTransform: False`
  - `StaticTransform: ProjectM.StaticTransformIndex StaticTransformIndex(TerrainChunk: 0,0, TransformIndex: 0)`
  - `NonStaticTransform_Pos: Unity.Mathematics.float2 float2(0f, 0f)`
  - `NonStaticTransform_Height: 0`
  - `NonStaticTransform_Rotation: ProjectM.Tiles.TileRotation None`

- **ProjectM.Sequencer.ImpactMaterial**
  - `IntType: 7`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `PlayOnSelf: False`

- **ProjectM.Scripting.ScriptDestroy**
  - `Handled: False`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_cgkggfbigg`

- **ProjectM.Tiles.TileModel**
  - `DisabledTileTypesInt: 0`

- **ProjectM.Hybrid.HybridModelSeed**
  - `Seed: 0`
  - `HasSetSeed: False`

- **ProjectM.Shared.DropTableOnDeath**
  - `Dropped: False`
  - `CustomDropArc: GUID Not Found`
  - `MinRange: 0`
  - `MaxRange: 0`

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
  - `_Value: 1252063697`

- **ProjectM.YieldResourcesOnDamageTaken**
  - *(No fields)*

- **ProjectM.PlaySequenceOnDeath**
  - *(No fields)*

- **[0]**
  - `SequenceGuid: SequenceGUID -1401236623`

- **ProjectM.Network.NetSnapshot**
  - *(No fields)*

- **[0]**
  - `Value: 209`

- **[1]**
  - `Value: 249`

- **[2]**
  - `Value: 160`

- **[3]**
  - `Value: 74`

- **[4]**
  - `Value: 18`

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
  - `Value: 52`

- **[13]**
  - `Value: 67`

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
  - `Value: 255`

- **[33]**
  - `Value: 255`

- **[34]**
  - `Value: 255`

- **[35]**
  - `Value: 255`

- **[36]**
  - `Value: 1`

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

- **48 total elements but only showing the first 36**
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

- **ProjectM.Shared.DropTableBuffer**
  - *(No fields)*

- **[0]**
  - `DropTableGuid: DT_Unit_Gloomrot_Mech_Rank03 PrefabGuid(-116432822)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnDeath`
  - `RelicType: ProjectM.Shared.RelicType None`

- **[1]**
  - `DropTableGuid: DT_Unit_Gloomrot_Mech_Rank02 PrefabGuid(-1663330146)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType YieldResourceOnDamageTaken`
  - `RelicType: ProjectM.Shared.RelicType None`

- **ProjectM.MoveStopTrigger**
  - *(No fields)*

- **ProjectM.GetOwnerRotationOnlyOnSpawnTag**
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

- **ProjectM.Tiles.StaticTileModel**
  - *(No fields)*

- **ProjectM.Shared.DropTable**
  - *(No fields)*

- **ProjectM.Shared.StaticPhysicsCollider**
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

