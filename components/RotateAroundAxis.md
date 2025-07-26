---
nav_exclude: true
search_exclude: true
---

# RotateAroundAxis

```csharp
public struct RotateAroundAxis
{
	static RotateAroundAxis()
	{
		Il2CppClassPointerStore<RotateAroundAxis>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RotateAroundAxis");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RotateAroundAxis>.NativeClassPtr);
		RotateAroundAxis.NativeFieldInfoPtr_Initialized = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateAroundAxis>.NativeClassPtr, "Initialized");
		RotateAroundAxis.NativeFieldInfoPtr_HasLocalTransform = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateAroundAxis>.NativeClassPtr, "HasLocalTransform");
		RotateAroundAxis.NativeFieldInfoPtr_OriginalRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateAroundAxis>.NativeClassPtr, "OriginalRotation");
		RotateAroundAxis.NativeFieldInfoPtr_CurveDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateAroundAxis>.NativeClassPtr, "CurveDuration");
		RotateAroundAxis.NativeFieldInfoPtr_SpawnTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateAroundAxis>.NativeClassPtr, "SpawnTime");
		RotateAroundAxis.NativeFieldInfoPtr_Axis = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateAroundAxis>.NativeClassPtr, "Axis");
		RotateAroundAxis.NativeFieldInfoPtr_Curve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateAroundAxis>.NativeClassPtr, "Curve");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RotateAroundAxis>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Initialized;
	private static readonly IntPtr NativeFieldInfoPtr_HasLocalTransform;
	private static readonly IntPtr NativeFieldInfoPtr_OriginalRotation;
	private static readonly IntPtr NativeFieldInfoPtr_CurveDuration;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnTime;
	private static readonly IntPtr NativeFieldInfoPtr_Axis;
	private static readonly IntPtr NativeFieldInfoPtr_Curve;

	public bool Initialized;

	public bool HasLocalTransform;

	public quaternion OriginalRotation;

	public float CurveDuration;

	public float SpawnTime;

	public Axis Axis;

	public BlobAssetReference<CurveBlobData> Curve;
}
```

## Client Systems

- [RotateAroundAxisSystem](/systems/client/RotateAroundAxisSystem)
