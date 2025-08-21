---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Disabled
{
	static Disabled()
	{
		Il2CppClassPointerStore<Disabled>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "Disabled");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Disabled>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Disabled>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [AfterLoadRemoveDisabledFromRoomSystem]({{% relref "systems/server/AfterLoadRemoveDisabledFromRoomSystem.md" %}})
- [DestroyWhenDisabledSystem]({{% relref "systems/server/DestroyWhenDisabledSystem.md" %}})
- [DisableShowOnlyInPreviewSystem_Server]({{% relref "systems/server/DisableShowOnlyInPreviewSystem_Server.md" %}})
- [SpawnTagDebugSystem]({{% relref "systems/server/SpawnTagDebugSystem.md" %}})
- [UpdateServerDebugViewDataSystem]({{% relref "systems/server/UpdateServerDebugViewDataSystem.md" %}})
- [UserConnectionChangedEventSystem]({{% relref "systems/server/UserConnectionChangedEventSystem.md" %}})

## Client Systems

- [DisableShowOnlyInPreviewSystem_Client]({{% relref "systems/client/DisableShowOnlyInPreviewSystem_Client.md" %}})
- [ProxyPrefabSystem]({{% relref "systems/client/ProxyPrefabSystem.md" %}})
- [PushMeshDataSystem]({{% relref "systems/client/PushMeshDataSystem.md" %}})
- [SpawnTagDebugSystem]({{% relref "systems/client/SpawnTagDebugSystem.md" %}})
- [StudioEventSystem]({{% relref "systems/client/StudioEventSystem.md" %}})
- [VolumeCompanionSystem]({{% relref "systems/client/VolumeCompanionSystem.md" %}})
