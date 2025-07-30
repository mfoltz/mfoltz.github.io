---
title: AB_Interact_GetInside_Owner_Buff_Base
guid: 381160212
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Interact_GetInside_Owner_Buff_Base

**GUID:** `381160212`

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

- **ProjectM.SpellTarget**
  - `Target: NetworkedEntity(0:0)`
  - `DestroyIfNotInteractable: True`

- **ProjectM.EntityInput**
  - `Movement: Unity.Mathematics.float2 float2(0f, 0f)`
  - `AimPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `AimPositionPlane: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `AimDirection: Unity.Mathematics.float3 float3(0f, 0f, 1f)`
  - `AimLength: 0`
  - `HoveredEntity: Entity(0:0)`
  - `HoveredEntityNetworkId: ProjectM.Network.NetworkId (None)`
  - `ProjectileAimType: ProjectM.AimDirectionType Planar`
  - `State: ProjectM.SyncedInputState ProjectM.SyncedInputState`

- **ProjectM.GetTranslationOnSpawn**
  - `TranslationSource: ProjectM.GetTranslationSource SpellTarget`
  - `SnapToGround: False`

- **ProjectM.SpawnSleepingBuff**
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 0f)`
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `JustSleeping: True`

- **ProjectM.ChangeKnockbackResistanceBuff**
  - `KnockbackResistanceIndex: 13`

- **ProjectM.InsideBuff**
  - `ExitBuff: AB_ExitCoffin_Travel_Phase_Base PrefabGuid(-997204628)`

- **ProjectM.ModifyBloodDrainBuff**
  - `BloodValue: 0`
  - `BloodIdleValue: 0`
  - `ModificationId: Unset`
  - `IgnoreIdleDrainModId: Unset`
  - `ModificationIdleId: Unset`
  - `ModificationType: ProjectM.ModificationType Multiply`
  - `ModificationIdleType: ProjectM.ModificationType Set`
  - `ModificationPriority: 10`
  - `ModificationIdlePriority: 0`
  - `AffectBloodValue: True`
  - `AffectIdleBloodValue: False`
  - `IgnoreIdleDrainWhileActive: False`

- **ProjectM.ShapeshiftImpairBuff**
  - `FailKey: 00000000-0000-0000-0000-000000000000 - <Localization not found!>`
  - `Condition: None`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.Hideable**
  - `IsHidden: False`
  - `Visibility: 1`
  - `AdditionalHideRangeSq: 0`
  - `IgnoreLoS: False`

- **ProjectM.HideTargetHUD**
  - `Type: ProjectM.HideTargetHUDType -1`

- **ProjectM.LifeTime**
  - `Duration: 999999`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.ModifyTargetHUDBuff**
  - `Priority: 0`
  - `Height: 0`
  - `CharacterHUDHeightModId: Unset`
  - `HeightModId: Unset`
  - `PrefabType: ProjectM.CharacterHUDEntryType None`
  - `PrefabTypeModId: Unset`
  - `BloodPrefabType: ProjectM.CharacterHUDEntryType None`
  - `BloodPrefabTypeModId: Unset`
  - `LocalizedName: Stunlock.Core.AssetGuid 00000000000000000000000000000000`
  - `PreviousLocalizedName: Stunlock.Core.AssetGuid 00000000000000000000000000000000`

- **ProjectM.LastTranslation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.ManualFirstFrameLastTranslation**
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- **ProjectM.Velocity**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.TargetDirection**
  - `ForcedDirection: float3(0f, 0f, 0f)`
  - `Direction: Unity.Mathematics.float3 float3(0f, 0f, 1f)`
  - `AimDirection: Unity.Mathematics.float3 float3(0f, 0f, 1f)`
  - `DefaultRotationSpeed: 360`
  - `RotationSpeed: 360`
  - `RotateTowardsMouse: False`
  - `ForceRotateTowardsMovement: False`
  - `CurrentCanRotate: True`
  - `PlayerControlsRotation: True`

- **ProjectM.Team**
  - `Value: 1`
  - `FactionIndex: -1`

- **ProjectM.BuffModificationFlagData**
  - `ModificationTypes: 2206715562160`
  - `ModificationId: Unset`

- **ProjectM.EntityAimData**
  - `AimPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `AimPositionPlane: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `ProjectileAimPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.MoveVelocity**
  - `MoveVelocityMagnitude: 0`
  - `ReferenceWalkingCurve: ProjectM.CurveReference ProjectM.CurveReference`

- **ProjectM.Scripting.ScriptDestroy**
  - `Handled: False`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_djigibich`

- **ProjectM.Network.ModifyRotation**
  - `PreviousTargetDirection: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `OffsetRotation: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `ActiveTimeline: ProjectM.Network.MinMaxValue ProjectM.Network.MinMaxValue`
  - `Value: 360`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `Type: ProjectM.Network.RotationModificationType Set`
  - `TargetDirectionType: ProjectM.Network.TargetDirectionType CopySpellTarget`
  - `UseZeroAsDefaultForCurveRotation: False`
  - `SnapToDirection: True`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.Gameplay.Scripting.Script_Buff_AggroRangeFactor_DataShared**
  - `AggroRangeFactor: 1.5`
  - `AggroRangeFactorModificationId: Unset`

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
  - `_Value: 381160212`

- **ProjectM.CreateGameplayEventsOnAbilityTrigger**

- **[0]**
  - `EventId: Local - -1182650535`
  - `Type: ProjectM.AbilityTriggerEventType Use`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `Condition: None`
  - `AbilityTypes: ProjectM.AbilityTypeFlag 4294967180`
  - `AbilityButton: ProjectM.AbilityButtonInputAction None`
  - `AbilityTypeEnum: ProjectM.AbilityTypeEnum None`
  - `NumOfPrefabTargets: 0`
  - `PrefabTargetStartIndex: 0`

- **ProjectM.CreateGameplayEventsOnSpawn**

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget Owner`

- **ProjectM.CreateGameplayEventsOnTick**

- **[0]**
  - `EventId: Local - 325352405`
  - `Target: ProjectM.GameplayEventTarget SpellTarget`
  - `TickInterval: 1`
  - `TickTime: -0`
  - `MaxTicks: 2147483647`
  - `CallScriptOnTick: False`
  - `RandomTickOffset: 0`
  - `RandomTickInterval: 0`
  - `ResetWhenBuffStacksChanged: False`
  - `ResetWhenCastingAbility: GUID Not Found`

- **ProjectM.DestroyOnGameplayEvent**

- **[0]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: True`

- **ProjectM.HealOnGameplayEvent**

- **[0]**
  - `Health: 0`
  - `HealthPercent: 0.1`
  - `HealthPerSpellPower: 0`
  - `showSCT: True`
  - `TrueHealing: True`
  - `Who: ProjectM.HealOnGameplayEventWho Owner`
  - `MultiplyMainFactorWithStacks: False`

- **ProjectM.GameplayEventIdMapping**

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1182650535`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 325352405`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **ProjectM.GameplayEventListeners**

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - -1182650535`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab  �R�                                `
  - `Component   <k�]���@                `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Heal`
  - `GameplayEventId: Local - 325352405`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.AbilityTargetSource**

- **ProjectM.GetOwnerTeamOnSpawn**

- **ProjectM.ServerControlsMovementBuff**

- **ProjectM.ServerControlsRotationBuff**

- **ProjectM.Hideable_CopyFromAttachParent**

- **ProjectM.Scripting.ScriptSpawn**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.Network.NetworkSnapshotType**
