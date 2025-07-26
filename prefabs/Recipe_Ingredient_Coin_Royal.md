---
title: Recipe_Ingredient_Coin_Royal
guid: 1679369423
categories:
- All
- Recipe
nav_exclude: true
search_exclude: true
layout: default
components:
- RecipeData
- DestroyData
- DestroyState
- Rotation
- Translation
- LocalToWorld
- LocalTransform
- PrefabGUID
- RecipeRequirementBuffer
- RecipeOutputBuffer
- RecipeOutputUnitBuffer
- SpawnTag
- Prefab
- Simulate
---

# Recipe_Ingredient_Coin_Royal

**GUID:** `1679369423`

**Categories:** [All](/prefabs/All), [Recipe](/prefabs/Recipe)

## Components

- [RecipeData](/components/RecipeData){:target="_blank"}
  - `Entity: Prefab Recipe_Ingredient_Coin_Royal PrefabGuid(1679369423) - Entity(19389:1)`
  - `Guid: Recipe_Ingredient_Coin_Royal PrefabGuid(1679369423)`
  - `CraftDuration: 30`
  - `HudSortingOrder: 0`
  - `AlwaysUnlocked: False`
  - `HideInStation: False`
  - `IgnoreServerSettings: False`

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
  - `_Value: 1679369423`

- [RecipeRequirementBuffer](/components/RecipeRequirementBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Ingredient_Coin_Silver PrefabGuid(-949672483)`
  - `Amount: 40`

- **[1]**
  - `Guid: Item_Ingredient_Mineral_GoldBar PrefabGuid(-1027710236)`
  - `Amount: 4`

- [RecipeOutputBuffer](/components/RecipeOutputBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Ingredient_Coin_Royal PrefabGuid(-571562864)`
  - `Amount: 40`

- [RecipeOutputUnitBuffer](/components/RecipeOutputUnitBuffer){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
