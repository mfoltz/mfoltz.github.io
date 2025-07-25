---
nav_exclude: true
search_exclude: true
---

# GeneralGameplayCollection

```csharp
public struct GeneralGameplayCollection
{
	static GeneralGameplayCollection()
	{
		Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "GeneralGameplayCollection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr);
		GeneralGameplayCollection.NativeFieldInfoPtr_LKey_PerformanceInfoMessage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "LKey_PerformanceInfoMessage");
		GeneralGameplayCollection.NativeFieldInfoPtr_LKey_ServerIsRestartingMessage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "LKey_ServerIsRestartingMessage");
		GeneralGameplayCollection.NativeFieldInfoPtr_LKey_ServerFailedSavingMessage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "LKey_ServerFailedSavingMessage");
		GeneralGameplayCollection.NativeFieldInfoPtr_LKey_AFKWarningMessage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "LKey_AFKWarningMessage");
		GeneralGameplayCollection.NativeFieldInfoPtr_LKey_ServerQAMessage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "LKey_ServerQAMessage");
		GeneralGameplayCollection.NativeFieldInfoPtr_LKey_ClientQAMessage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "LKey_ClientQAMessage");
		GeneralGameplayCollection.NativeFieldInfoPtr_TimeLocalizationKeys = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "TimeLocalizationKeys");
		GeneralGameplayCollection.NativeFieldInfoPtr_DraculaChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "DraculaChunk");
		GeneralGameplayCollection.NativeFieldInfoPtr_DraculaChunkVictory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "DraculaChunkVictory");
		GeneralGameplayCollection.NativeFieldInfoPtr_NetworkedWarEventPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "NetworkedWarEventPrefabGuid");
		GeneralGameplayCollection.NativeFieldInfoPtr_ChatQuips = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "ChatQuips");
		GeneralGameplayCollection.NativeFieldInfoPtr_LKey_TimeSinceAwakenedStat = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "LKey_TimeSinceAwakenedStat");
		GeneralGameplayCollection.NativeFieldInfoPtr_LKey_ActiveTimeStat = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "LKey_ActiveTimeStat");
		GeneralGameplayCollection.NativeFieldInfoPtr_LKey_UnitKillsStat = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "LKey_UnitKillsStat");
		GeneralGameplayCollection.NativeFieldInfoPtr_LKey_VBloodKillsStat = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "LKey_VBloodKillsStat");
		GeneralGameplayCollection.NativeFieldInfoPtr_LKey_DeathsStat = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "LKey_DeathsStat");
		GeneralGameplayCollection.NativeFieldInfoPtr_LKey_DistanceTravelledStat = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "LKey_DistanceTravelledStat");
		GeneralGameplayCollection.NativeFieldInfoPtr_LKey_BloodConsumedStat = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, "LKey_BloodConsumedStat");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GeneralGameplayCollection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LKey_PerformanceInfoMessage;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_ServerIsRestartingMessage;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_ServerFailedSavingMessage;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_AFKWarningMessage;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_ServerQAMessage;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_ClientQAMessage;
	private static readonly IntPtr NativeFieldInfoPtr_TimeLocalizationKeys;
	private static readonly IntPtr NativeFieldInfoPtr_DraculaChunk;
	private static readonly IntPtr NativeFieldInfoPtr_DraculaChunkVictory;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkedWarEventPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ChatQuips;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_TimeSinceAwakenedStat;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_ActiveTimeStat;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_UnitKillsStat;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_VBloodKillsStat;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_DeathsStat;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_DistanceTravelledStat;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_BloodConsumedStat;

	public LocalizationKey LKey_PerformanceInfoMessage;

	public LocalizationKey LKey_ServerIsRestartingMessage;

	public LocalizationKey LKey_ServerFailedSavingMessage;

	public LocalizationKey LKey_AFKWarningMessage;

	public LocalizationKey LKey_ServerQAMessage;

	public LocalizationKey LKey_ClientQAMessage;

	public TimeLocalizationKeys TimeLocalizationKeys;

	public TerrainChunk DraculaChunk;

	public TerrainChunk DraculaChunkVictory;

	public PrefabGUID NetworkedWarEventPrefabGuid;

	public FixedList512Bytes<ChatQuip> ChatQuips;

	public LocalizationKey LKey_TimeSinceAwakenedStat;

	public LocalizationKey LKey_ActiveTimeStat;

	public LocalizationKey LKey_UnitKillsStat;

	public LocalizationKey LKey_VBloodKillsStat;

	public LocalizationKey LKey_DeathsStat;

	public LocalizationKey LKey_DistanceTravelledStat;

	public LocalizationKey LKey_BloodConsumedStat;
}
```
