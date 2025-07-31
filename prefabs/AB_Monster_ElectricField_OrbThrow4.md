---
title: AB_Monster_ElectricField_OrbThrow4
guid: 1805905502
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Monster_ElectricField_OrbThrow4

**GUID:** `1805905502`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [ProjectM.EntityOwner](/components/EntityOwner)
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator)
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.GetOwnerRotation](/components/GetOwnerRotation)
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Creator`
  - `InverseRotation: False`

- [ProjectM.GetTranslationOnSpawn](/components/GetTranslationOnSpawn)
  - `TranslationSource: ProjectM.GetTranslationSource Creator`
  - `SnapToGround: False`

- [ProjectM.RagdollForceSource](/components/RagdollForceSource)
  - `ForceModifier: 1`
  - `RagdollSetting: RagdollSource_Throw PrefabGuid(-1450115575)`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age](/components/Age)
  - `Value: 0`

- [ProjectM.LifeTime](/components/LifeTime)
  - `Duration: 2`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.TargetAoE](/components/TargetAoE)
  - `TargetPositionType: ProjectM.TargetAoE+TargetPositionTypeEnum AimPosition`
  - `HandleCollisionType: ProjectM.TargetAoE+HandleCollisionTypeEnum None`
  - `StartPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `EndPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `MaxRange: 25`
  - `MinRange: 20`
  - `MaxTime: 0.8`
  - `MinTime: 0.8`
  - `MaxRandomTimeAdded: 0.3`
  - `ThrowMaxHeightDiff: 6`
  - `ThrowArcHeight: 0`
  - `RandomOffsetMin: 0`
  - `RandomOffsetRadius: 0`
  - `MapCollisionRadius: 0.25`
  - `UseRandomOffset: False`
  - `FindValidPositionFromMax: False`

- [ProjectM.ManualFirstFrameLastTranslation](/components/ManualFirstFrameLastTranslation)
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- [ProjectM.Team](/components/Team)
  - `Value: 1`
  - `FactionIndex: -1`

- [ProjectM.Network.Networked](/components/Networked)
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask](/components/UpToDateUserBitMask)
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.FrameChanged](/components/FrameChanged)
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot](/components/NetworkSnapshot)
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_adgbkkgkkc`

- [Unity.Transforms.Rotation](/components/Rotation)
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation)
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld)
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform)
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TeamReference](/components/TeamReference)
  - `Value: ModifiableEntity(0:0)`

- [ProjectM.Network.NetworkId](/components/NetworkId)
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: 1805905502`

- [ProjectM.TargetAOESequence](/components/TargetAOESequence)

- **[0]**
  - `Sequence: SequenceGUID -1553257499`
  - `ImpactSequence: SequenceGUID -1554910761`
  - `Instance: SequenceState`
  - `Id: Entity(0:0)`
  - `TimeEvaluateCurve: ProjectM.CurveReference ProjectM.CurveReference`

- [ProjectM.HitTrigger](/components/HitTrigger)

- [ProjectM.CreateGameplayEventsOnDestroy](/components/CreateGameplayEventsOnDestroy)

- **[0]**
  - `EventId: Local - -136930912`
  - `Target: ProjectM.GameplayEventTarget Self`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.GameplayEventIdMapping](/components/GameplayEventIdMapping)

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -136930912`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.SpawnPrefabOnGameplayEvent](/components/SpawnPrefabOnGameplayEvent)

- **[0]**
  - `SpawnPrefab: AB_Monster_ElectricField_BouncerObject PrefabGuid(581689067)`
  - `CustomAbilitySpellModsSource: GUID Not Found`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `Owner: ProjectM.SpawnPrefabOnGameplayEventOwner Inherit`
  - `Creator: ProjectM.SpawnPrefabOnGameplayEventCreator Inherit`

- [ProjectM.HitColliderCast](/components/HitColliderCast)

- **[0]**
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Shape: ProjectM.Physics.TriggerShape ProjectM.Physics.TriggerShape`
  - `AfterDuration: 0`
  - `TerrainColliderModifier: 0.75`
  - `PrioritySettings: ProjectM.AoEFilterSettings ProjectM.AoEFilterSettings`
  - `CollisionCheckType: ProjectM.CollisionTrigger OnDestroy`
  - `PrimaryFilterFlags: ProjectM.Physics.CollisionFilterFlags Hittable`
  - `PrimaryTargets_Count: 100`
  - `SecondaryTargets_Count: 0`
  - `ContinuousCollision: False`
  - `IncludeTerrain: False`
  - `CanHitThroughBlockSpellCollision: False`
  - `IgnoreImmaterial: False`
  - `Handled: False`

- [ProjectM.GameplayEventListeners](/components/GameplayEventListeners)

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum SpawnPrefab`
  - `GameplayEventId: Local - -136930912`

- [ProjectM.Network.NetSnapshot](/components/NetSnapshot)

- **[0]**
  - `Value: 94`

- **[1]**
  - `Value: 238`

- **[2]**
  - `Value: 163`

- **[3]**
  - `Value: 107`

- **[4]**
  - `Value: 129`

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
  - `Value: 64`

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
  - `Value: 255`

- **[49]**
  - `Value: 255`

- **[50]**
  - `Value: 255`

- **[51]**
  - `Value: 255`

- **[52]**
  - `Value: 1`

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

- **60 total elements but only showing the first 36**

- [ProjectM.Network.SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer)

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

- [ProjectM.GetOwnerRotationOnlyOnSpawnTag](/components/GetOwnerRotationOnlyOnSpawnTag)

- [ProjectM.GetOwnerTeamOnSpawn](/components/GetOwnerTeamOnSpawn)

- **ProjectM.HitColliderCast+CollisionCastOnDestroy**

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner)

- [ProjectM.Network.NetworkSnapshotType](/components/NetworkSnapshotType)
