---
nav_exclude: true
search_exclude: true
---

```csharp
public struct PathWaypointNodeWait
{
	static PathWaypointNodeWait()
	{
		Il2CppClassPointerStore<PathWaypointNodeWait>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PathWaypointNodeWait");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PathWaypointNodeWait>.NativeClassPtr);
		PathWaypointNodeWait.NativeFieldInfoPtr_WaitTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathWaypointNodeWait>.NativeClassPtr, "WaitTime");
		PathWaypointNodeWait.NativeFieldInfoPtr_WaitRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathWaypointNodeWait>.NativeClassPtr, "WaitRotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PathWaypointNodeWait>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WaitTime;
	private static readonly IntPtr NativeFieldInfoPtr_WaitRotation;

	public float WaitTime;

	public Nullable_Unboxed<quaternion> WaitRotation;
}
```
