---
nav_exclude: true
search_exclude: true
---

```csharp
public struct WorldRegionPolygonVertex
{
	static WorldRegionPolygonVertex()
	{
		Il2CppClassPointerStore<WorldRegionPolygonVertex>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "WorldRegionPolygonVertex");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorldRegionPolygonVertex>.NativeClassPtr);
		WorldRegionPolygonVertex.NativeFieldInfoPtr_VertexPos = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldRegionPolygonVertex>.NativeClassPtr, "VertexPos");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorldRegionPolygonVertex>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VertexPos;

	public float2 VertexPos;
}
```

## Server Systems

- [HandleRecommendedSpawnLocationRequestEventSystem]({{% relref "systems/server/HandleRecommendedSpawnLocationRequestEventSystem.md" %}})
- [SetTerritoryWorldRegionSystem]({{% relref "systems/server/SetTerritoryWorldRegionSystem.md" %}})
- [UpdateWaypointRegionSystem]({{% relref "systems/server/UpdateWaypointRegionSystem.md" %}})

## Client Systems

- [SetTerritoryWorldRegionSystem]({{% relref "systems/client/SetTerritoryWorldRegionSystem.md" %}})
