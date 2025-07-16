# ShaderProperty_CanFadeOut

```csharp
[StructLayout(2)]
public struct ShaderProperty_CanFadeOut
{
	static ShaderProperty_CanFadeOut()
	{
		Il2CppClassPointerStore<ShaderProperty_CanFadeOut>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "ShaderProperty_CanFadeOut");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShaderProperty_CanFadeOut>.NativeClassPtr);
		ShaderProperty_CanFadeOut.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShaderProperty_CanFadeOut>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShaderProperty_CanFadeOut>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float Value;
}
