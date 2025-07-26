# ShaderProperty_BaseColorTrim3

```csharp
[StructLayout(2)]
public struct ShaderProperty_BaseColorTrim3
{
	static ShaderProperty_BaseColorTrim3()
	{
		Il2CppClassPointerStore<ShaderProperty_BaseColorTrim3>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "ShaderProperty_BaseColorTrim3");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShaderProperty_BaseColorTrim3>.NativeClassPtr);
		ShaderProperty_BaseColorTrim3.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShaderProperty_BaseColorTrim3>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShaderProperty_BaseColorTrim3>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float4 Value;
}
