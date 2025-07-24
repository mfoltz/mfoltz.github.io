---
title: StormSpellSchoolAsset
guid: -829934972
categories: ['All', 'Storm']
nav_exclude: true
search_exclude: false
layout: default
---

# StormSpellSchoolAsset

**GUID:** `-829934972`

**Categories:** [All](/prefabs/All), [Storm](/prefabs/Storm)

## Components

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [NamePostfixGenerator](/components/NamePostfixGenerator){:target="_blank"}
  - `Length: 12`

- [NamePrefixGenerator](/components/NamePrefixGenerator){:target="_blank"}
  - `Length: 24`

- [Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -829934972`

- **ProjectM.SpellPointPassiveProgression**

- **[0]**
  - `BuffGuid: AscendancyPassive_Storm_T01_AttackSpeed PrefabGuid(1805361793)`

- **[1]**
  - `BuffGuid: AscendancyPassive_Storm_T02_MountSpeed PrefabGuid(399289260)`

- **[2]**
  - `BuffGuid: AscendancyPassive_Storm_T03_StormMastery PrefabGuid(-655574135)`

- [SpellSchoolAbility](/components/SpellSchoolAbility){:target="_blank"}

- **[0]**
  - `AbilityGroup: AB_Storm_Cyclone_AbilityGroup PrefabGuid(-356990326)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier1`
  - `MinDropLevel: 50`

- **[1]**
  - `AbilityGroup: AB_Storm_BallLightning_AbilityGroup PrefabGuid(1249925269)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier1`
  - `MinDropLevel: 50`

- **[2]**
  - `AbilityGroup: AB_Storm_Discharge_AbilityGroup PrefabGuid(1952703098)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier1`
  - `MinDropLevel: 50`

- **[3]**
  - `AbilityGroup: AB_Storm_PolarityShift_AbilityGroup PrefabGuid(-987810170)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier2`
  - `MinDropLevel: 50`

- **[4]**
  - `AbilityGroup: AB_Storm_LightningTendrils_AbilityGroup PrefabGuid(-1184139778)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier2`
  - `MinDropLevel: 50`

- **[5]**
  - `AbilityGroup: AB_Storm_LightningWall_AbilityGroup PrefabGuid(1071205195)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier2`
  - `MinDropLevel: 50`

- **[6]**
  - `AbilityGroup: AB_Storm_RagingTempest_AbilityGroup PrefabGuid(2111431121)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier3`
  - `MinDropLevel: 50`

- **[7]**
  - `AbilityGroup: AB_Storm_LightningTyphoon_AbilityGroup PrefabGuid(-914344112)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier3`
  - `MinDropLevel: 50`

- **[8]**
  - `AbilityGroup: AB_Vampire_VeilOfStorm_Group PrefabGuid(-84816111)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier4`
  - `MinDropLevel: 50`

- [SpellSchoolPassive](/components/SpellSchoolPassive){:target="_blank"}

- **[0]**
  - `Passive: SpellPassive_Storm_T01_LightningFastStrikes PrefabGuid(-1042692472)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier1`

- **[1]**
  - `Passive: SpellPassive_Storm_T02_EnhancedConductivity PrefabGuid(-395364978)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier2`

- **[2]**
  - `Passive: SpellPassive_Storm_T03_HungerForPower PrefabGuid(594395982)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier3`

- **[3]**
  - `Passive: SpellPassive_Storm_T04_TurbulentVelocity PrefabGuid(-1148833103)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier4`

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
