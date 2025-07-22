---
nav_exclude: true
search_exclude: false
---

# ChunkRoadGraph

```csharp
public struct ChunkRoadGraph
{
	static ChunkRoadGraph()
	{
		Il2CppClassPointerStore<ChunkRoadGraph>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "ChunkRoadGraph");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChunkRoadGraph>.NativeClassPtr);
		ChunkRoadGraph.NativeFieldInfoPtr_Blob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkRoadGraph>.NativeClassPtr, "Blob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChunkRoadGraph>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Blob;

	public BlobAssetReference<ChunkRoadGraphBlob> Blob;
}
```
