---
nav_exclude: true
search_exclude: false
---

# StaticTileWorld

```csharp
public struct StaticTileWorld
{
	static StaticTileWorld()
	{
		Il2CppClassPointerStore<StaticTileWorld>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Tiles", "StaticTileWorld");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StaticTileWorld>.NativeClassPtr);
		StaticTileWorld.NativeFieldInfoPtr_TILE_MODEL_LAYER_COUNT = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticTileWorld>.NativeClassPtr, "TILE_MODEL_LAYER_COUNT");
		StaticTileWorld.NativeFieldInfoPtr_Blob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticTileWorld>.NativeClassPtr, "Blob");
		StaticTileWorld.NativeMethodInfoPtr_GetCollisionBitMasksForTileLayer_Public_Void_TileModelLayerEnum_ChunkTileCellCoordinate_NativeList_1_GatheredLayer_NativeList_1_GatheredBitMask_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StaticTileWorld>.NativeClassPtr, 100671099);
		StaticTileWorld.NativeMethodInfoPtr_GetLineOfSightBitMasksForTileLayer_Public_Void_TileModelLayerEnum_ChunkTileCellCoordinate_NativeList_1_GatheredLayer_NativeList_1_GatheredBitMask_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StaticTileWorld>.NativeClassPtr, 100671100);
		StaticTileWorld.NativeMethodInfoPtr_GetPathfindingBitMasksForTileLayer_Public_Void_TileModelLayerEnum_ChunkTileCellCoordinate_NativeList_1_GatheredLayer_NativeList_1_GatheredBitMask_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StaticTileWorld>.NativeClassPtr, 100671101);
		StaticTileWorld.NativeMethodInfoPtr_GetBitMasksForTileLayer_Private_Void_TileModelLayerEnum_TStaticTileData_NativeList_1_GatheredLayer_NativeList_1_GatheredBitMask_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StaticTileWorld>.NativeClassPtr, 100671102);
		StaticTileWorld.NativeMethodInfoPtr_GetBitMaskIndex_Private_Void_byref_BitMaskIndex_byref_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StaticTileWorld>.NativeClassPtr, 100671103);
		StaticTileWorld.NativeMethodInfoPtr_BuildPlacementFlagCollection_Public_Void_ChunkTileCellCoordinate_Byte_byref_PlacementFlagCollection_byref_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StaticTileWorld>.NativeClassPtr, 100671104);
	}

	public unsafe void GetCollisionBitMasksForTileLayer(TileModelLayerEnum tileModelLayer, ChunkTileCellCoordinate tileCell, NativeList<GatheredLayer> gatheredLayers, NativeList<GatheredBitMask> gatheredBitMasks)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref tileModelLayer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref tileCell;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref gatheredLayers;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref gatheredBitMasks;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StaticTileWorld.NativeMethodInfoPtr_GetCollisionBitMasksForTileLayer_Public_Void_TileModelLayerEnum_ChunkTileCellCoordinate_NativeList_1_GatheredLayer_NativeList_1_GatheredBitMask_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void GetLineOfSightBitMasksForTileLayer(TileModelLayerEnum tileModelLayer, ChunkTileCellCoordinate tileCell, NativeList<GatheredLayer> gatheredLayers, NativeList<GatheredBitMask> gatheredBitMasks)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref tileModelLayer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref tileCell;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref gatheredLayers;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref gatheredBitMasks;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StaticTileWorld.NativeMethodInfoPtr_GetLineOfSightBitMasksForTileLayer_Public_Void_TileModelLayerEnum_ChunkTileCellCoordinate_NativeList_1_GatheredLayer_NativeList_1_GatheredBitMask_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void GetPathfindingBitMasksForTileLayer(TileModelLayerEnum tileModelLayer, ChunkTileCellCoordinate tileCell, NativeList<GatheredLayer> gatheredLayers, NativeList<GatheredBitMask> gatheredBitMasks)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref tileModelLayer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref tileCell;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref gatheredLayers;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref gatheredBitMasks;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StaticTileWorld.NativeMethodInfoPtr_GetPathfindingBitMasksForTileLayer_Public_Void_TileModelLayerEnum_ChunkTileCellCoordinate_NativeList_1_GatheredLayer_NativeList_1_GatheredBitMask_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void GetBitMasksForTileLayer<TStaticTileData, TTileType>(TileModelLayerEnum tileModelLayer, TStaticTileData staticCell, NativeList<GatheredLayer> gatheredLayers, NativeList<GatheredBitMask> gatheredBitMasks)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref tileModelLayer;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr;
		if (!typeof(TStaticTileData).IsValueType)
		{
			TStaticTileData tstaticTileData = staticCell;
			intPtr = ((tstaticTileData is string) ? IL2CPP.ManagedStringToIl2Cpp(tstaticTileData as string) : IL2CPP.Il2CppObjectBaseToPtr(tstaticTileData as Il2CppObjectBase));
		}
		else
		{
			intPtr = ref staticCell;
		}
		ptr2 = intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref gatheredLayers;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref gatheredBitMasks;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(StaticTileWorld.MethodInfoStoreGeneric_GetBitMasksForTileLayer_Private_Void_TileModelLayerEnum_TStaticTileData_NativeList_1_GatheredLayer_NativeList_1_GatheredBitMask_0<TStaticTileData, TTileType>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
	}

	public unsafe void GetBitMaskIndex(ref BitMaskIndex currentBitMaskIndex, ref int index)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &currentBitMaskIndex;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &index;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StaticTileWorld.NativeMethodInfoPtr_GetBitMaskIndex_Private_Void_byref_BitMaskIndex_byref_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void BuildPlacementFlagCollection(ChunkTileCellCoordinate chunkCellCoordinte, byte heightLevel, ref PlacementFlagCollection flagCollection, out bool isUnderground)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref chunkCellCoordinte;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref heightLevel;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &flagCollection;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &isUnderground;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StaticTileWorld.NativeMethodInfoPtr_BuildPlacementFlagCollection_Public_Void_ChunkTileCellCoordinate_Byte_byref_PlacementFlagCollection_byref_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StaticTileWorld>.NativeClassPtr, ref this));
	}
	public unsafe static int TILE_MODEL_LAYER_COUNT
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(StaticTileWorld.NativeFieldInfoPtr_TILE_MODEL_LAYER_COUNT, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(StaticTileWorld.NativeFieldInfoPtr_TILE_MODEL_LAYER_COUNT, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_TILE_MODEL_LAYER_COUNT;
	private static readonly IntPtr NativeFieldInfoPtr_Blob;
	private static readonly IntPtr NativeMethodInfoPtr_GetCollisionBitMasksForTileLayer_Public_Void_TileModelLayerEnum_ChunkTileCellCoordinate_NativeList_1_GatheredLayer_NativeList_1_GatheredBitMask_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetLineOfSightBitMasksForTileLayer_Public_Void_TileModelLayerEnum_ChunkTileCellCoordinate_NativeList_1_GatheredLayer_NativeList_1_GatheredBitMask_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetPathfindingBitMasksForTileLayer_Public_Void_TileModelLayerEnum_ChunkTileCellCoordinate_NativeList_1_GatheredLayer_NativeList_1_GatheredBitMask_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetBitMasksForTileLayer_Private_Void_TileModelLayerEnum_TStaticTileData_NativeList_1_GatheredLayer_NativeList_1_GatheredBitMask_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetBitMaskIndex_Private_Void_byref_BitMaskIndex_byref_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_BuildPlacementFlagCollection_Public_Void_ChunkTileCellCoordinate_Byte_byref_PlacementFlagCollection_byref_Boolean_0;

	public BlobAssetReference<StaticTileWorldBlob> Blob;
	private sealed class MethodInfoStoreGeneric_GetBitMasksForTileLayer_Private_Void_TileModelLayerEnum_TStaticTileData_NativeList_1_GatheredLayer_NativeList_1_GatheredBitMask_0<TStaticTileData, TTileType>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(StaticTileWorld.NativeMethodInfoPtr_GetBitMasksForTileLayer_Private_Void_TileModelLayerEnum_TStaticTileData_NativeList_1_GatheredLayer_NativeList_1_GatheredBitMask_0, Il2CppClassPointerStore<StaticTileWorld>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TStaticTileData>.NativeClassPtr)),
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TTileType>.NativeClassPtr))
		}))));
	}
}
```
