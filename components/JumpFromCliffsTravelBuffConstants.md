---
nav_exclude: true
search_exclude: false
---

# JumpFromCliffsTravelBuffConstants

```csharp
public struct JumpFromCliffsTravelBuffConstants
{
	static JumpFromCliffsTravelBuffConstants()
	{
		Il2CppClassPointerStore<JumpFromCliffsTravelBuffConstants>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "JumpFromCliffsTravelBuffConstants");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<JumpFromCliffsTravelBuffConstants>.NativeClassPtr);
		JumpFromCliffsTravelBuffConstants.NativeFieldInfoPtr_Height = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JumpFromCliffsTravelBuffConstants>.NativeClassPtr, "Height");
		JumpFromCliffsTravelBuffConstants.NativeFieldInfoPtr_MaxSearchAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JumpFromCliffsTravelBuffConstants>.NativeClassPtr, "MaxSearchAngle");
		JumpFromCliffsTravelBuffConstants.NativeFieldInfoPtr_LengthPerHeightCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JumpFromCliffsTravelBuffConstants>.NativeClassPtr, "LengthPerHeightCurve");
		JumpFromCliffsTravelBuffConstants.NativeFieldInfoPtr_LengthPerSpeedCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JumpFromCliffsTravelBuffConstants>.NativeClassPtr, "LengthPerSpeedCurve");
		JumpFromCliffsTravelBuffConstants.NativeFieldInfoPtr_TimePerHeightCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JumpFromCliffsTravelBuffConstants>.NativeClassPtr, "TimePerHeightCurve");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<JumpFromCliffsTravelBuffConstants>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Height;
	private static readonly IntPtr NativeFieldInfoPtr_MaxSearchAngle;
	private static readonly IntPtr NativeFieldInfoPtr_LengthPerHeightCurve;
	private static readonly IntPtr NativeFieldInfoPtr_LengthPerSpeedCurve;
	private static readonly IntPtr NativeFieldInfoPtr_TimePerHeightCurve;

	public float Height;

	public float MaxSearchAngle;

	public BlobAssetReference<CurveBlobData> LengthPerHeightCurve;

	public BlobAssetReference<CurveBlobData> LengthPerSpeedCurve;

	public BlobAssetReference<CurveBlobData> TimePerHeightCurve;
}
```

## Server Systems

- [JumpFromCliffsTravelSystem](/systems/server/JumpFromCliffsTravelSystem)

## Client Systems

- [JumpFromCliffsTravelSystem](/systems/client/JumpFromCliffsTravelSystem)
