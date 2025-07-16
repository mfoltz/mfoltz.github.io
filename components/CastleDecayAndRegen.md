# CastleDecayAndRegen

```csharp
[StructLayout(2)]
public struct CastleDecayAndRegen
{
	static CastleDecayAndRegen()
	{
		Il2CppClassPointerStore<CastleDecayAndRegen>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CastleDecayAndRegen");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleDecayAndRegen>.NativeClassPtr);
		CastleDecayAndRegen.NativeFieldInfoPtr_LastUpdatedTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleDecayAndRegen>.NativeClassPtr, "LastUpdatedTime");
		CastleDecayAndRegen.NativeFieldInfoPtr_DecayFactorOnTick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleDecayAndRegen>.NativeClassPtr, "DecayFactorOnTick");
		CastleDecayAndRegen.NativeFieldInfoPtr_RegenFactorOnTick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleDecayAndRegen>.NativeClassPtr, "RegenFactorOnTick");
		CastleDecayAndRegen.NativeFieldInfoPtr_DecayThreshold = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleDecayAndRegen>.NativeClassPtr, "DecayThreshold");
		CastleDecayAndRegen.NativeFieldInfoPtr_CanDieFromDecay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleDecayAndRegen>.NativeClassPtr, "CanDieFromDecay");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleDecayAndRegen>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastUpdatedTime;
	private static readonly IntPtr NativeFieldInfoPtr_DecayFactorOnTick;
	private static readonly IntPtr NativeFieldInfoPtr_RegenFactorOnTick;
	private static readonly IntPtr NativeFieldInfoPtr_DecayThreshold;
	private static readonly IntPtr NativeFieldInfoPtr_CanDieFromDecay;
	[FieldOffset(0)]
	public double LastUpdatedTime;
	[FieldOffset(8)]
	public half DecayFactorOnTick;
	[FieldOffset(10)]
	public half RegenFactorOnTick;
	[FieldOffset(12)]
	public half DecayThreshold;
	[FieldOffset(14)]
	[MarshalAs(4)]
	public bool CanDieFromDecay;
}
