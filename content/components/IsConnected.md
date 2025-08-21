---
nav_exclude: true
search_exclude: true
---

```csharp
public struct IsConnected
{
	static IsConnected()
	{
		Il2CppClassPointerStore<IsConnected>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "IsConnected");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<IsConnected>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<IsConnected>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [CheckInSunSystem]({{% relref "systems/server/CheckInSunSystem.md" %}})
- [HeightCorrectionSystem]({{% relref "systems/server/HeightCorrectionSystem.md" %}})
- [KillAndDisableInactivePlayerAfterDuration]({{% relref "systems/server/KillAndDisableInactivePlayerAfterDuration.md" %}})
- [RevealMapSystem]({{% relref "systems/server/RevealMapSystem.md" %}})
- [SendPacketSystem]({{% relref "systems/server/SendPacketSystem.md" %}})
- [TeleportIncorrectPositionSystem]({{% relref "systems/server/TeleportIncorrectPositionSystem.md" %}})
- [UpdateEntityInput_Server]({{% relref "systems/server/UpdateEntityInput_Server.md" %}})
- [UpdateWaypointRegionSystem]({{% relref "systems/server/UpdateWaypointRegionSystem.md" %}})

## Client Systems

- [HeightCorrectionSystem]({{% relref "systems/client/HeightCorrectionSystem.md" %}})
