---
title: Item_Ingredient_Mineral_GoldOre
guid: 660533034
categories: ['All', 'Item']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `660533034`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Item]({{% relref "prefabs/Item.md" %}})

## Components

- [ProjectM.InventoryItem]({{% relref "components/InventoryItem.md" %}})
  - `ContainerEntity: Entity(0:0)`

- [ProjectM.ItemData]({{% relref "components/ItemData.md" %}})
  - `SilverValue: 1`
  - `Entity: Entity(0:0)`
  - `ItemTypeGUID: Item_Ingredient_Mineral_GoldOre PrefabGuid(660533034)`
  - `DropItemPrefab: Resource_Drop_CopperOre PrefabGuid(-1293505743)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 250`
  - `ItemType: ProjectM.ItemType Stackable`
  - `ItemCategory: ProjectM.ItemCategory TeleportBound, Mineral`
  - `RemoveOnConsume: True`
  - `SortOrder: 0`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Shared.Salvageable]({{% relref "components/Salvageable.md" %}})
  - `RecipeGUID: Recipe_CastleUpkeep_T02 PrefabGuid(-1281672171)`
  - `SalvageFactor: 1`
  - `SalvageTimer: 10`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 660533034`

- [ProjectM.RecipeRequirementBuffer]({{% relref "components/RecipeRequirementBuffer.md" %}})

- **[0]**
  - `Guid: Item_Ingredient_GoldenJewelry PrefabGuid(-1749304196)`
  - `Amount: 2`

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
