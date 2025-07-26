---
title: Item_Ingredient_CottonYarn
guid: 444400639
categories:
- All
- Item
nav_exclude: true
search_exclude: true
layout: default
components:
- InventoryItem
- ItemData
- DestroyData
- DestroyState
- Salvageable
- PrefabGUID
- RecipeRequirementBuffer
- SpawnTag
- Prefab
- Simulate
---

# Item_Ingredient_CottonYarn

**GUID:** `444400639`

**Categories:** [All](/prefabs/All), [Item](/prefabs/Item)

## Components

- [InventoryItem](/components/InventoryItem){:target="_blank"}
  - `ContainerEntity: Entity(0:0)`

- [ItemData](/components/ItemData){:target="_blank"}
  - `SilverValue: 1`
  - `Entity: Entity(0:0)`
  - `ItemTypeGUID: Item_Ingredient_CottonYarn PrefabGuid(444400639)`
  - `DropItemPrefab: Resource_Drop_CottonYarn PrefabGuid(470647052)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 100`
  - `ItemType: ProjectM.ItemType Stackable`
  - `ItemCategory: ProjectM.ItemCategory TeleportBound, Tailoring`
  - `RemoveOnConsume: True`
  - `SortOrder: 0`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Salvageable](/components/Salvageable){:target="_blank"}
  - `RecipeGUID: Recipe_Ingredient_CottonYarn PrefabGuid(-1463059104)`
  - `SalvageFactor: 0.25`
  - `SalvageTimer: 8`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 444400639`

- [RecipeRequirementBuffer](/components/RecipeRequirementBuffer){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
