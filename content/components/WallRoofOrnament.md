---
nav_exclude: true
search_exclude: true
---

```csharp
public struct WallRoofOrnament
{
	static WallRoofOrnament()
	{
		Il2CppClassPointerStore<WallRoofOrnament>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "WallRoofOrnament");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WallRoofOrnament>.NativeClassPtr);
		WallRoofOrnament.NativeFieldInfoPtr_OrnamentPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WallRoofOrnament>.NativeClassPtr, "OrnamentPrefab");
		WallRoofOrnament.NativeFieldInfoPtr_CountWallAsRoofOpening = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WallRoofOrnament>.NativeClassPtr, "CountWallAsRoofOpening");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WallRoofOrnament>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OrnamentPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_CountWallAsRoofOpening;

	public PrefabGUID OrnamentPrefab;

	public bool CountWallAsRoofOpening;
}
```
