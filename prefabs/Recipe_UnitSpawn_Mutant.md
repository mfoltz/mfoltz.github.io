---
title: Recipe_UnitSpawn_Mutant
guid: -591009330
categories: ['All', 'Recipe']
nav_exclude: true
search_exclude: true
layout: default
---

# Recipe_UnitSpawn_Mutant

**GUID:** `-591009330`

**Categories:** [All](/prefabs/All), [Recipe](/prefabs/Recipe)

## Components

- **ProjectM.RecipeData**
  - `Entity: Prefab Recipe_UnitSpawn_Mutant PrefabGuid(-591009330) - Entity(19355:1)`
  - `Guid: Recipe_UnitSpawn_Mutant PrefabGuid(-591009330)`
  - `CraftDuration: 90`
  - `HudSortingOrder: 0`
  - `AlwaysUnlocked: False`
  - `HideInStation: False`
  - `IgnoreServerSettings: False`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **Unity.Transforms.LocalToWorld**
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- **Unity.Transforms.LocalTransform**
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -591009330`

- **ProjectM.RecipeRequirementBuffer**

- **[0]**
  - `Guid: Item_Ingredient_Gravedust PrefabGuid(-608131642)`
  - `Amount: 4`

- **[1]**
  - `Guid: Item_Consumable_Canister_ToxicSludge PrefabGuid(-1823614190)`
  - `Amount: 1`

- **ProjectM.RecipeOutputBuffer**

- **[0]**
  - `Guid: Item_Dummy_Mutant PrefabGuid(-338333923)`
  - `Amount: 6`

- **ProjectM.RecipeOutputUnitBuffer**

- **[0]**
  - `Guid: CHAR_Mutant_RatHorror PrefabGuid(-375581934)`
  - `Stacks: 6`

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**
