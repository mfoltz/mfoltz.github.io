---
nav_exclude: true
search_exclude: true
---

# EntityOwner

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

- [AbilityCastStarted_SetupAbilityTargetSystem_Shared](/systems/server/AbilityCastStarted_SetupAbilityTargetSystem_Shared)
- [AbilityDisableHeightCorrectionSystem_OnDestroy](/systems/server/AbilityDisableHeightCorrectionSystem_OnDestroy)
- [AdditionalInteractBuffComponentSpawnSystem](/systems/server/AdditionalInteractBuffComponentSpawnSystem)
- [Apply_BuffModificationsSystem_Server](/systems/server/Apply_BuffModificationsSystem_Server)
- [BindCoffinSystem](/systems/server/BindCoffinSystem)
- [BloodConsumeBuffDestroySystem](/systems/server/BloodConsumeBuffDestroySystem)
- [ChangeKnockbackResistanceDuringCast_OnDestroy](/systems/server/ChangeKnockbackResistanceDuringCast_OnDestroy)
- [Cleanup_BuffModificationsSystem_Server](/systems/server/Cleanup_BuffModificationsSystem_Server)
- [CopySpellmodFromAbilitySystem](/systems/server/CopySpellmodFromAbilitySystem)
- [DestroyOnOwnerDeathSystem](/systems/server/DestroyOnOwnerDeathSystem)
- [DestroyOnSpawnSystem](/systems/server/DestroyOnSpawnSystem)
- [GetOwnerFactionOnSpawnSystem](/systems/server/GetOwnerFactionOnSpawnSystem)
- [GetOwnerPrimaryAggroTargetOnSpawnSystem](/systems/server/GetOwnerPrimaryAggroTargetOnSpawnSystem)
- [GetOwnerTeamOnSpawnSystem](/systems/server/GetOwnerTeamOnSpawnSystem)
- [HandleGameplayEventsRecursiveSystem](/systems/server/HandleGameplayEventsRecursiveSystem)
- [HybridAttachPointTransformSystem](/systems/server/HybridAttachPointTransformSystem)
- [InteractValidateAndStopSystemServer](/systems/server/InteractValidateAndStopSystemServer)
- [ItemPickupSystem](/systems/server/ItemPickupSystem)
- [LinkMinionToOwnerOnSpawnSystem](/systems/server/LinkMinionToOwnerOnSpawnSystem)
- [MinionSpawnSystem](/systems/server/MinionSpawnSystem)
- [ModifyBloodDrainSystem_Destroy](/systems/server/ModifyBloodDrainSystem_Destroy)
- [ModifyBloodDrainSystem_Spawn](/systems/server/ModifyBloodDrainSystem_Spawn)
- [ModifyBloodDrainSystem_Update](/systems/server/ModifyBloodDrainSystem_Update)
- [ModifyTeamBuffSystem_Spawn](/systems/server/ModifyTeamBuffSystem_Spawn)
- [OpenDoorSystem](/systems/server/OpenDoorSystem)
- [ReplaceAbilityOnSlotSystem](/systems/server/ReplaceAbilityOnSlotSystem)
- [ScaleWithBloodEfficiencySystem](/systems/server/ScaleWithBloodEfficiencySystem)
- [Spawn_TravelBuffSystem](/systems/server/Spawn_TravelBuffSystem)
- [TargetAOESystem](/systems/server/TargetAOESystem)
- [UnitMountSpawnSystem](/systems/server/UnitMountSpawnSystem)
- [UnitMounterSpawnSystem](/systems/server/UnitMounterSpawnSystem)
- [UpdateModifyTeamBuffSystem](/systems/server/UpdateModifyTeamBuffSystem)
- [UsePortalSystem](/systems/server/UsePortalSystem)

## Client Systems

- [AbilityDisableHeightCorrectionSystem_OnDestroy](/systems/client/AbilityDisableHeightCorrectionSystem_OnDestroy)
- [AimPreviewDashSystem](/systems/client/AimPreviewDashSystem)
- [AimPreviewGeneralSystem](/systems/client/AimPreviewGeneralSystem)
- [AimPreviewMeleeSystem](/systems/client/AimPreviewMeleeSystem)
- [AimPreviewProjectileCursorSystem](/systems/client/AimPreviewProjectileCursorSystem)
- [AimPreviewProjectileSystem](/systems/client/AimPreviewProjectileSystem)
- [AimPreviewTargetAoeSystem](/systems/client/AimPreviewTargetAoeSystem)
- [AimPreviewTravelBuffSystem](/systems/client/AimPreviewTravelBuffSystem)
- [AreaSequenceSystem](/systems/client/AreaSequenceSystem)
- [BuffAimPreviewDestroySystem](/systems/client/BuffAimPreviewDestroySystem)
- [CharacterHudProgressBarSystem](/systems/client/CharacterHudProgressBarSystem)
- [CopySpellmodFromAbilitySystem](/systems/client/CopySpellmodFromAbilitySystem)
- [HybridAttachPointTransformSystem](/systems/client/HybridAttachPointTransformSystem)
- [HybridAttachPointTransformSystem_Client](/systems/client/HybridAttachPointTransformSystem_Client)
- [PlayMountedSequenceSystem](/systems/client/PlayMountedSequenceSystem)
- [ScaleWithBloodEfficiencySystem](/systems/client/ScaleWithBloodEfficiencySystem)
- [SpawnAimPreviewSystem](/systems/client/SpawnAimPreviewSystem)
- [TargetAOESequenceSystem](/systems/client/TargetAOESequenceSystem)
- [VisibilitySystem_CopyStateFromBuffTarget](/systems/client/VisibilitySystem_CopyStateFromBuffTarget)
