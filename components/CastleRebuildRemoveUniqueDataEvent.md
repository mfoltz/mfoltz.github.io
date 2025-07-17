---
nav_exclude: true
search_exclude: true
---

# CastleRebuildRemoveUniqueDataEvent

```csharp
[StructLayout(2)]
public struct CastleRebuildRemoveUniqueDataEvent
{
	static CastleRebuildRemoveUniqueDataEvent()
	{
		Il2CppClassPointerStore<CastleRebuildRemoveUniqueDataEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CastleRebuildRemoveUniqueDataEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildRemoveUniqueDataEvent>.NativeClassPtr);
		CastleRebuildRemoveUniqueDataEvent.NativeFieldInfoPtr_RebuildTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildRemoveUniqueDataEvent>.NativeClassPtr, "RebuildTerritory");
		CastleRebuildRemoveUniqueDataEvent.NativeFieldInfoPtr_Key = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildRemoveUniqueDataEvent>.NativeClassPtr, "Key");
		CastleRebuildRemoveUniqueDataEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRemoveUniqueDataEvent>.NativeClassPtr, 100684710);
		CastleRebuildRemoveUniqueDataEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRemoveUniqueDataEvent>.NativeClassPtr, 100684711);
		CastleRebuildRemoveUniqueDataEvent.NativeMethodInfoPtr_GetRebuildTerritory_Public_Virtual_Final_New_MapZoneId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRemoveUniqueDataEvent>.NativeClassPtr, 100684712);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294963, RefRangeEnd = 294964, XrefRangeStart = 294951, XrefRangeEnd = 294963, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRemoveUniqueDataEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294976, RefRangeEnd = 294977, XrefRangeStart = 294964, XrefRangeEnd = 294976, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRemoveUniqueDataEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	public unsafe MapZoneId GetRebuildTerritory()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRemoveUniqueDataEvent.NativeMethodInfoPtr_GetRebuildTerritory_Public_Virtual_Final_New_MapZoneId_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildRemoveUniqueDataEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RebuildTerritory;
	private static readonly IntPtr NativeFieldInfoPtr_Key;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetRebuildTerritory_Public_Virtual_Final_New_MapZoneId_0;
	[FieldOffset(0)]
	public MapZoneId RebuildTerritory;
	[FieldOffset(4)]
	public CastleRebuildUniqueKey Key;
}
