# TerrainChunkShared

```csharp
[Serializable]
[StructLayout(2)]
public struct TerrainChunkShared
{
	static TerrainChunkShared()
	{
		Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "TerrainChunkShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr);
		TerrainChunkShared.NativeFieldInfoPtr_Chunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, "Chunk");
		TerrainChunkShared.NativeMethodInfoPtr_get_X_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668744);
		TerrainChunkShared.NativeMethodInfoPtr_get_Y_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668745);
		TerrainChunkShared.NativeMethodInfoPtr__ctor_Public_Void_int2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668746);
		TerrainChunkShared.NativeMethodInfoPtr__ctor_Public_Void_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668747);
		TerrainChunkShared.NativeMethodInfoPtr_GetTileOffset_Public_int2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668748);
		TerrainChunkShared.NativeMethodInfoPtr_GetBlockOffset_Public_int2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668749);
		TerrainChunkShared.NativeMethodInfoPtr_GetWorldOffset_Public_float2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668750);
		TerrainChunkShared.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668751);
		TerrainChunkShared.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668752);
		TerrainChunkShared.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_int2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668753);
		TerrainChunkShared.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TerrainChunkShared_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668754);
		TerrainChunkShared.NativeMethodInfoPtr_FromPosition_Public_Static_TerrainChunkShared_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668755);
		TerrainChunkShared.NativeMethodInfoPtr_GetRelativeTileCoordinate_Public_int2_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668756);
		TerrainChunkShared.NativeMethodInfoPtr_GetLocalTileCoordinate_Public_Static_int2_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668757);
		TerrainChunkShared.NativeMethodInfoPtr_GetBounds_Public_BoundsMinMax_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668758);
		TerrainChunkShared.NativeMethodInfoPtr_GetWorldTransformMatrix_Public_float4x4_OrthogonalRotation_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668759);
		TerrainChunkShared.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668760);
		TerrainChunkShared.NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668761);
		TerrainChunkShared.NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, 100668762);
	}
	public unsafe int X
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr_get_X_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe int Y
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr_get_Y_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1110651, XrefRangeEnd = 1110652, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe TerrainChunkShared(int2 chunkCoordinate)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref chunkCoordinate;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr__ctor_Public_Void_int2_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1110652, XrefRangeEnd = 1110653, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe TerrainChunkShared(int x, int y)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref x;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref y;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr__ctor_Public_Void_Int32_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	public unsafe int2 GetTileOffset()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr_GetTileOffset_Public_int2_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe int2 GetBlockOffset()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr_GetBlockOffset_Public_int2_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe float2 GetWorldOffset()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr_GetWorldOffset_Public_float2_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1110653, XrefRangeEnd = 1110655, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe bool Equals(int2 other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_int2_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(17)]
	[CachedScanResults(RefRangeStart = 1110407, RefRangeEnd = 1110424, XrefRangeStart = 1110407, XrefRangeEnd = 1110424, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool Equals(TerrainChunkShared other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TerrainChunkShared_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1110655, XrefRangeEnd = 1110657, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static TerrainChunkShared FromPosition(float3 worldPos)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPos;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr_FromPosition_Public_Static_TerrainChunkShared_float3_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1110657, XrefRangeEnd = 1110658, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe int2 GetRelativeTileCoordinate(float3 worldPos)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPos;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr_GetRelativeTileCoordinate_Public_int2_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1110658, XrefRangeEnd = 1110661, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static int2 GetLocalTileCoordinate(float3 worldPos)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPos;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr_GetLocalTileCoordinate_Public_Static_int2_float3_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe BoundsMinMax GetBounds()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr_GetBounds_Public_BoundsMinMax_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1110661, XrefRangeEnd = 1110662, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float4x4 GetWorldTransformMatrix(OrthogonalRotation rotation, bool includeWorldOffset = true)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref rotation;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref includeWorldOffset;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr_GetWorldTransformMatrix_Public_float4x4_OrthogonalRotation_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1110662, XrefRangeEnd = 1110671, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(0)]
	public unsafe static bool __codegen__Equals(void* self, void* A_1)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = self;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = A_1;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static int __codegen__GetHashCode(void* self)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = self;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkShared.NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainChunkShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Chunk;
	private static readonly IntPtr NativeMethodInfoPtr_get_X_Public_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Y_Public_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_int2_0;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Int32_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetTileOffset_Public_int2_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetBlockOffset_Public_int2_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetWorldOffset_Public_float2_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_int2_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TerrainChunkShared_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromPosition_Public_Static_TerrainChunkShared_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetRelativeTileCoordinate_Public_int2_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetLocalTileCoordinate_Public_Static_int2_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetBounds_Public_BoundsMinMax_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetWorldTransformMatrix_Public_float4x4_OrthogonalRotation_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0;
	[FieldOffset(0)]
	public TerrainChunk Chunk;
}
