---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ProcessChunkTask
{
	static ProcessChunkTask()
	{
		Il2CppClassPointerStore<ProcessChunkTask>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "ProcessChunkTask");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProcessChunkTask>.NativeClassPtr);
		ProcessChunkTask.NativeFieldInfoPtr_WorldTransformationMatrix = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProcessChunkTask>.NativeClassPtr, "WorldTransformationMatrix");
		ProcessChunkTask.NativeFieldInfoPtr_LocalTransformationMatrix = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProcessChunkTask>.NativeClassPtr, "LocalTransformationMatrix");
		ProcessChunkTask.NativeFieldInfoPtr_TerrainChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProcessChunkTask>.NativeClassPtr, "TerrainChunk");
		ProcessChunkTask.NativeFieldInfoPtr_ChunkWorldBounds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProcessChunkTask>.NativeClassPtr, "ChunkWorldBounds");
		ProcessChunkTask.NativeFieldInfoPtr_TerrainEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProcessChunkTask>.NativeClassPtr, "TerrainEntity");
		ProcessChunkTask.NativeFieldInfoPtr_ChunkRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProcessChunkTask>.NativeClassPtr, "ChunkRotation");
		ProcessChunkTask.NativeFieldInfoPtr_WorldTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProcessChunkTask>.NativeClassPtr, "WorldTarget");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProcessChunkTask>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WorldTransformationMatrix;
	private static readonly IntPtr NativeFieldInfoPtr_LocalTransformationMatrix;
	private static readonly IntPtr NativeFieldInfoPtr_TerrainChunk;
	private static readonly IntPtr NativeFieldInfoPtr_ChunkWorldBounds;
	private static readonly IntPtr NativeFieldInfoPtr_TerrainEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ChunkRotation;
	private static readonly IntPtr NativeFieldInfoPtr_WorldTarget;

	public float4x4 WorldTransformationMatrix;

	public float4x4 LocalTransformationMatrix;

	public TerrainChunk TerrainChunk;

	public BoundsMinMax ChunkWorldBounds;

	public Entity TerrainEntity;

	public OrthogonalRotation ChunkRotation;

	public WorldType WorldTarget;
}
```
