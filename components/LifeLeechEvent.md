---
nav_exclude: true
search_exclude: false
---

# LifeLeechEvent

```csharp
public struct LifeLeechEvent
{
	static LifeLeechEvent()
	{
		Il2CppClassPointerStore<LifeLeechEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "LifeLeechEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LifeLeechEvent>.NativeClassPtr);
		LifeLeechEvent.NativeFieldInfoPtr_Factor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LifeLeechEvent>.NativeClassPtr, "Factor");
		LifeLeechEvent.NativeFieldInfoPtr_HealTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LifeLeechEvent>.NativeClassPtr, "HealTarget");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LifeLeechEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Factor;
	private static readonly IntPtr NativeFieldInfoPtr_HealTarget;

	public float Factor;

	public Entity HealTarget;
}
```
