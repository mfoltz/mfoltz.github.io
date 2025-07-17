---
nav_exclude: true
search_exclude: true
---

# QuickStartup

```csharp
[StructLayout(2)]
public struct QuickStartup
{
	static QuickStartup()
	{
		Il2CppClassPointerStore<QuickStartup>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "QuickStartup");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<QuickStartup>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<QuickStartup>.NativeClassPtr, ref this));
	}
}
