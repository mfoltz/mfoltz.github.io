---
nav_exclude: true
search_exclude: true
---

```csharp
public struct DropTableDataBuffer
{
	static DropTableDataBuffer()
	{
		Il2CppClassPointerStore<DropTableDataBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DropTableDataBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DropTableDataBuffer>.NativeClassPtr);
		DropTableDataBuffer.NativeFieldInfoPtr_DropRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropTableDataBuffer>.NativeClassPtr, "DropRate");
		DropTableDataBuffer.NativeFieldInfoPtr_ItemGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropTableDataBuffer>.NativeClassPtr, "ItemGuid");
		DropTableDataBuffer.NativeFieldInfoPtr_ItemType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropTableDataBuffer>.NativeClassPtr, "ItemType");
		DropTableDataBuffer.NativeFieldInfoPtr_Quantity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropTableDataBuffer>.NativeClassPtr, "Quantity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DropTableDataBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DropRate;
	private static readonly IntPtr NativeFieldInfoPtr_ItemGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ItemType;
	private static readonly IntPtr NativeFieldInfoPtr_Quantity;

	public float DropRate;

	public PrefabGUID ItemGuid;

	public DropItemType ItemType;

	public int Quantity;
}
```
