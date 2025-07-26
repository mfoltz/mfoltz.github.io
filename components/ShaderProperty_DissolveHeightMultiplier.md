# ShaderProperty_DissolveHeightMultiplier

```csharp
[StructLayout(2)]
public struct ShaderProperty_DissolveHeightMultiplier
{
	static ShaderProperty_DissolveHeightMultiplier()
	{
		Il2CppClassPointerStore<ShaderProperty_DissolveHeightMultiplier>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "ShaderProperty_DissolveHeightMultiplier");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShaderProperty_DissolveHeightMultiplier>.NativeClassPtr);
		ShaderProperty_DissolveHeightMultiplier.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShaderProperty_DissolveHeightMultiplier>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShaderProperty_DissolveHeightMultiplier>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float Value;
}
