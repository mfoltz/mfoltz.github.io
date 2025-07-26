---
title: AB_Chaos_MercilessCharge_GrabbingBuff
guid: 960377305
categories:
- AB
- All
nav_exclude: true
search_exclude: true
layout: default
components:
- HideWeapon
- Attach
- EntityOwner
- EntityCreator
- Buff
- DestroyData
- DestroyState
- Age
- BuffCategory
- LifeTime
- PrefabGUID
- GrabBuff
- SpawnTag
- Prefab
- Simulate
---

# AB_Chaos_MercilessCharge_GrabbingBuff

**GUID:** `960377305`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [HideWeapon](/components/HideWeapon){:target="_blank"}
  - `HideWeaponSequenceGUID: SequenceGUID 1136240177`
  - `HideWeaponState: SequenceState`
  - `Id: Entity(0:0)`

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
  - `BuffEffectType: ProjectM.BuffEffectType Debuff`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [BuffCategory](/components/BuffCategory){:target="_blank"}
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag RemoveOnDisconnect`
  - `KeepOldest: False`

- [LifeTime](/components/LifeTime){:target="_blank"}
  - `Duration: 1.5`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 960377305`

- [GrabBuff](/components/GrabBuff){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
