# LoadTerrainChunkRequest

```csharp
[StructLayout(2)]
public struct LoadTerrainChunkRequest
{
	static LoadTerrainChunkRequest()
	{
		Il2CppClassPointerStore<LoadTerrainChunkRequest>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "LoadTerrainChunkRequest");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LoadTerrainChunkRequest>.NativeClassPtr);
		LoadTerrainChunkRequest.NativeFieldInfoPtr_ChunkCoordinate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadTerrainChunkRequest>.NativeClassPtr, "ChunkCoordinate");
		LoadTerrainChunkRequest.NativeFieldInfoPtr_SubSceneGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadTerrainChunkRequest>.NativeClassPtr, "SubSceneGUID");
		LoadTerrainChunkRequest.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadTerrainChunkRequest>.NativeClassPtr, "Rotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LoadTerrainChunkRequest>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ChunkCoordinate;
	private static readonly IntPtr NativeFieldInfoPtr_SubSceneGUID;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;
	[FieldOffset(0)]
	public TerrainChunk ChunkCoordinate;
	[FieldOffset(4)]
	public SubSceneGUID SubSceneGUID;
	[FieldOffset(20)]
	public OrthogonalRotation Rotation;
}
