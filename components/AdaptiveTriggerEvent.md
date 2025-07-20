---
nav_exclude: true
search_exclude: true
---

# AdaptiveTriggerEvent

```csharp
public struct AdaptiveTriggerEvent
{
	static AdaptiveTriggerEvent()
	{
		Il2CppClassPointerStore<AdaptiveTriggerEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Haptics.dll", "ProjectM.Haptics", "AdaptiveTriggerEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AdaptiveTriggerEvent>.NativeClassPtr);
		AdaptiveTriggerEvent.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdaptiveTriggerEvent>.NativeClassPtr, "Data");
		AdaptiveTriggerEvent.NativeFieldInfoPtr_SpawnTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdaptiveTriggerEvent>.NativeClassPtr, "SpawnTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AdaptiveTriggerEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnTime;

	public TriggerEffectData Data;

	public double SpawnTime;
}
```
