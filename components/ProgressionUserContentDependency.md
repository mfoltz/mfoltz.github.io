---
nav_exclude: true
search_exclude: true
---

# ProgressionUserContentDependency

```csharp
public struct ProgressionUserContentDependency
{
	static ProgressionUserContentDependency()
	{
		Il2CppClassPointerStore<ProgressionUserContentDependency>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ProgressionUserContentDependency");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProgressionUserContentDependency>.NativeClassPtr);
		ProgressionUserContentDependency.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressionUserContentDependency>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProgressionUserContentDependency>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public UserContentFlags Value;
}
```
