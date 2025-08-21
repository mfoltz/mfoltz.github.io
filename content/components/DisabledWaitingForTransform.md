---
nav_exclude: true
search_exclude: true
---

```csharp
public struct DisabledWaitingForTransform
{
	static DisabledWaitingForTransform()
	{
		Il2CppClassPointerStore<DisabledWaitingForTransform>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DisabledWaitingForTransform");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DisabledWaitingForTransform>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DisabledWaitingForTransform>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [CastleBuildingWorkstationsSystem]({{% relref "systems/server/CastleBuildingWorkstationsSystem.md" %}})
- [RecursiveGroup]({{% relref "systems/server/RecursiveGroup.md" %}})
- [SpawnGroup]({{% relref "systems/server/SpawnGroup.md" %}})
- [SpawnTagDebugSystem]({{% relref "systems/server/SpawnTagDebugSystem.md" %}})

## Client Systems

- [EntityMetadataSystem]({{% relref "systems/client/EntityMetadataSystem.md" %}})
- [RecursiveGroup]({{% relref "systems/client/RecursiveGroup.md" %}})
- [SpawnGroup]({{% relref "systems/client/SpawnGroup.md" %}})
- [SpawnTagDebugSystem]({{% relref "systems/client/SpawnTagDebugSystem.md" %}})
