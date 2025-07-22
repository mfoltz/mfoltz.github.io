---
nav_exclude: true
search_exclude: false
---

# BuffInputBehaviorOverride

```csharp
public struct BuffInputBehaviorOverride
{
	static BuffInputBehaviorOverride()
	{
		Il2CppClassPointerStore<BuffInputBehaviorOverride>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BuffInputBehaviorOverride");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuffInputBehaviorOverride>.NativeClassPtr);
		BuffInputBehaviorOverride.NativeFieldInfoPtr_BehaviorType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffInputBehaviorOverride>.NativeClassPtr, "BehaviorType");
		BuffInputBehaviorOverride.NativeFieldInfoPtr_MaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffInputBehaviorOverride>.NativeClassPtr, "MaxRange");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuffInputBehaviorOverride>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BehaviorType;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRange;

	public AbilityBehaviorType BehaviorType;

	public float MaxRange;
}
```
