# MoveItemBetweenInventoriesEvent

```csharp
[StructLayout(2)]
public struct MoveItemBetweenInventoriesEvent
{
	static MoveItemBetweenInventoriesEvent()
	{
		Il2CppClassPointerStore<MoveItemBetweenInventoriesEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "MoveItemBetweenInventoriesEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MoveItemBetweenInventoriesEvent>.NativeClassPtr);
		MoveItemBetweenInventoriesEvent.NativeFieldInfoPtr_FromInventory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveItemBetweenInventoriesEvent>.NativeClassPtr, "FromInventory");
		MoveItemBetweenInventoriesEvent.NativeFieldInfoPtr_FromSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveItemBetweenInventoriesEvent>.NativeClassPtr, "FromSlot");
		MoveItemBetweenInventoriesEvent.NativeFieldInfoPtr_ToInventory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveItemBetweenInventoriesEvent>.NativeClassPtr, "ToInventory");
		MoveItemBetweenInventoriesEvent.NativeFieldInfoPtr_ToSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveItemBetweenInventoriesEvent>.NativeClassPtr, "ToSlot");
		MoveItemBetweenInventoriesEvent.NativeFieldInfoPtr_TransferMethod = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveItemBetweenInventoriesEvent>.NativeClassPtr, "TransferMethod");
		MoveItemBetweenInventoriesEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MoveItemBetweenInventoriesEvent>.NativeClassPtr, 100684299);
		MoveItemBetweenInventoriesEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MoveItemBetweenInventoriesEvent>.NativeClassPtr, 100684300);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291665, RefRangeEnd = 291666, XrefRangeStart = 291654, XrefRangeEnd = 291665, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MoveItemBetweenInventoriesEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291677, RefRangeEnd = 291678, XrefRangeStart = 291666, XrefRangeEnd = 291677, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MoveItemBetweenInventoriesEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MoveItemBetweenInventoriesEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FromInventory;
	private static readonly IntPtr NativeFieldInfoPtr_FromSlot;
	private static readonly IntPtr NativeFieldInfoPtr_ToInventory;
	private static readonly IntPtr NativeFieldInfoPtr_ToSlot;
	private static readonly IntPtr NativeFieldInfoPtr_TransferMethod;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public NetworkId FromInventory;
	[FieldOffset(12)]
	public int FromSlot;
	[FieldOffset(16)]
	public NetworkId ToInventory;
	[FieldOffset(28)]
	public int ToSlot;
	[FieldOffset(32)]
	public ItemTransferMethod TransferMethod;
}
