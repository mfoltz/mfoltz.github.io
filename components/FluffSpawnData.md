# FluffSpawnData

```csharp
[StructLayout(2)]
public struct FluffSpawnData
{
	static FluffSpawnData()
	{
		Il2CppClassPointerStore<FluffSpawnData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "FluffSpawnData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FluffSpawnData>.NativeClassPtr);
		FluffSpawnData.NativeFieldInfoPtr_Spawn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FluffSpawnData>.NativeClassPtr, "Spawn");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FluffSpawnData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Spawn;
	[FieldOffset(0)]
	public float4x4 Spawn;
}
