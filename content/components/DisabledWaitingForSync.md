---
nav_exclude: true
search_exclude: true
---

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

- [AttachSystemBase]({{% relref "systems/server/AttachSystemBase.md" %}})
- [AttachSystem_ReactToPersistenceLoad]({{% relref "systems/server/AttachSystem_ReactToPersistenceLoad.md" %}})
- [AttachSystem_Spawn]({{% relref "systems/server/AttachSystem_Spawn.md" %}})
- [RecursiveGroup]({{% relref "systems/server/RecursiveGroup.md" %}})
- [SpawnGroup]({{% relref "systems/server/SpawnGroup.md" %}})
- [SpawnTagDebugSystem]({{% relref "systems/server/SpawnTagDebugSystem.md" %}})

## Client Systems

- [AttachSystemBase]({{% relref "systems/client/AttachSystemBase.md" %}})
- [AttachSystem_Spawn]({{% relref "systems/client/AttachSystem_Spawn.md" %}})
- [DeserializeStaticTransformSystem]({{% relref "systems/client/DeserializeStaticTransformSystem.md" %}})
- [RecursiveGroup]({{% relref "systems/client/RecursiveGroup.md" %}})
- [SpawnGroup]({{% relref "systems/client/SpawnGroup.md" %}})
- [SpawnTagDebugSystem]({{% relref "systems/client/SpawnTagDebugSystem.md" %}})
