---
title: Buff_General_Stun_NoEffect_BlockMultiple
guid: 1732405081
categories: ['All', 'Buff']
nav_exclude: true
search_exclude: true
layout: default
---

# Buff_General_Stun_NoEffect_BlockMultiple

**GUID:** `1732405081`

**Categories:** [All](/prefabs/All), [Buff](/prefabs/Buff)

## Components

- **ProjectM.HideWeapon**
  - `HideWeaponSequenceGUID: SequenceGUID 1136240177`
  - `HideWeaponState: SequenceState`
  - `Id: Entity(0:0)`

- **ProjectM.Attach**
  - `Parent: Entity(0:0)`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.Buff**
  - `StartTimeUnmodified: 0`
  - `Target: Entity(0:0)`
  - `BuffType: ProjectM.BuffType Block`
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
  - `Groups: ProjectM.BuffCategoryFlag Stun`
  - `KeepOldest: False`

- **ProjectM.LifeTime**
  - `Duration: 3`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.BuffModificationFlagData**
  - `ModificationTypes: 1107296272`
  - `ModificationId: Unset`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 1732405081`

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

