---
nav_exclude: true
search_exclude: true
---

# BlocksetSingleton

```csharp
[StructLayout(2)]
public struct BlocksetSingleton
{
	static BlocksetSingleton()
	{
		Il2CppClassPointerStore<BlocksetSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "BlocksetSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BlocksetSingleton>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BlocksetSingleton>.NativeClassPtr, ref this));
	}
}
