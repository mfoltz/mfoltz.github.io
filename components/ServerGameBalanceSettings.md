---
nav_exclude: true
search_exclude: true
---

# ServerGameBalanceSettings

```csharp
[StructLayout(2)]
public struct ServerGameBalanceSettings
{
	static ServerGameBalanceSettings()
	{
		Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ServerGameBalanceSettings");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr);
		ServerGameBalanceSettings.NativeFieldInfoPtr_API_Version = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "API_Version");
		ServerGameBalanceSettings.NativeFieldInfoPtr_Version = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "Version");
		ServerGameBalanceSettings.NativeFieldInfoPtr_UnlockedResearch = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "UnlockedResearch");
		ServerGameBalanceSettings.NativeFieldInfoPtr_OverrideVBloodUnitSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "OverrideVBloodUnitSettings");
		ServerGameBalanceSettings.NativeFieldInfoPtr_UnlockedAchievements = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "UnlockedAchievements");
		ServerGameBalanceSettings.NativeFieldInfoPtr_CastleStatModifiers_Global = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "CastleStatModifiers_Global");
		ServerGameBalanceSettings.NativeFieldInfoPtr_StarterEquipmentId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "StarterEquipmentId");
		ServerGameBalanceSettings.NativeFieldInfoPtr_StarterResourcesId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "StarterResourcesId");
		ServerGameBalanceSettings.NativeFieldInfoPtr_InactivityKillTimeMin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "InactivityKillTimeMin");
		ServerGameBalanceSettings.NativeFieldInfoPtr_InactivityKillTimeMax = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "InactivityKillTimeMax");
		ServerGameBalanceSettings.NativeFieldInfoPtr_InactivityKillSafeTimeAddition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "InactivityKillSafeTimeAddition");
		ServerGameBalanceSettings.NativeFieldInfoPtr_DisableDisconnectedDeadTimer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "DisableDisconnectedDeadTimer");
		ServerGameBalanceSettings.NativeFieldInfoPtr_CastleRaidProtectionTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "CastleRaidProtectionTime");
		ServerGameBalanceSettings.NativeFieldInfoPtr_CastleRelocationCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "CastleRelocationCooldown");
		ServerGameBalanceSettings.NativeFieldInfoPtr_MAX_CASTLE_RAID_PROTECTION_TIME = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "MAX_CASTLE_RAID_PROTECTION_TIME");
		ServerGameBalanceSettings.NativeFieldInfoPtr_MAX_CASTLE_RELOCATION_COOLDOWN_TIME = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "MAX_CASTLE_RELOCATION_COOLDOWN_TIME");
		ServerGameBalanceSettings.NativeFieldInfoPtr_GameTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "GameTime");
		ServerGameBalanceSettings.NativeFieldInfoPtr_UnitModifiers_Global = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "UnitModifiers_Global");
		ServerGameBalanceSettings.NativeFieldInfoPtr_UnitModifiers_VBlood = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "UnitModifiers_VBlood");
		ServerGameBalanceSettings.NativeFieldInfoPtr_VampireModifiers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "VampireModifiers");
		ServerGameBalanceSettings.NativeFieldInfoPtr_EquipmentModifiers_Global = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "EquipmentModifiers_Global");
		ServerGameBalanceSettings.NativeFieldInfoPtr_WarEventSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "WarEventSettings");
		ServerGameBalanceSettings.NativeFieldInfoPtr_JournalVBloodSourceUnitMaxDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "JournalVBloodSourceUnitMaxDistance");
		ServerGameBalanceSettings.NativeFieldInfoPtr_PvPVampireRespawnModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "PvPVampireRespawnModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_InventoryStacksModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "InventoryStacksModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_DropTableModifier_General = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "DropTableModifier_General");
		ServerGameBalanceSettings.NativeFieldInfoPtr_DropTableModifier_StygianShards = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "DropTableModifier_StygianShards");
		ServerGameBalanceSettings.NativeFieldInfoPtr_DropTableModifier_Missions = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "DropTableModifier_Missions");
		ServerGameBalanceSettings.NativeFieldInfoPtr_MaterialYieldModifier_Global = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "MaterialYieldModifier_Global");
		ServerGameBalanceSettings.NativeFieldInfoPtr_BloodEssenceYieldModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "BloodEssenceYieldModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_SoulShard_DurabilityLossRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "SoulShard_DurabilityLossRate");
		ServerGameBalanceSettings.NativeFieldInfoPtr_BloodDrainModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "BloodDrainModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_DurabilityDrainModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "DurabilityDrainModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_GarlicAreaStrengthModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "GarlicAreaStrengthModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_HolyAreaStrengthModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "HolyAreaStrengthModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_SilverStrengthModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "SilverStrengthModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_SunDamageModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "SunDamageModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_CastleBloodEssenceDrainModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "CastleBloodEssenceDrainModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_CastleDecayRateModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "CastleDecayRateModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_CastleSiegeTimer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "CastleSiegeTimer");
		ServerGameBalanceSettings.NativeFieldInfoPtr_CastleUnderAttackTimer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "CastleUnderAttackTimer");
		ServerGameBalanceSettings.NativeFieldInfoPtr_CastleRaidTimer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "CastleRaidTimer");
		ServerGameBalanceSettings.NativeFieldInfoPtr_CastleForfeitFreeClaimTimer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "CastleForfeitFreeClaimTimer");
		ServerGameBalanceSettings.NativeFieldInfoPtr_BuildCostModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "BuildCostModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_RecipeCostModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "RecipeCostModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_CraftRateModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "CraftRateModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_ResearchCostModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "ResearchCostModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_RefinementCostModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "RefinementCostModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_RefinementRateModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "RefinementRateModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_ResearchTimeModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "ResearchTimeModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_DismantleResourceModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "DismantleResourceModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_Death_DurabilityFactorLoss = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "Death_DurabilityFactorLoss");
		ServerGameBalanceSettings.NativeFieldInfoPtr_Death_DurabilityLossFactorAsResources = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "Death_DurabilityLossFactorAsResources");
		ServerGameBalanceSettings.NativeFieldInfoPtr_ServantConvertRateModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "ServantConvertRateModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_RepairCostModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "RepairCostModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_Trader_StockModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "Trader_StockModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_Trader_PriceModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "Trader_PriceModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_Trader_RestockTimerModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "Trader_RestockTimerModifier");
		ServerGameBalanceSettings.NativeFieldInfoPtr_DisconnectedSunImmunityTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "DisconnectedSunImmunityTime");
		ServerGameBalanceSettings.NativeFieldInfoPtr_GameDifficulty = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "GameDifficulty");
		ServerGameBalanceSettings.NativeFieldInfoPtr_PvPProtectionMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "PvPProtectionMode");
		ServerGameBalanceSettings.NativeFieldInfoPtr_GameModeType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "GameModeType");
		ServerGameBalanceSettings.NativeFieldInfoPtr_CastleDamageMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "CastleDamageMode");
		ServerGameBalanceSettings.NativeFieldInfoPtr_PlayerDamageMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "PlayerDamageMode");
		ServerGameBalanceSettings.NativeFieldInfoPtr_CastleHeartDamageMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "CastleHeartDamageMode");
		ServerGameBalanceSettings.NativeFieldInfoPtr_SiegeWeaponHealth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "SiegeWeaponHealth");
		ServerGameBalanceSettings.NativeFieldInfoPtr_DeathContainerPermission = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "DeathContainerPermission");
		ServerGameBalanceSettings.NativeFieldInfoPtr_RelicSpawnType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "RelicSpawnType");
		ServerGameBalanceSettings.NativeFieldInfoPtr_PlayerInteractionSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "PlayerInteractionSettings");
		ServerGameBalanceSettings.NativeFieldInfoPtr_CastleMinimumDistanceInFloors = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "CastleMinimumDistanceInFloors");
		ServerGameBalanceSettings.NativeFieldInfoPtr_ClanSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "ClanSize");
		ServerGameBalanceSettings.NativeFieldInfoPtr_InactivityKillTimerMaxItemLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "InactivityKillTimerMaxItemLevel");
		ServerGameBalanceSettings.NativeFieldInfoPtr_StartingProgressionLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "StartingProgressionLevel");
		ServerGameBalanceSettings.NativeFieldInfoPtr_WeaponSlots = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "WeaponSlots");
		ServerGameBalanceSettings.NativeFieldInfoPtr_AllWaypointsUnlocked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "AllWaypointsUnlocked");
		ServerGameBalanceSettings.NativeFieldInfoPtr_AllowGlobalChat = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "AllowGlobalChat");
		ServerGameBalanceSettings.NativeFieldInfoPtr_BloodBoundEquipment = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "BloodBoundEquipment");
		ServerGameBalanceSettings.NativeFieldInfoPtr_FreeCastleDestroy = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "FreeCastleDestroy");
		ServerGameBalanceSettings.NativeFieldInfoPtr_FreeCastleClaim = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "FreeCastleClaim");
		ServerGameBalanceSettings.NativeFieldInfoPtr_FreeCastleRaid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "FreeCastleRaid");
		ServerGameBalanceSettings.NativeFieldInfoPtr_CastleRelocationEnabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "CastleRelocationEnabled");
		ServerGameBalanceSettings.NativeFieldInfoPtr_AnnounceSiegeWeaponSpawn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "AnnounceSiegeWeaponSpawn");
		ServerGameBalanceSettings.NativeFieldInfoPtr_ShowSiegeWeaponMapIcon = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "ShowSiegeWeaponMapIcon");
		ServerGameBalanceSettings.NativeFieldInfoPtr_TeleportBoundItems = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "TeleportBoundItems");
		ServerGameBalanceSettings.NativeFieldInfoPtr_BatBoundItems = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "BatBoundItems");
		ServerGameBalanceSettings.NativeFieldInfoPtr_BatBoundShards = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "BatBoundShards");
		ServerGameBalanceSettings.NativeFieldInfoPtr_CanLootEnemyContainers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "CanLootEnemyContainers");
		ServerGameBalanceSettings.NativeFieldInfoPtr_DisableDisconnectedDeadEnabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "DisableDisconnectedDeadEnabled");
		ServerGameBalanceSettings.NativeFieldInfoPtr_InactivityKillEnabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, "InactivityKillEnabled");
		ServerGameBalanceSettings.NativeMethodInfoPtr_SerializeBase_Private_Static_Void_byref_ServerGameBalanceSettings_byref_NetBufferOut_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, 100667450);
		ServerGameBalanceSettings.NativeMethodInfoPtr_SerializeAdditional_Private_Static_Void_byref_ServerGameBalanceSettings_byref_NetBufferOut_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, 100667451);
		ServerGameBalanceSettings.NativeMethodInfoPtr_Serialize_Public_Static_Void_byref_ServerGameBalanceSettings_byref_NetBufferOut_SerializeType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, 100667452);
		ServerGameBalanceSettings.NativeMethodInfoPtr_DeserializeBase_Public_Static_Void_byref_ServerGameBalanceSettings_byref_NetBufferIn_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, 100667453);
		ServerGameBalanceSettings.NativeMethodInfoPtr_DeserializeAdditional_Public_Static_Void_byref_ServerGameBalanceSettings_byref_NetBufferIn_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, 100667454);
		ServerGameBalanceSettings.NativeMethodInfoPtr_Deserialize_Public_Static_ServerGameBalanceSettings_byref_NetBufferIn_SerializeType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, 100667455);
		ServerGameBalanceSettings.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, 100667456);
		ServerGameBalanceSettings.NativeMethodInfoPtr_Get_Public_Static_ServerGameBalanceSettings_SingletonAccessor_1_ServerGameBalanceSettings_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, 100667457);
		ServerGameBalanceSettings.NativeMethodInfoPtr_IsHardCore_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, 100667458);
		ServerGameBalanceSettings.NativeMethodInfoPtr_IsVampirePvPEnabled_Public_Boolean_TimeZonedDateTime_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, 100667459);
		ServerGameBalanceSettings.NativeMethodInfoPtr_IsCastlePvPEnabled_Public_Boolean_TimeZonedDateTime_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, 100667460);
		ServerGameBalanceSettings.NativeMethodInfoPtr_GetCastlePvPEnabled_Public_CastlePvPEnabledType_TimeZonedDateTime_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, 100667461);
	}
	[CallerCount(5)]
	[CachedScanResults(RefRangeStart = 1096575, RefRangeEnd = 1096580, XrefRangeStart = 1096350, XrefRangeEnd = 1096575, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void SerializeBase([In] ref ServerGameBalanceSettings settings, ref NetBufferOut netBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &settings;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &netBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerGameBalanceSettings.NativeMethodInfoPtr_SerializeBase_Private_Static_Void_byref_ServerGameBalanceSettings_byref_NetBufferOut_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 1096627, RefRangeEnd = 1096630, XrefRangeStart = 1096580, XrefRangeEnd = 1096627, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void SerializeAdditional([In] ref ServerGameBalanceSettings settings, ref NetBufferOut netBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &settings;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &netBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerGameBalanceSettings.NativeMethodInfoPtr_SerializeAdditional_Private_Static_Void_byref_ServerGameBalanceSettings_byref_NetBufferOut_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1096630, XrefRangeEnd = 1096634, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void Serialize([In] ref ServerGameBalanceSettings settings, ref NetBufferOut netBuffer, ServerGameBalanceSettings.SerializeType serializeType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &settings;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &netBuffer;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref serializeType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerGameBalanceSettings.NativeMethodInfoPtr_Serialize_Public_Static_Void_byref_ServerGameBalanceSettings_byref_NetBufferOut_SerializeType_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(5)]
	[CachedScanResults(RefRangeStart = 1096866, RefRangeEnd = 1096871, XrefRangeStart = 1096634, XrefRangeEnd = 1096866, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void DeserializeBase(ref ServerGameBalanceSettings output, ref NetBufferIn netBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &output;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &netBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerGameBalanceSettings.NativeMethodInfoPtr_DeserializeBase_Public_Static_Void_byref_ServerGameBalanceSettings_byref_NetBufferIn_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 1096895, RefRangeEnd = 1096898, XrefRangeStart = 1096871, XrefRangeEnd = 1096895, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void DeserializeAdditional(ref ServerGameBalanceSettings output, ref NetBufferIn netBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &output;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &netBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerGameBalanceSettings.NativeMethodInfoPtr_DeserializeAdditional_Public_Static_Void_byref_ServerGameBalanceSettings_byref_NetBufferIn_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1096898, XrefRangeEnd = 1096903, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static ServerGameBalanceSettings Deserialize(ref NetBufferIn netBuffer, ServerGameBalanceSettings.SerializeType serializeType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref serializeType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerGameBalanceSettings.NativeMethodInfoPtr_Deserialize_Public_Static_ServerGameBalanceSettings_byref_NetBufferIn_SerializeType_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1096969, RefRangeEnd = 1096970, XrefRangeStart = 1096903, XrefRangeEnd = 1096969, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerGameBalanceSettings.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1096970, XrefRangeEnd = 1096975, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static ServerGameBalanceSettings Get(SingletonAccessor<ServerGameBalanceSettings> serverGameBalanceSettings)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref serverGameBalanceSettings;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerGameBalanceSettings.NativeMethodInfoPtr_Get_Public_Static_ServerGameBalanceSettings_SingletonAccessor_1_ServerGameBalanceSettings_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe bool IsHardCore()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerGameBalanceSettings.NativeMethodInfoPtr_IsHardCore_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1096975, XrefRangeEnd = 1096976, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool IsVampirePvPEnabled(TimeZonedDateTime dt)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref dt;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerGameBalanceSettings.NativeMethodInfoPtr_IsVampirePvPEnabled_Public_Boolean_TimeZonedDateTime_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1096977, RefRangeEnd = 1096978, XrefRangeStart = 1096976, XrefRangeEnd = 1096977, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool IsCastlePvPEnabled(TimeZonedDateTime dt)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref dt;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerGameBalanceSettings.NativeMethodInfoPtr_IsCastlePvPEnabled_Public_Boolean_TimeZonedDateTime_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1096978, XrefRangeEnd = 1096979, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe ServerGameBalanceSettings.CastlePvPEnabledType GetCastlePvPEnabled(TimeZonedDateTime dt)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref dt;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServerGameBalanceSettings.NativeMethodInfoPtr_GetCastlePvPEnabled_Public_CastlePvPEnabledType_TimeZonedDateTime_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServerGameBalanceSettings>.NativeClassPtr, ref this));
	}
	public unsafe static int API_Version
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(ServerGameBalanceSettings.NativeFieldInfoPtr_API_Version, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(ServerGameBalanceSettings.NativeFieldInfoPtr_API_Version, (void*)(&value));
		}
	}
	public unsafe static float MAX_CASTLE_RAID_PROTECTION_TIME
	{
		get
		{
			float result;
			IL2CPP.il2cpp_field_static_get_value(ServerGameBalanceSettings.NativeFieldInfoPtr_MAX_CASTLE_RAID_PROTECTION_TIME, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(ServerGameBalanceSettings.NativeFieldInfoPtr_MAX_CASTLE_RAID_PROTECTION_TIME, (void*)(&value));
		}
	}
	public unsafe static float MAX_CASTLE_RELOCATION_COOLDOWN_TIME
	{
		get
		{
			float result;
			IL2CPP.il2cpp_field_static_get_value(ServerGameBalanceSettings.NativeFieldInfoPtr_MAX_CASTLE_RELOCATION_COOLDOWN_TIME, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(ServerGameBalanceSettings.NativeFieldInfoPtr_MAX_CASTLE_RELOCATION_COOLDOWN_TIME, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_API_Version;
	private static readonly IntPtr NativeFieldInfoPtr_Version;
	private static readonly IntPtr NativeFieldInfoPtr_UnlockedResearch;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideVBloodUnitSettings;
	private static readonly IntPtr NativeFieldInfoPtr_UnlockedAchievements;
	private static readonly IntPtr NativeFieldInfoPtr_CastleStatModifiers_Global;
	private static readonly IntPtr NativeFieldInfoPtr_StarterEquipmentId;
	private static readonly IntPtr NativeFieldInfoPtr_StarterResourcesId;
	private static readonly IntPtr NativeFieldInfoPtr_InactivityKillTimeMin;
	private static readonly IntPtr NativeFieldInfoPtr_InactivityKillTimeMax;
	private static readonly IntPtr NativeFieldInfoPtr_InactivityKillSafeTimeAddition;
	private static readonly IntPtr NativeFieldInfoPtr_DisableDisconnectedDeadTimer;
	private static readonly IntPtr NativeFieldInfoPtr_CastleRaidProtectionTime;
	private static readonly IntPtr NativeFieldInfoPtr_CastleRelocationCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_MAX_CASTLE_RAID_PROTECTION_TIME;
	private static readonly IntPtr NativeFieldInfoPtr_MAX_CASTLE_RELOCATION_COOLDOWN_TIME;
	private static readonly IntPtr NativeFieldInfoPtr_GameTime;
	private static readonly IntPtr NativeFieldInfoPtr_UnitModifiers_Global;
	private static readonly IntPtr NativeFieldInfoPtr_UnitModifiers_VBlood;
	private static readonly IntPtr NativeFieldInfoPtr_VampireModifiers;
	private static readonly IntPtr NativeFieldInfoPtr_EquipmentModifiers_Global;
	private static readonly IntPtr NativeFieldInfoPtr_WarEventSettings;
	private static readonly IntPtr NativeFieldInfoPtr_JournalVBloodSourceUnitMaxDistance;
	private static readonly IntPtr NativeFieldInfoPtr_PvPVampireRespawnModifier;
	private static readonly IntPtr NativeFieldInfoPtr_InventoryStacksModifier;
	private static readonly IntPtr NativeFieldInfoPtr_DropTableModifier_General;
	private static readonly IntPtr NativeFieldInfoPtr_DropTableModifier_StygianShards;
	private static readonly IntPtr NativeFieldInfoPtr_DropTableModifier_Missions;
	private static readonly IntPtr NativeFieldInfoPtr_MaterialYieldModifier_Global;
	private static readonly IntPtr NativeFieldInfoPtr_BloodEssenceYieldModifier;
	private static readonly IntPtr NativeFieldInfoPtr_SoulShard_DurabilityLossRate;
	private static readonly IntPtr NativeFieldInfoPtr_BloodDrainModifier;
	private static readonly IntPtr NativeFieldInfoPtr_DurabilityDrainModifier;
	private static readonly IntPtr NativeFieldInfoPtr_GarlicAreaStrengthModifier;
	private static readonly IntPtr NativeFieldInfoPtr_HolyAreaStrengthModifier;
	private static readonly IntPtr NativeFieldInfoPtr_SilverStrengthModifier;
	private static readonly IntPtr NativeFieldInfoPtr_SunDamageModifier;
	private static readonly IntPtr NativeFieldInfoPtr_CastleBloodEssenceDrainModifier;
	private static readonly IntPtr NativeFieldInfoPtr_CastleDecayRateModifier;
	private static readonly IntPtr NativeFieldInfoPtr_CastleSiegeTimer;
	private static readonly IntPtr NativeFieldInfoPtr_CastleUnderAttackTimer;
	private static readonly IntPtr NativeFieldInfoPtr_CastleRaidTimer;
	private static readonly IntPtr NativeFieldInfoPtr_CastleForfeitFreeClaimTimer;
	private static readonly IntPtr NativeFieldInfoPtr_BuildCostModifier;
	private static readonly IntPtr NativeFieldInfoPtr_RecipeCostModifier;
	private static readonly IntPtr NativeFieldInfoPtr_CraftRateModifier;
	private static readonly IntPtr NativeFieldInfoPtr_ResearchCostModifier;
	private static readonly IntPtr NativeFieldInfoPtr_RefinementCostModifier;
	private static readonly IntPtr NativeFieldInfoPtr_RefinementRateModifier;
	private static readonly IntPtr NativeFieldInfoPtr_ResearchTimeModifier;
	private static readonly IntPtr NativeFieldInfoPtr_DismantleResourceModifier;
	private static readonly IntPtr NativeFieldInfoPtr_Death_DurabilityFactorLoss;
	private static readonly IntPtr NativeFieldInfoPtr_Death_DurabilityLossFactorAsResources;
	private static readonly IntPtr NativeFieldInfoPtr_ServantConvertRateModifier;
	private static readonly IntPtr NativeFieldInfoPtr_RepairCostModifier;
	private static readonly IntPtr NativeFieldInfoPtr_Trader_StockModifier;
	private static readonly IntPtr NativeFieldInfoPtr_Trader_PriceModifier;
	private static readonly IntPtr NativeFieldInfoPtr_Trader_RestockTimerModifier;
	private static readonly IntPtr NativeFieldInfoPtr_DisconnectedSunImmunityTime;
	private static readonly IntPtr NativeFieldInfoPtr_GameDifficulty;
	private static readonly IntPtr NativeFieldInfoPtr_PvPProtectionMode;
	private static readonly IntPtr NativeFieldInfoPtr_GameModeType;
	private static readonly IntPtr NativeFieldInfoPtr_CastleDamageMode;
	private static readonly IntPtr NativeFieldInfoPtr_PlayerDamageMode;
	private static readonly IntPtr NativeFieldInfoPtr_CastleHeartDamageMode;
	private static readonly IntPtr NativeFieldInfoPtr_SiegeWeaponHealth;
	private static readonly IntPtr NativeFieldInfoPtr_DeathContainerPermission;
	private static readonly IntPtr NativeFieldInfoPtr_RelicSpawnType;
	private static readonly IntPtr NativeFieldInfoPtr_PlayerInteractionSettings;
	private static readonly IntPtr NativeFieldInfoPtr_CastleMinimumDistanceInFloors;
	private static readonly IntPtr NativeFieldInfoPtr_ClanSize;
	private static readonly IntPtr NativeFieldInfoPtr_InactivityKillTimerMaxItemLevel;
	private static readonly IntPtr NativeFieldInfoPtr_StartingProgressionLevel;
	private static readonly IntPtr NativeFieldInfoPtr_WeaponSlots;
	private static readonly IntPtr NativeFieldInfoPtr_AllWaypointsUnlocked;
	private static readonly IntPtr NativeFieldInfoPtr_AllowGlobalChat;
	private static readonly IntPtr NativeFieldInfoPtr_BloodBoundEquipment;
	private static readonly IntPtr NativeFieldInfoPtr_FreeCastleDestroy;
	private static readonly IntPtr NativeFieldInfoPtr_FreeCastleClaim;
	private static readonly IntPtr NativeFieldInfoPtr_FreeCastleRaid;
	private static readonly IntPtr NativeFieldInfoPtr_CastleRelocationEnabled;
	private static readonly IntPtr NativeFieldInfoPtr_AnnounceSiegeWeaponSpawn;
	private static readonly IntPtr NativeFieldInfoPtr_ShowSiegeWeaponMapIcon;
	private static readonly IntPtr NativeFieldInfoPtr_TeleportBoundItems;
	private static readonly IntPtr NativeFieldInfoPtr_BatBoundItems;
	private static readonly IntPtr NativeFieldInfoPtr_BatBoundShards;
	private static readonly IntPtr NativeFieldInfoPtr_CanLootEnemyContainers;
	private static readonly IntPtr NativeFieldInfoPtr_DisableDisconnectedDeadEnabled;
	private static readonly IntPtr NativeFieldInfoPtr_InactivityKillEnabled;
	private static readonly IntPtr NativeMethodInfoPtr_SerializeBase_Private_Static_Void_byref_ServerGameBalanceSettings_byref_NetBufferOut_0;
	private static readonly IntPtr NativeMethodInfoPtr_SerializeAdditional_Private_Static_Void_byref_ServerGameBalanceSettings_byref_NetBufferOut_0;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Static_Void_byref_ServerGameBalanceSettings_byref_NetBufferOut_SerializeType_0;
	private static readonly IntPtr NativeMethodInfoPtr_DeserializeBase_Public_Static_Void_byref_ServerGameBalanceSettings_byref_NetBufferIn_0;
	private static readonly IntPtr NativeMethodInfoPtr_DeserializeAdditional_Public_Static_Void_byref_ServerGameBalanceSettings_byref_NetBufferIn_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Static_ServerGameBalanceSettings_byref_NetBufferIn_SerializeType_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_Get_Public_Static_ServerGameBalanceSettings_SingletonAccessor_1_ServerGameBalanceSettings_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsHardCore_Public_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsVampirePvPEnabled_Public_Boolean_TimeZonedDateTime_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsCastlePvPEnabled_Public_Boolean_TimeZonedDateTime_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetCastlePvPEnabled_Public_CastlePvPEnabledType_TimeZonedDateTime_0;
	[FieldOffset(0)]
	public int Version;
	[FieldOffset(8)]
	public FixedList64Bytes<int> UnlockedResearch;
	[FieldOffset(72)]
	public FixedList512Bytes<VBloodUnitSetting.StructData> OverrideVBloodUnitSettings;
	[FieldOffset(584)]
	public FixedList512Bytes<int> UnlockedAchievements;
	[FieldOffset(1096)]
	public CastleStatModifiers CastleStatModifiers_Global;
	[FieldOffset(1176)]
	public int StarterEquipmentId;
	[FieldOffset(1180)]
	public int StarterResourcesId;
	[FieldOffset(1184)]
	public int InactivityKillTimeMin;
	[FieldOffset(1188)]
	public int InactivityKillTimeMax;
	[FieldOffset(1192)]
	public int InactivityKillSafeTimeAddition;
	[FieldOffset(1196)]
	public int DisableDisconnectedDeadTimer;
	[FieldOffset(1200)]
	public float CastleRaidProtectionTime;
	[FieldOffset(1204)]
	public float CastleRelocationCooldown;
	[FieldOffset(1208)]
	public GameTimeModifiers.StructData GameTime;
	[FieldOffset(1218)]
	public UnitStatModifiers.StructData UnitModifiers_Global;
	[FieldOffset(1224)]
	public UnitStatModifiers.StructData UnitModifiers_VBlood;
	[FieldOffset(1230)]
	public VampireStatModifiers.StructData VampireModifiers;
	[FieldOffset(1244)]
	public EquipmentStatModifiers.StructData EquipmentModifiers_Global;
	[FieldOffset(1256)]
	public WarEventGameSettings.StructData WarEventSettings;
	[FieldOffset(1308)]
	public half JournalVBloodSourceUnitMaxDistance;
	[FieldOffset(1310)]
	public half PvPVampireRespawnModifier;
	[FieldOffset(1312)]
	public half InventoryStacksModifier;
	[FieldOffset(1314)]
	public half DropTableModifier_General;
	[FieldOffset(1316)]
	public half DropTableModifier_StygianShards;
	[FieldOffset(1318)]
	public half DropTableModifier_Missions;
	[FieldOffset(1320)]
	public half MaterialYieldModifier_Global;
	[FieldOffset(1322)]
	public half BloodEssenceYieldModifier;
	[FieldOffset(1324)]
	public half SoulShard_DurabilityLossRate;
	[FieldOffset(1326)]
	public half BloodDrainModifier;
	[FieldOffset(1328)]
	public half DurabilityDrainModifier;
	[FieldOffset(1330)]
	public half GarlicAreaStrengthModifier;
	[FieldOffset(1332)]
	public half HolyAreaStrengthModifier;
	[FieldOffset(1334)]
	public half SilverStrengthModifier;
	[FieldOffset(1336)]
	public half SunDamageModifier;
	[FieldOffset(1338)]
	public half CastleBloodEssenceDrainModifier;
	[FieldOffset(1340)]
	public half CastleDecayRateModifier;
	[FieldOffset(1342)]
	public half CastleSiegeTimer;
	[FieldOffset(1344)]
	public half CastleUnderAttackTimer;
	[FieldOffset(1346)]
	public half CastleRaidTimer;
	[FieldOffset(1348)]
	public half CastleForfeitFreeClaimTimer;
	[FieldOffset(1350)]
	public half BuildCostModifier;
	[FieldOffset(1352)]
	public half RecipeCostModifier;
	[FieldOffset(1354)]
	public half CraftRateModifier;
	[FieldOffset(1356)]
	public half ResearchCostModifier;
	[FieldOffset(1358)]
	public half RefinementCostModifier;
	[FieldOffset(1360)]
	public half RefinementRateModifier;
	[FieldOffset(1362)]
	public half ResearchTimeModifier;
	[FieldOffset(1364)]
	public half DismantleResourceModifier;
	[FieldOffset(1366)]
	public half Death_DurabilityFactorLoss;
	[FieldOffset(1368)]
	public half Death_DurabilityLossFactorAsResources;
	[FieldOffset(1370)]
	public half ServantConvertRateModifier;
	[FieldOffset(1372)]
	public half RepairCostModifier;
	[FieldOffset(1374)]
	public half Trader_StockModifier;
	[FieldOffset(1376)]
	public half Trader_PriceModifier;
	[FieldOffset(1378)]
	public half Trader_RestockTimerModifier;
	[FieldOffset(1380)]
	public half DisconnectedSunImmunityTime;
	[FieldOffset(1382)]
	public GameDifficulty GameDifficulty;
	[FieldOffset(1383)]
	public PvPProtectionMode PvPProtectionMode;
	[FieldOffset(1384)]
	public GameModeType GameModeType;
	[FieldOffset(1385)]
	public CastleDamageMode CastleDamageMode;
	[FieldOffset(1386)]
	public PlayerDamageMode PlayerDamageMode;
	[FieldOffset(1387)]
	public CastleHeartDamageMode CastleHeartDamageMode;
	[FieldOffset(1388)]
	public SiegeWeaponHealth SiegeWeaponHealth;
	[FieldOffset(1389)]
	public DeathContainerPermission DeathContainerPermission;
	[FieldOffset(1390)]
	public RelicSpawnType RelicSpawnType;
	[FieldOffset(1391)]
	public PlayerInteractionSettings.StructData PlayerInteractionSettings;
	[FieldOffset(1408)]
	public byte CastleMinimumDistanceInFloors;
	[FieldOffset(1409)]
	public byte ClanSize;
	[FieldOffset(1410)]
	public byte InactivityKillTimerMaxItemLevel;
	[FieldOffset(1411)]
	public byte StartingProgressionLevel;
	[FieldOffset(1412)]
	public byte WeaponSlots;
	[FieldOffset(1413)]
	[MarshalAs(4)]
	public bool AllWaypointsUnlocked;
	[FieldOffset(1414)]
	[MarshalAs(4)]
	public bool AllowGlobalChat;
	[FieldOffset(1415)]
	[MarshalAs(4)]
	public bool BloodBoundEquipment;
	[FieldOffset(1416)]
	[MarshalAs(4)]
	public bool FreeCastleDestroy;
	[FieldOffset(1417)]
	[MarshalAs(4)]
	public bool FreeCastleClaim;
	[FieldOffset(1418)]
	[MarshalAs(4)]
	public bool FreeCastleRaid;
	[FieldOffset(1419)]
	[MarshalAs(4)]
	public bool CastleRelocationEnabled;
	[FieldOffset(1420)]
	[MarshalAs(4)]
	public bool AnnounceSiegeWeaponSpawn;
	[FieldOffset(1421)]
	[MarshalAs(4)]
	public bool ShowSiegeWeaponMapIcon;
	[FieldOffset(1422)]
	[MarshalAs(4)]
	public bool TeleportBoundItems;
	[FieldOffset(1423)]
	[MarshalAs(4)]
	public bool BatBoundItems;
	[FieldOffset(1424)]
	[MarshalAs(4)]
	public bool BatBoundShards;
	[FieldOffset(1425)]
	[MarshalAs(4)]
	public bool CanLootEnemyContainers;
	[FieldOffset(1426)]
	[MarshalAs(4)]
	public bool DisableDisconnectedDeadEnabled;
	[FieldOffset(1427)]
	[MarshalAs(4)]
	public bool InactivityKillEnabled;
	public enum SerializeType
	{
		Whole,
		Limited
	}
	public enum CastlePvPEnabledType
	{
		Enabled = 1,
		Disabled_Never,
		Disabled_OutsideOfTimeSpan
	}
}
