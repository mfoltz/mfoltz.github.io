---
nav_exclude: true
search_exclude: true
---

# AbilityGroupResetComboState

```csharp
public struct AbilityGroupResetComboState
{
	static AbilityGroupResetComboState()
	{
		Il2CppClassPointerStore<AbilityGroupResetComboState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AbilityGroupResetComboState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityGroupResetComboState>.NativeClassPtr);
		AbilityGroupResetComboState.NativeFieldInfoPtr_ComboResetTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupResetComboState>.NativeClassPtr, "ComboResetTime");
		AbilityGroupResetComboState.NativeFieldInfoPtr_ComboResetDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupResetComboState>.NativeClassPtr, "ComboResetDuration");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityGroupResetComboState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ComboResetTime;
	private static readonly IntPtr NativeFieldInfoPtr_ComboResetDuration;

	public double ComboResetTime;

	public float ComboResetDuration;
}
```
