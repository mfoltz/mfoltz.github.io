---
title: AB_OpenMenu_BuildMenu_AbilityGroup
guid: -996493500
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `-996493500`

**Categories:** [AB]({{% relref "prefabs/AB.md" %}}), [All]({{% relref "prefabs/All.md" %}})

## Components

- [ProjectM.Attach]({{% relref "components/Attach.md" %}})
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner]({{% relref "components/EntityOwner.md" %}})
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]({{% relref "components/EntityCreator.md" %}})
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.AbilityGroupState]({{% relref "components/AbilityGroupState.md" %}})
  - `Character: NetworkedEntity(0:0)`
  - `GroupId: GUID Not Found`
  - `SlotIndex: -1`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.AbilityGroupInfo]({{% relref "components/AbilityGroupInfo.md" %}})
  - `ReleaseCastQueueTime: 0.3`
  - `CastCondition: None`
  - `HoverCondition: None`
  - `MinRange: 0`
  - `MaxRange: 0`
  - `BehaviorType: ProjectM.AbilityBehaviorType None`
  - `InputType: ProjectM.AbilityInputCastType Default`
  - `Target: ProjectM.AbilitySpawnTarget Owner`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: -996493500`

- [ProjectM.AbilityStateBuffer]({{% relref "components/AbilityStateBuffer.md" %}})

- [ProjectM.AbilityCastCondition]({{% relref "components/AbilityCastCondition.md" %}})

- [ProjectM.AbilityGroupStartAbilitiesBuffer]({{% relref "components/AbilityGroupStartAbilitiesBuffer.md" %}})

- **[0]**
  - `PrefabGUID: AB_OpenMenu_BuildMenu_Cast PrefabGuid(785101229)`

- [ProjectM.PreventDisableWhenNoPlayersInRange]({{% relref "components/PreventDisableWhenNoPlayersInRange.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})
