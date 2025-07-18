---
nav_exclude: true
search_exclude: true
---

# AchievementSubTaskData

```csharp
public struct AchievementSubTaskData
{
	static AchievementSubTaskData()
	{
		Il2CppClassPointerStore<AchievementSubTaskData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AchievementSubTaskData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AchievementSubTaskData>.NativeClassPtr);
		AchievementSubTaskData.NativeFieldInfoPtr_EntityCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AchievementSubTaskData>.NativeClassPtr, "EntityCategory");
		AchievementSubTaskData.NativeFieldInfoPtr_TaskTitle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AchievementSubTaskData>.NativeClassPtr, "TaskTitle");
		AchievementSubTaskData.NativeFieldInfoPtr_PrefabReference = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AchievementSubTaskData>.NativeClassPtr, "PrefabReference");
		AchievementSubTaskData.NativeFieldInfoPtr_TechReference = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AchievementSubTaskData>.NativeClassPtr, "TechReference");
		AchievementSubTaskData.NativeFieldInfoPtr_RequiredCompletedCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AchievementSubTaskData>.NativeClassPtr, "RequiredCompletedCount");
		AchievementSubTaskData.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AchievementSubTaskData>.NativeClassPtr, "Condition");
		AchievementSubTaskData.NativeFieldInfoPtr_ProgressType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AchievementSubTaskData>.NativeClassPtr, "ProgressType");
		AchievementSubTaskData.NativeFieldInfoPtr_ProgressLinkType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AchievementSubTaskData>.NativeClassPtr, "ProgressLinkType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AchievementSubTaskData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EntityCategory;
	private static readonly IntPtr NativeFieldInfoPtr_TaskTitle;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabReference;
	private static readonly IntPtr NativeFieldInfoPtr_TechReference;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredCompletedCount;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_ProgressType;
	private static readonly IntPtr NativeFieldInfoPtr_ProgressLinkType;

	public EntityCategory EntityCategory;

	public LocalizationKey TaskTitle;

	public PrefabIdentifier PrefabReference;

	public PrefabIdentifier TechReference;

	public int RequiredCompletedCount;

	public BlobAssetReference<ConditionBlob> Condition;

	public AchievementProgressType ProgressType;

	public AchievementProgressLinkType ProgressLinkType;
}
```

## Server Systems

- [ProgressAchievementSystem](/systems/server/ProgressAchievementSystem)
