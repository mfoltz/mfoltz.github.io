---
nav_exclude: true
search_exclude: true
---

# MapZoneDebugEnabled

```csharp
public struct MapZoneDebugEnabled
{
	static MapZoneDebugEnabled()
	{
		Il2CppClassPointerStore<MapZoneDebugEnabled>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "MapZoneDebugEnabled");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MapZoneDebugEnabled>.NativeClassPtr);
		MapZoneDebugEnabled.NativeFieldInfoPtr_DrawZones = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneDebugEnabled>.NativeClassPtr, "DrawZones");
		MapZoneDebugEnabled.NativeFieldInfoPtr_PrintPlayerZone = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneDebugEnabled>.NativeClassPtr, "PrintPlayerZone");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MapZoneDebugEnabled>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DrawZones;
	private static readonly IntPtr NativeFieldInfoPtr_PrintPlayerZone;

	public bool DrawZones;

	public bool PrintPlayerZone;
}
```
