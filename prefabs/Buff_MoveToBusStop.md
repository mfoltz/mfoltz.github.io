---
title: Buff_MoveToBusStop
guid: -1096336901
categories: ['All', 'Buff']
nav_exclude: true
search_exclude: true
layout: default
---

# Buff_MoveToBusStop

**GUID:** `-1096336901`

**Categories:** All, Buff

## Components

- **ProjectM.Script_Buff_MoveToBusStop_DataServer**
  - `BusStopName: Unity.Collections.FixedString32Bytes TheBusStop`
  - `Speed_Base: 0`
  - `Speed_Variation: 0`
  - `MaxOffsetDistance: 0`
  - `DestroyDistanceSq: 100`
  - `TargetDestroyBuff: Buff_MoveToBusStopDestroy PrefabGuid(539166338)`
  - `PatrolEntity: Entity(0:0)`
  - `LastWaypointPosition: Unity.Mathematics.float2 float2(0f, 0f)`
  - `State: ProjectM.Script_Buff_MoveToBusStop_State MoveToPath`

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
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- **ProjectM.LifeTime**
  - `Duration: 999`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.Scripting.ScriptDestroy**
  - `Handled: False`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -1096336901`

- **ProjectM.Scripting.ScriptSpawn**
  - *(No fields)*

- **ProjectM.Scripting.ScriptUpdate**
  - *(No fields)*

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

