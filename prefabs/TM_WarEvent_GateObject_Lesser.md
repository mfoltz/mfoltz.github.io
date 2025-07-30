---
title: TM_WarEvent_GateObject_Lesser
guid: 191587271
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

# TM_WarEvent_GateObject_Lesser

**GUID:** `191587271`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.Shared.WarEvents.WarEvent_ActiveGate**
  - `ChunkCoordinate: ProjectM.Terrain.TerrainChunk 0,0`
  - `Entity: Entity(0:0)`
  - `NetworkGateEntity: Entity(0:0)`
  - `UnitComposition: GUID Not Found`
  - `NextPortalSpawnTimeTicks: 0`
  - `PortalIndices: Unity.Collections.FixedList128Bytes`1[System.Byte] Unity.Collections.FixedList128Bytes`1[System.Byte]`
  - `TargetActivePortals: 1`
  - `TargetActivePortals_Base: 1`
  - `PortalsOpened: 0`
  - `TargetPortals_Base: 2`
  - `TargetPortals: 2`
  - `VariantType: 0`
  - `SpawnRadius: 10`
  - `NextUnitSpawnTicks: 0`
  - `NextUnitSpawnWaveTicks: 0`
  - `ActivePoints: 0`
  - `TargetThrashUnits: 3`
  - `UnitSpawnDelayCurve: ProjectM.CurveReference ProjectM.CurveReference`
  - `UnitSpawnDelay: 6`
  - `UnitSpawnWaveDelay: 24`
  - `StackableDropModifier: 0`

- **ProjectM.PlacementDestroyData**
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.TileBounds**
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- **ProjectM.TileModelSpatialData**
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- **ProjectM.TileData**
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_agiidfhkje`

- **ProjectM.Tiles.TileModel**
  - `DisabledTileTypesInt: 0`

- **ProjectM.Shared.WarEvents.Script_WarEvent_NodeData**
  - `CurrentGateState: ProjectM.Shared.WarEvents.Script_WarEvent_NodeData+GateState Inactive`
  - `DropArc: DropItemSphere_WarEvent PrefabGuid(496881660)`
  - `ResourceDropStackSize: 16`
  - `LifeTime: 0`
  - `Duration: 5`
  - `UnitKilledSequencePrefab: WarEvent_UnitKilledProjectile PrefabGuid(-1046523292)`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **Unity.Transforms.LocalToWorld**
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- **Unity.Transforms.LocalTransform**
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

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
  - `_Value: 191587271`

- **ProjectM.Shared.WarEvents.WarEvent_ChildReference**

- **ProjectM.Shared.WarEvents.WarEvent_ActiveUnit**

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

- **ProjectM.SpawnPrefabOnGameplayEvent**

- **[0]**
  - `SpawnPrefab: TM_WarEvent_GateObject_DestroyTrigger PrefabGuid(553338966)`
  - `CustomAbilitySpellModsSource: GUID Not Found`
  - `SpellTarget: ProjectM.SetSpellTarget Self`
  - `Owner: ProjectM.SpawnPrefabOnGameplayEventOwner Self`
  - `Creator: ProjectM.SpawnPrefabOnGameplayEventCreator Owner`

- **ProjectM.GameplayEventListeners**

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum SpawnPrefab`
  - `GameplayEventId: Local - -136930912`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.Shared.DropTableBuffer**

- **ProjectM.Shared.WarEvents.WarEvent_UnitPrefab**

- **ProjectM.DisableWhenNoPlayersInRange**

- **ProjectM.Scripting.ScriptUpdate**

- **ProjectM.Tiles.StaticTileModel**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.TileModelRegistrationState**

- **ProjectM.Network.NetworkSnapshotType**

- **ProjectM.Tiles.TileModelLayer**
