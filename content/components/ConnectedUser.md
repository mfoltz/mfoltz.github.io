---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ConnectedUser
{
	static ConnectedUser()
	{
		Il2CppClassPointerStore<ConnectedUser>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "ConnectedUser");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ConnectedUser>.NativeClassPtr);
		ConnectedUser.NativeFieldInfoPtr_UserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConnectedUser>.NativeClassPtr, "UserIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ConnectedUser>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UserIndex;

	public byte UserIndex;
}
```

## Server Systems

- [ChatMessageSystem]({{% relref "systems/server/ChatMessageSystem.md" %}})
- [HandleCreateCharacterEventSystem]({{% relref "systems/server/HandleCreateCharacterEventSystem.md" %}})
- [PlayerMapZonesDiscoverySystem]({{% relref "systems/server/PlayerMapZonesDiscoverySystem.md" %}})
- [SerializePersistenceSystemV2]({{% relref "systems/server/SerializePersistenceSystemV2.md" %}})
- [ServerBootstrapSystem]({{% relref "systems/server/ServerBootstrapSystem.md" %}})
- [ServerConsoleCommandSystem]({{% relref "systems/server/ServerConsoleCommandSystem.md" %}})
- [SystemMessageSystem]({{% relref "systems/server/SystemMessageSystem.md" %}})
- [UpdateCharacterCraftingSystem]({{% relref "systems/server/UpdateCharacterCraftingSystem.md" %}})
- [UserActivityGridSystem]({{% relref "systems/server/UserActivityGridSystem.md" %}})
- [UserAgeSystem]({{% relref "systems/server/UserAgeSystem.md" %}})
- [UserDistanceTravelledSystem]({{% relref "systems/server/UserDistanceTravelledSystem.md" %}})
- [VariousMigratedDebugEventsSystem]({{% relref "systems/server/VariousMigratedDebugEventsSystem.md" %}})
