---
title: Recipe_Consumable_PrisonPotion_Bloodwine
guid: 1930190516
categories: ['All', 'Recipe']
nav_exclude: true
search_exclude: true
layout: default
---

# Recipe_Consumable_PrisonPotion_Bloodwine

**GUID:** `1930190516`

**Categories:** [All](/prefabs/All), [Recipe](/prefabs/Recipe)

## Components

- [ProjectM.RecipeData](/components/RecipeData){:target="_blank"}
  - `Entity: Prefab Recipe_Consumable_PrisonPotion_Bloodwine PrefabGuid(1930190516) - Entity(19318:1)`
  - `Guid: Recipe_Consumable_PrisonPotion_Bloodwine PrefabGuid(1930190516)`
  - `CraftDuration: 4`
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
  - `_Value: 1930190516`

- [ProjectM.RecipeRequirementBuffer](/components/RecipeRequirementBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Consumable_EmptyBottle PrefabGuid(-437611596)`
  - `Amount: 1`

- **[1]**
  - `Guid: Item_Ingredient_Plant_SacredGrapes PrefabGuid(88009216)`
  - `Amount: 60`

- [ProjectM.RecipeOutputBuffer](/components/RecipeOutputBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Consumable_PrisonPotion_Bloodwine PrefabGuid(1223264867)`
  - `Amount: 1`

- **[1]**
  - `Guid: FakeItem_Prisoner_ExtractedBloodwine PrefabGuid(-1624770558)`
  - `Amount: 1`

- [ProjectM.RecipeOutputUnitBuffer](/components/RecipeOutputUnitBuffer){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
