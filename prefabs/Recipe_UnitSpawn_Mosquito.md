---
title: Recipe_UnitSpawn_Mosquito
guid: -614781206
categories: ['All', 'Recipe']
nav_exclude: true
search_exclude: true
layout: default
---

# Recipe_UnitSpawn_Mosquito

**GUID:** `-614781206`

**Categories:** [All](/prefabs/All), [Recipe](/prefabs/Recipe)

## Components

- [ProjectM.RecipeData](/components/RecipeData){:target="_blank"}
  - `Entity: Prefab Recipe_UnitSpawn_Mosquito PrefabGuid(-614781206) - Entity(19353:1)`
  - `Guid: Recipe_UnitSpawn_Mosquito PrefabGuid(-614781206)`
  - `CraftDuration: 60`
  - `HudSortingOrder: 0`
  - `AlwaysUnlocked: False`
  - `HideInStation: False`
  - `IgnoreServerSettings: False`

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

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

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -614781206`

- [ProjectM.RecipeRequirementBuffer](/components/RecipeRequirementBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Ingredient_FishBone PrefabGuid(424158416)`
  - `Amount: 1`

- **[1]**
  - `Guid: Item_Ingredient_Plant_PlagueBrier PrefabGuid(1474643910)`
  - `Amount: 40`

- [ProjectM.RecipeOutputBuffer](/components/RecipeOutputBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Dummy_Mosquito PrefabGuid(961990006)`
  - `Amount: 3`

- [ProjectM.RecipeOutputUnitBuffer](/components/RecipeOutputUnitBuffer){:target="_blank"}

- **[0]**
  - `Guid: CHAR_Cursed_Mosquito PrefabGuid(-744966291)`
  - `Stacks: 3`

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
