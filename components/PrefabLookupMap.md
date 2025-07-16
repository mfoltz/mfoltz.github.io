# PrefabLookupMap

```csharp
[StructLayout(2)]
public struct PrefabLookupMap
{
	static PrefabLookupMap()
	{
		Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr = IL2CPP.GetIl2CppClass("Stunlock.Core.dll", "Stunlock.Core", "PrefabLookupMap");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr);
		PrefabLookupMap.NativeFieldInfoPtr_GuidToEntityMap = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, "GuidToEntityMap");
		PrefabLookupMap.NativeFieldInfoPtr_AssetDataLookup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, "AssetDataLookup");
		PrefabLookupMap.NativeFieldInfoPtr__ConversionStateLookup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, "_ConversionStateLookup");
		PrefabLookupMap.NativeFieldInfoPtr_GameDataInitialized = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, "GameDataInitialized");
		PrefabLookupMap.NativeMethodInfoPtr__ctor_Public_Void_NativeParallelHashMap_2_PrefabGUID_Entity_NativeParallelHashMap_2_PrefabGUID_ConvertedAssetData_NativeParallelHashMap_2_PrefabGUID_AssetConversionState_NativeReference_1_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663866);
		PrefabLookupMap.NativeMethodInfoPtr_get_IsCreated_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663867);
		PrefabLookupMap.NativeMethodInfoPtr_get_Item_Public_get_Entity_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663868);
		PrefabLookupMap.NativeMethodInfoPtr_GetValueOrDefault_Public_Entity_PrefabGUID_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663869);
		PrefabLookupMap.NativeMethodInfoPtr_GetValueOrDefaultWithoutLogging_Public_Entity_PrefabGUID_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663870);
		PrefabLookupMap.NativeMethodInfoPtr_LogIfValidButNotConvertedPrefab_Public_Void_PrefabGUID_ErrorFeedbackType_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663871);
		PrefabLookupMap.NativeMethodInfoPtr_ContainsKey_Public_Boolean_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663872);
		PrefabLookupMap.NativeMethodInfoPtr_TryGetValue_Public_Boolean_PrefabGUID_byref_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663873);
		PrefabLookupMap.NativeMethodInfoPtr_TryGetValueWithoutLogging_Public_Boolean_PrefabGUID_byref_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663874);
		PrefabLookupMap.NativeMethodInfoPtr_Count_Public_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663875);
		PrefabLookupMap.NativeMethodInfoPtr_IsConvertedOrConvertable_Public_Boolean_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663876);
		PrefabLookupMap.NativeMethodInfoPtr_CheckConvertableOnDemand_Public_Boolean_PrefabGUID_Boolean_Boolean_byref_AssetGuid_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663877);
		PrefabLookupMap.NativeMethodInfoPtr_TryGetConvertedPrefab_Private_Boolean_PrefabGUID_ErrorFeedbackType_Boolean_byref_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663878);
		PrefabLookupMap.NativeMethodInfoPtr_LogMissingPrefab_Private_Void_PrefabGUID_ErrorFeedbackType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663879);
		PrefabLookupMap.NativeMethodInfoPtr_GetConversionState_Public_AssetConversionState_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663880);
		PrefabLookupMap.NativeMethodInfoPtr_SetConversionState_Public_Void_PrefabGUID_AssetConversionState_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663881);
		PrefabLookupMap.NativeMethodInfoPtr_GetFixedName_Public_FixedString128Bytes_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663882);
		PrefabLookupMap.NativeMethodInfoPtr_TryGetFixedName_Public_Boolean_PrefabGUID_byref_FixedString128Bytes_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663883);
		PrefabLookupMap.NativeMethodInfoPtr_TryGetName_Public_Boolean_PrefabGUID_byref_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663884);
		PrefabLookupMap.NativeMethodInfoPtr_GetName_Public_String_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663885);
		PrefabLookupMap.NativeMethodInfoPtr_NameMatches_Private_Boolean_byref_FixedString128Bytes_String_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663886);
		PrefabLookupMap.NativeMethodInfoPtr_TryGetPrefabGuidWithName_Public_Boolean_String_byref_PrefabGUID_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, 100663887);
	}
	[CallerCount(0)]
	public unsafe PrefabLookupMap(NativeParallelHashMap<PrefabGUID, Entity> guidToEntityMap, NativeParallelHashMap<PrefabGUID, ConvertedAssetData> assetDataLookup, NativeParallelHashMap<PrefabGUID, AssetConversionState> conversionStateLookup, NativeReference<bool> gameDataInitialized)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref guidToEntityMap;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref assetDataLookup;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref conversionStateLookup;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref gameDataInitialized;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr__ctor_Public_Void_NativeParallelHashMap_2_PrefabGUID_Entity_NativeParallelHashMap_2_PrefabGUID_ConvertedAssetData_NativeParallelHashMap_2_PrefabGUID_AssetConversionState_NativeReference_1_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public unsafe bool IsCreated
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2235332, XrefRangeEnd = 2235335, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_get_IsCreated_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe Entity this[PrefabGUID prefabGuid]
	{
		[CallerCount(180)]
		[CachedScanResults(RefRangeStart = 2235341, RefRangeEnd = 2235521, XrefRangeStart = 2235335, XrefRangeEnd = 2235341, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref prefabGuid;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_get_Item_Public_get_Entity_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2235521, XrefRangeEnd = 2235522, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe Entity GetValueOrDefault(PrefabGUID prefabGuid, Entity defaultValue = default(Entity))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGuid;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref defaultValue;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_GetValueOrDefault_Public_Entity_PrefabGUID_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2235522, XrefRangeEnd = 2235523, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe Entity GetValueOrDefaultWithoutLogging(PrefabGUID prefabGuid, Entity defaultValue = default(Entity))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGuid;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref defaultValue;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_GetValueOrDefaultWithoutLogging_Public_Entity_PrefabGUID_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(196)]
	[CachedScanResults(RefRangeStart = 2235532, RefRangeEnd = 2235728, XrefRangeStart = 2235523, XrefRangeEnd = 2235532, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void LogIfValidButNotConvertedPrefab(PrefabGUID prefabGuid, PrefabLookupMap.ErrorFeedbackType feedbackType, bool emptyIsError)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGuid;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref feedbackType;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref emptyIsError;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_LogIfValidButNotConvertedPrefab_Public_Void_PrefabGUID_ErrorFeedbackType_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2235728, XrefRangeEnd = 2235732, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool ContainsKey(PrefabGUID prefabGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_ContainsKey_Public_Boolean_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2235732, XrefRangeEnd = 2235733, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetValue(PrefabGUID prefabGuid, out Entity prefab)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGuid;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &prefab;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_TryGetValue_Public_Boolean_PrefabGUID_byref_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2235733, XrefRangeEnd = 2235734, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetValueWithoutLogging(PrefabGUID prefabGuid, out Entity prefab)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGuid;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &prefab;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_TryGetValueWithoutLogging_Public_Boolean_PrefabGUID_byref_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2235734, XrefRangeEnd = 2235738, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe int Count()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_Count_Public_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2235738, XrefRangeEnd = 2235742, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool IsConvertedOrConvertable(PrefabGUID prefabGUID)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGUID;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_IsConvertedOrConvertable_Public_Boolean_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2235742, XrefRangeEnd = 2235774, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CheckConvertableOnDemand(PrefabGUID prefabGUID, bool forSynchronousConvert, bool logErrorOnFailure, out AssetGuid assetGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGUID;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref forSynchronousConvert;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref logErrorOnFailure;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &assetGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_CheckConvertableOnDemand_Public_Boolean_PrefabGUID_Boolean_Boolean_byref_AssetGuid_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(664)]
	[CachedScanResults(RefRangeStart = 2235781, RefRangeEnd = 2236445, XrefRangeStart = 2235774, XrefRangeEnd = 2235781, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetConvertedPrefab(PrefabGUID prefabGUID, PrefabLookupMap.ErrorFeedbackType feedbackType, bool emptyIsError, out Entity prefab)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGUID;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref feedbackType;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref emptyIsError;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &prefab;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_TryGetConvertedPrefab_Private_Boolean_PrefabGUID_ErrorFeedbackType_Boolean_byref_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(88)]
	[CachedScanResults(RefRangeStart = 2236558, RefRangeEnd = 2236646, XrefRangeStart = 2236445, XrefRangeEnd = 2236558, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void LogMissingPrefab(PrefabGUID prefabGUID, PrefabLookupMap.ErrorFeedbackType feedbackType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGUID;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref feedbackType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_LogMissingPrefab_Private_Void_PrefabGUID_ErrorFeedbackType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(4)]
	[CachedScanResults(RefRangeStart = 2236651, RefRangeEnd = 2236655, XrefRangeStart = 2236646, XrefRangeEnd = 2236651, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe AssetConversionState GetConversionState(PrefabGUID prefabGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_GetConversionState_Public_AssetConversionState_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2236655, XrefRangeEnd = 2236657, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetConversionState(PrefabGUID prefabGuid, AssetConversionState conversionState)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGuid;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref conversionState;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_SetConversionState_Public_Void_PrefabGUID_AssetConversionState_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 2236667, RefRangeEnd = 2236670, XrefRangeStart = 2236657, XrefRangeEnd = 2236667, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe FixedString128Bytes GetFixedName(PrefabGUID prefabGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_GetFixedName_Public_FixedString128Bytes_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(4)]
	[CachedScanResults(RefRangeStart = 2236675, RefRangeEnd = 2236679, XrefRangeStart = 2236670, XrefRangeEnd = 2236675, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetFixedName(PrefabGUID prefabGuid, out FixedString128Bytes name)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGuid;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &name;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_TryGetFixedName_Public_Boolean_PrefabGUID_byref_FixedString128Bytes_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(7)]
	[CachedScanResults(RefRangeStart = 2236680, RefRangeEnd = 2236687, XrefRangeStart = 2236679, XrefRangeEnd = 2236680, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetName(PrefabGUID prefabGuid, out string name)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGuid;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = 0;
		ptr2 = &intPtr;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_TryGetName_Public_Boolean_PrefabGUID_byref_String_0, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		name = IL2CPP.Il2CppStringToManaged(intPtr);
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2236687, XrefRangeEnd = 2236688, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe string GetName(PrefabGUID prefabGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_GetName_Public_String_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 2236699, RefRangeEnd = 2236700, XrefRangeStart = 2236688, XrefRangeEnd = 2236699, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool NameMatches([In] ref FixedString128Bytes a, string b, bool ignoreCase)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &a;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.ManagedStringToIl2Cpp(b);
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref ignoreCase;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_NameMatches_Private_Boolean_byref_FixedString128Bytes_String_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(25)]
	[CachedScanResults(RefRangeStart = 2236717, RefRangeEnd = 2236742, XrefRangeStart = 2236700, XrefRangeEnd = 2236717, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetPrefabGuidWithName(string name, out PrefabGUID prefabGuid, bool ignoreCase = false)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(name);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &prefabGuid;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref ignoreCase;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_TryGetPrefabGuidWithName_Public_Boolean_String_byref_PrefabGUID_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PrefabLookupMap>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GuidToEntityMap;
	private static readonly IntPtr NativeFieldInfoPtr_AssetDataLookup;
	private static readonly IntPtr NativeFieldInfoPtr__ConversionStateLookup;
	private static readonly IntPtr NativeFieldInfoPtr_GameDataInitialized;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_NativeParallelHashMap_2_PrefabGUID_Entity_NativeParallelHashMap_2_PrefabGUID_ConvertedAssetData_NativeParallelHashMap_2_PrefabGUID_AssetConversionState_NativeReference_1_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsCreated_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Item_Public_get_Entity_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetValueOrDefault_Public_Entity_PrefabGUID_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetValueOrDefaultWithoutLogging_Public_Entity_PrefabGUID_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_LogIfValidButNotConvertedPrefab_Public_Void_PrefabGUID_ErrorFeedbackType_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_ContainsKey_Public_Boolean_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetValue_Public_Boolean_PrefabGUID_byref_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetValueWithoutLogging_Public_Boolean_PrefabGUID_byref_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_Count_Public_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsConvertedOrConvertable_Public_Boolean_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_CheckConvertableOnDemand_Public_Boolean_PrefabGUID_Boolean_Boolean_byref_AssetGuid_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetConvertedPrefab_Private_Boolean_PrefabGUID_ErrorFeedbackType_Boolean_byref_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_LogMissingPrefab_Private_Void_PrefabGUID_ErrorFeedbackType_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetConversionState_Public_AssetConversionState_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetConversionState_Public_Void_PrefabGUID_AssetConversionState_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetFixedName_Public_FixedString128Bytes_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetFixedName_Public_Boolean_PrefabGUID_byref_FixedString128Bytes_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetName_Public_Boolean_PrefabGUID_byref_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetName_Public_String_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_NameMatches_Private_Boolean_byref_FixedString128Bytes_String_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetPrefabGuidWithName_Public_Boolean_String_byref_PrefabGUID_Boolean_0;
	[FieldOffset(0)]
	public readonly NativeParallelHashMap<PrefabGUID, Entity> GuidToEntityMap;
	[FieldOffset(16)]
	public readonly NativeParallelHashMap<PrefabGUID, ConvertedAssetData> AssetDataLookup;
	[FieldOffset(32)]
	public NativeParallelHashMap<PrefabGUID, AssetConversionState> _ConversionStateLookup;
	[FieldOffset(48)]
	public readonly NativeReference<bool> GameDataInitialized;
	public enum ErrorFeedbackType
	{
		None,
		LogWarning,
		LogError,
		Exception
	}
}
