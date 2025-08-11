---
nav_exclude: true
search_exclude: true
---

# FeedPrisoner

```csharp
public struct FeedPrisoner
{
	static FeedPrisoner()
	{
		Il2CppClassPointerStore<FeedPrisoner>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "FeedPrisoner");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FeedPrisoner>.NativeClassPtr);
		FeedPrisoner.NativeFieldInfoPtr_RecoverHealth_Min = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedPrisoner>.NativeClassPtr, "RecoverHealth_Min");
		FeedPrisoner.NativeFieldInfoPtr_RecoverHealth_Max = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedPrisoner>.NativeClassPtr, "RecoverHealth_Max");
		FeedPrisoner.NativeFieldInfoPtr_RecoverMisery_Min = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedPrisoner>.NativeClassPtr, "RecoverMisery_Min");
		FeedPrisoner.NativeFieldInfoPtr_RecoverMisery_Max = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedPrisoner>.NativeClassPtr, "RecoverMisery_Max");
		FeedPrisoner.NativeFieldInfoPtr_AlterBloodQuality_Min = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedPrisoner>.NativeClassPtr, "AlterBloodQuality_Min");
		FeedPrisoner.NativeFieldInfoPtr_AlterBloodQuality_Max = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedPrisoner>.NativeClassPtr, "AlterBloodQuality_Max");
		FeedPrisoner.NativeFieldInfoPtr_BuffIncresaeBloodQualitySuccess = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedPrisoner>.NativeClassPtr, "BuffIncresaeBloodQualitySuccess");
		FeedPrisoner.NativeFieldInfoPtr_BuffIncresaeBloodQualityFail = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedPrisoner>.NativeClassPtr, "BuffIncresaeBloodQualityFail");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FeedPrisoner>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RecoverHealth_Min;
	private static readonly IntPtr NativeFieldInfoPtr_RecoverHealth_Max;
	private static readonly IntPtr NativeFieldInfoPtr_RecoverMisery_Min;
	private static readonly IntPtr NativeFieldInfoPtr_RecoverMisery_Max;
	private static readonly IntPtr NativeFieldInfoPtr_AlterBloodQuality_Min;
	private static readonly IntPtr NativeFieldInfoPtr_AlterBloodQuality_Max;
	private static readonly IntPtr NativeFieldInfoPtr_BuffIncresaeBloodQualitySuccess;
	private static readonly IntPtr NativeFieldInfoPtr_BuffIncresaeBloodQualityFail;

	public float RecoverHealth_Min;

	public float RecoverHealth_Max;

	public float RecoverMisery_Min;

	public float RecoverMisery_Max;

	public float AlterBloodQuality_Min;

	public float AlterBloodQuality_Max;

	public PrefabGUID BuffIncresaeBloodQualitySuccess;

	public PrefabGUID BuffIncresaeBloodQualityFail;
}
```
