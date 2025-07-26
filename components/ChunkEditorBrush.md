# ChunkEditorBrush

```csharp
[StructLayout(2)]
public struct ChunkEditorBrush
{
	static ChunkEditorBrush()
	{
		Il2CppClassPointerStore<ChunkEditorBrush>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "ChunkEditorBrush");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChunkEditorBrush>.NativeClassPtr);
		ChunkEditorBrush.NativeFieldInfoPtr_RaycastType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkEditorBrush>.NativeClassPtr, "RaycastType");
		ChunkEditorBrush.NativeFieldInfoPtr_TopologyLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkEditorBrush>.NativeClassPtr, "TopologyLevel");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChunkEditorBrush>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RaycastType;
	private static readonly IntPtr NativeFieldInfoPtr_TopologyLevel;
	[FieldOffset(0)]
	public PenBrushRaycastType RaycastType;
	[FieldOffset(4)]
	public int TopologyLevel;
}
