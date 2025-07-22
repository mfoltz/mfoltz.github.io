---
nav_exclude: true
search_exclude: false
---

# InventoryConnection

```csharp
public struct InventoryConnection
{
	static InventoryConnection()
	{
		Il2CppClassPointerStore<InventoryConnection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "InventoryConnection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InventoryConnection>.NativeClassPtr);
		InventoryConnection.NativeFieldInfoPtr_InventoryOwner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryConnection>.NativeClassPtr, "InventoryOwner");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InventoryConnection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_InventoryOwner;

	public Entity InventoryOwner;
}
```
