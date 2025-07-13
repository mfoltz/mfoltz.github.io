---
title: AB_CastleMan_Grab_PostHitBuff
guid: -309559319
categories: ['AB', 'All']
nav_exclude: true
search_exclude: false
layout: default
---

# AB_CastleMan_Grab_PostHitBuff

**GUID:** `-309559319`

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
  - `BuffType: ProjectM.BuffType Replace`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: True`
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

- **ProjectM.DiminishingReturn**
  - `DiminishingBuff: DiminishingReturn_Buff_Stun PrefabGuid(-160846617)`
  - `SCTPrefab: SCT_Type_Immune PrefabGuid(-1203333778)`
  - `AllowOnUnitTarget: False`
  - `AllowFromUnitOwner: False`

- **ProjectM.LifeTime**
  - `Duration: 1`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.BuffModificationFlagData**
  - `ModificationTypes: 18253611024`
  - `ModificationId: Unset`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -309559319`

- **ProjectM.DiminishingReturnElement**
  - *(No fields)*

- **[0]**
  - `DurationFactor: 0.67`

- **[1]**
  - `DurationFactor: 0.33`

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

