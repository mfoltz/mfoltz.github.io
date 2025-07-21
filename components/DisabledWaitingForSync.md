---
nav_exclude: true
search_exclude: false
---

# DisabledWaitingForSync

```csharp
public struct DisabledWaitingForSync
{
	static DisabledWaitingForSync()
	{
		Il2CppClassPointerStore<DisabledWaitingForSync>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DisabledWaitingForSync");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DisabledWaitingForSync>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DisabledWaitingForSync>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [AttachSystemBase](/systems/server/AttachSystemBase)
- [AttachSystem_ReactToPersistenceLoad](/systems/server/AttachSystem_ReactToPersistenceLoad)
- [AttachSystem_Spawn](/systems/server/AttachSystem_Spawn)
- [RecursiveGroup](/systems/server/RecursiveGroup)
- [SpawnGroup](/systems/server/SpawnGroup)
- [SpawnTagDebugSystem](/systems/server/SpawnTagDebugSystem)

## Client Systems

- [AttachSystemBase](/systems/client/AttachSystemBase)
- [AttachSystem_Spawn](/systems/client/AttachSystem_Spawn)
- [DeserializeStaticTransformSystem](/systems/client/DeserializeStaticTransformSystem)
- [RecursiveGroup](/systems/client/RecursiveGroup)
- [SpawnGroup](/systems/client/SpawnGroup)
- [SpawnTagDebugSystem](/systems/client/SpawnTagDebugSystem)
