---
nav_exclude: true
search_exclude: true
---

```csharp
public struct PlaySequenceOnPickup
{
	static PlaySequenceOnPickup()
	{
		Il2CppClassPointerStore<PlaySequenceOnPickup>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PlaySequenceOnPickup");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlaySequenceOnPickup>.NativeClassPtr);
		PlaySequenceOnPickup.NativeFieldInfoPtr_PickupSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlaySequenceOnPickup>.NativeClassPtr, "PickupSequenceGuid");
		PlaySequenceOnPickup.NativeFieldInfoPtr_InventoryFullSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlaySequenceOnPickup>.NativeClassPtr, "InventoryFullSequenceGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlaySequenceOnPickup>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PickupSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_InventoryFullSequenceGuid;

	public SequenceGUID PickupSequenceGuid;

	public SequenceGUID InventoryFullSequenceGuid;
}
```
