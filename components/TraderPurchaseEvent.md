# TraderPurchaseEvent

```csharp
[StructLayout(2)]
public struct TraderPurchaseEvent
{
	static TraderPurchaseEvent()
	{
		Il2CppClassPointerStore<TraderPurchaseEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "TraderPurchaseEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TraderPurchaseEvent>.NativeClassPtr);
		TraderPurchaseEvent.NativeFieldInfoPtr_Trader = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderPurchaseEvent>.NativeClassPtr, "Trader");
		TraderPurchaseEvent.NativeFieldInfoPtr_ItemIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderPurchaseEvent>.NativeClassPtr, "ItemIndex");
		TraderPurchaseEvent.NativeFieldInfoPtr_ItemId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderPurchaseEvent>.NativeClassPtr, "ItemId");
		TraderPurchaseEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TraderPurchaseEvent>.NativeClassPtr, 100684461);
		TraderPurchaseEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TraderPurchaseEvent>.NativeClassPtr, 100684462);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292915, RefRangeEnd = 292916, XrefRangeStart = 292908, XrefRangeEnd = 292915, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TraderPurchaseEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292923, RefRangeEnd = 292924, XrefRangeStart = 292916, XrefRangeEnd = 292923, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TraderPurchaseEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TraderPurchaseEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Trader;
	private static readonly IntPtr NativeFieldInfoPtr_ItemIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ItemId;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public NetworkId Trader;
	[FieldOffset(12)]
	public int ItemIndex;
	[FieldOffset(16)]
	public int ItemId;
}
