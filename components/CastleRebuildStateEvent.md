# CastleRebuildStateEvent

```csharp
[StructLayout(2)]
public struct CastleRebuildStateEvent
{
	static CastleRebuildStateEvent()
	{
		Il2CppClassPointerStore<CastleRebuildStateEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CastleRebuildStateEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildStateEvent>.NativeClassPtr);
		CastleRebuildStateEvent.NativeFieldInfoPtr_RebuildTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildStateEvent>.NativeClassPtr, "RebuildTerritory");
		CastleRebuildStateEvent.NativeFieldInfoPtr_NewState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildStateEvent>.NativeClassPtr, "NewState");
		CastleRebuildStateEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildStateEvent>.NativeClassPtr, 100684701);
		CastleRebuildStateEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildStateEvent>.NativeClassPtr, 100684702);
		CastleRebuildStateEvent.NativeMethodInfoPtr_GetRebuildTerritory_Public_Virtual_Final_New_MapZoneId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildStateEvent>.NativeClassPtr, 100684703);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294803, RefRangeEnd = 294804, XrefRangeStart = 294790, XrefRangeEnd = 294803, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildStateEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294817, RefRangeEnd = 294818, XrefRangeStart = 294804, XrefRangeEnd = 294817, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildStateEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	public unsafe MapZoneId GetRebuildTerritory()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildStateEvent.NativeMethodInfoPtr_GetRebuildTerritory_Public_Virtual_Final_New_MapZoneId_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildStateEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RebuildTerritory;
	private static readonly IntPtr NativeFieldInfoPtr_NewState;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetRebuildTerritory_Public_Virtual_Final_New_MapZoneId_0;
	[FieldOffset(0)]
	public MapZoneId RebuildTerritory;
	[FieldOffset(3)]
	public CastleRebuildState NewState;
}
