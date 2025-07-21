---
nav_exclude: true
search_exclude: false
---

# SurfaceFluffAllowance

```csharp
public struct SurfaceFluffAllowance
{
	static SurfaceFluffAllowance()
	{
		Il2CppClassPointerStore<SurfaceFluffAllowance>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "SurfaceFluffAllowance");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SurfaceFluffAllowance>.NativeClassPtr);
		SurfaceFluffAllowance.NativeFieldInfoPtr_FluffAllowance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SurfaceFluffAllowance>.NativeClassPtr, "FluffAllowance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SurfaceFluffAllowance>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FluffAllowance;

	public FluffAllowanceFlags FluffAllowance;
}
```

## Client Systems

- [FluffRenderingMaskSystem](/systems/client/FluffRenderingMaskSystem)
