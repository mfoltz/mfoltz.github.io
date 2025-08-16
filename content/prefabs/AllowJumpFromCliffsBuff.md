---
title: AllowJumpFromCliffsBuff
guid: -701914966
categories: ['All', 'Remainders']
nav_exclude: true
search_exclude: true
layout: default
---

# AllowJumpFromCliffsBuff

**GUID:** `-701914966`

**Categories:** [All]({{< relref "prefabs/All.md" >}}), [Remainders]({{< relref "prefabs/Remainders.md" >}})

## Components

- [ProjectM.Attach]({{< relref "components/Attach.md" >}})
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner]({{< relref "components/EntityOwner.md" >}})
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]({{< relref "components/EntityCreator.md" >}})
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff]({{< relref "components/Buff.md" >}})
  - `StartTimeUnmodified: 0`
  - `Target: Entity(0:0)`
  - `BuffType: ProjectM.BuffType Replace`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: True`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Debuff`

- [ProjectM.AllowJumpFromCliffsBuff]({{< relref "components/AllowJumpFromCliffsBuff.md" >}})
  - `AllowJumpModificationId: Unset`
  - `BlockJumpModificationId: Unset`
  - `ModificationPriority: 0`
  - `AllowJump: True`
  - `BlockJump: False`

- [ProjectM.DestroyData]({{< relref "components/DestroyData.md" >}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{< relref "components/DestroyState.md" >}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age]({{< relref "components/Age.md" >}})
  - `Value: 0`

- [ProjectM.LifeTime]({{< relref "components/LifeTime.md" >}})
  - `Duration: 1`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [Unity.Transforms.Rotation]({{< relref "components/Rotation.md" >}})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({{< relref "components/Translation.md" >}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld]({{< relref "components/LocalToWorld.md" >}})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({{< relref "components/LocalTransform.md" >}})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID]({{< relref "components/PrefabGUID.md" >}})
  - `_Value: -701914966`

- [ProjectM.Buff_Destroy_On_Owner_Death]({{< relref "components/Buff_Destroy_On_Owner_Death.md" >}})

- [Unity.Entities.SpawnTag]({{< relref "components/SpawnTag.md" >}})

- [Unity.Entities.Prefab]({{< relref "components/Prefab.md" >}})

- [Unity.Entities.Simulate]({{< relref "components/Simulate.md" >}})
