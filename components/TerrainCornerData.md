---
nav_exclude: true
search_exclude: false
---

# TerrainCornerData

```csharp
public struct TerrainCornerData
{
	static TerrainCornerData()
	{
		Il2CppClassPointerStore<TerrainCornerData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "TerrainCornerData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainCornerData>.NativeClassPtr);
		TerrainCornerData.NativeFieldInfoPtr_IsLocked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainCornerData>.NativeClassPtr, "IsLocked");
		TerrainCornerData.NativeFieldInfoPtr_CornerType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainCornerData>.NativeClassPtr, "CornerType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainCornerData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IsLocked;
	private static readonly IntPtr NativeFieldInfoPtr_CornerType;

	public bool IsLocked;

	public ushort CornerType;
}
```
