---
nav_exclude: true
search_exclude: true
---

# CreateGameplayEventsOnAbilityImpaired

```csharp
[StructLayout(2)]
public struct CreateGameplayEventsOnAbilityImpaired
{
	static CreateGameplayEventsOnAbilityImpaired()
	{
		Il2CppClassPointerStore<CreateGameplayEventsOnAbilityImpaired>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateGameplayEventsOnAbilityImpaired");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventsOnAbilityImpaired>.NativeClassPtr);
		CreateGameplayEventsOnAbilityImpaired.NativeFieldInfoPtr_PreviousIsImpaired = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnAbilityImpaired>.NativeClassPtr, "PreviousIsImpaired");
		CreateGameplayEventsOnAbilityImpaired.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnAbilityImpaired>.NativeClassPtr, "EventId");
		CreateGameplayEventsOnAbilityImpaired.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnAbilityImpaired>.NativeClassPtr, "Source");
		CreateGameplayEventsOnAbilityImpaired.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnAbilityImpaired>.NativeClassPtr, "Target");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventsOnAbilityImpaired>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PreviousIsImpaired;
	private static readonly IntPtr NativeFieldInfoPtr_EventId;
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool PreviousIsImpaired;
	[FieldOffset(4)]
	public GameplayEventId EventId;
	[FieldOffset(12)]
	public GameplayEventTarget Source;
	[FieldOffset(16)]
	public GameplayEventTarget Target;
}
