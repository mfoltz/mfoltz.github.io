---
nav_exclude: true
search_exclude: true
---

# ConnectedUser

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

- [ChatMessageSystem](/systems/server/ChatMessageSystem)
- [HandleCreateCharacterEventSystem](/systems/server/HandleCreateCharacterEventSystem)
- [PlayerMapZonesDiscoverySystem](/systems/server/PlayerMapZonesDiscoverySystem)
- [SerializePersistenceSystemV2](/systems/server/SerializePersistenceSystemV2)
- [ServerBootstrapSystem](/systems/server/ServerBootstrapSystem)
- [ServerConsoleCommandSystem](/systems/server/ServerConsoleCommandSystem)
- [SystemMessageSystem](/systems/server/SystemMessageSystem)
- [UpdateCharacterCraftingSystem](/systems/server/UpdateCharacterCraftingSystem)
- [UserActivityGridSystem](/systems/server/UserActivityGridSystem)
- [UserAgeSystem](/systems/server/UserAgeSystem)
- [UserDistanceTravelledSystem](/systems/server/UserDistanceTravelledSystem)
- [VariousMigratedDebugEventsSystem](/systems/server/VariousMigratedDebugEventsSystem)
