---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Parent
{
	static Parent()
	{
		Il2CppClassPointerStore<Parent>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Transforms.dll", "Unity.Transforms", "Parent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Parent>.NativeClassPtr);
		Parent.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Parent>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Parent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public Entity Value;
}
```
