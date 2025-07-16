# Passive

```csharp
[StructLayout(2)]
public struct Passive
{
	static Passive()
	{
		Il2CppClassPointerStore<Passive>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Passive");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Passive>.NativeClassPtr);
		Passive.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Passive>.NativeClassPtr, "Level");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Passive>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Level;
	[FieldOffset(0)]
	public int Level;
}
