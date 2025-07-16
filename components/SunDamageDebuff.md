# SunDamageDebuff

```csharp
[StructLayout(2)]
public struct SunDamageDebuff
{
	static SunDamageDebuff()
	{
		Il2CppClassPointerStore<SunDamageDebuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SunDamageDebuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SunDamageDebuff>.NativeClassPtr);
		SunDamageDebuff.NativeFieldInfoPtr_CooldownTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SunDamageDebuff>.NativeClassPtr, "CooldownTime");
		SunDamageDebuff.NativeFieldInfoPtr_DamageFactorPerTick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SunDamageDebuff>.NativeClassPtr, "DamageFactorPerTick");
		SunDamageDebuff.NativeFieldInfoPtr_TickRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SunDamageDebuff>.NativeClassPtr, "TickRate");
		SunDamageDebuff.NativeFieldInfoPtr_ActiveSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SunDamageDebuff>.NativeClassPtr, "ActiveSequence");
		SunDamageDebuff.NativeFieldInfoPtr_ActiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SunDamageDebuff>.NativeClassPtr, "ActiveSequenceState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SunDamageDebuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CooldownTime;
	private static readonly IntPtr NativeFieldInfoPtr_DamageFactorPerTick;
	private static readonly IntPtr NativeFieldInfoPtr_TickRate;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequence;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceState;
	[FieldOffset(0)]
	public float CooldownTime;
	[FieldOffset(4)]
	public float DamageFactorPerTick;
	[FieldOffset(8)]
	public float TickRate;
	[FieldOffset(12)]
	public SequenceGUID ActiveSequence;
	[FieldOffset(16)]
	public SequenceState ActiveSequenceState;
}
