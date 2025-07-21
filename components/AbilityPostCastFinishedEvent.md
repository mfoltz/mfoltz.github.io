---
nav_exclude: true
search_exclude: false
---

# AbilityPostCastFinishedEvent

```csharp
public struct AbilityPostCastFinishedEvent
{
	static AbilityPostCastFinishedEvent()
	{
		Il2CppClassPointerStore<AbilityPostCastFinishedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityPostCastFinishedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityPostCastFinishedEvent>.NativeClassPtr);
		AbilityPostCastFinishedEvent.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPostCastFinishedEvent>.NativeClassPtr, "Character");
		AbilityPostCastFinishedEvent.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPostCastFinishedEvent>.NativeClassPtr, "Ability");
		AbilityPostCastFinishedEvent.NativeFieldInfoPtr_AbilityGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPostCastFinishedEvent>.NativeClassPtr, "AbilityGroup");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityPostCastFinishedEvent>.NativeClassPtr, ref this));
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
