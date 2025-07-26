---
nav_exclude: true
search_exclude: true
---

# BagHolder

```csharp
public struct BagHolder
{
	static BagHolder()
	{
		Il2CppClassPointerStore<BagHolder>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "BagHolder");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BagHolder>.NativeClassPtr);
		BagHolder.NativeFieldInfoPtr_BagInstance0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BagHolder>.NativeClassPtr, "BagInstance0");
		BagHolder.NativeFieldInfoPtr_BagInstance1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BagHolder>.NativeClassPtr, "BagInstance1");
		BagHolder.NativeFieldInfoPtr_BagInstance2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BagHolder>.NativeClassPtr, "BagInstance2");
		BagHolder.NativeFieldInfoPtr_BagInstance3 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BagHolder>.NativeClassPtr, "BagInstance3");
		BagHolder.NativeFieldInfoPtr_BagSlots = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BagHolder>.NativeClassPtr, "BagSlots");
		BagHolder.NativeFieldInfoPtr_Capacity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BagHolder>.NativeClassPtr, "Capacity");
		BagHolder.NativeMethodInfoPtr_IsValidSlot_Public_Boolean_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BagHolder>.NativeClassPtr, 100672026);
		BagHolder.NativeMethodInfoPtr_get_Item_Public_get_BagInstance_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BagHolder>.NativeClassPtr, 100672027);
		BagHolder.NativeMethodInfoPtr_set_Item_Public_set_Void_Int32_BagInstance_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BagHolder>.NativeClassPtr, 100672028);
	}

	public unsafe bool IsValidSlot(int slot)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref slot;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BagHolder.NativeMethodInfoPtr_IsValidSlot_Public_Boolean_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public unsafe BagInstance this[int index]
	{

		get
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref index;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BagHolder.NativeMethodInfoPtr_get_Item_Public_get_BagInstance_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref index;
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BagHolder.NativeMethodInfoPtr_set_Item_Public_set_Void_Int32_BagInstance_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BagHolder>.NativeClassPtr, ref this));
	}
	public unsafe static int Capacity
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(BagHolder.NativeFieldInfoPtr_Capacity, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(BagHolder.NativeFieldInfoPtr_Capacity, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_BagInstance0;
	private static readonly IntPtr NativeFieldInfoPtr_BagInstance1;
	private static readonly IntPtr NativeFieldInfoPtr_BagInstance2;
	private static readonly IntPtr NativeFieldInfoPtr_BagInstance3;
	private static readonly IntPtr NativeFieldInfoPtr_BagSlots;
	private static readonly IntPtr NativeFieldInfoPtr_Capacity;
	private static readonly IntPtr NativeMethodInfoPtr_IsValidSlot_Public_Boolean_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Item_Public_get_BagInstance_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_Item_Public_set_Void_Int32_BagInstance_0;

	public BagInstance BagInstance0;

	public BagInstance BagInstance1;

	public BagInstance BagInstance2;

	public BagInstance BagInstance3;

	public int BagSlots;
}
```
