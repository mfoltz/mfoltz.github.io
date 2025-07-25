---
nav_exclude: true
search_exclude: true
---

# AdjustCurrentCooldownOnGameplayEvent

```csharp
public struct AdjustCurrentCooldownOnGameplayEvent
{
	static AdjustCurrentCooldownOnGameplayEvent()
	{
		Il2CppClassPointerStore<AdjustCurrentCooldownOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AdjustCurrentCooldownOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AdjustCurrentCooldownOnGameplayEvent>.NativeClassPtr);
		AdjustCurrentCooldownOnGameplayEvent.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdjustCurrentCooldownOnGameplayEvent>.NativeClassPtr, "Type");
		AdjustCurrentCooldownOnGameplayEvent.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdjustCurrentCooldownOnGameplayEvent>.NativeClassPtr, "Time");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AdjustCurrentCooldownOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_Time;

	public AdjustType Type;

	public float Time;
}
```
