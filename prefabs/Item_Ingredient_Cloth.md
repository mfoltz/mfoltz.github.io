---
title: Item_Ingredient_Cloth
guid: -700774739
categories: ['All', 'Item']
nav_exclude: true
search_exclude: true
layout: default
---

# Item_Ingredient_Cloth

**GUID:** `-700774739`

**Categories:** [All](/prefabs/All), [Item](/prefabs/Item)

## Components

- [ProjectM.InventoryItem](/components/InventoryItem){:target="_blank"}
  - `ContainerEntity: Entity(0:0)`

- [ProjectM.ItemData](/components/ItemData){:target="_blank"}
  - `SilverValue: 1`
  - `Entity: Entity(0:0)`
  - `ItemTypeGUID: Item_Ingredient_Cloth PrefabGuid(-700774739)`
  - `DropItemPrefab: Resource_Drop_Cloth PrefabGuid(-1560414694)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 100`
  - `ItemType: ProjectM.ItemType Stackable`
  - `ItemCategory: ProjectM.ItemCategory TeleportBound, Tailoring`
  - `RemoveOnConsume: True`
  - `SortOrder: 0`

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Shared.Salvageable](/components/Salvageable){:target="_blank"}
  - `RecipeGUID: Recipe_Ingredient_Cloth01 PrefabGuid(-535699316)`
  - `SalvageFactor: 0.25`
  - `SalvageTimer: 8`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -700774739`

- [ProjectM.RecipeRequirementBuffer](/components/RecipeRequirementBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Ingredient_Leather PrefabGuid(-1907572080)`
  - `Amount: 1`

- **[1]**
  - `Guid: Item_Ingredient_Plant_PlantFiber PrefabGuid(-1409142667)`
  - `Amount: 2`

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
