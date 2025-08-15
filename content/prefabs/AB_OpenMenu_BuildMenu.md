---
title: AB_OpenMenu_BuildMenu
guid: 628606387
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_OpenMenu_BuildMenu

**GUID:** `628606387`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [ProjectM.Attach](/components/Attach)
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner](/components/EntityOwner)
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator)
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff](/components/Buff)
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

- [ProjectM.SpellTarget](/components/SpellTarget)
  - `Target: NetworkedEntity(0:0)`
  - `DestroyIfNotInteractable: True`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.BuffCategory](/components/BuffCategory)
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag Interact`
  - `KeepOldest: False`

- [ProjectM.Team](/components/Team)
  - `Value: 1`
  - `FactionIndex: -1`

- [ProjectM.UI.GoToHUDMenu](/components/GoToHUDMenu)
  - `Delay: 0`
  - `IsHandled: False`
  - `MenuType: ProjectM.UI.HUDMenuType None`

- [ProjectM.TeamReference](/components/TeamReference)
  - `Value: ModifiableEntity(0:0)`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: 628606387`

- [ProjectM.GetOwnerTeamOnSpawn](/components/GetOwnerTeamOnSpawn)

- [ProjectM.InteractBuff](/components/InteractBuff)

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)
