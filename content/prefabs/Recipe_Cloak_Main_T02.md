---
title: Recipe_Cloak_Main_T02
guid: 1004984938
categories: ['All', 'Recipe']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `1004984938`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Recipe]({{% relref "prefabs/Recipe.md" %}})

## Components

- [ProjectM.RecipeData]({{% relref "components/RecipeData.md" %}})
  - `Entity: Prefab Recipe_Cloak_Main_T02 PrefabGuid(1004984938) - Entity(33828:1)`
  - `Guid: Recipe_Cloak_Main_T02 PrefabGuid(1004984938)`
  - `CraftDuration: 30`
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
  - `_Value: 1004984938`

- [ProjectM.ProgressionDependencyElement]({{% relref "components/ProgressionDependencyElement.md" %}})

- **[0]**
  - `PrefabGuid: Recipe_Cloak_T02_DraculasCloak PrefabGuid(1801950047)`

- **[1]**
  - `PrefabGuid: Recipe_Cloak_T02_RazerCloak PrefabGuid(-2120661831)`

- **[2]**
  - `PrefabGuid: Recipe_Cloak_T02_GloomrotCloak PrefabGuid(950343746)`

- [ProjectM.RecipeRequirementBuffer]({{% relref "components/RecipeRequirementBuffer.md" %}})

- **[0]**
  - `Guid: Item_Ingredient_CottonYarn PrefabGuid(444400639)`
  - `Amount: 8`

- [ProjectM.RecipeOutputBuffer]({{% relref "components/RecipeOutputBuffer.md" %}})

- **[0]**
  - `Guid: Item_Cloak_Main_T02_Hunter PrefabGuid(786585343)`
  - `Amount: 1`

- [ProjectM.RecipeOutputUnitBuffer]({{% relref "components/RecipeOutputUnitBuffer.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
