# TravelBuffCollection

```csharp
[StructLayout(2)]
public struct TravelBuffCollection
{
	static TravelBuffCollection()
	{
		Il2CppClassPointerStore<TravelBuffCollection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TravelBuffCollection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TravelBuffCollection>.NativeClassPtr);
		TravelBuffCollection.NativeFieldInfoPtr__TravelBuffs = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffCollection>.NativeClassPtr, "_TravelBuffs");
		TravelBuffCollection.NativeMethodInfoPtr__ctor_Internal_Void_NativeList_1_EntityTravelBuffEndPosition_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TravelBuffCollection>.NativeClassPtr, 100667487);
		TravelBuffCollection.NativeMethodInfoPtr_get_EndPositions_Public_get_NativeArray_1_EntityTravelBuffEndPosition_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TravelBuffCollection>.NativeClassPtr, 100667488);
		TravelBuffCollection.NativeMethodInfoPtr_Register_Public_Void_byref_Entity_byref_TravelBuff_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TravelBuffCollection>.NativeClassPtr, 100667489);
		TravelBuffCollection.NativeMethodInfoPtr_Deregister_Public_Void_byref_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TravelBuffCollection>.NativeClassPtr, 100667490);
		TravelBuffCollection.NativeMethodInfoPtr_IndexOf_Private_Int32_byref_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TravelBuffCollection>.NativeClassPtr, 100667491);
		TravelBuffCollection.NativeMethodInfoPtr_Dispose_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TravelBuffCollection>.NativeClassPtr, 100667492);
	}
	[CallerCount(9)]
	[CachedScanResults(RefRangeStart = 77190, RefRangeEnd = 77199, XrefRangeStart = 77190, XrefRangeEnd = 77190, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe TravelBuffCollection(NativeList<EntityTravelBuffEndPosition> travelBuffs)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref travelBuffs;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TravelBuffCollection.NativeMethodInfoPtr__ctor_Internal_Void_NativeList_1_EntityTravelBuffEndPosition_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public unsafe NativeArray<EntityTravelBuffEndPosition> EndPositions
	{
		[CallerCount(1)]
		[CachedScanResults(RefRangeStart = 77203, RefRangeEnd = 77204, XrefRangeStart = 77199, XrefRangeEnd = 77203, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TravelBuffCollection.NativeMethodInfoPtr_get_EndPositions_Public_get_NativeArray_1_EntityTravelBuffEndPosition_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 77214, RefRangeEnd = 77216, XrefRangeStart = 77204, XrefRangeEnd = 77214, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Register([In] ref Entity entity, [In] ref TravelBuff travelBuff)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &entity;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &travelBuff;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TravelBuffCollection.NativeMethodInfoPtr_Register_Public_Void_byref_Entity_byref_TravelBuff_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 77216, XrefRangeEnd = 77220, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deregister([In] ref Entity entity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &entity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TravelBuffCollection.NativeMethodInfoPtr_Deregister_Public_Void_byref_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 77229, RefRangeEnd = 77232, XrefRangeStart = 77220, XrefRangeEnd = 77229, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe int IndexOf([In] ref Entity entity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &entity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TravelBuffCollection.NativeMethodInfoPtr_IndexOf_Private_Int32_byref_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 77232, XrefRangeEnd = 77235, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Dispose()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TravelBuffCollection.NativeMethodInfoPtr_Dispose_Public_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TravelBuffCollection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr__TravelBuffs;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Internal_Void_NativeList_1_EntityTravelBuffEndPosition_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_EndPositions_Public_get_NativeArray_1_EntityTravelBuffEndPosition_0;
	private static readonly IntPtr NativeMethodInfoPtr_Register_Public_Void_byref_Entity_byref_TravelBuff_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deregister_Public_Void_byref_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_IndexOf_Private_Int32_byref_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_Dispose_Public_Void_0;
	[FieldOffset(0)]
	public NativeList<EntityTravelBuffEndPosition> _TravelBuffs;
}
