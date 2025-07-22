---
nav_exclude: true
search_exclude: false
---

# GlobalCooldown

```csharp
public struct GlobalCooldown
{
	static GlobalCooldown()
	{
		Il2CppClassPointerStore<GlobalCooldown>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "GlobalCooldown");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GlobalCooldown>.NativeClassPtr);
		GlobalCooldown.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalCooldown>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GlobalCooldown>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float Value;
}
```
