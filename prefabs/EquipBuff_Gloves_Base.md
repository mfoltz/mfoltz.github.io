---
title: EquipBuff_Gloves_Base
guid: 541298575
categories:
- All
- Equip
nav_exclude: true
search_exclude: true
layout: default
components:
- Attach
- EntityOwner
- EntityCreator
- EquippableBuff
- Buff
- DestroyData
- DestroyState
- ArmorLevel
- PrefabGUID
- Buff_Persists_Through_Death
- SpawnTag
- Prefab
- Simulate
---

# EquipBuff_Gloves_Base

**GUID:** `541298575`

**Categories:** [All](/prefabs/All), [Equip](/prefabs/Equip)

## Components

- [Attach](/components/Attach){:target="_blank"}
  - `Parent: Entity(0:0)`

- [EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [EquippableBuff](/components/EquippableBuff){:target="_blank"}
  - `ItemSource: Entity(0:0)`

- [Buff](/components/Buff){:target="_blank"}
  - `StartTimeUnmodified: 0`
  - `Target: Entity(0:0)`
  - `BuffType: ProjectM.BuffType Parallel`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: False`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Buff`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ArmorLevel](/components/ArmorLevel){:target="_blank"}
  - `Level: 0`
  - `ModificationId: Unset`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 541298575`

- [Buff_Persists_Through_Death](/components/Buff_Persists_Through_Death){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
