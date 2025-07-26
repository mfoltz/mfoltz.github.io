---
nav_exclude: true
search_exclude: true
---

# PhysicsGraphicalSmoothing

```csharp
public struct PhysicsGraphicalSmoothing
{
	static PhysicsGraphicalSmoothing()
	{
		Il2CppClassPointerStore<PhysicsGraphicalSmoothing>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics.GraphicsIntegration", "PhysicsGraphicalSmoothing");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsGraphicalSmoothing>.NativeClassPtr);
		PhysicsGraphicalSmoothing.NativeFieldInfoPtr_CurrentVelocity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsGraphicalSmoothing>.NativeClassPtr, "CurrentVelocity");
		PhysicsGraphicalSmoothing.NativeFieldInfoPtr_ApplySmoothing = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsGraphicalSmoothing>.NativeClassPtr, "ApplySmoothing");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsGraphicalSmoothing>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CurrentVelocity;
	private static readonly IntPtr NativeFieldInfoPtr_ApplySmoothing;

	public PhysicsVelocity CurrentVelocity;

	public byte ApplySmoothing;
}
```
