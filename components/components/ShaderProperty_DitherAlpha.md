---
nav_exclude: true
search_exclude: true
---

# ShaderProperty_DitherAlpha

```csharp
[StructLayout(2)]
public struct ShaderProperty_DitherAlpha
{
	static ShaderProperty_DitherAlpha()
	{
		Il2CppClassPointerStore<ShaderProperty_DitherAlpha>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "ShaderProperty_DitherAlpha");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShaderProperty_DitherAlpha>.NativeClassPtr);
		ShaderProperty_DitherAlpha.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShaderProperty_DitherAlpha>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShaderProperty_DitherAlpha>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float Value;
}
