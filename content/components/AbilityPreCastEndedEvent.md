---
nav_exclude: true
search_exclude: true
---

# AbilityPreCastEndedEvent

```csharp
public struct AbilityPreCastEndedEvent
{
	static AbilityPreCastEndedEvent()
	{
		Il2CppClassPointerStore<AbilityPreCastEndedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityPreCastEndedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityPreCastEndedEvent>.NativeClassPtr);
		AbilityPreCastEndedEvent.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPreCastEndedEvent>.NativeClassPtr, "Character");
		AbilityPreCastEndedEvent.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPreCastEndedEvent>.NativeClassPtr, "Ability");
		AbilityPreCastEndedEvent.NativeFieldInfoPtr_AbilityGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPreCastEndedEvent>.NativeClassPtr, "AbilityGroup");
		AbilityPreCastEndedEvent.NativeFieldInfoPtr_WasInterrupted = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPreCastEndedEvent>.NativeClassPtr, "WasInterrupted");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityPreCastEndedEvent>.NativeClassPtr, ref this));
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

- [AbilityDisableHeightCorrectionSystem_Shared]({{< relref "systems/server/AbilityDisableHeightCorrectionSystem_Shared.md" >}})
- [AbilityRunScriptsSystem]({{< relref "systems/server/AbilityRunScriptsSystem.md" >}})
- [VerifyingRepairAbilitySystem]({{< relref "systems/server/VerifyingRepairAbilitySystem.md" >}})

## Client Systems

- [AbilityDisableHeightCorrectionSystem_Shared]({{< relref "systems/client/AbilityDisableHeightCorrectionSystem_Shared.md" >}})
- [AbilityRunScriptsSystem_Client]({{< relref "systems/client/AbilityRunScriptsSystem_Client.md" >}})
