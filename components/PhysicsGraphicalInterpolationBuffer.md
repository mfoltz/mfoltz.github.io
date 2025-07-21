---
nav_exclude: true
search_exclude: false
---

# PhysicsGraphicalInterpolationBuffer

```csharp
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

	public RigidTransform PreviousTransform;

	public PhysicsVelocity PreviousVelocity;
}
```
