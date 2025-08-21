---
title: AB_Vampire_BloodKnight_SpearTwirl_Buff02
guid: 1702060331
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `1702060331`

**Categories:** [AB]({{% relref "prefabs/AB.md" %}}), [All]({{% relref "prefabs/All.md" %}})

## Components

- [ProjectM.Attach]({{% relref "components/Attach.md" %}})
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner]({{% relref "components/EntityOwner.md" %}})
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]({{% relref "components/EntityCreator.md" %}})
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff]({{% relref "components/Buff.md" %}})
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

- [ProjectM.GetOwnerRotation]({{% relref "components/GetOwnerRotation.md" %}})
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

- [ProjectM.GetTranslationOnUpdate]({{% relref "components/GetTranslationOnUpdate.md" %}})
  - `Source: ProjectM.GetTranslationSource BuffTarget`

- [ProjectM.ChangeKnockbackResistanceBuff]({{% relref "components/ChangeKnockbackResistanceBuff.md" %}})
  - `KnockbackResistanceIndex: 12`

- [ProjectM.DestroyOnAbilityCast]({{% relref "components/DestroyOnAbilityCast.md" %}})
  - `CastCount: 0`

- [ProjectM.AoETargetImportance]({{% relref "components/AoETargetImportance.md" %}})
  - `Importance: 500`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age]({{% relref "components/Age.md" %}})
  - `Value: 0`

- [ProjectM.LifeTime]({{% relref "components/LifeTime.md" %}})
  - `Duration: 1.5`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.LastTranslation]({{% relref "components/LastTranslation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Team]({{% relref "components/Team.md" %}})
  - `Value: 1`
  - `FactionIndex: -1`

- [ProjectM.BuffModificationFlagData]({{% relref "components/BuffModificationFlagData.md" %}})
  - `ModificationTypes: 17179869184`
  - `ModificationId: Unset`

- [ProjectM.EntityCategory]({{% relref "components/EntityCategory.md" %}})
  - `MainCategoryInt: 4`
  - `UnitCategoryInt: 0`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 0`
  - `ResourceLevel: 0`

- [ProjectM.Scripting.ScriptDestroy]({{% relref "components/ScriptDestroy.md" %}})
  - `Handled: False`

- [ProjectM.Network.Networked]({{% relref "components/Networked.md" %}})
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask]({{% relref "components/UpToDateUserBitMask.md" %}})
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.FrameChanged]({{% relref "components/FrameChanged.md" %}})
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot]({{% relref "components/NetworkSnapshot.md" %}})
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_cbggkebbfk`

- [Unity.Transforms.Rotation]({{% relref "components/Rotation.md" %}})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({{% relref "components/Translation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Gameplay.Scripting.Script_Modify_Combat_Movement_Buff_Data]({{% relref "components/Script_Modify_Combat_Movement_Buff_Data.md" %}})
  - `MinDistance: 0`
  - `GoalDistance: 2`
  - `GoalDistanceOuter: 0`
  - `MaxDistance: 2.4`
  - `MovePattern: ProjectM.AiMovePattern Approach`
  - `ForceLookAtTarget: ProjectM.AiForceLookAtTarget None`
  - `CircleCurveInRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `CircleCurveOutOfRange: ProjectM.CurveReference ProjectM.CurveReference`

- [ProjectM.Gameplay.Scripting.Script_Modify_Combat_Movement_Buff_State]({{% relref "components/Script_Modify_Combat_Movement_Buff_State.md" %}})
  - `MinDistanceModId: Unset`
  - `GoalDistanceModId: Unset`
  - `GoalDistanceOuterModId: Unset`
  - `MaxDistanceModId: Unset`
  - `MovePatternModId: Unset`
  - `ForceLookAtTargetModId: Unset`
  - `OldCircleCurveInRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `OldCircleCurveOutOfRange: ProjectM.CurveReference ProjectM.CurveReference`

- [Unity.Physics.PhysicsCollider]({{% relref "components/PhysicsCollider.md" %}})
  - `Value: Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider] Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider]`

- [Unity.Physics.Systems.StaticPhysicsWorldBodyIndex]({{% relref "components/StaticPhysicsWorldBodyIndex.md" %}})
  - `WorldBodyIndex: -1`

- [Unity.Transforms.LocalToWorld]({{% relref "components/LocalToWorld.md" %}})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({{% relref "components/LocalTransform.md" %}})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TeamReference]({{% relref "components/TeamReference.md" %}})
  - `Value: ModifiableEntity(0:0)`

- [ProjectM.Network.NetworkId]({{% relref "components/NetworkId.md" %}})
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 1702060331`

- [ProjectM.CreateGameplayEventsOnHitConsume_SpellsConsumed]({{% relref "components/CreateGameplayEventsOnHitConsume_SpellsConsumed.md" %}})

- [ProjectM.CreateGameplayEventsOnAbilityImpaired]({{% relref "components/CreateGameplayEventsOnAbilityImpaired.md" %}})

- **[0]**
  - `PreviousIsImpaired: False`
  - `EventId: Local - 1390851097`
  - `Source: ProjectM.GameplayEventTarget Owner`
  - `Target: ProjectM.GameplayEventTarget Owner`

- [ProjectM.CreateGameplayEventsOnAbilityTrigger]({{% relref "components/CreateGameplayEventsOnAbilityTrigger.md" %}})

- **[0]**
  - `EventId: Local - 1192782072`
  - `Type: ProjectM.AbilityTriggerEventType Use`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `Condition: None`
  - `AbilityTypes: ProjectM.AbilityTypeFlag All`
  - `AbilityButton: ProjectM.AbilityButtonInputAction None`
  - `AbilityTypeEnum: ProjectM.AbilityTypeEnum None`
  - `NumOfPrefabTargets: 0`
  - `PrefabTargetStartIndex: 0`

- [ProjectM.CreateGameplayEventsOnTick]({{% relref "components/CreateGameplayEventsOnTick.md" %}})

- **[0]**
  - `EventId: Local - -1486120159`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `TickInterval: 0.2`
  - `TickTime: 0.2`
  - `MaxTicks: 2147483647`
  - `CallScriptOnTick: False`
  - `RandomTickOffset: 0`
  - `RandomTickInterval: 0`
  - `ResetWhenBuffStacksChanged: False`
  - `ResetWhenCastingAbility: GUID Not Found`

- [ProjectM.CreateGameplayEventsOnHitConsume]({{% relref "components/CreateGameplayEventsOnHitConsume.md" %}})

- **[0]**
  - `EventId: Local - 1594924154`
  - `Filter: ProjectM.HitConsumeFilter ProjectM.HitConsumeFilter`
  - `DestroySpell: True`
  - `MaxAngleDiff: 120`

- **[1]**
  - `EventId: Local - 469617985`
  - `Filter: ProjectM.HitConsumeFilter ProjectM.HitConsumeFilter`
  - `DestroySpell: True`
  - `MaxAngleDiff: 120`

- **[2]**
  - `EventId: Local - -1919693362`
  - `Filter: ProjectM.HitConsumeFilter ProjectM.HitConsumeFilter`
  - `DestroySpell: True`
  - `MaxAngleDiff: 120`

- [ProjectM.ApplyBuffOnGameplayEvent]({{% relref "components/ApplyBuffOnGameplayEvent.md" %}})

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget EventTarget`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single] 0.5`
  - `Stacks: 1`
  - `Buff0: Buff_General_Stun_ImpactFX PrefabGuid(-1369764436)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- [ProjectM.GameplayEventIdMapping]({{% relref "components/GameplayEventIdMapping.md" %}})

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1486120159`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 1594924154`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 1594924154`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[3]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 469617985`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[4]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1919693362`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- [ProjectM.PlaySequenceOnGameplayEvent]({{% relref "components/PlaySequenceOnGameplayEvent.md" %}})

- **[0]**
  - `SequenceGuid: SequenceGUID 1728187487`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget ImpactLocation`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget EventTarget`

- [ProjectM.SpawnPrefabOnGameplayEvent]({{% relref "components/SpawnPrefabOnGameplayEvent.md" %}})

- **[0]**
  - `SpawnPrefab: AB_Vampire_BloodKnight_SpearTwirl_Hit02 PrefabGuid(-32218914)`
  - `CustomAbilitySpellModsSource: GUID Not Found`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `Owner: ProjectM.SpawnPrefabOnGameplayEventOwner Inherit`
  - `Creator: ProjectM.SpawnPrefabOnGameplayEventCreator Inherit`

- [ProjectM.GameplayEventListeners]({{% relref "components/GameplayEventListeners.md" %}})

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum SpawnPrefab`
  - `GameplayEventId: Local - -1486120159`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - 1594924154`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - 1594924154`

- **[3]**
  - `EventIdIndex: 3`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - 469617985`

- **[4]**
  - `EventIdIndex: 4`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - -1919693362`

- [ProjectM.Network.NetSnapshot]({{% relref "components/NetSnapshot.md" %}})

- **[0]**
  - `Value: 43`

- **[1]**
  - `Value: 97`

- **[2]**
  - `Value: 115`

- **[3]**
  - `Value: 101`

- **[4]**
  - `Value: 214`

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
  - `Value: 192`

- **[56]**
  - `Value: 63`

- **[57]**
  - `Value: 255`

- **[58]**
  - `Value: 255`

- **[59]**
  - `Value: 255`

- **[60]**
  - `Value: 255`

- **[61]**
  - `Value: 1`

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

- **72 total elements but only showing the first 36**

- [ProjectM.Network.SnapshotFrameChangedBuffer]({{% relref "components/SnapshotFrameChangedBuffer.md" %}})

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

- [ProjectM.GetOwnerTeamOnSpawn]({{% relref "components/GetOwnerTeamOnSpawn.md" %}})

- [ProjectM.SyncAttachedTranslation]({{% relref "components/SyncAttachedTranslation.md" %}})

- [ProjectM.Scripting.ScriptSpawn]({{% relref "components/ScriptSpawn.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})

- [ProjectM.Network.NetworkSnapshotType]({{% relref "components/NetworkSnapshotType.md" %}})

- [Unity.Physics.PhysicsWorldIndex]({{% relref "components/PhysicsWorldIndex.md" %}})
