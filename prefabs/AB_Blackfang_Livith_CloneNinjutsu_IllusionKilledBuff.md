---
title: AB_Blackfang_Livith_CloneNinjutsu_IllusionKilledBuff
guid: -548966732
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Blackfang_Livith_CloneNinjutsu_IllusionKilledBuff

**GUID:** `-548966732`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [ProjectM.Attach](/components/Attach)
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner](/components/EntityOwner)
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator)
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff](/components/Buff)
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

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age](/components/Age)
  - `Value: 0`

- [ProjectM.BuffCategory](/components/BuffCategory)
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [ProjectM.LifeTime](/components/LifeTime)
  - `Duration: 12`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: -548966732`

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)
