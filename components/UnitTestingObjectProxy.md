---
nav_exclude: true
search_exclude: false
---

# UnitTestingObjectProxy

```csharp
public struct UnitTestingObjectProxy
{
	static UnitTestingObjectProxy()
	{
		Il2CppClassPointerStore<UnitTestingObjectProxy>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "Tests", "UnitTestingObjectProxy");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnitTestingObjectProxy>.NativeClassPtr);
		UnitTestingObjectProxy.NativeFieldInfoPtr_ObjectTag = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitTestingObjectProxy>.NativeClassPtr, "ObjectTag");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnitTestingObjectProxy>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ObjectTag;

	public FixedString128Bytes ObjectTag;
}
```
