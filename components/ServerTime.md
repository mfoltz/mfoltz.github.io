---
nav_exclude: true
search_exclude: false
---

# ServerTime

```csharp
public struct ServerTime
{
	static ServerTime()
	{
		Il2CppClassPointerStore<ServerTime>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ServerTime");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServerTime>.NativeClassPtr);
		ServerTime.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerTime>.NativeClassPtr, "Time");
		ServerTime.NativeFieldInfoPtr_UnmodifiedTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerTime>.NativeClassPtr, "UnmodifiedTime");
		ServerTime.NativeFieldInfoPtr_TimeOnServer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerTime>.NativeClassPtr, "TimeOnServer");
		ServerTime.NativeFieldInfoPtr_ModifiedTimeOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerTime>.NativeClassPtr, "ModifiedTimeOffset");
		ServerTime.NativeFieldInfoPtr_FrameCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerTime>.NativeClassPtr, "FrameCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServerTime>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Time;
	private static readonly IntPtr NativeFieldInfoPtr_UnmodifiedTime;
	private static readonly IntPtr NativeFieldInfoPtr_TimeOnServer;
	private static readonly IntPtr NativeFieldInfoPtr_ModifiedTimeOffset;
	private static readonly IntPtr NativeFieldInfoPtr_FrameCount;

	public double Time;

	public double UnmodifiedTime;

	public double TimeOnServer;

	public double ModifiedTimeOffset;

	public int FrameCount;
}
```

## Server Systems

- [BacktraceSystem](/systems/server/BacktraceSystem)
- [BloodMixerSystem_Events](/systems/server/BloodMixerSystem_Events)
- [BloodMixerSystem_Update](/systems/server/BloodMixerSystem_Update)
- [BuffSystem_Spawn_Server](/systems/server/BuffSystem_Spawn_Server)
- [CastleHeartEventSystem](/systems/server/CastleHeartEventSystem)
- [CastleHeartStateUpdateSystem](/systems/server/CastleHeartStateUpdateSystem)
- [CoatingEquipSystem](/systems/server/CoatingEquipSystem)
- [CreatedTimeSpawnSystem](/systems/server/CreatedTimeSpawnSystem)
- [DebugEventsSystem](/systems/server/DebugEventsSystem)
- [DestroyWhenNoCharacterNearbyAfterDurationSystem_Spawn](/systems/server/DestroyWhenNoCharacterNearbyAfterDurationSystem_Spawn)
- [DoorSystem](/systems/server/DoorSystem)
- [DoorSystem_Server](/systems/server/DoorSystem_Server)
- [ForgeSystem_Events](/systems/server/ForgeSystem_Events)
- [FusionForgeSystem_Events](/systems/server/FusionForgeSystem_Events)
- [HandleDismantleEventSystem](/systems/server/HandleDismantleEventSystem)
- [KillAndDisableInactivePlayerAfterDuration](/systems/server/KillAndDisableInactivePlayerAfterDuration)
- [ModifyCooldownRecoveryRateSystem](/systems/server/ModifyCooldownRecoveryRateSystem)
- [PlaceTileModelSystem](/systems/server/PlaceTileModelSystem)
- [RemoveDestroyedEntityFromSpawnRegionSystem](/systems/server/RemoveDestroyedEntityFromSpawnRegionSystem)
- [ServantCoffinstationActionSystem](/systems/server/ServantCoffinstationActionSystem)
- [ServerBootstrapSystem](/systems/server/ServerBootstrapSystem)
- [ServerConsoleCommandSystem](/systems/server/ServerConsoleCommandSystem)
- [ServerFeaturesSystem](/systems/server/ServerFeaturesSystem)
- [ShowAiSystem](/systems/server/ShowAiSystem)
- [SpawnCharacterSystem](/systems/server/SpawnCharacterSystem)
- [StablesSystem_ClientEvents](/systems/server/StablesSystem_ClientEvents)
- [UpdateMicroPOIManagerSystem](/systems/server/UpdateMicroPOIManagerSystem)
- [ValidateAbilityGroupsSystem](/systems/server/ValidateAbilityGroupsSystem)
- [VariousMigratedDebugEventsSystem](/systems/server/VariousMigratedDebugEventsSystem)

## Client Systems

- [AimPreviewProjectileSystem](/systems/client/AimPreviewProjectileSystem)
- [AlertsUISystem](/systems/client/AlertsUISystem)
- [ArenaSummaryHUDSystem](/systems/client/ArenaSummaryHUDSystem)
- [BacktraceSystem](/systems/client/BacktraceSystem)
- [BloodMixerSubMenuMapper](/systems/client/BloodMixerSubMenuMapper)
- [BuffBarParentSystem](/systems/client/BuffBarParentSystem)
- [BuffSequenceSystem_Spawn](/systems/client/BuffSequenceSystem_Spawn)
- [BuffSequenceSystem_WaitingForCondition](/systems/client/BuffSequenceSystem_WaitingForCondition)
- [BuffSystem_Spawn_Client](/systems/client/BuffSystem_Spawn_Client)
- [CastleHeartSubMenuMapper](/systems/client/CastleHeartSubMenuMapper)
- [CastleHeartVisualStateSystem](/systems/client/CastleHeartVisualStateSystem)
- [ContestRenderSystem](/systems/client/ContestRenderSystem)
- [DangerTextParentSystem](/systems/client/DangerTextParentSystem)
- [DoorSystem](/systems/client/DoorSystem)
- [DoorSystem_Client](/systems/client/DoorSystem_Client)
- [InventorySubMenuMapper](/systems/client/InventorySubMenuMapper)
- [MapMenuMapper](/systems/client/MapMenuMapper)
- [MountBuffSpawnSystem_Client](/systems/client/MountBuffSpawnSystem_Client)
- [ReceivePacketSystem](/systems/client/ReceivePacketSystem)
- [ServantMissionSubMenuMapper](/systems/client/ServantMissionSubMenuMapper)
