---
title: DT_Missions_Gloomrot_PestPools
guid: -1206022078
categories:
- All
- DT
nav_exclude: true
search_exclude: true
layout: default
components:
- DropTableData
- DestroyData
- DestroyState
- Rotation
- Translation
- LocalToWorld
- LocalTransform
- PrefabGUID
- DropTableDataBuffer
- SpawnTag
- Prefab
- Simulate
---

# DT_Missions_Gloomrot_PestPools

**GUID:** `-1206022078`

**Categories:** [All](/prefabs/All), [DT](/prefabs/DT)

## Components

- [DropTableData](/components/DropTableData){:target="_blank"}
  - `Guid: DT_Missions_Gloomrot_PestPools PrefabGuid(-1206022078)`
  - `Entity: Prefab DT_Missions_Gloomrot_PestPools PrefabGuid(-1206022078) - Entity(19650:1)`
  - `DropTableLevel: 60`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

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

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -1206022078`

- [DropTableDataBuffer](/components/DropTableDataBuffer){:target="_blank"}

- **[0]**
  - `DropRate: 1`
  - `ItemGuid: Item_Ingredient_MutantGrease PrefabGuid(-1527315816)`
  - `ItemType: ProjectM.DropItemType Item`
  - `Quantity: 320`

- **[1]**
  - `DropRate: 1`
  - `ItemGuid: Item_Consumable_Canister_ToxicSludge PrefabGuid(-1823614190)`
  - `ItemType: ProjectM.DropItemType Item`
  - `Quantity: 4`

- **[2]**
  - `DropRate: 1`
  - `ItemGuid: DG_Mission_T02_Gloomrot_General PrefabGuid(-318293682)`
  - `ItemType: ProjectM.DropItemType Group`
  - `Quantity: 4`

- **[3]**
  - `DropRate: 1`
  - `ItemGuid: DG_Mission_T02_Gloomrot_BloodEssence PrefabGuid(1953143832)`
  - `ItemType: ProjectM.DropItemType Group`
  - `Quantity: 4`

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
