---
nav_exclude: true
search_exclude: false
---

# GiveAchievementOnItemCraft

```csharp
public struct GiveAchievementOnItemCraft
{
	static GiveAchievementOnItemCraft()
	{
		Il2CppClassPointerStore<GiveAchievementOnItemCraft>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "GiveAchievementOnItemCraft");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GiveAchievementOnItemCraft>.NativeClassPtr);
		GiveAchievementOnItemCraft.NativeFieldInfoPtr_Achievement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GiveAchievementOnItemCraft>.NativeClassPtr, "Achievement");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GiveAchievementOnItemCraft>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Achievement;

	public PrefabGUID Achievement;
}
```
