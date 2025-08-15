---
title: Recipe_UnitSpawn_Rat
guid: 255936441
categories: ['All', 'Recipe']
nav_exclude: true
search_exclude: true
layout: default
---

# Recipe_UnitSpawn_Rat

**GUID:** `255936441`

**Categories:** [All](/prefabs/All), [Recipe](/prefabs/Recipe)

## Components

- [ProjectM.RecipeData](/components/RecipeData)
  - `Entity: Prefab Recipe_UnitSpawn_Rat PrefabGuid(255936441) - Entity(19479:1)`
  - `Guid: Recipe_UnitSpawn_Rat PrefabGuid(255936441)`
  - `CraftDuration: 30`
  - `HudSortingOrder: 0`
  - `AlwaysUnlocked: True`
  - `HideInStation: False`
  - `IgnoreServerSettings: False`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Unity.Transforms.Rotation](/components/Rotation)
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation)
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld)
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform)
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: 255936441`

- [ProjectM.RecipeRequirementBuffer](/components/RecipeRequirementBuffer)

- **[0]**
  - `Guid: Item_Ingredient_Bone PrefabGuid(1821405450)`
  - `Amount: 12`

- **[1]**
  - `Guid: Item_Ingredient_Plant_PlantFiber PrefabGuid(-1409142667)`
  - `Amount: 8`

- [ProjectM.RecipeOutputBuffer](/components/RecipeOutputBuffer)

- **[0]**
  - `Guid: Item_Dummy_Rat PrefabGuid(2029158532)`
  - `Amount: 1`

- [ProjectM.RecipeOutputUnitBuffer](/components/RecipeOutputUnitBuffer)

- **[0]**
  - `Guid: CHAR_Critter_VerminNest_Rat PrefabGuid(-372256748)`
  - `Stacks: 1`

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)
