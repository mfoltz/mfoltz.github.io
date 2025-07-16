# CastleRebuildInvalidateSourceTransformsEvent

```csharp
[StructLayout(2)]
public struct CastleRebuildInvalidateSourceTransformsEvent
{
	static CastleRebuildInvalidateSourceTransformsEvent()
	{
		Il2CppClassPointerStore<CastleRebuildInvalidateSourceTransformsEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CastleRebuildInvalidateSourceTransformsEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildInvalidateSourceTransformsEvent>.NativeClassPtr);
		CastleRebuildInvalidateSourceTransformsEvent.NativeFieldInfoPtr_CastleHeartId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildInvalidateSourceTransformsEvent>.NativeClassPtr, "CastleHeartId");
		CastleRebuildInvalidateSourceTransformsEvent.NativeFieldInfoPtr_TerritoryIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildInvalidateSourceTransformsEvent>.NativeClassPtr, "TerritoryIndex");
		CastleRebuildInvalidateSourceTransformsEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildInvalidateSourceTransformsEvent>.NativeClassPtr, 100684713);
		CastleRebuildInvalidateSourceTransformsEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildInvalidateSourceTransformsEvent>.NativeClassPtr, 100684714);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294983, RefRangeEnd = 294984, XrefRangeStart = 294977, XrefRangeEnd = 294983, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildInvalidateSourceTransformsEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294990, RefRangeEnd = 294991, XrefRangeStart = 294984, XrefRangeEnd = 294990, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildInvalidateSourceTransformsEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildInvalidateSourceTransformsEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CastleHeartId;
	private static readonly IntPtr NativeFieldInfoPtr_TerritoryIndex;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public NetworkId CastleHeartId;
	[FieldOffset(12)]
	public int TerritoryIndex;
}
