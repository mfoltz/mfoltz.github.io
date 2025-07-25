---
nav_exclude: true
search_exclude: true
---

# TriggerHitConsume

```csharp
public struct TriggerHitConsume
{
	static TriggerHitConsume()
	{
		Il2CppClassPointerStore<TriggerHitConsume>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TriggerHitConsume");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TriggerHitConsume>.NativeClassPtr);
		TriggerHitConsume.NativeFieldInfoPtr_SpellCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TriggerHitConsume>.NativeClassPtr, "SpellCategory");
		TriggerHitConsume.NativeFieldInfoPtr_EventIdIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TriggerHitConsume>.NativeClassPtr, "EventIdIndex");
		TriggerHitConsume.NativeFieldInfoPtr_EventIdCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TriggerHitConsume>.NativeClassPtr, "EventIdCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TriggerHitConsume>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellCategory;
	private static readonly IntPtr NativeFieldInfoPtr_EventIdIndex;
	private static readonly IntPtr NativeFieldInfoPtr_EventIdCount;

	public SpellFilterEnum SpellCategory;

	public int EventIdIndex;

	public int EventIdCount;
}
```
