---
nav_exclude: true
search_exclude: true
---

# BloodBuffScript_Brute_NulifyAndEmpower

```csharp
[StructLayout(2)]
public struct BloodBuffScript_Brute_NulifyAndEmpower
{
	static BloodBuffScript_Brute_NulifyAndEmpower()
	{
		Il2CppClassPointerStore<BloodBuffScript_Brute_NulifyAndEmpower>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BloodBuffScript_Brute_NulifyAndEmpower");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuffScript_Brute_NulifyAndEmpower>.NativeClassPtr);
		BloodBuffScript_Brute_NulifyAndEmpower.NativeFieldInfoPtr_NulifyChance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Brute_NulifyAndEmpower>.NativeClassPtr, "NulifyChance");
		BloodBuffScript_Brute_NulifyAndEmpower.NativeFieldInfoPtr_DamageReduction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Brute_NulifyAndEmpower>.NativeClassPtr, "DamageReduction");
		BloodBuffScript_Brute_NulifyAndEmpower.NativeFieldInfoPtr_RequiredBloodPercentage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Brute_NulifyAndEmpower>.NativeClassPtr, "RequiredBloodPercentage");
		BloodBuffScript_Brute_NulifyAndEmpower.NativeFieldInfoPtr_EmpowerBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Brute_NulifyAndEmpower>.NativeClassPtr, "EmpowerBuff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuffScript_Brute_NulifyAndEmpower>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NulifyChance;
	private static readonly IntPtr NativeFieldInfoPtr_DamageReduction;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredBloodPercentage;
	private static readonly IntPtr NativeFieldInfoPtr_EmpowerBuff;
	[FieldOffset(0)]
	public float NulifyChance;
	[FieldOffset(4)]
	public float DamageReduction;
	[FieldOffset(8)]
	public float RequiredBloodPercentage;
	[FieldOffset(12)]
	public PrefabGUID EmpowerBuff;
}
