---
nav_exclude: true
search_exclude: true
---

# CreateGameplayEventsOnTick

```csharp
public struct CreateGameplayEventsOnTick
{
	static CreateGameplayEventsOnTick()
	{
		Il2CppClassPointerStore<CreateGameplayEventsOnTick>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateGameplayEventsOnTick");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventsOnTick>.NativeClassPtr);
		CreateGameplayEventsOnTick.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnTick>.NativeClassPtr, "EventId");
		CreateGameplayEventsOnTick.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnTick>.NativeClassPtr, "Target");
		CreateGameplayEventsOnTick.NativeFieldInfoPtr_TickInterval = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnTick>.NativeClassPtr, "TickInterval");
		CreateGameplayEventsOnTick.NativeFieldInfoPtr_TickTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnTick>.NativeClassPtr, "TickTime");
		CreateGameplayEventsOnTick.NativeFieldInfoPtr_MaxTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnTick>.NativeClassPtr, "MaxTicks");
		CreateGameplayEventsOnTick.NativeFieldInfoPtr_CallScriptOnTick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnTick>.NativeClassPtr, "CallScriptOnTick");
		CreateGameplayEventsOnTick.NativeFieldInfoPtr_RandomTickOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnTick>.NativeClassPtr, "RandomTickOffset");
		CreateGameplayEventsOnTick.NativeFieldInfoPtr_RandomTickInterval = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnTick>.NativeClassPtr, "RandomTickInterval");
		CreateGameplayEventsOnTick.NativeFieldInfoPtr_ResetWhenBuffStacksChanged = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnTick>.NativeClassPtr, "ResetWhenBuffStacksChanged");
		CreateGameplayEventsOnTick.NativeFieldInfoPtr_ResetWhenCastingAbility = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnTick>.NativeClassPtr, "ResetWhenCastingAbility");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventsOnTick>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventId;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_TickInterval;
	private static readonly IntPtr NativeFieldInfoPtr_TickTime;
	private static readonly IntPtr NativeFieldInfoPtr_MaxTicks;
	private static readonly IntPtr NativeFieldInfoPtr_CallScriptOnTick;
	private static readonly IntPtr NativeFieldInfoPtr_RandomTickOffset;
	private static readonly IntPtr NativeFieldInfoPtr_RandomTickInterval;
	private static readonly IntPtr NativeFieldInfoPtr_ResetWhenBuffStacksChanged;
	private static readonly IntPtr NativeFieldInfoPtr_ResetWhenCastingAbility;

	public GameplayEventId EventId;

	public GameplayEventTarget Target;

	public float TickInterval;

	public float TickTime;

	public int MaxTicks;

	public bool CallScriptOnTick;

	public float RandomTickOffset;

	public float RandomTickInterval;

	public bool ResetWhenBuffStacksChanged;

	public PrefabGUID ResetWhenCastingAbility;
}
```

## Server Systems

- [CreateGameplayEventOnTickSystem](/systems/server/CreateGameplayEventOnTickSystem)
- [CreateGameplayEventOnTickSystem_Spawn](/systems/server/CreateGameplayEventOnTickSystem_Spawn)
