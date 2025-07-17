---
nav_exclude: true
search_exclude: true
---

# PathWaypointNeighbours

```csharp
[StructLayout(2)]
public struct PathWaypointNeighbours
{
	static PathWaypointNeighbours()
	{
		Il2CppClassPointerStore<PathWaypointNeighbours>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PathWaypointNeighbours");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PathWaypointNeighbours>.NativeClassPtr);
		PathWaypointNeighbours.NativeFieldInfoPtr_NeighbourEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathWaypointNeighbours>.NativeClassPtr, "NeighbourEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PathWaypointNeighbours>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NeighbourEntity;
	[FieldOffset(0)]
	public Entity NeighbourEntity;
}
