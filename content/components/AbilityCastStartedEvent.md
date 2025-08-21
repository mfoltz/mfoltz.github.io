---
nav_exclude: true
search_exclude: true
---

```csharp
public struct AbilityCastStartedEvent
{
	static AbilityCastStartedEvent()
	{
		Il2CppClassPointerStore<AbilityCastStartedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityCastStartedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityCastStartedEvent>.NativeClassPtr);
		AbilityCastStartedEvent.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastStartedEvent>.NativeClassPtr, "Time");
		AbilityCastStartedEvent.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastStartedEvent>.NativeClassPtr, "Character");
		AbilityCastStartedEvent.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastStartedEvent>.NativeClassPtr, "Ability");
		AbilityCastStartedEvent.NativeFieldInfoPtr_AbilityGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastStartedEvent>.NativeClassPtr, "AbilityGroup");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityCastStartedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Time;
	private static readonly IntPtr NativeFieldInfoPtr_Character;
	private static readonly IntPtr NativeFieldInfoPtr_Ability;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityGroup;

	public double Time;

	public Entity Character;

	public Entity Ability;

	public Entity AbilityGroup;
}
```

## Server Systems

- [AbilityCastStarted_SetupAbilityTargetSystem_Shared]({{% relref "systems/server/AbilityCastStarted_SetupAbilityTargetSystem_Shared.md" %}})
- [AbilityCastStarted_SpawnPrefabSystem_Server]({{% relref "systems/server/AbilityCastStarted_SpawnPrefabSystem_Server.md" %}})
- [AbilityDisableHeightCorrectionSystem_Shared]({{% relref "systems/server/AbilityDisableHeightCorrectionSystem_Shared.md" %}})
- [AbilityRotateTowardAimDuringCastSystem_Shared]({{% relref "systems/server/AbilityRotateTowardAimDuringCastSystem_Shared.md" %}})
- [AbilityRunScriptsSystem]({{% relref "systems/server/AbilityRunScriptsSystem.md" %}})
- [ChangeKnockbackResistanceDuringCast_Shared]({{% relref "systems/server/ChangeKnockbackResistanceDuringCast_Shared.md" %}})
- [CreateGameplayEvents_OnAbilityCast]({{% relref "systems/server/CreateGameplayEvents_OnAbilityCast.md" %}})
- [VerifyingDismantleAbilitySystem]({{% relref "systems/server/VerifyingDismantleAbilitySystem.md" %}})
- [VerifyingRepairAbilitySystem]({{% relref "systems/server/VerifyingRepairAbilitySystem.md" %}})

## Client Systems

- [AbilityCastStarted_SetupAbilityTargetSystem_Shared]({{% relref "systems/client/AbilityCastStarted_SetupAbilityTargetSystem_Shared.md" %}})
- [AbilityDisableHeightCorrectionSystem_Shared]({{% relref "systems/client/AbilityDisableHeightCorrectionSystem_Shared.md" %}})
- [AbilityRotateTowardAimDuringCastSystem_Shared]({{% relref "systems/client/AbilityRotateTowardAimDuringCastSystem_Shared.md" %}})
- [ControllerVibrationSystem]({{% relref "systems/client/ControllerVibrationSystem.md" %}})
