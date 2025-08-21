---
nav_exclude: true
search_exclude: true
---

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

- [ActivateDraculaWarpRiftSystem]({{% relref "systems/server/ActivateDraculaWarpRiftSystem.md" %}})
- [AdditionalInteractBuffComponentSpawnSystem]({{% relref "systems/server/AdditionalInteractBuffComponentSpawnSystem.md" %}})
- [BindCoffinSystem]({{% relref "systems/server/BindCoffinSystem.md" %}})
- [HasResidentBuffDestroySystem_Shared]({{% relref "systems/server/HasResidentBuffDestroySystem_Shared.md" %}})
- [InsideBuffDestroySystem_Shared]({{% relref "systems/server/InsideBuffDestroySystem_Shared.md" %}})
- [InsideInitSystem_Server]({{% relref "systems/server/InsideInitSystem_Server.md" %}})
- [InsideSystem_Server]({{% relref "systems/server/InsideSystem_Server.md" %}})
- [InteractValidateAndStopSystemServer]({{% relref "systems/server/InteractValidateAndStopSystemServer.md" %}})
- [ItemPickupSystem]({{% relref "systems/server/ItemPickupSystem.md" %}})
- [MountBuffSpawnSystem_Server]({{% relref "systems/server/MountBuffSpawnSystem_Server.md" %}})
- [MountInitSystem_Server]({{% relref "systems/server/MountInitSystem_Server.md" %}})
- [MountSystem_Server]({{% relref "systems/server/MountSystem_Server.md" %}})
- [MountSystem_Shared]({{% relref "systems/server/MountSystem_Shared.md" %}})
- [OpenDoorSystem]({{% relref "systems/server/OpenDoorSystem.md" %}})
- [RespawnDelaySystem_Server]({{% relref "systems/server/RespawnDelaySystem_Server.md" %}})
- [SleepInsideSystem]({{% relref "systems/server/SleepInsideSystem.md" %}})
- [TravelToTargetSpawnSystem]({{% relref "systems/server/TravelToTargetSpawnSystem.md" %}})
- [UseCastleHeartSystem]({{% relref "systems/server/UseCastleHeartSystem.md" %}})
- [UsePortalSystem]({{% relref "systems/server/UsePortalSystem.md" %}})

## Client Systems

- [FeedInteractionProgressSystem]({{% relref "systems/client/FeedInteractionProgressSystem.md" %}})
- [HasResidentBuffDestroySystem_Shared]({{% relref "systems/client/HasResidentBuffDestroySystem_Shared.md" %}})
- [InteractSystemClient_Sequences]({{% relref "systems/client/InteractSystemClient_Sequences.md" %}})
- [MountBuffSpawnSystem_Client]({{% relref "systems/client/MountBuffSpawnSystem_Client.md" %}})
- [MountSystem_Shared]({{% relref "systems/client/MountSystem_Shared.md" %}})
- [RespawnDelaySystem_Client]({{% relref "systems/client/RespawnDelaySystem_Client.md" %}})
