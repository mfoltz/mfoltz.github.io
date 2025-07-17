---
nav_exclude: true
search_exclude: true
---

# PhysicsGraphicalInterpolationBuffer

```csharp
[StructLayout(2)]
public struct PhysicsGraphicalInterpolationBuffer
{
	static PhysicsGraphicalInterpolationBuffer()
	{
		Il2CppClassPointerStore<PhysicsGraphicalInterpolationBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics.GraphicsIntegration", "PhysicsGraphicalInterpolationBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsGraphicalInterpolationBuffer>.NativeClassPtr);
		PhysicsGraphicalInterpolationBuffer.NativeFieldInfoPtr_PreviousTransform = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsGraphicalInterpolationBuffer>.NativeClassPtr, "PreviousTransform");
		PhysicsGraphicalInterpolationBuffer.NativeFieldInfoPtr_PreviousVelocity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsGraphicalInterpolationBuffer>.NativeClassPtr, "PreviousVelocity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsGraphicalInterpolationBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PreviousTransform;
	private static readonly IntPtr NativeFieldInfoPtr_PreviousVelocity;
	[FieldOffset(0)]
	public RigidTransform PreviousTransform;
	[FieldOffset(28)]
	public PhysicsVelocity PreviousVelocity;
}
