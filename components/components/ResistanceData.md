---
nav_exclude: true
search_exclude: true
---

# ResistanceData

```csharp
[StructLayout(2)]
public struct ResistanceData
{
	static ResistanceData()
	{
		Il2CppClassPointerStore<ResistanceData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ResistanceData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ResistanceData>.NativeClassPtr);
		ResistanceData.NativeFieldInfoPtr_SunResistance_IncreasedSunPiercingDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResistanceData>.NativeClassPtr, "SunResistance_IncreasedSunPiercingDuration");
		ResistanceData.NativeFieldInfoPtr_GarlicResistance_DamageReductionPerRating = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResistanceData>.NativeClassPtr, "GarlicResistance_DamageReductionPerRating");
		ResistanceData.NativeFieldInfoPtr_GarlicResistance_IncreasedExposureFactorPerRating = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResistanceData>.NativeClassPtr, "GarlicResistance_IncreasedExposureFactorPerRating");
		ResistanceData.NativeFieldInfoPtr_GarlicResistance_ReduceMaxStacksPerRating = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResistanceData>.NativeClassPtr, "GarlicResistance_ReduceMaxStacksPerRating");
		ResistanceData.NativeFieldInfoPtr_FireResistance_DamageReductionPerRating = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResistanceData>.NativeClassPtr, "FireResistance_DamageReductionPerRating");
		ResistanceData.NativeFieldInfoPtr_FireResistance_RedcuedIgiteChancePerRating = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResistanceData>.NativeClassPtr, "FireResistance_RedcuedIgiteChancePerRating");
		ResistanceData.NativeFieldInfoPtr_SilverResistance_DamageReductionPerRating = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResistanceData>.NativeClassPtr, "SilverResistance_DamageReductionPerRating");
		ResistanceData.NativeFieldInfoPtr_SilverResistance_CarryValueAbsorbedPerRating = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResistanceData>.NativeClassPtr, "SilverResistance_CarryValueAbsorbedPerRating");
		ResistanceData.NativeFieldInfoPtr_HolyResistance_DamageReductionPerRating = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResistanceData>.NativeClassPtr, "HolyResistance_DamageReductionPerRating");
		ResistanceData.NativeFieldInfoPtr_HolyResistance_DamageAbsorbPerRating = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResistanceData>.NativeClassPtr, "HolyResistance_DamageAbsorbPerRating");
		ResistanceData.NativeFieldInfoPtr_PvPResilience_DamageReductionPerRating = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResistanceData>.NativeClassPtr, "PvPResilience_DamageReductionPerRating");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ResistanceData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SunResistance_IncreasedSunPiercingDuration;
	private static readonly IntPtr NativeFieldInfoPtr_GarlicResistance_DamageReductionPerRating;
	private static readonly IntPtr NativeFieldInfoPtr_GarlicResistance_IncreasedExposureFactorPerRating;
	private static readonly IntPtr NativeFieldInfoPtr_GarlicResistance_ReduceMaxStacksPerRating;
	private static readonly IntPtr NativeFieldInfoPtr_FireResistance_DamageReductionPerRating;
	private static readonly IntPtr NativeFieldInfoPtr_FireResistance_RedcuedIgiteChancePerRating;
	private static readonly IntPtr NativeFieldInfoPtr_SilverResistance_DamageReductionPerRating;
	private static readonly IntPtr NativeFieldInfoPtr_SilverResistance_CarryValueAbsorbedPerRating;
	private static readonly IntPtr NativeFieldInfoPtr_HolyResistance_DamageReductionPerRating;
	private static readonly IntPtr NativeFieldInfoPtr_HolyResistance_DamageAbsorbPerRating;
	private static readonly IntPtr NativeFieldInfoPtr_PvPResilience_DamageReductionPerRating;
	[FieldOffset(0)]
	public float SunResistance_IncreasedSunPiercingDuration;
	[FieldOffset(4)]
	public float GarlicResistance_DamageReductionPerRating;
	[FieldOffset(8)]
	public float GarlicResistance_IncreasedExposureFactorPerRating;
	[FieldOffset(12)]
	public float GarlicResistance_ReduceMaxStacksPerRating;
	[FieldOffset(16)]
	public float FireResistance_DamageReductionPerRating;
	[FieldOffset(20)]
	public float FireResistance_RedcuedIgiteChancePerRating;
	[FieldOffset(24)]
	public float SilverResistance_DamageReductionPerRating;
	[FieldOffset(28)]
	public float SilverResistance_CarryValueAbsorbedPerRating;
	[FieldOffset(32)]
	public float HolyResistance_DamageReductionPerRating;
	[FieldOffset(36)]
	public float HolyResistance_DamageAbsorbPerRating;
	[FieldOffset(40)]
	public float PvPResilience_DamageReductionPerRating;
}
