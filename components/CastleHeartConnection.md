---
nav_exclude: true
search_exclude: false
---

# CastleHeartConnection

```csharp
public struct CastleHeartConnection
{
	static CastleHeartConnection()
	{
		Il2CppClassPointerStore<CastleHeartConnection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleHeartConnection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleHeartConnection>.NativeClassPtr);
		CastleHeartConnection.NativeFieldInfoPtr_CastleHeartEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartConnection>.NativeClassPtr, "CastleHeartEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleHeartConnection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CastleHeartEntity;

	public NetworkedEntity CastleHeartEntity;
}
```

## Server Systems

- [CastleDecrementCountOnDestroySystem](/systems/server/CastleDecrementCountOnDestroySystem)
- [CastleHasItemsOnDestroySystem](/systems/server/CastleHasItemsOnDestroySystem)
- [CastleHasItemsOnSpawnSystem](/systems/server/CastleHasItemsOnSpawnSystem)
- [CastleHeartUpdateRaidStateSystem](/systems/server/CastleHeartUpdateRaidStateSystem)
- [CastleIncrementCountOnSpawnSystem](/systems/server/CastleIncrementCountOnSpawnSystem)
- [CastleRebuildRegistryOnSpawnSystem](/systems/server/CastleRebuildRegistryOnSpawnSystem)
- [CastleSharedInventorySystem_Destroy](/systems/server/CastleSharedInventorySystem_Destroy)
- [CastleSharedInventorySystem_Spawn](/systems/server/CastleSharedInventorySystem_Spawn)
- [CastleTeamConnectionSystem](/systems/server/CastleTeamConnectionSystem)
- [CastleTeleporterConnectSystem](/systems/server/CastleTeleporterConnectSystem)
- [CastleTeleporterDisconnectSystem](/systems/server/CastleTeleporterDisconnectSystem)
