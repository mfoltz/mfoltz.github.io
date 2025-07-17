---
nav_exclude: true
search_exclude: true
---

# SyncedServerDebugSettings

```csharp
[StructLayout(2)]
public struct SyncedServerDebugSettings
{
	static SyncedServerDebugSettings()
	{
		Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SyncedServerDebugSettings");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr);
		SyncedServerDebugSettings.NativeFieldInfoPtr_SunDamageDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "SunDamageDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_DurabilityDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "DurabilityDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_BloodDrainDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "BloodDrainDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_PlayerCooldownDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "PlayerCooldownDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_EnvironmentCooldownsDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "EnvironmentCooldownsDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_BuildCostsDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "BuildCostsDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_TutorialPopupsDisabled_DeprecatedButKKeptToAvoidWeirdBurstIssue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "TutorialPopupsDisabled_DeprecatedButKKeptToAvoidWeirdBurstIssue");
		SyncedServerDebugSettings.NativeFieldInfoPtr_AllProgressionUnlocked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "AllProgressionUnlocked");
		SyncedServerDebugSettings.NativeFieldInfoPtr_UnlockAllVBloodsOnLaunch = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "UnlockAllVBloodsOnLaunch");
		SyncedServerDebugSettings.NativeFieldInfoPtr_PlayersInvulnerabilityEnabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "PlayersInvulnerabilityEnabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_DayNightCycleDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "DayNightCycleDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_NPCsDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "NPCsDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_GlobalCastleTerritoryEnabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "GlobalCastleTerritoryEnabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_BuildingPlacementRestrictionsDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "BuildingPlacementRestrictionsDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_FreeBuildingPlacementEnabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "FreeBuildingPlacementEnabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_BuildingReplacementDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "BuildingReplacementDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_FloorPlacementRestrictionsDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "FloorPlacementRestrictionsDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_AllWaypointsUnlocked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "AllWaypointsUnlocked");
		SyncedServerDebugSettings.NativeFieldInfoPtr_AggroDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "AggroDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_DropsDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "DropsDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_TileCollisionDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "TileCollisionDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_DynamicCollisionDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "DynamicCollisionDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_DynamicCloudsDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "DynamicCloudsDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_HitEffectsDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "HitEffectsDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_RoofGenerationEnabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "RoofGenerationEnabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_FeedWoundedRequirementDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "FeedWoundedRequirementDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_UseSunblockerChecksForFly = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "UseSunblockerChecksForFly");
		SyncedServerDebugSettings.NativeFieldInfoPtr_CastleLimitsDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "CastleLimitsDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_CastleDragBuildingEnabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "CastleDragBuildingEnabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_DisableProjectileHeightPrediction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "DisableProjectileHeightPrediction");
		SyncedServerDebugSettings.NativeFieldInfoPtr_UseDeathSequencesInsteadOfRagdolls = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "UseDeathSequencesInsteadOfRagdolls");
		SyncedServerDebugSettings.NativeFieldInfoPtr_DisableDebugEvents = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "DisableDebugEvents");
		SyncedServerDebugSettings.NativeFieldInfoPtr_AdminOnlyDebugEvents = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "AdminOnlyDebugEvents");
		SyncedServerDebugSettings.NativeFieldInfoPtr_EveryoneIsAdmin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "EveryoneIsAdmin");
		SyncedServerDebugSettings.NativeFieldInfoPtr_CastleHeartBloodEssenceDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "CastleHeartBloodEssenceDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_AiCastsDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "AiCastsDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_LightningStrikesDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "LightningStrikesDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_VbloodGhostsDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "VbloodGhostsDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_ServantTimersDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "ServantTimersDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_BuildingProximityRequirementDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "BuildingProximityRequirementDisabled");
		SyncedServerDebugSettings.NativeFieldInfoPtr_DebugTrophies = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "DebugTrophies");
		SyncedServerDebugSettings.NativeFieldInfoPtr_PlacementLogLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "PlacementLogLevel");
		SyncedServerDebugSettings.NativeFieldInfoPtr__Initialized = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, "_Initialized");
		SyncedServerDebugSettings.NativeMethodInfoPtr_Initialize_Public_Void_Boolean_Boolean_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, 100665243);
		SyncedServerDebugSettings.NativeMethodInfoPtr_TryGetServerDebugSettings_Private_Boolean_byref_ServerDebugSettings_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, 100665244);
		SyncedServerDebugSettings.NativeMethodInfoPtr_TryGetServerDebugSettings_Private_Boolean_World_byref_ServerDebugSettings_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, 100665245);
		SyncedServerDebugSettings.NativeMethodInfoPtr_ApplyFromSettings_Public_Void_ServerDebugSettings_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, 100665246);
		SyncedServerDebugSettings.NativeMethodInfoPtr_SetSetting_Public_Void_World_DebugSettingType_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, 100665247);
		SyncedServerDebugSettings.NativeMethodInfoPtr_SetPlacementLogLevel_Public_Void_World_PlacementLogLevel_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, 100665248);
		SyncedServerDebugSettings.NativeMethodInfoPtr_SaveToSettingsFile_Private_Void_World_DebugSettingType_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, 100665249);
		SyncedServerDebugSettings.NativeMethodInfoPtr_Get_Public_Static_byref_SyncedServerDebugSettings_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, 100665250);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1069740, RefRangeEnd = 1069742, XrefRangeStart = 1069735, XrefRangeEnd = 1069740, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Initialize(bool disableDebugEvents = false, bool adminOnlyDebugEvents = false, bool everyoneIsAdmin = false)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref disableDebugEvents;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref adminOnlyDebugEvents;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref everyoneIsAdmin;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SyncedServerDebugSettings.NativeMethodInfoPtr_Initialize_Public_Void_Boolean_Boolean_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1069742, XrefRangeEnd = 1069747, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetServerDebugSettings(out ServerDebugSettings settings)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		ref IntPtr ptr2 = ref *ptr;
		IntPtr intPtr = 0;
		ptr2 = &intPtr;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(SyncedServerDebugSettings.NativeMethodInfoPtr_TryGetServerDebugSettings_Private_Boolean_byref_ServerDebugSettings_0, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		settings = ((intPtr4 == 0) ? null : new ServerDebugSettings(intPtr4));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(4)]
	[CachedScanResults(RefRangeStart = 1069754, RefRangeEnd = 1069758, XrefRangeStart = 1069747, XrefRangeEnd = 1069754, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetServerDebugSettings(World serverWorld, out ServerDebugSettings settings)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(serverWorld);
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = 0;
		ptr2 = &intPtr;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(SyncedServerDebugSettings.NativeMethodInfoPtr_TryGetServerDebugSettings_Private_Boolean_World_byref_ServerDebugSettings_0, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		settings = ((intPtr4 == 0) ? null : new ServerDebugSettings(intPtr4));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1069758, RefRangeEnd = 1069759, XrefRangeStart = 1069758, XrefRangeEnd = 1069758, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ApplyFromSettings(ServerDebugSettings settings)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(settings);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SyncedServerDebugSettings.NativeMethodInfoPtr_ApplyFromSettings_Public_Void_ServerDebugSettings_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1069800, RefRangeEnd = 1069801, XrefRangeStart = 1069759, XrefRangeEnd = 1069800, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetSetting(World serverWorld, DebugSettingType type, bool value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(serverWorld);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref type;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SyncedServerDebugSettings.NativeMethodInfoPtr_SetSetting_Public_Void_World_DebugSettingType_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1069801, XrefRangeEnd = 1069807, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetPlacementLogLevel(World serverWorld, PlacementLogLevel placementLogLevel)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(serverWorld);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref placementLogLevel;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SyncedServerDebugSettings.NativeMethodInfoPtr_SetPlacementLogLevel_Public_Void_World_PlacementLogLevel_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1069849, RefRangeEnd = 1069850, XrefRangeStart = 1069807, XrefRangeEnd = 1069849, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SaveToSettingsFile(World serverWorld, DebugSettingType type, bool value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(serverWorld);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref type;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SyncedServerDebugSettings.NativeMethodInfoPtr_SaveToSettingsFile_Private_Void_World_DebugSettingType_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(185)]
	[CachedScanResults(RefRangeStart = 1069859, RefRangeEnd = 1070044, XrefRangeStart = 1069850, XrefRangeEnd = 1069859, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static ref SyncedServerDebugSettings Get()
	{
		IntPtr* ptr = null;
		IntPtr intPtr;
		IntPtr result = IL2CPP.il2cpp_runtime_invoke(SyncedServerDebugSettings.NativeMethodInfoPtr_Get_Public_Static_byref_SyncedServerDebugSettings_0, 0, (void**)ptr, ref intPtr);
		Il2CppException.RaiseExceptionIfNecessary(intPtr);
		return result;
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SyncedServerDebugSettings>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SunDamageDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_DurabilityDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_BloodDrainDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_PlayerCooldownDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_EnvironmentCooldownsDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_BuildCostsDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_TutorialPopupsDisabled_DeprecatedButKKeptToAvoidWeirdBurstIssue;
	private static readonly IntPtr NativeFieldInfoPtr_AllProgressionUnlocked;
	private static readonly IntPtr NativeFieldInfoPtr_UnlockAllVBloodsOnLaunch;
	private static readonly IntPtr NativeFieldInfoPtr_PlayersInvulnerabilityEnabled;
	private static readonly IntPtr NativeFieldInfoPtr_DayNightCycleDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_NPCsDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_GlobalCastleTerritoryEnabled;
	private static readonly IntPtr NativeFieldInfoPtr_BuildingPlacementRestrictionsDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_FreeBuildingPlacementEnabled;
	private static readonly IntPtr NativeFieldInfoPtr_BuildingReplacementDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_FloorPlacementRestrictionsDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_AllWaypointsUnlocked;
	private static readonly IntPtr NativeFieldInfoPtr_AggroDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_DropsDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_TileCollisionDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_DynamicCollisionDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_DynamicCloudsDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_HitEffectsDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_RoofGenerationEnabled;
	private static readonly IntPtr NativeFieldInfoPtr_FeedWoundedRequirementDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_UseSunblockerChecksForFly;
	private static readonly IntPtr NativeFieldInfoPtr_CastleLimitsDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_CastleDragBuildingEnabled;
	private static readonly IntPtr NativeFieldInfoPtr_DisableProjectileHeightPrediction;
	private static readonly IntPtr NativeFieldInfoPtr_UseDeathSequencesInsteadOfRagdolls;
	private static readonly IntPtr NativeFieldInfoPtr_DisableDebugEvents;
	private static readonly IntPtr NativeFieldInfoPtr_AdminOnlyDebugEvents;
	private static readonly IntPtr NativeFieldInfoPtr_EveryoneIsAdmin;
	private static readonly IntPtr NativeFieldInfoPtr_CastleHeartBloodEssenceDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_AiCastsDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_LightningStrikesDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_VbloodGhostsDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_ServantTimersDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_BuildingProximityRequirementDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_DebugTrophies;
	private static readonly IntPtr NativeFieldInfoPtr_PlacementLogLevel;
	private static readonly IntPtr NativeFieldInfoPtr__Initialized;
	private static readonly IntPtr NativeMethodInfoPtr_Initialize_Public_Void_Boolean_Boolean_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetServerDebugSettings_Private_Boolean_byref_ServerDebugSettings_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetServerDebugSettings_Private_Boolean_World_byref_ServerDebugSettings_0;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyFromSettings_Public_Void_ServerDebugSettings_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetSetting_Public_Void_World_DebugSettingType_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetPlacementLogLevel_Public_Void_World_PlacementLogLevel_0;
	private static readonly IntPtr NativeMethodInfoPtr_SaveToSettingsFile_Private_Void_World_DebugSettingType_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_Get_Public_Static_byref_SyncedServerDebugSettings_0;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool SunDamageDisabled;
	[FieldOffset(1)]
	[MarshalAs(4)]
	public bool DurabilityDisabled;
	[FieldOffset(2)]
	[MarshalAs(4)]
	public bool BloodDrainDisabled;
	[FieldOffset(3)]
	[MarshalAs(4)]
	public bool PlayerCooldownDisabled;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool EnvironmentCooldownsDisabled;
	[FieldOffset(5)]
	[MarshalAs(4)]
	public bool BuildCostsDisabled;
	[FieldOffset(6)]
	[MarshalAs(4)]
	public bool TutorialPopupsDisabled_DeprecatedButKKeptToAvoidWeirdBurstIssue;
	[FieldOffset(7)]
	[MarshalAs(4)]
	public bool AllProgressionUnlocked;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool UnlockAllVBloodsOnLaunch;
	[FieldOffset(9)]
	[MarshalAs(4)]
	public bool PlayersInvulnerabilityEnabled;
	[FieldOffset(10)]
	[MarshalAs(4)]
	public bool DayNightCycleDisabled;
	[FieldOffset(11)]
	[MarshalAs(4)]
	public bool NPCsDisabled;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool GlobalCastleTerritoryEnabled;
	[FieldOffset(13)]
	[MarshalAs(4)]
	public bool BuildingPlacementRestrictionsDisabled;
	[FieldOffset(14)]
	[MarshalAs(4)]
	public bool FreeBuildingPlacementEnabled;
	[FieldOffset(15)]
	[MarshalAs(4)]
	public bool BuildingReplacementDisabled;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool FloorPlacementRestrictionsDisabled;
	[FieldOffset(17)]
	[MarshalAs(4)]
	public bool AllWaypointsUnlocked;
	[FieldOffset(18)]
	[MarshalAs(4)]
	public bool AggroDisabled;
	[FieldOffset(19)]
	[MarshalAs(4)]
	public bool DropsDisabled;
	[FieldOffset(20)]
	[MarshalAs(4)]
	public bool TileCollisionDisabled;
	[FieldOffset(21)]
	[MarshalAs(4)]
	public bool DynamicCollisionDisabled;
	[FieldOffset(22)]
	[MarshalAs(4)]
	public bool DynamicCloudsDisabled;
	[FieldOffset(23)]
	[MarshalAs(4)]
	public bool HitEffectsDisabled;
	[FieldOffset(24)]
	[MarshalAs(4)]
	public bool RoofGenerationEnabled;
	[FieldOffset(25)]
	[MarshalAs(4)]
	public bool FeedWoundedRequirementDisabled;
	[FieldOffset(26)]
	[MarshalAs(4)]
	public bool UseSunblockerChecksForFly;
	[FieldOffset(27)]
	[MarshalAs(4)]
	public bool CastleLimitsDisabled;
	[FieldOffset(28)]
	[MarshalAs(4)]
	public bool CastleDragBuildingEnabled;
	[FieldOffset(29)]
	[MarshalAs(4)]
	public bool DisableProjectileHeightPrediction;
	[FieldOffset(30)]
	[MarshalAs(4)]
	public bool UseDeathSequencesInsteadOfRagdolls;
	[FieldOffset(31)]
	[MarshalAs(4)]
	public bool DisableDebugEvents;
	[FieldOffset(32)]
	[MarshalAs(4)]
	public bool AdminOnlyDebugEvents;
	[FieldOffset(33)]
	[MarshalAs(4)]
	public bool EveryoneIsAdmin;
	[FieldOffset(34)]
	[MarshalAs(4)]
	public bool CastleHeartBloodEssenceDisabled;
	[FieldOffset(35)]
	[MarshalAs(4)]
	public bool AiCastsDisabled;
	[FieldOffset(36)]
	[MarshalAs(4)]
	public bool LightningStrikesDisabled;
	[FieldOffset(37)]
	[MarshalAs(4)]
	public bool VbloodGhostsDisabled;
	[FieldOffset(38)]
	[MarshalAs(4)]
	public bool ServantTimersDisabled;
	[FieldOffset(39)]
	[MarshalAs(4)]
	public bool BuildingProximityRequirementDisabled;
	[FieldOffset(40)]
	[MarshalAs(4)]
	public bool DebugTrophies;
	[FieldOffset(41)]
	public PlacementLogLevel PlacementLogLevel;
	[FieldOffset(42)]
	[MarshalAs(4)]
	public bool _Initialized;
}
