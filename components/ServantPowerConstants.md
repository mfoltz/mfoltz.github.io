---
nav_exclude: true
search_exclude: true
---

# ServantPowerConstants

```csharp
public struct ServantPowerConstants
{
	static ServantPowerConstants()
	{
		Il2CppClassPointerStore<ServantPowerConstants>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ServantPowerConstants");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantPowerConstants>.NativeClassPtr);
		ServantPowerConstants.NativeFieldInfoPtr_HealthData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantPowerConstants>.NativeClassPtr, "HealthData");
		ServantPowerConstants.NativeFieldInfoPtr_DamageData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantPowerConstants>.NativeClassPtr, "DamageData");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantPowerConstants>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HealthData;
	private static readonly IntPtr NativeFieldInfoPtr_DamageData;

	public ServantPowerData HealthData;

	public ServantPowerData DamageData;
}
```

## Server Systems

- [ServantPowerSystem](/systems/server/ServantPowerSystem)
