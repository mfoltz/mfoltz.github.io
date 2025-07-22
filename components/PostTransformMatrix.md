---
nav_exclude: true
search_exclude: false
---

# PostTransformMatrix

```csharp
public struct PostTransformMatrix
{
	static PostTransformMatrix()
	{
		Il2CppClassPointerStore<PostTransformMatrix>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Transforms.dll", "Unity.Transforms", "PostTransformMatrix");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PostTransformMatrix>.NativeClassPtr);
		PostTransformMatrix.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PostTransformMatrix>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PostTransformMatrix>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float4x4 Value;
}
```
