---
title: AB_ArchMage_ArcaneImprisonment_RingArea
guid: -1952370580
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_ArchMage_ArcaneImprisonment_RingArea

**GUID:** `-1952370580`

**Categories:** [AB]({< relref "prefabs/AB.md" >}), [All]({< relref "prefabs/All.md" >})

## Components

- [ProjectM.EntityOwner]({< relref "components/EntityOwner.md" >})
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]({< relref "components/EntityCreator.md" >})
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Gameplay.Scripting.RingAoE_DataShared]({< relref "components/RingAoE_DataShared.md" >})
  - `StartRadius: 1`
  - `EndRadius: 12`
  - `Duration: 1`
  - `RingThickness: 1`
  - `TimeBetweenHits: 1`
  - `Height: 3`
  - `RingSequence: SequenceGUID 1069019048`
  - `RingSequenceState: SequenceState`
  - `Id: Entity(0:0)`
  - `GameplayEventId: Local - 13068408`
  - `HitFilter: ProjectM.Scripting.HitFilter Enemy, Alive`
  - `IgnoreTerrainCollision: False`
  - `IgnoreLineOfSight: True`
  - `IgnoreAILineOfSight: True`

- [ProjectM.GetOwnerRotation]({< relref "components/GetOwnerRotation.md" >})
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

- [ProjectM.GetTranslationOnSpawn]({< relref "components/GetTranslationOnSpawn.md" >})
  - `TranslationSource: ProjectM.GetTranslationSource Owner`
  - `SnapToGround: False`

- [ProjectM.DestroyData]({< relref "components/DestroyData.md" >})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({< relref "components/DestroyState.md" >})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age]({< relref "components/Age.md" >})
  - `Value: 0`

- [ProjectM.ManualFirstFrameLastTranslation]({< relref "components/ManualFirstFrameLastTranslation.md" >})
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- [ProjectM.Team]({< relref "components/Team.md" >})
  - `Value: 1`
  - `FactionIndex: -1`

- [ProjectM.Network.Networked]({< relref "components/Networked.md" >})
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask]({< relref "components/UpToDateUserBitMask.md" >})
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.FrameChanged]({< relref "components/FrameChanged.md" >})
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot]({< relref "components/NetworkSnapshot.md" >})
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_ccbfibgeci`

- [Unity.Transforms.Rotation]({< relref "components/Rotation.md" >})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({< relref "components/Translation.md" >})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld]({< relref "components/LocalToWorld.md" >})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({< relref "components/LocalTransform.md" >})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TeamReference]({< relref "components/TeamReference.md" >})
  - `Value: ModifiableEntity(0:0)`

- [ProjectM.Network.NetworkId]({< relref "components/NetworkId.md" >})
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID]({< relref "components/PrefabGUID.md" >})
  - `_Value: -1952370580`

- [ProjectM.Gameplay.Scripting.HitList]({< relref "components/HitList.md" >})

- [ProjectM.ApplyBuffOnGameplayEvent]({< relref "components/ApplyBuffOnGameplayEvent.md" >})

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget EventTarget`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: AB_ArchMage_ArcaneImprisonment_ImprisonBuff PrefabGuid(2007858431)`
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
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: AB_ArchMage_ArcaneImprisonment_MoveBehaviourBuff PrefabGuid(1099681289)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- [ProjectM.GameplayEventIdMapping]({< relref "components/GameplayEventIdMapping.md" >})

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 13068408`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 13068408`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 13068408`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[3]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 13068408`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[4]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 13068408`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.PlayImpactOnGameplayEvent]({< relref "components/PlayImpactOnGameplayEvent.md" >})

- **[0]**
  - `PrimarySequenceGuid: SequenceGUID -1735819189`
  - `ImpactMappingGuid: Default_ImpactMapping PrefabGuid(1838642985)`
  - `SkipMaterialSequence: False`
  - `RotationOffsetEulerMin: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `RotationOffsetEulerMax: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget ImpactLocation`

- [ProjectM.DealDamageOnGameplayEvent]({< relref "components/DealDamageOnGameplayEvent.md" >})

- **[0]**
  - `Parameters: ProjectM.DealDamageParameters ProjectM.DealDamageParameters`
  - `DamageModifierPerHit: 0`
  - `MultiplyMainFactorWithStacks: False`

- [ProjectM.GameplayEventListeners]({< relref "components/GameplayEventListeners.md" >})

- **[0]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum DealDamage`
  - `GameplayEventId: Local - 13068408`

- **[1]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlayImpact`
  - `GameplayEventId: Local - 13068408`

- **[2]**
  - `EventIdIndex: 3`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - 13068408`

- **[3]**
  - `EventIdIndex: 4`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - 13068408`

- [ProjectM.Network.NetSnapshot]({< relref "components/NetSnapshot.md" >})

- **[0]**
  - `Value: 108`

- **[1]**
  - `Value: 48`

- **[2]**
  - `Value: 161`

- **[3]**
  - `Value: 139`

- **[4]**
  - `Value: 221`

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
  - `Value: 128`

- **[23]**
  - `Value: 63`

- **[24]**
  - `Value: 255`

- **[25]**
  - `Value: 255`

- **[26]**
  - `Value: 255`

- **[27]**
  - `Value: 255`

- **[28]**
  - `Value: 1`

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

- **48 total elements but only showing the first 36**

- [ProjectM.Network.SnapshotFrameChangedBuffer]({< relref "components/SnapshotFrameChangedBuffer.md" >})

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

- [ProjectM.GetOwnerRotationOnlyOnSpawnTag]({< relref "components/GetOwnerRotationOnlyOnSpawnTag.md" >})

- [ProjectM.GetOwnerTeamOnSpawn]({< relref "components/GetOwnerTeamOnSpawn.md" >})

- [ProjectM.Scripting.ScriptUpdate]({< relref "components/ScriptUpdate.md" >})

- [Unity.Entities.SpawnTag]({< relref "components/SpawnTag.md" >})

- [Unity.Entities.Prefab]({< relref "components/Prefab.md" >})

- [Unity.Entities.Simulate]({< relref "components/Simulate.md" >})

- [Unity.Entities.BlobAssetOwner]({< relref "components/BlobAssetOwner.md" >})

- [ProjectM.Network.NetworkSnapshotType]({< relref "components/NetworkSnapshotType.md" >})
