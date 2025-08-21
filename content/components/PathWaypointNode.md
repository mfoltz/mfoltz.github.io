---
nav_exclude: true
search_exclude: true
---

```csharp
public struct PathWaypointNode
{
	static PathWaypointNode()
	{
		Il2CppClassPointerStore<PathWaypointNode>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PathWaypointNode");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PathWaypointNode>.NativeClassPtr);
		PathWaypointNode.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathWaypointNode>.NativeClassPtr, "Position");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PathWaypointNode>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;

	public float3 Position;
}
```
