---
nav_exclude: true
search_exclude: true
---

# DelayThroughGameplayEvent_Trigger

```csharp
[StructLayout(2)]
public struct DelayThroughGameplayEvent_Trigger
{
	static DelayThroughGameplayEvent_Trigger()
	{
		Il2CppClassPointerStore<DelayThroughGameplayEvent_Trigger>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Shared", "DelayThroughGameplayEvent_Trigger");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DelayThroughGameplayEvent_Trigger>.NativeClassPtr);
		DelayThroughGameplayEvent_Trigger.NativeFieldInfoPtr_GameplayEvent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DelayThroughGameplayEvent_Trigger>.NativeClassPtr, "GameplayEvent");
		DelayThroughGameplayEvent_Trigger.NativeFieldInfoPtr_TriggerTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DelayThroughGameplayEvent_Trigger>.NativeClassPtr, "TriggerTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DelayThroughGameplayEvent_Trigger>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEvent;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerTime;
	[FieldOffset(0)]
	public GameplayEvent GameplayEvent;
	[FieldOffset(80)]
	public double TriggerTime;
}
