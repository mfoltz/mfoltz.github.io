---
nav_exclude: true
search_exclude: false
---

# CameraTarget

```csharp
public struct CameraTarget
{
	static CameraTarget()
	{
		Il2CppClassPointerStore<CameraTarget>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CameraTarget");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CameraTarget>.NativeClassPtr);
		CameraTarget.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CameraTarget>.NativeClassPtr, "Target");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CameraTarget>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;

	public Entity Target;
}
```

## Client Systems

- [FreeCameraSystem](/systems/client/FreeCameraSystem)
- [HybridCameraSystem](/systems/client/HybridCameraSystem)
- [MoodSystem](/systems/client/MoodSystem)
- [OrbitCameraSystem](/systems/client/OrbitCameraSystem)
- [UpdatePresentationPostGraphSystem](/systems/client/UpdatePresentationPostGraphSystem)
- [WindMapZoneSystem](/systems/client/WindMapZoneSystem)
- [WorldLoadingManagerSystem](/systems/client/WorldLoadingManagerSystem)
