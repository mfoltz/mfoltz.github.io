---
nav_exclude: true
search_exclude: true
---

# AchievementOwner

```csharp
public struct AchievementOwner
{
	static AchievementOwner()
	{
		Il2CppClassPointerStore<AchievementOwner>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AchievementOwner");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AchievementOwner>.NativeClassPtr);
		AchievementOwner.NativeFieldInfoPtr_AchievementDataPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AchievementOwner>.NativeClassPtr, "AchievementDataPrefab");
		AchievementOwner.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AchievementOwner>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AchievementOwner>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AchievementDataPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;

	public PrefabGUID AchievementDataPrefab;

	public NetworkedEntity Entity;
}
```

## Server Systems

- [ProjectM.InitializeAchievementDataSystem](/systems/ProjectM.InitializeAchievementDataSystem)
