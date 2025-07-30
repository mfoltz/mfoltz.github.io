---
title: AB_Bandit_Foreman_BoltStorm_Trigger
guid: -978448375
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Bandit_Foreman_BoltStorm_Trigger

**GUID:** `-978448375`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.GetOwnerRotation**
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

- **ProjectM.GetTranslationOnSpawn**
  - `TranslationSource: ProjectM.GetTranslationSource Owner`
  - `SnapToGround: False`

- **ProjectM.OffsetTranslationOnSpawn**
  - `Offset: Unity.Mathematics.float3 float3(0f, 1f, 0.4f)`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.LifeTime**
  - `Duration: 1`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.TargetAoE**
  - `TargetPositionType: ProjectM.TargetAoE+TargetPositionTypeEnum AimPosition`
  - `HandleCollisionType: ProjectM.TargetAoE+HandleCollisionTypeEnum StopOnCollision`
  - `StartPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `EndPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `MaxRange: 11`
  - `MinRange: 0`
  - `MaxTime: 0.4`
  - `MinTime: 0.4`
  - `MaxRandomTimeAdded: 0`
  - `ThrowMaxHeightDiff: 4`
  - `ThrowArcHeight: 0`
  - `RandomOffsetMin: 0`
  - `RandomOffsetRadius: 0`
  - `MapCollisionRadius: 0.25`
  - `UseRandomOffset: False`
  - `FindValidPositionFromMax: False`

- **ProjectM.ManualFirstFrameLastTranslation**
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- **ProjectM.Team**
  - `Value: 1`
  - `FactionIndex: -1`

- **ProjectM.Scripting.ScriptDestroy**
  - `Handled: False`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_adgbkkgkkc`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.Gameplay.Scripting.EvenSpreadCluster_DataServer**
  - `OffsetAngle: 0.17453292`
  - `RandomAngle: 0.5235988`
  - `NewThrowEntity: AB_Bandit_Foreman_BoltStorm_Throw PrefabGuid(-326095012)`
  - `Count: 10`
  - `IndividualRandom: True`
  - `UseAimDirection: False`
  - `AlwaysMaxRange: False`
  - `OnSpawn: True`
  - `OnDestroy: False`
  - `ListenerEventId: Local - 371857150`
  - `UseGameplayEventTargetPosition: False`
  - `TryFindThrowLocationIterations: 1`

- **Unity.Transforms.LocalToWorld**
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- **Unity.Transforms.LocalTransform**
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **ProjectM.TeamReference**
  - `Value: ModifiableEntity(0:0)`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -978448375`

- **ProjectM.TargetAOESequence**

- **[0]**
  - `Sequence: SequenceGUID 2092159318`
  - `ImpactSequence: SequenceGUID 1617903479`
  - `Instance: SequenceState`
  - `Id: Entity(0:0)`
  - `TimeEvaluateCurve: ProjectM.CurveReference ProjectM.CurveReference`

- **ProjectM.HitTrigger**

- **ProjectM.HitColliderCast**

- **[0]**
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Shape: ProjectM.Physics.TriggerShape ProjectM.Physics.TriggerShape`
  - `AfterDuration: 0`
  - `TerrainColliderModifier: 0.75`
  - `PrioritySettings: ProjectM.AoEFilterSettings ProjectM.AoEFilterSettings`
  - `CollisionCheckType: ProjectM.CollisionTrigger OnDestroy`
  - `PrimaryFilterFlags: ProjectM.Physics.CollisionFilterFlags Hittable`
  - `PrimaryTargets_Count: 1`
  - `SecondaryTargets_Count: 0`
  - `ContinuousCollision: False`
  - `IncludeTerrain: False`
  - `CanHitThroughBlockSpellCollision: False`
  - `IgnoreImmaterial: False`
  - `Handled: False`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.GetOwnerRotationOnlyOnSpawnTag**

- **ProjectM.GetOwnerTeamOnSpawn**

- **ProjectM.OffsetLastTranslationOnSpawn**

- **ProjectM.HitColliderCast+CollisionCastOnDestroy**

- **ProjectM.RunScriptOnGameplayEvents isn't handled**

- **ProjectM.Scripting.ScriptSpawn**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **ProjectM.Network.NetworkSnapshotType**
