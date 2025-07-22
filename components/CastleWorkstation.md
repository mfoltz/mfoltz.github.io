---
nav_exclude: true
search_exclude: true
---

# CastleWorkstation

```csharp
public struct CastleWorkstation
{
	static CastleWorkstation()
	{
		Il2CppClassPointerStore<CastleWorkstation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CastleWorkstation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleWorkstation>.NativeClassPtr);
		CastleWorkstation.NativeFieldInfoPtr_MatchingFloorType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleWorkstation>.NativeClassPtr, "MatchingFloorType");
		CastleWorkstation.NativeFieldInfoPtr_BonusServantType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleWorkstation>.NativeClassPtr, "BonusServantType");
		CastleWorkstation.NativeFieldInfoPtr_ForceUpdateInStation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleWorkstation>.NativeClassPtr, "ForceUpdateInStation");
		CastleWorkstation.NativeFieldInfoPtr_WorkstationLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleWorkstation>.NativeClassPtr, "WorkstationLevel");
		CastleWorkstation.NativeMethodInfoPtr_SetWorkstationLevel_Public_Void_WorkstationLevel_byref_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleWorkstation>.NativeClassPtr, 100664088);
		CastleWorkstation.NativeMethodInfoPtr_GetProgressSpeedMultiplier_Public_Single_DynamicBuffer_1_StationBonusBuffer_NativeParallelHashMap_2_PrefabGUID_StationBonusData_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleWorkstation>.NativeClassPtr, 100664089);
		CastleWorkstation.NativeMethodInfoPtr_HasBloodEssence_Public_Boolean_DynamicBuffer_1_StationBonusBuffer_NativeParallelHashMap_2_PrefabGUID_StationBonusData_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleWorkstation>.NativeClassPtr, 100664090);
		CastleWorkstation.NativeMethodInfoPtr_GetResourceRequirementsMultiplier_Public_Single_DynamicBuffer_1_StationBonusBuffer_NativeParallelHashMap_2_PrefabGUID_StationBonusData_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleWorkstation>.NativeClassPtr, 100664091);
	}

	public unsafe void SetWorkstationLevel(WorkstationLevel newLevel, out bool wasModified)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref newLevel;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &wasModified;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleWorkstation.NativeMethodInfoPtr_SetWorkstationLevel_Public_Void_WorkstationLevel_byref_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe float GetProgressSpeedMultiplier(DynamicBuffer<StationBonusBuffer> bonuses, NativeParallelHashMap<PrefabGUID, StationBonusData> stationBonusLookupMap, bool hasBloodSource)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref bonuses;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref stationBonusLookupMap;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref hasBloodSource;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleWorkstation.NativeMethodInfoPtr_GetProgressSpeedMultiplier_Public_Single_DynamicBuffer_1_StationBonusBuffer_NativeParallelHashMap_2_PrefabGUID_StationBonusData_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool HasBloodEssence(DynamicBuffer<StationBonusBuffer> bonuses, NativeParallelHashMap<PrefabGUID, StationBonusData> stationBonusLookupMap, bool hasBloodSource)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref bonuses;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref stationBonusLookupMap;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref hasBloodSource;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleWorkstation.NativeMethodInfoPtr_HasBloodEssence_Public_Boolean_DynamicBuffer_1_StationBonusBuffer_NativeParallelHashMap_2_PrefabGUID_StationBonusData_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float GetResourceRequirementsMultiplier(DynamicBuffer<StationBonusBuffer> bonuses, NativeParallelHashMap<PrefabGUID, StationBonusData> stationBonusLookupMap, bool hasBloodSource)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref bonuses;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref stationBonusLookupMap;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref hasBloodSource;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleWorkstation.NativeMethodInfoPtr_GetResourceRequirementsMultiplier_Public_Single_DynamicBuffer_1_StationBonusBuffer_NativeParallelHashMap_2_PrefabGUID_StationBonusData_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleWorkstation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MatchingFloorType;
	private static readonly IntPtr NativeFieldInfoPtr_BonusServantType;
	private static readonly IntPtr NativeFieldInfoPtr_ForceUpdateInStation;
	private static readonly IntPtr NativeFieldInfoPtr_WorkstationLevel;
	private static readonly IntPtr NativeMethodInfoPtr_SetWorkstationLevel_Public_Void_WorkstationLevel_byref_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetProgressSpeedMultiplier_Public_Single_DynamicBuffer_1_StationBonusBuffer_NativeParallelHashMap_2_PrefabGUID_StationBonusData_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_HasBloodEssence_Public_Boolean_DynamicBuffer_1_StationBonusBuffer_NativeParallelHashMap_2_PrefabGUID_StationBonusData_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetResourceRequirementsMultiplier_Public_Single_DynamicBuffer_1_StationBonusBuffer_NativeParallelHashMap_2_PrefabGUID_StationBonusData_Boolean_0;

	public CastleFloorTypes MatchingFloorType;

	public ServantType BonusServantType;

	public bool ForceUpdateInStation;

	public WorkstationLevel WorkstationLevel;
}
```

## Server Systems

- [BloodMixerSystem_Update](/systems/server/BloodMixerSystem_Update)
- [CastleBuildingWorkstationsSystem](/systems/server/CastleBuildingWorkstationsSystem)
- [ForgeSystem_Update](/systems/server/ForgeSystem_Update)
- [FusionForgeSystem_Update](/systems/server/FusionForgeSystem_Update)
- [JewelCraftingUpdateSystem](/systems/server/JewelCraftingUpdateSystem)
- [RegisterSpawnedChunkObjectsSystem_ReactToSpawn](/systems/server/RegisterSpawnedChunkObjectsSystem_ReactToSpawn)
- [ServantCoffinstationUpdateSystem](/systems/server/ServantCoffinstationUpdateSystem)
- [UnitSpawnerUpdateSystem](/systems/server/UnitSpawnerUpdateSystem)
- [UpdateCraftingSystem](/systems/server/UpdateCraftingSystem)
- [UpdatePrisonSystem](/systems/server/UpdatePrisonSystem)
- [UpdateSalvageSystem](/systems/server/UpdateSalvageSystem)
