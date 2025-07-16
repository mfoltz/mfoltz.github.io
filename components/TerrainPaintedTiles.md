# TerrainPaintedTiles

```csharp
[StructLayout(2)]
public struct TerrainPaintedTiles
{
	static TerrainPaintedTiles()
	{
		Il2CppClassPointerStore<TerrainPaintedTiles>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "TerrainPaintedTiles");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainPaintedTiles>.NativeClassPtr);
		TerrainPaintedTiles.NativeFieldInfoPtr_TileBrushIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainPaintedTiles>.NativeClassPtr, "TileBrushIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainPaintedTiles>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TileBrushIndex;
	[FieldOffset(0)]
	public TerrainTileBrushIndex TileBrushIndex;
}
