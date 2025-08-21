---
title: AB_Illusion_Curse_Arc
guid: 218990010
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `218990010`

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
  - `BuffType: ProjectM.BuffType Replace`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: True`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Buff`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age]({{% relref "components/Age.md" %}})
  - `Value: 0`

- [ProjectM.BuffCategory]({{% relref "components/BuffCategory.md" %}})
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [ProjectM.LifeTime]({{% relref "components/LifeTime.md" %}})
  - `Duration: 0.2`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.LastTranslation]({{% relref "components/LastTranslation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Team]({{% relref "components/Team.md" %}})
  - `Value: 1`
  - `FactionIndex: -1`

- [Unity.Transforms.Rotation]({{% relref "components/Rotation.md" %}})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({{% relref "components/Translation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Gameplay.Scripting.AbilityProjectileFanOnGameplayEvent_DataServer]({{% relref "components/AbilityProjectileFanOnGameplayEvent_DataServer.md" %}})
  - `Angle: 55`
  - `OffsetAngle: -0.10471976`
  - `RandomOffset: 0`
  - `IndividualRandom: 0`
  - `NewProjectileEntity: AB_Illusion_Curse_Projectile PrefabGuid(-1625798509)`
  - `NewProjectileEntityAlternate: GUID Not Found`
  - `Count: 5`
  - `TickCount: 0`
  - `UseOwnerAimDirection: True`
  - `SetSpellTargetToSelf: False`
  - `SetSpellTargetToSelfSpellTarget: False`
  - `SetSpellTargetToBuffTarget: False`
  - `SetRandomTargetInRadiusToSpellTarget: 0`
  - `RandomTargetMaxHeightDiff: 3`
  - `RandomSpellTargetHitFilter: ProjectM.Scripting.HitFilter 0`
  - `BoostBuffType: GUID Not Found`
  - `BoostPerStackCount: 1`
  - `BoostPerStackAngle: 6`
  - `BoostPerStackPrefab1: GUID Not Found`
  - `BoostPerStackPrefab2: GUID Not Found`
  - `BoostPerStackPrefab3: GUID Not Found`
  - `OverrideProjectileSpeedMin: 0`
  - `OverrideProjectileSpeedMax: 0`

- [Unity.Transforms.LocalToWorld]({{% relref "components/LocalToWorld.md" %}})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({{% relref "components/LocalTransform.md" %}})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TeamReference]({{% relref "components/TeamReference.md" %}})
  - `Value: ModifiableEntity(0:0)`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 218990010`

- [ProjectM.CreateGameplayEventsOnSpawn]({{% relref "components/CreateGameplayEventsOnSpawn.md" %}})

- **[0]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget Owner`

- [ProjectM.GameplayEventIdMapping]({{% relref "components/GameplayEventIdMapping.md" %}})

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 373290447`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- [ProjectM.RunScriptOnGameplayEvent]({{% relref "components/RunScriptOnGameplayEvent.md" %}})

- **[0]**
  - `ScriptReference: ProjectM.ScriptMethodReference ProjectM.ScriptMethodReference`

- [ProjectM.GameplayEventListeners]({{% relref "components/GameplayEventListeners.md" %}})

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RunScript`
  - `GameplayEventId: Local - 373290447`

- [ProjectM.DestroyOnSpawn]({{% relref "components/DestroyOnSpawn.md" %}})

- [ProjectM.GetOwnerTeamOnSpawn]({{% relref "components/GetOwnerTeamOnSpawn.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})
