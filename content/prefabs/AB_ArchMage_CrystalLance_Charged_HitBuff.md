---
title: AB_ArchMage_CrystalLance_Charged_HitBuff
guid: 1237316881
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_ArchMage_CrystalLance_Charged_HitBuff

**GUID:** `1237316881`

**Categories:** [AB]({< relref "prefabs/AB.md" >}), [All]({< relref "prefabs/All.md" >})

## Components

- [ProjectM.Attach]({< relref "components/Attach.md" >})
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner]({< relref "components/EntityOwner.md" >})
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]({< relref "components/EntityCreator.md" >})
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff]({< relref "components/Buff.md" >})
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

- [ProjectM.DestroyData]({< relref "components/DestroyData.md" >})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({< relref "components/DestroyState.md" >})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age]({< relref "components/Age.md" >})
  - `Value: 0`

- [ProjectM.BuffCategory]({< relref "components/BuffCategory.md" >})
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [ProjectM.LifeTime]({< relref "components/LifeTime.md" >})
  - `Duration: 0.3`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [Stunlock.Core.PrefabGUID]({< relref "components/PrefabGUID.md" >})
  - `_Value: 1237316881`

- [Unity.Entities.SpawnTag]({< relref "components/SpawnTag.md" >})

- [Unity.Entities.Prefab]({< relref "components/Prefab.md" >})

- [Unity.Entities.Simulate]({< relref "components/Simulate.md" >})
