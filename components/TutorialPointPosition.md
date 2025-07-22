---
nav_exclude: true
search_exclude: false
---

# TutorialPointPosition

```csharp
public struct TutorialPointPosition
{
	static TutorialPointPosition()
	{
		Il2CppClassPointerStore<TutorialPointPosition>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TutorialPointPosition");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TutorialPointPosition>.NativeClassPtr);
		TutorialPointPosition.NativeFieldInfoPtr_Objective = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TutorialPointPosition>.NativeClassPtr, "Objective");
		TutorialPointPosition.NativeFieldInfoPtr_TriggerRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TutorialPointPosition>.NativeClassPtr, "TriggerRange");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TutorialPointPosition>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Objective;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerRange;

	public TutorialObjectiveType Objective;

	public float TriggerRange;
}
```
