# GetCastleIndexResponseEvent

```csharp
[StructLayout(2)]
public struct GetCastleIndexResponseEvent
{
	static GetCastleIndexResponseEvent()
	{
		Il2CppClassPointerStore<GetCastleIndexResponseEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "GetCastleIndexResponseEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GetCastleIndexResponseEvent>.NativeClassPtr);
		GetCastleIndexResponseEvent.NativeFieldInfoPtr_Index = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetCastleIndexResponseEvent>.NativeClassPtr, "Index");
		GetCastleIndexResponseEvent.NativeFieldInfoPtr_DisposeList = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetCastleIndexResponseEvent>.NativeClassPtr, "DisposeList");
		GetCastleIndexResponseEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GetCastleIndexResponseEvent>.NativeClassPtr, 100684686);
		GetCastleIndexResponseEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GetCastleIndexResponseEvent>.NativeClassPtr, 100684687);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294599, RefRangeEnd = 294600, XrefRangeStart = 294551, XrefRangeEnd = 294599, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GetCastleIndexResponseEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294657, RefRangeEnd = 294658, XrefRangeStart = 294600, XrefRangeEnd = 294657, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GetCastleIndexResponseEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GetCastleIndexResponseEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Index;
	private static readonly IntPtr NativeFieldInfoPtr_DisposeList;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public NativeHashMap<PrefabGUID, int> Index;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool DisposeList;
}
