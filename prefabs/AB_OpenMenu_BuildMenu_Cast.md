---
title: AB_OpenMenu_BuildMenu_Cast
guid: 785101229
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_OpenMenu_BuildMenu_Cast

**GUID:** `785101229`

**Categories:** [AB](/prefabs/AB/), [All](/prefabs/All/)

## Components

- **ProjectM.AbilityTarget**
  - `Target: NetworkedEntity(0:0)`
  - `GetTargetType: ProjectM.AbilityTarget+Type InteractTarget`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(0)`
  - `BuffCategory: ProjectM.BuffCategoryFlag None`

- **ProjectM.Attach**
  - `Parent: Entity(0:0)`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.AbilityState**
  - `AbilityId: AB_OpenMenu_BuildMenu_Cast PrefabGuid(785101229)`
  - `GroupEntity: NetworkedEntity(0:0)`
  - `AbilityTypeFlag: ProjectM.AbilityTypeFlag None`

- **ProjectM.AbilityPriority**
  - `Priority: 0`
  - `InterruptLowerPriority: False`
  - `InterruptHigherPriority: False`

- **ProjectM.AbilityCastTimeData**
  - `MaxCastTime: 0.05`
  - `PostCastTime: 0`
  - `HideCastBar: True`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.AbilityCooldownState**
  - `CooldownEndTime: 0`
  - `CurrentCooldown: 0`

- **ProjectM.AbilityCooldownData**
  - `ShowInteractCooldownHUD: False`
  - `IgnoreCooldownModifier: False`
  - `Cooldown: 0.1`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 785101229`

- **ProjectM.AbilitySpawnPrefabOnCast**
  - *(No fields)*

- **[0]**
  - `SpawnPrefab: AB_OpenMenu_BuildMenu PrefabGuid(628606387)`
  - `Target: ProjectM.AbilitySpawnTarget Owner`
  - `TargetEntity: Entity(0:0)`
  - `HoverDistance: 0`
  - `HoverCondition: None`
  - `Condition: None`
  - `HoverMaxDistance: 900`

- **ProjectM.AbilityCastCondition**
  - *(No fields)*

- **ProjectM.PreventDisableWhenNoPlayersInRange**
  - *(No fields)*

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

- **Unity.Entities.BlobAssetOwner**
  - *(No fields)*

