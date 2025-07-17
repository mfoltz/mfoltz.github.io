---
nav_exclude: true
search_exclude: true
---

# BuiltinMaterialPropertyUnity_LODFade

```csharp
[StructLayout(2)]
public struct BuiltinMaterialPropertyUnity_LODFade
{
	static BuiltinMaterialPropertyUnity_LODFade()
	{
		Il2CppClassPointerStore<BuiltinMaterialPropertyUnity_LODFade>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "BuiltinMaterialPropertyUnity_LODFade");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuiltinMaterialPropertyUnity_LODFade>.NativeClassPtr);
		BuiltinMaterialPropertyUnity_LODFade.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuiltinMaterialPropertyUnity_LODFade>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuiltinMaterialPropertyUnity_LODFade>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float4 Value;
}
