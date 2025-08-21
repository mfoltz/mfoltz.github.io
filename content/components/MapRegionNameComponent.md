---
nav_exclude: true
search_exclude: true
---

```csharp
public struct MapRegionNameComponent
{
	static MapRegionNameComponent()
	{
		Il2CppClassPointerStore<MapRegionNameComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "MapRegionNameComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MapRegionNameComponent>.NativeClassPtr);
		MapRegionNameComponent.NativeFieldInfoPtr_NameKey = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapRegionNameComponent>.NativeClassPtr, "NameKey");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MapRegionNameComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NameKey;

	public LocalizationKey NameKey;
}
```
