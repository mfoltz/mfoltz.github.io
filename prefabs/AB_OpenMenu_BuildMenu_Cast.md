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

- [ProjectM.AbilityTarget](/components/AbilityTarget){:target="_blank"}
  - `Target: NetworkedEntity(0:0)`
  - `GetTargetType: ProjectM.AbilityTarget+Type InteractTarget`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(0)`
  - `BuffCategory: ProjectM.BuffCategoryFlag None`

- [ProjectM.Attach](/components/Attach){:target="_blank"}
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.AbilityState](/components/AbilityState){:target="_blank"}
  - `AbilityId: AB_OpenMenu_BuildMenu_Cast PrefabGuid(785101229)`
  - `GroupEntity: NetworkedEntity(0:0)`
  - `AbilityTypeFlag: ProjectM.AbilityTypeFlag None`

- [ProjectM.AbilityPriority](/components/AbilityPriority){:target="_blank"}
  - `Priority: 0`
  - `InterruptLowerPriority: False`
  - `InterruptHigherPriority: False`

- [ProjectM.AbilityCastTimeData](/components/AbilityCastTimeData){:target="_blank"}
  - `MaxCastTime: 0.05`
  - `PostCastTime: 0`
  - `HideCastBar: True`

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.AbilityCooldownState](/components/AbilityCooldownState){:target="_blank"}
  - `CooldownEndTime: 0`
  - `CurrentCooldown: 0`

- [ProjectM.AbilityCooldownData](/components/AbilityCooldownData){:target="_blank"}
  - `ShowInteractCooldownHUD: False`
  - `IgnoreCooldownModifier: False`
  - `Cooldown: 0.1`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 785101229`

- [ProjectM.AbilitySpawnPrefabOnCast](/components/AbilitySpawnPrefabOnCast){:target="_blank"}

- **[0]**
  - `SpawnPrefab: AB_OpenMenu_BuildMenu PrefabGuid(628606387)`
  - `Target: ProjectM.AbilitySpawnTarget Owner`
  - `TargetEntity: Entity(0:0)`
  - `HoverDistance: 0`
  - `HoverCondition: None`
  - `Condition: None`
  - `HoverMaxDistance: 900`

- [ProjectM.AbilityCastCondition](/components/AbilityCastCondition){:target="_blank"}
  - *(No fields)*

- [ProjectM.PreventDisableWhenNoPlayersInRange](/components/PreventDisableWhenNoPlayersInRange){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*
