---
nav_exclude: true
search_exclude: false
---

# WarEventSettingsComponent

```csharp
public struct WarEventSettingsComponent
{
	static WarEventSettingsComponent()
	{
		Il2CppClassPointerStore<WarEventSettingsComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared.WorldEvents", "WarEventSettingsComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WarEventSettingsComponent>.NativeClassPtr);
		WarEventSettingsComponent.NativeFieldInfoPtr_PrimalWarEventSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEventSettingsComponent>.NativeClassPtr, "PrimalWarEventSettings");
		WarEventSettingsComponent.NativeFieldInfoPtr_MajorWarEventSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEventSettingsComponent>.NativeClassPtr, "MajorWarEventSettings");
		WarEventSettingsComponent.NativeFieldInfoPtr_MinorWarEventSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEventSettingsComponent>.NativeClassPtr, "MinorWarEventSettings");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WarEventSettingsComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrimalWarEventSettings;
	private static readonly IntPtr NativeFieldInfoPtr_MajorWarEventSettings;
	private static readonly IntPtr NativeFieldInfoPtr_MinorWarEventSettings;

	public WarEventTypeSettings PrimalWarEventSettings;

	public WarEventTypeSettings MajorWarEventSettings;

	public WarEventTypeSettings MinorWarEventSettings;
}
```
