---
nav_exclude: true
search_exclude: true
---

# ShaderProperty_IsAlly

```csharp
[StructLayout(2)]
public struct ShaderProperty_IsAlly
{
	static ShaderProperty_IsAlly()
	{
		Il2CppClassPointerStore<ShaderProperty_IsAlly>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "ShaderProperty_IsAlly");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShaderProperty_IsAlly>.NativeClassPtr);
		ShaderProperty_IsAlly.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShaderProperty_IsAlly>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShaderProperty_IsAlly>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float Value;
}
