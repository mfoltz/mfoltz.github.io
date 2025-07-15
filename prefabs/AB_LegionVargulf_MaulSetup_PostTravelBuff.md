---
title: AB_LegionVargulf_MaulSetup_PostTravelBuff
guid: 1587121585
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_LegionVargulf_MaulSetup_PostTravelBuff

**GUID:** `1587121585`

**Categories:** AB, All

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
  - `BuffType: ProjectM.BuffType Parallel`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: False`
  - `IncreaseStacks: False`
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
  - `Duration: 0.3`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.SpawnRandomLifeTime**
  - `MinDuration: 0.3`
  - `MaxDuration: 0.6`

- **ProjectM.BuffModificationFlagData**
  - `ModificationTypes: 17179869200`
  - `ModificationId: Unset`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 1587121585`

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

