---
title: BloodSpellSchoolAsset
guid: 969332277
categories: ['All', 'Blood']
nav_exclude: true
search_exclude: true
layout: default
---

# BloodSpellSchoolAsset

**GUID:** `969332277`

**Categories:** [All](/prefabs/All), [Blood](/prefabs/Blood)

## Components

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.NamePostfixGenerator](/components/NamePostfixGenerator){:target="_blank"}
  - `Length: 7`

- [ProjectM.NamePrefixGenerator](/components/NamePrefixGenerator){:target="_blank"}
  - `Length: 25`

- [Unity.Transforms.Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 969332277`

- **ProjectM.SpellPointPassiveProgression**

- **[0]**
  - `BuffGuid: AscendancyPassive_Blood_T01_BloodMend PrefabGuid(254413498)`

- **[1]**
  - `BuffGuid: AscendancyPassive_Blood_T02_BloodDrain PrefabGuid(762152014)`

- **[2]**
  - `BuffGuid: AscendancyPassive_Blood_T03_LeechMastery PrefabGuid(980613835)`

- [ProjectM.SpellSchoolAbility](/components/SpellSchoolAbility){:target="_blank"}

- **[0]**
  - `AbilityGroup: AB_Blood_Shadowbolt_AbilityGroup PrefabGuid(-880131926)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier1`
  - `MinDropLevel: 0`

- **[1]**
  - `AbilityGroup: AB_Blood_BloodRage_AbilityGroup PrefabGuid(651613264)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier1`
  - `MinDropLevel: 0`

- **[2]**
  - `AbilityGroup: AB_Blood_BloodRite_AbilityGroup PrefabGuid(1191439206)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier1`
  - `MinDropLevel: 0`

- **[3]**
  - `AbilityGroup: AB_Blood_BloodFountain_AbilityGroup PrefabGuid(2067760264)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier2`
  - `MinDropLevel: 0`

- **[4]**
  - `AbilityGroup: AB_Blood_CarrionSwarm_AbilityGroup PrefabGuid(-1380116221)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier2`
  - `MinDropLevel: 0`

- **[5]**
  - `AbilityGroup: AB_Blood_SanguineCoil_AbilityGroup PrefabGuid(189403977)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier2`
  - `MinDropLevel: 0`

- **[6]**
  - `AbilityGroup: AB_Blood_CrimsonBeam_AbilityGroup PrefabGuid(375131842)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier3`
  - `MinDropLevel: 0`

- **[7]**
  - `AbilityGroup: AB_Blood_HeartStrike_AbilityGroup PrefabGuid(-1432604486)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier3`
  - `MinDropLevel: 0`

- **[8]**
  - `AbilityGroup: AB_Vampire_VeilOfBlood_Group PrefabGuid(305230608)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier4`
  - `MinDropLevel: 0`

- [ProjectM.SpellSchoolPassive](/components/SpellSchoolPassive){:target="_blank"}

- **[0]**
  - `Passive: SpellPassive_Blood_T01_BloodSpray PrefabGuid(-1027845865)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier1`

- **[1]**
  - `Passive: SpellPassive_Blood_T02_BloodTypeEfficiency PrefabGuid(-441009092)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier2`

- **[2]**
  - `Passive: SpellPassive_Blood_T03_VBloodSlayer PrefabGuid(896859617)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier3`

- **[3]**
  - `Passive: SpellPassive_Blood_T04_Rampage PrefabGuid(596456522)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier4`

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
