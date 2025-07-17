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

- [ProjectM.EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Shared.WarEvents.WarEvent_ActiveGate](/components/WarEvent_ActiveGate){:target="_blank"}
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

- [ProjectM.PlacementDestroyData](/components/PlacementDestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.TileBounds](/components/TileBounds){:target="_blank"}
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- [ProjectM.TileModelSpatialData](/components/TileModelSpatialData){:target="_blank"}
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- [ProjectM.TileData](/components/TileData){:target="_blank"}
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_agiidfhkje`

- [ProjectM.Tiles.TileModel](/components/TileModel){:target="_blank"}
  - `DisabledTileTypesInt: 0`

- [ProjectM.Shared.WarEvents.Script_WarEvent_NodeData](/components/Script_WarEvent_NodeData){:target="_blank"}
  - `CurrentGateState: ProjectM.Shared.WarEvents.Script_WarEvent_NodeData+GateState Inactive`
  - `DropArc: DropItemSphere_WarEvent PrefabGuid(496881660)`
  - `ResourceDropStackSize: 16`
  - `LifeTime: 0`
  - `Duration: 5`
  - `UnitKilledSequencePrefab: WarEvent_UnitKilledProjectile PrefabGuid(-1046523292)`

- [Unity.Transforms.Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

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
  - `_Value: 191587271`

- [ProjectM.Shared.WarEvents.WarEvent_ChildReference](/components/WarEvent_ChildReference){:target="_blank"}
  - *(No fields)*

- [ProjectM.Shared.WarEvents.WarEvent_ActiveUnit](/components/WarEvent_ActiveUnit){:target="_blank"}
  - *(No fields)*

- [ProjectM.CreateGameplayEventsOnDestroy](/components/CreateGameplayEventsOnDestroy){:target="_blank"}

- **[0]**
  - `EventId: Local - -136930912`
  - `Target: ProjectM.GameplayEventTarget Self`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -136930912`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.SpawnPrefabOnGameplayEvent](/components/SpawnPrefabOnGameplayEvent){:target="_blank"}

- **[0]**
  - `SpawnPrefab: TM_WarEvent_GateObject_DestroyTrigger PrefabGuid(553338966)`
  - `CustomAbilitySpellModsSource: GUID Not Found`
  - `SpellTarget: ProjectM.SetSpellTarget Self`
  - `Owner: ProjectM.SpawnPrefabOnGameplayEventOwner Self`
  - `Creator: ProjectM.SpawnPrefabOnGameplayEventCreator Owner`

- [ProjectM.GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum SpawnPrefab`
  - `GameplayEventId: Local - -136930912`

- [ProjectM.Network.NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 199`

- **[1]**
  - `Value: 99`

- **[2]**
  - `Value: 107`

- **[3]**
  - `Value: 11`

- **[4]**
  - `Value: 162`

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
  - `Value: 128`

- **[24]**
  - `Value: 63`

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

- [ProjectM.Shared.DropTableBuffer](/components/DropTableBuffer){:target="_blank"}
  - *(No fields)*

- [ProjectM.Shared.WarEvents.WarEvent_UnitPrefab](/components/WarEvent_UnitPrefab){:target="_blank"}
  - *(No fields)*

- [ProjectM.DisableWhenNoPlayersInRange](/components/DisableWhenNoPlayersInRange){:target="_blank"}
  - *(No fields)*

- [ProjectM.Scripting.ScriptUpdate](/components/ScriptUpdate){:target="_blank"}
  - *(No fields)*

- [ProjectM.Tiles.StaticTileModel](/components/StaticTileModel){:target="_blank"}
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
