---
nav_exclude: true
search_exclude: true
---

# ProgressAchievementEventV2

```csharp
public struct ProgressAchievementEventV2
{
	static ProgressAchievementEventV2()
	{
		Il2CppClassPointerStore<ProgressAchievementEventV2>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ProgressAchievementEventV2");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProgressAchievementEventV2>.NativeClassPtr);
		ProgressAchievementEventV2.NativeFieldInfoPtr_PrefabReference = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressAchievementEventV2>.NativeClassPtr, "PrefabReference");
		ProgressAchievementEventV2.NativeFieldInfoPtr_User = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressAchievementEventV2>.NativeClassPtr, "User");
		ProgressAchievementEventV2.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressAchievementEventV2>.NativeClassPtr, "Target");
		ProgressAchievementEventV2.NativeFieldInfoPtr_ProgressType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressAchievementEventV2>.NativeClassPtr, "ProgressType");
		ProgressAchievementEventV2.NativeFieldInfoPtr_ProgressSetType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressAchievementEventV2>.NativeClassPtr, "ProgressSetType");
		ProgressAchievementEventV2.NativeFieldInfoPtr_ProgressAmount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressAchievementEventV2>.NativeClassPtr, "ProgressAmount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProgressAchievementEventV2>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabReference;
	private static readonly IntPtr NativeFieldInfoPtr_User;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_ProgressType;
	private static readonly IntPtr NativeFieldInfoPtr_ProgressSetType;
	private static readonly IntPtr NativeFieldInfoPtr_ProgressAmount;

	public PrefabGUID PrefabReference;

	public Entity User;

	public Entity Target;

	public AchievementProgressType ProgressType;

	public AchievementProgressSetType ProgressSetType;

	public int ProgressAmount;
}
```
