# BuiltinMaterialPropertyUnity_LightmapST

```csharp
[StructLayout(2)]
public struct BuiltinMaterialPropertyUnity_LightmapST
{
	static BuiltinMaterialPropertyUnity_LightmapST()
	{
		Il2CppClassPointerStore<BuiltinMaterialPropertyUnity_LightmapST>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "BuiltinMaterialPropertyUnity_LightmapST");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuiltinMaterialPropertyUnity_LightmapST>.NativeClassPtr);
		BuiltinMaterialPropertyUnity_LightmapST.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuiltinMaterialPropertyUnity_LightmapST>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuiltinMaterialPropertyUnity_LightmapST>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float4 Value;
}
