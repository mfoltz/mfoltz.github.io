---
title: AB_Manticore_ChaosBreath_Trigger
guid: -1676882162
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `-1676882162`

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
  - `BuffEffectType: ProjectM.BuffEffectType Debuff`

- [ProjectM.GetOwnerRotation]({{% relref "components/GetOwnerRotation.md" %}})
  - `OffsetDegreesClockwise: -45`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

- [ProjectM.GetTranslationOnSpawn]({{% relref "components/GetTranslationOnSpawn.md" %}})
  - `TranslationSource: ProjectM.GetTranslationSource Owner`
  - `SnapToGround: False`

- [ProjectM.OffsetTranslationOnSpawn]({{% relref "components/OffsetTranslationOnSpawn.md" %}})
  - `Offset: Unity.Mathematics.float3 float3(1.75f, 0f, 1f)`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age]({{% relref "components/Age.md" %}})
  - `Value: 0`

- [ProjectM.LifeTime]({{% relref "components/LifeTime.md" %}})
  - `Duration: 0.625`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.ManualFirstFrameLastTranslation]({{% relref "components/ManualFirstFrameLastTranslation.md" %}})
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- [ProjectM.Team]({{% relref "components/Team.md" %}})
  - `Value: 1`
  - `FactionIndex: -1`

- [ProjectM.BuffModificationFlagData]({{% relref "components/BuffModificationFlagData.md" %}})
  - `ModificationTypes: 17213423632`
  - `ModificationId: Unset`

- [Unity.Transforms.Rotation]({{% relref "components/Rotation.md" %}})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({{% relref "components/Translation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Gameplay.Scripting.RotateOverTimeData]({{% relref "components/RotateOverTimeData.md" %}})
  - `InitialRotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`
  - `RotationAngle: 100`
  - `CustomDuration: 0`
  - `RotationTarget: ProjectM.Gameplay.Scripting.RotationTarget Self`
  - `RotationType: ProjectM.Gameplay.Scripting.RotationType Clockwise`
  - `RotationCurve: ProjectM.CurveReference ProjectM.CurveReference`
  - `RotationOffset: 0`
  - `UseCustomDuration: False`
  - `LoopAfterDuration: False`
  - `ServerOnly: False`

- [Unity.Transforms.LocalToWorld]({{% relref "components/LocalToWorld.md" %}})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({{% relref "components/LocalTransform.md" %}})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TeamReference]({{% relref "components/TeamReference.md" %}})
  - `Value: ModifiableEntity(0:0)`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: -1676882162`

- [ProjectM.CreateGameplayEventsOnDestroy]({{% relref "components/CreateGameplayEventsOnDestroy.md" %}})

- **[0]**
  - `EventId: Local - -136930912`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.CreateGameplayEventsOnTick]({{% relref "components/CreateGameplayEventsOnTick.md" %}})

- **[0]**
  - `EventId: Local - 325352405`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `TickInterval: 0.066666`
  - `TickTime: 0.066666`
  - `MaxTicks: 9`
  - `CallScriptOnTick: False`
  - `RandomTickOffset: 0`
  - `RandomTickInterval: 0`
  - `ResetWhenBuffStacksChanged: False`
  - `ResetWhenCastingAbility: GUID Not Found`

- [ProjectM.GameplayEventIdMapping]({{% relref "components/GameplayEventIdMapping.md" %}})

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 325352405`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

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
  - `MaxTriggers: 6`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- [ProjectM.SpawnPrefabOnGameplayEvent]({{% relref "components/SpawnPrefabOnGameplayEvent.md" %}})

- **[0]**
  - `SpawnPrefab: AB_Manticore_ChaosBreath_Projectile PrefabGuid(2117195064)`
  - `CustomAbilitySpellModsSource: GUID Not Found`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `Owner: ProjectM.SpawnPrefabOnGameplayEventOwner Inherit`
  - `Creator: ProjectM.SpawnPrefabOnGameplayEventCreator Inherit`

- **[1]**
  - `SpawnPrefab: AB_Manticore_ChaosBreath_Trigger2 PrefabGuid(1534857464)`
  - `CustomAbilitySpellModsSource: GUID Not Found`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `Owner: ProjectM.SpawnPrefabOnGameplayEventOwner Inherit`
  - `Creator: ProjectM.SpawnPrefabOnGameplayEventCreator Inherit`

- **[2]**
  - `SpawnPrefab: AB_Manticore_ChaosBreath_Projectile_VerySlow PrefabGuid(-178370194)`
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
  - `GameplayEventId: Local - 325352405`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum SpawnPrefab`
  - `GameplayEventId: Local - -136930912`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 2`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum SpawnPrefab`
  - `GameplayEventId: Local - 325352405`

- [ProjectM.GetOwnerRotationOnlyOnSpawnTag]({{% relref "components/GetOwnerRotationOnlyOnSpawnTag.md" %}})

- [ProjectM.GetOwnerTeamOnSpawn]({{% relref "components/GetOwnerTeamOnSpawn.md" %}})

- [ProjectM.OffsetLastTranslationOnSpawn]({{% relref "components/OffsetLastTranslationOnSpawn.md" %}})

- [ProjectM.Scripting.ScriptSpawn]({{% relref "components/ScriptSpawn.md" %}})

- [ProjectM.Scripting.ScriptUpdate]({{% relref "components/ScriptUpdate.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})
