---
nav_exclude: true
search_exclude: true
---

```csharp
public struct NamePostfixGenerator
{
	static NamePostfixGenerator()
	{
		Il2CppClassPointerStore<NamePostfixGenerator>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "NamePostfixGenerator");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NamePostfixGenerator>.NativeClassPtr);
		NamePostfixGenerator.NativeFieldInfoPtr_Length = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NamePostfixGenerator>.NativeClassPtr, "Length");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NamePostfixGenerator>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Length;

	public byte Length;
}
```
