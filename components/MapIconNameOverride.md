---
nav_exclude: true
search_exclude: false
---

# MapIconNameOverride

```csharp
public struct MapIconNameOverride
{
	static MapIconNameOverride()
	{
		Il2CppClassPointerStore<MapIconNameOverride>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "MapIconNameOverride");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MapIconNameOverride>.NativeClassPtr);
		MapIconNameOverride.NativeFieldInfoPtr_FromName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapIconNameOverride>.NativeClassPtr, "FromName");
		MapIconNameOverride.NativeFieldInfoPtr_ToName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapIconNameOverride>.NativeClassPtr, "ToName");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MapIconNameOverride>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FromName;
	private static readonly IntPtr NativeFieldInfoPtr_ToName;

	public LocalizationKey FromName;

	public LocalizationKey ToName;
}
```
