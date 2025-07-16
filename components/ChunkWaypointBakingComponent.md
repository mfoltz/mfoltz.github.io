# ChunkWaypointBakingComponent

```csharp
[StructLayout(2)]
public struct ChunkWaypointBakingComponent
{
	static ChunkWaypointBakingComponent()
	{
		Il2CppClassPointerStore<ChunkWaypointBakingComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM", "ChunkWaypointBakingComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChunkWaypointBakingComponent>.NativeClassPtr);
		ChunkWaypointBakingComponent.NativeFieldInfoPtr_WaypointGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkWaypointBakingComponent>.NativeClassPtr, "WaypointGUID");
		ChunkWaypointBakingComponent.NativeFieldInfoPtr_LocalChunkTRS = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkWaypointBakingComponent>.NativeClassPtr, "LocalChunkTRS");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChunkWaypointBakingComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WaypointGUID;
	private static readonly IntPtr NativeFieldInfoPtr_LocalChunkTRS;
	[FieldOffset(0)]
	public PrefabGUID WaypointGUID;
	[FieldOffset(4)]
	public float4x4 LocalChunkTRS;
}
