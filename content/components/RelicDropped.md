---
nav_exclude: true
search_exclude: true
---

```csharp
public struct RelicDropped
{
	static RelicDropped()
	{
		Il2CppClassPointerStore<RelicDropped>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "RelicDropped");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RelicDropped>.NativeClassPtr);
		RelicDropped.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RelicDropped>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RelicDropped>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public bool Value;
}
```

## Server Systems

- [DebugEventsSystem]({{% relref "systems/server/DebugEventsSystem.md" %}})
- [DropInInventoryOnSpawnSystem]({{% relref "systems/server/DropInInventoryOnSpawnSystem.md" %}})
- [DropInventorySystem]({{% relref "systems/server/DropInventorySystem.md" %}})
- [HandleGameplayEventsRecursiveSystem]({{% relref "systems/server/HandleGameplayEventsRecursiveSystem.md" %}})
- [InitializeYieldResourcesSystem]({{% relref "systems/server/InitializeYieldResourcesSystem.md" %}})
- [ItemPickupSystem]({{% relref "systems/server/ItemPickupSystem.md" %}})
- [OnDeathSystem]({{% relref "systems/server/OnDeathSystem.md" %}})
- [RelicDestroySystem]({{% relref "systems/server/RelicDestroySystem.md" %}})
- [ServantMissionUpdateSystem]({{% relref "systems/server/ServantMissionUpdateSystem.md" %}})
- [ServerBootstrapSystem]({{% relref "systems/server/ServerBootstrapSystem.md" %}})
- [WarEventDropItemsSystem]({{% relref "systems/server/WarEventDropItemsSystem.md" %}})
