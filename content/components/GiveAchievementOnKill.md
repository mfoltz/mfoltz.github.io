---
nav_exclude: true
search_exclude: true
---

```csharp
public struct GiveAchievementOnKill
{
	static GiveAchievementOnKill()
	{
		Il2CppClassPointerStore<GiveAchievementOnKill>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "GiveAchievementOnKill");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GiveAchievementOnKill>.NativeClassPtr);
		GiveAchievementOnKill.NativeFieldInfoPtr_Achievement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GiveAchievementOnKill>.NativeClassPtr, "Achievement");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GiveAchievementOnKill>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Achievement;

	public PrefabGUID Achievement;
}
```
