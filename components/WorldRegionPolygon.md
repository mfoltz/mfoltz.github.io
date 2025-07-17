---
nav_exclude: true
search_exclude: true
---

# WorldRegionPolygon

```csharp
[StructLayout(2)]
public struct WorldRegionPolygon
{
	static WorldRegionPolygon()
	{
		Il2CppClassPointerStore<WorldRegionPolygon>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "WorldRegionPolygon");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorldRegionPolygon>.NativeClassPtr);
		WorldRegionPolygon.NativeFieldInfoPtr_WorldRegion = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldRegionPolygon>.NativeClassPtr, "WorldRegion");
		WorldRegionPolygon.NativeFieldInfoPtr_PolygonBounds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldRegionPolygon>.NativeClassPtr, "PolygonBounds");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorldRegionPolygon>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WorldRegion;
	private static readonly IntPtr NativeFieldInfoPtr_PolygonBounds;
	[FieldOffset(0)]
	public WorldRegionType WorldRegion;
	[FieldOffset(4)]
	public Aabb PolygonBounds;
}
