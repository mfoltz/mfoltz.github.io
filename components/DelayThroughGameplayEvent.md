---
nav_exclude: true
search_exclude: true
---

# DelayThroughGameplayEvent

```csharp
[StructLayout(2)]
public struct DelayThroughGameplayEvent
{
	static DelayThroughGameplayEvent()
	{
		Il2CppClassPointerStore<DelayThroughGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Shared", "DelayThroughGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DelayThroughGameplayEvent>.NativeClassPtr);
		DelayThroughGameplayEvent.NativeFieldInfoPtr_TriggerEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DelayThroughGameplayEvent>.NativeClassPtr, "TriggerEventId");
		DelayThroughGameplayEvent.NativeFieldInfoPtr_Delay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DelayThroughGameplayEvent>.NativeClassPtr, "Delay");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DelayThroughGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TriggerEventId;
	private static readonly IntPtr NativeFieldInfoPtr_Delay;
	[FieldOffset(0)]
	public GameplayEventId TriggerEventId;
	[FieldOffset(8)]
	public float Delay;
}
