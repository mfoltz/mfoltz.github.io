---
title: AB_Bandit_Fisherman_FeedSerpentLineup_Hard_ReachPos
guid: -2128770207
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Bandit_Fisherman_FeedSerpentLineup_Hard_ReachPos

**GUID:** `-2128770207`

**Categories:** [AB]{{< relref "prefabs/AB.md" >}}, [All]{{< relref "prefabs/All.md" >}}

## Components

- [ProjectM.Attach]{{< relref "components/Attach.md" >}}
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner]{{< relref "components/EntityOwner.md" >}}
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]{{< relref "components/EntityCreator.md" >}}
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff]{{< relref "components/Buff.md" >}}
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

- [ProjectM.SpellTarget]{{< relref "components/SpellTarget.md" >}}
  - `Target: NetworkedEntity(0:0)`
  - `DestroyIfNotInteractable: True`

- [ProjectM.GetTranslationOnSpawn]{{< relref "components/GetTranslationOnSpawn.md" >}}
  - `TranslationSource: ProjectM.GetTranslationSource SpellTarget`
  - `SnapToGround: False`

- [ProjectM.DestroyData]{{< relref "components/DestroyData.md" >}}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]{{< relref "components/DestroyState.md" >}}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age]{{< relref "components/Age.md" >}}
  - `Value: 0`

- [ProjectM.BuffCategory]{{< relref "components/BuffCategory.md" >}}
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [ProjectM.LifeTime]{{< relref "components/LifeTime.md" >}}
  - `Duration: 3`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.ManualFirstFrameLastTranslation]{{< relref "components/ManualFirstFrameLastTranslation.md" >}}
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- [Unity.Transforms.Rotation]{{< relref "components/Rotation.md" >}}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]{{< relref "components/Translation.md" >}}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld]{{< relref "components/LocalToWorld.md" >}}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]{{< relref "components/LocalTransform.md" >}}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID]{{< relref "components/PrefabGUID.md" >}}
  - `_Value: -2128770207`

- [Unity.Entities.SpawnTag]{{< relref "components/SpawnTag.md" >}}

- [Unity.Entities.Prefab]{{< relref "components/Prefab.md" >}}

- [Unity.Entities.Simulate]{{< relref "components/Simulate.md" >}}
