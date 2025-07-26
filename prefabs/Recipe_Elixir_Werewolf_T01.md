---
title: Recipe_Elixir_Werewolf_T01
guid: 198966224
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

# Recipe_Elixir_Werewolf_T01

**GUID:** `198966224`

**Categories:** [All](/prefabs/All), [Recipe](/prefabs/Recipe)

## Components

- [RecipeData](/components/RecipeData){:target="_blank"}
  - `Entity: Prefab Recipe_Elixir_Werewolf_T01 PrefabGuid(198966224) - Entity(19238:1)`
  - `Guid: Recipe_Elixir_Werewolf_T01 PrefabGuid(198966224)`
  - `CraftDuration: 20`
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
  - `_Value: 198966224`

- [RecipeRequirementBuffer](/components/RecipeRequirementBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Ingredient_Plant_GhostShroom PrefabGuid(-164367832)`
  - `Amount: 20`

- **[1]**
  - `Guid: Item_Ingredient_Plant_FireBlossom PrefabGuid(455638025)`
  - `Amount: 20`

- **[2]**
  - `Guid: Item_BloodEssence_T02_Greater PrefabGuid(271594022)`
  - `Amount: 1`

- **[3]**
  - `Guid: Item_Consumable_EmptyBottle PrefabGuid(-437611596)`
  - `Amount: 1`

- [RecipeOutputBuffer](/components/RecipeOutputBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Elixir_Werewolf_T01 PrefabGuid(948466634)`
  - `Amount: 1`

- [RecipeOutputUnitBuffer](/components/RecipeOutputUnitBuffer){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
