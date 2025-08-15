---
title: GateBossComponentsTemplate_Minor
guid: -222706317
categories: ['All', 'Remainders']
nav_exclude: true
search_exclude: true
layout: default
---

# GateBossComponentsTemplate_Minor

**GUID:** `-222706317`

**Categories:** [All](/prefabs/All), [Remainders](/prefabs/Remainders)

## Components

- [ProjectM.Interactable](/components/Interactable)
  - `CurrentTargetSequenceGuid: SequenceGUID 0`
  - `IgnoreLineOfSight: False`
  - `IgnoreBlockInteract: False`
  - `UseInteractAbilityName: True`
  - `Disabled: False`

- [ProjectM.InteractedUpon](/components/InteractedUpon)
  - `Interacting: False`
  - `BlockBuildingMovement: False`
  - `BlockBuildingDisassemble: False`

- [ProjectM.FactionReference](/components/FactionReference)
  - `FactionGuid: ModifiablePrefabGUID PrefabGuid(-772044125)`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.VBloodUnit](/components/VBloodUnit)
  - `CanBeTracked: False`
  - `OverrideLockedVBloodUnit: GUID Not Found`
  - `UnlocksTrophyOnFeed: ProjectM.Trophy None`
  - `UnlocksTrophyOnFeedBrutal: ProjectM.Trophy None`
  - `LastNonExploitTime: 0`

- [ProjectM.EntityCategory](/components/EntityCategory)
  - `MainCategoryInt: 0`
  - `UnitCategoryInt: 11`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 0`
  - `ResourceLevel: 0`

- [ProjectM.ApplyBuffOnSpawn](/components/ApplyBuffOnSpawn)
  - `Kind: ProjectM.SpawnBuffKind Default`
  - `SpawnTime: 0`

- [ProjectM.UnitLevel](/components/UnitLevel)
  - `Level: 57`
  - `HideLevel: False`

- [ProjectM.UnitLevelServerData](/components/UnitLevelServerData)
  - `HealthUnitBaseStatsTypeInt: 1`
  - `UnitBaseStatsTypeInt: 1`

- [ProjectM.Sequencer.ImpactMaterial](/components/ImpactMaterial)
  - `IntType: 17`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0.5f)`
  - `PlayOnSelf: False`

- [ProjectM.Shared.DropTableOnDeath](/components/DropTableOnDeath)
  - `Dropped: False`
  - `CustomDropArc: GUID Not Found`
  - `MinRange: 0`
  - `MaxRange: 0`

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

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: -222706317`

- [ProjectM.InteractAbilityBuffer](/components/InteractAbilityBuffer)

- [ProjectM.CreateGameplayEventOnDeath](/components/CreateGameplayEventOnDeath)

- **[0]**
  - `EventId: Local - -683621876`
  - `DeathTarget: ProjectM.EventOnDeathTarget Self`
  - `EventTarget: ProjectM.GameplayEventTarget Self`
  - `SpellTarget: ProjectM.GameplayEventTarget Self`
  - `Reason: ProjectM.StatChangeReason Any`

- [ProjectM.ApplyBuffOnGameplayEvent](/components/ApplyBuffOnGameplayEvent)

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget EventTarget`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: Buff_RemoveAfterDuration_FadeOut_GateBoss PrefabGuid(-1322217295)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- [ProjectM.GameplayEventIdMapping](/components/GameplayEventIdMapping)

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -683621876`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **ProjectM.CrowdednessDropTableSettingsAsset+CrowdednessSetting**

- **[0]**
  - `DropChance: 1`

- **[1]**
  - `DropChance: 0.6`

- **[2]**
  - `DropChance: 0.45`

- **[3]**
  - `DropChance: 0.3`

- [ProjectM.SpawnBuffElement](/components/SpawnBuffElement)

- **[0]**
  - `Kind: ProjectM.SpawnBuffKind Default`
  - `Buff: Buff_General_Spawn_Unit_GateBoss_WarEvent PrefabGuid(-1232783422)`
  - `OriginPositionFactor: 0`
  - `Weight: 0`

- [ProjectM.GameplayEventListeners](/components/GameplayEventListeners)

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -683621876`

- [ProjectM.Shared.DropTableBuffer](/components/DropTableBuffer)

- **[0]**
  - `DropTableGuid: DT_Shared_Legendary_VBlood_GateBoss_Minor PrefabGuid(-1584910830)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnDeath`
  - `RelicType: ProjectM.Shared.RelicType None`

- [ProjectM.Shared.DropTable](/components/DropTable)

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner)
