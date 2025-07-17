---
nav_exclude: true
search_exclude: true
---

# TerrainChunk

```csharp
public struct TerrainChunk
{
	static TerrainChunk()
	{
		Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "TerrainChunk");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr);
		TerrainChunk.NativeFieldInfoPtr_X = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, "X");
		TerrainChunk.NativeFieldInfoPtr_Y = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, "Y");
		TerrainChunk.NativeMethodInfoPtr_get_MiddleOfTheWorld_Public_Static_get_TerrainChunk_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668702);
		TerrainChunk.NativeMethodInfoPtr_get_ChunkCoordinate_Public_get_int2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668703);
		TerrainChunk.NativeMethodInfoPtr_get_WorldIndex_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668704);
		TerrainChunk.NativeMethodInfoPtr__ctor_Public_Void_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668705);
		TerrainChunk.NativeMethodInfoPtr__ctor_Public_Void_int2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668706);
		TerrainChunk.NativeMethodInfoPtr_IsValidChunkCoordinate_Public_Static_Boolean_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668707);
		TerrainChunk.NativeMethodInfoPtr_GetTileOffset_Public_int2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668708);
		TerrainChunk.NativeMethodInfoPtr_GetBlockOffset_Public_int2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668709);
		TerrainChunk.NativeMethodInfoPtr_GetWorldOffset_Public_float2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668710);
		TerrainChunk.NativeMethodInfoPtr_GetWorldCenter_Public_float2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668711);
		TerrainChunk.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668712);
		TerrainChunk.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668713);
		TerrainChunk.NativeMethodInfoPtr_IsWithinWorldLimit_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668714);
		TerrainChunk.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_int2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668715);
		TerrainChunk.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TerrainChunk_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668716);
		TerrainChunk.NativeMethodInfoPtr_FromPosition_Public_Static_TerrainChunk_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668717);
		TerrainChunk.NativeMethodInfoPtr_FromPosition_Public_Static_TerrainChunk_float2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668718);
		TerrainChunk.NativeMethodInfoPtr_FromWorldTile_Public_Static_TerrainChunk_int2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668719);
		TerrainChunk.NativeMethodInfoPtr_Unclamped_ChunkCoordinateFromWorldTile_Private_Static_int2_int2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668720);
		TerrainChunk.NativeMethodInfoPtr_TryGetFromPosition_Public_Static_Boolean_float3_byref_TerrainChunk_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668721);
		TerrainChunk.NativeMethodInfoPtr_TryGetFromPosition_Public_Static_Boolean_float2_byref_TerrainChunk_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668722);
		TerrainChunk.NativeMethodInfoPtr_TryGetFromWorldTile_Public_Static_Boolean_int2_byref_TerrainChunk_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668723);
		TerrainChunk.NativeMethodInfoPtr_GetRelativeTileCoordinate_Public_int2_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668724);
		TerrainChunk.NativeMethodInfoPtr_GetRelativeTileCoordinate_Public_int2_float2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668725);
		TerrainChunk.NativeMethodInfoPtr_GetRelativeTileCoordinate_Public_int2_float3_byref_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668726);
		TerrainChunk.NativeMethodInfoPtr_GetLocalTileCoordinate_Public_Static_int2_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668727);
		TerrainChunk.NativeMethodInfoPtr_GetLocalTileCoordinate_Public_Static_int2_float2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668728);
		TerrainChunk.NativeMethodInfoPtr_GetLocalTileCoordinateFromWorldTile_Public_Static_int2_int2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668729);
		TerrainChunk.NativeMethodInfoPtr_GetBounds_Public_BoundsMinMax_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668730);
		TerrainChunk.NativeMethodInfoPtr_GetAABB_Public_AABB_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668731);
		TerrainChunk.NativeMethodInfoPtr_ToShared_Public_TerrainChunkShared_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668732);
		TerrainChunk.NativeMethodInfoPtr_GetIntersectingChunks_Public_Static_Void_BoundsMinMax_byref_TerrainChunk_byref_int2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668733);
		TerrainChunk.NativeMethodInfoPtr_GetIntersectingChunks_Public_Static_Void_BoundsMinMax_NativeList_1_Intersection_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668734);
		TerrainChunk.NativeMethodInfoPtr_GetIntersectingChunks_Public_Static_NativeArray_1_Intersection_BoundsMinMax_Allocator_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668735);
		TerrainChunk.NativeMethodInfoPtr_GetWorldTransformMatrix_Public_float4x4_OrthogonalRotation_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668736);
		TerrainChunk.NativeMethodInfoPtr_GetWorldTransformMatrix_Public_Static_float4x4_OrthogonalRotation_float2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668737);
		TerrainChunk.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668738);
		TerrainChunk.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_TerrainChunk_TerrainChunk_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668739);
		TerrainChunk.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_TerrainChunk_TerrainChunk_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668740);
		TerrainChunk.NativeMethodInfoPtr_TryParse_Public_Static_Boolean_String_byref_TerrainChunk_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668741);
		TerrainChunk.NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_TerrainChunk_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, 100668742);
	}
	public unsafe static TerrainChunk MiddleOfTheWorld
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_get_MiddleOfTheWorld_Public_Static_get_TerrainChunk_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe int2 ChunkCoordinate
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_get_ChunkCoordinate_Public_get_int2_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe int WorldIndex
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_get_WorldIndex_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}

	public unsafe TerrainChunk(int x, int y)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref x;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref y;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr__ctor_Public_Void_Int32_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe TerrainChunk(int2 xy)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref xy;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr__ctor_Public_Void_int2_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe static bool IsValidChunkCoordinate(int x, int y)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref x;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref y;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_IsValidChunkCoordinate_Public_Static_Boolean_Int32_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe int2 GetTileOffset()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetTileOffset_Public_int2_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe int2 GetBlockOffset()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetBlockOffset_Public_int2_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float2 GetWorldOffset()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetWorldOffset_Public_float2_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float2 GetWorldCenter()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetWorldCenter_Public_float2_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool IsWithinWorldLimit()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_IsWithinWorldLimit_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool Equals(int2 other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_int2_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool Equals(TerrainChunk other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TerrainChunk_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static TerrainChunk FromPosition(float3 worldPos)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPos;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_FromPosition_Public_Static_TerrainChunk_float3_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static TerrainChunk FromPosition(float2 worldPos)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPos;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_FromPosition_Public_Static_TerrainChunk_float2_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static TerrainChunk FromWorldTile(int2 worldTile)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldTile;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_FromWorldTile_Public_Static_TerrainChunk_int2_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static int2 Unclamped_ChunkCoordinateFromWorldTile(int2 worldTile)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldTile;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_Unclamped_ChunkCoordinateFromWorldTile_Private_Static_int2_int2_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool TryGetFromPosition(float3 worldPos, out TerrainChunk chunk)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPos;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &chunk;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_TryGetFromPosition_Public_Static_Boolean_float3_byref_TerrainChunk_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool TryGetFromPosition(float2 worldPos, out TerrainChunk chunk)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPos;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &chunk;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_TryGetFromPosition_Public_Static_Boolean_float2_byref_TerrainChunk_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool TryGetFromWorldTile(int2 worldTile, out TerrainChunk chunk)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldTile;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &chunk;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_TryGetFromWorldTile_Public_Static_Boolean_int2_byref_TerrainChunk_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe int2 GetRelativeTileCoordinate(float3 worldPos)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPos;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetRelativeTileCoordinate_Public_int2_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe int2 GetRelativeTileCoordinate(float2 worldPos)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPos;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetRelativeTileCoordinate_Public_int2_float2_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe int2 GetRelativeTileCoordinate(float3 worldPos, out bool insideChunk)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPos;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &insideChunk;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetRelativeTileCoordinate_Public_int2_float3_byref_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static int2 GetLocalTileCoordinate(float3 worldPos)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPos;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetLocalTileCoordinate_Public_Static_int2_float3_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static int2 GetLocalTileCoordinate(float2 worldPos)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPos;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetLocalTileCoordinate_Public_Static_int2_float2_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static int2 GetLocalTileCoordinateFromWorldTile(int2 worldTile)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldTile;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetLocalTileCoordinateFromWorldTile_Public_Static_int2_int2_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe BoundsMinMax GetBounds()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetBounds_Public_BoundsMinMax_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe AABB GetAABB()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetAABB_Public_AABB_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe TerrainChunkShared ToShared()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_ToShared_Public_TerrainChunkShared_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static void GetIntersectingChunks(BoundsMinMax worldBounds, out TerrainChunk minChunk, out int2 chunkCount)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldBounds;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &minChunk;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &chunkCount;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetIntersectingChunks_Public_Static_Void_BoundsMinMax_byref_TerrainChunk_byref_int2_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe static void GetIntersectingChunks(BoundsMinMax worldBounds, NativeList<TerrainChunk.Intersection> intersections)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldBounds;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref intersections;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetIntersectingChunks_Public_Static_Void_BoundsMinMax_NativeList_1_Intersection_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe static NativeArray<TerrainChunk.Intersection> GetIntersectingChunks(BoundsMinMax worldBounds, Allocator allocator)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldBounds;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref allocator;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetIntersectingChunks_Public_Static_NativeArray_1_Intersection_BoundsMinMax_Allocator_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float4x4 GetWorldTransformMatrix(OrthogonalRotation rotation, bool includeWorldOffset = true)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref rotation;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref includeWorldOffset;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetWorldTransformMatrix_Public_float4x4_OrthogonalRotation_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static float4x4 GetWorldTransformMatrix(OrthogonalRotation rotation, float2 additionalWorldOffset = default(float2))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref rotation;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref additionalWorldOffset;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_GetWorldTransformMatrix_Public_Static_float4x4_OrthogonalRotation_float2_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}

	public unsafe static bool operator ==(TerrainChunk a, TerrainChunk b)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref a;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref b;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_TerrainChunk_TerrainChunk_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool operator !=(TerrainChunk a, TerrainChunk b)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref a;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref b;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_TerrainChunk_TerrainChunk_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool TryParse(string value, out TerrainChunk result)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(value);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &result;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_TryParse_Public_Static_Boolean_String_byref_TerrainChunk_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe int CompareTo(TerrainChunk other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_TerrainChunk_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_X;
	private static readonly IntPtr NativeFieldInfoPtr_Y;
	private static readonly IntPtr NativeMethodInfoPtr_get_MiddleOfTheWorld_Public_Static_get_TerrainChunk_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_ChunkCoordinate_Public_get_int2_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_WorldIndex_Public_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Int32_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_int2_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsValidChunkCoordinate_Public_Static_Boolean_Int32_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetTileOffset_Public_int2_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetBlockOffset_Public_int2_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetWorldOffset_Public_float2_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetWorldCenter_Public_float2_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsWithinWorldLimit_Public_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_int2_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TerrainChunk_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromPosition_Public_Static_TerrainChunk_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromPosition_Public_Static_TerrainChunk_float2_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromWorldTile_Public_Static_TerrainChunk_int2_0;
	private static readonly IntPtr NativeMethodInfoPtr_Unclamped_ChunkCoordinateFromWorldTile_Private_Static_int2_int2_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetFromPosition_Public_Static_Boolean_float3_byref_TerrainChunk_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetFromPosition_Public_Static_Boolean_float2_byref_TerrainChunk_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetFromWorldTile_Public_Static_Boolean_int2_byref_TerrainChunk_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetRelativeTileCoordinate_Public_int2_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetRelativeTileCoordinate_Public_int2_float2_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetRelativeTileCoordinate_Public_int2_float3_byref_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetLocalTileCoordinate_Public_Static_int2_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetLocalTileCoordinate_Public_Static_int2_float2_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetLocalTileCoordinateFromWorldTile_Public_Static_int2_int2_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetBounds_Public_BoundsMinMax_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetAABB_Public_AABB_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToShared_Public_TerrainChunkShared_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetIntersectingChunks_Public_Static_Void_BoundsMinMax_byref_TerrainChunk_byref_int2_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetIntersectingChunks_Public_Static_Void_BoundsMinMax_NativeList_1_Intersection_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetIntersectingChunks_Public_Static_NativeArray_1_Intersection_BoundsMinMax_Allocator_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetWorldTransformMatrix_Public_float4x4_OrthogonalRotation_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetWorldTransformMatrix_Public_Static_float4x4_OrthogonalRotation_float2_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_TerrainChunk_TerrainChunk_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_TerrainChunk_TerrainChunk_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryParse_Public_Static_Boolean_String_byref_TerrainChunk_0;
	private static readonly IntPtr NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_TerrainChunk_0;

	public sbyte X;

	public sbyte Y;

	public struct Intersection
	{
		static Intersection()
		{
			Il2CppClassPointerStore<TerrainChunk.Intersection>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<TerrainChunk>.NativeClassPtr, "Intersection");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainChunk.Intersection>.NativeClassPtr);
			TerrainChunk.Intersection.NativeFieldInfoPtr_TerrainChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunk.Intersection>.NativeClassPtr, "TerrainChunk");
			TerrainChunk.Intersection.NativeFieldInfoPtr_WorldBounds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunk.Intersection>.NativeClassPtr, "WorldBounds");
			TerrainChunk.Intersection.NativeMethodInfoPtr_GetChunkBounds_Public_BoundsMinMax_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunk.Intersection>.NativeClassPtr, 100668743);
		}

		public unsafe BoundsMinMax GetChunkBounds()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunk.Intersection.NativeMethodInfoPtr_GetChunkBounds_Public_BoundsMinMax_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainChunk.Intersection>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_TerrainChunk;
		private static readonly IntPtr NativeFieldInfoPtr_WorldBounds;
		private static readonly IntPtr NativeMethodInfoPtr_GetChunkBounds_Public_BoundsMinMax_0;

		public TerrainChunk TerrainChunk;

		public BoundsMinMax WorldBounds;
	}
}
```
