---
nav_exclude: true
search_exclude: true
---

```csharp
public struct HDRPMaterialPropertyBaseColor
{
	static HDRPMaterialPropertyBaseColor()
	{
		Il2CppClassPointerStore<HDRPMaterialPropertyBaseColor>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "HDRPMaterialPropertyBaseColor");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HDRPMaterialPropertyBaseColor>.NativeClassPtr);
		HDRPMaterialPropertyBaseColor.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HDRPMaterialPropertyBaseColor>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HDRPMaterialPropertyBaseColor>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float4 Value;
}
```
