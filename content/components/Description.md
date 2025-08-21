---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Description
{
	static Description()
	{
		Il2CppClassPointerStore<Description>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Description");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Description>.NativeClassPtr);
		Description.NativeFieldInfoPtr_DescriptionId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Description>.NativeClassPtr, "DescriptionId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Description>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DescriptionId;

	public LocalizedStringBuilderBase DescriptionId;
}
```
