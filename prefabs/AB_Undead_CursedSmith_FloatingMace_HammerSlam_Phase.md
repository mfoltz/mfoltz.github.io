---
title: AB_Undead_CursedSmith_FloatingMace_HammerSlam_Phase
guid: -679671022
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Undead_CursedSmith_FloatingMace_HammerSlam_Phase

**GUID:** `-679671022`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- **ProjectM.Attach**
  - `Parent: Entity(0:0)`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.Buff**
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

- **ProjectM.GetOwnerRotation**
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType AimDirection`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

- **ProjectM.GetTranslationOnSpawn**
  - `TranslationSource: ProjectM.GetTranslationSource Owner`
  - `SnapToGround: False`

- **ProjectM.SpawnPrefabOnDestroy**
  - `SpawnPrefab: AB_Undead_CursedSmith_FloatingMace_HammerSlam_End PrefabGuid(872008839)`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.BuffCategory**
  - `Level: 1`
  - `Groups: ProjectM.BuffCategoryFlag Travel`
  - `KeepOldest: False`

- **ProjectM.HideTargetHUD**
  - `Type: ProjectM.HideTargetHUDType -1`

- **ProjectM.LifeTime**
  - `Duration: 3`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.TravelBuff**
  - `StartPositionInternal: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `StartPositionServer: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `EndPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `MaxHeightDiff: 10`
  - `ExtraDistanceAllowed: 2`
  - `Height: 0`
  - `MaxRange: 0.1`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `HeightCurve: ProjectM.CurveReference ProjectM.CurveReference`
  - `RotationMode: ProjectM.MovementCurveRotationMode Direction`
  - `CurveId: 0`
  - `DenyLowerHeight: False`
  - `StopAtHighCollision: True`
  - `SnapToEndPositionOnDestroy: True`

- **ProjectM.TravelBuffSpawn**
  - `TargetRangeOffset: 0`
  - `MinRange: 0`
  - `MaxRange: 0.1`
  - `RandomOffsetRadius: 0`
  - `MinDuration: 1`
  - `MaxDuration: 3`
  - `TravelTargetMode: ProjectM.TravelTargetMode BuffTargetAimPosition`
  - `GetStartPositionFromBuffTarget: False`
  - `ScaleDuration: False`
  - `IgnoreAllCollision: False`
  - `AimYOffset: 0`

- **ProjectM.LastTranslation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.ManualFirstFrameLastTranslation**
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- **ProjectM.Team**
  - `Value: 1`
  - `FactionIndex: -1`

- **ProjectM.BuffModificationFlagData**
  - `ModificationTypes: 167772700`
  - `ModificationId: Unset`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_gfgdjegbe`

- **ProjectM.Network.ModifyRotation**
  - `PreviousTargetDirection: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `OffsetRotation: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `ActiveTimeline: ProjectM.Network.MinMaxValue ProjectM.Network.MinMaxValue`
  - `Value: 0`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `Type: ProjectM.Network.RotationModificationType Set`
  - `TargetDirectionType: ProjectM.Network.TargetDirectionType AimDirection`
  - `UseZeroAsDefaultForCurveRotation: False`
  - `SnapToDirection: True`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

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
  - `_Value: -679671022`

- **ProjectM.CreateGameplayEventsOnDestroy**

- **[0]**
  - `EventId: Local - -136930912`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.CreateGameplayEventsOnSpawn**

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget Owner`

- **ProjectM.ApplyBuffOnGameplayEvent**

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget EventTarget`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: AB_Undead_CursedSmith_FloatingMace_HammerSlam_PostTravelBuff PrefabGuid(-563149215)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- **ProjectM.GameplayEventIdMapping**

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -136930912`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **ProjectM.GameplayEventListeners**

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -136930912`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.GetOwnerRotationOnlyOnSpawnTag**

- **ProjectM.GetOwnerTeamOnSpawn**

- **ProjectM.ServerControlsMovementBuff**

- **ProjectM.ServerControlsRotationBuff**

- **ProjectM.BlockFeedBuff**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.Network.NetworkSnapshotType**
