---
title: AB_FeedFriendly_01_Initiate_DashChannel
guid: 1690123127
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_FeedFriendly_01_Initiate_DashChannel

**GUID:** `1690123127`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- **ProjectM.HideWeapon**
  - `HideWeaponSequenceGUID: SequenceGUID 1136240177`
  - `HideWeaponState: SequenceState`
  - `Id: Entity(0:0)`

- **ProjectM.TravelToTarget**
  - `StartRotation: Unity.Mathematics.quaternion quaternion(0f, -0.008726535f, 0f, 0.9999619f)`
  - `TargetRotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 0f)`
  - `StartPosition: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`
  - `EndPositionTarget: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, -0.4f)`
  - `TargetStartPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `Target: NetworkedEntity(0:0)`
  - `OffsetType: ProjectM.TravelToTargetOffsetType InverseTargetDirectionTransition`
  - `WithCollisionOffset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `YOffset: 0`
  - `TravelSpeedBasedOnDistance: 0`
  - `MinimumDuration: 0`
  - `BuffLifetime: 0`
  - `FetchLocationFirstFrame: False`
  - `UseVisualOffset: False`

- **ProjectM.AdditionalInteractBuff**
  - `Buff: AB_FeedFriendly_01_EnemyTarget_Debuff PrefabGuid(-264516260)`
  - `BuffInstance: Entity(0:0)`

- **ProjectM.Attach**
  - `Parent: Entity(0:0)`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.Buff**
  - `StartTimeUnmodified: 0`
  - `Target: Entity(0:0)`
  - `BuffType: ProjectM.BuffType Replace`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: True`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Buff`

- **ProjectM.SpellTarget**
  - `Target: NetworkedEntity(0:0)`
  - `DestroyIfNotInteractable: False`

- **ProjectM.Gameplay.Scripting.Script_Siphon_Blood_Buff_DataShared**
  - `ImmaterialDuration: 1.5`
  - `ImmaterialSequence: SequenceGUID -1915634194`
  - `ImmaterialSequenceState: SequenceState`
  - `Id: Entity(0:0)`
  - `ImmaterialModificationId: Unset`
  - `IsRevive: False`
  - `ShowAbortText: False`
  - `ImmaterialActive: True`

- **ProjectM.ShapeshiftImpairBuff**
  - `FailKey: 00000000-0000-0000-0000-000000000000 - <Localization not found!>`
  - `Condition: None`

- **ProjectM.AbilityInterruptData**
  - `CooldownOnInterrupt: 0.5`
  - `InterruptTypes: ProjectM.InterruptTypes Obstructed`
  - `FullCooldownOnInterrupt: False`
  - `FullCooldownModifier: 1`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.BuffCategory**
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag Feed`
  - `KeepOldest: False`

- **ProjectM.HideTargetHUD**
  - `Type: ProjectM.HideTargetHUDType CharacterHUD`

- **ProjectM.LifeTime**
  - `Duration: 5.35`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.Team**
  - `Value: 1`
  - `FactionIndex: -1`

- **ProjectM.BuffModificationFlagData**
  - `ModificationTypes: 13200724325026`
  - `ModificationId: Unset`

- **ProjectM.Scripting.ScriptDestroy**
  - `Handled: False`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acgchdfhdbe`

- **ProjectM.Network.ModifyRotation**
  - `PreviousTargetDirection: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `OffsetRotation: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `ActiveTimeline: ProjectM.Network.MinMaxValue ProjectM.Network.MinMaxValue`
  - `Value: 0`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `Type: ProjectM.Network.RotationModificationType Set`
  - `TargetDirectionType: ProjectM.Network.TargetDirectionType CopySpellTarget`
  - `UseZeroAsDefaultForCurveRotation: False`
  - `SnapToDirection: False`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.Gameplay.Scripting.Script_SpellSchoolPassive_Unholy_Feed_DataServer**
  - `PassivePrefab: SpellPassive_Unholy_T02_SoulDrinker PrefabGuid(-1612317745)`
  - `RandomResetChancePerStack: 0`
  - `CooldownReduction: 0`

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
  - `_Value: 1690123127`

- **ProjectM.CreateGameplayEventsOnSpawn**

- **[0]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget Owner`

- **ProjectM.CreateGameplayEventsOnTick**

- **[0]**
  - `EventId: Local - 1761001523`
  - `Target: ProjectM.GameplayEventTarget SpellTarget`
  - `TickInterval: 0.1`
  - `TickTime: -0`
  - `MaxTicks: 2147483647`
  - `CallScriptOnTick: False`
  - `RandomTickOffset: 0`
  - `RandomTickInterval: 0`
  - `ResetWhenBuffStacksChanged: False`
  - `ResetWhenCastingAbility: GUID Not Found`

- **ProjectM.CreateGameplayEventsOnTimePassed**

- **[0]**
  - `EventId: Local - 384515063`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `Duration: 5`
  - `Time: 0`
  - `DurationFactorBasedOnLifetime: 0`

- **[1]**
  - `EventId: Local - 1420730083`
  - `Target: ProjectM.GameplayEventTarget SpellTarget`
  - `Duration: 5`
  - `Time: 0`
  - `DurationFactorBasedOnLifetime: 0`

- **ProjectM.DestroyOnGameplayEvent**

- **[0]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: True`

- **ProjectM.ForceCastOnGameplayEvent**

- **[0]**
  - `ForceCastAbility: AB_FeedFriendly_03_Complete_AbilityGroup PrefabGuid(117247654)`
  - `Target: ProjectM.ForceCastTarget Owner`

- **ProjectM.GameplayEventIdMapping**

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 384515063`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 373290447`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 1761001523`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **ProjectM.RemoveBuffOnGameplayEvent**

- **[0]**
  - `BuffTarget: ProjectM.RemoveBuffTarget Owner`

- **ProjectM.RemoveBuffOnGameplayEventEntry**

- **[0]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(0)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag VeilDash`
  - `IncludeSelf: False`

- **ProjectM.GameplayEventListeners**

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ForceCast`
  - `GameplayEventId: Local - 384515063`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RemoveBuff`
  - `GameplayEventId: Local - 373290447`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 0`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab �.��   �Cq�;   T��;  `

- **              **
  - `Component         B���  �pM�<  �    `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - 1761001523`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.GetOwnerTeamOnSpawn**

- **ProjectM.ServerControlsMovementBuff**

- **ProjectM.ServerControlsRotationBuff**

- **ProjectM.Scripting.ScriptSpawn**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.Network.NetworkSnapshotType**
