---
nav_exclude: true
search_exclude: false
---

# ItemEquipEventData

```csharp
public struct ItemEquipEventData
{
	static ItemEquipEventData()
	{
		Il2CppClassPointerStore<ItemEquipEventData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ItemEquipEventData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ItemEquipEventData>.NativeClassPtr);
		ItemEquipEventData.NativeFieldInfoPtr_EquipmentType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemEquipEventData>.NativeClassPtr, "EquipmentType");
		ItemEquipEventData.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemEquipEventData>.NativeClassPtr, "Character");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ItemEquipEventData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EquipmentType;
	private static readonly IntPtr NativeFieldInfoPtr_Character;

	public EquipmentType EquipmentType;

	public Entity Character;
}
```

## Server Systems

- [TrophySystem_Events_Server](/systems/server/TrophySystem_Events_Server)
