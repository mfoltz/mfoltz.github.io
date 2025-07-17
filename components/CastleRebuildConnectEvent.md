---
nav_exclude: true
search_exclude: true
---

# CastleRebuildConnectEvent

```csharp
[StructLayout(2)]
public struct CastleRebuildConnectEvent
{
	static CastleRebuildConnectEvent()
	{
		Il2CppClassPointerStore<CastleRebuildConnectEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CastleRebuildConnectEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildConnectEvent>.NativeClassPtr);
		CastleRebuildConnectEvent.NativeFieldInfoPtr_TargetTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildConnectEvent>.NativeClassPtr, "TargetTerritory");
		CastleRebuildConnectEvent.NativeFieldInfoPtr_SourceTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildConnectEvent>.NativeClassPtr, "SourceTerritory");
		CastleRebuildConnectEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildConnectEvent>.NativeClassPtr, 100684415);
		CastleRebuildConnectEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildConnectEvent>.NativeClassPtr, 100684416);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292635, RefRangeEnd = 292636, XrefRangeStart = 292618, XrefRangeEnd = 292635, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildConnectEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292653, RefRangeEnd = 292654, XrefRangeStart = 292636, XrefRangeEnd = 292653, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildConnectEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildConnectEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetTerritory;
	private static readonly IntPtr NativeFieldInfoPtr_SourceTerritory;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public MapZoneId TargetTerritory;
	[FieldOffset(3)]
	public MapZoneId SourceTerritory;
}
