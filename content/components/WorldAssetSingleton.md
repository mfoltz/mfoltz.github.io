---
nav_exclude: true
search_exclude: true
---

```csharp
public struct WorldAssetSingleton
{
	static WorldAssetSingleton()
	{
		Il2CppClassPointerStore<WorldAssetSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "WorldAssetSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorldAssetSingleton>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorldAssetSingleton>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [CastleTerritoryHeightsSystem]({{% relref "systems/server/CastleTerritoryHeightsSystem.md" %}})
- [ChunkDataRemappingManager_SetupMapIconRemappings]({{% relref "systems/server/ChunkDataRemappingManager_SetupMapIconRemappings.md" %}})
- [ServerBootstrapSystem]({{% relref "systems/server/ServerBootstrapSystem.md" %}})
- [WorldInitializationSystem]({{% relref "systems/server/WorldInitializationSystem.md" %}})

## Client Systems

- [CastleTerritoryHeightsSystem]({{% relref "systems/client/CastleTerritoryHeightsSystem.md" %}})
- [ChunkDataRemappingManager_SetupMapIconRemappings]({{% relref "systems/client/ChunkDataRemappingManager_SetupMapIconRemappings.md" %}})
- [WorldInitializationSystem]({{% relref "systems/client/WorldInitializationSystem.md" %}})
