---
nav_exclude: true
search_exclude: true
---

# SpellTarget

```csharp
public struct SpellTarget
{
	static SpellTarget()
	{
		Il2CppClassPointerStore<SpellTarget>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SpellTarget");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellTarget>.NativeClassPtr);
		SpellTarget.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellTarget>.NativeClassPtr, "Target");
		SpellTarget.NativeFieldInfoPtr_DestroyIfNotInteractable = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellTarget>.NativeClassPtr, "DestroyIfNotInteractable");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellTarget>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyIfNotInteractable;

	public NetworkedEntity Target;

	public bool DestroyIfNotInteractable;
}
```

## Server Systems

- [ActivateDraculaWarpRiftSystem](/systems/server/ActivateDraculaWarpRiftSystem)
- [AdditionalInteractBuffComponentSpawnSystem](/systems/server/AdditionalInteractBuffComponentSpawnSystem)
- [BindCoffinSystem](/systems/server/BindCoffinSystem)
- [HasResidentBuffDestroySystem_Shared](/systems/server/HasResidentBuffDestroySystem_Shared)
- [InsideBuffDestroySystem_Shared](/systems/server/InsideBuffDestroySystem_Shared)
- [InsideInitSystem_Server](/systems/server/InsideInitSystem_Server)
- [InsideSystem_Server](/systems/server/InsideSystem_Server)
- [InteractValidateAndStopSystemServer](/systems/server/InteractValidateAndStopSystemServer)
- [ItemPickupSystem](/systems/server/ItemPickupSystem)
- [MountBuffSpawnSystem_Server](/systems/server/MountBuffSpawnSystem_Server)
- [MountInitSystem_Server](/systems/server/MountInitSystem_Server)
- [MountSystem_Server](/systems/server/MountSystem_Server)
- [MountSystem_Shared](/systems/server/MountSystem_Shared)
- [OpenDoorSystem](/systems/server/OpenDoorSystem)
- [RespawnDelaySystem_Server](/systems/server/RespawnDelaySystem_Server)
- [SleepInsideSystem](/systems/server/SleepInsideSystem)
- [TravelToTargetSpawnSystem](/systems/server/TravelToTargetSpawnSystem)
- [UseCastleHeartSystem](/systems/server/UseCastleHeartSystem)
- [UsePortalSystem](/systems/server/UsePortalSystem)

## Client Systems

- [FeedInteractionProgressSystem](/systems/client/FeedInteractionProgressSystem)
- [HasResidentBuffDestroySystem_Shared](/systems/client/HasResidentBuffDestroySystem_Shared)
- [InteractSystemClient_Sequences](/systems/client/InteractSystemClient_Sequences)
- [MountBuffSpawnSystem_Client](/systems/client/MountBuffSpawnSystem_Client)
- [MountSystem_Shared](/systems/client/MountSystem_Shared)
- [RespawnDelaySystem_Client](/systems/client/RespawnDelaySystem_Client)
