---
title: Item_Building_Relic_Behemoth
guid: 1247086852
categories:
- All
- Item
nav_exclude: true
search_exclude: true
layout: default
components:
- InventoryItem
- ItemData
- DestroyData
- DestroyState
- Age
- CreatedTime
- LifeTime
- Networked
- UpToDateUserBitMask
- FrameChanged
- NetworkSnapshot
- Relic
- Rotation
- Translation
- LocalToWorld
- LocalTransform
- NetworkId
- PrefabGUID
- AttachMapIconsToEntity
- NetSnapshot
- SnapshotFrameChangedBuffer
- UpdateAgeWhenDisabled
- UpdateLifeTimeWhenDisabled
- DisableWhenNoPlayersInRange
- SpawnTag
- Prefab
- Simulate
- NetworkSnapshotType
---

# Item_Building_Relic_Behemoth

**GUID:** `1247086852`

**Categories:** [All](/prefabs/All), [Item](/prefabs/Item)

## Components

- [InventoryItem](/components/InventoryItem){:target="_blank"}
  - `ContainerEntity: Entity(0:0)`

- [ItemData](/components/ItemData){:target="_blank"}
  - `SilverValue: 1`
  - `Entity: Prefab Item_Building_Relic_Behemoth PrefabGuid(1247086852) - Entity(20090:1)`
  - `ItemTypeGUID: Item_Building_Relic_Behemoth PrefabGuid(1247086852)`
  - `DropItemPrefab: Resource_Drop_Relic PrefabGuid(-1693842783)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 1`
  - `ItemType: ProjectM.ItemType ItemBuilding`
  - `ItemCategory: ProjectM.ItemCategory TeleportBound, Relic`
  - `RemoveOnConsume: True`
  - `SortOrder: 0`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [CreatedTime](/components/CreatedTime){:target="_blank"}
  - `CreateTime: 0`

- [LifeTime](/components/LifeTime){:target="_blank"}
  - `Duration: 5400`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_dcecciefge`

- [Relic](/components/Relic){:target="_blank"}
  - `RelicType: ProjectM.Shared.RelicType Solarus`

- [Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 1247086852`

- [AttachMapIconsToEntity](/components/AttachMapIconsToEntity){:target="_blank"}

- **[0]**
  - `Prefab: MapIcon_Relic_Standard_Solarus PrefabGuid(2133172828)`

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 4`

- **[1]**
  - `Value: 9`

- **[2]**
  - `Value: 85`

- **[3]**
  - `Value: 74`

- **[4]**
  - `Value: 64`

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
  - `Value: 192`

- **[18]**
  - `Value: 168`

- **[19]**
  - `Value: 69`

- **[20]**
  - `Value: 0`

- **[21]**
  - `Value: 0`

- **[22]**
  - `Value: 0`

- **[23]**
  - `Value: 0`

- [SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer){:target="_blank"}

- **[0]**
  - `Value: -1`

- **[1]**
  - `Value: -1`

- **[2]**
  - `Value: -1`

- **[3]**
  - `Value: -1`

- [UpdateAgeWhenDisabled](/components/UpdateAgeWhenDisabled){:target="_blank"}
  - *(No fields)*

- [UpdateLifeTimeWhenDisabled](/components/UpdateLifeTimeWhenDisabled){:target="_blank"}
  - *(No fields)*

- [DisableWhenNoPlayersInRange](/components/DisableWhenNoPlayersInRange){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*
