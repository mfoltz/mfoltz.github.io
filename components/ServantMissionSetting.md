---
nav_exclude: true
search_exclude: false
---

# ServantMissionSetting

```csharp
public struct ServantMissionSetting
{
	static ServantMissionSetting()
	{
		Il2CppClassPointerStore<ServantMissionSetting>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServantMissionSetting");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantMissionSetting>.NativeClassPtr);
		ServantMissionSetting.NativeFieldInfoPtr_RaidStability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantMissionSetting>.NativeClassPtr, "RaidStability");
		ServantMissionSetting.NativeFieldInfoPtr_SuccessRateBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantMissionSetting>.NativeClassPtr, "SuccessRateBonus");
		ServantMissionSetting.NativeFieldInfoPtr_MissionLength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantMissionSetting>.NativeClassPtr, "MissionLength");
		ServantMissionSetting.NativeFieldInfoPtr_InjuryChance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantMissionSetting>.NativeClassPtr, "InjuryChance");
		ServantMissionSetting.NativeFieldInfoPtr_LootFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantMissionSetting>.NativeClassPtr, "LootFactor");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantMissionSetting>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RaidStability;
	private static readonly IntPtr NativeFieldInfoPtr_SuccessRateBonus;
	private static readonly IntPtr NativeFieldInfoPtr_MissionLength;
	private static readonly IntPtr NativeFieldInfoPtr_InjuryChance;
	private static readonly IntPtr NativeFieldInfoPtr_LootFactor;

	public RaidStability RaidStability;

	public float SuccessRateBonus;

	public float MissionLength;

	public float InjuryChance;

	public float LootFactor;
}
```
