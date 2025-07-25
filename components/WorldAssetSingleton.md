---
nav_exclude: true
search_exclude: true
---

# WorldAssetSingleton

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

- [CastleTerritoryHeightsSystem](/systems/server/CastleTerritoryHeightsSystem)
- [ChunkDataRemappingManager_SetupMapIconRemappings](/systems/server/ChunkDataRemappingManager_SetupMapIconRemappings)
- [ServerBootstrapSystem](/systems/server/ServerBootstrapSystem)
- [WorldInitializationSystem](/systems/server/WorldInitializationSystem)

## Client Systems

- [CastleTerritoryHeightsSystem](/systems/client/CastleTerritoryHeightsSystem)
- [ChunkDataRemappingManager_SetupMapIconRemappings](/systems/client/ChunkDataRemappingManager_SetupMapIconRemappings)
- [WorldInitializationSystem](/systems/client/WorldInitializationSystem)
