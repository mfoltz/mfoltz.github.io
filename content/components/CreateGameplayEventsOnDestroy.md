---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CreateGameplayEventsOnDestroy
{
	static CreateGameplayEventsOnDestroy()
	{
		Il2CppClassPointerStore<CreateGameplayEventsOnDestroy>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateGameplayEventsOnDestroy");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventsOnDestroy>.NativeClassPtr);
		CreateGameplayEventsOnDestroy.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnDestroy>.NativeClassPtr, "EventId");
		CreateGameplayEventsOnDestroy.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnDestroy>.NativeClassPtr, "Target");
		CreateGameplayEventsOnDestroy.NativeFieldInfoPtr_SpecificDestroyReason = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnDestroy>.NativeClassPtr, "SpecificDestroyReason");
		CreateGameplayEventsOnDestroy.NativeFieldInfoPtr_DestroyReason = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnDestroy>.NativeClassPtr, "DestroyReason");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventsOnDestroy>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventId;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_SpecificDestroyReason;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyReason;

	public GameplayEventId EventId;

	public GameplayEventTarget Target;

	public bool SpecificDestroyReason;

	public DestroyReason DestroyReason;
}
```

## Server Systems

- [CreateGameplayEventOnDestroySystem]({{% relref "systems/server/CreateGameplayEventOnDestroySystem.md" %}})
