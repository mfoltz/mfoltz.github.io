---
nav_exclude: true
search_exclude: false
---

# RestrictPlacementArea

```csharp
public struct RestrictPlacementArea
{
	static RestrictPlacementArea()
	{
		Il2CppClassPointerStore<RestrictPlacementArea>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Tiles", "RestrictPlacementArea");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RestrictPlacementArea>.NativeClassPtr);
		RestrictPlacementArea.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RestrictPlacementArea>.NativeClassPtr, "Radius");
		RestrictPlacementArea.NativeFieldInfoPtr_RestrictAllTypes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RestrictPlacementArea>.NativeClassPtr, "RestrictAllTypes");
		RestrictPlacementArea.NativeFieldInfoPtr_RestrictSpecificTypes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RestrictPlacementArea>.NativeClassPtr, "RestrictSpecificTypes");
		RestrictPlacementArea.NativeFieldInfoPtr_RestrictOnlyPlayerBuilding = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RestrictPlacementArea>.NativeClassPtr, "RestrictOnlyPlayerBuilding");
		RestrictPlacementArea.NativeFieldInfoPtr_RestrictOnlyAgainstEnemies = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RestrictPlacementArea>.NativeClassPtr, "RestrictOnlyAgainstEnemies");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RestrictPlacementArea>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_RestrictAllTypes;
	private static readonly IntPtr NativeFieldInfoPtr_RestrictSpecificTypes;
	private static readonly IntPtr NativeFieldInfoPtr_RestrictOnlyPlayerBuilding;
	private static readonly IntPtr NativeFieldInfoPtr_RestrictOnlyAgainstEnemies;

	public float Radius;

	public bool RestrictAllTypes;

	public PlacementTypeData RestrictSpecificTypes;

	public bool RestrictOnlyPlayerBuilding;

	public bool RestrictOnlyAgainstEnemies;
}
```
