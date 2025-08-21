---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Scale
{
	static Scale()
	{
		Il2CppClassPointerStore<Scale>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Transforms", "Scale");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Scale>.NativeClassPtr);
		Scale.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Scale>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Scale>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float Value;
}
```
