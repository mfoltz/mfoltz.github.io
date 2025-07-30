---
title: TM_Noctem_RiftCrystalChild_Tier01
guid: -1316392908
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

# TM_Noctem_RiftCrystalChild_Tier01

**GUID:** `-1316392908`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- **ProjectM.DurabilityTarget**
  - `DurabilityFactor: 0.75`

- **ProjectM.SpawnPhysicsObjectOnDeath**
  - `PhysicsObjectPrefab: Dynamic_Noctem_RiftCrystalChild01 PrefabGuid(-979374025)`
  - `AlwaysSpawn: False`

- **ProjectM.PlacementDestroyData**
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Health**
  - `MaxHealth: 70`
  - `TimeOfDeath: 0`
  - `Value: 70`
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
  - `ResourceLevel: 50`

- **ProjectM.UnitLevel**
  - `Level: 50`
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
  - `IntType: 17`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `PlayOnSelf: False`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acfikjcfik`

- **ProjectM.Tiles.TileModel**
  - `DisabledTileTypesInt: 0`

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
  - `_Value: -1316392908`

- **ProjectM.CreateGameplayEventsOnDestroy**

- **[0]**
  - `EventId: Local - -136930912`
  - `Target: ProjectM.GameplayEventTarget Self`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.GameplayEventIdMapping**

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -136930912`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **ProjectM.PlaySequenceOnGameplayEvent**

- **[0]**
  - `SequenceGuid: SequenceGUID 1134820086`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget EventTarget`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget EventTarget`

- **ProjectM.YieldResourcesOnDamageTaken**

- **ProjectM.PlaySequenceOnDeath**

- **[0]**
  - `SequenceGuid: SequenceGUID 795003641`

- **ProjectM.GameplayEventListeners**

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - -136930912`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.Shared.DropTableBuffer**

- **[0]**
  - `DropTableGuid: DT_Breakables_T02_Noctem_Crystal_T01 PrefabGuid(442026639)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnDeath`
  - `RelicType: ProjectM.Shared.RelicType None`

- **ProjectM.TileCollisionTag**

- **ProjectM.TilePathfindingTag**

- **ProjectM.TileLineOfSightTag**

- **ProjectM.TilePlacementTag**

- **ProjectM.DisableWhenNoPlayersInRange**

- **ProjectM.MegaStaticCompatibleTag**

- **ProjectM.Tiles.StaticTileModel**

- **ProjectM.Shared.DropTable**

- **ProjectM.Shared.StaticPhysicsCollider**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.TileModelRegistrationState**

- **ProjectM.Network.NetworkSnapshotType**

- **ProjectM.Tiles.TileModelLayer**

- **Unity.Physics.PhysicsWorldIndex**
