---
title: Recipe_UnitSpawn_NetherDemon_T02_Minerals
guid: 329917761
categories: ['All', 'Recipe']
nav_exclude: true
search_exclude: true
layout: default
---

# Recipe_UnitSpawn_NetherDemon_T02_Minerals

**GUID:** `329917761`

**Categories:** [All](/prefabs/All), [Recipe](/prefabs/Recipe)

## Components

- [ProjectM.RecipeData](/components/RecipeData){:target="_blank"}
  - `Entity: Prefab Recipe_UnitSpawn_NetherDemon_T02_Minerals PrefabGuid(329917761) - Entity(19165:1)`
  - `Guid: Recipe_UnitSpawn_NetherDemon_T02_Minerals PrefabGuid(329917761)`
  - `CraftDuration: 20`
  - `HudSortingOrder: 0`
  - `AlwaysUnlocked: True`
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
  - `_Value: 329917761`

- [ProjectM.RecipeRequirementBuffer](/components/RecipeRequirementBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Ingredient_Gemdust PrefabGuid(820932258)`
  - `Amount: 20`

- **[1]**
  - `Guid: Item_NetherShard_T02 PrefabGuid(576389135)`
  - `Amount: 400`

- [ProjectM.RecipeOutputBuffer](/components/RecipeOutputBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Dummy_NetherDemon_T02_Minerals PrefabGuid(-364321170)`
  - `Amount: 1`

- [ProjectM.RecipeOutputUnitBuffer](/components/RecipeOutputUnitBuffer){:target="_blank"}

- **[0]**
  - `Guid: CHAR_IronGolem_NetherDemon PrefabGuid(-1794508086)`
  - `Stacks: 1`

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
