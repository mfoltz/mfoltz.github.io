---
title: AB_Iva_BomberJetpack_ChaseTarget_HasteBuff
guid: -992946595
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Iva_BomberJetpack_ChaseTarget_HasteBuff

**GUID:** `-992946595`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

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
  - `MaxStacks: 1`
  - `ResetAge: True`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Debuff`

- **ProjectM.ModifyMovementSpeedBuff**
  - `MoveSpeed: 1.5`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `MultiplyAdd: False`

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
  - `Duration: 2`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -992946595`

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

