---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ServantConvertRequirement
{
	static ServantConvertRequirement()
	{
		Il2CppClassPointerStore<ServantConvertRequirement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServantConvertRequirement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantConvertRequirement>.NativeClassPtr);
		ServantConvertRequirement.NativeFieldInfoPtr_Item = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantConvertRequirement>.NativeClassPtr, "Item");
		ServantConvertRequirement.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantConvertRequirement>.NativeClassPtr, "Amount");
		ServantConvertRequirement.NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantConvertRequirement>.NativeClassPtr, 100666076);
	}
	public unsafe InventoryBuffer ToInventoryBuffer
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantConvertRequirement.NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantConvertRequirement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Item;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0;

	public PrefabGUID Item;

	public int Amount;
}
```
