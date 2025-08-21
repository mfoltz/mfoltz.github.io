---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ShatteredItemRepairCost
{
	static ShatteredItemRepairCost()
	{
		Il2CppClassPointerStore<ShatteredItemRepairCost>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ShatteredItemRepairCost");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShatteredItemRepairCost>.NativeClassPtr);
		ShatteredItemRepairCost.NativeFieldInfoPtr_ItemId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShatteredItemRepairCost>.NativeClassPtr, "ItemId");
		ShatteredItemRepairCost.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShatteredItemRepairCost>.NativeClassPtr, "Amount");
		ShatteredItemRepairCost.NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ShatteredItemRepairCost>.NativeClassPtr, 100665881);
	}
	public unsafe InventoryBuffer ToInventoryBuffer
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ShatteredItemRepairCost.NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShatteredItemRepairCost>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ItemId;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0;

	public PrefabGUID ItemId;

	public int Amount;
}
```
