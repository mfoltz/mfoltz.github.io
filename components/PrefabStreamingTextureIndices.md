---
nav_exclude: true
search_exclude: true
---

# PrefabStreamingTextureIndices

```csharp
public struct PrefabStreamingTextureIndices
{
	static PrefabStreamingTextureIndices()
	{
		Il2CppClassPointerStore<PrefabStreamingTextureIndices>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "PrefabStreamingTextureIndices");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PrefabStreamingTextureIndices>.NativeClassPtr);
		PrefabStreamingTextureIndices.NativeFieldInfoPtr_Index = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabStreamingTextureIndices>.NativeClassPtr, "Index");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PrefabStreamingTextureIndices>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Index;

	public int Index;
}
```

## Client Systems

- [TextureMipStreamingSystem](/systems/client/TextureMipStreamingSystem)
