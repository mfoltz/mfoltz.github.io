---
title: Recipe_UnitSpawn_NetherDemon_T01_BloodSoul
guid: 286874232
categories: ['All', 'Recipe']
nav_exclude: true
search_exclude: true
layout: default
---

# Recipe_UnitSpawn_NetherDemon_T01_BloodSoul

**GUID:** `286874232`

**Categories:** [All](/prefabs/All), [Recipe](/prefabs/Recipe)

## Components

- [RecipeData](/components/RecipeData){:target="_blank"}
  - `Entity: Prefab Recipe_UnitSpawn_NetherDemon_T01_BloodSoul PrefabGuid(286874232) - Entity(19167:1)`
  - `Guid: Recipe_UnitSpawn_NetherDemon_T01_BloodSoul PrefabGuid(286874232)`
  - `CraftDuration: 20`
  - `HudSortingOrder: 0`
  - `AlwaysUnlocked: True`
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
  - `_Value: 286874232`

- [RecipeRequirementBuffer](/components/RecipeRequirementBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Ingredient_Research_Scroll PrefabGuid(2065714452)`
  - `Amount: 200`

- **[1]**
  - `Guid: Item_BloodEssence_T03_Primal PrefabGuid(1566989408)`
  - `Amount: 1`

- [RecipeOutputBuffer](/components/RecipeOutputBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Dummy_NetherDemon_T01_BloodSoul PrefabGuid(1395316286)`
  - `Amount: 1`

- [RecipeOutputUnitBuffer](/components/RecipeOutputUnitBuffer){:target="_blank"}

- **[0]**
  - `Guid: Dummy_Trigger_RandomUnitSpawn_BloodSoul_T01 PrefabGuid(-2084736434)`
  - `Stacks: 1`

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
