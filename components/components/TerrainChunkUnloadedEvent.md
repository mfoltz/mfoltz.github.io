---
nav_exclude: true
search_exclude: true
---

# TerrainChunkUnloadedEvent

```csharp
[StructLayout(2)]
public struct TerrainChunkUnloadedEvent
{
	static TerrainChunkUnloadedEvent()
	{
		Il2CppClassPointerStore<TerrainChunkUnloadedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "TerrainChunkUnloadedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainChunkUnloadedEvent>.NativeClassPtr);
		TerrainChunkUnloadedEvent.NativeFieldInfoPtr_ChunkCoordinate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkUnloadedEvent>.NativeClassPtr, "ChunkCoordinate");
		TerrainChunkUnloadedEvent.NativeFieldInfoPtr_UnregisteredEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkUnloadedEvent>.NativeClassPtr, "UnregisteredEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainChunkUnloadedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ChunkCoordinate;
	private static readonly IntPtr NativeFieldInfoPtr_UnregisteredEntity;
	[FieldOffset(0)]
	public TerrainChunk ChunkCoordinate;
	[FieldOffset(4)]
	public Entity UnregisteredEntity;
}
