---
nav_exclude: true
search_exclude: true
---

# BrushedCoordinate

```csharp
public struct BrushedCoordinate
{
	static BrushedCoordinate()
	{
		Il2CppClassPointerStore<BrushedCoordinate>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "BrushedCoordinate");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BrushedCoordinate>.NativeClassPtr);
		BrushedCoordinate.NativeFieldInfoPtr_Coordinate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BrushedCoordinate>.NativeClassPtr, "Coordinate");
		BrushedCoordinate.NativeFieldInfoPtr_Strength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BrushedCoordinate>.NativeClassPtr, "Strength");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BrushedCoordinate>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Coordinate;
	private static readonly IntPtr NativeFieldInfoPtr_Strength;

	public TerrainCoordinate Coordinate;

	public float Strength;
}
```
