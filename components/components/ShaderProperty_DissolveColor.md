---
nav_exclude: true
search_exclude: true
---

# ShaderProperty_DissolveColor

```csharp
[StructLayout(2)]
public struct ShaderProperty_DissolveColor
{
	static ShaderProperty_DissolveColor()
	{
		Il2CppClassPointerStore<ShaderProperty_DissolveColor>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "ShaderProperty_DissolveColor");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShaderProperty_DissolveColor>.NativeClassPtr);
		ShaderProperty_DissolveColor.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShaderProperty_DissolveColor>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShaderProperty_DissolveColor>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float4 Value;
}
