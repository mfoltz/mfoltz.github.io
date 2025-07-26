---
title: EquipBuff_Cloak_Base
guid: 1409441911
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
- MiscItemLevel
- PrefabGUID
- Buff_Persists_Through_Death
- SpawnTag
- Prefab
- Simulate
---

# EquipBuff_Cloak_Base

**GUID:** `1409441911`

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

- [MiscItemLevel](/components/MiscItemLevel){:target="_blank"}
  - `Level: 0`
  - `ModificationId: Unset`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 1409441911`

- [Buff_Persists_Through_Death](/components/Buff_Persists_Through_Death){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
