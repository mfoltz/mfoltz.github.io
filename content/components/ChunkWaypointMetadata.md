---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ChunkWaypointMetadata
{
	static ChunkWaypointMetadata()
	{
		Il2CppClassPointerStore<ChunkWaypointMetadata>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ChunkWaypointMetadata");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChunkWaypointMetadata>.NativeClassPtr);
		ChunkWaypointMetadata.NativeFieldInfoPtr_WaypointGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkWaypointMetadata>.NativeClassPtr, "WaypointGUID");
		ChunkWaypointMetadata.NativeFieldInfoPtr_LocalChunkTRS = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkWaypointMetadata>.NativeClassPtr, "LocalChunkTRS");
		ChunkWaypointMetadata.NativeFieldInfoPtr_TransformIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkWaypointMetadata>.NativeClassPtr, "TransformIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChunkWaypointMetadata>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WaypointGUID;
	private static readonly IntPtr NativeFieldInfoPtr_LocalChunkTRS;
	private static readonly IntPtr NativeFieldInfoPtr_TransformIndex;

	public PrefabGUID WaypointGUID;

	public float4x4 LocalChunkTRS;

	public StaticTransformIndex TransformIndex;
}
```
