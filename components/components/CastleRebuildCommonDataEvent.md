---
nav_exclude: true
search_exclude: true
---

# CastleRebuildCommonDataEvent

```csharp
[StructLayout(2)]
public struct CastleRebuildCommonDataEvent
{
	static CastleRebuildCommonDataEvent()
	{
		Il2CppClassPointerStore<CastleRebuildCommonDataEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CastleRebuildCommonDataEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildCommonDataEvent>.NativeClassPtr);
		CastleRebuildCommonDataEvent.NativeFieldInfoPtr_RebuildTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildCommonDataEvent>.NativeClassPtr, "RebuildTerritory");
		CastleRebuildCommonDataEvent.NativeFieldInfoPtr_Items = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildCommonDataEvent>.NativeClassPtr, "Items");
		CastleRebuildCommonDataEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildCommonDataEvent>.NativeClassPtr, 100684704);
		CastleRebuildCommonDataEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildCommonDataEvent>.NativeClassPtr, 100684705);
		CastleRebuildCommonDataEvent.NativeMethodInfoPtr_GetRebuildTerritory_Public_Virtual_Final_New_MapZoneId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildCommonDataEvent>.NativeClassPtr, 100684706);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294855, RefRangeEnd = 294856, XrefRangeStart = 294818, XrefRangeEnd = 294855, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildCommonDataEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294882, RefRangeEnd = 294883, XrefRangeStart = 294856, XrefRangeEnd = 294882, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildCommonDataEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	public unsafe MapZoneId GetRebuildTerritory()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildCommonDataEvent.NativeMethodInfoPtr_GetRebuildTerritory_Public_Virtual_Final_New_MapZoneId_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildCommonDataEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RebuildTerritory;
	private static readonly IntPtr NativeFieldInfoPtr_Items;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetRebuildTerritory_Public_Virtual_Final_New_MapZoneId_0;
	[FieldOffset(0)]
	public MapZoneId RebuildTerritory;
	[FieldOffset(8)]
	public FixedList512Bytes<CastleRebuildCommonDataEvent.Data> Items;
	[StructLayout(2)]
	public struct Data
	{
		static Data()
		{
			Il2CppClassPointerStore<CastleRebuildCommonDataEvent.Data>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<CastleRebuildCommonDataEvent>.NativeClassPtr, "Data");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildCommonDataEvent.Data>.NativeClassPtr);
			CastleRebuildCommonDataEvent.Data.NativeFieldInfoPtr_Prefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildCommonDataEvent.Data>.NativeClassPtr, "Prefab");
			CastleRebuildCommonDataEvent.Data.NativeFieldInfoPtr_Item = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildCommonDataEvent.Data>.NativeClassPtr, "Item");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildCommonDataEvent.Data>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_Prefab;
		private static readonly IntPtr NativeFieldInfoPtr_Item;
		[FieldOffset(0)]
		public PrefabGUID Prefab;
		[FieldOffset(4)]
		public CastleRebuildCommonItem Item;
	}
}
