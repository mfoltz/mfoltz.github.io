---
nav_exclude: true
search_exclude: false
---

# InventoryItem

```csharp
public struct InventoryItem
{
	static InventoryItem()
	{
		Il2CppClassPointerStore<InventoryItem>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "InventoryItem");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InventoryItem>.NativeClassPtr);
		InventoryItem.NativeFieldInfoPtr_ContainerEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryItem>.NativeClassPtr, "ContainerEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InventoryItem>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ContainerEntity;

	public Entity ContainerEntity;
}
```
