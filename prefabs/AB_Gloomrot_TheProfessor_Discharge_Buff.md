---
title: AB_Gloomrot_TheProfessor_Discharge_Buff
guid: 96235016
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Gloomrot_TheProfessor_Discharge_Buff

**GUID:** `96235016`

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

- **ProjectM.GetTranslationOnSpawn**
  - `TranslationSource: ProjectM.GetTranslationSource BuffTarget`
  - `SnapToGround: False`

- **ProjectM.GetTranslationOnUpdate**
  - `Source: ProjectM.GetTranslationSource BuffTarget`

- **ProjectM.ModifyMovementSpeedBuff**
  - `MoveSpeed: 0.5`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `MultiplyAdd: False`

- **ProjectM.DestroyOnAbilityCast**
  - `CastCount: 0`

- **ProjectM.AoETargetImportance**
  - `Importance: 500`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.BuffCategory**
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag RemovableBuff`
  - `KeepOldest: False`

- **ProjectM.LifeTime**
  - `Duration: 2.5`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.LastTranslation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.ManualFirstFrameLastTranslation**
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- **ProjectM.Team**
  - `Value: 1`
  - `FactionIndex: -1`

- **ProjectM.EntityCategory**
  - `MainCategoryInt: 4`
  - `UnitCategoryInt: 0`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 0`
  - `ResourceLevel: 0`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_cbggkebbfk`

- **ProjectM.Network.ModifyRotation**
  - `PreviousTargetDirection: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `OffsetRotation: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `ActiveTimeline: ProjectM.Network.MinMaxValue ProjectM.Network.MinMaxValue`
  - `Value: 0`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `Type: ProjectM.Network.RotationModificationType Set`
  - `TargetDirectionType: ProjectM.Network.TargetDirectionType SelfRotation`
  - `UseZeroAsDefaultForCurveRotation: False`
  - `SnapToDirection: False`

- **ProjectM.Shared.SpellModSetComponent**
  - `SpellMods: SpellModSet`
  - `SyncId: 0`
  - `Mod0: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod1: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod2: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod3: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod4: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod5: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod6: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod7: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Count: 0`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **Unity.Physics.PhysicsCollider**
  - `Value: Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider] Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider]`

- **Unity.Physics.Systems.StaticPhysicsWorldBodyIndex**
  - `WorldBodyIndex: -1`

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
  - `_Value: 96235016`

- **ProjectM.CreateGameplayEventsOnHitConsume_SpellsConsumed**

- **ProjectM.CreateGameplayEventsOnAbilityImpaired**

- **[0]**
  - `PreviousIsImpaired: False`
  - `EventId: Local - 1390851097`
  - `Source: ProjectM.GameplayEventTarget Owner`
  - `Target: ProjectM.GameplayEventTarget Owner`

- **ProjectM.CreateGameplayEventsOnHitConsume**

- **[0]**
  - `EventId: Local - 1594924154`
  - `Filter: ProjectM.HitConsumeFilter ProjectM.HitConsumeFilter`
  - `DestroySpell: True`
  - `MaxAngleDiff: 0`

- **[1]**
  - `EventId: Local - 469617985`
  - `Filter: ProjectM.HitConsumeFilter ProjectM.HitConsumeFilter`
  - `DestroySpell: True`
  - `MaxAngleDiff: 0`

- **[2]**
  - `EventId: Local - -1919693362`
  - `Filter: ProjectM.HitConsumeFilter ProjectM.HitConsumeFilter`
  - `DestroySpell: False`
  - `MaxAngleDiff: 0`

- **ProjectM.ApplyBuffOnGameplayEvent**

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget Owner`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: AB_Gloomrot_TheProfessor_Discharge_PreTravel PrefabGuid(309362800)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- **ProjectM.DestroyOnGameplayEvent**

- **[0]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: True`

- **[1]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: True`

- **ProjectM.GameplayEventIdMapping**

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 1594924154`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 469617985`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1919693362`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[3]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 1390851097`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[4]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 469617985`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[5]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 1594924154`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[6]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 469617985`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[7]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1919693362`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **ProjectM.PlaySequenceOnGameplayEvent**

- **[0]**
  - `SequenceGuid: SequenceGUID 526904093`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget Owner`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget Owner`

- **ProjectM.GameplayEventListeners**

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - 1594924154`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - 469617985`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - -1919693362`

- **[3]**
  - `EventIdIndex: 3`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - 1390851097`

- **[4]**
  - `EventIdIndex: 4`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - 469617985`

- **[5]**
  - `EventIdIndex: 5`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - 1594924154`

- **[6]**
  - `EventIdIndex: 6`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - 469617985`

- **[7]**
  - `EventIdIndex: 7`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -1919693362`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.Shared.SpellModArithmetic**

- **[0]**
  - `Condition: None`
  - `SpellMod: SpellMod_Shared_IncreaseMoveSpeedDuringChannel_High PrefabGuid(291310353)`
  - `Operation: ProjectM.Shared.SpellModArithmeticOperation Add`
  - `ValueIndex: 0`
  - `Target: ProjectM.Shared.SpellModArithmeticTarget ModifyMovementSpeedBuff_MoveSpeed`
  - `TargetIndex: -1`

- **ProjectM.GetOwnerTeamOnSpawn**

- **ProjectM.DestroyOnManualInterrupt**

- **ProjectM.SyncAttachedTranslation**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.Network.NetworkSnapshotType**

- **Unity.Physics.PhysicsWorldIndex**
