---
nav_exclude: true
search_exclude: true
---

# BakedSurfaceFluffDataBounds

```csharp
public struct BakedSurfaceFluffDataBounds
{
	static BakedSurfaceFluffDataBounds()
	{
		Il2CppClassPointerStore<BakedSurfaceFluffDataBounds>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Tiles", "BakedSurfaceFluffDataBounds");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BakedSurfaceFluffDataBounds>.NativeClassPtr);
		BakedSurfaceFluffDataBounds.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedSurfaceFluffDataBounds>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BakedSurfaceFluffDataBounds>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public BoundsMinMax Value;
}
```
