---
title: Recipe_MagicSource_General_T08_Delusion
guid: -321571889
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
- ItemRepairBuffer
- RecipeOutputBuffer
- RecipeOutputUnitBuffer
- SpawnTag
- Prefab
- Simulate
---

# Recipe_MagicSource_General_T08_Delusion

**GUID:** `-321571889`

**Categories:** [All](/prefabs/All), [Recipe](/prefabs/Recipe)

## Components

- [RecipeData](/components/RecipeData){:target="_blank"}
  - `Entity: Prefab Recipe_MagicSource_General_T08_Delusion PrefabGuid(-321571889) - Entity(7733:1)`
  - `Guid: Recipe_MagicSource_General_T08_Delusion PrefabGuid(-321571889)`
  - `CraftDuration: 180`
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
  - `_Value: -321571889`

- [RecipeRequirementBuffer](/components/RecipeRequirementBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Ingredient_Gem_Miststone_T03 PrefabGuid(-1963826510)`
  - `Amount: 4`

- **[1]**
  - `Guid: Item_Ingredient_PowerCore PrefabGuid(-1190647720)`
  - `Amount: 12`

- **[2]**
  - `Guid: Item_MagicSource_General_T07_BloodwineAmulet PrefabGuid(991396285)`
  - `Amount: 1`

- [ItemRepairBuffer](/components/ItemRepairBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Ingredient_RadiumAlloy PrefabGuid(2116142390)`
  - `Stacks: 8`

- **[1]**
  - `Guid: Item_Ingredient_PowerCore PrefabGuid(-1190647720)`
  - `Stacks: 8`

- [RecipeOutputBuffer](/components/RecipeOutputBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_MagicSource_General_T08_Illusion PrefabGuid(-1306155896)`
  - `Amount: 1`

- [RecipeOutputUnitBuffer](/components/RecipeOutputUnitBuffer){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
