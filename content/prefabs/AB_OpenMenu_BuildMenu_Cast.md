---
title: AB_OpenMenu_BuildMenu_Cast
guid: 785101229
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `785101229`

**Categories:** [AB]({{% relref "prefabs/AB.md" %}}), [All]({{% relref "prefabs/All.md" %}})

## Components

- [ProjectM.AbilityTarget]({{% relref "components/AbilityTarget.md" %}})
  - `Target: NetworkedEntity(0:0)`
  - `GetTargetType: ProjectM.AbilityTarget+Type InteractTarget`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(0)`
  - `BuffCategory: ProjectM.BuffCategoryFlag None`

- [ProjectM.Attach]({{% relref "components/Attach.md" %}})
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner]({{% relref "components/EntityOwner.md" %}})
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]({{% relref "components/EntityCreator.md" %}})
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.AbilityState]({{% relref "components/AbilityState.md" %}})
  - `AbilityId: AB_OpenMenu_BuildMenu_Cast PrefabGuid(785101229)`
  - `GroupEntity: NetworkedEntity(0:0)`
  - `AbilityTypeFlag: ProjectM.AbilityTypeFlag None`

- [ProjectM.AbilityPriority]({{% relref "components/AbilityPriority.md" %}})
  - `Priority: 0`
  - `InterruptLowerPriority: False`
  - `InterruptHigherPriority: False`

- [ProjectM.AbilityCastTimeData]({{% relref "components/AbilityCastTimeData.md" %}})
  - `MaxCastTime: 0.05`
  - `PostCastTime: 0`
  - `HideCastBar: True`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.AbilityCooldownState]({{% relref "components/AbilityCooldownState.md" %}})
  - `CooldownEndTime: 0`
  - `CurrentCooldown: 0`

- [ProjectM.AbilityCooldownData]({{% relref "components/AbilityCooldownData.md" %}})
  - `ShowInteractCooldownHUD: False`
  - `IgnoreCooldownModifier: False`
  - `Cooldown: 0.1`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 785101229`

- [ProjectM.AbilitySpawnPrefabOnCast]({{% relref "components/AbilitySpawnPrefabOnCast.md" %}})

- **[0]**
  - `SpawnPrefab: AB_OpenMenu_BuildMenu PrefabGuid(628606387)`
  - `Target: ProjectM.AbilitySpawnTarget Owner`
  - `TargetEntity: Entity(0:0)`
  - `HoverDistance: 0`
  - `HoverCondition: None`
  - `Condition: None`
  - `HoverMaxDistance: 900`

- [ProjectM.AbilityCastCondition]({{% relref "components/AbilityCastCondition.md" %}})

- [ProjectM.PreventDisableWhenNoPlayersInRange]({{% relref "components/PreventDisableWhenNoPlayersInRange.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})
