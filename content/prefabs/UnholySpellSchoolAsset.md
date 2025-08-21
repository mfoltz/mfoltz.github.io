---
title: UnholySpellSchoolAsset
guid: 232985690
categories: ['All', 'Unholy']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `232985690`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Unholy]({{% relref "prefabs/Unholy.md" %}})

## Components

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.NamePostfixGenerator]({{% relref "components/NamePostfixGenerator.md" %}})
  - `Length: 10`

- [ProjectM.NamePrefixGenerator]({{% relref "components/NamePrefixGenerator.md" %}})
  - `Length: 29`

- [Unity.Transforms.Rotation]({{% relref "components/Rotation.md" %}})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({{% relref "components/Translation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld]({{% relref "components/LocalToWorld.md" %}})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({{% relref "components/LocalTransform.md" %}})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 232985690`

- **ProjectM.SpellPointPassiveProgression**

- **[0]**
  - `BuffGuid: AscendancyPassive_Unholy_T01_HealthRegen PrefabGuid(-2030466757)`

- **[1]**
  - `BuffGuid: AscendancyPassive_Unholy_T02_FeedCooldown PrefabGuid(1178142107)`

- **[2]**
  - `BuffGuid: AscendancyPassive_Unholy_T03_SkeletonMastery PrefabGuid(-392743276)`

- [ProjectM.SpellSchoolAbility]({{% relref "components/SpellSchoolAbility.md" %}})

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

- [ProjectM.SpellSchoolPassive]({{% relref "components/SpellSchoolPassive.md" %}})

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

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
