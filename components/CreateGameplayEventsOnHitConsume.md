---
nav_exclude: true
search_exclude: true
---

# CreateGameplayEventsOnHitConsume

```csharp
public struct CreateGameplayEventsOnHitConsume
{
	static CreateGameplayEventsOnHitConsume()
	{
		Il2CppClassPointerStore<CreateGameplayEventsOnHitConsume>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateGameplayEventsOnHitConsume");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventsOnHitConsume>.NativeClassPtr);
		CreateGameplayEventsOnHitConsume.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnHitConsume>.NativeClassPtr, "EventId");
		CreateGameplayEventsOnHitConsume.NativeFieldInfoPtr_Filter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnHitConsume>.NativeClassPtr, "Filter");
		CreateGameplayEventsOnHitConsume.NativeFieldInfoPtr_DestroySpell = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnHitConsume>.NativeClassPtr, "DestroySpell");
		CreateGameplayEventsOnHitConsume.NativeFieldInfoPtr_MaxAngleDiff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnHitConsume>.NativeClassPtr, "MaxAngleDiff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventsOnHitConsume>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventId;
	private static readonly IntPtr NativeFieldInfoPtr_Filter;
	private static readonly IntPtr NativeFieldInfoPtr_DestroySpell;
	private static readonly IntPtr NativeFieldInfoPtr_MaxAngleDiff;

	public GameplayEventId EventId;

	public HitConsumeFilter Filter;

	public bool DestroySpell;

	public float MaxAngleDiff;
}
```
