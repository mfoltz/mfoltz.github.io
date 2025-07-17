---
nav_exclude: true
search_exclude: true
---

# PhysicsGravityFactor

```csharp
[StructLayout(2)]
public struct PhysicsGravityFactor
{
	static PhysicsGravityFactor()
	{
		Il2CppClassPointerStore<PhysicsGravityFactor>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics", "PhysicsGravityFactor");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsGravityFactor>.NativeClassPtr);
		PhysicsGravityFactor.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsGravityFactor>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsGravityFactor>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float Value;
}
