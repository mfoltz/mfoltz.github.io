---
nav_exclude: true
search_exclude: true
---

# ServantConvertable

```csharp
public struct ServantConvertable
{
	static ServantConvertable()
	{
		Il2CppClassPointerStore<ServantConvertable>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServantConvertable");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantConvertable>.NativeClassPtr);
		ServantConvertable.NativeFieldInfoPtr_ConvertToUnit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantConvertable>.NativeClassPtr, "ConvertToUnit");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantConvertable>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ConvertToUnit;

	public PrefabGUID ConvertToUnit;
}
```
