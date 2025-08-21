---
nav_exclude: true
search_exclude: true
---

```csharp
public struct WallpaperParentTransform
{
	static WallpaperParentTransform()
	{
		Il2CppClassPointerStore<WallpaperParentTransform>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "WallpaperParentTransform");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WallpaperParentTransform>.NativeClassPtr);
		WallpaperParentTransform.NativeFieldInfoPtr_LastTransform = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WallpaperParentTransform>.NativeClassPtr, "LastTransform");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WallpaperParentTransform>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastTransform;

	public float4x4 LastTransform;
}
```

## Client Systems

- [UpdateWallpaperChildPositionsSystem]({{% relref "systems/client/UpdateWallpaperChildPositionsSystem.md" %}})
