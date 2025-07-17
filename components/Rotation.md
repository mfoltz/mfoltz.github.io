---
nav_exclude: true
search_exclude: true
---

# Rotation

```csharp
[Serializable]
[StructLayout(2)]
public struct Rotation
{
	static Rotation()
	{
		Il2CppClassPointerStore<Rotation>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Transforms", "Rotation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Rotation>.NativeClassPtr);
		Rotation.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Rotation>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Rotation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public quaternion Value;
}
