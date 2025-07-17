---
nav_exclude: true
search_exclude: true
---

# PhysicsDamping

```csharp
[StructLayout(2)]
public struct PhysicsDamping
{
	static PhysicsDamping()
	{
		Il2CppClassPointerStore<PhysicsDamping>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics", "PhysicsDamping");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsDamping>.NativeClassPtr);
		PhysicsDamping.NativeFieldInfoPtr_Linear = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsDamping>.NativeClassPtr, "Linear");
		PhysicsDamping.NativeFieldInfoPtr_Angular = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsDamping>.NativeClassPtr, "Angular");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsDamping>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Linear;
	private static readonly IntPtr NativeFieldInfoPtr_Angular;
	[FieldOffset(0)]
	public float Linear;
	[FieldOffset(4)]
	public float Angular;
}
