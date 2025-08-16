---
title: AB_Bandit_Fisherman_FishingOldBoot_Buff
guid: 1143164491
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Bandit_Fisherman_FishingOldBoot_Buff

**GUID:** `1143164491`

**Categories:** [AB]{{< relref "prefabs/AB.md" >}}, [All]{{< relref "prefabs/All.md" >}}

## Components

- [ProjectM.Attach]{{< relref "components/Attach.md" >}}
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner]{{< relref "components/EntityOwner.md" >}}
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]{{< relref "components/EntityCreator.md" >}}
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff]{{< relref "components/Buff.md" >}}
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

- [ProjectM.SpellTarget]{{< relref "components/SpellTarget.md" >}}
  - `Target: NetworkedEntity(0:0)`
  - `DestroyIfNotInteractable: True`

- [ProjectM.GetOwnerRotation]{{< relref "components/GetOwnerRotation.md" >}}
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource SpellTarget`
  - `InverseRotation: False`

- [ProjectM.ChangeKnockbackResistanceBuff]{{< relref "components/ChangeKnockbackResistanceBuff.md" >}}
  - `KnockbackResistanceIndex: 11`

- [ProjectM.AmplifyBuff]{{< relref "components/AmplifyBuff.md" >}}
  - `AmplifyModifier: -0.5`

- [ProjectM.DestroyData]{{< relref "components/DestroyData.md" >}}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]{{< relref "components/DestroyState.md" >}}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age]{{< relref "components/Age.md" >}}
  - `Value: 0`

- [ProjectM.BuffCategory]{{< relref "components/BuffCategory.md" >}}
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [ProjectM.LifeTime]{{< relref "components/LifeTime.md" >}}
  - `Duration: 5.5`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.BuffModificationFlagData]{{< relref "components/BuffModificationFlagData.md" >}}
  - `ModificationTypes: 17179869200`
  - `ModificationId: Unset`

- [ProjectM.Network.Networked]{{< relref "components/Networked.md" >}}
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask]{{< relref "components/UpToDateUserBitMask.md" >}}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.FrameChanged]{{< relref "components/FrameChanged.md" >}}
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot]{{< relref "components/NetworkSnapshot.md" >}}
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_ajcejdgdjc`

- [ProjectM.Network.ModifyRotation]{{< relref "components/ModifyRotation.md" >}}
  - `PreviousTargetDirection: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `OffsetRotation: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `ActiveTimeline: ProjectM.Network.MinMaxValue ProjectM.Network.MinMaxValue`
  - `Value: 1`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `Type: ProjectM.Network.RotationModificationType Multiply`
  - `TargetDirectionType: ProjectM.Network.TargetDirectionType SelfRotation`
  - `UseZeroAsDefaultForCurveRotation: False`
  - `SnapToDirection: False`

- [Unity.Transforms.Rotation]{{< relref "components/Rotation.md" >}}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]{{< relref "components/Translation.md" >}}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Gameplay.Scripting.Script_Fisherman_DropItem_Data]{{< relref "components/Script_Fisherman_DropItem_Data.md" >}}
  - `Amount: 10`
  - `DropItem: Item_Ingredient_Plant_PlantFiber PrefabGuid(-1409142667)`
  - `MinRange: 5`
  - `MaxRange: 7`

- [Unity.Transforms.LocalToWorld]{{< relref "components/LocalToWorld.md" >}}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]{{< relref "components/LocalTransform.md" >}}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.Network.NetworkId]{{< relref "components/NetworkId.md" >}}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID]{{< relref "components/PrefabGUID.md" >}}
  - `_Value: 1143164491`

- [ProjectM.CreateGameplayEventsOnTimePassed]{{< relref "components/CreateGameplayEventsOnTimePassed.md" >}}

- **[0]**
  - `EventId: Local - -837446999`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `Duration: 4.5`
  - `Time: 0`
  - `DurationFactorBasedOnLifetime: 0`

- [ProjectM.GameplayEventIdMapping]{{< relref "components/GameplayEventIdMapping.md" >}}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -837446999`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.RunScriptOnGameplayEvent]{{< relref "components/RunScriptOnGameplayEvent.md" >}}

- **[0]**
  - `ScriptReference: ProjectM.ScriptMethodReference ProjectM.ScriptMethodReference`

- [ProjectM.GameplayEventListeners]{{< relref "components/GameplayEventListeners.md" >}}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RunScript`
  - `GameplayEventId: Local - -837446999`

- [ProjectM.Network.NetSnapshot]{{< relref "components/NetSnapshot.md" >}}

- **[0]**
  - `Value: 75`

- **[1]**
  - `Value: 78`

- **[2]**
  - `Value: 35`

- **[3]**
  - `Value: 68`

- **[4]**
  - `Value: 186`

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
  - `Value: 176`

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

- [ProjectM.Network.SnapshotFrameChangedBuffer]{{< relref "components/SnapshotFrameChangedBuffer.md" >}}

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

- [ProjectM.GetOwnerRotationOnlyOnSpawnTag]{{< relref "components/GetOwnerRotationOnlyOnSpawnTag.md" >}}

- [ProjectM.DestroyOnManualInterrupt]{{< relref "components/DestroyOnManualInterrupt.md" >}}

- [Unity.Entities.SpawnTag]{{< relref "components/SpawnTag.md" >}}

- [Unity.Entities.Prefab]{{< relref "components/Prefab.md" >}}

- [Unity.Entities.Simulate]{{< relref "components/Simulate.md" >}}

- [Unity.Entities.BlobAssetOwner]{{< relref "components/BlobAssetOwner.md" >}}

- [ProjectM.Network.NetworkSnapshotType]{{< relref "components/NetworkSnapshotType.md" >}}
