---
nav_exclude: true
search_exclude: true
---

```csharp
public struct DestroyTag
{
	static DestroyTag()
	{
		Il2CppClassPointerStore<DestroyTag>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "DestroyTag");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyTag>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyTag>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [AbilityDisableHeightCorrectionSystem_OnDestroy]({{% relref "systems/server/AbilityDisableHeightCorrectionSystem_OnDestroy.md" %}})
- [AdditionalInteractBuffComponentDestroySystem]({{% relref "systems/server/AdditionalInteractBuffComponentDestroySystem.md" %}})
- [AllowJumpFromCliffsBuffDestroySystem]({{% relref "systems/server/AllowJumpFromCliffsBuffDestroySystem.md" %}})
- [ArmorLevelSystem_Destroy]({{% relref "systems/server/ArmorLevelSystem_Destroy.md" %}})
- [BagEquipTagSystem_Destroy]({{% relref "systems/server/BagEquipTagSystem_Destroy.md" %}})
- [BloodConsumeBuffDestroySystem]({{% relref "systems/server/BloodConsumeBuffDestroySystem.md" %}})
- [CastleBuildingAttachmentCleanup]({{% relref "systems/server/CastleBuildingAttachmentCleanup.md" %}})
- [CastleBuildingWorkstationsSystem]({{% relref "systems/server/CastleBuildingWorkstationsSystem.md" %}})
- [CastleDecrementCountOnDestroySystem]({{% relref "systems/server/CastleDecrementCountOnDestroySystem.md" %}})
- [CastleHasItemsOnDestroySystem]({{% relref "systems/server/CastleHasItemsOnDestroySystem.md" %}})
- [CastleHeartClearRaidStateSystem]({{% relref "systems/server/CastleHeartClearRaidStateSystem.md" %}})
- [CastleSharedInventorySystem_Destroy]({{% relref "systems/server/CastleSharedInventorySystem_Destroy.md" %}})
- [CastleTeleporterDisconnectSystem]({{% relref "systems/server/CastleTeleporterDisconnectSystem.md" %}})
- [ChangeKnockbackResistanceDuringCast_OnDestroy]({{% relref "systems/server/ChangeKnockbackResistanceDuringCast_OnDestroy.md" %}})
- [CreateGameplayEventOnDestroySystem]({{% relref "systems/server/CreateGameplayEventOnDestroySystem.md" %}})
- [DestroyDeadSystem]({{% relref "systems/server/DestroyDeadSystem.md" %}})
- [DestroyGroup]({{% relref "systems/server/DestroyGroup.md" %}})
- [DestroyOnOwnerDeathSystem]({{% relref "systems/server/DestroyOnOwnerDeathSystem.md" %}})
- [DestroyOnSpawnSystem]({{% relref "systems/server/DestroyOnSpawnSystem.md" %}})
- [DestroyRoofOnFloorDestroySystem]({{% relref "systems/server/DestroyRoofOnFloorDestroySystem.md" %}})
- [DestroySequenceWhenSelfIsDestroyedSystem]({{% relref "systems/server/DestroySequenceWhenSelfIsDestroyedSystem.md" %}})
- [DestroySpawnChainChildrenOnDestroySystem]({{% relref "systems/server/DestroySpawnChainChildrenOnDestroySystem.md" %}})
- [DestroyWhenDisabledSystem]({{% relref "systems/server/DestroyWhenDisabledSystem.md" %}})
- [Destroy_BuffModificationsSystem_Server]({{% relref "systems/server/Destroy_BuffModificationsSystem_Server.md" %}})
- [Destroy_KnockbackResistanceBuff]({{% relref "systems/server/Destroy_KnockbackResistanceBuff.md" %}})
- [Destroy_KnockbackSystem]({{% relref "systems/server/Destroy_KnockbackSystem.md" %}})
- [Destroy_MoveSpeedBuffSystem]({{% relref "systems/server/Destroy_MoveSpeedBuffSystem.md" %}})
- [Destroy_ServerControlsPositionSystem]({{% relref "systems/server/Destroy_ServerControlsPositionSystem.md" %}})
- [Destroy_SetOwnerRotateTowardsMouseSystem]({{% relref "systems/server/Destroy_SetOwnerRotateTowardsMouseSystem.md" %}})
- [Destroy_SetOwnerRotateTowardsMovementSystem]({{% relref "systems/server/Destroy_SetOwnerRotateTowardsMovementSystem.md" %}})
- [Destroy_TravelBuffSystem]({{% relref "systems/server/Destroy_TravelBuffSystem.md" %}})
- [DetachSystem]({{% relref "systems/server/DetachSystem.md" %}})
- [DropInventorySystem]({{% relref "systems/server/DropInventorySystem.md" %}})
- [DropItemThrowSystem_Destroy]({{% relref "systems/server/DropItemThrowSystem_Destroy.md" %}})
- [GallopBuffSystem_Destroy]({{% relref "systems/server/GallopBuffSystem_Destroy.md" %}})
- [HasResidentBuffDestroySystem_Shared]({{% relref "systems/server/HasResidentBuffDestroySystem_Shared.md" %}})
- [HitCastColliderSystem_OnDestroy]({{% relref "systems/server/HitCastColliderSystem_OnDestroy.md" %}})
- [InsideBuffDestroySystem_Shared]({{% relref "systems/server/InsideBuffDestroySystem_Shared.md" %}})
- [JumpFromCliffsTravelDestroySystem]({{% relref "systems/server/JumpFromCliffsTravelDestroySystem.md" %}})
- [ModifyBloodDrainSystem_Destroy]({{% relref "systems/server/ModifyBloodDrainSystem_Destroy.md" %}})
- [ModifyTeamBuffSystem_Destroy]({{% relref "systems/server/ModifyTeamBuffSystem_Destroy.md" %}})
- [MoveTowardsRotationSystem_Destroy]({{% relref "systems/server/MoveTowardsRotationSystem_Destroy.md" %}})
- [RandomizedSpawnChainDestroySystem]({{% relref "systems/server/RandomizedSpawnChainDestroySystem.md" %}})
- [RemoveDestroyedEntityFromSpawnRegionSystem]({{% relref "systems/server/RemoveDestroyedEntityFromSpawnRegionSystem.md" %}})
- [ReplaceAbilityOnSlotWhenMountedBuffSystem_Destroy]({{% relref "systems/server/ReplaceAbilityOnSlotWhenMountedBuffSystem_Destroy.md" %}})
- [ReturnNetworkIdSystem_Server_MegaStatics]({{% relref "systems/server/ReturnNetworkIdSystem_Server_MegaStatics.md" %}})
- [RoomRoofUpdateSystem]({{% relref "systems/server/RoomRoofUpdateSystem.md" %}})
- [ScriptDestroyServer]({{% relref "systems/server/ScriptDestroyServer.md" %}})
- [ServantReactToDestroySystem]({{% relref "systems/server/ServantReactToDestroySystem.md" %}})
- [SoulShardBuffDestroySystem]({{% relref "systems/server/SoulShardBuffDestroySystem.md" %}})
- [SpawnChainDestroyedChildTransitionsSystem]({{% relref "systems/server/SpawnChainDestroyedChildTransitionsSystem.md" %}})
- [SpawnPrefabOnDestroySystem]({{% relref "systems/server/SpawnPrefabOnDestroySystem.md" %}})
- [SpawnRegionOnDestroySystem]({{% relref "systems/server/SpawnRegionOnDestroySystem.md" %}})
- [TakeDamageInSunDestroySystem]({{% relref "systems/server/TakeDamageInSunDestroySystem.md" %}})
- [TravelBuffDeregisterSystem]({{% relref "systems/server/TravelBuffDeregisterSystem.md" %}})
- [UnitCompositionSpawnerDestroyTagChildrenSystem]({{% relref "systems/server/UnitCompositionSpawnerDestroyTagChildrenSystem.md" %}})
- [UnitMountDestroySystem]({{% relref "systems/server/UnitMountDestroySystem.md" %}})
- [UnitMounterDestroySystem]({{% relref "systems/server/UnitMounterDestroySystem.md" %}})
- [UnitSpawnerOnDestroySystem]({{% relref "systems/server/UnitSpawnerOnDestroySystem.md" %}})
- [UpdateBuffsBuffer_Destroy]({{% relref "systems/server/UpdateBuffsBuffer_Destroy.md" %}})
- [WeaponLevelSystem_Destroy]({{% relref "systems/server/WeaponLevelSystem_Destroy.md" %}})

## Client Systems

- [AbilityDisableHeightCorrectionSystem_OnDestroy]({{% relref "systems/client/AbilityDisableHeightCorrectionSystem_OnDestroy.md" %}})
- [BuffAimPreviewDestroySystem]({{% relref "systems/client/BuffAimPreviewDestroySystem.md" %}})
- [BuffSequenceSystem_Destroy]({{% relref "systems/client/BuffSequenceSystem_Destroy.md" %}})
- [BuildMenuWallpaperOperationSystem_Destroy]({{% relref "systems/client/BuildMenuWallpaperOperationSystem_Destroy.md" %}})
- [BuildModeDestroySystem]({{% relref "systems/client/BuildModeDestroySystem.md" %}})
- [CleanUpWeakRefsSystem]({{% relref "systems/client/CleanUpWeakRefsSystem.md" %}})
- [ConditionalInfoSystem]({{% relref "systems/client/ConditionalInfoSystem.md" %}})
- [DestroyGroup]({{% relref "systems/client/DestroyGroup.md" %}})
- [DestroySequenceWhenSelfIsDestroyedSystem]({{% relref "systems/client/DestroySequenceWhenSelfIsDestroyedSystem.md" %}})
- [DestroyWallpaperChildrenSystem]({{% relref "systems/client/DestroyWallpaperChildrenSystem.md" %}})
- [Destroy_BuffModificationsSystem_Client]({{% relref "systems/client/Destroy_BuffModificationsSystem_Client.md" %}})
- [Destroy_RemapAbilitySlotsForGamepadBuffSystem]({{% relref "systems/client/Destroy_RemapAbilitySlotsForGamepadBuffSystem.md" %}})
- [Destroy_TravelBuffSystem]({{% relref "systems/client/Destroy_TravelBuffSystem.md" %}})
- [DetachSystem]({{% relref "systems/client/DetachSystem.md" %}})
- [FreezeHybridAnimationSystem_Destroy]({{% relref "systems/client/FreezeHybridAnimationSystem_Destroy.md" %}})
- [GallopBuffSystem_Destroy]({{% relref "systems/client/GallopBuffSystem_Destroy.md" %}})
- [HasResidentBuffDestroySystem_Shared]({{% relref "systems/client/HasResidentBuffDestroySystem_Shared.md" %}})
- [HideWeaponSystem_Destroy]({{% relref "systems/client/HideWeaponSystem_Destroy.md" %}})
- [JumpFromCliffsTravelDestroySystem]({{% relref "systems/client/JumpFromCliffsTravelDestroySystem.md" %}})
- [LogEntityDestroySystem]({{% relref "systems/client/LogEntityDestroySystem.md" %}})
- [NetworkInterpolationSystem_Client]({{% relref "systems/client/NetworkInterpolationSystem_Client.md" %}})
- [PlaySequenceOnDestroySystem]({{% relref "systems/client/PlaySequenceOnDestroySystem.md" %}})
- [RemoveMetadataEntitySystem]({{% relref "systems/client/RemoveMetadataEntitySystem.md" %}})
- [ScriptDestroyClient]({{% relref "systems/client/ScriptDestroyClient.md" %}})
- [SpawnPhysicsObjectOnDeathSystem]({{% relref "systems/client/SpawnPhysicsObjectOnDeathSystem.md" %}})
- [StunCloth_DestroyModify_System]({{% relref "systems/client/StunCloth_DestroyModify_System.md" %}})
- [TakeDamageInSunDestroySystem]({{% relref "systems/client/TakeDamageInSunDestroySystem.md" %}})
- [TargetAoE_DestroySystem]({{% relref "systems/client/TargetAoE_DestroySystem.md" %}})
- [TravelBuffDeregisterSystem]({{% relref "systems/client/TravelBuffDeregisterSystem.md" %}})
- [UpdateBuffsBuffer_Destroy]({{% relref "systems/client/UpdateBuffsBuffer_Destroy.md" %}})
- [VbloodGhostBuffSystem_Destroy]({{% relref "systems/client/VbloodGhostBuffSystem_Destroy.md" %}})
