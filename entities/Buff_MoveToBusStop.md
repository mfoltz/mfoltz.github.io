---
title: Buff_MoveToBusStop
guid: -1096336901
categories: ['All', 'Buff']
nav_exclude: true
search_exclude: false
layout: default
---

# Buff_MoveToBusStop

**GUID:** `-1096336901`

**Categories:** [All](/prefabs/All), [Buff](/prefabs/Buff)

## Components

- [Script_Buff_MoveToBusStop_DataServer](/components/Script_Buff_MoveToBusStop_DataServer){:target="_blank"}
  - `BusStopName: Unity.Collections.FixedString32Bytes TheBusStop`
  - `Speed_Base: 0`
  - `Speed_Variation: 0`
  - `MaxOffsetDistance: 0`
  - `DestroyDistanceSq: 100`
  - `TargetDestroyBuff: Buff_MoveToBusStopDestroy PrefabGuid(539166338)`
  - `PatrolEntity: Entity(0:0)`
  - `LastWaypointPosition: Unity.Mathematics.float2 float2(0f, 0f)`
  - `State: ProjectM.Script_Buff_MoveToBusStop_State MoveToPath`

- [Attach](/components/Attach){:target="_blank"}
  - `Parent: Entity(0:0)`

- [EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [Buff](/components/Buff){:target="_blank"}
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

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [BuffCategory](/components/BuffCategory){:target="_blank"}
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [LifeTime](/components/LifeTime){:target="_blank"}
  - `Duration: 999`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ScriptDestroy](/components/ScriptDestroy){:target="_blank"}
  - `Handled: False`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -1096336901`

- [ScriptSpawn](/components/ScriptSpawn){:target="_blank"}
  - *(No fields)*

- [ScriptUpdate](/components/ScriptUpdate){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
