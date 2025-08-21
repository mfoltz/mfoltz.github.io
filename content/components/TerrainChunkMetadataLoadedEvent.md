---
nav_exclude: true
search_exclude: true
---

```csharp
public struct TerrainChunkMetadataLoadedEvent
{
	static TerrainChunkMetadataLoadedEvent()
	{
		Il2CppClassPointerStore<TerrainChunkMetadataLoadedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "TerrainChunkMetadataLoadedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainChunkMetadataLoadedEvent>.NativeClassPtr);
		TerrainChunkMetadataLoadedEvent.NativeFieldInfoPtr_TerrainChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkMetadataLoadedEvent>.NativeClassPtr, "TerrainChunk");
		TerrainChunkMetadataLoadedEvent.NativeFieldInfoPtr_MetadataEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkMetadataLoadedEvent>.NativeClassPtr, "MetadataEntity");
		TerrainChunkMetadataLoadedEvent.NativeFieldInfoPtr_SceneMetadataEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkMetadataLoadedEvent>.NativeClassPtr, "SceneMetadataEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainChunkMetadataLoadedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TerrainChunk;
	private static readonly IntPtr NativeFieldInfoPtr_MetadataEntity;
	private static readonly IntPtr NativeFieldInfoPtr_SceneMetadataEntity;

	public TerrainChunk TerrainChunk;

	public Entity MetadataEntity;

	public Entity SceneMetadataEntity;
}
```

## Server Systems

- [ChunkMapZoneSpawnOnLoad]({{% relref "systems/server/ChunkMapZoneSpawnOnLoad.md" %}})

## Client Systems

- [ChunkMapZoneSpawnOnLoad]({{% relref "systems/client/ChunkMapZoneSpawnOnLoad.md" %}})
