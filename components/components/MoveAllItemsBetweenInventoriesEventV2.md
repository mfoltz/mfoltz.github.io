---
nav_exclude: true
search_exclude: true
---

# MoveAllItemsBetweenInventoriesEventV2

```csharp
[StructLayout(2)]
public struct MoveAllItemsBetweenInventoriesEventV2
{
	static MoveAllItemsBetweenInventoriesEventV2()
	{
		Il2CppClassPointerStore<MoveAllItemsBetweenInventoriesEventV2>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "MoveAllItemsBetweenInventoriesEventV2");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MoveAllItemsBetweenInventoriesEventV2>.NativeClassPtr);
		MoveAllItemsBetweenInventoriesEventV2.NativeFieldInfoPtr_FromInventory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveAllItemsBetweenInventoriesEventV2>.NativeClassPtr, "FromInventory");
		MoveAllItemsBetweenInventoriesEventV2.NativeFieldInfoPtr_ToInventory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveAllItemsBetweenInventoriesEventV2>.NativeClassPtr, "ToInventory");
		MoveAllItemsBetweenInventoriesEventV2.NativeFieldInfoPtr_FilteredItem = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveAllItemsBetweenInventoriesEventV2>.NativeClassPtr, "FilteredItem");
		MoveAllItemsBetweenInventoriesEventV2.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MoveAllItemsBetweenInventoriesEventV2>.NativeClassPtr, 100684303);
		MoveAllItemsBetweenInventoriesEventV2.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MoveAllItemsBetweenInventoriesEventV2>.NativeClassPtr, 100684304);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291697, RefRangeEnd = 291698, XrefRangeStart = 291690, XrefRangeEnd = 291697, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MoveAllItemsBetweenInventoriesEventV2.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291705, RefRangeEnd = 291706, XrefRangeStart = 291698, XrefRangeEnd = 291705, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MoveAllItemsBetweenInventoriesEventV2.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MoveAllItemsBetweenInventoriesEventV2>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FromInventory;
	private static readonly IntPtr NativeFieldInfoPtr_ToInventory;
	private static readonly IntPtr NativeFieldInfoPtr_FilteredItem;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public NetworkId FromInventory;
	[FieldOffset(12)]
	public NetworkId ToInventory;
	[FieldOffset(24)]
	public PrefabGUID FilteredItem;
}
