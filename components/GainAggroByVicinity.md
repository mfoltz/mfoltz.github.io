# GainAggroByVicinity

```csharp
[StructLayout(2)]
public struct GainAggroByVicinity
{
	static GainAggroByVicinity()
	{
		Il2CppClassPointerStore<GainAggroByVicinity>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "GainAggroByVicinity");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GainAggroByVicinity>.NativeClassPtr);
		GainAggroByVicinity.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GainAggroByVicinity>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GainAggroByVicinity>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public AggroData Value;
}
