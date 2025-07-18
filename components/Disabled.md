---
nav_exclude: true
search_exclude: true
---

# Disabled

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

- [AfterLoadRemoveDisabledFromRoomSystem](/systems/server/AfterLoadRemoveDisabledFromRoomSystem)
- [DestroyWhenDisabledSystem](/systems/server/DestroyWhenDisabledSystem)
- [DisableShowOnlyInPreviewSystem_Server](/systems/server/DisableShowOnlyInPreviewSystem_Server)
- [SpawnTagDebugSystem](/systems/server/SpawnTagDebugSystem)
- [UpdateServerDebugViewDataSystem](/systems/server/UpdateServerDebugViewDataSystem)
- [UserConnectionChangedEventSystem](/systems/server/UserConnectionChangedEventSystem)

## Client Systems

- [DisableShowOnlyInPreviewSystem_Client](/systems/client/DisableShowOnlyInPreviewSystem_Client)
- [ProxyPrefabSystem](/systems/client/ProxyPrefabSystem)
- [PushMeshDataSystem](/systems/client/PushMeshDataSystem)
- [SpawnTagDebugSystem](/systems/client/SpawnTagDebugSystem)
- [StudioEventSystem](/systems/client/StudioEventSystem)
- [VolumeCompanionSystem](/systems/client/VolumeCompanionSystem)
