---
nav_exclude: true
search_exclude: true
---

# CastleRebuildRegistry_Server

```csharp
[StructLayout(2)]
public struct CastleRebuildRegistry_Server
{
	static CastleRebuildRegistry_Server()
	{
		Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding.Rebuilding", "CastleRebuildRegistry_Server");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr);
		CastleRebuildRegistry_Server.NativeFieldInfoPtr_Shared = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr, "Shared");
		CastleRebuildRegistry_Server.NativeFieldInfoPtr_CastleRebuildUpdateFlags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr, "CastleRebuildUpdateFlags");
		CastleRebuildRegistry_Server.NativeFieldInfoPtr__CastleRebuildServerData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr, "_CastleRebuildServerData");
		CastleRebuildRegistry_Server.NativeMethodInfoPtr__ctor_Public_Void_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr, 100682812);
		CastleRebuildRegistry_Server.NativeMethodInfoPtr_AddCastleRebuild_Public_Void_byref_CastleRebuildData_byref_SpatialMapZoneData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr, 100682813);
		CastleRebuildRegistry_Server.NativeMethodInfoPtr_RemoveCastleRebuild_Public_Boolean_MapZoneId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr, 100682814);
		CastleRebuildRegistry_Server.NativeMethodInfoPtr_Set_Public_Void_byref_CastleRebuildData_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr, 100682815);
		CastleRebuildRegistry_Server.NativeMethodInfoPtr_Set_Public_Void_byref_CastleRebuildData_CastleRebuildUniqueKey_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr, 100682816);
		CastleRebuildRegistry_Server.NativeMethodInfoPtr_Set_Public_Void_byref_CastleRebuildData_CastleRebuildState_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr, 100682817);
		CastleRebuildRegistry_Server.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr, 100682818);
		CastleRebuildRegistry_Server.NativeMethodInfoPtr_Set_Public_Void_byref_MapZoneId_byref_ServerRebuildingData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr, 100682819);
		CastleRebuildRegistry_Server.NativeMethodInfoPtr_TryGetServerData_Public_Boolean_byref_MapZoneId_byref_ServerRebuildingData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr, 100682820);
		CastleRebuildRegistry_Server.NativeMethodInfoPtr_AddUpdateFlags_Private_Void_MapZoneId_UpdateFlags_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr, 100682821);
		CastleRebuildRegistry_Server.NativeMethodInfoPtr_ClearUpdateFlags_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr, 100682822);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 266730, RefRangeEnd = 266731, XrefRangeStart = 266720, XrefRangeEnd = 266730, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe CastleRebuildRegistry_Server(int capacity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref capacity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry_Server.NativeMethodInfoPtr__ctor_Public_Void_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 266749, RefRangeEnd = 266751, XrefRangeStart = 266731, XrefRangeEnd = 266749, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddCastleRebuild([In] ref CastleRebuildData castleRebuild, [In] ref SpatialMapZoneData rebuildZone)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &castleRebuild;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &rebuildZone;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry_Server.NativeMethodInfoPtr_AddCastleRebuild_Public_Void_byref_CastleRebuildData_byref_SpatialMapZoneData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 266753, RefRangeEnd = 266756, XrefRangeStart = 266751, XrefRangeEnd = 266753, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool RemoveCastleRebuild(MapZoneId rebuildTerritory)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref rebuildTerritory;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry_Server.NativeMethodInfoPtr_RemoveCastleRebuild_Public_Boolean_MapZoneId_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 266778, RefRangeEnd = 266780, XrefRangeStart = 266756, XrefRangeEnd = 266778, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Set([In] ref CastleRebuildData data, PrefabGUID commonItem)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &data;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref commonItem;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry_Server.NativeMethodInfoPtr_Set_Public_Void_byref_CastleRebuildData_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(4)]
	[CachedScanResults(RefRangeStart = 266802, RefRangeEnd = 266806, XrefRangeStart = 266780, XrefRangeEnd = 266802, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Set([In] ref CastleRebuildData data, CastleRebuildUniqueKey uniqueKey)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &data;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref uniqueKey;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry_Server.NativeMethodInfoPtr_Set_Public_Void_byref_CastleRebuildData_CastleRebuildUniqueKey_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 266824, RefRangeEnd = 266826, XrefRangeStart = 266806, XrefRangeEnd = 266824, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Set([In] ref CastleRebuildData data, CastleRebuildState newState)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &data;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref newState;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry_Server.NativeMethodInfoPtr_Set_Public_Void_byref_CastleRebuildData_CastleRebuildState_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 266838, RefRangeEnd = 266839, XrefRangeStart = 266826, XrefRangeEnd = 266838, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Dispose()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry_Server.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 266839, XrefRangeEnd = 266843, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Set([In] ref MapZoneId rebuildTerritory, [In] ref CastleRebuildRegistry_Server.ServerRebuildingData serverData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &rebuildTerritory;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &serverData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry_Server.NativeMethodInfoPtr_Set_Public_Void_byref_MapZoneId_byref_ServerRebuildingData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 266843, XrefRangeEnd = 266846, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetServerData([In] ref MapZoneId rebuildTerritory, out CastleRebuildRegistry_Server.ServerRebuildingData serverData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &rebuildTerritory;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &serverData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry_Server.NativeMethodInfoPtr_TryGetServerData_Public_Boolean_byref_MapZoneId_byref_ServerRebuildingData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(4)]
	[CachedScanResults(RefRangeStart = 266855, RefRangeEnd = 266859, XrefRangeStart = 266846, XrefRangeEnd = 266855, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddUpdateFlags(MapZoneId id, CastleRebuildRegistry_Server.UpdateFlags newFlags)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref id;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref newFlags;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry_Server.NativeMethodInfoPtr_AddUpdateFlags_Private_Void_MapZoneId_UpdateFlags_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 266859, XrefRangeEnd = 266863, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ClearUpdateFlags()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry_Server.NativeMethodInfoPtr_ClearUpdateFlags_Public_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Shared;
	private static readonly IntPtr NativeFieldInfoPtr_CastleRebuildUpdateFlags;
	private static readonly IntPtr NativeFieldInfoPtr__CastleRebuildServerData;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddCastleRebuild_Public_Void_byref_CastleRebuildData_byref_SpatialMapZoneData_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveCastleRebuild_Public_Boolean_MapZoneId_0;
	private static readonly IntPtr NativeMethodInfoPtr_Set_Public_Void_byref_CastleRebuildData_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_Set_Public_Void_byref_CastleRebuildData_CastleRebuildUniqueKey_0;
	private static readonly IntPtr NativeMethodInfoPtr_Set_Public_Void_byref_CastleRebuildData_CastleRebuildState_0;
	private static readonly IntPtr NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr_Set_Public_Void_byref_MapZoneId_byref_ServerRebuildingData_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetServerData_Public_Boolean_byref_MapZoneId_byref_ServerRebuildingData_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddUpdateFlags_Private_Void_MapZoneId_UpdateFlags_0;
	private static readonly IntPtr NativeMethodInfoPtr_ClearUpdateFlags_Public_Void_0;
	[FieldOffset(0)]
	public CastleRebuildRegistry Shared;
	[FieldOffset(8)]
	public NativeParallelHashMap<MapZoneId, CastleRebuildRegistry_Server.UpdateFlags> CastleRebuildUpdateFlags;
	[FieldOffset(24)]
	public NativeParallelHashMap<MapZoneId, CastleRebuildRegistry_Server.ServerRebuildingData> _CastleRebuildServerData;
	[Flags]
	public enum UpdateFlags : byte
	{
		None = 0,
		Created = 1,
		Destroyed = 2,
		UpdatedCommons = 4,
		UpdatedUniques = 8,
		UpdatedState = 16
	}
	[StructLayout(2)]
	public struct ServerRebuildingData
	{
		static ServerRebuildingData()
		{
			Il2CppClassPointerStore<CastleRebuildRegistry_Server.ServerRebuildingData>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<CastleRebuildRegistry_Server>.NativeClassPtr, "ServerRebuildingData");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildRegistry_Server.ServerRebuildingData>.NativeClassPtr);
			CastleRebuildRegistry_Server.ServerRebuildingData.NativeFieldInfoPtr_RebuildZone = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildRegistry_Server.ServerRebuildingData>.NativeClassPtr, "RebuildZone");
			CastleRebuildRegistry_Server.ServerRebuildingData.NativeFieldInfoPtr_UpdatedCommons = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildRegistry_Server.ServerRebuildingData>.NativeClassPtr, "UpdatedCommons");
			CastleRebuildRegistry_Server.ServerRebuildingData.NativeFieldInfoPtr_UpdatedUniques = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildRegistry_Server.ServerRebuildingData>.NativeClassPtr, "UpdatedUniques");
			CastleRebuildRegistry_Server.ServerRebuildingData.NativeMethodInfoPtr_Create_Public_Static_ServerRebuildingData_byref_SpatialMapZoneData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry_Server.ServerRebuildingData>.NativeClassPtr, 100682823);
			CastleRebuildRegistry_Server.ServerRebuildingData.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry_Server.ServerRebuildingData>.NativeClassPtr, 100682824);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 266706, XrefRangeEnd = 266714, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe static CastleRebuildRegistry_Server.ServerRebuildingData Create([In] ref SpatialMapZoneData rebuildZone)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &rebuildZone;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry_Server.ServerRebuildingData.NativeMethodInfoPtr_Create_Public_Static_ServerRebuildingData_byref_SpatialMapZoneData_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 266714, XrefRangeEnd = 266720, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe void Dispose()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry_Server.ServerRebuildingData.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildRegistry_Server.ServerRebuildingData>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_RebuildZone;
		private static readonly IntPtr NativeFieldInfoPtr_UpdatedCommons;
		private static readonly IntPtr NativeFieldInfoPtr_UpdatedUniques;
		private static readonly IntPtr NativeMethodInfoPtr_Create_Public_Static_ServerRebuildingData_byref_SpatialMapZoneData_0;
		private static readonly IntPtr NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0;
		[FieldOffset(0)]
		public SpatialMapZoneData RebuildZone;
		[FieldOffset(32)]
		public NativeList<PrefabGUID> UpdatedCommons;
		[FieldOffset(40)]
		public NativeList<CastleRebuildUniqueKey> UpdatedUniques;
	}
}
