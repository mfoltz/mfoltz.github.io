---
title: Recipe_UnitSpawn_NetherDemon_T02_Minerals
guid: 329917761
categories: ['All', 'Recipe']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `329917761`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Recipe]({{% relref "prefabs/Recipe.md" %}})

## Components

- [ProjectM.RecipeData]({{% relref "components/RecipeData.md" %}})
  - `Entity: Prefab Recipe_UnitSpawn_NetherDemon_T02_Minerals PrefabGuid(329917761) - Entity(19165:1)`
  - `Guid: Recipe_UnitSpawn_NetherDemon_T02_Minerals PrefabGuid(329917761)`
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
  - `_Value: 329917761`

- [ProjectM.RecipeRequirementBuffer]({{% relref "components/RecipeRequirementBuffer.md" %}})

- **[0]**
  - `Guid: Item_Ingredient_Gemdust PrefabGuid(820932258)`
  - `Amount: 20`

- **[1]**
  - `Guid: Item_NetherShard_T02 PrefabGuid(576389135)`
  - `Amount: 400`

- [ProjectM.RecipeOutputBuffer]({{% relref "components/RecipeOutputBuffer.md" %}})

- **[0]**
  - `Guid: Item_Dummy_NetherDemon_T02_Minerals PrefabGuid(-364321170)`
  - `Amount: 1`

- [ProjectM.RecipeOutputUnitBuffer]({{% relref "components/RecipeOutputUnitBuffer.md" %}})

- **[0]**
  - `Guid: CHAR_IronGolem_NetherDemon PrefabGuid(-1794508086)`
  - `Stacks: 1`

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
