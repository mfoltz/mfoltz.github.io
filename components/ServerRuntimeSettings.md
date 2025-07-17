---
nav_exclude: true
search_exclude: true
---

# ServerRuntimeSettings

```csharp
[StructLayout(2)]
public struct ServerRuntimeSettings
{
	static ServerRuntimeSettings()
	{
		Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ServerRuntimeSettings");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr);
		ServerRuntimeSettings.NativeFieldInfoPtr_ConversionMethod = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "ConversionMethod");
		ServerRuntimeSettings.NativeFieldInfoPtr_SaveDirectoryPath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "SaveDirectoryPath");
		ServerRuntimeSettings.NativeFieldInfoPtr_SaveToLoad = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "SaveToLoad");
		ServerRuntimeSettings.NativeFieldInfoPtr_AutoSaveIntervalSeconds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "AutoSaveIntervalSeconds");
		ServerRuntimeSettings.NativeFieldInfoPtr_AutoSaveIntervalVarianceSeconds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "AutoSaveIntervalVarianceSeconds");
		ServerRuntimeSettings.NativeFieldInfoPtr_AutoSaveCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "AutoSaveCount");
		ServerRuntimeSettings.NativeFieldInfoPtr_StartupState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "StartupState");
		ServerRuntimeSettings.NativeFieldInfoPtr_FirstTimeSpawnSetting = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "FirstTimeSpawnSetting");
		ServerRuntimeSettings.NativeFieldInfoPtr_MaxConnectedUsers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "MaxConnectedUsers");
		ServerRuntimeSettings.NativeFieldInfoPtr_MaxConnectedAdmins = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "MaxConnectedAdmins");
		ServerRuntimeSettings.NativeFieldInfoPtr_PersistenceDebugFlags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "PersistenceDebugFlags");
		ServerRuntimeSettings.NativeFieldInfoPtr_AutoSave = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "AutoSave");
		ServerRuntimeSettings.NativeFieldInfoPtr_SaveOnExit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "SaveOnExit");
		ServerRuntimeSettings.NativeFieldInfoPtr_KeepAliveOnError = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "KeepAliveOnError");
		ServerRuntimeSettings.NativeFieldInfoPtr_HostLAN = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "HostLAN");
		ServerRuntimeSettings.NativeFieldInfoPtr_CompressSaveFiles = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "CompressSaveFiles");
		ServerRuntimeSettings.NativeFieldInfoPtr_AllowDebugEvents = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "AllowDebugEvents");
		ServerRuntimeSettings.NativeFieldInfoPtr_AdminOnlyDebugEvents = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "AdminOnlyDebugEvents");
		ServerRuntimeSettings.NativeFieldInfoPtr_EnableDangerousDebugEvents = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "EnableDangerousDebugEvents");
		ServerRuntimeSettings.NativeFieldInfoPtr_EveryoneIsAdmin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "EveryoneIsAdmin");
		ServerRuntimeSettings.NativeMethodInfoPtr_ShouldSave_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, 100665486);
		ServerRuntimeSettings.NativeMethodInfoPtr_HadLoadFile_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, 100665487);
		ServerRuntimeSettings.NativeMethodInfoPtr_GetSaveFilesInSaveDirectory_Public_Static_Il2CppReferenceArray_1_Save_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, 100665488);
		ServerRuntimeSettings.NativeMethodInfoPtr_GetServersWithSaves_Public_Static_List_1_SaveFileData_UInt64_Nullable_Unboxed_1_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, 100665489);
		ServerRuntimeSettings.NativeMethodInfoPtr__GetServersWithSaves_Public_Static_List_1_SaveFileData_UInt64_Nullable_Unboxed_1_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, 100665490);
		ServerRuntimeSettings.NativeMethodInfoPtr_GetSaveFiles_Private_Static_List_1_SaveFileData_UInt64_String_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, 100665491);
		ServerRuntimeSettings.NativeMethodInfoPtr_GetCombinedFullSavePath_Public_Static_String_String_UInt64_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, 100665492);
		ServerRuntimeSettings.NativeMethodInfoPtr_GetCombinedFullSavePath_Public_Static_String_String_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, 100665493);
		ServerRuntimeSettings.NativeMethodInfoPtr_TryFindMostRecentSave_Public_Static_Boolean_String_byref_Save_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, 100665494);
		ServerRuntimeSettings.NativeMethodInfoPtr_TryGetSaveFiles_Public_Static_Boolean_String_List_1_Save_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, 100665495);
		ServerRuntimeSettings.NativeMethodInfoPtr_TryFindMostRecentAutoSave_Public_Static_Boolean_String_byref_Int32_byref_Save_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, 100665496);
		ServerRuntimeSettings.NativeMethodInfoPtr_GetStandardSaveRoot_Public_Static_String_UInt64_Nullable_Unboxed_1_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, 100665497);
		ServerRuntimeSettings.NativeMethodInfoPtr_IterateAllSaves_Private_Static_IEnumerable_1_Save_String_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, 100665498);
		ServerRuntimeSettings.NativeMethodInfoPtr_CountsAsSaveFile_Private_Static_Boolean_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, 100665499);
		ServerRuntimeSettings.NativeMethodInfoPtr_DeleteSave_Public_Static_Void_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, 100665500);
		ServerRuntimeSettings.NativeMethodInfoPtr_CleanupAutoSaves_Public_Static_Void_String_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, 100665501);
		ServerRuntimeSettings.NativeMethodInfoPtr_DeleteOldSaves_Private_Static_Void_String_SaveCleanupData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, 100665502);
	}
	[CallerCount(0)]
	public unsafe bool ShouldSave()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.NativeMethodInfoPtr_ShouldSave_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1072501, XrefRangeEnd = 1072502, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool HadLoadFile()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.NativeMethodInfoPtr_HadLoadFile_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1072502, XrefRangeEnd = 1072512, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static Il2CppReferenceArray<ServerRuntimeSettings.Save> GetSaveFilesInSaveDirectory(string serverSavePath)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(serverSavePath);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.NativeMethodInfoPtr_GetSaveFilesInSaveDirectory_Public_Static_Il2CppReferenceArray_1_Save_String_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		IntPtr intPtr3 = intPtr;
		return (intPtr3 != 0) ? Il2CppObjectPool.Get<Il2CppReferenceArray<ServerRuntimeSettings.Save>>(intPtr3) : null;
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1072525, RefRangeEnd = 1072527, XrefRangeStart = 1072512, XrefRangeEnd = 1072525, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static List<SaveFileData> GetServersWithSaves(ulong platformId, Nullable_Unboxed<int> additionalPersistanceVersion)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref platformId;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref additionalPersistanceVersion;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.NativeMethodInfoPtr_GetServersWithSaves_Public_Static_List_1_SaveFileData_UInt64_Nullable_Unboxed_1_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		IntPtr intPtr3 = intPtr;
		return (intPtr3 != 0) ? Il2CppObjectPool.Get<List<SaveFileData>>(intPtr3) : null;
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1072549, RefRangeEnd = 1072551, XrefRangeStart = 1072527, XrefRangeEnd = 1072549, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static List<SaveFileData> _GetServersWithSaves(ulong platformId, Nullable_Unboxed<int> additionalPersistanceVersion)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref platformId;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref additionalPersistanceVersion;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.NativeMethodInfoPtr__GetServersWithSaves_Public_Static_List_1_SaveFileData_UInt64_Nullable_Unboxed_1_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		IntPtr intPtr3 = intPtr;
		return (intPtr3 != 0) ? Il2CppObjectPool.Get<List<SaveFileData>>(intPtr3) : null;
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1072662, RefRangeEnd = 1072664, XrefRangeStart = 1072551, XrefRangeEnd = 1072662, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static List<SaveFileData> GetSaveFiles(ulong platformId, string saveRoot, int persistanceVersion)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref platformId;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.ManagedStringToIl2Cpp(saveRoot);
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref persistanceVersion;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.NativeMethodInfoPtr_GetSaveFiles_Private_Static_List_1_SaveFileData_UInt64_String_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		IntPtr intPtr3 = intPtr;
		return (intPtr3 != 0) ? Il2CppObjectPool.Get<List<SaveFileData>>(intPtr3) : null;
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 1072669, RefRangeEnd = 1072672, XrefRangeStart = 1072664, XrefRangeEnd = 1072669, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static string GetCombinedFullSavePath(string saveName, ulong platformId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(saveName);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref platformId;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.NativeMethodInfoPtr_GetCombinedFullSavePath_Public_Static_String_String_UInt64_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1072676, RefRangeEnd = 1072677, XrefRangeStart = 1072672, XrefRangeEnd = 1072676, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static string GetCombinedFullSavePath(string saveDirectoryPath, string saveName)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(saveDirectoryPath);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.ManagedStringToIl2Cpp(saveName);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.NativeMethodInfoPtr_GetCombinedFullSavePath_Public_Static_String_String_String_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1072718, RefRangeEnd = 1072719, XrefRangeStart = 1072677, XrefRangeEnd = 1072718, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool TryFindMostRecentSave(string saveDirectoryPath, out ServerRuntimeSettings.Save mostRecentSave)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(saveDirectoryPath);
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = 0;
		ptr2 = &intPtr;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.NativeMethodInfoPtr_TryFindMostRecentSave_Public_Static_Boolean_String_byref_Save_0, 0, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		mostRecentSave = ((intPtr4 == 0) ? null : new ServerRuntimeSettings.Save(intPtr4));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1072754, RefRangeEnd = 1072755, XrefRangeStart = 1072719, XrefRangeEnd = 1072754, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool TryGetSaveFiles(string saveDirectoryPath, List<ServerRuntimeSettings.Save> saves)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(saveDirectoryPath);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.Il2CppObjectBaseToPtr(saves);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.NativeMethodInfoPtr_TryGetSaveFiles_Public_Static_Boolean_String_List_1_Save_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1072788, RefRangeEnd = 1072789, XrefRangeStart = 1072755, XrefRangeEnd = 1072788, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool TryFindMostRecentAutoSave(string saveDirectoryPath, out int autoSaveIndex, out ServerRuntimeSettings.Save autoSaveData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(saveDirectoryPath);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &autoSaveIndex;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = 0;
		ptr2 = &intPtr;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.NativeMethodInfoPtr_TryFindMostRecentAutoSave_Public_Static_Boolean_String_byref_Int32_byref_Save_0, 0, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		autoSaveData = ((intPtr4 == 0) ? null : new ServerRuntimeSettings.Save(intPtr4));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(7)]
	[CachedScanResults(RefRangeStart = 1072868, RefRangeEnd = 1072875, XrefRangeStart = 1072789, XrefRangeEnd = 1072868, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static string GetStandardSaveRoot(ulong platformId, Nullable_Unboxed<int> persistanceVersionOverride = default(Nullable_Unboxed<int>))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref platformId;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref persistanceVersionOverride;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.NativeMethodInfoPtr_GetStandardSaveRoot_Public_Static_String_UInt64_Nullable_Unboxed_1_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(6)]
	[CachedScanResults(RefRangeStart = 1072879, RefRangeEnd = 1072885, XrefRangeStart = 1072875, XrefRangeEnd = 1072879, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static IEnumerable<ServerRuntimeSettings.Save> IterateAllSaves(string saveDirectoryPath, string searchPattern)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(saveDirectoryPath);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.ManagedStringToIl2Cpp(searchPattern);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.NativeMethodInfoPtr_IterateAllSaves_Private_Static_IEnumerable_1_Save_String_String_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		IntPtr intPtr3 = intPtr;
		return (intPtr3 != 0) ? Il2CppObjectPool.Get<IEnumerable<ServerRuntimeSettings.Save>>(intPtr3) : null;
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1072885, XrefRangeEnd = 1072893, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool CountsAsSaveFile(string saveInstancePath)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(saveInstancePath);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.NativeMethodInfoPtr_CountsAsSaveFile_Private_Static_Boolean_String_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1072893, XrefRangeEnd = 1072898, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void DeleteSave(string savePath)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(savePath);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.NativeMethodInfoPtr_DeleteSave_Public_Static_Void_String_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1072986, RefRangeEnd = 1072987, XrefRangeStart = 1072898, XrefRangeEnd = 1072986, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void CleanupAutoSaves(string saveDirectoryPath, int autoSaveCount)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(saveDirectoryPath);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref autoSaveCount;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.NativeMethodInfoPtr_CleanupAutoSaves_Public_Static_Void_String_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1073070, RefRangeEnd = 1073071, XrefRangeStart = 1072987, XrefRangeEnd = 1073070, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void DeleteOldSaves(string saveDirectoryPath, SaveCleanupData cleanupData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(saveDirectoryPath);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref cleanupData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.NativeMethodInfoPtr_DeleteOldSaves_Private_Static_Void_String_SaveCleanupData_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ConversionMethod;
	private static readonly IntPtr NativeFieldInfoPtr_SaveDirectoryPath;
	private static readonly IntPtr NativeFieldInfoPtr_SaveToLoad;
	private static readonly IntPtr NativeFieldInfoPtr_AutoSaveIntervalSeconds;
	private static readonly IntPtr NativeFieldInfoPtr_AutoSaveIntervalVarianceSeconds;
	private static readonly IntPtr NativeFieldInfoPtr_AutoSaveCount;
	private static readonly IntPtr NativeFieldInfoPtr_StartupState;
	private static readonly IntPtr NativeFieldInfoPtr_FirstTimeSpawnSetting;
	private static readonly IntPtr NativeFieldInfoPtr_MaxConnectedUsers;
	private static readonly IntPtr NativeFieldInfoPtr_MaxConnectedAdmins;
	private static readonly IntPtr NativeFieldInfoPtr_PersistenceDebugFlags;
	private static readonly IntPtr NativeFieldInfoPtr_AutoSave;
	private static readonly IntPtr NativeFieldInfoPtr_SaveOnExit;
	private static readonly IntPtr NativeFieldInfoPtr_KeepAliveOnError;
	private static readonly IntPtr NativeFieldInfoPtr_HostLAN;
	private static readonly IntPtr NativeFieldInfoPtr_CompressSaveFiles;
	private static readonly IntPtr NativeFieldInfoPtr_AllowDebugEvents;
	private static readonly IntPtr NativeFieldInfoPtr_AdminOnlyDebugEvents;
	private static readonly IntPtr NativeFieldInfoPtr_EnableDangerousDebugEvents;
	private static readonly IntPtr NativeFieldInfoPtr_EveryoneIsAdmin;
	private static readonly IntPtr NativeMethodInfoPtr_ShouldSave_Public_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_HadLoadFile_Public_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetSaveFilesInSaveDirectory_Public_Static_Il2CppReferenceArray_1_Save_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetServersWithSaves_Public_Static_List_1_SaveFileData_UInt64_Nullable_Unboxed_1_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr__GetServersWithSaves_Public_Static_List_1_SaveFileData_UInt64_Nullable_Unboxed_1_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetSaveFiles_Private_Static_List_1_SaveFileData_UInt64_String_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetCombinedFullSavePath_Public_Static_String_String_UInt64_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetCombinedFullSavePath_Public_Static_String_String_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryFindMostRecentSave_Public_Static_Boolean_String_byref_Save_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetSaveFiles_Public_Static_Boolean_String_List_1_Save_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryFindMostRecentAutoSave_Public_Static_Boolean_String_byref_Int32_byref_Save_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetStandardSaveRoot_Public_Static_String_UInt64_Nullable_Unboxed_1_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_IterateAllSaves_Private_Static_IEnumerable_1_Save_String_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_CountsAsSaveFile_Private_Static_Boolean_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_DeleteSave_Public_Static_Void_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_CleanupAutoSaves_Public_Static_Void_String_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_DeleteOldSaves_Private_Static_Void_String_SaveCleanupData_0;
	[FieldOffset(0)]
	public PrefabConversionMethod ConversionMethod;
	[FieldOffset(4)]
	public FixedString512Bytes SaveDirectoryPath;
	[FieldOffset(516)]
	public Nullable_Unboxed<FixedString512Bytes> SaveToLoad;
	[FieldOffset(1032)]
	public float AutoSaveIntervalSeconds;
	[FieldOffset(1036)]
	public float AutoSaveIntervalVarianceSeconds;
	[FieldOffset(1040)]
	public int AutoSaveCount;
	[FieldOffset(1044)]
	public ServerStartupState StartupState;
	[FieldOffset(1052)]
	public FirstTimeSpawnServerSetting FirstTimeSpawnSetting;
	[FieldOffset(1056)]
	public int MaxConnectedUsers;
	[FieldOffset(1060)]
	public int MaxConnectedAdmins;
	[FieldOffset(1064)]
	public PersistenceDebugFlags PersistenceDebugFlags;
	[FieldOffset(1065)]
	[MarshalAs(4)]
	public bool AutoSave;
	[FieldOffset(1066)]
	[MarshalAs(4)]
	public bool SaveOnExit;
	[FieldOffset(1067)]
	[MarshalAs(4)]
	public bool KeepAliveOnError;
	[FieldOffset(1068)]
	[MarshalAs(4)]
	public bool HostLAN;
	[FieldOffset(1069)]
	[MarshalAs(4)]
	public bool CompressSaveFiles;
	[FieldOffset(1070)]
	[MarshalAs(4)]
	public bool AllowDebugEvents;
	[FieldOffset(1071)]
	[MarshalAs(4)]
	public bool AdminOnlyDebugEvents;
	[FieldOffset(1072)]
	[MarshalAs(4)]
	public bool EnableDangerousDebugEvents;
	[FieldOffset(1073)]
	[MarshalAs(4)]
	public bool EveryoneIsAdmin;
	public sealed class Save : ValueType
	{
		static Save()
		{
			Il2CppClassPointerStore<ServerRuntimeSettings.Save>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "Save");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServerRuntimeSettings.Save>.NativeClassPtr);
			ServerRuntimeSettings.Save.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings.Save>.NativeClassPtr, "Type");
			ServerRuntimeSettings.Save.NativeFieldInfoPtr_FullPath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings.Save>.NativeClassPtr, "FullPath");
			ServerRuntimeSettings.Save.NativeFieldInfoPtr_SaveName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings.Save>.NativeClassPtr, "SaveName");
			ServerRuntimeSettings.Save.NativeFieldInfoPtr_LastWriteTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings.Save>.NativeClassPtr, "LastWriteTime");
			ServerRuntimeSettings.Save.NativeMethodInfoPtr_TryGetAutoSaveIndex_Public_Boolean_byref_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings.Save>.NativeClassPtr, 100665503);
			ServerRuntimeSettings.Save.NativeMethodInfoPtr_TryGetAutoSaveIndex_Public_Static_Boolean_String_byref_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings.Save>.NativeClassPtr, 100665504);
			ServerRuntimeSettings.Save.NativeMethodInfoPtr_AgeInSeconds_Public_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings.Save>.NativeClassPtr, 100665505);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1072406, XrefRangeEnd = 1072407, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe bool TryGetAutoSaveIndex(out int autoSaveIndex)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &autoSaveIndex;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.Save.NativeMethodInfoPtr_TryGetAutoSaveIndex_Public_Boolean_byref_Int32_0, IL2CPP.il2cpp_object_unbox(IL2CPP.Il2CppObjectBaseToPtrNotNull(this)), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(3)]
		[CachedScanResults(RefRangeStart = 1072424, RefRangeEnd = 1072427, XrefRangeStart = 1072407, XrefRangeEnd = 1072424, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe static bool TryGetAutoSaveIndex(string fileName, out int autoSaveIndex)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
			*ptr = IL2CPP.ManagedStringToIl2Cpp(fileName);
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &autoSaveIndex;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.Save.NativeMethodInfoPtr_TryGetAutoSaveIndex_Public_Static_Boolean_String_byref_Int32_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1072427, XrefRangeEnd = 1072435, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe int AgeInSeconds()
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.Save.NativeMethodInfoPtr_AgeInSeconds_Public_Int32_0, IL2CPP.il2cpp_object_unbox(IL2CPP.Il2CppObjectBaseToPtrNotNull(this)), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public Save(IntPtr pointer) : base(pointer)
		{
		}
		public Save() : base(IL2CPP.il2cpp_object_new(Il2CppClassPointerStore<ServerRuntimeSettings.Save>.NativeClassPtr))
		{
		}
		public unsafe ServerRuntimeSettings.Save.SaveType Type
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings.Save.NativeFieldInfoPtr_Type);
				return *intPtr;
			}
			set
			{
				*(IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings.Save.NativeFieldInfoPtr_Type)) = value;
			}
		}
		public unsafe string FullPath
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings.Save.NativeFieldInfoPtr_FullPath);
				return IL2CPP.Il2CppStringToManaged(*intPtr);
			}
			set
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
				IL2CPP.il2cpp_gc_wbarrier_set_field(intPtr, intPtr + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings.Save.NativeFieldInfoPtr_FullPath), IL2CPP.ManagedStringToIl2Cpp(value));
			}
		}
		public unsafe string SaveName
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings.Save.NativeFieldInfoPtr_SaveName);
				return IL2CPP.Il2CppStringToManaged(*intPtr);
			}
			set
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
				IL2CPP.il2cpp_gc_wbarrier_set_field(intPtr, intPtr + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings.Save.NativeFieldInfoPtr_SaveName), IL2CPP.ManagedStringToIl2Cpp(value));
			}
		}
		public unsafe DateTime LastWriteTime
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings.Save.NativeFieldInfoPtr_LastWriteTime);
				return *intPtr;
			}
			set
			{
				*(IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings.Save.NativeFieldInfoPtr_LastWriteTime)) = value;
			}
		}
		private static readonly IntPtr NativeFieldInfoPtr_Type;
		private static readonly IntPtr NativeFieldInfoPtr_FullPath;
		private static readonly IntPtr NativeFieldInfoPtr_SaveName;
		private static readonly IntPtr NativeFieldInfoPtr_LastWriteTime;
		private static readonly IntPtr NativeMethodInfoPtr_TryGetAutoSaveIndex_Public_Boolean_byref_Int32_0;
		private static readonly IntPtr NativeMethodInfoPtr_TryGetAutoSaveIndex_Public_Static_Boolean_String_byref_Int32_0;
		private static readonly IntPtr NativeMethodInfoPtr_AgeInSeconds_Public_Int32_0;
		public enum SaveType
		{
			File
		}
	}
	[ObfuscatedName("ProjectM.ServerRuntimeSettings+<>c")]
	[Serializable]
	public sealed class __c : Object
	{
		static __c()
		{
			Il2CppClassPointerStore<ServerRuntimeSettings.__c>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "<>c");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServerRuntimeSettings.__c>.NativeClassPtr);
			ServerRuntimeSettings.__c.NativeFieldInfoPtr___9 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings.__c>.NativeClassPtr, "<>9");
			ServerRuntimeSettings.__c.NativeFieldInfoPtr___9__25_0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings.__c>.NativeClassPtr, "<>9__25_0");
			ServerRuntimeSettings.__c.NativeFieldInfoPtr___9__25_1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings.__c>.NativeClassPtr, "<>9__25_1");
			ServerRuntimeSettings.__c.NativeFieldInfoPtr___9__36_0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings.__c>.NativeClassPtr, "<>9__36_0");
			ServerRuntimeSettings.__c.NativeFieldInfoPtr___9__37_1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings.__c>.NativeClassPtr, "<>9__37_1");
			ServerRuntimeSettings.__c.NativeFieldInfoPtr___9__37_2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings.__c>.NativeClassPtr, "<>9__37_2");
			ServerRuntimeSettings.__c.NativeMethodInfoPtr__ctor_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings.__c>.NativeClassPtr, 100665507);
			ServerRuntimeSettings.__c.NativeMethodInfoPtr__GetSaveFiles_b__25_0_Internal_Int64_Save_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings.__c>.NativeClassPtr, 100665508);
			ServerRuntimeSettings.__c.NativeMethodInfoPtr__GetSaveFiles_b__25_1_Internal_SaveFile_Save_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings.__c>.NativeClassPtr, 100665509);
			ServerRuntimeSettings.__c.NativeMethodInfoPtr__CleanupAutoSaves_b__36_0_Internal_Int32_Save_Save_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings.__c>.NativeClassPtr, 100665510);
			ServerRuntimeSettings.__c.NativeMethodInfoPtr__DeleteOldSaves_b__37_1_Internal_DateTime_Save_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings.__c>.NativeClassPtr, 100665511);
			ServerRuntimeSettings.__c.NativeMethodInfoPtr__DeleteOldSaves_b__37_2_Internal_DateTime_Save_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings.__c>.NativeClassPtr, 100665512);
		}
		[CallerCount(6)]
		[CachedScanResults(RefRangeStart = 40, RefRangeEnd = 46, XrefRangeStart = 40, XrefRangeEnd = 46, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe __c() : this(IL2CPP.il2cpp_object_new(Il2CppClassPointerStore<ServerRuntimeSettings.__c>.NativeClassPtr))
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.__c.NativeMethodInfoPtr__ctor_Public_Void_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1072435, XrefRangeEnd = 1072441, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe long _GetSaveFiles_b__25_0(ServerRuntimeSettings.Save x)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = IL2CPP.il2cpp_object_unbox(IL2CPP.Il2CppObjectBaseToPtrNotNull(x));
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.__c.NativeMethodInfoPtr__GetSaveFiles_b__25_0_Internal_Int64_Save_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1072441, XrefRangeEnd = 1072454, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe SaveFileData.SaveFile _GetSaveFiles_b__25_1(ServerRuntimeSettings.Save x)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = IL2CPP.il2cpp_object_unbox(IL2CPP.Il2CppObjectBaseToPtrNotNull(x));
			IntPtr intPtr;
			IntPtr pointer = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.__c.NativeMethodInfoPtr__GetSaveFiles_b__25_1_Internal_SaveFile_Save_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr);
			Il2CppException.RaiseExceptionIfNecessary(intPtr);
			return new SaveFileData.SaveFile(pointer);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1072454, XrefRangeEnd = 1072461, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe int _CleanupAutoSaves_b__36_0(ServerRuntimeSettings.Save a, ServerRuntimeSettings.Save b)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
			*ptr = IL2CPP.il2cpp_object_unbox(IL2CPP.Il2CppObjectBaseToPtrNotNull(a));
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.il2cpp_object_unbox(IL2CPP.Il2CppObjectBaseToPtrNotNull(b));
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.__c.NativeMethodInfoPtr__CleanupAutoSaves_b__36_0_Internal_Int32_Save_Save_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		public unsafe DateTime _DeleteOldSaves_b__37_1(ServerRuntimeSettings.Save save)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = IL2CPP.il2cpp_object_unbox(IL2CPP.Il2CppObjectBaseToPtrNotNull(save));
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.__c.NativeMethodInfoPtr__DeleteOldSaves_b__37_1_Internal_DateTime_Save_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		public unsafe DateTime _DeleteOldSaves_b__37_2(ServerRuntimeSettings.Save save)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = IL2CPP.il2cpp_object_unbox(IL2CPP.Il2CppObjectBaseToPtrNotNull(save));
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.__c.NativeMethodInfoPtr__DeleteOldSaves_b__37_2_Internal_DateTime_Save_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public __c(IntPtr pointer) : base(pointer)
		{
		}
		public unsafe static ServerRuntimeSettings.__c __9
		{
			get
			{
				IntPtr intPtr;
				IL2CPP.il2cpp_field_static_get_value(ServerRuntimeSettings.__c.NativeFieldInfoPtr___9, (void*)(&intPtr));
				IntPtr intPtr2 = intPtr;
				return (intPtr2 != 0) ? Il2CppObjectPool.Get<ServerRuntimeSettings.__c>(intPtr2) : null;
			}
			set
			{
				IL2CPP.il2cpp_field_static_set_value(ServerRuntimeSettings.__c.NativeFieldInfoPtr___9, IL2CPP.Il2CppObjectBaseToPtr(value));
			}
		}
		public unsafe static Func<ServerRuntimeSettings.Save, long> __9__25_0
		{
			get
			{
				IntPtr intPtr;
				IL2CPP.il2cpp_field_static_get_value(ServerRuntimeSettings.__c.NativeFieldInfoPtr___9__25_0, (void*)(&intPtr));
				IntPtr intPtr2 = intPtr;
				return (intPtr2 != 0) ? Il2CppObjectPool.Get<Func<ServerRuntimeSettings.Save, long>>(intPtr2) : null;
			}
			set
			{
				IL2CPP.il2cpp_field_static_set_value(ServerRuntimeSettings.__c.NativeFieldInfoPtr___9__25_0, IL2CPP.Il2CppObjectBaseToPtr(value));
			}
		}
		public unsafe static Func<ServerRuntimeSettings.Save, SaveFileData.SaveFile> __9__25_1
		{
			get
			{
				IntPtr intPtr;
				IL2CPP.il2cpp_field_static_get_value(ServerRuntimeSettings.__c.NativeFieldInfoPtr___9__25_1, (void*)(&intPtr));
				IntPtr intPtr2 = intPtr;
				return (intPtr2 != 0) ? Il2CppObjectPool.Get<Func<ServerRuntimeSettings.Save, SaveFileData.SaveFile>>(intPtr2) : null;
			}
			set
			{
				IL2CPP.il2cpp_field_static_set_value(ServerRuntimeSettings.__c.NativeFieldInfoPtr___9__25_1, IL2CPP.Il2CppObjectBaseToPtr(value));
			}
		}
		public unsafe static Comparison<ServerRuntimeSettings.Save> __9__36_0
		{
			get
			{
				IntPtr intPtr;
				IL2CPP.il2cpp_field_static_get_value(ServerRuntimeSettings.__c.NativeFieldInfoPtr___9__36_0, (void*)(&intPtr));
				IntPtr intPtr2 = intPtr;
				return (intPtr2 != 0) ? Il2CppObjectPool.Get<Comparison<ServerRuntimeSettings.Save>>(intPtr2) : null;
			}
			set
			{
				IL2CPP.il2cpp_field_static_set_value(ServerRuntimeSettings.__c.NativeFieldInfoPtr___9__36_0, IL2CPP.Il2CppObjectBaseToPtr(value));
			}
		}
		public unsafe static Func<ServerRuntimeSettings.Save, DateTime> __9__37_1
		{
			get
			{
				IntPtr intPtr;
				IL2CPP.il2cpp_field_static_get_value(ServerRuntimeSettings.__c.NativeFieldInfoPtr___9__37_1, (void*)(&intPtr));
				IntPtr intPtr2 = intPtr;
				return (intPtr2 != 0) ? Il2CppObjectPool.Get<Func<ServerRuntimeSettings.Save, DateTime>>(intPtr2) : null;
			}
			set
			{
				IL2CPP.il2cpp_field_static_set_value(ServerRuntimeSettings.__c.NativeFieldInfoPtr___9__37_1, IL2CPP.Il2CppObjectBaseToPtr(value));
			}
		}
		public unsafe static Func<ServerRuntimeSettings.Save, DateTime> __9__37_2
		{
			get
			{
				IntPtr intPtr;
				IL2CPP.il2cpp_field_static_get_value(ServerRuntimeSettings.__c.NativeFieldInfoPtr___9__37_2, (void*)(&intPtr));
				IntPtr intPtr2 = intPtr;
				return (intPtr2 != 0) ? Il2CppObjectPool.Get<Func<ServerRuntimeSettings.Save, DateTime>>(intPtr2) : null;
			}
			set
			{
				IL2CPP.il2cpp_field_static_set_value(ServerRuntimeSettings.__c.NativeFieldInfoPtr___9__37_2, IL2CPP.Il2CppObjectBaseToPtr(value));
			}
		}
		private static readonly IntPtr NativeFieldInfoPtr___9;
		private static readonly IntPtr NativeFieldInfoPtr___9__25_0;
		private static readonly IntPtr NativeFieldInfoPtr___9__25_1;
		private static readonly IntPtr NativeFieldInfoPtr___9__36_0;
		private static readonly IntPtr NativeFieldInfoPtr___9__37_1;
		private static readonly IntPtr NativeFieldInfoPtr___9__37_2;
		private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_0;
		private static readonly IntPtr NativeMethodInfoPtr__GetSaveFiles_b__25_0_Internal_Int64_Save_0;
		private static readonly IntPtr NativeMethodInfoPtr__GetSaveFiles_b__25_1_Internal_SaveFile_Save_0;
		private static readonly IntPtr NativeMethodInfoPtr__CleanupAutoSaves_b__36_0_Internal_Int32_Save_Save_0;
		private static readonly IntPtr NativeMethodInfoPtr__DeleteOldSaves_b__37_1_Internal_DateTime_Save_0;
		private static readonly IntPtr NativeMethodInfoPtr__DeleteOldSaves_b__37_2_Internal_DateTime_Save_0;
	}
	[ObfuscatedName("ProjectM.ServerRuntimeSettings+<>c__DisplayClass37_0")]
	public sealed class __c__DisplayClass37_0 : Object
	{
		static __c__DisplayClass37_0()
		{
			Il2CppClassPointerStore<ServerRuntimeSettings.__c__DisplayClass37_0>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "<>c__DisplayClass37_0");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServerRuntimeSettings.__c__DisplayClass37_0>.NativeClassPtr);
			ServerRuntimeSettings.__c__DisplayClass37_0.NativeFieldInfoPtr_cleanupData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings.__c__DisplayClass37_0>.NativeClassPtr, "cleanupData");
			ServerRuntimeSettings.__c__DisplayClass37_0.NativeMethodInfoPtr__ctor_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings.__c__DisplayClass37_0>.NativeClassPtr, 100665513);
			ServerRuntimeSettings.__c__DisplayClass37_0.NativeMethodInfoPtr__DeleteOldSaves_b__0_Internal_Boolean_Save_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings.__c__DisplayClass37_0>.NativeClassPtr, 100665514);
		}
		[CallerCount(6)]
		[CachedScanResults(RefRangeStart = 40, RefRangeEnd = 46, XrefRangeStart = 40, XrefRangeEnd = 46, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe __c__DisplayClass37_0() : this(IL2CPP.il2cpp_object_new(Il2CppClassPointerStore<ServerRuntimeSettings.__c__DisplayClass37_0>.NativeClassPtr))
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.__c__DisplayClass37_0.NativeMethodInfoPtr__ctor_Public_Void_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1072461, XrefRangeEnd = 1072465, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe bool _DeleteOldSaves_b__0(ServerRuntimeSettings.Save save)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = IL2CPP.il2cpp_object_unbox(IL2CPP.Il2CppObjectBaseToPtrNotNull(save));
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings.__c__DisplayClass37_0.NativeMethodInfoPtr__DeleteOldSaves_b__0_Internal_Boolean_Save_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public __c__DisplayClass37_0(IntPtr pointer) : base(pointer)
		{
		}
		public unsafe SaveCleanupData cleanupData
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings.__c__DisplayClass37_0.NativeFieldInfoPtr_cleanupData);
				return *intPtr;
			}
			set
			{
				*(IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings.__c__DisplayClass37_0.NativeFieldInfoPtr_cleanupData)) = value;
			}
		}
		private static readonly IntPtr NativeFieldInfoPtr_cleanupData;
		private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_0;
		private static readonly IntPtr NativeMethodInfoPtr__DeleteOldSaves_b__0_Internal_Boolean_Save_0;
	}
	[ObfuscatedName("ProjectM.ServerRuntimeSettings+<IterateAllSaves>d__33")]
	public sealed class _IterateAllSaves_d__33 : Object
	{
		static _IterateAllSaves_d__33()
		{
			Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<ServerRuntimeSettings>.NativeClassPtr, "<IterateAllSaves>d__33");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr);
			ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___1__state = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr, "<>1__state");
			ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___2__current = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr, "<>2__current");
			ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___l__initialThreadId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr, "<>l__initialThreadId");
			ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr_saveDirectoryPath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr, "saveDirectoryPath");
			ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___3__saveDirectoryPath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr, "<>3__saveDirectoryPath");
			ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr_searchPattern = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr, "searchPattern");
			ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___3__searchPattern = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr, "<>3__searchPattern");
			ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___7__wrap1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr, "<>7__wrap1");
			ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___7__wrap2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr, "<>7__wrap2");
			ServerRuntimeSettings._IterateAllSaves_d__33.NativeMethodInfoPtr__ctor_Public_Void_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr, 100665515);
			ServerRuntimeSettings._IterateAllSaves_d__33.NativeMethodInfoPtr_System_IDisposable_Dispose_Private_Virtual_Final_New_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr, 100665516);
			ServerRuntimeSettings._IterateAllSaves_d__33.NativeMethodInfoPtr_MoveNext_Private_Virtual_Final_New_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr, 100665517);
			ServerRuntimeSettings._IterateAllSaves_d__33.NativeMethodInfoPtr_System_Collections_Generic_IEnumerator_ProjectM_ServerRuntimeSettings_Save__get_Current_Private_Virtual_Final_New_get_Save_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr, 100665518);
			ServerRuntimeSettings._IterateAllSaves_d__33.NativeMethodInfoPtr_System_Collections_IEnumerator_Reset_Private_Virtual_Final_New_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr, 100665519);
			ServerRuntimeSettings._IterateAllSaves_d__33.NativeMethodInfoPtr_System_Collections_IEnumerator_get_Current_Private_Virtual_Final_New_get_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr, 100665520);
			ServerRuntimeSettings._IterateAllSaves_d__33.NativeMethodInfoPtr_System_Collections_Generic_IEnumerable_ProjectM_ServerRuntimeSettings_Save__GetEnumerator_Private_Virtual_Final_New_IEnumerator_1_Save_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr, 100665521);
			ServerRuntimeSettings._IterateAllSaves_d__33.NativeMethodInfoPtr_System_Collections_IEnumerable_GetEnumerator_Private_Virtual_Final_New_IEnumerator_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr, 100665522);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1072465, XrefRangeEnd = 1072466, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe _IterateAllSaves_d__33(int <>1__state) : this(IL2CPP.il2cpp_object_new(Il2CppClassPointerStore<ServerRuntimeSettings._IterateAllSaves_d__33>.NativeClassPtr))
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref <>1__state;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings._IterateAllSaves_d__33.NativeMethodInfoPtr__ctor_Public_Void_Int32_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
		[CallerCount(6)]
		[CachedScanResults(RefRangeStart = 40, RefRangeEnd = 46, XrefRangeStart = 40, XrefRangeEnd = 46, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe void System_IDisposable_Dispose()
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings._IterateAllSaves_d__33.NativeMethodInfoPtr_System_IDisposable_Dispose_Private_Virtual_Final_New_Void_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1072466, XrefRangeEnd = 1072487, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe bool MoveNext()
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings._IterateAllSaves_d__33.NativeMethodInfoPtr_MoveNext_Private_Virtual_Final_New_Boolean_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public unsafe ServerRuntimeSettings.Save Current
		{
			[CallerCount(0)]
			get
			{
				IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
				IntPtr* ptr = null;
				IntPtr intPtr;
				IntPtr pointer = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings._IterateAllSaves_d__33.NativeMethodInfoPtr_System_Collections_Generic_IEnumerator_ProjectM_ServerRuntimeSettings_Save__get_Current_Private_Virtual_Final_New_get_Save_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr);
				Il2CppException.RaiseExceptionIfNecessary(intPtr);
				return new ServerRuntimeSettings.Save(pointer);
			}
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1072487, XrefRangeEnd = 1072492, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe void System_Collections_IEnumerator_Reset()
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings._IterateAllSaves_d__33.NativeMethodInfoPtr_System_Collections_IEnumerator_Reset_Private_Virtual_Final_New_Void_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
		public unsafe Object Current
		{
			[CallerCount(0)]
			[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1072492, XrefRangeEnd = 1072495, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
			get
			{
				IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
				IntPtr* ptr = null;
				IntPtr intPtr2;
				IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings._IterateAllSaves_d__33.NativeMethodInfoPtr_System_Collections_IEnumerator_get_Current_Private_Virtual_Final_New_get_Object_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
				Il2CppException.RaiseExceptionIfNecessary(intPtr2);
				IntPtr intPtr3 = intPtr;
				return (intPtr3 != 0) ? Il2CppObjectPool.Get<Object>(intPtr3) : null;
			}
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1072495, XrefRangeEnd = 1072501, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe IEnumerator<ServerRuntimeSettings.Save> System_Collections_Generic_IEnumerable_ProjectM_ServerRuntimeSettings_Save__GetEnumerator()
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings._IterateAllSaves_d__33.NativeMethodInfoPtr_System_Collections_Generic_IEnumerable_ProjectM_ServerRuntimeSettings_Save__GetEnumerator_Private_Virtual_Final_New_IEnumerator_1_Save_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			IntPtr intPtr3 = intPtr;
			return (intPtr3 != 0) ? Il2CppObjectPool.Get<IEnumerator<ServerRuntimeSettings.Save>>(intPtr3) : null;
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 0, XrefRangeEnd = 0, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe IEnumerator System_Collections_IEnumerable_GetEnumerator()
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerRuntimeSettings._IterateAllSaves_d__33.NativeMethodInfoPtr_System_Collections_IEnumerable_GetEnumerator_Private_Virtual_Final_New_IEnumerator_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			IntPtr intPtr3 = intPtr;
			return (intPtr3 != 0) ? Il2CppObjectPool.Get<IEnumerator>(intPtr3) : null;
		}
		public _IterateAllSaves_d__33(IntPtr pointer) : base(pointer)
		{
		}
		public unsafe int __1__state
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___1__state);
				return *intPtr;
			}
			set
			{
				*(IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___1__state)) = value;
			}
		}
		public ServerRuntimeSettings.Save __2__current
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___2__current);
				return new ServerRuntimeSettings.Save(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServerRuntimeSettings.Save>.NativeClassPtr, intPtr));
			}
			set
			{
				cpblk(IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___2__current), IL2CPP.il2cpp_object_unbox(IL2CPP.Il2CppObjectBaseToPtr(value)), IL2CPP.il2cpp_class_value_size(Il2CppClassPointerStore<ServerRuntimeSettings.Save>.NativeClassPtr, (UIntPtr)0));
			}
		}
		public unsafe int __l__initialThreadId
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___l__initialThreadId);
				return *intPtr;
			}
			set
			{
				*(IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___l__initialThreadId)) = value;
			}
		}
		public unsafe string saveDirectoryPath
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr_saveDirectoryPath);
				return IL2CPP.Il2CppStringToManaged(*intPtr);
			}
			set
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
				IL2CPP.il2cpp_gc_wbarrier_set_field(intPtr, intPtr + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr_saveDirectoryPath), IL2CPP.ManagedStringToIl2Cpp(value));
			}
		}
		public unsafe string __3__saveDirectoryPath
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___3__saveDirectoryPath);
				return IL2CPP.Il2CppStringToManaged(*intPtr);
			}
			set
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
				IL2CPP.il2cpp_gc_wbarrier_set_field(intPtr, intPtr + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___3__saveDirectoryPath), IL2CPP.ManagedStringToIl2Cpp(value));
			}
		}
		public unsafe string searchPattern
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr_searchPattern);
				return IL2CPP.Il2CppStringToManaged(*intPtr);
			}
			set
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
				IL2CPP.il2cpp_gc_wbarrier_set_field(intPtr, intPtr + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr_searchPattern), IL2CPP.ManagedStringToIl2Cpp(value));
			}
		}
		public unsafe string __3__searchPattern
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___3__searchPattern);
				return IL2CPP.Il2CppStringToManaged(*intPtr);
			}
			set
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
				IL2CPP.il2cpp_gc_wbarrier_set_field(intPtr, intPtr + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___3__searchPattern), IL2CPP.ManagedStringToIl2Cpp(value));
			}
		}
		public unsafe Il2CppStringArray __7__wrap1
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___7__wrap1);
				IntPtr intPtr2 = *intPtr;
				return (intPtr2 != 0) ? Il2CppObjectPool.Get<Il2CppStringArray>(intPtr2) : null;
			}
			set
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
				IL2CPP.il2cpp_gc_wbarrier_set_field(intPtr, intPtr + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___7__wrap1), IL2CPP.Il2CppObjectBaseToPtr(value));
			}
		}
		public unsafe int __7__wrap2
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___7__wrap2);
				return *intPtr;
			}
			set
			{
				*(IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ServerRuntimeSettings._IterateAllSaves_d__33.NativeFieldInfoPtr___7__wrap2)) = value;
			}
		}
		private static readonly IntPtr NativeFieldInfoPtr___1__state;
		private static readonly IntPtr NativeFieldInfoPtr___2__current;
		private static readonly IntPtr NativeFieldInfoPtr___l__initialThreadId;
		private static readonly IntPtr NativeFieldInfoPtr_saveDirectoryPath;
		private static readonly IntPtr NativeFieldInfoPtr___3__saveDirectoryPath;
		private static readonly IntPtr NativeFieldInfoPtr_searchPattern;
		private static readonly IntPtr NativeFieldInfoPtr___3__searchPattern;
		private static readonly IntPtr NativeFieldInfoPtr___7__wrap1;
		private static readonly IntPtr NativeFieldInfoPtr___7__wrap2;
		private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Int32_0;
		private static readonly IntPtr NativeMethodInfoPtr_System_IDisposable_Dispose_Private_Virtual_Final_New_Void_0;
		private static readonly IntPtr NativeMethodInfoPtr_MoveNext_Private_Virtual_Final_New_Boolean_0;
		private static readonly IntPtr NativeMethodInfoPtr_System_Collections_Generic_IEnumerator_ProjectM_ServerRuntimeSettings_Save__get_Current_Private_Virtual_Final_New_get_Save_0;
		private static readonly IntPtr NativeMethodInfoPtr_System_Collections_IEnumerator_Reset_Private_Virtual_Final_New_Void_0;
		private static readonly IntPtr NativeMethodInfoPtr_System_Collections_IEnumerator_get_Current_Private_Virtual_Final_New_get_Object_0;
		private static readonly IntPtr NativeMethodInfoPtr_System_Collections_Generic_IEnumerable_ProjectM_ServerRuntimeSettings_Save__GetEnumerator_Private_Virtual_Final_New_IEnumerator_1_Save_0;
		private static readonly IntPtr NativeMethodInfoPtr_System_Collections_IEnumerable_GetEnumerator_Private_Virtual_Final_New_IEnumerator_0;
	}
}
