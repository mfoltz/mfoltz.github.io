---
nav_exclude: true
search_exclude: false
---

# GainAggroByAlert

```csharp
public struct GainAggroByAlert
{
	static GainAggroByAlert()
	{
		Il2CppClassPointerStore<GainAggroByAlert>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "GainAggroByAlert");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GainAggroByAlert>.NativeClassPtr);
		GainAggroByAlert.NativeFieldInfoPtr_AlertThreshold = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GainAggroByAlert>.NativeClassPtr, "AlertThreshold");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GainAggroByAlert>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AlertThreshold;

	public float AlertThreshold;
}
```
