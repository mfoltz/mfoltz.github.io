---
nav_exclude: true
search_exclude: true
---

# TilePosition

```csharp
[StructLayout(2)]
public struct TilePosition
{
	static TilePosition()
	{
		Il2CppClassPointerStore<TilePosition>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TilePosition");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TilePosition>.NativeClassPtr);
		TilePosition.NativeFieldInfoPtr_Tile = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TilePosition>.NativeClassPtr, "Tile");
		TilePosition.NativeFieldInfoPtr_TileRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TilePosition>.NativeClassPtr, "TileRotation");
		TilePosition.NativeFieldInfoPtr_CompressedHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TilePosition>.NativeClassPtr, "CompressedHeight");
		TilePosition.NativeMethodInfoPtr_get_HeightLevel_Public_get_Byte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TilePosition>.NativeClassPtr, 100665023);
		TilePosition.NativeMethodInfoPtr_GetHeight_Public_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TilePosition>.NativeClassPtr, 100665024);
		TilePosition.NativeMethodInfoPtr__ctor_Public_Void_int2_Single_TileRotation_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TilePosition>.NativeClassPtr, 100665025);
		TilePosition.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TilePosition_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TilePosition>.NativeClassPtr, 100665026);
		TilePosition.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TilePosition>.NativeClassPtr, 100665027);
		TilePosition.NativeMethodInfoPtr_FromBakedSpaceToWorldSpace_Public_Static_TilePosition_byref_TilePosition_int2_TileRotation_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TilePosition>.NativeClassPtr, 100665028);
		TilePosition.NativeMethodInfoPtr_GetTilePosition_Public_Static_TilePosition_byref_LocalToWorld_byref_TileData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TilePosition>.NativeClassPtr, 100665029);
	}
	public unsafe byte HeightLevel
	{
		[CallerCount(21)]
		[CachedScanResults(RefRangeStart = 1066927, RefRangeEnd = 1066948, XrefRangeStart = 1066927, XrefRangeEnd = 1066927, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TilePosition.NativeMethodInfoPtr_get_HeightLevel_Public_get_Byte_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(0)]
	public unsafe float GetHeight()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TilePosition.NativeMethodInfoPtr_GetHeight_Public_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe TilePosition(int2 tile, float yPos, TileRotation tileRotation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref tile;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref yPos;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref tileRotation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TilePosition.NativeMethodInfoPtr__ctor_Public_Void_int2_Single_TileRotation_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	public unsafe bool Equals(TilePosition other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TilePosition.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TilePosition_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1066948, XrefRangeEnd = 1066961, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TilePosition.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(4)]
	[CachedScanResults(RefRangeStart = 1066964, RefRangeEnd = 1066968, XrefRangeStart = 1066961, XrefRangeEnd = 1066964, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static TilePosition FromBakedSpaceToWorldSpace([In] ref TilePosition bakedTilePosition, int2 chunkOffset, TileRotation chunkRotation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &bakedTilePosition;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref chunkOffset;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref chunkRotation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TilePosition.NativeMethodInfoPtr_FromBakedSpaceToWorldSpace_Public_Static_TilePosition_byref_TilePosition_int2_TileRotation_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(9)]
	[CachedScanResults(RefRangeStart = 1066977, RefRangeEnd = 1066986, XrefRangeStart = 1066968, XrefRangeEnd = 1066977, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static TilePosition GetTilePosition([In] ref LocalToWorld localToWorld, [In] ref TileData tileData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &localToWorld;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &tileData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TilePosition.NativeMethodInfoPtr_GetTilePosition_Public_Static_TilePosition_byref_LocalToWorld_byref_TileData_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TilePosition>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Tile;
	private static readonly IntPtr NativeFieldInfoPtr_TileRotation;
	private static readonly IntPtr NativeFieldInfoPtr_CompressedHeight;
	private static readonly IntPtr NativeMethodInfoPtr_get_HeightLevel_Public_get_Byte_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHeight_Public_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_int2_Single_TileRotation_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TilePosition_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromBakedSpaceToWorldSpace_Public_Static_TilePosition_byref_TilePosition_int2_TileRotation_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetTilePosition_Public_Static_TilePosition_byref_LocalToWorld_byref_TileData_0;
	[FieldOffset(0)]
	public int2 Tile;
	[FieldOffset(8)]
	public TileRotation TileRotation;
	[FieldOffset(10)]
	public ushort CompressedHeight;
}
