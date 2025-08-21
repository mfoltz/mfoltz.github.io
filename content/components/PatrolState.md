---
nav_exclude: true
search_exclude: true
---

```csharp
public struct PatrolState
{
	static PatrolState()
	{
		Il2CppClassPointerStore<PatrolState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PatrolState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PatrolState>.NativeClassPtr);
		PatrolState.NativeFieldInfoPtr_FromWaypoint = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PatrolState>.NativeClassPtr, "FromWaypoint");
		PatrolState.NativeFieldInfoPtr_ToWaypoint = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PatrolState>.NativeClassPtr, "ToWaypoint");
		PatrolState.NativeFieldInfoPtr_PathEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PatrolState>.NativeClassPtr, "PathEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PatrolState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FromWaypoint;
	private static readonly IntPtr NativeFieldInfoPtr_ToWaypoint;
	private static readonly IntPtr NativeFieldInfoPtr_PathEntity;

	public Entity FromWaypoint;

	public Entity ToWaypoint;

	public Entity PathEntity;
}
```
