---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CameraRequest
{
	static CameraRequest()
	{
		Il2CppClassPointerStore<CameraRequest>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CameraRequest");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CameraRequest>.NativeClassPtr);
		CameraRequest.NativeFieldInfoPtr_RequestedOrbitCameraTargetLocation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CameraRequest>.NativeClassPtr, "RequestedOrbitCameraTargetLocation");
		CameraRequest.NativeFieldInfoPtr_RequestedOrbitCameraTargetEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CameraRequest>.NativeClassPtr, "RequestedOrbitCameraTargetEntity");
		CameraRequest.NativeFieldInfoPtr_RequestedCameraType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CameraRequest>.NativeClassPtr, "RequestedCameraType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CameraRequest>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RequestedOrbitCameraTargetLocation;
	private static readonly IntPtr NativeFieldInfoPtr_RequestedOrbitCameraTargetEntity;
	private static readonly IntPtr NativeFieldInfoPtr_RequestedCameraType;

	public Nullable_Unboxed<Translation> RequestedOrbitCameraTargetLocation;

	public Nullable_Unboxed<Entity> RequestedOrbitCameraTargetEntity;

	public CameraType RequestedCameraType;
}
```

## Client Systems

- [LocalUserSystem]({{% relref "systems/client/LocalUserSystem.md" %}})
