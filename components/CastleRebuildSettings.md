---
nav_exclude: true
search_exclude: true
---

# CastleRebuildSettings

```csharp
public struct CastleRebuildSettings
{
	static CastleRebuildSettings()
	{
		Il2CppClassPointerStore<CastleRebuildSettings>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleRebuildSettings");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildSettings>.NativeClassPtr);
		CastleRebuildSettings.NativeFieldInfoPtr_TransferContainer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildSettings>.NativeClassPtr, "TransferContainer");
		CastleRebuildSettings.NativeFieldInfoPtr_TimePerTileModel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildSettings>.NativeClassPtr, "TimePerTileModel");
		CastleRebuildSettings.NativeFieldInfoPtr_DelayBeforeStart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildSettings>.NativeClassPtr, "DelayBeforeStart");
		CastleRebuildSettings.NativeFieldInfoPtr_DelayAfterDone = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildSettings>.NativeClassPtr, "DelayAfterDone");
		CastleRebuildSettings.NativeFieldInfoPtr_JournalQuest = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildSettings>.NativeClassPtr, "JournalQuest");
		CastleRebuildSettings.NativeFieldInfoPtr_TransferSequenceStart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildSettings>.NativeClassPtr, "TransferSequenceStart");
		CastleRebuildSettings.NativeFieldInfoPtr_TransferSequenceEnd = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildSettings>.NativeClassPtr, "TransferSequenceEnd");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildSettings>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TransferContainer;
	private static readonly IntPtr NativeFieldInfoPtr_TimePerTileModel;
	private static readonly IntPtr NativeFieldInfoPtr_DelayBeforeStart;
	private static readonly IntPtr NativeFieldInfoPtr_DelayAfterDone;
	private static readonly IntPtr NativeFieldInfoPtr_JournalQuest;
	private static readonly IntPtr NativeFieldInfoPtr_TransferSequenceStart;
	private static readonly IntPtr NativeFieldInfoPtr_TransferSequenceEnd;

	public PrefabGUID TransferContainer;

	public float TimePerTileModel;

	public float DelayBeforeStart;

	public float DelayAfterDone;

	public CastleRebuildJournalQuest JournalQuest;

	public SequenceGUID TransferSequenceStart;

	public SequenceGUID TransferSequenceEnd;
}
```
