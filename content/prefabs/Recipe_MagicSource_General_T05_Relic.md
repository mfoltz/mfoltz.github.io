---
title: Recipe_MagicSource_General_T05_Relic
guid: 464548553
categories: ['All', 'Recipe']
nav_exclude: true
search_exclude: true
layout: default
---

# Recipe_MagicSource_General_T05_Relic

**GUID:** `464548553`

**Categories:** [All](/prefabs/All), [Recipe](/prefabs/Recipe)

## Components

- [ProjectM.RecipeData](/components/RecipeData)
  - `Entity: Prefab Recipe_MagicSource_General_T05_Relic PrefabGuid(464548553) - Entity(7858:1)`
  - `Guid: Recipe_MagicSource_General_T05_Relic PrefabGuid(464548553)`
  - `CraftDuration: 60`
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
  - `_Value: 464548553`

- [ProjectM.RecipeRequirementBuffer](/components/RecipeRequirementBuffer)

- **[0]**
  - `Guid: Item_Ingredient_Scourgestone PrefabGuid(1005440012)`
  - `Amount: 8`

- **[1]**
  - `Guid: Item_Ingredient_Gemdust PrefabGuid(820932258)`
  - `Amount: 24`

- [ProjectM.ItemRepairBuffer](/components/ItemRepairBuffer)

- **[0]**
  - `Guid: Item_Ingredient_Scourgestone PrefabGuid(1005440012)`
  - `Stacks: 4`

- **[1]**
  - `Guid: Item_Ingredient_Gemdust PrefabGuid(820932258)`
  - `Stacks: 12`

- [ProjectM.RecipeOutputBuffer](/components/RecipeOutputBuffer)

- **[0]**
  - `Guid: Item_MagicSource_General_T05_Relic PrefabGuid(-650855520)`
  - `Amount: 1`

- [ProjectM.RecipeOutputUnitBuffer](/components/RecipeOutputUnitBuffer)

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)
