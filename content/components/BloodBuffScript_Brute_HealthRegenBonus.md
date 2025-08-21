---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BloodBuffScript_Brute_HealthRegenBonus
{
	static BloodBuffScript_Brute_HealthRegenBonus()
	{
		Il2CppClassPointerStore<BloodBuffScript_Brute_HealthRegenBonus>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BloodBuffScript_Brute_HealthRegenBonus");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuffScript_Brute_HealthRegenBonus>.NativeClassPtr);
		BloodBuffScript_Brute_HealthRegenBonus.NativeFieldInfoPtr_MinHealthRegenIncrease = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Brute_HealthRegenBonus>.NativeClassPtr, "MinHealthRegenIncrease");
		BloodBuffScript_Brute_HealthRegenBonus.NativeFieldInfoPtr_MaxHealthRegenIncrease = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Brute_HealthRegenBonus>.NativeClassPtr, "MaxHealthRegenIncrease");
		BloodBuffScript_Brute_HealthRegenBonus.NativeFieldInfoPtr_RequiredBloodPercentage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Brute_HealthRegenBonus>.NativeClassPtr, "RequiredBloodPercentage");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuffScript_Brute_HealthRegenBonus>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinHealthRegenIncrease;
	private static readonly IntPtr NativeFieldInfoPtr_MaxHealthRegenIncrease;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredBloodPercentage;

	public float MinHealthRegenIncrease;

	public float MaxHealthRegenIncrease;

	public float RequiredBloodPercentage;
}
```

## Server Systems

- [HandleGameplayEventsRecursiveSystem]({{% relref "systems/server/HandleGameplayEventsRecursiveSystem.md" %}})
