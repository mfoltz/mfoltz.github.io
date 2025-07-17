---
nav_exclude: true
search_exclude: true
---

# RootLODRange

```csharp
public struct RootLODRange
{
	static RootLODRange()
	{
		Il2CppClassPointerStore<RootLODRange>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "RootLODRange");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RootLODRange>.NativeClassPtr);
		RootLODRange.NativeFieldInfoPtr_LOD = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RootLODRange>.NativeClassPtr, "LOD");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RootLODRange>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LOD;

	public LODRange LOD;
}
```
