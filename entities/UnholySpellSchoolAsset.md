---
title: UnholySpellSchoolAsset
guid: 232985690
categories: ['All', 'Unholy']
nav_exclude: true
search_exclude: true
layout: default
---

# UnholySpellSchoolAsset

**GUID:** `232985690`

**Categories:** [All](/prefabs/All), [Unholy](/prefabs/Unholy)

## Components

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.NamePostfixGenerator](/components/NamePostfixGenerator){:target="_blank"}
  - `Length: 10`

- [ProjectM.NamePrefixGenerator](/components/NamePrefixGenerator){:target="_blank"}
  - `Length: 29`

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
  - `_Value: 232985690`

- **ProjectM.SpellPointPassiveProgression**

- **[0]**
  - `BuffGuid: AscendancyPassive_Unholy_T01_HealthRegen PrefabGuid(-2030466757)`

- **[1]**
  - `BuffGuid: AscendancyPassive_Unholy_T02_FeedCooldown PrefabGuid(1178142107)`

- **[2]**
  - `BuffGuid: AscendancyPassive_Unholy_T03_SkeletonMastery PrefabGuid(-392743276)`

- [ProjectM.SpellSchoolAbility](/components/SpellSchoolAbility){:target="_blank"}

- **[0]**
  - `AbilityGroup: AB_Unholy_CorruptedSkull_AbilityGroup PrefabGuid(-1204819086)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier1`
  - `MinDropLevel: 0`

- **[1]**
  - `AbilityGroup: AB_Unholy_CorpseExplosion_AbilityGroup PrefabGuid(481411985)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier1`
  - `MinDropLevel: 0`

- **[2]**
  - `AbilityGroup: AB_Unholy_WardOfTheDamned_AbilityGroup PrefabGuid(-1136860480)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier1`
  - `MinDropLevel: 0`

- **[3]**
  - `AbilityGroup: AB_Unholy_DeathKnight_AbilityGroup PrefabGuid(1961570821)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier2`
  - `MinDropLevel: 0`

- **[4]**
  - `AbilityGroup: AB_Unholy_ChainsOfDeath_AbilityGroup PrefabGuid(-1845982676)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier2`
  - `MinDropLevel: 0`

- **[5]**
  - `AbilityGroup: AB_Unholy_Soulburn_AbilityGroup PrefabGuid(2138402840)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier2`
  - `MinDropLevel: 0`

- **[6]**
  - `AbilityGroup: AB_Unholy_ArmyOfTheDead_AbilityGroup PrefabGuid(-1781779733)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier3`
  - `MinDropLevel: 0`

- **[7]**
  - `AbilityGroup: AB_Unholy_UnstableArachnid_AbilityGroup PrefabGuid(-859352730)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier3`
  - `MinDropLevel: 0`

- **[8]**
  - `AbilityGroup: AB_Vampire_VeilOfBones_AbilityGroup PrefabGuid(-498302954)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier4`
  - `MinDropLevel: 0`

- [ProjectM.SpellSchoolPassive](/components/SpellSchoolPassive){:target="_blank"}

- **[0]**
  - `Passive: SpellPassive_Unholy_T01_ArcaneAnimator PrefabGuid(-539962543)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier1`

- **[1]**
  - `Passive: SpellPassive_Unholy_T02_SoulDrinker PrefabGuid(-1612317745)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier2`

- **[2]**
  - `Passive: SpellPassive_Unholy_T03_LethalStrikes PrefabGuid(-2124258403)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier3`

- **[3]**
  - `Passive: SpellPassive_Unholy_T04_EmbraceMayhem PrefabGuid(422612021)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier4`

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
