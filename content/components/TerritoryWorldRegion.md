---
nav_exclude: true
search_exclude: true
---

# TerritoryWorldRegion

```csharp
public struct TerritoryWorldRegion
{
	static TerritoryWorldRegion()
	{
		Il2CppClassPointerStore<TerritoryWorldRegion>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "TerritoryWorldRegion");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerritoryWorldRegion>.NativeClassPtr);
		TerritoryWorldRegion.NativeFieldInfoPtr_Region = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerritoryWorldRegion>.NativeClassPtr, "Region");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerritoryWorldRegion>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Region;

	public WorldRegionType Region;
}
```

## Server Systems

- [ServerBootstrapSystem](/systems/server/ServerBootstrapSystem)
- [SetTerritoryWorldRegionSystem](/systems/server/SetTerritoryWorldRegionSystem)

## Client Systems

- [SetTerritoryWorldRegionSystem](/systems/client/SetTerritoryWorldRegionSystem)
