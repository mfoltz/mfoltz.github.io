---
nav_exclude: true
search_exclude: true
---

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

- [BloodMixerSystem_Update]({{% relref "systems/server/BloodMixerSystem_Update.md" %}})
- [CastleBuildingWorkstationsSystem]({{% relref "systems/server/CastleBuildingWorkstationsSystem.md" %}})
- [ForgeSystem_Update]({{% relref "systems/server/ForgeSystem_Update.md" %}})
- [FusionForgeSystem_Update]({{% relref "systems/server/FusionForgeSystem_Update.md" %}})
- [JewelCraftingUpdateSystem]({{% relref "systems/server/JewelCraftingUpdateSystem.md" %}})
- [RegisterSpawnedChunkObjectsSystem_ReactToSpawn]({{% relref "systems/server/RegisterSpawnedChunkObjectsSystem_ReactToSpawn.md" %}})
- [ServantCoffinstationUpdateSystem]({{% relref "systems/server/ServantCoffinstationUpdateSystem.md" %}})
- [UnitSpawnerUpdateSystem]({{% relref "systems/server/UnitSpawnerUpdateSystem.md" %}})
- [UpdateCraftingSystem]({{% relref "systems/server/UpdateCraftingSystem.md" %}})
- [UpdatePrisonSystem]({{% relref "systems/server/UpdatePrisonSystem.md" %}})
- [UpdateSalvageSystem]({{% relref "systems/server/UpdateSalvageSystem.md" %}})
