# FluffConversionTerrain

```csharp
[StructLayout(2)]
public struct FluffConversionTerrain
{
	static FluffConversionTerrain()
	{
		Il2CppClassPointerStore<FluffConversionTerrain>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "FluffConversionTerrain");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FluffConversionTerrain>.NativeClassPtr);
		FluffConversionTerrain.NativeFieldInfoPtr_TerrainEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FluffConversionTerrain>.NativeClassPtr, "TerrainEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FluffConversionTerrain>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TerrainEntity;
	[FieldOffset(0)]
	public Entity TerrainEntity;
}
