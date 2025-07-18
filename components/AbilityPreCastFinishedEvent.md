---
nav_exclude: true
search_exclude: true
---

# AbilityPreCastFinishedEvent

```csharp
public struct AbilityPreCastFinishedEvent
{
	static AbilityPreCastFinishedEvent()
	{
		Il2CppClassPointerStore<AbilityPreCastFinishedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityPreCastFinishedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityPreCastFinishedEvent>.NativeClassPtr);
		AbilityPreCastFinishedEvent.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPreCastFinishedEvent>.NativeClassPtr, "Character");
		AbilityPreCastFinishedEvent.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPreCastFinishedEvent>.NativeClassPtr, "Ability");
		AbilityPreCastFinishedEvent.NativeFieldInfoPtr_AbilityGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPreCastFinishedEvent>.NativeClassPtr, "AbilityGroup");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityPreCastFinishedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Character;
	private static readonly IntPtr NativeFieldInfoPtr_Ability;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityGroup;

	public Entity Character;

	public Entity Ability;

	public Entity AbilityGroup;
}
```

## Server Systems

- [AbilityRunScriptsSystem](/systems/server/AbilityRunScriptsSystem)
- [CreateGameplayEvents_OnAbilityCast](/systems/server/CreateGameplayEvents_OnAbilityCast)
- [PlaceTileModelSystem](/systems/server/PlaceTileModelSystem)
- [VerifyingDismantleAbilitySystem](/systems/server/VerifyingDismantleAbilitySystem)
- [VerifyingRepairAbilitySystem](/systems/server/VerifyingRepairAbilitySystem)

## Client Systems

- [StunAnalyticsSystem_Client_EventHandlers](/systems/client/StunAnalyticsSystem_Client_EventHandlers)
- [TutorialSystem](/systems/client/TutorialSystem)
