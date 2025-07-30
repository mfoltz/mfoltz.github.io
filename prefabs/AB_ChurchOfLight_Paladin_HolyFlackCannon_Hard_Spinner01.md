---
title: AB_ChurchOfLight_Paladin_HolyFlackCannon_Hard_Spinner01
guid: 485865847
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_ChurchOfLight_Paladin_HolyFlackCannon_Hard_Spinner01

**GUID:** `485865847`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.GetOwnerRotation**
  - `OffsetDegreesClockwise: -70`
  - `Type: ProjectM.GetRotationType ProjectileAimDirection`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

- **ProjectM.GetTranslationOnSpawn**
  - `TranslationSource: ProjectM.GetTranslationSource Owner`
  - `SnapToGround: False`

- **ProjectM.OffsetTranslationOnSpawn**
  - `Offset: Unity.Mathematics.float3 float3(0f, 1f, -0.5f)`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.LifeTime**
  - `Duration: 2`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.LastTranslation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.ManualFirstFrameLastTranslation**
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- **ProjectM.Team**
  - `Value: 1`
  - `FactionIndex: -1`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_achdjgjdgkk`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.Gameplay.Scripting.AbilityProjectileFanOnGameplayEvent_DataServer**
  - `Angle: 0`
  - `OffsetAngle: 0`
  - `RandomOffset: 0`
  - `IndividualRandom: 0`
  - `NewProjectileEntity: AB_ChurchOfLight_Paladin_HolyFlackCannon_Hard_Projectile01 PrefabGuid(-476659597)`
  - `NewProjectileEntityAlternate: GUID Not Found`
  - `Count: 1`
  - `TickCount: 0`
  - `UseOwnerAimDirection: False`
  - `SetSpellTargetToSelf: False`
  - `SetSpellTargetToSelfSpellTarget: False`
  - `SetSpellTargetToBuffTarget: False`
  - `SetRandomTargetInRadiusToSpellTarget: 0`
  - `RandomTargetMaxHeightDiff: 3`
  - `RandomSpellTargetHitFilter: ProjectM.Scripting.HitFilter 0`
  - `BoostBuffType: GUID Not Found`
  - `BoostPerStackCount: 0`
  - `BoostPerStackAngle: 0`
  - `BoostPerStackPrefab1: GUID Not Found`
  - `BoostPerStackPrefab2: GUID Not Found`
  - `BoostPerStackPrefab3: GUID Not Found`
  - `OverrideProjectileSpeedMin: 0`
  - `OverrideProjectileSpeedMax: 0`

- **ProjectM.Gameplay.Scripting.RotateOverTimeData**
  - `InitialRotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`
  - `RotationAngle: 140`
  - `CustomDuration: 0`
  - `RotationTarget: ProjectM.Gameplay.Scripting.RotationTarget Self`
  - `RotationType: ProjectM.Gameplay.Scripting.RotationType Clockwise`
  - `RotationCurve: ProjectM.CurveReference ProjectM.CurveReference`
  - `RotationOffset: 0`
  - `UseCustomDuration: False`
  - `LoopAfterDuration: False`
  - `ServerOnly: False`

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
  - `_Value: 485865847`

- **ProjectM.CreateGameplayEventsOnSpawn**

- **[0]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget Owner`

- **ProjectM.CreateGameplayEventsOnTick**

- **[0]**
  - `EventId: Local - 325352405`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `TickInterval: 0.1`
  - `TickTime: 0.1`
  - `MaxTicks: 2147483647`
  - `CallScriptOnTick: True`
  - `RandomTickOffset: 0`
  - `RandomTickInterval: 0`
  - `ResetWhenBuffStacksChanged: False`
  - `ResetWhenCastingAbility: GUID Not Found`

- **ProjectM.GameplayEventIdMapping**

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 325352405`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **ProjectM.RunScriptOnGameplayEvent**

- **[0]**
  - `ScriptReference: ProjectM.ScriptMethodReference ProjectM.ScriptMethodReference`

- **ProjectM.GameplayEventListeners**

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RunScript`
  - `GameplayEventId: Local - 325352405`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.GetOwnerRotationOnlyOnSpawnTag**

- **ProjectM.GetOwnerTeamOnSpawn**

- **ProjectM.OffsetLastTranslationOnSpawn**

- **ProjectM.Scripting.ScriptSpawn**

- **ProjectM.Scripting.ScriptUpdate**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.Network.NetworkSnapshotType**
