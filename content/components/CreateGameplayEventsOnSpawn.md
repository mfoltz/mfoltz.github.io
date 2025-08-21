---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CreateGameplayEventsOnSpawn
{
	static CreateGameplayEventsOnSpawn()
	{
		Il2CppClassPointerStore<CreateGameplayEventsOnSpawn>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateGameplayEventsOnSpawn");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventsOnSpawn>.NativeClassPtr);
		CreateGameplayEventsOnSpawn.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnSpawn>.NativeClassPtr, "EventId");
		CreateGameplayEventsOnSpawn.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnSpawn>.NativeClassPtr, "Target");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventsOnSpawn>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventId;
	private static readonly IntPtr NativeFieldInfoPtr_Target;

	public GameplayEventId EventId;

	public GameplayEventTarget Target;
}
```

## Server Systems

- [CreateGameplayEventOnSpawnSystem]({{% relref "systems/server/CreateGameplayEventOnSpawnSystem.md" %}})
