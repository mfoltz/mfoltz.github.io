---
nav_exclude: true
search_exclude: false
---

# Buff

```csharp
public struct Buff
{
	static Buff()
	{
		Il2CppClassPointerStore<Buff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Buff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Buff>.NativeClassPtr);
		Buff.NativeFieldInfoPtr_StartTimeUnmodified = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "StartTimeUnmodified");
		Buff.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "Target");
		Buff.NativeFieldInfoPtr_BuffType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "BuffType");
		Buff.NativeFieldInfoPtr_Stacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "Stacks");
		Buff.NativeFieldInfoPtr_MaxStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "MaxStacks");
		Buff.NativeFieldInfoPtr_ResetAge = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "ResetAge");
		Buff.NativeFieldInfoPtr_IncreaseStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "IncreaseStacks");
		Buff.NativeFieldInfoPtr_CorrectlyCreated = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "CorrectlyCreated");
		Buff.NativeFieldInfoPtr_OneInstancePerOwner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "OneInstancePerOwner");
		Buff.NativeFieldInfoPtr_BuffEffectType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "BuffEffectType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Buff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StartTimeUnmodified;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_BuffType;
	private static readonly IntPtr NativeFieldInfoPtr_Stacks;
	private static readonly IntPtr NativeFieldInfoPtr_MaxStacks;
	private static readonly IntPtr NativeFieldInfoPtr_ResetAge;
	private static readonly IntPtr NativeFieldInfoPtr_IncreaseStacks;
	private static readonly IntPtr NativeFieldInfoPtr_CorrectlyCreated;
	private static readonly IntPtr NativeFieldInfoPtr_OneInstancePerOwner;
	private static readonly IntPtr NativeFieldInfoPtr_BuffEffectType;

	public double StartTimeUnmodified;

	public Entity Target;

	public BuffType BuffType;

	public byte Stacks;

	public byte MaxStacks;

	public bool ResetAge;

	public bool IncreaseStacks;

	public bool CorrectlyCreated;

	public bool OneInstancePerOwner;

	public BuffEffectType BuffEffectType;
}
```

## Server Systems

- [AbilityCastStarted_SetupAbilityTargetSystem_Shared](/systems/server/AbilityCastStarted_SetupAbilityTargetSystem_Shared)
- [AllowJumpFromCliffsBuffDestroySystem](/systems/server/AllowJumpFromCliffsBuffDestroySystem)
- [AllowJumpFromCliffsBuffSpawnSystem](/systems/server/AllowJumpFromCliffsBuffSpawnSystem)
- [Apply_BuffModificationsSystem_Server](/systems/server/Apply_BuffModificationsSystem_Server)
- [Apply_KnockbackResistanceBuff](/systems/server/Apply_KnockbackResistanceBuff)
- [ArmorLevelSystem_Destroy](/systems/server/ArmorLevelSystem_Destroy)
- [ArmorLevelSystem_Spawn](/systems/server/ArmorLevelSystem_Spawn)
- [BagEquipTagSystem_Destroy](/systems/server/BagEquipTagSystem_Destroy)
- [BagEquipTagSystem_Spawn](/systems/server/BagEquipTagSystem_Spawn)
- [BloodConsumeBuffDestroySystem](/systems/server/BloodConsumeBuffDestroySystem)
- [BloodShareBuffSpawn_Server](/systems/server/BloodShareBuffSpawn_Server)
- [BuffDebugSystem](/systems/server/BuffDebugSystem)
- [BuffSystem_Spawn_Server](/systems/server/BuffSystem_Spawn_Server)
- [CastleRepairBuffDestroySystem](/systems/server/CastleRepairBuffDestroySystem)
- [CastleRepairSystem](/systems/server/CastleRepairSystem)
- [Cleanup_BuffModificationsSystem_Server](/systems/server/Cleanup_BuffModificationsSystem_Server)
- [Create_ServerControlsPositionSystem](/systems/server/Create_ServerControlsPositionSystem)
- [DashStopOnMapCollisionSystem](/systems/server/DashStopOnMapCollisionSystem)
- [DestroyBuffOnMoveSystem](/systems/server/DestroyBuffOnMoveSystem)
- [DestroyOnManualInterruptSystem](/systems/server/DestroyOnManualInterruptSystem)
- [Destroy_BuffModificationsSystem_Server](/systems/server/Destroy_BuffModificationsSystem_Server)
- [Destroy_KnockbackResistanceBuff](/systems/server/Destroy_KnockbackResistanceBuff)
- [Destroy_KnockbackSystem](/systems/server/Destroy_KnockbackSystem)
- [Destroy_ServerControlsPositionSystem](/systems/server/Destroy_ServerControlsPositionSystem)
- [Destroy_TravelBuffSystem](/systems/server/Destroy_TravelBuffSystem)
- [DownedEventSystem](/systems/server/DownedEventSystem)
- [DropInventoryItemSystem](/systems/server/DropInventoryItemSystem)
- [DropItemSystem](/systems/server/DropItemSystem)
- [GallopBuffSystem_Destroy](/systems/server/GallopBuffSystem_Destroy)
- [GallopBuffSystem_Server](/systems/server/GallopBuffSystem_Server)
- [GallopBuffSystem_Spawn](/systems/server/GallopBuffSystem_Spawn)
- [HasResidentBuffDestroySystem_Shared](/systems/server/HasResidentBuffDestroySystem_Shared)
- [HealingBuffSystem](/systems/server/HealingBuffSystem)
- [HybridAttachPointTransformSystem](/systems/server/HybridAttachPointTransformSystem)
- [ImprisonedBuffSystem](/systems/server/ImprisonedBuffSystem)
- [InsideBuffDestroySystem_Shared](/systems/server/InsideBuffDestroySystem_Shared)
- [InsideInitSystem_Server](/systems/server/InsideInitSystem_Server)
- [InsideSystem_Server](/systems/server/InsideSystem_Server)
- [JumpFromCliffsTravelDestroySystem](/systems/server/JumpFromCliffsTravelDestroySystem)
- [JumpFromCliffsTravelSpawnSystem](/systems/server/JumpFromCliffsTravelSpawnSystem)
- [JumpFromCliffsTravelSystem](/systems/server/JumpFromCliffsTravelSystem)
- [KnockbackSystem](/systems/server/KnockbackSystem)
- [KnockbackSystemSpawn](/systems/server/KnockbackSystemSpawn)
- [ModifyTeamBuffSystem_Destroy](/systems/server/ModifyTeamBuffSystem_Destroy)
- [ModifyTeamBuffSystem_Spawn](/systems/server/ModifyTeamBuffSystem_Spawn)
- [Modify_BuffModificationsSystem_Server](/systems/server/Modify_BuffModificationsSystem_Server)
- [MountBuffSpawnSystem_Server](/systems/server/MountBuffSpawnSystem_Server)
- [MountInitSystem_Server](/systems/server/MountInitSystem_Server)
- [MountSystem_Server](/systems/server/MountSystem_Server)
- [MountSystem_Shared](/systems/server/MountSystem_Shared)
- [MoveTowardsPositionSystem_Server_Create](/systems/server/MoveTowardsPositionSystem_Server_Create)
- [MoveTowardsPositionSystem_Server_Update](/systems/server/MoveTowardsPositionSystem_Server_Update)
- [MoveTowardsPositionSystem_Shared_Update](/systems/server/MoveTowardsPositionSystem_Shared_Update)
- [MoveTowardsRotationSystem_Destroy](/systems/server/MoveTowardsRotationSystem_Destroy)
- [MoveTowardsRotationSystem_Shared](/systems/server/MoveTowardsRotationSystem_Shared)
- [MoveTowardsRotationSystem_Spawn](/systems/server/MoveTowardsRotationSystem_Spawn)
- [MultiplyAbsorbCapByUnitStatsSystem](/systems/server/MultiplyAbsorbCapByUnitStatsSystem)
- [ReplaceAbilityOnSlotSystem](/systems/server/ReplaceAbilityOnSlotSystem)
- [ReplaceAbilityOnSlotWhenMountedBuffSystem_Destroy](/systems/server/ReplaceAbilityOnSlotWhenMountedBuffSystem_Destroy)
- [ResetCreateGameplayEventOnTickWhenCastingSystem](/systems/server/ResetCreateGameplayEventOnTickWhenCastingSystem)
- [RespawnDelaySystem_Server](/systems/server/RespawnDelaySystem_Server)
- [SetOwnerRotateTowardsMouseSystem](/systems/server/SetOwnerRotateTowardsMouseSystem)
- [SetOwnerRotateTowardsMovementSystem](/systems/server/SetOwnerRotateTowardsMovementSystem)
- [SleepInsideSystem](/systems/server/SleepInsideSystem)
- [SoulShardBuffDestroySystem](/systems/server/SoulShardBuffDestroySystem)
- [SoulShardBuffSpawnSystem](/systems/server/SoulShardBuffSpawnSystem)
- [Spawn_DashSystem](/systems/server/Spawn_DashSystem)
- [Spawn_MoveSpeedBuffSystem](/systems/server/Spawn_MoveSpeedBuffSystem)
- [Spawn_TravelBuffSystem](/systems/server/Spawn_TravelBuffSystem)
- [TeleportBuffSpawnSystem](/systems/server/TeleportBuffSpawnSystem)
- [TeleportBuffSystem_Server](/systems/server/TeleportBuffSystem_Server)
- [TheMonsterGeneratorBuffSystem_Update](/systems/server/TheMonsterGeneratorBuffSystem_Update)
- [TravelToTargetSpawnSystem](/systems/server/TravelToTargetSpawnSystem)
- [TravelToTargetSystem](/systems/server/TravelToTargetSystem)
- [UpdateBuffsBuffer_Destroy](/systems/server/UpdateBuffsBuffer_Destroy)
- [UpdateModifyTeamBuffSystem](/systems/server/UpdateModifyTeamBuffSystem)
- [UseCastleHeartSystem](/systems/server/UseCastleHeartSystem)
- [VampireDownedServerEventSystem](/systems/server/VampireDownedServerEventSystem)
- [WeaponLevelSystem_Destroy](/systems/server/WeaponLevelSystem_Destroy)
- [WeaponLevelSystem_Spawn](/systems/server/WeaponLevelSystem_Spawn)

## Client Systems

- [AchievementsSystem](/systems/client/AchievementsSystem)
- [Apply_BuffModificationsSystem_Client](/systems/client/Apply_BuffModificationsSystem_Client)
- [BuffSequenceSystem_Spawn](/systems/client/BuffSequenceSystem_Spawn)
- [BuffSequenceSystem_WaitingForCondition](/systems/client/BuffSequenceSystem_WaitingForCondition)
- [BuffSystem_Spawn_Client](/systems/client/BuffSystem_Spawn_Client)
- [BuildMenuImpairSystem](/systems/client/BuildMenuImpairSystem)
- [CharacterHudProgressBarSystem](/systems/client/CharacterHudProgressBarSystem)
- [CloseAllMenuSpawnSystem](/systems/client/CloseAllMenuSpawnSystem)
- [DeathMenuSystem](/systems/client/DeathMenuSystem)
- [Destroy_BuffModificationsSystem_Client](/systems/client/Destroy_BuffModificationsSystem_Client)
- [Destroy_RemapAbilitySlotsForGamepadBuffSystem](/systems/client/Destroy_RemapAbilitySlotsForGamepadBuffSystem)
- [Destroy_TravelBuffSystem](/systems/client/Destroy_TravelBuffSystem)
- [FeedInteractionProgressSystem](/systems/client/FeedInteractionProgressSystem)
- [FreezeHybridAnimationSystem](/systems/client/FreezeHybridAnimationSystem)
- [FreezeHybridAnimationSystem_Destroy](/systems/client/FreezeHybridAnimationSystem_Destroy)
- [GallopBuffSystem_Destroy](/systems/client/GallopBuffSystem_Destroy)
- [GallopBuffSystem_Spawn](/systems/client/GallopBuffSystem_Spawn)
- [HasResidentBuffDestroySystem_Shared](/systems/client/HasResidentBuffDestroySystem_Shared)
- [HybridAttachPointTransformSystem](/systems/client/HybridAttachPointTransformSystem)
- [HybridAttachPointTransformSystem_Client](/systems/client/HybridAttachPointTransformSystem_Client)
- [JumpFromCliffsTravelDestroySystem](/systems/client/JumpFromCliffsTravelDestroySystem)
- [JumpFromCliffsTravelSpawnSystem](/systems/client/JumpFromCliffsTravelSpawnSystem)
- [JumpFromCliffsTravelSystem](/systems/client/JumpFromCliffsTravelSystem)
- [MountBuffSpawnSystem_Client](/systems/client/MountBuffSpawnSystem_Client)
- [MountSystem_Shared](/systems/client/MountSystem_Shared)
- [MountZoomModifierSystem](/systems/client/MountZoomModifierSystem)
- [MoveTowardsPositionSystem_Shared_Update](/systems/client/MoveTowardsPositionSystem_Shared_Update)
- [MoveTowardsRotationSystem_Shared](/systems/client/MoveTowardsRotationSystem_Shared)
- [RagdollifyBuffTargetSystem](/systems/client/RagdollifyBuffTargetSystem)
- [RespawnDelaySystem_Client](/systems/client/RespawnDelaySystem_Client)
- [SpawnMenuMapper](/systems/client/SpawnMenuMapper)
- [SpawnSleepingBuffSystem_Client](/systems/client/SpawnSleepingBuffSystem_Client)
- [Spawn_RemapAbilitySlotsForGamepadBuffSystem](/systems/client/Spawn_RemapAbilitySlotsForGamepadBuffSystem)
- [StunCloth_DestroyModify_System](/systems/client/StunCloth_DestroyModify_System)
- [StunCloth_Modify_System](/systems/client/StunCloth_Modify_System)
- [TeleportBuffSpawnSystem](/systems/client/TeleportBuffSpawnSystem)
- [TeleportBuffSystem_Client](/systems/client/TeleportBuffSystem_Client)
- [TransmogModeBuffSpawnSystem_Client](/systems/client/TransmogModeBuffSpawnSystem_Client)
- [TravelBuffSequenceSpawnSystem](/systems/client/TravelBuffSequenceSpawnSystem)
- [TravelBuffSequenceSystem](/systems/client/TravelBuffSequenceSystem)
- [TravelToTargetSystem](/systems/client/TravelToTargetSystem)
- [TutorialSystem_ReactToSpawn](/systems/client/TutorialSystem_ReactToSpawn)
- [UpdateBuffsBuffer_Destroy](/systems/client/UpdateBuffsBuffer_Destroy)
- [VbloodGhostBuffSystem_Client_Base](/systems/client/VbloodGhostBuffSystem_Client_Base)
- [VbloodGhostBuffSystem_Client_Spawn](/systems/client/VbloodGhostBuffSystem_Client_Spawn)
- [VbloodGhostBuffSystem_Client_Update](/systems/client/VbloodGhostBuffSystem_Client_Update)
- [VisibilitySystem_CopyStateFromBuffTarget](/systems/client/VisibilitySystem_CopyStateFromBuffTarget)
- [ZoomModifierBuffSystem](/systems/client/ZoomModifierBuffSystem)
