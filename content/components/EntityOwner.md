---
nav_exclude: true
search_exclude: true
---

```csharp
public struct EntityOwner
{
	static EntityOwner()
	{
		Il2CppClassPointerStore<EntityOwner>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "EntityOwner");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EntityOwner>.NativeClassPtr);
		EntityOwner.NativeFieldInfoPtr_Owner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityOwner>.NativeClassPtr, "Owner");
		EntityOwner.NativeMethodInfoPtr_op_Implicit_Public_Static_Entity_EntityOwner_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityOwner>.NativeClassPtr, 100664148);
	}

	public unsafe static implicit operator Entity(EntityOwner entityOwner)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityOwner;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityOwner.NativeMethodInfoPtr_op_Implicit_Public_Static_Entity_EntityOwner_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EntityOwner>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Owner;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_Entity_EntityOwner_0;

	public Entity Owner;
}
```

## Server Systems

- [AbilityCastStarted_SetupAbilityTargetSystem_Shared]({{% relref "systems/server/AbilityCastStarted_SetupAbilityTargetSystem_Shared.md" %}})
- [AbilityDisableHeightCorrectionSystem_OnDestroy]({{% relref "systems/server/AbilityDisableHeightCorrectionSystem_OnDestroy.md" %}})
- [AdditionalInteractBuffComponentSpawnSystem]({{% relref "systems/server/AdditionalInteractBuffComponentSpawnSystem.md" %}})
- [Apply_BuffModificationsSystem_Server]({{% relref "systems/server/Apply_BuffModificationsSystem_Server.md" %}})
- [BindCoffinSystem]({{% relref "systems/server/BindCoffinSystem.md" %}})
- [BloodConsumeBuffDestroySystem]({{% relref "systems/server/BloodConsumeBuffDestroySystem.md" %}})
- [ChangeKnockbackResistanceDuringCast_OnDestroy]({{% relref "systems/server/ChangeKnockbackResistanceDuringCast_OnDestroy.md" %}})
- [Cleanup_BuffModificationsSystem_Server]({{% relref "systems/server/Cleanup_BuffModificationsSystem_Server.md" %}})
- [CopySpellmodFromAbilitySystem]({{% relref "systems/server/CopySpellmodFromAbilitySystem.md" %}})
- [DestroyOnOwnerDeathSystem]({{% relref "systems/server/DestroyOnOwnerDeathSystem.md" %}})
- [DestroyOnSpawnSystem]({{% relref "systems/server/DestroyOnSpawnSystem.md" %}})
- [GetOwnerFactionOnSpawnSystem]({{% relref "systems/server/GetOwnerFactionOnSpawnSystem.md" %}})
- [GetOwnerPrimaryAggroTargetOnSpawnSystem]({{% relref "systems/server/GetOwnerPrimaryAggroTargetOnSpawnSystem.md" %}})
- [GetOwnerTeamOnSpawnSystem]({{% relref "systems/server/GetOwnerTeamOnSpawnSystem.md" %}})
- [HandleGameplayEventsRecursiveSystem]({{% relref "systems/server/HandleGameplayEventsRecursiveSystem.md" %}})
- [HybridAttachPointTransformSystem]({{% relref "systems/server/HybridAttachPointTransformSystem.md" %}})
- [InteractValidateAndStopSystemServer]({{% relref "systems/server/InteractValidateAndStopSystemServer.md" %}})
- [ItemPickupSystem]({{% relref "systems/server/ItemPickupSystem.md" %}})
- [LinkMinionToOwnerOnSpawnSystem]({{% relref "systems/server/LinkMinionToOwnerOnSpawnSystem.md" %}})
- [MinionSpawnSystem]({{% relref "systems/server/MinionSpawnSystem.md" %}})
- [ModifyBloodDrainSystem_Destroy]({{% relref "systems/server/ModifyBloodDrainSystem_Destroy.md" %}})
- [ModifyBloodDrainSystem_Spawn]({{% relref "systems/server/ModifyBloodDrainSystem_Spawn.md" %}})
- [ModifyBloodDrainSystem_Update]({{% relref "systems/server/ModifyBloodDrainSystem_Update.md" %}})
- [ModifyTeamBuffSystem_Spawn]({{% relref "systems/server/ModifyTeamBuffSystem_Spawn.md" %}})
- [OpenDoorSystem]({{% relref "systems/server/OpenDoorSystem.md" %}})
- [ReplaceAbilityOnSlotSystem]({{% relref "systems/server/ReplaceAbilityOnSlotSystem.md" %}})
- [ScaleWithBloodEfficiencySystem]({{% relref "systems/server/ScaleWithBloodEfficiencySystem.md" %}})
- [Spawn_TravelBuffSystem]({{% relref "systems/server/Spawn_TravelBuffSystem.md" %}})
- [TargetAOESystem]({{% relref "systems/server/TargetAOESystem.md" %}})
- [UnitMountSpawnSystem]({{% relref "systems/server/UnitMountSpawnSystem.md" %}})
- [UnitMounterSpawnSystem]({{% relref "systems/server/UnitMounterSpawnSystem.md" %}})
- [UpdateModifyTeamBuffSystem]({{% relref "systems/server/UpdateModifyTeamBuffSystem.md" %}})
- [UsePortalSystem]({{% relref "systems/server/UsePortalSystem.md" %}})

## Client Systems

- [AbilityDisableHeightCorrectionSystem_OnDestroy]({{% relref "systems/client/AbilityDisableHeightCorrectionSystem_OnDestroy.md" %}})
- [AimPreviewDashSystem]({{% relref "systems/client/AimPreviewDashSystem.md" %}})
- [AimPreviewGeneralSystem]({{% relref "systems/client/AimPreviewGeneralSystem.md" %}})
- [AimPreviewMeleeSystem]({{% relref "systems/client/AimPreviewMeleeSystem.md" %}})
- [AimPreviewProjectileCursorSystem]({{% relref "systems/client/AimPreviewProjectileCursorSystem.md" %}})
- [AimPreviewProjectileSystem]({{% relref "systems/client/AimPreviewProjectileSystem.md" %}})
- [AimPreviewTargetAoeSystem]({{% relref "systems/client/AimPreviewTargetAoeSystem.md" %}})
- [AimPreviewTravelBuffSystem]({{% relref "systems/client/AimPreviewTravelBuffSystem.md" %}})
- [AreaSequenceSystem]({{% relref "systems/client/AreaSequenceSystem.md" %}})
- [BuffAimPreviewDestroySystem]({{% relref "systems/client/BuffAimPreviewDestroySystem.md" %}})
- [CharacterHudProgressBarSystem]({{% relref "systems/client/CharacterHudProgressBarSystem.md" %}})
- [CopySpellmodFromAbilitySystem]({{% relref "systems/client/CopySpellmodFromAbilitySystem.md" %}})
- [HybridAttachPointTransformSystem]({{% relref "systems/client/HybridAttachPointTransformSystem.md" %}})
- [HybridAttachPointTransformSystem_Client]({{% relref "systems/client/HybridAttachPointTransformSystem_Client.md" %}})
- [PlayMountedSequenceSystem]({{% relref "systems/client/PlayMountedSequenceSystem.md" %}})
- [ScaleWithBloodEfficiencySystem]({{% relref "systems/client/ScaleWithBloodEfficiencySystem.md" %}})
- [SpawnAimPreviewSystem]({{% relref "systems/client/SpawnAimPreviewSystem.md" %}})
- [TargetAOESequenceSystem]({{% relref "systems/client/TargetAOESequenceSystem.md" %}})
- [VisibilitySystem_CopyStateFromBuffTarget]({{% relref "systems/client/VisibilitySystem_CopyStateFromBuffTarget.md" %}})
