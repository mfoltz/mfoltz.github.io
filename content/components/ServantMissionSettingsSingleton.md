---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ServantMissionSettingsSingleton
{
	static ServantMissionSettingsSingleton()
	{
		Il2CppClassPointerStore<ServantMissionSettingsSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServantMissionSettingsSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantMissionSettingsSingleton>.NativeClassPtr);
		ServantMissionSettingsSingleton.NativeFieldInfoPtr_MissionLootVariance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantMissionSettingsSingleton>.NativeClassPtr, "MissionLootVariance");
		ServantMissionSettingsSingleton.NativeFieldInfoPtr_StaticPartyBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantMissionSettingsSingleton>.NativeClassPtr, "StaticPartyBonus");
		ServantMissionSettingsSingleton.NativeFieldInfoPtr_MissionBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantMissionSettingsSingleton>.NativeClassPtr, "MissionBuff");
		ServantMissionSettingsSingleton.NativeFieldInfoPtr_LKey_MissionStarted = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantMissionSettingsSingleton>.NativeClassPtr, "LKey_MissionStarted");
		ServantMissionSettingsSingleton.NativeFieldInfoPtr_LKey_MissionSuccess = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantMissionSettingsSingleton>.NativeClassPtr, "LKey_MissionSuccess");
		ServantMissionSettingsSingleton.NativeFieldInfoPtr_LKey_MissionFailed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantMissionSettingsSingleton>.NativeClassPtr, "LKey_MissionFailed");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantMissionSettingsSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MissionLootVariance;
	private static readonly IntPtr NativeFieldInfoPtr_StaticPartyBonus;
	private static readonly IntPtr NativeFieldInfoPtr_MissionBuff;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_MissionStarted;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_MissionSuccess;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_MissionFailed;

	public float MissionLootVariance;

	public int StaticPartyBonus;

	public PrefabGUID MissionBuff;

	public LocalizationKey LKey_MissionStarted;

	public LocalizationKey LKey_MissionSuccess;

	public LocalizationKey LKey_MissionFailed;
}
```

## Server Systems

- [RemoveLingeringServantMissionBuffsSystem]({{% relref "systems/server/RemoveLingeringServantMissionBuffsSystem.md" %}})
- [ServantMissionActionSystem]({{% relref "systems/server/ServantMissionActionSystem.md" %}})
