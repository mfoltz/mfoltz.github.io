---
nav_exclude: true
search_exclude: true
---

# BloodBuffScript_LastStrike

```csharp
public struct BloodBuffScript_LastStrike
{
	static BloodBuffScript_LastStrike()
	{
		Il2CppClassPointerStore<BloodBuffScript_LastStrike>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BloodBuffScript_LastStrike");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuffScript_LastStrike>.NativeClassPtr);
		BloodBuffScript_LastStrike.NativeFieldInfoPtr_LastStrikeBonus_Min = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_LastStrike>.NativeClassPtr, "LastStrikeBonus_Min");
		BloodBuffScript_LastStrike.NativeFieldInfoPtr_LastStrikeBonus_Max = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_LastStrike>.NativeClassPtr, "LastStrikeBonus_Max");
		BloodBuffScript_LastStrike.NativeFieldInfoPtr_RequiredBloodQuality = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_LastStrike>.NativeClassPtr, "RequiredBloodQuality");
		BloodBuffScript_LastStrike.NativeFieldInfoPtr_HealthTreshhold = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_LastStrike>.NativeClassPtr, "HealthTreshhold");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuffScript_LastStrike>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastStrikeBonus_Min;
	private static readonly IntPtr NativeFieldInfoPtr_LastStrikeBonus_Max;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredBloodQuality;
	private static readonly IntPtr NativeFieldInfoPtr_HealthTreshhold;

	public float LastStrikeBonus_Min;

	public float LastStrikeBonus_Max;

	public float RequiredBloodQuality;

	public float HealthTreshhold;
}
```
