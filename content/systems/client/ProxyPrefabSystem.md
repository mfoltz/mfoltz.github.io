---
title: ProxyPrefabSystem
nav_exclude: true
search_exclude: true
---

### _SpawnQuery

- **All Components:**
  - [Unity.Transforms.LocalToWorld]({{% relref "components/LocalToWorld.md" %}})
  - ProjectM.ProxyPrefab
- **None Components:**
  - [ProjectM.Sequencer.GlobalParticleSystem]({{% relref "components/GlobalParticleSystem.md" %}})
  - ProjectM.Presentation.InstantiatedProxyPrefab

### _RemoveModelQuery

- **All Components:**
  - ProjectM.Presentation.InstantiatedProxyPrefab
- **None Components:**
  - ProjectM.ProxyPrefab

### _RemoveDisabledModelQuery

- **All Components:**
  - ProjectM.ProxyPrefab
  - ProjectM.Presentation.InstantiatedProxyPrefab
  - [Unity.Entities.Disabled]({{% relref "components/Disabled.md" %}})

### _Query

- **All Components:**
  - [Unity.Transforms.LocalToWorld]({{% relref "components/LocalToWorld.md" %}})
  - [ProjectM.ProxyPrefabIndex]({{% relref "components/ProxyPrefabIndex.md" %}})
