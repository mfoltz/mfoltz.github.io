---
nav_exclude: true
search_exclude: true
---

```csharp
public struct TerrainPrefabInstance
{
	static TerrainPrefabInstance()
	{
		Il2CppClassPointerStore<TerrainPrefabInstance>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "TerrainPrefabInstance");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainPrefabInstance>.NativeClassPtr);
		TerrainPrefabInstance.NativeFieldInfoPtr_PrefabEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainPrefabInstance>.NativeClassPtr, "PrefabEntity");
		TerrainPrefabInstance.NativeFieldInfoPtr_Version = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainPrefabInstance>.NativeClassPtr, "Version");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainPrefabInstance>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Version;

	public Entity PrefabEntity;

	public int Version;
}
```
