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

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [ProjectM.AbilityTarget](/components/AbilityTarget)
  - `Target: NetworkedEntity(0:0)`
  - `GetTargetType: ProjectM.AbilityTarget+Type InteractTarget`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(0)`
  - `BuffCategory: ProjectM.BuffCategoryFlag None`

- [ProjectM.Attach](/components/Attach)
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner](/components/EntityOwner)
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator)
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.AbilityState](/components/AbilityState)
  - `AbilityId: AB_OpenMenu_BuildMenu_Cast PrefabGuid(785101229)`
  - `GroupEntity: NetworkedEntity(0:0)`
  - `AbilityTypeFlag: ProjectM.AbilityTypeFlag None`

- [ProjectM.AbilityPriority](/components/AbilityPriority)
  - `Priority: 0`
  - `InterruptLowerPriority: False`
  - `InterruptHigherPriority: False`

- [ProjectM.AbilityCastTimeData](/components/AbilityCastTimeData)
  - `MaxCastTime: 0.05`
  - `PostCastTime: 0`
  - `HideCastBar: True`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.AbilityCooldownState](/components/AbilityCooldownState)
  - `CooldownEndTime: 0`
  - `CurrentCooldown: 0`

- [ProjectM.AbilityCooldownData](/components/AbilityCooldownData)
  - `ShowInteractCooldownHUD: False`
  - `IgnoreCooldownModifier: False`
  - `Cooldown: 0.1`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: 785101229`

- [ProjectM.AbilitySpawnPrefabOnCast](/components/AbilitySpawnPrefabOnCast)

- **[0]**
  - `SpawnPrefab: AB_OpenMenu_BuildMenu PrefabGuid(628606387)`
  - `Target: ProjectM.AbilitySpawnTarget Owner`
  - `TargetEntity: Entity(0:0)`
  - `HoverDistance: 0`
  - `HoverCondition: None`
  - `Condition: None`
  - `HoverMaxDistance: 900`

- [ProjectM.AbilityCastCondition](/components/AbilityCastCondition)

- [ProjectM.PreventDisableWhenNoPlayersInRange](/components/PreventDisableWhenNoPlayersInRange)

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner)
