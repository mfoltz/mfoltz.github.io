---
nav_exclude: true
search_exclude: true
---

```csharp
public struct HDRPMaterialPropertySmoothness
{
	static HDRPMaterialPropertySmoothness()
	{
		Il2CppClassPointerStore<HDRPMaterialPropertySmoothness>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "HDRPMaterialPropertySmoothness");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HDRPMaterialPropertySmoothness>.NativeClassPtr);
		HDRPMaterialPropertySmoothness.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HDRPMaterialPropertySmoothness>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HDRPMaterialPropertySmoothness>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float Value;
}
```
