# MicroPOIUnitSpawnerElement

```csharp
[StructLayout(2)]
public struct MicroPOIUnitSpawnerElement
{
	static MicroPOIUnitSpawnerElement()
	{
		Il2CppClassPointerStore<MicroPOIUnitSpawnerElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MicroPOIUnitSpawnerElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MicroPOIUnitSpawnerElement>.NativeClassPtr);
		MicroPOIUnitSpawnerElement.NativeFieldInfoPtr_SpawnerEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MicroPOIUnitSpawnerElement>.NativeClassPtr, "SpawnerEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MicroPOIUnitSpawnerElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnerEntity;
	[FieldOffset(0)]
	public Entity SpawnerEntity;
}
