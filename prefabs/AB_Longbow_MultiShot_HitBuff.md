---
title: AB_Longbow_MultiShot_HitBuff
guid: 384972514
categories:
- AB
- All
nav_exclude: true
search_exclude: true
layout: default
components:
- Attach
- EntityOwner
- EntityCreator
- Buff
- GetOwnerRotation
- GetTranslationOnSpawn
- RagdollForceSource
- DestroyData
- DestroyState
- Age
- BuffCategory
- LifeTime
- ManualFirstFrameLastTranslation
- SpellModSetComponent
- Rotation
- Translation
- LocalToWorld
- LocalTransform
- PrefabGUID
- CreateGameplayEventsOnSpawn
- ApplyBuffOnGameplayEvent
- ApplyKnockbackOnGameplayEvent
- GameplayEventIdMapping
- PlayImpactOnGameplayEvent
- PlaySequenceOnGameplayEvent
- DealDamageOnGameplayEvent
- GameplayEventListeners
- SpellModPrefabGuid
- GetOwnerRotationOnlyOnSpawnTag
- SpawnTag
- Prefab
- Simulate
- BlobAssetOwner
---

# AB_Longbow_MultiShot_HitBuff

**GUID:** `384972514`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [Attach](/components/Attach){:target="_blank"}
  - `Parent: Entity(0:0)`

- [EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [Buff](/components/Buff){:target="_blank"}
  - `StartTimeUnmodified: 0`
  - `Target: Entity(0:0)`
  - `BuffType: ProjectM.BuffType Block`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: False`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Debuff`

- [GetOwnerRotation](/components/GetOwnerRotation){:target="_blank"}
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Creator`
  - `InverseRotation: False`

- [GetTranslationOnSpawn](/components/GetTranslationOnSpawn){:target="_blank"}
  - `TranslationSource: ProjectM.GetTranslationSource Creator`
  - `SnapToGround: False`

- [RagdollForceSource](/components/RagdollForceSource){:target="_blank"}
  - `ForceModifier: 2`
  - `RagdollSetting: RagdollSource_Projectile PrefabGuid(-856857226)`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [BuffCategory](/components/BuffCategory){:target="_blank"}
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [LifeTime](/components/LifeTime){:target="_blank"}
  - `Duration: 0.5`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ManualFirstFrameLastTranslation](/components/ManualFirstFrameLastTranslation){:target="_blank"}
  - `Value: Il2CppSystem.Nullable_Unboxed`1[float3]`

- [SpellModSetComponent](/components/SpellModSetComponent){:target="_blank"}
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

- [Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 384972514`

- [CreateGameplayEventsOnSpawn](/components/CreateGameplayEventsOnSpawn){:target="_blank"}

- **[0]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`

- [ApplyBuffOnGameplayEvent](/components/ApplyBuffOnGameplayEvent){:target="_blank"}

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget EventTarget`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[Single]`
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
  - `BuffTarget: ProjectM.ApplyBuffTarget Owner`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[Single]`
  - `Stacks: 1`
  - `Buff0: AB_Vampire_Longbow_Focus_Buff PrefabGuid(785836517)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- [ApplyKnockbackOnGameplayEvent](/components/ApplyKnockbackOnGameplayEvent){:target="_blank"}

- **[0]**
  - `Duration: 0.4`
  - `Range: 3`
  - `RotationAngleOffset: 0`
  - `KnockbackPower: ProjectM.KnockbackPower ProjectM.KnockbackPower`
  - `DirectionType: ProjectM.KnockbackDirectionType InheritDirection`
  - `TargetType: ProjectM.KnockbackTargetType Target`
  - `ModelDirection: ProjectM.MovementCurveRotationMode TowardsAimDirection`
  - `CustomKnockbackBuff: GUID Not Found`
  - `UseMinMaxRange: True`
  - `MinDistanceToTarget: 1`
  - `MaxDistanceToTarget: 10`
  - `CloseRange: 5.5`
  - `FarRange: 1.5`

- [GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 373290447`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

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
  - `GameplayEventId: Local - 373290447`
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
  - `GameplayEventId: Local - 373290447`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[5]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 373290447`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[6]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 373290447`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [PlayImpactOnGameplayEvent](/components/PlayImpactOnGameplayEvent){:target="_blank"}

- **[0]**
  - `PrimarySequenceGuid: SequenceGUID -1721898791`
  - `ImpactMappingGuid: Default_ImpactMapping PrefabGuid(1838642985)`
  - `SkipMaterialSequence: False`
  - `RotationOffsetEulerMin: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `RotationOffsetEulerMax: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget ImpactLocation`

- [PlaySequenceOnGameplayEvent](/components/PlaySequenceOnGameplayEvent){:target="_blank"}

- **[0]**
  - `SequenceGuid: SequenceGUID 1912056967`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget Owner`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget Owner`

- [DealDamageOnGameplayEvent](/components/DealDamageOnGameplayEvent){:target="_blank"}

- **[0]**
  - `Parameters: ProjectM.DealDamageParameters ProjectM.DealDamageParameters`
  - `DamageModifierPerHit: 0`
  - `MultiplyMainFactorWithStacks: False`

- [GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlayImpact`
  - `GameplayEventId: Local - 373290447`

- **[1]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum DealDamage`
  - `GameplayEventId: Local - 373290447`

- **[2]**
  - `EventIdIndex: 3`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyKnockback`
  - `GameplayEventId: Local - 373290447`

- **[3]**
  - `EventIdIndex: 4`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - 373290447`

- **[4]**
  - `EventIdIndex: 5`
  - `EventIndexOfType: 1`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                             `
  - `Component                                  `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - 373290447`

- **[5]**
  - `EventIdIndex: 6`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - 373290447`

- [SpellModPrefabGuid](/components/SpellModPrefabGuid){:target="_blank"}

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

- [GetOwnerRotationOnlyOnSpawnTag](/components/GetOwnerRotationOnlyOnSpawnTag){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*
