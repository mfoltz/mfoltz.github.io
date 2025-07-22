---
nav_exclude: true
search_exclude: false
---

# CurrentFadingDataSingleton

```csharp
public struct CurrentFadingDataSingleton
{
	static CurrentFadingDataSingleton()
	{
		Il2CppClassPointerStore<CurrentFadingDataSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "CurrentFadingDataSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CurrentFadingDataSingleton>.NativeClassPtr);
		CurrentFadingDataSingleton.NativeFieldInfoPtr_CameraFadingRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CurrentFadingDataSingleton>.NativeClassPtr, "CameraFadingRadius");
		CurrentFadingDataSingleton.NativeFieldInfoPtr_TargetFadingRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CurrentFadingDataSingleton>.NativeClassPtr, "TargetFadingRadius");
		CurrentFadingDataSingleton.NativeFieldInfoPtr_TargetDepthOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CurrentFadingDataSingleton>.NativeClassPtr, "TargetDepthOffset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CurrentFadingDataSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CameraFadingRadius;
	private static readonly IntPtr NativeFieldInfoPtr_TargetFadingRadius;
	private static readonly IntPtr NativeFieldInfoPtr_TargetDepthOffset;

	public float CameraFadingRadius;

	public float TargetFadingRadius;

	public float TargetDepthOffset;
}
```

## Client Systems

- [CursorPositionSystem](/systems/client/CursorPositionSystem)
- [FadeOutObstaclesUploadDataSystem](/systems/client/FadeOutObstaclesUploadDataSystem)
- [PickingSystem](/systems/client/PickingSystem)
