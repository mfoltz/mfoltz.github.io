---
nav_exclude: true
search_exclude: false
---

# ServerResetScheduleNoticeSettingsSingleton

```csharp
public struct ServerResetScheduleNoticeSettingsSingleton
{
	static ServerResetScheduleNoticeSettingsSingleton()
	{
		Il2CppClassPointerStore<ServerResetScheduleNoticeSettingsSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServerResetScheduleNoticeSettingsSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServerResetScheduleNoticeSettingsSingleton>.NativeClassPtr);
		ServerResetScheduleNoticeSettingsSingleton.NativeFieldInfoPtr_LKey_ResetEnabledNotice_Singular = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerResetScheduleNoticeSettingsSingleton>.NativeClassPtr, "LKey_ResetEnabledNotice_Singular");
		ServerResetScheduleNoticeSettingsSingleton.NativeFieldInfoPtr_LKey_ResetEnabledNotice_Plural = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerResetScheduleNoticeSettingsSingleton>.NativeClassPtr, "LKey_ResetEnabledNotice_Plural");
		ServerResetScheduleNoticeSettingsSingleton.NativeFieldInfoPtr_LKey_ResetDisabledNotice = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerResetScheduleNoticeSettingsSingleton>.NativeClassPtr, "LKey_ResetDisabledNotice");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServerResetScheduleNoticeSettingsSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LKey_ResetEnabledNotice_Singular;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_ResetEnabledNotice_Plural;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_ResetDisabledNotice;

	public LocalizationKey LKey_ResetEnabledNotice_Singular;

	public LocalizationKey LKey_ResetEnabledNotice_Plural;

	public LocalizationKey LKey_ResetDisabledNotice;
}
```
