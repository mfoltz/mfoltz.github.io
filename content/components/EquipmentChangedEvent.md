---
nav_exclude: true
search_exclude: true
---

```csharp
public struct EquipmentChangedEvent
{
	static EquipmentChangedEvent()
	{
		Il2CppClassPointerStore<EquipmentChangedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "EquipmentChangedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EquipmentChangedEvent>.NativeClassPtr);
		EquipmentChangedEvent.NativeFieldInfoPtr_EquipmentType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentChangedEvent>.NativeClassPtr, "EquipmentType");
		EquipmentChangedEvent.NativeFieldInfoPtr_ItemEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentChangedEvent>.NativeClassPtr, "ItemEntity");
		EquipmentChangedEvent.NativeFieldInfoPtr_Item = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentChangedEvent>.NativeClassPtr, "Item");
		EquipmentChangedEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentChangedEvent>.NativeClassPtr, "Target");
		EquipmentChangedEvent.NativeFieldInfoPtr_ChangeType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentChangedEvent>.NativeClassPtr, "ChangeType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EquipmentChangedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EquipmentType;
	private static readonly IntPtr NativeFieldInfoPtr_ItemEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Item;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_ChangeType;

	public EquipmentType EquipmentType;

	public Entity ItemEntity;

	public PrefabGUID Item;

	public Entity Target;

	public EquipmentChangedEventType ChangeType;
}
```
