---
nav_exclude: true
search_exclude: true
---

# ItemPickup

```csharp
public struct ItemPickup
{
	static ItemPickup()
	{
		Il2CppClassPointerStore<ItemPickup>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ItemPickup");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ItemPickup>.NativeClassPtr);
		ItemPickup.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemPickup>.NativeClassPtr, "Radius");
		ItemPickup.NativeFieldInfoPtr_ItemId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemPickup>.NativeClassPtr, "ItemId");
		ItemPickup.NativeFieldInfoPtr_ItemAmount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemPickup>.NativeClassPtr, "ItemAmount");
		ItemPickup.NativeFieldInfoPtr_ItemGeneratedName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemPickup>.NativeClassPtr, "ItemGeneratedName");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ItemPickup>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_ItemId;
	private static readonly IntPtr NativeFieldInfoPtr_ItemAmount;
	private static readonly IntPtr NativeFieldInfoPtr_ItemGeneratedName;

	public float Radius;

	public PrefabGUID ItemId;

	public int ItemAmount;

	public GeneratedName ItemGeneratedName;
}
```
