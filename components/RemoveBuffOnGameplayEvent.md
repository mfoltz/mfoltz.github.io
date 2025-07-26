---
nav_exclude: true
search_exclude: true
---

# RemoveBuffOnGameplayEvent

```csharp
public struct RemoveBuffOnGameplayEvent
{
	static RemoveBuffOnGameplayEvent()
	{
		Il2CppClassPointerStore<RemoveBuffOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RemoveBuffOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RemoveBuffOnGameplayEvent>.NativeClassPtr);
		RemoveBuffOnGameplayEvent.NativeFieldInfoPtr_BuffTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RemoveBuffOnGameplayEvent>.NativeClassPtr, "BuffTarget");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RemoveBuffOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffTarget;

	public RemoveBuffTarget BuffTarget;
}
```
