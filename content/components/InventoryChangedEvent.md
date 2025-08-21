---
nav_exclude: true
search_exclude: true
---

```csharp
public struct InventoryChangedEvent
{
	static InventoryChangedEvent()
	{
		Il2CppClassPointerStore<InventoryChangedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "InventoryChangedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InventoryChangedEvent>.NativeClassPtr);
		InventoryChangedEvent.NativeFieldInfoPtr_ItemEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryChangedEvent>.NativeClassPtr, "ItemEntity");
		InventoryChangedEvent.NativeFieldInfoPtr_Item = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryChangedEvent>.NativeClassPtr, "Item");
		InventoryChangedEvent.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryChangedEvent>.NativeClassPtr, "Amount");
		InventoryChangedEvent.NativeFieldInfoPtr_InventoryEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryChangedEvent>.NativeClassPtr, "InventoryEntity");
		InventoryChangedEvent.NativeFieldInfoPtr_ChangeType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryChangedEvent>.NativeClassPtr, "ChangeType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InventoryChangedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ItemEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Item;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeFieldInfoPtr_InventoryEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ChangeType;

	public Entity ItemEntity;

	public PrefabGUID Item;

	public int Amount;

	public Entity InventoryEntity;

	public InventoryChangedEventType ChangeType;
}
```

## Server Systems

- [BuffByItemCategoryCountSystem]({{% relref "systems/server/BuffByItemCategoryCountSystem.md" %}})
- [ReactToInventoryChangedSystem]({{% relref "systems/server/ReactToInventoryChangedSystem.md" %}})
