---
nav_exclude: true
search_exclude: true
---

```csharp
public struct UnlockTrophyOnGameplayEvent
{
	static UnlockTrophyOnGameplayEvent()
	{
		Il2CppClassPointerStore<UnlockTrophyOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UnlockTrophyOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnlockTrophyOnGameplayEvent>.NativeClassPtr);
		UnlockTrophyOnGameplayEvent.NativeFieldInfoPtr_Trophy = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockTrophyOnGameplayEvent>.NativeClassPtr, "Trophy");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnlockTrophyOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Trophy;

	public Trophy Trophy;
}
```
