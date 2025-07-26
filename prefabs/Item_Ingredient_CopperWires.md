---
title: Item_Ingredient_CopperWires
guid: -456161884
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

# Item_Ingredient_CopperWires

**GUID:** `-456161884`

**Categories:** [All](/prefabs/All), [Item](/prefabs/Item)

## Components

- [InventoryItem](/components/InventoryItem){:target="_blank"}
  - `ContainerEntity: Entity(0:0)`

- [ItemData](/components/ItemData){:target="_blank"}
  - `SilverValue: 1`
  - `Entity: Entity(0:0)`
  - `ItemTypeGUID: Item_Ingredient_CopperWires PrefabGuid(-456161884)`
  - `DropItemPrefab: Resource_Drop_Component PrefabGuid(-259659176)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 20`
  - `ItemType: ProjectM.ItemType Stackable`
  - `ItemCategory: ProjectM.ItemCategory TeleportBound`
  - `RemoveOnConsume: True`
  - `SortOrder: 0`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Salvageable](/components/Salvageable){:target="_blank"}
  - `RecipeGUID: Recipe_CastleUpkeep_T02 PrefabGuid(-1281672171)`
  - `SalvageFactor: 1`
  - `SalvageTimer: 15`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -456161884`

- [RecipeRequirementBuffer](/components/RecipeRequirementBuffer){:target="_blank"}

- **[0]**
  - `Guid: Item_Ingredient_MapZone_Tesla PrefabGuid(-77555820)`
  - `Amount: 1`

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
