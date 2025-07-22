---
nav_exclude: true
search_exclude: false
---

# StackDeathPvPTimerModifier

```csharp
public struct StackDeathPvPTimerModifier
{
	static StackDeathPvPTimerModifier()
	{
		Il2CppClassPointerStore<StackDeathPvPTimerModifier>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "StackDeathPvPTimerModifier");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StackDeathPvPTimerModifier>.NativeClassPtr);
		StackDeathPvPTimerModifier.NativeFieldInfoPtr_BaseValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StackDeathPvPTimerModifier>.NativeClassPtr, "BaseValue");
		StackDeathPvPTimerModifier.NativeFieldInfoPtr_Modifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StackDeathPvPTimerModifier>.NativeClassPtr, "Modifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StackDeathPvPTimerModifier>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BaseValue;
	private static readonly IntPtr NativeFieldInfoPtr_Modifier;

	public float BaseValue;

	public float Modifier;
}
```
