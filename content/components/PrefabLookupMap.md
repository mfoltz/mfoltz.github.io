---
nav_exclude: true
search_exclude: true
---

# PrefabLookupMap

```csharp
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

	public unsafe bool ContainsKey(PrefabGUID prefabGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_ContainsKey_Public_Boolean_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

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

	public unsafe int Count()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_Count_Public_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool IsConvertedOrConvertable(PrefabGUID prefabGUID)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGUID;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_IsConvertedOrConvertable_Public_Boolean_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

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

	public unsafe void LogMissingPrefab(PrefabGUID prefabGUID, PrefabLookupMap.ErrorFeedbackType feedbackType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGUID;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref feedbackType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_LogMissingPrefab_Private_Void_PrefabGUID_ErrorFeedbackType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe AssetConversionState GetConversionState(PrefabGUID prefabGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_GetConversionState_Public_AssetConversionState_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe void SetConversionState(PrefabGUID prefabGuid, AssetConversionState conversionState)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGuid;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref conversionState;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_SetConversionState_Public_Void_PrefabGUID_AssetConversionState_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe FixedString128Bytes GetFixedName(PrefabGUID prefabGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_GetFixedName_Public_FixedString128Bytes_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

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

	public unsafe string GetName(PrefabGUID prefabGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabLookupMap.NativeMethodInfoPtr_GetName_Public_String_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}

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

	public readonly NativeParallelHashMap<PrefabGUID, Entity> GuidToEntityMap;

	public readonly NativeParallelHashMap<PrefabGUID, ConvertedAssetData> AssetDataLookup;

	public NativeParallelHashMap<PrefabGUID, AssetConversionState> _ConversionStateLookup;

	public readonly NativeReference<bool> GameDataInitialized;
	public enum ErrorFeedbackType
	{
		None,
		LogWarning,
		LogError,
		Exception
	}
}
```

## Server Systems

- [BloodAltarSystem_StartTrackVBloodUnit_System_V2](/systems/server/BloodAltarSystem_StartTrackVBloodUnit_System_V2)
- [CastleRailingsSystem](/systems/server/CastleRailingsSystem)
- [ChunkObjectManager](/systems/server/ChunkObjectManager)
- [CoatingEquipSystem](/systems/server/CoatingEquipSystem)
- [DebugEventsSystem](/systems/server/DebugEventsSystem)
- [DefaultActionsSystem](/systems/server/DefaultActionsSystem)
- [DiscoverResearchSystem](/systems/server/DiscoverResearchSystem)
- [GameDataSystem](/systems/server/GameDataSystem)
- [GiveCombatPresetSystem](/systems/server/GiveCombatPresetSystem)
- [InventoryRouteTransferEventSystem](/systems/server/InventoryRouteTransferEventSystem)
- [JewelCraftingCompleteSystem](/systems/server/JewelCraftingCompleteSystem)
- [JewelCraftingStartSystem](/systems/server/JewelCraftingStartSystem)
- [ModifiablePatchingSystem](/systems/server/ModifiablePatchingSystem)
- [PlaceTileModelSystem](/systems/server/PlaceTileModelSystem)
- [RecalculateSharedInventorySystem_PersistenceLoaded](/systems/server/RecalculateSharedInventorySystem_PersistenceLoaded)
- [RemoveUserRemovableBuffEventSystem](/systems/server/RemoveUserRemovableBuffEventSystem)
- [RoomRoofUpdateSystem](/systems/server/RoomRoofUpdateSystem)
- [ServantMissionActionSystem](/systems/server/ServantMissionActionSystem)
- [SpawnCastleHeartSystem](/systems/server/SpawnCastleHeartSystem)
- [StablesSystem_ClientEvents](/systems/server/StablesSystem_ClientEvents)
- [StartCraftingSystem](/systems/server/StartCraftingSystem)
- [ToggleRefiningRecipeSystem](/systems/server/ToggleRefiningRecipeSystem)
- [TraderPurchaseSystem](/systems/server/TraderPurchaseSystem)
- [UnitSpawnerUpdateSystem](/systems/server/UnitSpawnerUpdateSystem)
- [UnlockResearchSystem](/systems/server/UnlockResearchSystem)
- [UpdateCharacterCraftingSystem](/systems/server/UpdateCharacterCraftingSystem)
- [UpdateCraftingSystem](/systems/server/UpdateCraftingSystem)
- [UpdateMicroPOIManagerSystem](/systems/server/UpdateMicroPOIManagerSystem)
- [UseConsumableSystem](/systems/server/UseConsumableSystem)

## Client Systems

- [AbilityDetailsMapper](/systems/client/AbilityDetailsMapper)
- [AimPreviewGeneralSystem](/systems/client/AimPreviewGeneralSystem)
- [AimPreviewTravelBuffSystem](/systems/client/AimPreviewTravelBuffSystem)
- [BloodMixerSubMenuMapper](/systems/client/BloodMixerSubMenuMapper)
- [BuildInventoryItemMenuMapper](/systems/client/BuildInventoryItemMenuMapper)
- [CastleHeartRebuildSubMenuMapper](/systems/client/CastleHeartRebuildSubMenuMapper)
- [CastleRailingsSystem](/systems/client/CastleRailingsSystem)
- [ClientSequencerConsoleCommandSystem](/systems/client/ClientSequencerConsoleCommandSystem)
- [CritterSystem](/systems/client/CritterSystem)
- [GameDataSystem](/systems/client/GameDataSystem)
- [HybridEquipmentSystem](/systems/client/HybridEquipmentSystem)
- [InventoryRouteTransferCompletedSystem](/systems/client/InventoryRouteTransferCompletedSystem)
- [PreviewPlacementBuffSequenceSystem](/systems/client/PreviewPlacementBuffSequenceSystem)
- [RagdollifySystem_Spawn](/systems/client/RagdollifySystem_Spawn)
- [ScrollingCombatTextParentBinderSystem](/systems/client/ScrollingCombatTextParentBinderSystem)
- [SpawnAimPreviewProjectileSystem](/systems/client/SpawnAimPreviewProjectileSystem)
- [SpawnAimPreviewTargetAoeSystem](/systems/client/SpawnAimPreviewTargetAoeSystem)
- [StablesSubMenuMapper](/systems/client/StablesSubMenuMapper)
- [VbloodGhostBuffSystem_Client_Base](/systems/client/VbloodGhostBuffSystem_Client_Base)
- [VbloodGhostBuffSystem_Client_Spawn](/systems/client/VbloodGhostBuffSystem_Client_Spawn)
- [VbloodGhostBuffSystem_Client_Update](/systems/client/VbloodGhostBuffSystem_Client_Update)
