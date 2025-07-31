---
title: ServantMissionSettings
guid: -1830466155
categories: ['All', 'Servant']
nav_exclude: true
search_exclude: true
layout: default
---

# ServantMissionSettings

**GUID:** `-1830466155`

**Categories:** [All](/prefabs/All), [Servant](/prefabs/Servant)

## Components

- **ProjectM.ServantMissionSettingsSingleton isn't handled**

- [ProjectM.SingletonPrefab](/components/SingletonPrefab)
  - `AutomaticInstantiation: True`
  - `OverrideExisting: False`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

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
  - `_Value: -1830466155`

- [ProjectM.ServantMissionSetting](/components/ServantMissionSetting)

- **[0]**
  - `RaidStability: ProjectM.RaidStability Reckless`
  - `SuccessRateBonus: 0`
  - `MissionLength: 7200`
  - `InjuryChance: 0.25`
  - `LootFactor: 0.5`

- **[1]**
  - `RaidStability: ProjectM.RaidStability Reckless`
  - `SuccessRateBonus: 0.05`
  - `MissionLength: 14400`
  - `InjuryChance: 0.25`
  - `LootFactor: 0.75`

- **[2]**
  - `RaidStability: ProjectM.RaidStability Normal`
  - `SuccessRateBonus: 0.1`
  - `MissionLength: 23400`
  - `InjuryChance: 0.2`
  - `LootFactor: 1`

- **[3]**
  - `RaidStability: ProjectM.RaidStability Prepared`
  - `SuccessRateBonus: 0.15`
  - `MissionLength: 36000`
  - `InjuryChance: 0.15`
  - `LootFactor: 1.25`

- **[4]**
  - `RaidStability: ProjectM.RaidStability Prepared`
  - `SuccessRateBonus: 0.2`
  - `MissionLength: 57600`
  - `InjuryChance: 0.15`
  - `LootFactor: 1.5`

- [ProjectM.ServantInjuredChance](/components/ServantInjuredChance)

- **[0]**
  - `Injured_Weight: 100`
  - `Injured_Time: 1800`
  - `Injured_Type: ServantInjury_Fight PrefabGuid(1951642705)`

- **[1]**
  - `Injured_Weight: 100`
  - `Injured_Time: 1800`
  - `Injured_Type: ServantInjury_Farmer PrefabGuid(-351784592)`

- **[2]**
  - `Injured_Weight: 100`
  - `Injured_Time: 1800`
  - `Injured_Type: ServantInjury_ExposedToHolyWater PrefabGuid(186809177)`

- **[3]**
  - `Injured_Weight: 100`
  - `Injured_Time: 1800`
  - `Injured_Type: ServantInjury_Garlic PrefabGuid(1747602415)`

- **[4]**
  - `Injured_Weight: 80`
  - `Injured_Time: 3600`
  - `Injured_Type: ServantInjury_SunBurned PrefabGuid(685584511)`

- **[5]**
  - `Injured_Weight: 80`
  - `Injured_Time: 3600`
  - `Injured_Type: ServantInjury_Fire PrefabGuid(156962313)`

- **[6]**
  - `Injured_Weight: 80`
  - `Injured_Time: 3600`
  - `Injured_Type: ServantInjury_BloodLoss PrefabGuid(-2075488993)`

- **[7]**
  - `Injured_Weight: 80`
  - `Injured_Time: 3600`
  - `Injured_Type: ServantInjury_Ratform PrefabGuid(-1304230302)`

- **[8]**
  - `Injured_Weight: 50`
  - `Injured_Time: 5400`
  - `Injured_Type: ServantInjury_Cross PrefabGuid(935529743)`

- **[9]**
  - `Injured_Weight: 50`
  - `Injured_Time: 5400`
  - `Injured_Type: ServantInjury_SilverArrow PrefabGuid(1612634118)`

- **[10]**
  - `Injured_Weight: 50`
  - `Injured_Time: 5400`
  - `Injured_Type: ServantInjury_StabbedByStake PrefabGuid(-421754319)`

- **[11]**
  - `Injured_Weight: 20`
  - `Injured_Time: 7200`
  - `Injured_Type: ServantInjury_VampireHunter PrefabGuid(1092922249)`

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)
