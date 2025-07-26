# SubSceneTerrainBakingTag

```csharp
[StructLayout(2)]
public struct SubSceneTerrainBakingTag
{
	static SubSceneTerrainBakingTag()
	{
		Il2CppClassPointerStore<SubSceneTerrainBakingTag>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "SubSceneTerrainBakingTag");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SubSceneTerrainBakingTag>.NativeClassPtr);
		SubSceneTerrainBakingTag.NativeFieldInfoPtr_ChunkWorldOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SubSceneTerrainBakingTag>.NativeClassPtr, "ChunkWorldOffset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SubSceneTerrainBakingTag>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ChunkWorldOffset;
	[FieldOffset(0)]
	public float3 ChunkWorldOffset;
}
