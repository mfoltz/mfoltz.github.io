---
nav_exclude: true
search_exclude: false
---

# Script_FilterTargetOnGameplayEvent_Triggers

```csharp
public struct Script_FilterTargetOnGameplayEvent_Triggers
{
	static Script_FilterTargetOnGameplayEvent_Triggers()
	{
		Il2CppClassPointerStore<Script_FilterTargetOnGameplayEvent_Triggers>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_FilterTargetOnGameplayEvent_Triggers");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_FilterTargetOnGameplayEvent_Triggers>.NativeClassPtr);
		Script_FilterTargetOnGameplayEvent_Triggers.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_FilterTargetOnGameplayEvent_Triggers>.NativeClassPtr, "Target");
		Script_FilterTargetOnGameplayEvent_Triggers.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_FilterTargetOnGameplayEvent_Triggers>.NativeClassPtr, "Count");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_FilterTargetOnGameplayEvent_Triggers>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_Count;

	public Entity Target;

	public int Count;
}
```
