---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CreateGameplayEventOnMinionDeath
{
	static CreateGameplayEventOnMinionDeath()
	{
		Il2CppClassPointerStore<CreateGameplayEventOnMinionDeath>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateGameplayEventOnMinionDeath");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventOnMinionDeath>.NativeClassPtr);
		CreateGameplayEventOnMinionDeath.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnMinionDeath>.NativeClassPtr, "EventId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventOnMinionDeath>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventId;

	public GameplayEventId EventId;
}
```
