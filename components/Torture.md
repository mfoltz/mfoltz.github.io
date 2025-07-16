# Torture

```csharp
[StructLayout(2)]
public struct Torture
{
	static Torture()
	{
		Il2CppClassPointerStore<Torture>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Torture");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Torture>.NativeClassPtr);
		Torture.NativeFieldInfoPtr_TortureModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Torture>.NativeClassPtr, "TortureModifier");
		Torture.NativeFieldInfoPtr_TorturePerDamage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Torture>.NativeClassPtr, "TorturePerDamage");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Torture>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TortureModifier;
	private static readonly IntPtr NativeFieldInfoPtr_TorturePerDamage;
	[FieldOffset(0)]
	public float TortureModifier;
	[FieldOffset(4)]
	public float TorturePerDamage;
}
