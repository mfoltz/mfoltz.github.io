---
title: AB_Vampire_Crossbow_IceRanger_IceShard_ChannelBarrage_Trigger
guid: 1955734498
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Vampire_Crossbow_IceRanger_IceShard_ChannelBarrage_Trigger

**GUID:** `1955734498`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.SpellTarget**
  - `Target: NetworkedEntity(0:0)`
  - `DestroyIfNotInteractable: True`

- **ProjectM.GetOwnerRotation**
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

- **ProjectM.GetTranslationOnSpawn**
  - `TranslationSource: ProjectM.GetTranslationSource SpellTarget`
  - `SnapToGround: False`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.LifeTime**
  - `Duration: 1`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_ajgkhchijb`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.Gameplay.Scripting.EvenSpreadCluster_DataServer**
  - `OffsetAngle: 0.17453292`
  - `RandomAngle: 0.5235988`
  - `NewThrowEntity: AB_Vampire_Crossbow_IceRanger_IceShard_ChannelBarrage_Throw PrefabGuid(-159317484)`
  - `Count: 4`
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
  - `_Value: 1955734498`

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

- **ProjectM.HitColliderCast+CollisionCastOnDestroy**

- **ProjectM.RunScriptOnGameplayEvents isn't handled**

- **ProjectM.Scripting.ScriptSpawn**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **ProjectM.Network.NetworkSnapshotType**
