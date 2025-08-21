---
nav_exclude: true
search_exclude: true
---

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

- [CastleDecrementCountOnDestroySystem]({{% relref "systems/server/CastleDecrementCountOnDestroySystem.md" %}})
- [CastleHasItemsOnDestroySystem]({{% relref "systems/server/CastleHasItemsOnDestroySystem.md" %}})
- [CastleHasItemsOnSpawnSystem]({{% relref "systems/server/CastleHasItemsOnSpawnSystem.md" %}})
- [CastleHeartUpdateRaidStateSystem]({{% relref "systems/server/CastleHeartUpdateRaidStateSystem.md" %}})
- [CastleIncrementCountOnSpawnSystem]({{% relref "systems/server/CastleIncrementCountOnSpawnSystem.md" %}})
- [CastleRebuildRegistryOnSpawnSystem]({{% relref "systems/server/CastleRebuildRegistryOnSpawnSystem.md" %}})
- [CastleSharedInventorySystem_Destroy]({{% relref "systems/server/CastleSharedInventorySystem_Destroy.md" %}})
- [CastleSharedInventorySystem_Spawn]({{% relref "systems/server/CastleSharedInventorySystem_Spawn.md" %}})
- [CastleTeamConnectionSystem]({{% relref "systems/server/CastleTeamConnectionSystem.md" %}})
- [CastleTeleporterConnectSystem]({{% relref "systems/server/CastleTeleporterConnectSystem.md" %}})
- [CastleTeleporterDisconnectSystem]({{% relref "systems/server/CastleTeleporterDisconnectSystem.md" %}})
