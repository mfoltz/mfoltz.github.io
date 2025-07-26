# TerrainChunkLoadedEvent

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public TerrainChunk ChunkCoordinate;
	[FieldOffset(4)]
	public Entity ChunkEntity;
}
