---
nav_exclude: true
search_exclude: true
---

```csharp
public struct TerrainChunkLoadedEvent
{
	static TerrainChunkLoadedEvent()
	{
		Il2CppClassPointerStore<TerrainChunkLoadedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "TerrainChunkLoadedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainChunkLoadedEvent>.NativeClassPtr);
		TerrainChunkLoadedEvent.NativeFieldInfoPtr_ChunkCoordinate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkLoadedEvent>.NativeClassPtr, "ChunkCoordinate");
		TerrainChunkLoadedEvent.NativeFieldInfoPtr_ChunkEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkLoadedEvent>.NativeClassPtr, "ChunkEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainChunkLoadedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ChunkCoordinate;
	private static readonly IntPtr NativeFieldInfoPtr_ChunkEntity;

	public TerrainChunk ChunkCoordinate;

	public Entity ChunkEntity;
}
```

## Server Systems

- [CastleEventsOnChunkLoadedSystem]({{% relref "systems/server/CastleEventsOnChunkLoadedSystem.md" %}})
- [ChunkDataRemappingManager]({{% relref "systems/server/ChunkDataRemappingManager.md" %}})
- [ChunkObjectManager]({{% relref "systems/server/ChunkObjectManager.md" %}})

## Client Systems

- [CastleEventsOnChunkLoadedSystem]({{% relref "systems/client/CastleEventsOnChunkLoadedSystem.md" %}})
- [ChunkDataRemappingManager]({{% relref "systems/client/ChunkDataRemappingManager.md" %}})
- [DeserializeStaticTransformSystem]({{% relref "systems/client/DeserializeStaticTransformSystem.md" %}})
- [SetupSurfaceSystem]({{% relref "systems/client/SetupSurfaceSystem.md" %}})
