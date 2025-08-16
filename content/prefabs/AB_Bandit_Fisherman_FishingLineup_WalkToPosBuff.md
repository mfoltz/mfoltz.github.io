---
title: AB_Bandit_Fisherman_FishingLineup_WalkToPosBuff
guid: 1667669669
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Bandit_Fisherman_FishingLineup_WalkToPosBuff

**GUID:** `1667669669`

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

- [ProjectM.GetOwnerRotation]{{< relref "components/GetOwnerRotation.md" >}}
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource SpellTarget`
  - `InverseRotation: False`

- [ProjectM.GetTranslationOnSpawn]{{< relref "components/GetTranslationOnSpawn.md" >}}
  - `TranslationSource: ProjectM.GetTranslationSource SpellTarget`
  - `SnapToGround: False`

- [ProjectM.ModifyMovementSpeedBuff]{{< relref "components/ModifyMovementSpeedBuff.md" >}}
  - `MoveSpeed: 1.7`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `MultiplyAdd: False`

- [ProjectM.MoveTowardsPositionBuff]{{< relref "components/MoveTowardsPositionBuff.md" >}}
  - `DistanceSq: 0`
  - `RecalculationFrequency: 3.4028235E+38`
  - `NextRecalculationTime: 0`
  - `Waypoints: PathWaypoints PathWaypoints`

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
  - `Duration: 8`
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
  - `_Value: 1667669669`

- [ProjectM.CreateGameplayEventsOnDestroy]{{< relref "components/CreateGameplayEventsOnDestroy.md" >}}

- **[0]**
  - `EventId: Local - -136930912`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.MoveTowardsPositionBuff_PathElement]{{< relref "components/MoveTowardsPositionBuff_PathElement.md" >}}

- [ProjectM.GetOwnerRotationOnlyOnSpawnTag]{{< relref "components/GetOwnerRotationOnlyOnSpawnTag.md" >}}

- [Unity.Entities.SpawnTag]{{< relref "components/SpawnTag.md" >}}

- [Unity.Entities.Prefab]{{< relref "components/Prefab.md" >}}

- [Unity.Entities.Simulate]{{< relref "components/Simulate.md" >}}
