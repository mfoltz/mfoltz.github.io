---
title: AB_Wolf_Boss_Maul_Hard_StunBuff
guid: 501556075
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Wolf_Boss_Maul_Hard_StunBuff

**GUID:** `501556075`

**Categories:** [AB]({{< relref "prefabs/AB.md" >}}), [All]({{< relref "prefabs/All.md" >}})

## Components

- [ProjectM.Attach]({{< relref "components/Attach.md" >}})
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner]({{< relref "components/EntityOwner.md" >}})
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]({{< relref "components/EntityCreator.md" >}})
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff]({{< relref "components/Buff.md" >}})
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

- [ProjectM.GetTranslationOnSpawn]({{< relref "components/GetTranslationOnSpawn.md" >}})
  - `TranslationSource: ProjectM.GetTranslationSource BuffTarget`
  - `SnapToGround: False`

- [ProjectM.DestroyData]({{< relref "components/DestroyData.md" >}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{< relref "components/DestroyState.md" >}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age]({{< relref "components/Age.md" >}})
  - `Value: 0`

- [ProjectM.BuffCategory]({{< relref "components/BuffCategory.md" >}})
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag Stun`
  - `KeepOldest: False`

- [ProjectM.LifeTime]({{< relref "components/LifeTime.md" >}})
  - `Duration: 2.6`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.ManualFirstFrameLastTranslation]({{< relref "components/ManualFirstFrameLastTranslation.md" >}})
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- [ProjectM.BuffModificationFlagData]({{< relref "components/BuffModificationFlagData.md" >}})
  - `ModificationTypes: 1107296784`
  - `ModificationId: Unset`

- [ProjectM.Scripting.ScriptDestroy]({{< relref "components/ScriptDestroy.md" >}})
  - `Handled: False`

- [ProjectM.Network.Networked]({{< relref "components/Networked.md" >}})
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask]({{< relref "components/UpToDateUserBitMask.md" >}})
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.FrameChanged]({{< relref "components/FrameChanged.md" >}})
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot]({{< relref "components/NetworkSnapshot.md" >}})
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_ajchjhccfg`

- [Unity.Transforms.Rotation]({{< relref "components/Rotation.md" >}})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({{< relref "components/Translation.md" >}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Gameplay.Scripting.Script_Buff_Stealth_DataServer]({{< relref "components/Script_Buff_Stealth_DataServer.md" >}})
  - `StealthModificationId: Unset`
  - `InvisibleModificationId: Unset`
  - `AlwaysShowVFXModificationId: Unset`
  - `ModelInvisible: False`
  - `AlwaysShowVFX: False`

- [Unity.Transforms.LocalToWorld]({{< relref "components/LocalToWorld.md" >}})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({{< relref "components/LocalTransform.md" >}})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.Network.NetworkId]({{< relref "components/NetworkId.md" >}})
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID]({{< relref "components/PrefabGUID.md" >}})
  - `_Value: 501556075`

- [ProjectM.CreateGameplayEventsOnDestroy]({{< relref "components/CreateGameplayEventsOnDestroy.md" >}})

- **[0]**
  - `EventId: Local - -136930912`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- **[1]**
  - `EventId: Local - 289585444`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.CreateGameplayEventsOnSpawn]({{< relref "components/CreateGameplayEventsOnSpawn.md" >}})

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`

- [ProjectM.CreateGameplayEventsOnTick]({{< relref "components/CreateGameplayEventsOnTick.md" >}})

- **[0]**
  - `EventId: Local - 325352405`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `TickInterval: 0.3`
  - `TickTime: -0`
  - `MaxTicks: 2147483647`
  - `CallScriptOnTick: False`
  - `RandomTickOffset: 0`
  - `RandomTickInterval: 0`
  - `ResetWhenBuffStacksChanged: False`
  - `ResetWhenCastingAbility: GUID Not Found`

- [ProjectM.ApplyBuffOnGameplayEvent]({{< relref "components/ApplyBuffOnGameplayEvent.md" >}})

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget Owner`
  - `SpellTarget: ProjectM.SetSpellTarget Self`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: AB_Wolf_Boss_Maul_Hard_ChannelBuff PrefabGuid(1353658961)`
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
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: AB_Wolf_Boss_Maul_Hard_HitBuff PrefabGuid(125116486)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- [ProjectM.ForceCastOnGameplayEvent]({{< relref "components/ForceCastOnGameplayEvent.md" >}})

- **[0]**
  - `ForceCastAbility: AB_Wolf_Boss_StepBack_AbilityGroup PrefabGuid(1456629565)`
  - `Target: ProjectM.ForceCastTarget Owner`

- [ProjectM.LifeLeechOnGameplayEvent]({{< relref "components/LifeLeechOnGameplayEvent.md" >}})

- **[0]**
  - `Factor: 0.5`
  - `EventIdIndex: 6`
  - `EventIdCount: 1`
  - `Condition: None`
  - `LifeLeechSettingsGuid: LifeLeech_Settings_Default PrefabGuid(1949460792)`
  - `Target: ProjectM.LifeLeechTarget Owner`

- [ProjectM.GameplayEventIdMapping]({{< relref "components/GameplayEventIdMapping.md" >}})

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -112044381`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -136930912`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 325352405`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[3]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 325352405`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[4]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 325352405`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[5]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -136930912`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[6]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 325352405`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[7]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 289585444`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.PlayImpactOnGameplayEvent]({{< relref "components/PlayImpactOnGameplayEvent.md" >}})

- **[0]**
  - `PrimarySequenceGuid: SequenceGUID -1495228907`
  - `ImpactMappingGuid: Default_ImpactMapping PrefabGuid(1838642985)`
  - `SkipMaterialSequence: False`
  - `RotationOffsetEulerMin: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `RotationOffsetEulerMax: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget ImpactLocation`

- [ProjectM.RemoveBuffOnGameplayEvent]({{< relref "components/RemoveBuffOnGameplayEvent.md" >}})

- **[0]**
  - `BuffTarget: ProjectM.RemoveBuffTarget Owner`

- [ProjectM.RemoveBuffOnGameplayEventEntry]({{< relref "components/RemoveBuffOnGameplayEventEntry.md" >}})

- **[0]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(1353658961)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- [ProjectM.DealDamageOnGameplayEvent]({{< relref "components/DealDamageOnGameplayEvent.md" >}})

- **[0]**
  - `Parameters: ProjectM.DealDamageParameters ProjectM.DealDamageParameters`
  - `DamageModifierPerHit: 0`
  - `MultiplyMainFactorWithStacks: False`

- [ProjectM.GameplayEventListeners]({{< relref "components/GameplayEventListeners.md" >}})

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -112044381`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RemoveBuff`
  - `GameplayEventId: Local - -136930912`

- **[2]**
  - `EventIdIndex: 3`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum DealDamage`
  - `GameplayEventId: Local - 325352405`

- **[3]**
  - `EventIdIndex: 4`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlayImpact`
  - `GameplayEventId: Local - 325352405`

- **[4]**
  - `EventIdIndex: 5`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ForceCast`
  - `GameplayEventId: Local - -136930912`

- **[5]**
  - `EventIdIndex: 7`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - 289585444`

- [ProjectM.Network.NetSnapshot]({{< relref "components/NetSnapshot.md" >}})

- **[0]**
  - `Value: 107`

- **[1]**
  - `Value: 35`

- **[2]**
  - `Value: 229`

- **[3]**
  - `Value: 29`

- **[4]**
  - `Value: 187`

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
  - `Value: 102`

- **[54]**
  - `Value: 102`

- **[55]**
  - `Value: 38`

- **[56]**
  - `Value: 64`

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

- **64 total elements but only showing the first 36**

- [ProjectM.Network.SnapshotFrameChangedBuffer]({{< relref "components/SnapshotFrameChangedBuffer.md" >}})

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

- [ProjectM.Scripting.ScriptSpawn]({{< relref "components/ScriptSpawn.md" >}})

- [Unity.Entities.SpawnTag]({{< relref "components/SpawnTag.md" >}})

- [Unity.Entities.Prefab]({{< relref "components/Prefab.md" >}})

- [Unity.Entities.Simulate]({{< relref "components/Simulate.md" >}})

- [Unity.Entities.BlobAssetOwner]({{< relref "components/BlobAssetOwner.md" >}})

- [ProjectM.Network.NetworkSnapshotType]({{< relref "components/NetworkSnapshotType.md" >}})
