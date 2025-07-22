---
nav_exclude: true
search_exclude: true
---

# EditorSpawnChunk

```csharp
public struct EditorSpawnChunk
{
	static EditorSpawnChunk()
	{
		Il2CppClassPointerStore<EditorSpawnChunk>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "EditorSpawnChunk");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EditorSpawnChunk>.NativeClassPtr);
		EditorSpawnChunk.NativeFieldInfoPtr_ChunkCoordinate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorSpawnChunk>.NativeClassPtr, "ChunkCoordinate");
		EditorSpawnChunk.NativeFieldInfoPtr_ChunkGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorSpawnChunk>.NativeClassPtr, "ChunkGuid");
		EditorSpawnChunk.NativeFieldInfoPtr_ChunkHasSpawnPoints = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorSpawnChunk>.NativeClassPtr, "ChunkHasSpawnPoints");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EditorSpawnChunk>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ChunkCoordinate;
	private static readonly IntPtr NativeFieldInfoPtr_ChunkGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ChunkHasSpawnPoints;

	public TerrainChunk ChunkCoordinate;

	public SubSceneGUID ChunkGuid;

	public bool ChunkHasSpawnPoints;
}
```
