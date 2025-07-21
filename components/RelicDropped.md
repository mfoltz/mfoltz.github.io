---
nav_exclude: true
search_exclude: false
---

# RelicDropped

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

- [DebugEventsSystem](/systems/server/DebugEventsSystem)
- [DropInInventoryOnSpawnSystem](/systems/server/DropInInventoryOnSpawnSystem)
- [DropInventorySystem](/systems/server/DropInventorySystem)
- [HandleGameplayEventsRecursiveSystem](/systems/server/HandleGameplayEventsRecursiveSystem)
- [InitializeYieldResourcesSystem](/systems/server/InitializeYieldResourcesSystem)
- [ItemPickupSystem](/systems/server/ItemPickupSystem)
- [OnDeathSystem](/systems/server/OnDeathSystem)
- [RelicDestroySystem](/systems/server/RelicDestroySystem)
- [ServantMissionUpdateSystem](/systems/server/ServantMissionUpdateSystem)
- [ServerBootstrapSystem](/systems/server/ServerBootstrapSystem)
- [WarEventDropItemsSystem](/systems/server/WarEventDropItemsSystem)
