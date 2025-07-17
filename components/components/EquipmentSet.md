---
nav_exclude: true
search_exclude: true
---

# EquipmentSet

```csharp
[StructLayout(2)]
public struct EquipmentSet
{
	static EquipmentSet()
	{
		Il2CppClassPointerStore<EquipmentSet>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "EquipmentSet");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EquipmentSet>.NativeClassPtr);
		EquipmentSet.NativeFieldInfoPtr_SetName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentSet>.NativeClassPtr, "SetName");
		EquipmentSet.NativeFieldInfoPtr_Id = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentSet>.NativeClassPtr, "Id");
		EquipmentSet.NativeFieldInfoPtr_Item = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentSet>.NativeClassPtr, "Item");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EquipmentSet>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SetName;
	private static readonly IntPtr NativeFieldInfoPtr_Id;
	private static readonly IntPtr NativeFieldInfoPtr_Item;
	[FieldOffset(0)]
	public AssetGuid SetName;
	[FieldOffset(16)]
	public PrefabGUID Id;
	[FieldOffset(20)]
	public PrefabGUID Item;
}
