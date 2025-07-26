---
nav_exclude: true
search_exclude: true
---

# CastleTerritoryManager

```csharp
public struct CastleTerritoryManager
{
	static CastleTerritoryManager()
	{
		Il2CppClassPointerStore<CastleTerritoryManager>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleTerritoryManager");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleTerritoryManager>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleTerritoryManager>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [CastleHeartStateUpdateSystem](/systems/server/CastleHeartStateUpdateSystem)

## Client Systems

- [MapMenuMapper](/systems/client/MapMenuMapper)
- [MiniMapHUDSystem](/systems/client/MiniMapHUDSystem)
- [UpdateRecommendedTerritoryMarkerSystems](/systems/client/UpdateRecommendedTerritoryMarkerSystems)
