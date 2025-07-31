---
title: ProxyPrefabSystem
nav_exclude: true
search_exclude: true
---

# ProxyPrefabSystem (Client)

### _SpawnQuery

- **All Components:**
  - [Unity.Transforms.LocalToWorld](/components/LocalToWorld)
  - ProjectM.ProxyPrefab
- **None Components:**
  - [ProjectM.Sequencer.GlobalParticleSystem](/components/GlobalParticleSystem)
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
  - [Unity.Entities.Disabled](/components/Disabled)

### _Query

- **All Components:**
  - [Unity.Transforms.LocalToWorld](/components/LocalToWorld)
  - [ProjectM.ProxyPrefabIndex](/components/ProxyPrefabIndex)
