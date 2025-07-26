# ShaderProperty_OverlappingAnimationTime

```csharp
[StructLayout(2)]
public struct ShaderProperty_OverlappingAnimationTime
{
	static ShaderProperty_OverlappingAnimationTime()
	{
		Il2CppClassPointerStore<ShaderProperty_OverlappingAnimationTime>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "ShaderProperty_OverlappingAnimationTime");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShaderProperty_OverlappingAnimationTime>.NativeClassPtr);
		ShaderProperty_OverlappingAnimationTime.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShaderProperty_OverlappingAnimationTime>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShaderProperty_OverlappingAnimationTime>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float Value;
}
