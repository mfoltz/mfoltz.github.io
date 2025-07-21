---
nav_exclude: true
search_exclude: false
---

# TerrainChunkMetadata

```csharp
public struct TerrainChunkMetadata
{
	static TerrainChunkMetadata()
	{
		Il2CppClassPointerStore<TerrainChunkMetadata>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "TerrainChunkMetadata");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainChunkMetadata>.NativeClassPtr);
		TerrainChunkMetadata.NativeFieldInfoPtr_Coordinate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkMetadata>.NativeClassPtr, "Coordinate");
		TerrainChunkMetadata.NativeFieldInfoPtr_SubSceneGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkMetadata>.NativeClassPtr, "SubSceneGUID");
		TerrainChunkMetadata.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkMetadata>.NativeClassPtr, "Rotation");
		TerrainChunkMetadata.NativeFieldInfoPtr_MapType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkMetadata>.NativeClassPtr, "MapType");
		TerrainChunkMetadata.NativeFieldInfoPtr_ChunkName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkMetadata>.NativeClassPtr, "ChunkName");
		TerrainChunkMetadata.NativeFieldInfoPtr_HasChunkPortals = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkMetadata>.NativeClassPtr, "HasChunkPortals");
		TerrainChunkMetadata.NativeFieldInfoPtr_HasSpawnPoints = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkMetadata>.NativeClassPtr, "HasSpawnPoints");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainChunkMetadata>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Coordinate;
	private static readonly IntPtr NativeFieldInfoPtr_SubSceneGUID;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;
	private static readonly IntPtr NativeFieldInfoPtr_MapType;
	private static readonly IntPtr NativeFieldInfoPtr_ChunkName;
	private static readonly IntPtr NativeFieldInfoPtr_HasChunkPortals;
	private static readonly IntPtr NativeFieldInfoPtr_HasSpawnPoints;

	public TerrainChunk Coordinate;

	public SubSceneGUID SubSceneGUID;

	public OrthogonalRotation Rotation;

	public MapType MapType;

	public FixedString128Bytes ChunkName;

	public bool HasChunkPortals;

	public bool HasSpawnPoints;
}
```

## Server Systems

- [TerrainManager](/systems/server/TerrainManager)
