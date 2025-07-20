---
title: AB_Militia_Glassblower_GlassRain_Trigger
guid: 892476052
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Militia_Glassblower_GlassRain_Trigger

**GUID:** `892476052`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [ProjectM.Attach](/components/Attach){:target="_blank"}
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff](/components/Buff){:target="_blank"}
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

- [ProjectM.GetOwnerRotation](/components/GetOwnerRotation){:target="_blank"}
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

- [ProjectM.GetTranslationOnSpawn](/components/GetTranslationOnSpawn){:target="_blank"}
  - `TranslationSource: ProjectM.GetTranslationSource Owner`
  - `SnapToGround: False`

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [ProjectM.LifeTime](/components/LifeTime){:target="_blank"}
  - `Duration: 4`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.ManualFirstFrameLastTranslation](/components/ManualFirstFrameLastTranslation){:target="_blank"}
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- [ProjectM.Team](/components/Team){:target="_blank"}
  - `Value: 1`
  - `FactionIndex: -1`

- [Unity.Transforms.Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Gameplay.Scripting.EvenSpreadCluster_Tick_DataServer](/components/EvenSpreadCluster_Tick_DataServer){:target="_blank"}
  - `OffsetAngle: 0`
  - `RandomAngle: 0.08726646`
  - `RotationPerTick: 0.7853982`
  - `Count: 5`
  - `TicksDone: 0`
  - `IndividualRandom: False`
  - `UseAimDirection: False`
  - `UseSelfRotation: False`
  - `UseAIReturnPosAsOrigo: False`
  - `AlwaysMaxRange: False`
  - `SpawnOffset: Unity.Mathematics.float3 float3(0f, 15f, 0f)`
  - `IgnoreCollision: False`
  - `FullCircleSpread: True`
  - `SpawnPrefabInsteadIfConditionTrue: GUID Not Found`
  - `Condition: None`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TeamReference](/components/TeamReference){:target="_blank"}
  - `Value: ModifiableEntity(0:0)`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 892476052`

- [ProjectM.CreateGameplayEventsOnTick](/components/CreateGameplayEventsOnTick){:target="_blank"}

- **[0]**
  - `EventId: Local - -697001186`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `TickInterval: 0.8`
  - `TickTime: 0.8`
  - `MaxTicks: 1`
  - `CallScriptOnTick: False`
  - `RandomTickOffset: 0`
  - `RandomTickInterval: 0`
  - `ResetWhenBuffStacksChanged: False`
  - `ResetWhenCastingAbility: GUID Not Found`

- **[1]**
  - `EventId: Local - -505382719`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `TickInterval: 0.7`
  - `TickTime: 0.7`
  - `MaxTicks: 2`
  - `CallScriptOnTick: False`
  - `RandomTickOffset: 0`
  - `RandomTickInterval: 0`
  - `ResetWhenBuffStacksChanged: False`
  - `ResetWhenCastingAbility: GUID Not Found`

- [ProjectM.GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -505382719`
  - `MaxTriggers: 2`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -505382719`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -697001186`
  - `MaxTriggers: 8`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- [ProjectM.PlaySequenceOnGameplayEvent](/components/PlaySequenceOnGameplayEvent){:target="_blank"}

- **[0]**
  - `SequenceGuid: SequenceGUID 511215068`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget EventTarget`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget EventTarget`

- [ProjectM.RunScriptOnGameplayEvent](/components/RunScriptOnGameplayEvent){:target="_blank"}

- **[0]**
  - `ScriptReference: ProjectM.ScriptMethodReference ProjectM.ScriptMethodReference`

- [ProjectM.SpawnPrefabOnGameplayEvent](/components/SpawnPrefabOnGameplayEvent){:target="_blank"}

- **[0]**
  - `SpawnPrefab: AB_Militia_Glassblower_GlassRain_TargetTrigger PrefabGuid(484167491)`
  - `CustomAbilitySpellModsSource: GUID Not Found`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `Owner: ProjectM.SpawnPrefabOnGameplayEventOwner Inherit`
  - `Creator: ProjectM.SpawnPrefabOnGameplayEventCreator Inherit`

- [ProjectM.GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - -505382719`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RunScript`
  - `GameplayEventId: Local - -505382719`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum SpawnPrefab`
  - `GameplayEventId: Local - -697001186`

- [ProjectM.Gameplay.Scripting.Throw_Prefabs_To_Spawn](/components/Throw_Prefabs_To_Spawn){:target="_blank"}

- **[0]**
  - `Value: AB_Militia_Glassblower_GlassRain_Throw PrefabGuid(-543136108)`

- [ProjectM.GetOwnerRotationOnlyOnSpawnTag](/components/GetOwnerRotationOnlyOnSpawnTag){:target="_blank"}
  - *(No fields)*

- [ProjectM.GetOwnerTeamOnSpawn](/components/GetOwnerTeamOnSpawn){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*
