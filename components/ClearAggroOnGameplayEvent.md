---
nav_exclude: true
search_exclude: false
---

# ClearAggroOnGameplayEvent

```csharp
public struct ClearAggroOnGameplayEvent
{
	static ClearAggroOnGameplayEvent()
	{
		Il2CppClassPointerStore<ClearAggroOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ClearAggroOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ClearAggroOnGameplayEvent>.NativeClassPtr);
		ClearAggroOnGameplayEvent.NativeFieldInfoPtr_Who = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClearAggroOnGameplayEvent>.NativeClassPtr, "Who");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ClearAggroOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Who;

	public AggroGameplayEventWho Who;
}
```
