---
title: Recipe_Armor_Chest_T0X_PMK_02
guid: 639186567
categories:
- All
- Recipe
nav_exclude: true
search_exclude: true
layout: default
components:
- RecipeData
- ProgressionUserContentDependency
- DestroyData
- DestroyState
- Rotation
- Translation
- LocalToWorld
- LocalTransform
- PrefabGUID
- RecipeRequirementBuffer
- ItemRepairBuffer
- RecipeOutputBuffer
- RecipeOutputUnitBuffer
- SpawnTag
- Prefab
- Simulate
---

# Recipe_Armor_Chest_T0X_PMK_02

**GUID:** `639186567`

**Categories:** [All](/prefabs/All), [Recipe](/prefabs/Recipe)

## Components

- [RecipeData](/components/RecipeData){:target="_blank"}
  - `Entity: Prefab Recipe_Armor_Chest_T0X_PMK_02 PrefabGuid(639186567) - Entity(3555:1)`
  - `Guid: Recipe_Armor_Chest_T0X_PMK_02 PrefabGuid(639186567)`
  - `CraftDuration: 20`
  - `HudSortingOrder: 0`
  - `AlwaysUnlocked: True`
  - `HideInStation: False`
  - `IgnoreServerSettings: False`

- [ProgressionUserContentDependency](/components/ProgressionUserContentDependency){:target="_blank"}
  - `Value: ProjectM.Shared.UserContentFlags DLC_ProjectK`

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
  - `_Value: 639186567`

- [RecipeRequirementBuffer](/components/RecipeRequirementBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Ingredient_Cloth PrefabGuid(-700774739)`
  - `Amount: 4`

- **[1]**
  - `Guid: Item_Ingredient_Thread_Coarse PrefabGuid(-1562867444)`
  - `Amount: 1`

- [ItemRepairBuffer](/components/ItemRepairBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Ingredient_Cloth PrefabGuid(-700774739)`
  - `Stacks: 4`

- [RecipeOutputBuffer](/components/RecipeOutputBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Chest_T0X_PMK02 PrefabGuid(896678280)`
  - `Amount: 1`

- [RecipeOutputUnitBuffer](/components/RecipeOutputUnitBuffer){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
