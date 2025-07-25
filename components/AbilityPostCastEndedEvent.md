---
nav_exclude: true
search_exclude: true
---

# AbilityPostCastEndedEvent

```csharp
public struct AbilityPostCastEndedEvent
{
	static AbilityPostCastEndedEvent()
	{
		Il2CppClassPointerStore<AbilityPostCastEndedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityPostCastEndedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityPostCastEndedEvent>.NativeClassPtr);
		AbilityPostCastEndedEvent.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPostCastEndedEvent>.NativeClassPtr, "Character");
		AbilityPostCastEndedEvent.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPostCastEndedEvent>.NativeClassPtr, "Ability");
		AbilityPostCastEndedEvent.NativeFieldInfoPtr_AbilityGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPostCastEndedEvent>.NativeClassPtr, "AbilityGroup");
		AbilityPostCastEndedEvent.NativeFieldInfoPtr_WasInterrupted = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPostCastEndedEvent>.NativeClassPtr, "WasInterrupted");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityPostCastEndedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Character;
	private static readonly IntPtr NativeFieldInfoPtr_Ability;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityGroup;
	private static readonly IntPtr NativeFieldInfoPtr_WasInterrupted;

	public Entity Character;

	public Entity Ability;

	public Entity AbilityGroup;

	public bool WasInterrupted;
}
```

## Server Systems

- [AbilityRunScriptsSystem](/systems/server/AbilityRunScriptsSystem)
