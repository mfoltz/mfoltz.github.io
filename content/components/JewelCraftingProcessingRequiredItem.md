---
nav_exclude: true
search_exclude: true
---

```csharp
public struct JewelCraftingProcessingRequiredItem
{
	static JewelCraftingProcessingRequiredItem()
	{
		Il2CppClassPointerStore<JewelCraftingProcessingRequiredItem>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "JewelCraftingProcessingRequiredItem");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<JewelCraftingProcessingRequiredItem>.NativeClassPtr);
		JewelCraftingProcessingRequiredItem.NativeFieldInfoPtr_Item = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelCraftingProcessingRequiredItem>.NativeClassPtr, "Item");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<JewelCraftingProcessingRequiredItem>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Item;

	public InventoryBuffer Item;
}
```

## Server Systems

- [JewelCraftingUpdateSystem]({{% relref "systems/server/JewelCraftingUpdateSystem.md" %}})
