---
nav_exclude: true
search_exclude: false
---

# OccluderTriangle

```csharp
public struct OccluderTriangle
{
	static OccluderTriangle()
	{
		Il2CppClassPointerStore<OccluderTriangle>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "OccluderTriangle");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OccluderTriangle>.NativeClassPtr);
		OccluderTriangle.NativeFieldInfoPtr_Triangle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OccluderTriangle>.NativeClassPtr, "Triangle");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OccluderTriangle>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Triangle;

	public Triangle Triangle;
}
```
