---
nav_exclude: true
search_exclude: true
---

# HDRPMaterialPropertyDetailNormalScale

```csharp
[StructLayout(2)]
public struct HDRPMaterialPropertyDetailNormalScale
{
	static HDRPMaterialPropertyDetailNormalScale()
	{
		Il2CppClassPointerStore<HDRPMaterialPropertyDetailNormalScale>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "HDRPMaterialPropertyDetailNormalScale");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HDRPMaterialPropertyDetailNormalScale>.NativeClassPtr);
		HDRPMaterialPropertyDetailNormalScale.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HDRPMaterialPropertyDetailNormalScale>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HDRPMaterialPropertyDetailNormalScale>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float Value;
}
