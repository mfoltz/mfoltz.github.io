---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SurfaceTileEnabledStates
{
	static SurfaceTileEnabledStates()
	{
		Il2CppClassPointerStore<SurfaceTileEnabledStates>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "SurfaceTileEnabledStates");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SurfaceTileEnabledStates>.NativeClassPtr);
		SurfaceTileEnabledStates.NativeFieldInfoPtr_Enabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SurfaceTileEnabledStates>.NativeClassPtr, "Enabled");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SurfaceTileEnabledStates>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Enabled;

	public bool Enabled;
}
```
