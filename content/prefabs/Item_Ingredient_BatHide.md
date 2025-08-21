---
title: Item_Ingredient_BatHide
guid: 1262845777
categories: ['All', 'Item']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `1262845777`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Item]({{% relref "prefabs/Item.md" %}})

## Components

- [ProjectM.InventoryItem]({{% relref "components/InventoryItem.md" %}})
  - `ContainerEntity: Entity(0:0)`

- [ProjectM.ItemData]({{% relref "components/ItemData.md" %}})
  - `SilverValue: 1`
  - `Entity: Entity(0:0)`
  - `ItemTypeGUID: Item_Ingredient_BatHide PrefabGuid(1262845777)`
  - `DropItemPrefab: Resource_Drop_Hide PrefabGuid(2086608040)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 500`
  - `ItemType: ProjectM.ItemType Stackable`
  - `ItemCategory: ProjectM.ItemCategory TeleportBound, Tailoring`
  - `RemoveOnConsume: True`
  - `SortOrder: 0`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Shared.Salvageable]({{% relref "components/Salvageable.md" %}})
  - `RecipeGUID: Recipe_CastleUpkeep_T02 PrefabGuid(-1281672171)`
  - `SalvageFactor: 1`
  - `SalvageTimer: 15`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 1262845777`

- [ProjectM.RecipeRequirementBuffer]({{% relref "components/RecipeRequirementBuffer.md" %}})

- **[0]**
  - `Guid: Item_NetherShard_T01 PrefabGuid(2103989354)`
  - `Amount: 3`

- **[1]**
  - `Guid: Item_BloodEssence_T01 PrefabGuid(862477668)`
  - `Amount: 5`

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
