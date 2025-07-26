# MoveAllItemsBetweenInventoriesEvent

```csharp
[StructLayout(2)]
public struct MoveAllItemsBetweenInventoriesEvent
{
	static MoveAllItemsBetweenInventoriesEvent()
	{
		Il2CppClassPointerStore<MoveAllItemsBetweenInventoriesEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "MoveAllItemsBetweenInventoriesEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MoveAllItemsBetweenInventoriesEvent>.NativeClassPtr);
		MoveAllItemsBetweenInventoriesEvent.NativeFieldInfoPtr_FromInventory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveAllItemsBetweenInventoriesEvent>.NativeClassPtr, "FromInventory");
		MoveAllItemsBetweenInventoriesEvent.NativeFieldInfoPtr_ToInventory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveAllItemsBetweenInventoriesEvent>.NativeClassPtr, "ToInventory");
		MoveAllItemsBetweenInventoriesEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MoveAllItemsBetweenInventoriesEvent>.NativeClassPtr, 100684301);
		MoveAllItemsBetweenInventoriesEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MoveAllItemsBetweenInventoriesEvent>.NativeClassPtr, 100684302);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291683, RefRangeEnd = 291684, XrefRangeStart = 291678, XrefRangeEnd = 291683, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MoveAllItemsBetweenInventoriesEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291689, RefRangeEnd = 291690, XrefRangeStart = 291684, XrefRangeEnd = 291689, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MoveAllItemsBetweenInventoriesEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MoveAllItemsBetweenInventoriesEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FromInventory;
	private static readonly IntPtr NativeFieldInfoPtr_ToInventory;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public NetworkId FromInventory;
	[FieldOffset(12)]
	public NetworkId ToInventory;
}
