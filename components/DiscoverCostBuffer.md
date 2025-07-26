---
nav_exclude: true
search_exclude: true
---

# DiscoverCostBuffer

```csharp
public struct DiscoverCostBuffer
{
	static DiscoverCostBuffer()
	{
		Il2CppClassPointerStore<DiscoverCostBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DiscoverCostBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DiscoverCostBuffer>.NativeClassPtr);
		DiscoverCostBuffer.NativeFieldInfoPtr_PrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DiscoverCostBuffer>.NativeClassPtr, "PrefabGUID");
		DiscoverCostBuffer.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DiscoverCostBuffer>.NativeClassPtr, "Amount");
		DiscoverCostBuffer.NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DiscoverCostBuffer>.NativeClassPtr, 100664696);
	}
	public unsafe InventoryBuffer ToInventoryBuffer
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DiscoverCostBuffer.NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DiscoverCostBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0;

	public PrefabGUID PrefabGUID;

	public int Amount;
}
```
