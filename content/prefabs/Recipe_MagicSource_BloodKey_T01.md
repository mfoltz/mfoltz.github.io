---
title: Recipe_MagicSource_BloodKey_T01
guid: 152004500
categories: ['All', 'Recipe']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `152004500`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Recipe]({{% relref "prefabs/Recipe.md" %}})

## Components

- [ProjectM.RecipeData]({{% relref "components/RecipeData.md" %}})
  - `Entity: Prefab Recipe_MagicSource_BloodKey_T01 PrefabGuid(152004500) - Entity(7731:1)`
  - `Guid: Recipe_MagicSource_BloodKey_T01 PrefabGuid(152004500)`
  - `CraftDuration: 180`
  - `HudSortingOrder: 0`
  - `AlwaysUnlocked: False`
  - `HideInStation: False`
  - `IgnoreServerSettings: False`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Unity.Transforms.Rotation]({{% relref "components/Rotation.md" %}})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({{% relref "components/Translation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld]({{% relref "components/LocalToWorld.md" %}})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({{% relref "components/LocalTransform.md" %}})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 152004500`

- [ProjectM.RecipeRequirementBuffer]({{% relref "components/RecipeRequirementBuffer.md" %}})

- **[0]**
  - `Guid: Item_Ingredient_OnyxTear PrefabGuid(-651878258)`
  - `Amount: 4`

- **[1]**
  - `Guid: Item_BloodEssence_T03_Primal PrefabGuid(1566989408)`
  - `Amount: 4`

- **[2]**
  - `Guid: Item_Ingredient_BloodCrystal PrefabGuid(-1913156733)`
  - `Amount: 200`

- [ProjectM.ItemRepairBuffer]({{% relref "components/ItemRepairBuffer.md" %}})

- **[0]**
  - `Guid: Item_Ingredient_OnyxTear PrefabGuid(-651878258)`
  - `Stacks: 4`

- [ProjectM.RecipeOutputBuffer]({{% relref "components/RecipeOutputBuffer.md" %}})

- **[0]**
  - `Guid: Item_MagicSource_BloodKey_T01 PrefabGuid(1655869633)`
  - `Amount: 1`

- [ProjectM.RecipeOutputUnitBuffer]({{% relref "components/RecipeOutputUnitBuffer.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
