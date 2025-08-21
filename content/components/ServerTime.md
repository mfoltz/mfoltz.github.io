---
nav_exclude: true
search_exclude: true
---

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

- [BacktraceSystem]({{% relref "systems/server/BacktraceSystem.md" %}})
- [BloodMixerSystem_Events]({{% relref "systems/server/BloodMixerSystem_Events.md" %}})
- [BloodMixerSystem_Update]({{% relref "systems/server/BloodMixerSystem_Update.md" %}})
- [BuffSystem_Spawn_Server]({{% relref "systems/server/BuffSystem_Spawn_Server.md" %}})
- [CastleHeartEventSystem]({{% relref "systems/server/CastleHeartEventSystem.md" %}})
- [CastleHeartStateUpdateSystem]({{% relref "systems/server/CastleHeartStateUpdateSystem.md" %}})
- [CoatingEquipSystem]({{% relref "systems/server/CoatingEquipSystem.md" %}})
- [CreatedTimeSpawnSystem]({{% relref "systems/server/CreatedTimeSpawnSystem.md" %}})
- [DebugEventsSystem]({{% relref "systems/server/DebugEventsSystem.md" %}})
- [DestroyWhenNoCharacterNearbyAfterDurationSystem_Spawn]({{% relref "systems/server/DestroyWhenNoCharacterNearbyAfterDurationSystem_Spawn.md" %}})
- [DoorSystem]({{% relref "systems/server/DoorSystem.md" %}})
- [DoorSystem_Server]({{% relref "systems/server/DoorSystem_Server.md" %}})
- [ForgeSystem_Events]({{% relref "systems/server/ForgeSystem_Events.md" %}})
- [FusionForgeSystem_Events]({{% relref "systems/server/FusionForgeSystem_Events.md" %}})
- [HandleDismantleEventSystem]({{% relref "systems/server/HandleDismantleEventSystem.md" %}})
- [KillAndDisableInactivePlayerAfterDuration]({{% relref "systems/server/KillAndDisableInactivePlayerAfterDuration.md" %}})
- [ModifyCooldownRecoveryRateSystem]({{% relref "systems/server/ModifyCooldownRecoveryRateSystem.md" %}})
- [PlaceTileModelSystem]({{% relref "systems/server/PlaceTileModelSystem.md" %}})
- [RemoveDestroyedEntityFromSpawnRegionSystem]({{% relref "systems/server/RemoveDestroyedEntityFromSpawnRegionSystem.md" %}})
- [ServantCoffinstationActionSystem]({{% relref "systems/server/ServantCoffinstationActionSystem.md" %}})
- [ServerBootstrapSystem]({{% relref "systems/server/ServerBootstrapSystem.md" %}})
- [ServerConsoleCommandSystem]({{% relref "systems/server/ServerConsoleCommandSystem.md" %}})
- [ServerFeaturesSystem]({{% relref "systems/server/ServerFeaturesSystem.md" %}})
- [ShowAiSystem]({{% relref "systems/server/ShowAiSystem.md" %}})
- [SpawnCharacterSystem]({{% relref "systems/server/SpawnCharacterSystem.md" %}})
- [StablesSystem_ClientEvents]({{% relref "systems/server/StablesSystem_ClientEvents.md" %}})
- [UpdateMicroPOIManagerSystem]({{% relref "systems/server/UpdateMicroPOIManagerSystem.md" %}})
- [ValidateAbilityGroupsSystem]({{% relref "systems/server/ValidateAbilityGroupsSystem.md" %}})
- [VariousMigratedDebugEventsSystem]({{% relref "systems/server/VariousMigratedDebugEventsSystem.md" %}})

## Client Systems

- [AimPreviewProjectileSystem]({{% relref "systems/client/AimPreviewProjectileSystem.md" %}})
- [AlertsUISystem]({{% relref "systems/client/AlertsUISystem.md" %}})
- [ArenaSummaryHUDSystem]({{% relref "systems/client/ArenaSummaryHUDSystem.md" %}})
- [BacktraceSystem]({{% relref "systems/client/BacktraceSystem.md" %}})
- [BloodMixerSubMenuMapper]({{% relref "systems/client/BloodMixerSubMenuMapper.md" %}})
- [BuffBarParentSystem]({{% relref "systems/client/BuffBarParentSystem.md" %}})
- [BuffSequenceSystem_Spawn]({{% relref "systems/client/BuffSequenceSystem_Spawn.md" %}})
- [BuffSequenceSystem_WaitingForCondition]({{% relref "systems/client/BuffSequenceSystem_WaitingForCondition.md" %}})
- [BuffSystem_Spawn_Client]({{% relref "systems/client/BuffSystem_Spawn_Client.md" %}})
- [CastleHeartSubMenuMapper]({{% relref "systems/client/CastleHeartSubMenuMapper.md" %}})
- [CastleHeartVisualStateSystem]({{% relref "systems/client/CastleHeartVisualStateSystem.md" %}})
- [ContestRenderSystem]({{% relref "systems/client/ContestRenderSystem.md" %}})
- [DangerTextParentSystem]({{% relref "systems/client/DangerTextParentSystem.md" %}})
- [DoorSystem]({{% relref "systems/client/DoorSystem.md" %}})
- [DoorSystem_Client]({{% relref "systems/client/DoorSystem_Client.md" %}})
- [InventorySubMenuMapper]({{% relref "systems/client/InventorySubMenuMapper.md" %}})
- [MapMenuMapper]({{% relref "systems/client/MapMenuMapper.md" %}})
- [MountBuffSpawnSystem_Client]({{% relref "systems/client/MountBuffSpawnSystem_Client.md" %}})
- [ReceivePacketSystem]({{% relref "systems/client/ReceivePacketSystem.md" %}})
- [ServantMissionSubMenuMapper]({{% relref "systems/client/ServantMissionSubMenuMapper.md" %}})
