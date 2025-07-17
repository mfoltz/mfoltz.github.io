---
nav_exclude: true
search_exclude: true
---

# WaypointRegionPolygon

```csharp
public struct WaypointRegionPolygon
{
	static WaypointRegionPolygon()
	{
		Il2CppClassPointerStore<WaypointRegionPolygon>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "WaypointRegionPolygon");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WaypointRegionPolygon>.NativeClassPtr);
		WaypointRegionPolygon.NativeFieldInfoPtr_WaypointPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WaypointRegionPolygon>.NativeClassPtr, "WaypointPosition");
		WaypointRegionPolygon.NativeFieldInfoPtr_PolygonBounds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WaypointRegionPolygon>.NativeClassPtr, "PolygonBounds");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WaypointRegionPolygon>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WaypointPosition;
	private static readonly IntPtr NativeFieldInfoPtr_PolygonBounds;

	public float3 WaypointPosition;

	public Aabb PolygonBounds;
}
```
