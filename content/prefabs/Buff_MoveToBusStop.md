---
title: Buff_MoveToBusStop
guid: -1096336901
categories: ['All', 'Buff']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `-1096336901`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Buff]({{% relref "prefabs/Buff.md" %}})

## Components

- [ProjectM.Script_Buff_MoveToBusStop_DataServer]({{% relref "components/Script_Buff_MoveToBusStop_DataServer.md" %}})
  - `BusStopName: Unity.Collections.FixedString32Bytes TheBusStop`
  - `Speed_Base: 0`
  - `Speed_Variation: 0`
  - `MaxOffsetDistance: 0`
  - `DestroyDistanceSq: 100`
  - `TargetDestroyBuff: Buff_MoveToBusStopDestroy PrefabGuid(539166338)`
  - `PatrolEntity: Entity(0:0)`
  - `LastWaypointPosition: Unity.Mathematics.float2 float2(0f, 0f)`
  - `State: ProjectM.Script_Buff_MoveToBusStop_State MoveToPath`

- [ProjectM.Attach]({{% relref "components/Attach.md" %}})
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner]({{% relref "components/EntityOwner.md" %}})
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]({{% relref "components/EntityCreator.md" %}})
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff]({{% relref "components/Buff.md" %}})
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

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age]({{% relref "components/Age.md" %}})
  - `Value: 0`

- [ProjectM.BuffCategory]({{% relref "components/BuffCategory.md" %}})
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [ProjectM.LifeTime]({{% relref "components/LifeTime.md" %}})
  - `Duration: 999`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.Scripting.ScriptDestroy]({{% relref "components/ScriptDestroy.md" %}})
  - `Handled: False`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: -1096336901`

- [ProjectM.Scripting.ScriptSpawn]({{% relref "components/ScriptSpawn.md" %}})

- [ProjectM.Scripting.ScriptUpdate]({{% relref "components/ScriptUpdate.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
