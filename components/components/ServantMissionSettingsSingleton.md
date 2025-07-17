---
nav_exclude: true
search_exclude: true
---

# ServantMissionSettingsSingleton

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public float MissionLootVariance;
	[FieldOffset(4)]
	public int StaticPartyBonus;
	[FieldOffset(8)]
	public PrefabGUID MissionBuff;
	[FieldOffset(12)]
	public LocalizationKey LKey_MissionStarted;
	[FieldOffset(28)]
	public LocalizationKey LKey_MissionSuccess;
	[FieldOffset(44)]
	public LocalizationKey LKey_MissionFailed;
}
