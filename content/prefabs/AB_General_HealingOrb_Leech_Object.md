---
title: AB_General_HealingOrb_Leech_Object
guid: -1962166889
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `-1962166889`

**Categories:** [AB]({{% relref "prefabs/AB.md" %}}), [All]({{% relref "prefabs/All.md" %}})

## Components

- [ProjectM.EntityOwner]({{% relref "components/EntityOwner.md" %}})
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]({{% relref "components/EntityCreator.md" %}})
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Interactable]({{% relref "components/Interactable.md" %}})
  - `CurrentTargetSequenceGuid: SequenceGUID 0`
  - `IgnoreLineOfSight: False`
  - `IgnoreBlockInteract: False`
  - `UseInteractAbilityName: True`
  - `Disabled: False`

- [ProjectM.InteractedUpon]({{% relref "components/InteractedUpon.md" %}})
  - `Interacting: False`
  - `BlockBuildingMovement: False`
  - `BlockBuildingDisassemble: False`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Health]({{% relref "components/Health.md" %}})
  - `MaxHealth: 1`
  - `TimeOfDeath: 0`
  - `Value: 1`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- [ProjectM.HealthConstants]({{% relref "components/HealthConstants.md" %}})
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: True`
  - `DestroyAfterDuration: 0`
  - `DisableDamageSCT: False`

- [ProjectM.CollisionRadius]({{% relref "components/CollisionRadius.md" %}})
  - `Radius: 0.5`

- [ProjectM.Team]({{% relref "components/Team.md" %}})
  - `Value: 2`
  - `FactionIndex: -1`

- [ProjectM.EntityCategory]({{% relref "components/EntityCategory.md" %}})
  - `MainCategoryInt: 0`
  - `UnitCategoryInt: 7`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 0`
  - `ResourceLevel: 0`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_ahfbdhdjfk`

- [Unity.Transforms.Rotation]({{% relref "components/Rotation.md" %}})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({{% relref "components/Translation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

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
  - `_Value: -1962166889`

- [ProjectM.InteractAbilityBuffer]({{% relref "components/InteractAbilityBuffer.md" %}})

- **[0]**
  - `Condition: None`
  - `Ability: AB_Interact_HealingOrb_Leech_AbilityGroup PrefabGuid(-1329891521)`
  - `Importance: 0`
  - `HideInteractHUDWhileCasting: False`

- [ProjectM.CreateGameplayEventsOnTimePassed]({{% relref "components/CreateGameplayEventsOnTimePassed.md" %}})

- **[0]**
  - `EventId: Local - 1145653779`
  - `Target: ProjectM.GameplayEventTarget Self`
  - `Duration: 20`
  - `Time: 0`
  - `DurationFactorBasedOnLifetime: 0`

- [ProjectM.DestroyOnGameplayEvent]({{% relref "components/DestroyOnGameplayEvent.md" %}})

- **[0]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Kill`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: False`

- [ProjectM.GameplayEventIdMapping]({{% relref "components/GameplayEventIdMapping.md" %}})

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 1145653779`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.GameplayEventListeners]({{% relref "components/GameplayEventListeners.md" %}})

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - 1145653779`

- [ProjectM.Network.NetSnapshot]({{% relref "components/NetSnapshot.md" %}})

- **[0]**
  - `Value: 151`

- **[1]**
  - `Value: 181`

- **[2]**
  - `Value: 11`

- **[3]**
  - `Value: 139`

- **[4]**
  - `Value: 171`

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
  - `Value: 128`

- **[25]**
  - `Value: 63`

- **[26]**
  - `Value: 255`

- **[27]**
  - `Value: 255`

- **[28]**
  - `Value: 255`

- **[29]**
  - `Value: 255`

- **[30]**
  - `Value: 2`

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

- [ProjectM.DisableWhenNoPlayersInRange]({{% relref "components/DisableWhenNoPlayersInRange.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})

- [ProjectM.Network.NetworkSnapshotType]({{% relref "components/NetworkSnapshotType.md" %}})

- [Unity.Physics.PhysicsWorldIndex]({{% relref "components/PhysicsWorldIndex.md" %}})
