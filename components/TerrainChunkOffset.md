# TerrainChunkOffset

```csharp
[StructLayout(2)]
public struct TerrainChunkOffset
{
	static TerrainChunkOffset()
	{
		Il2CppClassPointerStore<TerrainChunkOffset>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "TerrainChunkOffset");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainChunkOffset>.NativeClassPtr);
		TerrainChunkOffset.NativeFieldInfoPtr_Coordinate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkOffset>.NativeClassPtr, "Coordinate");
		TerrainChunkOffset.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkOffset>.NativeClassPtr, "Rotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainChunkOffset>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Coordinate;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;
	[FieldOffset(0)]
	public TerrainChunk Coordinate;
	[FieldOffset(4)]
	public OrthogonalRotation Rotation;
}
