---
nav_exclude: true
search_exclude: false
---

# SubSceneStreamingTextureIndices

```csharp
public struct SubSceneStreamingTextureIndices
{
	static SubSceneStreamingTextureIndices()
	{
		Il2CppClassPointerStore<SubSceneStreamingTextureIndices>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "SubSceneStreamingTextureIndices");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SubSceneStreamingTextureIndices>.NativeClassPtr);
		SubSceneStreamingTextureIndices.NativeFieldInfoPtr_Index = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SubSceneStreamingTextureIndices>.NativeClassPtr, "Index");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SubSceneStreamingTextureIndices>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Index;

	public int Index;
}
```

## Client Systems

- [TextureMipStreamingSystem](/systems/client/TextureMipStreamingSystem)
