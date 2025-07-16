# BuiltinMaterialPropertyUnity_SpecCube0_HDR

```csharp
[StructLayout(2)]
public struct BuiltinMaterialPropertyUnity_SpecCube0_HDR
{
	static BuiltinMaterialPropertyUnity_SpecCube0_HDR()
	{
		Il2CppClassPointerStore<BuiltinMaterialPropertyUnity_SpecCube0_HDR>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "BuiltinMaterialPropertyUnity_SpecCube0_HDR");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuiltinMaterialPropertyUnity_SpecCube0_HDR>.NativeClassPtr);
		BuiltinMaterialPropertyUnity_SpecCube0_HDR.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuiltinMaterialPropertyUnity_SpecCube0_HDR>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuiltinMaterialPropertyUnity_SpecCube0_HDR>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float4 Value;
}
