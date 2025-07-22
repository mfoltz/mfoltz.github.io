---
nav_exclude: true
search_exclude: false
---

# EquipmentSetElements

```csharp
public struct EquipmentSetElements
{
	static EquipmentSetElements()
	{
		Il2CppClassPointerStore<EquipmentSetElements>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "EquipmentSetElements");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EquipmentSetElements>.NativeClassPtr);
		EquipmentSetElements.NativeFieldInfoPtr_RequiredItemsInSet = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentSetElements>.NativeClassPtr, "RequiredItemsInSet");
		EquipmentSetElements.NativeFieldInfoPtr_Buff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentSetElements>.NativeClassPtr, "Buff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EquipmentSetElements>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RequiredItemsInSet;
	private static readonly IntPtr NativeFieldInfoPtr_Buff;

	public int RequiredItemsInSet;

	public PrefabGUID Buff;
}
```
