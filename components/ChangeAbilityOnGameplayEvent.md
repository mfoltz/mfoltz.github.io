---
nav_exclude: true
search_exclude: false
---

# ChangeAbilityOnGameplayEvent

```csharp
public struct ChangeAbilityOnGameplayEvent
{
	static ChangeAbilityOnGameplayEvent()
	{
		Il2CppClassPointerStore<ChangeAbilityOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ChangeAbilityOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChangeAbilityOnGameplayEvent>.NativeClassPtr);
		ChangeAbilityOnGameplayEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeAbilityOnGameplayEvent>.NativeClassPtr, "Target");
		ChangeAbilityOnGameplayEvent.NativeFieldInfoPtr_AbilityGroupId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeAbilityOnGameplayEvent>.NativeClassPtr, "AbilityGroupId");
		ChangeAbilityOnGameplayEvent.NativeFieldInfoPtr_SlotIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeAbilityOnGameplayEvent>.NativeClassPtr, "SlotIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChangeAbilityOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityGroupId;
	private static readonly IntPtr NativeFieldInfoPtr_SlotIndex;

	public ChangeAbilityTarget Target;

	public PrefabGUID AbilityGroupId;

	public int SlotIndex;
}
```
