---
nav_exclude: true
search_exclude: true
---

# TerrainBlockInstanceBuffer

```csharp
public struct TerrainBlockInstanceBuffer
{
	static TerrainBlockInstanceBuffer()
	{
		Il2CppClassPointerStore<TerrainBlockInstanceBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "TerrainBlockInstanceBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainBlockInstanceBuffer>.NativeClassPtr);
		TerrainBlockInstanceBuffer.NativeFieldInfoPtr_BlockInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainBlockInstanceBuffer>.NativeClassPtr, "BlockInstance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainBlockInstanceBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BlockInstance;

	public Entity BlockInstance;
}
```
