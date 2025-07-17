---
nav_exclude: true
search_exclude: true
---

# HDRPMaterialPropertyDetailSmoothnessScale

```csharp
[StructLayout(2)]
public struct HDRPMaterialPropertyDetailSmoothnessScale
{
	static HDRPMaterialPropertyDetailSmoothnessScale()
	{
		Il2CppClassPointerStore<HDRPMaterialPropertyDetailSmoothnessScale>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "HDRPMaterialPropertyDetailSmoothnessScale");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HDRPMaterialPropertyDetailSmoothnessScale>.NativeClassPtr);
		HDRPMaterialPropertyDetailSmoothnessScale.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HDRPMaterialPropertyDetailSmoothnessScale>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HDRPMaterialPropertyDetailSmoothnessScale>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float Value;
}
