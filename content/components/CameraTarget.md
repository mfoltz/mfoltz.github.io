---
nav_exclude: true
search_exclude: true
---

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

- [FreeCameraSystem]({{% relref "systems/client/FreeCameraSystem.md" %}})
- [HybridCameraSystem]({{% relref "systems/client/HybridCameraSystem.md" %}})
- [MoodSystem]({{% relref "systems/client/MoodSystem.md" %}})
- [OrbitCameraSystem]({{% relref "systems/client/OrbitCameraSystem.md" %}})
- [UpdatePresentationPostGraphSystem]({{% relref "systems/client/UpdatePresentationPostGraphSystem.md" %}})
- [WindMapZoneSystem]({{% relref "systems/client/WindMapZoneSystem.md" %}})
- [WorldLoadingManagerSystem]({{% relref "systems/client/WorldLoadingManagerSystem.md" %}})
