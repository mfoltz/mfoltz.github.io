---
nav_exclude: true
search_exclude: true
---

# ProgressAchievementOnItemGain

```csharp
[StructLayout(2)]
public struct ProgressAchievementOnItemGain
{
	static ProgressAchievementOnItemGain()
	{
		Il2CppClassPointerStore<ProgressAchievementOnItemGain>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ProgressAchievementOnItemGain");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProgressAchievementOnItemGain>.NativeClassPtr);
		ProgressAchievementOnItemGain.NativeFieldInfoPtr_Achievement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressAchievementOnItemGain>.NativeClassPtr, "Achievement");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProgressAchievementOnItemGain>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Achievement;
	[FieldOffset(0)]
	public PrefabGUID Achievement;
}
