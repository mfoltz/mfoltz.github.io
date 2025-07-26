# BuiltinMaterialPropertyUnity_ProbeVolumeParams

```csharp
[StructLayout(2)]
public struct BuiltinMaterialPropertyUnity_ProbeVolumeParams
{
	static BuiltinMaterialPropertyUnity_ProbeVolumeParams()
	{
		Il2CppClassPointerStore<BuiltinMaterialPropertyUnity_ProbeVolumeParams>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "BuiltinMaterialPropertyUnity_ProbeVolumeParams");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuiltinMaterialPropertyUnity_ProbeVolumeParams>.NativeClassPtr);
		BuiltinMaterialPropertyUnity_ProbeVolumeParams.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuiltinMaterialPropertyUnity_ProbeVolumeParams>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuiltinMaterialPropertyUnity_ProbeVolumeParams>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float4 Value;
}
