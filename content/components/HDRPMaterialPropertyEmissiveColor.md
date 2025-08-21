---
nav_exclude: true
search_exclude: true
---

```csharp
public struct HDRPMaterialPropertyEmissiveColor
{
	static HDRPMaterialPropertyEmissiveColor()
	{
		Il2CppClassPointerStore<HDRPMaterialPropertyEmissiveColor>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "HDRPMaterialPropertyEmissiveColor");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HDRPMaterialPropertyEmissiveColor>.NativeClassPtr);
		HDRPMaterialPropertyEmissiveColor.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HDRPMaterialPropertyEmissiveColor>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HDRPMaterialPropertyEmissiveColor>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float3 Value;
}
```
