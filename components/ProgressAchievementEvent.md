---
nav_exclude: true
search_exclude: true
---

# ProgressAchievementEvent

```csharp
public struct ProgressAchievementEvent
{
	static ProgressAchievementEvent()
	{
		Il2CppClassPointerStore<ProgressAchievementEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ProgressAchievementEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProgressAchievementEvent>.NativeClassPtr);
		ProgressAchievementEvent.NativeFieldInfoPtr_Achievement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressAchievementEvent>.NativeClassPtr, "Achievement");
		ProgressAchievementEvent.NativeFieldInfoPtr_User = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressAchievementEvent>.NativeClassPtr, "User");
		ProgressAchievementEvent.NativeFieldInfoPtr_CompleteAmount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressAchievementEvent>.NativeClassPtr, "CompleteAmount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProgressAchievementEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Achievement;
	private static readonly IntPtr NativeFieldInfoPtr_User;
	private static readonly IntPtr NativeFieldInfoPtr_CompleteAmount;

	public PrefabGUID Achievement;

	public Entity User;

	public int CompleteAmount;
}
```
