---
title: Buff_VHunter_Leader_Haste_Hard
guid: 1007184557
categories:
- All
- Buff
nav_exclude: true
search_exclude: true
layout: default
components:
- Attach
- EntityOwner
- EntityCreator
- Buff
- ModifyMovementSpeedBuff
- DestroyData
- DestroyState
- Age
- BuffCategory
- PrefabGUID
- Buff_Destroy_On_Owner_Death
- SpawnTag
- Prefab
- Simulate
---

# Buff_VHunter_Leader_Haste_Hard

**GUID:** `1007184557`

**Categories:** [All](/prefabs/All), [Buff](/prefabs/Buff)

## Components

- [Attach](/components/Attach){:target="_blank"}
  - `Parent: Entity(0:0)`

- [EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [Buff](/components/Buff){:target="_blank"}
  - `StartTimeUnmodified: 0`
  - `Target: Entity(0:0)`
  - `BuffType: ProjectM.BuffType Replace`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: True`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Buff`

- [ModifyMovementSpeedBuff](/components/ModifyMovementSpeedBuff){:target="_blank"}
  - `MoveSpeed: 1.4`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `MultiplyAdd: False`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [BuffCategory](/components/BuffCategory){:target="_blank"}
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 1007184557`

- [Buff_Destroy_On_Owner_Death](/components/Buff_Destroy_On_Owner_Death){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
