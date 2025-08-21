---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ToggleDisabledDueToTimeoutEvent
{
	static ToggleDisabledDueToTimeoutEvent()
	{
		Il2CppClassPointerStore<ToggleDisabledDueToTimeoutEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ToggleDisabledDueToTimeoutEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ToggleDisabledDueToTimeoutEvent>.NativeClassPtr);
		ToggleDisabledDueToTimeoutEvent.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ToggleDisabledDueToTimeoutEvent>.NativeClassPtr, "Entity");
		ToggleDisabledDueToTimeoutEvent.NativeFieldInfoPtr_Disabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ToggleDisabledDueToTimeoutEvent>.NativeClassPtr, "Disabled");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ToggleDisabledDueToTimeoutEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_Disabled;

	public Entity Entity;

	public bool Disabled;
}
```

## Client Systems

- [AiMoveSystem_Client_ReactToDisabled]({{% relref "systems/client/AiMoveSystem_Client_ReactToDisabled.md" %}})
- [DestroyToggleDisabledDueToTimeoutEventsSystem]({{% relref "systems/client/DestroyToggleDisabledDueToTimeoutEventsSystem.md" %}})
