---
title: TM_VampirePlayerRuins_Pillar01_SilverLight
guid: 1568459160
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `1568459160`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [TM]({{% relref "prefabs/TM.md" %}})

## Components

- [ProjectM.DurabilityTarget]({{% relref "components/DurabilityTarget.md" %}})
  - `DurabilityFactor: 0.75`

- [ProjectM.AoETargetImportance]({{% relref "components/AoETargetImportance.md" %}})
  - `Importance: 1`

- [ProjectM.SpawnPhysicsObjectOnDeath]({{% relref "components/SpawnPhysicsObjectOnDeath.md" %}})
  - `PhysicsObjectPrefab: Dynamics_VampirePlayerRuins_Pillar01_SilverLight PrefabGuid(-718226233)`
  - `AlwaysSpawn: False`

- [ProjectM.PlacementDestroyData]({{% relref "components/PlacementDestroyData.md" %}})
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Health]({{% relref "components/Health.md" %}})
  - `MaxHealth: 60`
  - `TimeOfDeath: 0`
  - `Value: 60`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- [ProjectM.HealthConstants]({{% relref "components/HealthConstants.md" %}})
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: True`
  - `DestroyAfterDuration: 0`
  - `DisableDamageSCT: False`

- [ProjectM.CollisionRadius]({{% relref "components/CollisionRadius.md" %}})
  - `Radius: 1`

- [ProjectM.Team]({{% relref "components/Team.md" %}})
  - `Value: 1`
  - `FactionIndex: -1`

- [ProjectM.TileBounds]({{% relref "components/TileBounds.md" %}})
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- [ProjectM.TileModelSpatialData]({{% relref "components/TileModelSpatialData.md" %}})
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- [ProjectM.TileData]({{% relref "components/TileData.md" %}})
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

- [ProjectM.EntityCategory]({{% relref "components/EntityCategory.md" %}})
  - `MainCategoryInt: 1`
  - `UnitCategoryInt: 7`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 2`
  - `ResourceLevel: 0`

- [ProjectM.UnitLevel]({{% relref "components/UnitLevel.md" %}})
  - `Level: 0`
  - `HideLevel: False`

- [ProjectM.UnitLevelServerData]({{% relref "components/UnitLevelServerData.md" %}})
  - `HealthUnitBaseStatsTypeInt: 0`
  - `UnitBaseStatsTypeInt: 1`

- [ProjectM.StaticTransformCompatible]({{% relref "components/StaticTransformCompatible.md" %}})
  - `UseStaticTransform: False`
  - `StaticTransform: ProjectM.StaticTransformIndex StaticTransformIndex(TerrainChunk: 0,0, TransformIndex: 0)`
  - `NonStaticTransform_Pos: Unity.Mathematics.float2 float2(0f, 0f)`
  - `NonStaticTransform_Height: 0`
  - `NonStaticTransform_Rotation: ProjectM.Tiles.TileRotation None`

- [ProjectM.Sequencer.ImpactMaterial]({{% relref "components/ImpactMaterial.md" %}})
  - `IntType: 2`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `PlayOnSelf: False`

- [ProjectM.Scripting.ScriptDestroy]({{% relref "components/ScriptDestroy.md" %}})
  - `Handled: False`

- [ProjectM.Network.Networked]({{% relref "components/Networked.md" %}})
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask]({{% relref "components/UpToDateUserBitMask.md" %}})
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.FrameChanged]({{% relref "components/FrameChanged.md" %}})
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot]({{% relref "components/NetworkSnapshot.md" %}})
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acfikjcfik`

- [ProjectM.Tiles.TileModel]({{% relref "components/TileModel.md" %}})
  - `DisabledTileTypesInt: 0`

- [Unity.Transforms.Rotation]({{% relref "components/Rotation.md" %}})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({{% relref "components/Translation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Physics.PhysicsCollider]({{% relref "components/PhysicsCollider.md" %}})
  - `Value: Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider] Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider]`

- [Unity.Physics.Systems.StaticPhysicsWorldBodyIndex]({{% relref "components/StaticPhysicsWorldBodyIndex.md" %}})
  - `WorldBodyIndex: -1`

- [Unity.Transforms.LocalToWorld]({{% relref "components/LocalToWorld.md" %}})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({{% relref "components/LocalTransform.md" %}})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TeamReference]({{% relref "components/TeamReference.md" %}})
  - `Value: ModifiableEntity(0:0)`

- [ProjectM.TilePosition]({{% relref "components/TilePosition.md" %}})
  - `Tile: Unity.Mathematics.int2 int2(0, 0)`
  - `TileRotation: ProjectM.Tiles.TileRotation None`
  - `CompressedHeight: 0`

- [ProjectM.Network.NetworkId]({{% relref "components/NetworkId.md" %}})
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 1568459160`

- [ProjectM.YieldResourcesOnDamageTaken]({{% relref "components/YieldResourcesOnDamageTaken.md" %}})

- [ProjectM.PlaySequenceOnDeath]({{% relref "components/PlaySequenceOnDeath.md" %}})

- **[0]**
  - `SequenceGuid: SequenceGUID -1419921813`

- [ProjectM.Network.NetSnapshot]({{% relref "components/NetSnapshot.md" %}})

- **[0]**
  - `Value: 152`

- **[1]**
  - `Value: 201`

- **[2]**
  - `Value: 124`

- **[3]**
  - `Value: 93`

- **[4]**
  - `Value: 49`

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
  - `Value: 255`

- **[28]**
  - `Value: 255`

- **[29]**
  - `Value: 255`

- **[30]**
  - `Value: 255`

- **[31]**
  - `Value: 1`

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

- **40 total elements but only showing the first 36**

- [ProjectM.Network.SnapshotFrameChangedBuffer]({{% relref "components/SnapshotFrameChangedBuffer.md" %}})

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

- [ProjectM.Shared.DropTableBuffer]({{% relref "components/DropTableBuffer.md" %}})

- **[0]**
  - `DropTableGuid: DT_Resource_VampireRuins_Rock_General PrefabGuid(1942260993)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType YieldResourceOnDamageTaken`
  - `RelicType: ProjectM.Shared.RelicType None`

- [ProjectM.MoveStopTrigger]({{% relref "components/MoveStopTrigger.md" %}})

- [ProjectM.TileCollisionTag]({{% relref "components/TileCollisionTag.md" %}})

- [ProjectM.TilePathfindingTag]({{% relref "components/TilePathfindingTag.md" %}})

- [ProjectM.TileLineOfSightTag]({{% relref "components/TileLineOfSightTag.md" %}})

- [ProjectM.TilePlacementTag]({{% relref "components/TilePlacementTag.md" %}})

- [ProjectM.DisableWhenNoPlayersInRange]({{% relref "components/DisableWhenNoPlayersInRange.md" %}})

- [ProjectM.MegaStaticCompatibleTag]({{% relref "components/MegaStaticCompatibleTag.md" %}})

- [ProjectM.Tiles.StaticTileModel]({{% relref "components/StaticTileModel.md" %}})

- [ProjectM.Shared.DropTable]({{% relref "components/DropTable.md" %}})

- [ProjectM.Shared.StaticPhysicsCollider]({{% relref "components/StaticPhysicsCollider.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})

- [ProjectM.TileModelRegistrationState]({{% relref "components/TileModelRegistrationState.md" %}})

- [ProjectM.Network.NetworkSnapshotType]({{% relref "components/NetworkSnapshotType.md" %}})

- [ProjectM.Tiles.TileModelLayer]({{% relref "components/TileModelLayer.md" %}})

- [Unity.Physics.PhysicsWorldIndex]({{% relref "components/PhysicsWorldIndex.md" %}})
