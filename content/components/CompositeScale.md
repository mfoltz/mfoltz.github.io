---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CompositeScale
{
	static CompositeScale()
	{
		Il2CppClassPointerStore<CompositeScale>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Transforms", "CompositeScale");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CompositeScale>.NativeClassPtr);
		CompositeScale.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CompositeScale>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CompositeScale>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float4x4 Value;
}
```
