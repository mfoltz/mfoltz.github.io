---
nav_exclude: true
search_exclude: true
---

# ParticleScale

```csharp
[StructLayout(2)]
public struct ParticleScale
{
	static ParticleScale()
	{
		Il2CppClassPointerStore<ParticleScale>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer", "ParticleScale");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ParticleScale>.NativeClassPtr);
		ParticleScale.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ParticleScale>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ParticleScale>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float3 Value;
}
