# NetherSpawnBakingComponent

```csharp
[StructLayout(2)]
public struct NetherSpawnBakingComponent
{
	static NetherSpawnBakingComponent()
	{
		Il2CppClassPointerStore<NetherSpawnBakingComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM", "NetherSpawnBakingComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NetherSpawnBakingComponent>.NativeClassPtr);
		NetherSpawnBakingComponent.NativeFieldInfoPtr_SpawnPosGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetherSpawnBakingComponent>.NativeClassPtr, "SpawnPosGUID");
		NetherSpawnBakingComponent.NativeFieldInfoPtr_LocalChunkTRS = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetherSpawnBakingComponent>.NativeClassPtr, "LocalChunkTRS");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NetherSpawnBakingComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnPosGUID;
	private static readonly IntPtr NativeFieldInfoPtr_LocalChunkTRS;
	[FieldOffset(0)]
	public PrefabGUID SpawnPosGUID;
	[FieldOffset(4)]
	public float4x4 LocalChunkTRS;
}
