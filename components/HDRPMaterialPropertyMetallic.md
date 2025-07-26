# HDRPMaterialPropertyMetallic

```csharp
[StructLayout(2)]
public struct HDRPMaterialPropertyMetallic
{
	static HDRPMaterialPropertyMetallic()
	{
		Il2CppClassPointerStore<HDRPMaterialPropertyMetallic>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "HDRPMaterialPropertyMetallic");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HDRPMaterialPropertyMetallic>.NativeClassPtr);
		HDRPMaterialPropertyMetallic.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HDRPMaterialPropertyMetallic>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HDRPMaterialPropertyMetallic>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float Value;
}
