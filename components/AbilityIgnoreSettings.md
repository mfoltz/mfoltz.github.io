---
nav_exclude: true
search_exclude: true
---

# AbilityIgnoreSettings

```csharp
public struct AbilityIgnoreSettings
{
	static AbilityIgnoreSettings()
	{
		Il2CppClassPointerStore<AbilityIgnoreSettings>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AbilityIgnoreSettings");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityIgnoreSettings>.NativeClassPtr);
		AbilityIgnoreSettings.NativeFieldInfoPtr_IgnorePostCast = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityIgnoreSettings>.NativeClassPtr, "IgnorePostCast");
		AbilityIgnoreSettings.NativeFieldInfoPtr_IgnoreGlobalCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityIgnoreSettings>.NativeClassPtr, "IgnoreGlobalCooldown");
		AbilityIgnoreSettings.NativeFieldInfoPtr_IgnoreAbilityImpair = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityIgnoreSettings>.NativeClassPtr, "IgnoreAbilityImpair");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityIgnoreSettings>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IgnorePostCast;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreGlobalCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreAbilityImpair;

	public bool IgnorePostCast;

	public bool IgnoreGlobalCooldown;

	public bool IgnoreAbilityImpair;
}
```
