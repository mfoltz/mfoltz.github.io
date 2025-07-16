# GetVBloodPositionsResponseEvent

```csharp
[StructLayout(2)]
public struct GetVBloodPositionsResponseEvent
{
	static GetVBloodPositionsResponseEvent()
	{
		Il2CppClassPointerStore<GetVBloodPositionsResponseEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "GetVBloodPositionsResponseEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GetVBloodPositionsResponseEvent>.NativeClassPtr);
		GetVBloodPositionsResponseEvent.NativeFieldInfoPtr_List = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetVBloodPositionsResponseEvent>.NativeClassPtr, "List");
		GetVBloodPositionsResponseEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GetVBloodPositionsResponseEvent>.NativeClassPtr, 100684690);
		GetVBloodPositionsResponseEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GetVBloodPositionsResponseEvent>.NativeClassPtr, 100684691);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294701, RefRangeEnd = 294702, XrefRangeStart = 294668, XrefRangeEnd = 294701, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GetVBloodPositionsResponseEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294723, RefRangeEnd = 294724, XrefRangeStart = 294702, XrefRangeEnd = 294723, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GetVBloodPositionsResponseEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GetVBloodPositionsResponseEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_List;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public FixedList512Bytes<VBloodTrackPosition> List;
}
