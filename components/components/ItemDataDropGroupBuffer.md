---
nav_exclude: true
search_exclude: true
---

# ItemDataDropGroupBuffer

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public Entity Entity;
	[FieldOffset(8)]
	public PrefabGUID DropItemPrefab;
	[FieldOffset(12)]
	public int Quantity;
	[FieldOffset(16)]
	public int Weight;
	[FieldOffset(20)]
	public DropItemType Type;
}
