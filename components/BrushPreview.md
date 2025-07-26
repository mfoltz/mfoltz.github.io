# BrushPreview

```csharp
[StructLayout(2)]
public struct BrushPreview
{
	static BrushPreview()
	{
		Il2CppClassPointerStore<BrushPreview>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "BrushPreview");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BrushPreview>.NativeClassPtr);
		BrushPreview.NativeFieldInfoPtr_Coordinate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BrushPreview>.NativeClassPtr, "Coordinate");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BrushPreview>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Coordinate;
	[FieldOffset(0)]
	public TerrainCoordinate Coordinate;
}
