# RestrictedInventory

```csharp
[StructLayout(2)]
public struct RestrictedInventory
{
	static RestrictedInventory()
	{
		Il2CppClassPointerStore<RestrictedInventory>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RestrictedInventory");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RestrictedInventory>.NativeClassPtr);
		RestrictedInventory.NativeFieldInfoPtr_RestrictedItemType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RestrictedInventory>.NativeClassPtr, "RestrictedItemType");
		RestrictedInventory.NativeFieldInfoPtr_RestrictedItemCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RestrictedInventory>.NativeClassPtr, "RestrictedItemCategory");
		RestrictedInventory.NativeMethodInfoPtr_get_IsRestricted_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RestrictedInventory>.NativeClassPtr, 100664587);
		RestrictedInventory.NativeMethodInfoPtr_IsValidItem_Public_Boolean_PrefabGUID_ItemCategory_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RestrictedInventory>.NativeClassPtr, 100664588);
	}
	public unsafe bool IsRestricted
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RestrictedInventory.NativeMethodInfoPtr_get_IsRestricted_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(0)]
	public unsafe bool IsValidItem(PrefabGUID itemType, ItemCategory itemCategory)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref itemType;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref itemCategory;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RestrictedInventory.NativeMethodInfoPtr_IsValidItem_Public_Boolean_PrefabGUID_ItemCategory_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RestrictedInventory>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RestrictedItemType;
	private static readonly IntPtr NativeFieldInfoPtr_RestrictedItemCategory;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsRestricted_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsValidItem_Public_Boolean_PrefabGUID_ItemCategory_0;
	[FieldOffset(0)]
	public PrefabGUID RestrictedItemType;
	[FieldOffset(8)]
	public ItemCategory RestrictedItemCategory;
}
