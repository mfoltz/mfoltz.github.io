---
title: Recipe_UnitSpawn_NetherDemon_T01_Seed
guid: 535319065
categories: ['All', 'Recipe']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `535319065`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Recipe]({{% relref "prefabs/Recipe.md" %}})

## Components

- [ProjectM.RecipeData]({{% relref "components/RecipeData.md" %}})
  - `Entity: Prefab Recipe_UnitSpawn_NetherDemon_T01_Seed PrefabGuid(535319065) - Entity(19145:1)`
  - `Guid: Recipe_UnitSpawn_NetherDemon_T01_Seed PrefabGuid(535319065)`
  - `CraftDuration: 20`
  - `HudSortingOrder: 0`
  - `AlwaysUnlocked: True`
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
  - `_Value: 535319065`

- [ProjectM.RecipeRequirementBuffer]({{% relref "components/RecipeRequirementBuffer.md" %}})

- **[0]**
  - `Guid: Item_Ingredient_Plant_PlantFiber PrefabGuid(-1409142667)`
  - `Amount: 80`

- **[1]**
  - `Guid: Item_NetherShard_T01 PrefabGuid(2103989354)`
  - `Amount: 400`

- [ProjectM.RecipeOutputBuffer]({{% relref "components/RecipeOutputBuffer.md" %}})

- **[0]**
  - `Guid: Item_Dummy_NetherDemon_T01_Seeds PrefabGuid(-112151309)`
  - `Amount: 1`

- [ProjectM.RecipeOutputUnitBuffer]({{% relref "components/RecipeOutputUnitBuffer.md" %}})

- **[0]**
  - `Guid: CHAR_Treant_NetherDemon PrefabGuid(-2037006512)`
  - `Stacks: 1`

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
