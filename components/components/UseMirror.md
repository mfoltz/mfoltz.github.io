---
nav_exclude: true
search_exclude: true
---

# UseMirror

```csharp
[StructLayout(2)]
public struct UseMirror
{
	static UseMirror()
	{
		Il2CppClassPointerStore<UseMirror>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UseMirror");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UseMirror>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UseMirror>.NativeClassPtr, ref this));
	}
}
