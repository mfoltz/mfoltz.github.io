---
nav_exclude: true
search_exclude: true
---

# NonUniformScale

```csharp
[Serializable]
[StructLayout(2)]
public struct NonUniformScale
{
	static NonUniformScale()
	{
		Il2CppClassPointerStore<NonUniformScale>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Transforms", "NonUniformScale");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NonUniformScale>.NativeClassPtr);
		NonUniformScale.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NonUniformScale>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NonUniformScale>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float3 Value;
}
