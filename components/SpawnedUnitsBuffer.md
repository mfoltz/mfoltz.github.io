# SpawnedUnitsBuffer

```csharp
[StructLayout(2)]
public struct SpawnedUnitsBuffer
{
	static SpawnedUnitsBuffer()
	{
		Il2CppClassPointerStore<SpawnedUnitsBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SpawnedUnitsBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnedUnitsBuffer>.NativeClassPtr);
		SpawnedUnitsBuffer.NativeFieldInfoPtr_SpawnedUnit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnedUnitsBuffer>.NativeClassPtr, "SpawnedUnit");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnedUnitsBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnedUnit;
	[FieldOffset(0)]
	public NetworkedEntity SpawnedUnit;
}
