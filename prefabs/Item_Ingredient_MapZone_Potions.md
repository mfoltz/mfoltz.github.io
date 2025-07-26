---
title: Item_Ingredient_MapZone_Potions
guid: -1617671082
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

# Item_Ingredient_MapZone_Potions

**GUID:** `-1617671082`

**Categories:** [All](/prefabs/All), [Item](/prefabs/Item)

## Components

- [InventoryItem](/components/InventoryItem){:target="_blank"}
  - `ContainerEntity: Entity(0:0)`

- [ItemData](/components/ItemData){:target="_blank"}
  - `SilverValue: 1`
  - `Entity: Entity(0:0)`
  - `ItemTypeGUID: Item_Ingredient_MapZone_Potions PrefabGuid(-1617671082)`
  - `DropItemPrefab: Resource_Drop_Fish PrefabGuid(526872006)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 5`
  - `ItemType: ProjectM.ItemType Stackable`
  - `ItemCategory: ProjectM.ItemCategory TeleportBound`
  - `RemoveOnConsume: True`
  - `SortOrder: 0`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Salvageable](/components/Salvageable){:target="_blank"}
  - `RecipeGUID: GUID Not Found`
  - `SalvageFactor: 0.25`
  - `SalvageTimer: 8`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -1617671082`

- [RecipeRequirementBuffer](/components/RecipeRequirementBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Ingredient_FishBone PrefabGuid(424158416)`
  - `Amount: 1`

- **[1]**
  - `Guid: Item_Ingredient_Fishoil PrefabGuid(-242277891)`
  - `Amount: 6`

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
