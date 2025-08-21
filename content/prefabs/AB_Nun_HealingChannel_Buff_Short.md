---
title: AB_Nun_HealingChannel_Buff_Short
guid: 196684530
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `196684530`

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
  - `BuffType: ProjectM.BuffType Parallel`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: False`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Buff`

- [ProjectM.FortifyBuff]({{% relref "components/FortifyBuff.md" %}})
  - `FortifyModifier: 0.75`

- [ProjectM.ChangeKnockbackResistanceBuff]({{% relref "components/ChangeKnockbackResistanceBuff.md" %}})
  - `KnockbackResistanceIndex: 12`

- [ProjectM.LimitAbilityPriorityBuff]({{% relref "components/LimitAbilityPriorityBuff.md" %}})
  - `LimitLowerPriorityThan: 1`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age]({{% relref "components/Age.md" %}})
  - `Value: 0`

- [ProjectM.BuffCategory]({{% relref "components/BuffCategory.md" %}})
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag RemovableBuff`
  - `KeepOldest: False`

- [ProjectM.LifeTime]({{% relref "components/LifeTime.md" %}})
  - `Duration: 3.25`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.LastTranslation]({{% relref "components/LastTranslation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Team]({{% relref "components/Team.md" %}})
  - `Value: 1`
  - `FactionIndex: -1`

- [ProjectM.BuffModificationFlagData]({{% relref "components/BuffModificationFlagData.md" %}})
  - `ModificationTypes: 17179869200`
  - `ModificationId: Unset`

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

- [ProjectM.Network.ModifyRotation]({{% relref "components/ModifyRotation.md" %}})
  - `PreviousTargetDirection: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `OffsetRotation: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `ActiveTimeline: ProjectM.Network.MinMaxValue ProjectM.Network.MinMaxValue`
  - `Value: 1`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `Type: ProjectM.Network.RotationModificationType Set`
  - `TargetDirectionType: ProjectM.Network.TargetDirectionType AimDirection`
  - `UseZeroAsDefaultForCurveRotation: False`
  - `SnapToDirection: False`

- [Unity.Transforms.Rotation]({{% relref "components/Rotation.md" %}})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({{% relref "components/Translation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Gameplay.Scripting.Script_Buff_ModifyBuffResistances_DataServer]({{% relref "components/Script_Buff_ModifyBuffResistances_DataServer.md" %}})
  - `AssetPrefabGuid: BuffResistance_NoResistances PrefabGuid(-149206519)`
  - `ModId: Unset`

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
  - `_Value: 196684530`

- [ProjectM.CreateGameplayEventsOnAbilityImpaired]({{% relref "components/CreateGameplayEventsOnAbilityImpaired.md" %}})

- **[0]**
  - `PreviousIsImpaired: False`
  - `EventId: Local - 496554062`
  - `Source: ProjectM.GameplayEventTarget Owner`
  - `Target: ProjectM.GameplayEventTarget Owner`

- [ProjectM.CreateGameplayEventsOnTick]({{% relref "components/CreateGameplayEventsOnTick.md" %}})

- **[0]**
  - `EventId: Local - -1486120159`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `TickInterval: 1`
  - `TickTime: 1`
  - `MaxTicks: 4`
  - `CallScriptOnTick: False`
  - `RandomTickOffset: 0`
  - `RandomTickInterval: 0`
  - `ResetWhenBuffStacksChanged: False`
  - `ResetWhenCastingAbility: GUID Not Found`

- [ProjectM.DestroyOnGameplayEvent]({{% relref "components/DestroyOnGameplayEvent.md" %}})

- **[0]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: True`

- [ProjectM.HealOnGameplayEvent]({{% relref "components/HealOnGameplayEvent.md" %}})

- **[0]**
  - `Health: 0`
  - `HealthPercent: 0.0225`
  - `HealthPerSpellPower: 0`
  - `showSCT: True`
  - `TrueHealing: False`
  - `Who: ProjectM.HealOnGameplayEventWho Owner`
  - `MultiplyMainFactorWithStacks: False`

- [ProjectM.GameplayEventIdMapping]({{% relref "components/GameplayEventIdMapping.md" %}})

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 496554062`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1486120159`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1486120159`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- [ProjectM.PlayImpactOnGameplayEvent]({{% relref "components/PlayImpactOnGameplayEvent.md" %}})

- **[0]**
  - `PrimarySequenceGuid: SequenceGUID -1619351538`
  - `ImpactMappingGuid: Magic_ImpactMapping_No_Flesh_Impact PrefabGuid(-1156857871)`
  - `SkipMaterialSequence: False`
  - `RotationOffsetEulerMin: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `RotationOffsetEulerMax: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget ImpactLocation`

- [ProjectM.GameplayEventListeners]({{% relref "components/GameplayEventListeners.md" %}})

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - 496554062`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlayImpact`
  - `GameplayEventId: Local - -1486120159`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Heal`
  - `GameplayEventId: Local - -1486120159`

- [ProjectM.Network.NetSnapshot]({{% relref "components/NetSnapshot.md" %}})

- **[0]**
  - `Value: 242`

- **[1]**
  - `Value: 42`

- **[2]**
  - `Value: 185`

- **[3]**
  - `Value: 11`

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
  - `Value: 80`

- **[56]**
  - `Value: 64`

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

- [ProjectM.DestroyOnManualInterrupt]({{% relref "components/DestroyOnManualInterrupt.md" %}})

- [ProjectM.Scripting.ScriptSpawn]({{% relref "components/ScriptSpawn.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})

- [ProjectM.Network.NetworkSnapshotType]({{% relref "components/NetworkSnapshotType.md" %}})
