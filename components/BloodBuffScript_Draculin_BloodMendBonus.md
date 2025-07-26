# BloodBuffScript_Draculin_BloodMendBonus

```csharp
[StructLayout(2)]
public struct BloodBuffScript_Draculin_BloodMendBonus
{
	static BloodBuffScript_Draculin_BloodMendBonus()
	{
		Il2CppClassPointerStore<BloodBuffScript_Draculin_BloodMendBonus>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BloodBuffScript_Draculin_BloodMendBonus");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuffScript_Draculin_BloodMendBonus>.NativeClassPtr);
		BloodBuffScript_Draculin_BloodMendBonus.NativeFieldInfoPtr_MinBonusHealing = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Draculin_BloodMendBonus>.NativeClassPtr, "MinBonusHealing");
		BloodBuffScript_Draculin_BloodMendBonus.NativeFieldInfoPtr_MaxBonusHealing = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Draculin_BloodMendBonus>.NativeClassPtr, "MaxBonusHealing");
		BloodBuffScript_Draculin_BloodMendBonus.NativeFieldInfoPtr_RequiredBloodPercentage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Draculin_BloodMendBonus>.NativeClassPtr, "RequiredBloodPercentage");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuffScript_Draculin_BloodMendBonus>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinBonusHealing;
	private static readonly IntPtr NativeFieldInfoPtr_MaxBonusHealing;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredBloodPercentage;
	[FieldOffset(0)]
	public float MinBonusHealing;
	[FieldOffset(4)]
	public float MaxBonusHealing;
	[FieldOffset(8)]
	public float RequiredBloodPercentage;
}
