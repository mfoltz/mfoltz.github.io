---
title: Buff_General_DisconnectedTemporaryImmunity
guid: 915954162
categories: ['All', 'Buff']
nav_exclude: true
search_exclude: true
layout: default
---

# Buff_General_DisconnectedTemporaryImmunity

**GUID:** `915954162`

**Categories:** [All](/prefabs/All), [Buff](/prefabs/Buff)

## Components

- **ProjectM.Attach**
  - `Parent: Entity(0:0)`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.Buff**
  - `StartTimeUnmodified: 0`
  - `Target: Entity(0:0)`
  - `BuffType: ProjectM.BuffType Replace`
  - `Stacks: 0`
  - `MaxStacks: 255`
  - `ResetAge: True`
  - `IncreaseStacks: True`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Debuff`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.BuffCategory**
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- **ProjectM.LifeTime**
  - `Duration: 5`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.BuffModificationFlagData**
  - `ModificationTypes: 2`
  - `ModificationId: Unset`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 915954162`

- **ProjectM.Gameplay.DisconnectSunImmunityTimeTag**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**
