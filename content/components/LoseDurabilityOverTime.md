---
nav_exclude: true
search_exclude: true
---

```csharp
public struct LoseDurabilityOverTime
{
	static LoseDurabilityOverTime()
	{
		Il2CppClassPointerStore<LoseDurabilityOverTime>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "LoseDurabilityOverTime");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LoseDurabilityOverTime>.NativeClassPtr);
		LoseDurabilityOverTime.NativeFieldInfoPtr_TimeUntilBroken = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoseDurabilityOverTime>.NativeClassPtr, "TimeUntilBroken");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LoseDurabilityOverTime>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TimeUntilBroken;

	public float TimeUntilBroken;
}
```
