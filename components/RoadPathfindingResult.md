---
nav_exclude: true
search_exclude: false
---

# RoadPathfindingResult

```csharp
public struct RoadPathfindingResult
{
	static RoadPathfindingResult()
	{
		Il2CppClassPointerStore<RoadPathfindingResult>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "RoadPathfindingResult");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RoadPathfindingResult>.NativeClassPtr);
		RoadPathfindingResult.NativeFieldInfoPtr_NodePosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoadPathfindingResult>.NativeClassPtr, "NodePosition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RoadPathfindingResult>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NodePosition;

	public float3 NodePosition;
}
```

## Server Systems

- [RoadPathfindingSystem](/systems/server/RoadPathfindingSystem)
