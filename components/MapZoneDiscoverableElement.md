---
nav_exclude: true
search_exclude: true
---

# MapZoneDiscoverableElement

```csharp
public struct MapZoneDiscoverableElement
{
	static MapZoneDiscoverableElement()
	{
		Il2CppClassPointerStore<MapZoneDiscoverableElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "MapZoneDiscoverableElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MapZoneDiscoverableElement>.NativeClassPtr);
		MapZoneDiscoverableElement.NativeFieldInfoPtr_Prefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneDiscoverableElement>.NativeClassPtr, "Prefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MapZoneDiscoverableElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Prefab;

	public PrefabGUID Prefab;
}
```

## Client Systems

- [MapZonePolygonUIMeshSystem](/systems/client/MapZonePolygonUIMeshSystem)
