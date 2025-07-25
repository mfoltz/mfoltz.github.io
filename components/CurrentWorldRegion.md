---
nav_exclude: true
search_exclude: true
---

# CurrentWorldRegion

```csharp
public struct CurrentWorldRegion
{
	static CurrentWorldRegion()
	{
		Il2CppClassPointerStore<CurrentWorldRegion>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "CurrentWorldRegion");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CurrentWorldRegion>.NativeClassPtr);
		CurrentWorldRegion.NativeFieldInfoPtr_CurrentRegion = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CurrentWorldRegion>.NativeClassPtr, "CurrentRegion");
		CurrentWorldRegion.NativeFieldInfoPtr_LastValidRegion = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CurrentWorldRegion>.NativeClassPtr, "LastValidRegion");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CurrentWorldRegion>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CurrentRegion;
	private static readonly IntPtr NativeFieldInfoPtr_LastValidRegion;

	public WorldRegionType CurrentRegion;

	public WorldRegionType LastValidRegion;
}
```

## Server Systems

- [ServerBootstrapSystem](/systems/server/ServerBootstrapSystem)
