---
nav_exclude: true
search_exclude: true
---

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

- [AbilityCastStarted_SetupAbilityTargetSystem_Shared]({{% relref "systems/server/AbilityCastStarted_SetupAbilityTargetSystem_Shared.md" %}})
- [AllowJumpFromCliffsBuffDestroySystem]({{% relref "systems/server/AllowJumpFromCliffsBuffDestroySystem.md" %}})
- [AllowJumpFromCliffsBuffSpawnSystem]({{% relref "systems/server/AllowJumpFromCliffsBuffSpawnSystem.md" %}})
- [Apply_BuffModificationsSystem_Server]({{% relref "systems/server/Apply_BuffModificationsSystem_Server.md" %}})
- [Apply_KnockbackResistanceBuff]({{% relref "systems/server/Apply_KnockbackResistanceBuff.md" %}})
- [ArmorLevelSystem_Destroy]({{% relref "systems/server/ArmorLevelSystem_Destroy.md" %}})
- [ArmorLevelSystem_Spawn]({{% relref "systems/server/ArmorLevelSystem_Spawn.md" %}})
- [BagEquipTagSystem_Destroy]({{% relref "systems/server/BagEquipTagSystem_Destroy.md" %}})
- [BagEquipTagSystem_Spawn]({{% relref "systems/server/BagEquipTagSystem_Spawn.md" %}})
- [BloodConsumeBuffDestroySystem]({{% relref "systems/server/BloodConsumeBuffDestroySystem.md" %}})
- [BloodShareBuffSpawn_Server]({{% relref "systems/server/BloodShareBuffSpawn_Server.md" %}})
- [BuffDebugSystem]({{% relref "systems/server/BuffDebugSystem.md" %}})
- [BuffSystem_Spawn_Server]({{% relref "systems/server/BuffSystem_Spawn_Server.md" %}})
- [CastleRepairBuffDestroySystem]({{% relref "systems/server/CastleRepairBuffDestroySystem.md" %}})
- [CastleRepairSystem]({{% relref "systems/server/CastleRepairSystem.md" %}})
- [Cleanup_BuffModificationsSystem_Server]({{% relref "systems/server/Cleanup_BuffModificationsSystem_Server.md" %}})
- [Create_ServerControlsPositionSystem]({{% relref "systems/server/Create_ServerControlsPositionSystem.md" %}})
- [DashStopOnMapCollisionSystem]({{% relref "systems/server/DashStopOnMapCollisionSystem.md" %}})
- [DestroyBuffOnMoveSystem]({{% relref "systems/server/DestroyBuffOnMoveSystem.md" %}})
- [DestroyOnManualInterruptSystem]({{% relref "systems/server/DestroyOnManualInterruptSystem.md" %}})
- [Destroy_BuffModificationsSystem_Server]({{% relref "systems/server/Destroy_BuffModificationsSystem_Server.md" %}})
- [Destroy_KnockbackResistanceBuff]({{% relref "systems/server/Destroy_KnockbackResistanceBuff.md" %}})
- [Destroy_KnockbackSystem]({{% relref "systems/server/Destroy_KnockbackSystem.md" %}})
- [Destroy_ServerControlsPositionSystem]({{% relref "systems/server/Destroy_ServerControlsPositionSystem.md" %}})
- [Destroy_TravelBuffSystem]({{% relref "systems/server/Destroy_TravelBuffSystem.md" %}})
- [DownedEventSystem]({{% relref "systems/server/DownedEventSystem.md" %}})
- [DropInventoryItemSystem]({{% relref "systems/server/DropInventoryItemSystem.md" %}})
- [DropItemSystem]({{% relref "systems/server/DropItemSystem.md" %}})
- [GallopBuffSystem_Destroy]({{% relref "systems/server/GallopBuffSystem_Destroy.md" %}})
- [GallopBuffSystem_Server]({{% relref "systems/server/GallopBuffSystem_Server.md" %}})
- [GallopBuffSystem_Spawn]({{% relref "systems/server/GallopBuffSystem_Spawn.md" %}})
- [HasResidentBuffDestroySystem_Shared]({{% relref "systems/server/HasResidentBuffDestroySystem_Shared.md" %}})
- [HealingBuffSystem]({{% relref "systems/server/HealingBuffSystem.md" %}})
- [HybridAttachPointTransformSystem]({{% relref "systems/server/HybridAttachPointTransformSystem.md" %}})
- [ImprisonedBuffSystem]({{% relref "systems/server/ImprisonedBuffSystem.md" %}})
- [InsideBuffDestroySystem_Shared]({{% relref "systems/server/InsideBuffDestroySystem_Shared.md" %}})
- [InsideInitSystem_Server]({{% relref "systems/server/InsideInitSystem_Server.md" %}})
- [InsideSystem_Server]({{% relref "systems/server/InsideSystem_Server.md" %}})
- [JumpFromCliffsTravelDestroySystem]({{% relref "systems/server/JumpFromCliffsTravelDestroySystem.md" %}})
- [JumpFromCliffsTravelSpawnSystem]({{% relref "systems/server/JumpFromCliffsTravelSpawnSystem.md" %}})
- [JumpFromCliffsTravelSystem]({{% relref "systems/server/JumpFromCliffsTravelSystem.md" %}})
- [KnockbackSystem]({{% relref "systems/server/KnockbackSystem.md" %}})
- [KnockbackSystemSpawn]({{% relref "systems/server/KnockbackSystemSpawn.md" %}})
- [ModifyTeamBuffSystem_Destroy]({{% relref "systems/server/ModifyTeamBuffSystem_Destroy.md" %}})
- [ModifyTeamBuffSystem_Spawn]({{% relref "systems/server/ModifyTeamBuffSystem_Spawn.md" %}})
- [Modify_BuffModificationsSystem_Server]({{% relref "systems/server/Modify_BuffModificationsSystem_Server.md" %}})
- [MountBuffSpawnSystem_Server]({{% relref "systems/server/MountBuffSpawnSystem_Server.md" %}})
- [MountInitSystem_Server]({{% relref "systems/server/MountInitSystem_Server.md" %}})
- [MountSystem_Server]({{% relref "systems/server/MountSystem_Server.md" %}})
- [MountSystem_Shared]({{% relref "systems/server/MountSystem_Shared.md" %}})
- [MoveTowardsPositionSystem_Server_Create]({{% relref "systems/server/MoveTowardsPositionSystem_Server_Create.md" %}})
- [MoveTowardsPositionSystem_Server_Update]({{% relref "systems/server/MoveTowardsPositionSystem_Server_Update.md" %}})
- [MoveTowardsPositionSystem_Shared_Update]({{% relref "systems/server/MoveTowardsPositionSystem_Shared_Update.md" %}})
- [MoveTowardsRotationSystem_Destroy]({{% relref "systems/server/MoveTowardsRotationSystem_Destroy.md" %}})
- [MoveTowardsRotationSystem_Shared]({{% relref "systems/server/MoveTowardsRotationSystem_Shared.md" %}})
- [MoveTowardsRotationSystem_Spawn]({{% relref "systems/server/MoveTowardsRotationSystem_Spawn.md" %}})
- [MultiplyAbsorbCapByUnitStatsSystem]({{% relref "systems/server/MultiplyAbsorbCapByUnitStatsSystem.md" %}})
- [ReplaceAbilityOnSlotSystem]({{% relref "systems/server/ReplaceAbilityOnSlotSystem.md" %}})
- [ReplaceAbilityOnSlotWhenMountedBuffSystem_Destroy]({{% relref "systems/server/ReplaceAbilityOnSlotWhenMountedBuffSystem_Destroy.md" %}})
- [ResetCreateGameplayEventOnTickWhenCastingSystem]({{% relref "systems/server/ResetCreateGameplayEventOnTickWhenCastingSystem.md" %}})
- [RespawnDelaySystem_Server]({{% relref "systems/server/RespawnDelaySystem_Server.md" %}})
- [SetOwnerRotateTowardsMouseSystem]({{% relref "systems/server/SetOwnerRotateTowardsMouseSystem.md" %}})
- [SetOwnerRotateTowardsMovementSystem]({{% relref "systems/server/SetOwnerRotateTowardsMovementSystem.md" %}})
- [SleepInsideSystem]({{% relref "systems/server/SleepInsideSystem.md" %}})
- [SoulShardBuffDestroySystem]({{% relref "systems/server/SoulShardBuffDestroySystem.md" %}})
- [SoulShardBuffSpawnSystem]({{% relref "systems/server/SoulShardBuffSpawnSystem.md" %}})
- [Spawn_DashSystem]({{% relref "systems/server/Spawn_DashSystem.md" %}})
- [Spawn_MoveSpeedBuffSystem]({{% relref "systems/server/Spawn_MoveSpeedBuffSystem.md" %}})
- [Spawn_TravelBuffSystem]({{% relref "systems/server/Spawn_TravelBuffSystem.md" %}})
- [TeleportBuffSpawnSystem]({{% relref "systems/server/TeleportBuffSpawnSystem.md" %}})
- [TeleportBuffSystem_Server]({{% relref "systems/server/TeleportBuffSystem_Server.md" %}})
- [TheMonsterGeneratorBuffSystem_Update]({{% relref "systems/server/TheMonsterGeneratorBuffSystem_Update.md" %}})
- [TravelToTargetSpawnSystem]({{% relref "systems/server/TravelToTargetSpawnSystem.md" %}})
- [TravelToTargetSystem]({{% relref "systems/server/TravelToTargetSystem.md" %}})
- [UpdateBuffsBuffer_Destroy]({{% relref "systems/server/UpdateBuffsBuffer_Destroy.md" %}})
- [UpdateModifyTeamBuffSystem]({{% relref "systems/server/UpdateModifyTeamBuffSystem.md" %}})
- [UseCastleHeartSystem]({{% relref "systems/server/UseCastleHeartSystem.md" %}})
- [VampireDownedServerEventSystem]({{% relref "systems/server/VampireDownedServerEventSystem.md" %}})
- [WeaponLevelSystem_Destroy]({{% relref "systems/server/WeaponLevelSystem_Destroy.md" %}})
- [WeaponLevelSystem_Spawn]({{% relref "systems/server/WeaponLevelSystem_Spawn.md" %}})

## Client Systems

- [AchievementsSystem]({{% relref "systems/client/AchievementsSystem.md" %}})
- [Apply_BuffModificationsSystem_Client]({{% relref "systems/client/Apply_BuffModificationsSystem_Client.md" %}})
- [BuffSequenceSystem_Spawn]({{% relref "systems/client/BuffSequenceSystem_Spawn.md" %}})
- [BuffSequenceSystem_WaitingForCondition]({{% relref "systems/client/BuffSequenceSystem_WaitingForCondition.md" %}})
- [BuffSystem_Spawn_Client]({{% relref "systems/client/BuffSystem_Spawn_Client.md" %}})
- [BuildMenuImpairSystem]({{% relref "systems/client/BuildMenuImpairSystem.md" %}})
- [CharacterHudProgressBarSystem]({{% relref "systems/client/CharacterHudProgressBarSystem.md" %}})
- [CloseAllMenuSpawnSystem]({{% relref "systems/client/CloseAllMenuSpawnSystem.md" %}})
- [DeathMenuSystem]({{% relref "systems/client/DeathMenuSystem.md" %}})
- [Destroy_BuffModificationsSystem_Client]({{% relref "systems/client/Destroy_BuffModificationsSystem_Client.md" %}})
- [Destroy_RemapAbilitySlotsForGamepadBuffSystem]({{% relref "systems/client/Destroy_RemapAbilitySlotsForGamepadBuffSystem.md" %}})
- [Destroy_TravelBuffSystem]({{% relref "systems/client/Destroy_TravelBuffSystem.md" %}})
- [FeedInteractionProgressSystem]({{% relref "systems/client/FeedInteractionProgressSystem.md" %}})
- [FreezeHybridAnimationSystem]({{% relref "systems/client/FreezeHybridAnimationSystem.md" %}})
- [FreezeHybridAnimationSystem_Destroy]({{% relref "systems/client/FreezeHybridAnimationSystem_Destroy.md" %}})
- [GallopBuffSystem_Destroy]({{% relref "systems/client/GallopBuffSystem_Destroy.md" %}})
- [GallopBuffSystem_Spawn]({{% relref "systems/client/GallopBuffSystem_Spawn.md" %}})
- [HasResidentBuffDestroySystem_Shared]({{% relref "systems/client/HasResidentBuffDestroySystem_Shared.md" %}})
- [HybridAttachPointTransformSystem]({{% relref "systems/client/HybridAttachPointTransformSystem.md" %}})
- [HybridAttachPointTransformSystem_Client]({{% relref "systems/client/HybridAttachPointTransformSystem_Client.md" %}})
- [JumpFromCliffsTravelDestroySystem]({{% relref "systems/client/JumpFromCliffsTravelDestroySystem.md" %}})
- [JumpFromCliffsTravelSpawnSystem]({{% relref "systems/client/JumpFromCliffsTravelSpawnSystem.md" %}})
- [JumpFromCliffsTravelSystem]({{% relref "systems/client/JumpFromCliffsTravelSystem.md" %}})
- [MountBuffSpawnSystem_Client]({{% relref "systems/client/MountBuffSpawnSystem_Client.md" %}})
- [MountSystem_Shared]({{% relref "systems/client/MountSystem_Shared.md" %}})
- [MountZoomModifierSystem]({{% relref "systems/client/MountZoomModifierSystem.md" %}})
- [MoveTowardsPositionSystem_Shared_Update]({{% relref "systems/client/MoveTowardsPositionSystem_Shared_Update.md" %}})
- [MoveTowardsRotationSystem_Shared]({{% relref "systems/client/MoveTowardsRotationSystem_Shared.md" %}})
- [RagdollifyBuffTargetSystem]({{% relref "systems/client/RagdollifyBuffTargetSystem.md" %}})
- [RespawnDelaySystem_Client]({{% relref "systems/client/RespawnDelaySystem_Client.md" %}})
- [SpawnMenuMapper]({{% relref "systems/client/SpawnMenuMapper.md" %}})
- [SpawnSleepingBuffSystem_Client]({{% relref "systems/client/SpawnSleepingBuffSystem_Client.md" %}})
- [Spawn_RemapAbilitySlotsForGamepadBuffSystem]({{% relref "systems/client/Spawn_RemapAbilitySlotsForGamepadBuffSystem.md" %}})
- [StunCloth_DestroyModify_System]({{% relref "systems/client/StunCloth_DestroyModify_System.md" %}})
- [StunCloth_Modify_System]({{% relref "systems/client/StunCloth_Modify_System.md" %}})
- [TeleportBuffSpawnSystem]({{% relref "systems/client/TeleportBuffSpawnSystem.md" %}})
- [TeleportBuffSystem_Client]({{% relref "systems/client/TeleportBuffSystem_Client.md" %}})
- [TransmogModeBuffSpawnSystem_Client]({{% relref "systems/client/TransmogModeBuffSpawnSystem_Client.md" %}})
- [TravelBuffSequenceSpawnSystem]({{% relref "systems/client/TravelBuffSequenceSpawnSystem.md" %}})
- [TravelBuffSequenceSystem]({{% relref "systems/client/TravelBuffSequenceSystem.md" %}})
- [TravelToTargetSystem]({{% relref "systems/client/TravelToTargetSystem.md" %}})
- [TutorialSystem_ReactToSpawn]({{% relref "systems/client/TutorialSystem_ReactToSpawn.md" %}})
- [UpdateBuffsBuffer_Destroy]({{% relref "systems/client/UpdateBuffsBuffer_Destroy.md" %}})
- [VbloodGhostBuffSystem_Client_Base]({{% relref "systems/client/VbloodGhostBuffSystem_Client_Base.md" %}})
- [VbloodGhostBuffSystem_Client_Spawn]({{% relref "systems/client/VbloodGhostBuffSystem_Client_Spawn.md" %}})
- [VbloodGhostBuffSystem_Client_Update]({{% relref "systems/client/VbloodGhostBuffSystem_Client_Update.md" %}})
- [VisibilitySystem_CopyStateFromBuffTarget]({{% relref "systems/client/VisibilitySystem_CopyStateFromBuffTarget.md" %}})
- [ZoomModifierBuffSystem]({{% relref "systems/client/ZoomModifierBuffSystem.md" %}})
