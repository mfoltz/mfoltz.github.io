# ArmorLevel

```csharp
[StructLayout(2)]
public struct ArmorLevel
{
	static ArmorLevel()
	{
		Il2CppClassPointerStore<ArmorLevel>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ArmorLevel");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ArmorLevel>.NativeClassPtr);
		ArmorLevel.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ArmorLevel>.NativeClassPtr, "Level");
		ArmorLevel.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ArmorLevel>.NativeClassPtr, "ModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ArmorLevel>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Level;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;
	[FieldOffset(0)]
	public float Level;
	[FieldOffset(4)]
	public ModificationId ModificationId;
}
