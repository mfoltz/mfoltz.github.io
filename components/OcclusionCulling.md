---
nav_exclude: true
search_exclude: false
---

# OcclusionCulling

```csharp
public struct OcclusionCulling
{
	static OcclusionCulling()
	{
		Il2CppClassPointerStore<OcclusionCulling>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "OcclusionCulling");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OcclusionCulling>.NativeClassPtr);
		OcclusionCulling.NativeFieldInfoPtr_Visible = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OcclusionCulling>.NativeClassPtr, "Visible");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OcclusionCulling>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Visible;

	public bool Visible;
}
```

## Client Systems

- [OcclusionCullingSystem](/systems/client/OcclusionCullingSystem)
