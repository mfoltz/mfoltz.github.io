---
title: AB_Consumable_Bottle_EmptyWaterskin_Activate
guid: 1930734244
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Consumable_Bottle_EmptyWaterskin_Activate

**GUID:** `1930734244`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [ProjectM.Attach](/components/Attach)
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner](/components/EntityOwner)
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator)
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff](/components/Buff)
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

- [ProjectM.GetOwnerRotation](/components/GetOwnerRotation)
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

- [ProjectM.GetTranslationOnSpawn](/components/GetTranslationOnSpawn)
  - `TranslationSource: ProjectM.GetTranslationSource Owner`
  - `SnapToGround: False`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age](/components/Age)
  - `Value: 0`

- [ProjectM.LifeTime](/components/LifeTime)
  - `Duration: 0.01`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.ManualFirstFrameLastTranslation](/components/ManualFirstFrameLastTranslation)
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- [ProjectM.Team](/components/Team)
  - `Value: 1`
  - `FactionIndex: -1`

- [Unity.Transforms.Rotation](/components/Rotation)
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation)
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Gameplay.Scripting.Script_Convert_Item_OnConsume_DataServer](/components/Script_Convert_Item_OnConsume_DataServer)
  - `PlacementCheckPrefab: Liquid_TileModelPlacementRules PrefabGuid(-18625159)`
  - `InputType: Item_Consumable_EmptyWaterskin PrefabGuid(-810738866)`
  - `ConvertSequence: SequenceGUID 655046778`
  - `FailedConvertSequence: SequenceGUID 1137637168`
  - `HandleConsumableStack: False`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld)
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform)
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TeamReference](/components/TeamReference)
  - `Value: ModifiableEntity(0:0)`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: 1930734244`

- [ProjectM.Gameplay.Scripting.Script_Convert_Item_OnConsume_Entry](/components/Script_Convert_Item_OnConsume_Entry)

- **[0]**
  - `OutputType: Item_Consumable_Waterskin_Water_T01 PrefabGuid(-1322000172)`
  - `PlacementType: ProjectM.Tiles.PlacementTypeData [Water|]`

- [ProjectM.DestroyOnSpawn](/components/DestroyOnSpawn)

- [ProjectM.GetOwnerRotationOnlyOnSpawnTag](/components/GetOwnerRotationOnlyOnSpawnTag)

- [ProjectM.GetOwnerTeamOnSpawn](/components/GetOwnerTeamOnSpawn)

- [ProjectM.Scripting.ScriptSpawn](/components/ScriptSpawn)

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)
