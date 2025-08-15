---
title: Item_BloodEssence_T03_Primal
guid: 1566989408
categories: ['All', 'Item']
nav_exclude: true
search_exclude: true
layout: default
---

# Item_BloodEssence_T03_Primal

**GUID:** `1566989408`

**Categories:** [All](/prefabs/All), [Item](/prefabs/Item)

## Components

- [ProjectM.InventoryItem](/components/InventoryItem)
  - `ContainerEntity: Entity(0:0)`

- [ProjectM.ItemData](/components/ItemData)
  - `SilverValue: 1`
  - `Entity: Entity(0:0)`
  - `ItemTypeGUID: Item_BloodEssence_T03_Primal PrefabGuid(1566989408)`
  - `DropItemPrefab: Resource_Drop_Essence_Greater PrefabGuid(-294351577)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 10`
  - `ItemType: ProjectM.ItemType Stackable`
  - `ItemCategory: ProjectM.ItemCategory BloodEssence, Blood, Alchemy`
  - `RemoveOnConsume: True`
  - `SortOrder: 0`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Shared.Salvageable](/components/Salvageable)
  - `RecipeGUID: Recipe_CastleUpkeep_T02 PrefabGuid(-1281672171)`
  - `SalvageFactor: 1`
  - `SalvageTimer: 10`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: 1566989408`

- [ProjectM.RecipeRequirementBuffer](/components/RecipeRequirementBuffer)

- **[0]**
  - `Guid: Item_Ingredient_MapZone_Tesla PrefabGuid(-77555820)`
  - `Amount: 5`

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)
