---
nav_exclude: true
search_exclude: true
---

```csharp
public struct DisabledDueToNoPlayersInRange
{
	static DisabledDueToNoPlayersInRange()
	{
		Il2CppClassPointerStore<DisabledDueToNoPlayersInRange>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DisabledDueToNoPlayersInRange");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DisabledDueToNoPlayersInRange>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DisabledDueToNoPlayersInRange>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [AfterLoadRemoveDisabledFromRoomSystem]({{% relref "systems/server/AfterLoadRemoveDisabledFromRoomSystem.md" %}})
- [SpawnGroup]({{% relref "systems/server/SpawnGroup.md" %}})

## Client Systems

- [SpawnGroup]({{% relref "systems/client/SpawnGroup.md" %}})
