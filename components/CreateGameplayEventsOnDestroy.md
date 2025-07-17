---
nav_exclude: true
search_exclude: true
---

# CreateGameplayEventsOnDestroy

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public GameplayEventId EventId;
	[FieldOffset(8)]
	public GameplayEventTarget Target;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool SpecificDestroyReason;
	[FieldOffset(13)]
	public DestroyReason DestroyReason;
}
