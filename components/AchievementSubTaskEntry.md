---
nav_exclude: true
search_exclude: false
---

# AchievementSubTaskEntry

```csharp
public struct AchievementSubTaskEntry
{
	static AchievementSubTaskEntry()
	{
		Il2CppClassPointerStore<AchievementSubTaskEntry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AchievementSubTaskEntry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AchievementSubTaskEntry>.NativeClassPtr);
		AchievementSubTaskEntry.NativeFieldInfoPtr_PrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AchievementSubTaskEntry>.NativeClassPtr, "PrefabGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AchievementSubTaskEntry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGuid;

	public PrefabGUID PrefabGuid;
}
```

## Server Systems

- [ProgressAchievementSystem](/systems/server/ProgressAchievementSystem)
