# TakeDamageInSun

```csharp
[StructLayout(2)]
public struct TakeDamageInSun
{
	static TakeDamageInSun()
	{
		Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TakeDamageInSun");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr);
		TakeDamageInSun.NativeFieldInfoPtr_Debuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr, "Debuff");
		TakeDamageInSun.NativeFieldInfoPtr_ChargeValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr, "ChargeValue");
		TakeDamageInSun.NativeFieldInfoPtr_CooldownValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr, "CooldownValue");
		TakeDamageInSun.NativeFieldInfoPtr_SunDamageDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr, "SunDamageDisabled");
		TakeDamageInSun.NativeFieldInfoPtr_SunChargeUpTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr, "SunChargeUpTime");
		TakeDamageInSun.NativeFieldInfoPtr_SunCooldownTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr, "SunCooldownTime");
		TakeDamageInSun.NativeFieldInfoPtr_NextTickTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr, "NextTickTime");
		TakeDamageInSun.NativeFieldInfoPtr_ChargeUpSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr, "ChargeUpSequence");
		TakeDamageInSun.NativeFieldInfoPtr_ChargeUpSunbeamSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr, "ChargeUpSunbeamSequence");
		TakeDamageInSun.NativeFieldInfoPtr_ChargeUpSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr, "ChargeUpSequenceState");
		TakeDamageInSun.NativeFieldInfoPtr_ChargeUpSunbeamSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr, "ChargeUpSunbeamSequenceState");
		TakeDamageInSun.NativeFieldInfoPtr_CooldownSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr, "CooldownSequence");
		TakeDamageInSun.NativeFieldInfoPtr_CooldownSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr, "CooldownSequenceState");
		TakeDamageInSun.NativeFieldInfoPtr_SunIntensity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr, "SunIntensity");
		TakeDamageInSun.NativeFieldInfoPtr_IsInSun = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr, "IsInSun");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TakeDamageInSun>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Debuff;
	private static readonly IntPtr NativeFieldInfoPtr_ChargeValue;
	private static readonly IntPtr NativeFieldInfoPtr_CooldownValue;
	private static readonly IntPtr NativeFieldInfoPtr_SunDamageDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_SunChargeUpTime;
	private static readonly IntPtr NativeFieldInfoPtr_SunCooldownTime;
	private static readonly IntPtr NativeFieldInfoPtr_NextTickTime;
	private static readonly IntPtr NativeFieldInfoPtr_ChargeUpSequence;
	private static readonly IntPtr NativeFieldInfoPtr_ChargeUpSunbeamSequence;
	private static readonly IntPtr NativeFieldInfoPtr_ChargeUpSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_ChargeUpSunbeamSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_CooldownSequence;
	private static readonly IntPtr NativeFieldInfoPtr_CooldownSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_SunIntensity;
	private static readonly IntPtr NativeFieldInfoPtr_IsInSun;
	[FieldOffset(0)]
	public PrefabGUID Debuff;
	[FieldOffset(4)]
	public float ChargeValue;
	[FieldOffset(8)]
	public float CooldownValue;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool SunDamageDisabled;
	[FieldOffset(16)]
	public ModifiableFloat SunChargeUpTime;
	[FieldOffset(20)]
	public float SunCooldownTime;
	[FieldOffset(24)]
	public double NextTickTime;
	[FieldOffset(32)]
	public SequenceGUID ChargeUpSequence;
	[FieldOffset(36)]
	public SequenceGUID ChargeUpSunbeamSequence;
	[FieldOffset(40)]
	public SequenceState ChargeUpSequenceState;
	[FieldOffset(48)]
	public SequenceState ChargeUpSunbeamSequenceState;
	[FieldOffset(56)]
	public SequenceGUID CooldownSequence;
	[FieldOffset(60)]
	public SequenceState CooldownSequenceState;
	[FieldOffset(68)]
	public float SunIntensity;
	[FieldOffset(72)]
	[MarshalAs(4)]
	public bool IsInSun;
}
