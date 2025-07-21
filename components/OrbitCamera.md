---
nav_exclude: true
search_exclude: false
---

# OrbitCamera

```csharp
public struct OrbitCamera
{
	static OrbitCamera()
	{
		Il2CppClassPointerStore<OrbitCamera>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "OrbitCamera");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OrbitCamera>.NativeClassPtr);
		OrbitCamera.NativeFieldInfoPtr_LerpEnabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCamera>.NativeClassPtr, "LerpEnabled");
		OrbitCamera.NativeFieldInfoPtr_MinPitch = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCamera>.NativeClassPtr, "MinPitch");
		OrbitCamera.NativeFieldInfoPtr_MaxPitch = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCamera>.NativeClassPtr, "MaxPitch");
		OrbitCamera.NativeFieldInfoPtr_MinZoom = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCamera>.NativeClassPtr, "MinZoom");
		OrbitCamera.NativeFieldInfoPtr_MaxZoom = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCamera>.NativeClassPtr, "MaxZoom");
		OrbitCamera.NativeFieldInfoPtr_ZoomSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCamera>.NativeClassPtr, "ZoomSpeed");
		OrbitCamera.NativeFieldInfoPtr_OverTheShoulderSensitivity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCamera>.NativeClassPtr, "OverTheShoulderSensitivity");
		OrbitCamera.NativeFieldInfoPtr_AnchorHeightSensitivity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCamera>.NativeClassPtr, "AnchorHeightSensitivity");
		OrbitCamera.NativeFieldInfoPtr_AutoRotationSensitivity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCamera>.NativeClassPtr, "AutoRotationSensitivity");
		OrbitCamera.NativeFieldInfoPtr_MouseRotationSensitivity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCamera>.NativeClassPtr, "MouseRotationSensitivity");
		OrbitCamera.NativeFieldInfoPtr_BonusCustomTargetEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCamera>.NativeClassPtr, "BonusCustomTargetEntity");
		OrbitCamera.NativeFieldInfoPtr_LerpLambdas = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCamera>.NativeClassPtr, "LerpLambdas");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OrbitCamera>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LerpEnabled;
	private static readonly IntPtr NativeFieldInfoPtr_MinPitch;
	private static readonly IntPtr NativeFieldInfoPtr_MaxPitch;
	private static readonly IntPtr NativeFieldInfoPtr_MinZoom;
	private static readonly IntPtr NativeFieldInfoPtr_MaxZoom;
	private static readonly IntPtr NativeFieldInfoPtr_ZoomSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_OverTheShoulderSensitivity;
	private static readonly IntPtr NativeFieldInfoPtr_AnchorHeightSensitivity;
	private static readonly IntPtr NativeFieldInfoPtr_AutoRotationSensitivity;
	private static readonly IntPtr NativeFieldInfoPtr_MouseRotationSensitivity;
	private static readonly IntPtr NativeFieldInfoPtr_BonusCustomTargetEntity;
	private static readonly IntPtr NativeFieldInfoPtr_LerpLambdas;

	public bool LerpEnabled;

	public float MinPitch;

	public float MaxPitch;

	public float MinZoom;

	public float MaxZoom;

	public float ZoomSpeed;

	public float OverTheShoulderSensitivity;

	public float AnchorHeightSensitivity;

	public float AutoRotationSensitivity;

	public float MouseRotationSensitivity;

	public Entity BonusCustomTargetEntity;

	public OrbitCamera.LerpLambdaVars LerpLambdas;

	public struct LerpLambdaVars
	{
		static LerpLambdaVars()
		{
			Il2CppClassPointerStore<OrbitCamera.LerpLambdaVars>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<OrbitCamera>.NativeClassPtr, "LerpLambdaVars");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OrbitCamera.LerpLambdaVars>.NativeClassPtr);
			OrbitCamera.LerpLambdaVars.NativeFieldInfoPtr_OrbitDistanceLambda = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCamera.LerpLambdaVars>.NativeClassPtr, "OrbitDistanceLambda");
			OrbitCamera.LerpLambdaVars.NativeFieldInfoPtr_AnchorPositionLambda = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCamera.LerpLambdaVars>.NativeClassPtr, "AnchorPositionLambda");
			OrbitCamera.LerpLambdaVars.NativeFieldInfoPtr_OrbitEulerLambda = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCamera.LerpLambdaVars>.NativeClassPtr, "OrbitEulerLambda");
			OrbitCamera.LerpLambdaVars.NativeFieldInfoPtr_AnchorRotationLerpFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCamera.LerpLambdaVars>.NativeClassPtr, "AnchorRotationLerpFactor");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OrbitCamera.LerpLambdaVars>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_OrbitDistanceLambda;
		private static readonly IntPtr NativeFieldInfoPtr_AnchorPositionLambda;
		private static readonly IntPtr NativeFieldInfoPtr_OrbitEulerLambda;
		private static readonly IntPtr NativeFieldInfoPtr_AnchorRotationLerpFactor;

		public float OrbitDistanceLambda;

		public float AnchorPositionLambda;

		public float OrbitEulerLambda;

		public float AnchorRotationLerpFactor;
	}
}
```

## Client Systems

- [OrbitCameraSystem](/systems/client/OrbitCameraSystem)
