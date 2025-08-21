---
nav_exclude: true
search_exclude: true
---

```csharp
public struct EntitiesGraphicsChunkInfo
{
	static EntitiesGraphicsChunkInfo()
	{
		Il2CppClassPointerStore<EntitiesGraphicsChunkInfo>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "EntitiesGraphicsChunkInfo");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EntitiesGraphicsChunkInfo>.NativeClassPtr);
		EntitiesGraphicsChunkInfo.NativeFieldInfoPtr_BatchIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntitiesGraphicsChunkInfo>.NativeClassPtr, "BatchIndex");
		EntitiesGraphicsChunkInfo.NativeFieldInfoPtr_ChunkTypesBegin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntitiesGraphicsChunkInfo>.NativeClassPtr, "ChunkTypesBegin");
		EntitiesGraphicsChunkInfo.NativeFieldInfoPtr_ChunkTypesEnd = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntitiesGraphicsChunkInfo>.NativeClassPtr, "ChunkTypesEnd");
		EntitiesGraphicsChunkInfo.NativeFieldInfoPtr_CullingData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntitiesGraphicsChunkInfo>.NativeClassPtr, "CullingData");
		EntitiesGraphicsChunkInfo.NativeFieldInfoPtr_Valid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntitiesGraphicsChunkInfo>.NativeClassPtr, "Valid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EntitiesGraphicsChunkInfo>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BatchIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ChunkTypesBegin;
	private static readonly IntPtr NativeFieldInfoPtr_ChunkTypesEnd;
	private static readonly IntPtr NativeFieldInfoPtr_CullingData;
	private static readonly IntPtr NativeFieldInfoPtr_Valid;

	public int BatchIndex;

	public int ChunkTypesBegin;

	public int ChunkTypesEnd;

	public EntitiesGraphicsChunkCullingData CullingData;

	public bool Valid;
}
```

## Client Systems

- [EntitiesGraphicsSystem]({{% relref "systems/client/EntitiesGraphicsSystem.md" %}})
- [UpdateHybridChunksStructure]({{% relref "systems/client/UpdateHybridChunksStructure.md" %}})
