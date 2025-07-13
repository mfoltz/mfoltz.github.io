---
title: AB_Vampire_Sword_Shockwave_Recast_TravelToTargetSecondStrike
guid: 1473518847
categories: ['AB', 'All']
nav_exclude: true
search_exclude: false
layout: default
---

# AB_Vampire_Sword_Shockwave_Recast_TravelToTargetSecondStrike

**GUID:** `1473518847`

**Categories:** AB, All

## Components

- **ProjectM.TravelToTarget**
  - `StartRotation: Unity.Mathematics.quaternion quaternion(0f, -0.008726535f, 0f, 0.9999619f)`
  - `TargetRotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 0f)`
  - `StartPosition: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`
  - `EndPositionTarget: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `TargetStartPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `Target: NetworkedEntity(0:0)`
  - `OffsetType: ProjectM.TravelToTargetOffsetType TargetDirectionWithCollision`
  - `WithCollisionOffset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `YOffset: 0`
  - `TravelSpeedBasedOnDistance: 0`
  - `MinimumDuration: 0`
  - `BuffLifetime: 0`
  - `FetchLocationFirstFrame: False`
  - `UseVisualOffset: False`

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
  - `BuffEffectType: ProjectM.BuffEffectType Debuff`

- **ProjectM.SpellTarget**
  - `Target: NetworkedEntity(0:0)`
  - `DestroyIfNotInteractable: False`

- **ProjectM.GetOwnerRotation**
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Creator`
  - `InverseRotation: False`

- **ProjectM.LimitAbilityPriorityBuff**
  - `LimitLowerPriorityThan: 50`

- **ProjectM.RagdollForceSource**
  - `ForceModifier: 0.6`
  - `RagdollSetting: RagdollSource_Melee PrefabGuid(1455784769)`

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
  - `Groups: ProjectM.BuffCategoryFlag Travel`
  - `KeepOldest: False`

- **ProjectM.HideTargetHUD**
  - `Type: ProjectM.HideTargetHUDType -1`

- **ProjectM.LifeTime**
  - `Duration: 0.25`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.Team**
  - `Value: 1`
  - `FactionIndex: -1`

- **ProjectM.BuffModificationFlagData**
  - `ModificationTypes: 134218254`
  - `ModificationId: Unset`

- **ProjectM.Scripting.ScriptDestroy**
  - `Handled: False`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acifkidfebh`

- **ProjectM.Network.ModifyRotation**
  - `PreviousTargetDirection: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `OffsetRotation: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `ActiveTimeline: ProjectM.Network.MinMaxValue ProjectM.Network.MinMaxValue`
  - `Value: 0`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `Type: ProjectM.Network.RotationModificationType Set`
  - `TargetDirectionType: ProjectM.Network.TargetDirectionType TowardsSpellTarget`
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

- **ProjectM.Gameplay.Scripting.Script_Sword_Shockwave_ReturnToTargetPosition_Data**
  - `TargetFilterCondition: None`
  - `TargetPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `SelfTravelSpell: AB_Vampire_Sword_Shockwave_Recast_ReturnTravelBuff PrefabGuid(-1141440849)`
  - `MinDuration: 0.2`
  - `MaxDuration: 0.4`
  - `MaxRange: 10`
  - `SpawnBuff: False`

- **ProjectM.Gameplay.Scripting.Script_ModifyAbilityCooldownOnGameplayEvent_DataServer**
  - `AbilityGroupType: AB_Vampire_Sword_Whirlwind_Spin_AbilityGroup PrefabGuid(-2029046970)`
  - `ModifyCooldownFactor: 0`
  - `ModifyCooldown: 0`
  - `TriggerMaxCooldown: False`
  - `ResetCooldown: False`
  - `AbilityIndexOverride: 0`
  - `ScaleWithBloodEfficiency: False`

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
  - `_Value: 1473518847`

- **ProjectM.CreateGameplayEventsOnDestroy**
  - *(No fields)*

- **[0]**
  - `EventId: Local - 2134304445`
  - `Target: ProjectM.GameplayEventTarget SpellTarget`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- **[1]**
  - `EventId: Local - 764899107`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.CreateGameplayEventsOnSpawn**
  - *(No fields)*

- **[0]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget Owner`

- **ProjectM.ApplyBuffOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget EventTarget`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: AB_Vampire_Sword_Shockwave_Recast_TravelToTargetThirdStrike PrefabGuid(633623772)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- **ProjectM.GameplayEventIdMapping**
  - *(No fields)*

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 764899107`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 2134304445`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 2134304445`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[3]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 373290447`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[4]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 764899107`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[5]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 2134304445`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[6]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 2134304445`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[7]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 764899107`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **ProjectM.PlaySequenceOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `SequenceGuid: SequenceGUID 757616712`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget EventTarget`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget EventTarget`

- **ProjectM.RunScriptOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `ScriptReference: ProjectM.ScriptMethodReference ProjectM.ScriptMethodReference`

- **ProjectM.SpawnPrefabOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `SpawnPrefab: AB_Vampire_Sword_Shockwave_Recast_Hit_Trigger PrefabGuid(1175625395)`
  - `CustomAbilitySpellModsSource: GUID Not Found`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `Owner: ProjectM.SpawnPrefabOnGameplayEventOwner Inherit`
  - `Creator: ProjectM.SpawnPrefabOnGameplayEventCreator Inherit`

- **ProjectM.DealDamageOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `Parameters: ProjectM.DealDamageParameters ProjectM.DealDamageParameters`
  - `DamageModifierPerHit: 0`
  - `MultiplyMainFactorWithStacks: False`

- **[1]**
  - `Parameters: ProjectM.DealDamageParameters ProjectM.DealDamageParameters`
  - `DamageModifierPerHit: 0`
  - `MultiplyMainFactorWithStacks: False`

- **ProjectM.GameplayEventListeners**
  - *(No fields)*

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum SpawnPrefab`
  - `GameplayEventId: Local - 764899107`

- **[1]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum DealDamage`
  - `GameplayEventId: Local - 2134304445`

- **[2]**
  - `EventIdIndex: 3`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - 373290447`

- **[3]**
  - `EventIdIndex: 4`
  - `EventIndexOfType: 0`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                                                             `
  - `Component                                  `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RunScript`
  - `GameplayEventId: Local - 764899107`

- **[4]**
  - `EventIdIndex: 6`
  - `EventIndexOfType: 1`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                                                             `
  - `Component                                   `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum DealDamage`
  - `GameplayEventId: Local - 2134304445`

- **[5]**
  - `EventIdIndex: 7`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - 764899107`

- **ProjectM.Network.NetSnapshot**
  - *(No fields)*

- **[0]**
  - `Value: 255`

- **[1]**
  - `Value: 28`

- **[2]**
  - `Value: 212`

- **[3]**
  - `Value: 87`

- **[4]**
  - `Value: 83`

- **[5]**
  - `Value: 0`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 0`

- **[9]**
  - `Value: 0`

- **[10]**
  - `Value: 0`

- **[11]**
  - `Value: 0`

- **[12]**
  - `Value: 0`

- **[13]**
  - `Value: 0`

- **[14]**
  - `Value: 0`

- **[15]**
  - `Value: 0`

- **[16]**
  - `Value: 0`

- **[17]**
  - `Value: 0`

- **[18]**
  - `Value: 0`

- **[19]**
  - `Value: 0`

- **[20]**
  - `Value: 0`

- **[21]**
  - `Value: 0`

- **[22]**
  - `Value: 0`

- **[23]**
  - `Value: 0`

- **[24]**
  - `Value: 0`

- **[25]**
  - `Value: 0`

- **[26]**
  - `Value: 0`

- **[27]**
  - `Value: 0`

- **[28]**
  - `Value: 0`

- **[29]**
  - `Value: 0`

- **[30]**
  - `Value: 0`

- **[31]**
  - `Value: 0`

- **[32]**
  - `Value: 0`

- **[33]**
  - `Value: 0`

- **[34]**
  - `Value: 0`

- **[35]**
  - `Value: 0`

- **[36]**
  - `Value: 0`

- **[37]**
  - `Value: 0`

- **[38]**
  - `Value: 0`

- **[39]**
  - `Value: 0`

- **[40]**
  - `Value: 0`

- **[41]**
  - `Value: 0`

- **[42]**
  - `Value: 0`

- **[43]**
  - `Value: 0`

- **[44]**
  - `Value: 0`

- **[45]**
  - `Value: 0`

- **[46]**
  - `Value: 0`

- **[47]**
  - `Value: 0`

- **[48]**
  - `Value: 0`

- **[49]**
  - `Value: 0`

- **[50]**
  - `Value: 0`

- **[51]**
  - `Value: 0`

- **[52]**
  - `Value: 0`

- **[53]**
  - `Value: 0`

- **[54]**
  - `Value: 0`

- **[55]**
  - `Value: 128`

- **[56]**
  - `Value: 62`

- **[57]**
  - `Value: 0`

- **[58]**
  - `Value: 0`

- **[59]**
  - `Value: 0`

- **[60]**
  - `Value: 0`

- **[61]**
  - `Value: 0`

- **[62]**
  - `Value: 0`

- **[63]**
  - `Value: 0`

- **[64]**
  - `Value: 0`

- **[65]**
  - `Value: 0`

- **[66]**
  - `Value: 0`

- **[67]**
  - `Value: 0`

- **[68]**
  - `Value: 0`

- **[69]**
  - `Value: 255`

- **[70]**
  - `Value: 255`

- **[71]**
  - `Value: 255`

- **[72]**
  - `Value: 255`

- **[73]**
  - `Value: 1`

- **[74]**
  - `Value: 0`

- **[75]**
  - `Value: 0`

- **[76]**
  - `Value: 0`

- **[77]**
  - `Value: 0`

- **[78]**
  - `Value: 0`

- **[79]**
  - `Value: 0`

- **[80]**
  - `Value: 0`

- **[81]**
  - `Value: 0`

- **[82]**
  - `Value: 0`

- **[83]**
  - `Value: 0`

- **[84]**
  - `Value: 0`

- **[85]**
  - `Value: 0`

- **[86]**
  - `Value: 0`

- **[87]**
  - `Value: 0`

- **[88]**
  - `Value: 0`

- **[89]**
  - `Value: 0`

- **[90]**
  - `Value: 0`

- **[91]**
  - `Value: 0`

- **[92]**
  - `Value: 0`

- **[93]**
  - `Value: 0`

- **[94]**
  - `Value: 0`

- **[95]**
  - `Value: 0`

- **[96]**
  - `Value: 0`

- **[97]**
  - `Value: 0`

- **[98]**
  - `Value: 0`

- **[99]**
  - `Value: 0`

- **[100]**
  - `Value: 0`

- **[101]**
  - `Value: 0`

- **[102]**
  - `Value: 0`

- **[103]**
  - `Value: 0`

- **104 total elements but only showing the first 36**
  - *(No fields)*

- **ProjectM.Network.SnapshotFrameChangedBuffer**
  - *(No fields)*

- **[0]**
  - `Value: -1`

- **[1]**
  - `Value: -1`

- **[2]**
  - `Value: -1`

- **[3]**
  - `Value: -1`

- **[4]**
  - `Value: -1`

- **[5]**
  - `Value: -1`

- **[6]**
  - `Value: -1`

- **[7]**
  - `Value: -1`

- **[8]**
  - `Value: -1`

- **[9]**
  - `Value: -1`

- **[10]**
  - `Value: -1`

- **[11]**
  - `Value: -1`

- **[12]**
  - `Value: -1`

- **[13]**
  - `Value: -1`

- **[14]**
  - `Value: -1`

- **[15]**
  - `Value: -1`

- **[16]**
  - `Value: -1`

- **[17]**
  - `Value: -1`

- **ProjectM.Shared.SpellModArithmetic**
  - *(No fields)*

- **[0]**
  - `Condition: None`
  - `SpellMod: SpellMod_Sword_Shockwave_ReduceWhirlwindCDOnHit PrefabGuid(224337721)`
  - `Operation: ProjectM.Shared.SpellModArithmeticOperation Subtract`
  - `ValueIndex: 0`
  - `Target: ProjectM.Shared.SpellModArithmeticTarget ModifyAbilityCooldown_MaxBounces`
  - `TargetIndex: -1`

- **[1]**
  - `Condition: None`
  - `SpellMod: SpellMod_Sword_Shockwave_ReduceWhirlwindCDOnHit PrefabGuid(224337721)`
  - `Operation: ProjectM.Shared.SpellModArithmeticOperation Set`
  - `ValueIndex: 1`
  - `Target: ProjectM.Shared.SpellModArithmeticTarget DealDamageOnGameplayEvent_MainFactor`
  - `TargetIndex: 1`

- **ProjectM.GetOwnerRotationOnlyOnSpawnTag**
  - *(No fields)*

- **ProjectM.GetOwnerTeamOnSpawn**
  - *(No fields)*

- **ProjectM.ServerControlsMovementBuff**
  - *(No fields)*

- **ProjectM.ServerControlsRotationBuff**
  - *(No fields)*

- **ProjectM.UpdateAgeWhenDisabled**
  - *(No fields)*

- **ProjectM.UpdateLifeTimeWhenDisabled**
  - *(No fields)*

- **ProjectM.Scripting.ScriptSpawn**
  - *(No fields)*

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

- **Unity.Entities.BlobAssetOwner**
  - *(No fields)*

- **ProjectM.Network.NetworkSnapshotType**
  - *(No fields)*

