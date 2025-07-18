---
nav_exclude: true
search_exclude: true
---

# DropInInventoryOnSpawn

```csharp
public struct DropInInventoryOnSpawn
{
	static DropInInventoryOnSpawn()
	{
		Il2CppClassPointerStore<DropInInventoryOnSpawn>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DropInInventoryOnSpawn");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DropInInventoryOnSpawn>.NativeClassPtr);
		DropInInventoryOnSpawn.NativeFieldInfoPtr_DropTrigger = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropInInventoryOnSpawn>.NativeClassPtr, "DropTrigger");
		DropInInventoryOnSpawn.NativeFieldInfoPtr_ReplaceInventory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropInInventoryOnSpawn>.NativeClassPtr, "ReplaceInventory");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DropInInventoryOnSpawn>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DropTrigger;
	private static readonly IntPtr NativeFieldInfoPtr_ReplaceInventory;

	public DropTriggerType DropTrigger;

	public bool ReplaceInventory;
}
```

## Server Systems

- [DropInInventoryOnSpawnSystem](/systems/server/DropInInventoryOnSpawnSystem)
