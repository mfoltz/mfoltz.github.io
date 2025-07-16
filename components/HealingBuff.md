# HealingBuff

```csharp
[StructLayout(2)]
public struct HealingBuff
{
	static HealingBuff()
	{
		Il2CppClassPointerStore<HealingBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "HealingBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HealingBuff>.NativeClassPtr);
		HealingBuff.NativeFieldInfoPtr_HealingPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealingBuff>.NativeClassPtr, "HealingPerSecond");
		HealingBuff.NativeFieldInfoPtr_AffectRecovery = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealingBuff>.NativeClassPtr, "AffectRecovery");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HealingBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HealingPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_AffectRecovery;
	[FieldOffset(0)]
	public float HealingPerSecond;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool AffectRecovery;
}
