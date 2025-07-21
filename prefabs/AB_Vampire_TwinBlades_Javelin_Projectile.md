---
title: AB_Vampire_TwinBlades_Javelin_Projectile
guid: -513489536
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Vampire_TwinBlades_Javelin_Projectile

**GUID:** `-513489536`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [ProjectM.EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.SpellTarget](/components/SpellTarget){:target="_blank"}
  - `Target: NetworkedEntity(0:0)`
  - `DestroyIfNotInteractable: True`

- [ProjectM.GetOwnerRotation](/components/GetOwnerRotation){:target="_blank"}
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType ProjectileAimDirection`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

- [ProjectM.GetTranslationOnSpawn](/components/GetTranslationOnSpawn){:target="_blank"}
  - `TranslationSource: ProjectM.GetTranslationSource Creator`
  - `SnapToGround: False`

- [ProjectM.OffsetTranslationOnSpawn](/components/OffsetTranslationOnSpawn){:target="_blank"}
  - `Offset: Unity.Mathematics.float3 float3(0f, 1f, 0f)`

- [ProjectM.Height](/components/Height){:target="_blank"}
  - `LastPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Value: 0`
  - `ServerHeightLevel: 0`

- [ProjectM.RagdollForceSource](/components/RagdollForceSource){:target="_blank"}
  - `ForceModifier: 2`
  - `RagdollSetting: RagdollSource_Projectile PrefabGuid(-856857226)`

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [ProjectM.LifeTime](/components/LifeTime){:target="_blank"}
  - `Duration: 1.5`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.Script_HomingSpell_DataShared](/components/Script_HomingSpell_DataShared){:target="_blank"}
  - `SyncPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `SyncRotation: UnityEngine.Quaternion (0.00000, 0.00000, 0.00000, 0.00000)`
  - `SyncServerTime: 0`
  - `SyncTargetPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `LastSyncedServerTime: 0`
  - `DistanceBasedData: ProjectM.Homing_DistanceBasedData ProjectM.Homing_DistanceBasedData`
  - `PreHomingSpeedData: ProjectM.Homing_SpeedLerpData ProjectM.Homing_SpeedLerpData`
  - `PreHomingRangeData: ProjectM.Homing_RangeLerpData ProjectM.Homing_RangeLerpData`
  - `HomingData: ProjectM.Homing_LerpData ProjectM.Homing_LerpData`
  - `PreHomingMode: ProjectM.Script_HomingSpell_DataShared+PreHomingModeType None`
  - `Type: ProjectM.Script_HomingSpell_DataShared+HomingSpellType LifeTimeBased`
  - `PreHomingDuration: 0.05`
  - `PreHomingWait: 0`
  - `InitialHeight: 0`
  - `GameplayHeight: 0`
  - `HomingInitiated: False`
  - `ResetHitTriggersOnChangeHomingMode: True`
  - `TriggerHitBeforeReturning: False`
  - `AllowHomingHeight: False`

- [ProjectM.LastTranslation](/components/LastTranslation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.ManualFirstFrameLastTranslation](/components/ManualFirstFrameLastTranslation){:target="_blank"}
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- [ProjectM.Team](/components/Team){:target="_blank"}
  - `Value: 1`
  - `FactionIndex: -1`

- [ProjectM.Network.Networked](/components/Networked){:target="_blank"}
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask](/components/UpToDateUserBitMask){:target="_blank"}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- [ProjectM.Network.FrameChanged](/components/FrameChanged){:target="_blank"}
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot](/components/NetworkSnapshot){:target="_blank"}
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_aeibfebcie`

- [ProjectM.Shared.SpellModSetComponent](/components/SpellModSetComponent){:target="_blank"}
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

- [ProjectM.Shared.FallToHeight](/components/FallToHeight){:target="_blank"}
  - `Speed: 0`
  - `Gravity: 0`
  - `IsGrounded: False`

- [Unity.Transforms.Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Gameplay.Scripting.Script_HomingSpell_DataServer](/components/Script_HomingSpell_DataServer){:target="_blank"}
  - `EventOnHomingStart: Local - 2108633870`
  - `DestroyWhenOwnerReached: True`
  - `DestroyWhenOwnerReachedExtraDistance: 0`
  - `SetSpellTargetToOwnerWhenTargetReached: False`
  - `DistanceToTarget: 1`
  - `LockProjectileHeight: False`

- [ProjectM.Gameplay.Scripting.Script_CreateGameplayEventOnHitDetection_DataServer](/components/Script_CreateGameplayEventOnHitDetection_DataServer){:target="_blank"}
  - `TargetMainCategory: ProjectM.MainEntityCategory Resource`
  - `TargetMaterialCategory: ProjectM.MaterialCategory Vegetation`
  - `TargetHitFilter: ProjectM.Scripting.HitFilter Alive, Neutral`
  - `GameplayEventId: Local - -1879294343`
  - `GameplayEventIdNoHit: Local - 0`
  - `MultipleHits: True`
  - `TargetFilterCondition: None`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TeamReference](/components/TeamReference){:target="_blank"}
  - `Value: ModifiableEntity(0:0)`

- [ProjectM.Network.NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -513489536`

- [ProjectM.HitTrigger](/components/HitTrigger){:target="_blank"}
  - *(No fields)*

- [ProjectM.CreateGameplayEventsOnDestroy](/components/CreateGameplayEventsOnDestroy){:target="_blank"}

- **[0]**
  - `EventId: Local - 689829697`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Duration`

- **[1]**
  - `EventId: Local - -934133836`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `SpecificDestroyReason: True`
  - `DestroyReason: ProjectM.DestroyReason HomingReturn`

- [ProjectM.CreateGameplayEventsOnHit](/components/CreateGameplayEventsOnHit){:target="_blank"}

- **[0]**
  - `EventId: Local - -1170002078`
  - `HitGroup: ProjectM.HitGroup AllGroups`
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab         p�2�<                          `
  - `Component                                  `
  - `ConditionalElements`
  - `ColliderCastIndex: -1`

- **[1]**
  - `EventId: Local - 1062590452`
  - `HitGroup: ProjectM.HitGroup AllGroups`
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab �.��   ��X�;  �I��<  `

- **               **
  - `Component        B���  ��d�    (*    (*`
  - `ConditionalElements`
  - `ColliderCastIndex: -1`

- **[2]**
  - `EventId: Local - -342318240`
  - `HitGroup: ProjectM.HitGroup AllGroups`
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                                         `
  - `Component                                  `
  - `ConditionalElements`
  - `ColliderCastIndex: -1`

- [ProjectM.ApplyBuffOnGameplayEvent](/components/ApplyBuffOnGameplayEvent){:target="_blank"}

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget EventTarget`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: GUID Not Found`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- **[1]**
  - `BuffTarget: ProjectM.ApplyBuffTarget EventTarget`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single] 2`
  - `Stacks: 1`
  - `Buff0: Frost_Vampire_Buff_Freeze PrefabGuid(612319955)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- **[2]**
  - `BuffTarget: ProjectM.ApplyBuffTarget EventTarget`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: Frost_Vampire_Buff_Chill PrefabGuid(27300215)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- [ProjectM.ApplyKnockbackOnGameplayEvent](/components/ApplyKnockbackOnGameplayEvent){:target="_blank"}

- **[0]**
  - `Duration: 0.4`
  - `Range: 5`
  - `RotationAngleOffset: 0`
  - `KnockbackPower: ProjectM.KnockbackPower ProjectM.KnockbackPower`
  - `DirectionType: ProjectM.KnockbackDirectionType TowardsOwner`
  - `TargetType: ProjectM.KnockbackTargetType Target`
  - `ModelDirection: ProjectM.MovementCurveRotationMode TowardsAimDirection`
  - `CustomKnockbackBuff: GUID Not Found`
  - `UseMinMaxRange: True`
  - `MinDistanceToTarget: 2.5`
  - `MaxDistanceToTarget: 8`
  - `CloseRange: 1`
  - `FarRange: 7`

- [ProjectM.DestroyOnGameplayEvent](/components/DestroyOnGameplayEvent){:target="_blank"}

- **[0]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: True`

- [ProjectM.GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1170002078`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 1062590452`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -342318240`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[3]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1170002078`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[4]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 1062590452`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[5]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -342318240`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[6]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1170002078`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[7]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1170002078`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[8]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1170002078`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[9]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 1062590452`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[10]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -342318240`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[11]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 689829697`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[12]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0.05`
  - `GameplayEventId: Local - -1170002078`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[13]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0.05`
  - `GameplayEventId: Local - 1062590452`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[14]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0.05`
  - `GameplayEventId: Local - -342318240`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[15]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -934133836`
  - `MaxTriggers: 3`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[16]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1170002078`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[17]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1170002078`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[18]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1170002078`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[19]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1170002078`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[20]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1879294343`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[21]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1879294343`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[22]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1879294343`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- [ProjectM.PlayImpactOnGameplayEvent](/components/PlayImpactOnGameplayEvent){:target="_blank"}

- **[0]**
  - `PrimarySequenceGuid: SequenceGUID -295834795`
  - `ImpactMappingGuid: Default_ImpactMapping PrefabGuid(1838642985)`
  - `SkipMaterialSequence: False`
  - `RotationOffsetEulerMin: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `RotationOffsetEulerMax: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget ImpactLocation`

- **[1]**
  - `PrimarySequenceGuid: SequenceGUID 1446354375`
  - `ImpactMappingGuid: Default_ImpactMapping PrefabGuid(1838642985)`
  - `SkipMaterialSequence: False`
  - `RotationOffsetEulerMin: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `RotationOffsetEulerMax: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget ImpactLocation`

- [ProjectM.PlaySequenceOnGameplayEvent](/components/PlaySequenceOnGameplayEvent){:target="_blank"}

- **[0]**
  - `SequenceGuid: SequenceGUID 395155516`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget Owner`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget Owner`

- **[1]**
  - `SequenceGuid: SequenceGUID 649766560`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget Self`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget Self`

- **[2]**
  - `SequenceGuid: SequenceGUID 220054983`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget Owner`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget Owner`

- **[3]**
  - `SequenceGuid: SequenceGUID 1223435575`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget Owner`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget Owner`

- [ProjectM.TriggerHitConsume](/components/TriggerHitConsume){:target="_blank"}

- **[0]**
  - `SpellCategory: ProjectM.SpellFilterEnum Projectile`
  - `EventIdIndex: 3`
  - `EventIdCount: 1`

- [ProjectM.HitColliderCast](/components/HitColliderCast){:target="_blank"}

- **[0]**
  - `Offset: Unity.Mathematics.float3 float3(0f, -0.4f, 0f)`
  - `Shape: ProjectM.Physics.TriggerShape ProjectM.Physics.TriggerShape`
  - `AfterDuration: 0`
  - `TerrainColliderModifier: 0.5`
  - `PrioritySettings: ProjectM.AoEFilterSettings ProjectM.AoEFilterSettings`
  - `CollisionCheckType: ProjectM.CollisionTrigger OnUpdate`
  - `PrimaryFilterFlags: ProjectM.Physics.CollisionFilterFlags Hittable`
  - `PrimaryTargets_Count: 24`
  - `SecondaryTargets_Count: 0`
  - `ContinuousCollision: False`
  - `IncludeTerrain: True`
  - `CanHitThroughBlockSpellCollision: True`
  - `IgnoreImmaterial: False`
  - `Handled: False`

- [ProjectM.DealDamageOnGameplayEvent](/components/DealDamageOnGameplayEvent){:target="_blank"}

- **[0]**
  - `Parameters: ProjectM.DealDamageParameters ProjectM.DealDamageParameters`
  - `DamageModifierPerHit: 0`
  - `MultiplyMainFactorWithStacks: False`

- **[1]**
  - `Parameters: ProjectM.DealDamageParameters ProjectM.DealDamageParameters`
  - `DamageModifierPerHit: 0`
  - `MultiplyMainFactorWithStacks: False`

- [ProjectM.GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                                         `
  - `Component                                     `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - -1170002078`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                                         `
  - `Component                                     `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - 1062590452`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 0`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                                         `
  - `Component                                     `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - -342318240`

- **[3]**
  - `EventIdIndex: 4`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - 1062590452`

- **[4]**
  - `EventIdIndex: 5`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - -342318240`

- **[5]**
  - `EventIdIndex: 7`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum DealDamage`
  - `GameplayEventId: Local - -1170002078`

- **[6]**
  - `EventIdIndex: 8`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlayImpact`
  - `GameplayEventId: Local - -1170002078`

- **[7]**
  - `EventIdIndex: 9`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlayImpact`
  - `GameplayEventId: Local - 1062590452`

- **[8]**
  - `EventIdIndex: 10`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlayImpact`
  - `GameplayEventId: Local - -342318240`

- **[9]**
  - `EventIdIndex: 11`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - 689829697`

- **[10]**
  - `EventIdIndex: 12`
  - `EventIndexOfType: 2`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                                         `
  - `Component                                     `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - -1170002078`

- **[11]**
  - `EventIdIndex: 13`
  - `EventIndexOfType: 2`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                                         `
  - `Component                                     `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - 1062590452`

- **[12]**
  - `EventIdIndex: 14`
  - `EventIndexOfType: 2`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                                         `
  - `Component                                     `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - -342318240`

- **[13]**
  - `EventIdIndex: 15`
  - `EventIndexOfType: 3`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - -934133836`

- **[14]**
  - `EventIdIndex: 16`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyKnockback`
  - `GameplayEventId: Local - -1170002078`

- **[15]**
  - `EventIdIndex: 17`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -1170002078`

- **[16]**
  - `EventIdIndex: 18`
  - `EventIndexOfType: 1`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                                         `
  - `Component                                  `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -1170002078`

- **[17]**
  - `EventIdIndex: 19`
  - `EventIndexOfType: 2`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                                         `
  - `Component �R�                             `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -1170002078`

- **[18]**
  - `EventIdIndex: 21`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum DealDamage`
  - `GameplayEventId: Local - -1879294343`

- **[19]**
  - `EventIdIndex: 22`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlayImpact`
  - `GameplayEventId: Local - -1879294343`

- [ProjectM.Network.NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 128`

- **[1]**
  - `Value: 197`

- **[2]**
  - `Value: 100`

- **[3]**
  - `Value: 225`

- **[4]**
  - `Value: 140`

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
  - `Value: 192`

- **[27]**
  - `Value: 63`

- **[28]**
  - `Value: 0`

- **[29]**
  - `Value: 0`

- **[30]**
  - `Value: 224`

- **[31]**
  - `Value: 64`

- **[32]**
  - `Value: 0`

- **[33]**
  - `Value: 0`

- **[34]**
  - `Value: 160`

- **[35]**
  - `Value: 65`

- **[36]**
  - `Value: 0`

- **[37]**
  - `Value: 0`

- **[38]**
  - `Value: 160`

- **[39]**
  - `Value: 65`

- **[40]**
  - `Value: 0`

- **[41]**
  - `Value: 0`

- **[42]**
  - `Value: 160`

- **[43]**
  - `Value: 65`

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
  - `Value: 0`

- **[56]**
  - `Value: 0`

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
  - `Value: 0`

- **[70]**
  - `Value: 0`

- **[71]**
  - `Value: 0`

- **[72]**
  - `Value: 0`

- **[73]**
  - `Value: 0`

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

- **[104]**
  - `Value: 255`

- **[105]**
  - `Value: 255`

- **[106]**
  - `Value: 255`

- **[107]**
  - `Value: 255`

- **[108]**
  - `Value: 1`

- **[109]**
  - `Value: 0`

- **[110]**
  - `Value: 0`

- **[111]**
  - `Value: 0`

- **[112]**
  - `Value: 0`

- **[113]**
  - `Value: 0`

- **[114]**
  - `Value: 0`

- **[115]**
  - `Value: 0`

- **[116]**
  - `Value: 0`

- **[117]**
  - `Value: 0`

- **[118]**
  - `Value: 0`

- **[119]**
  - `Value: 0`

- **120 total elements but only showing the first 36**
  - *(No fields)*

- [ProjectM.Network.SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer){:target="_blank"}

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

- **[18]**
  - `Value: -1`

- **[19]**
  - `Value: -1`

- [ProjectM.Shared.SpellModPrefabGuid](/components/SpellModPrefabGuid){:target="_blank"}

- **[0]**
  - `Condition: None`
  - `SpellMod: SpellMod_Weapon_FrostInfused PrefabGuid(-1538516012)`
  - `Prefab: GUID Not Found`
  - `Target: ProjectM.Shared.SpellModPrefabGuidTarget ApplyBuffOnGameplayEvent_Buff0`
  - `TargetIndex: 0`
  - `ValueIndex: 0`
  - `UseSpellModValue: True`

- **[1]**
  - `Condition: None`
  - `SpellMod: SpellMod_Weapon_StormInfused PrefabGuid(-1099263242)`
  - `Prefab: GUID Not Found`
  - `Target: ProjectM.Shared.SpellModPrefabGuidTarget ApplyBuffOnGameplayEvent_Buff0`
  - `TargetIndex: 0`
  - `ValueIndex: 0`
  - `UseSpellModValue: True`

- **[2]**
  - `Condition: None`
  - `SpellMod: SpellMod_Weapon_BloodInfused PrefabGuid(-634479113)`
  - `Prefab: GUID Not Found`
  - `Target: ProjectM.Shared.SpellModPrefabGuidTarget ApplyBuffOnGameplayEvent_Buff0`
  - `TargetIndex: 0`
  - `ValueIndex: 0`
  - `UseSpellModValue: True`

- **[3]**
  - `Condition: None`
  - `SpellMod: SpellMod_Weapon_ChaosInfused PrefabGuid(-1102157891)`
  - `Prefab: GUID Not Found`
  - `Target: ProjectM.Shared.SpellModPrefabGuidTarget ApplyBuffOnGameplayEvent_Buff0`
  - `TargetIndex: 0`
  - `ValueIndex: 0`
  - `UseSpellModValue: True`

- **[4]**
  - `Condition: None`
  - `SpellMod: SpellMod_Weapon_IllusionInfused PrefabGuid(-1957977808)`
  - `Prefab: GUID Not Found`
  - `Target: ProjectM.Shared.SpellModPrefabGuidTarget ApplyBuffOnGameplayEvent_Buff0`
  - `TargetIndex: 0`
  - `ValueIndex: 0`
  - `UseSpellModValue: True`

- **[5]**
  - `Condition: None`
  - `SpellMod: SpellMod_Weapon_UndeadInfused PrefabGuid(-766734228)`
  - `Prefab: GUID Not Found`
  - `Target: ProjectM.Shared.SpellModPrefabGuidTarget ApplyBuffOnGameplayEvent_Buff0`
  - `TargetIndex: 0`
  - `ValueIndex: 0`
  - `UseSpellModValue: True`

- [ProjectM.GetOwnerRotationOnlyOnSpawnTag](/components/GetOwnerRotationOnlyOnSpawnTag){:target="_blank"}
  - *(No fields)*

- [ProjectM.GetOwnerTeamOnSpawn](/components/GetOwnerTeamOnSpawn){:target="_blank"}
  - *(No fields)*

- [ProjectM.YieldResourceSource](/components/YieldResourceSource){:target="_blank"}
  - *(No fields)*

- **ProjectM.HitColliderCast+CollisionCastOnUpdate**
  - *(No fields)*

- [ProjectM.HomingSpellTag](/components/HomingSpellTag){:target="_blank"}
  - *(No fields)*

- [ProjectM.Scripting.ScriptSpawn](/components/ScriptSpawn){:target="_blank"}
  - *(No fields)*

- [ProjectM.Scripting.ScriptUpdate](/components/ScriptUpdate){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*

- [ProjectM.Network.NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*
