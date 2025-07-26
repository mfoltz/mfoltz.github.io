---
nav_exclude: true
search_exclude: true
---

# Pathfinder

```csharp
public struct Pathfinder
{
	static Pathfinder()
	{
		Il2CppClassPointerStore<Pathfinder>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Pathfinding.dll", "ProjectM.Pathfinding", "Pathfinder");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Pathfinder>.NativeClassPtr);
		Pathfinder.NativeFieldInfoPtr_TerrainData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Pathfinder>.NativeClassPtr, "TerrainData");
		Pathfinder.NativeFieldInfoPtr_MaxExpansions = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Pathfinder>.NativeClassPtr, "MaxExpansions");
		Pathfinder.NativeFieldInfoPtr_UseSmoothing = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Pathfinder>.NativeClassPtr, "UseSmoothing");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Pathfinder>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TerrainData;
	private static readonly IntPtr NativeFieldInfoPtr_MaxExpansions;
	private static readonly IntPtr NativeFieldInfoPtr_UseSmoothing;

	public PathfindingTerrainData TerrainData;

	public int MaxExpansions;

	public bool UseSmoothing;
}
```
