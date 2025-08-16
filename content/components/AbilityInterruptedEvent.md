---
nav_exclude: true
search_exclude: true
---

# AbilityInterruptedEvent

```csharp
public struct AbilityInterruptedEvent
{
	static AbilityInterruptedEvent()
	{
		Il2CppClassPointerStore<AbilityInterruptedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityInterruptedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityInterruptedEvent>.NativeClassPtr);
		AbilityInterruptedEvent.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityInterruptedEvent>.NativeClassPtr, "Character");
		AbilityInterruptedEvent.NativeFieldInfoPtr_AbilityGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityInterruptedEvent>.NativeClassPtr, "AbilityGroup");
		AbilityInterruptedEvent.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityInterruptedEvent>.NativeClassPtr, "Ability");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityInterruptedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Character;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityGroup;
	private static readonly IntPtr NativeFieldInfoPtr_Ability;

	public Entity Character;

	public Entity AbilityGroup;

	public Entity Ability;
}
```

## Server Systems

- [AbilityRunScriptsSystem]({{< relref "systems/server/AbilityRunScriptsSystem.md" >}})
- [CreateGameplayEvents_OnAbilityCast]({{< relref "systems/server/CreateGameplayEvents_OnAbilityCast.md" >}})

## Client Systems

- [AbilityStopSequenceOnInterrupt_Client]({{< relref "systems/client/AbilityStopSequenceOnInterrupt_Client.md" >}})
- [StunAnalyticsSystem_Client_EventHandlers]({{< relref "systems/client/StunAnalyticsSystem_Client_EventHandlers.md" >}})
