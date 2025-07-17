---
nav_exclude: true
search_exclude: true
---

# ItemDataDropGroupBuffer

```csharp
public struct ItemDataDropGroupBuffer
{
	static ItemDataDropGroupBuffer()
	{
		Il2CppClassPointerStore<ItemDataDropGroupBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ItemDataDropGroupBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ItemDataDropGroupBuffer>.NativeClassPtr);
		ItemDataDropGroupBuffer.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemDataDropGroupBuffer>.NativeClassPtr, "Entity");
		ItemDataDropGroupBuffer.NativeFieldInfoPtr_DropItemPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemDataDropGroupBuffer>.NativeClassPtr, "DropItemPrefab");
		ItemDataDropGroupBuffer.NativeFieldInfoPtr_Quantity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemDataDropGroupBuffer>.NativeClassPtr, "Quantity");
		ItemDataDropGroupBuffer.NativeFieldInfoPtr_Weight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemDataDropGroupBuffer>.NativeClassPtr, "Weight");
		ItemDataDropGroupBuffer.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemDataDropGroupBuffer>.NativeClassPtr, "Type");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ItemDataDropGroupBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_DropItemPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_Quantity;
	private static readonly IntPtr NativeFieldInfoPtr_Weight;
	private static readonly IntPtr NativeFieldInfoPtr_Type;

	public Entity Entity;

	public PrefabGUID DropItemPrefab;

	public int Quantity;

	public int Weight;

	public DropItemType Type;
}
```
