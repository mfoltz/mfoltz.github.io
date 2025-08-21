---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ParentTerrain
{
	static ParentTerrain()
	{
		Il2CppClassPointerStore<ParentTerrain>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "ParentTerrain");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ParentTerrain>.NativeClassPtr);
		ParentTerrain.NativeFieldInfoPtr_ChunkEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ParentTerrain>.NativeClassPtr, "ChunkEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ParentTerrain>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ChunkEntity;

	public Entity ChunkEntity;
}
```
