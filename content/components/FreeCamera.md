---
nav_exclude: true
search_exclude: true
---

```csharp
public struct FreeCamera
{
	static FreeCamera()
	{
		Il2CppClassPointerStore<FreeCamera>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "FreeCamera");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FreeCamera>.NativeClassPtr);
		FreeCamera.NativeFieldInfoPtr_LerpEnabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FreeCamera>.NativeClassPtr, "LerpEnabled");
		FreeCamera.NativeFieldInfoPtr_MouseRotationSensitivity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FreeCamera>.NativeClassPtr, "MouseRotationSensitivity");
		FreeCamera.NativeFieldInfoPtr_SpeedChangeSensitivity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FreeCamera>.NativeClassPtr, "SpeedChangeSensitivity");
		FreeCamera.NativeFieldInfoPtr_SpeedCrawlMultiplier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FreeCamera>.NativeClassPtr, "SpeedCrawlMultiplier");
		FreeCamera.NativeFieldInfoPtr_SpeedBoostMultiplier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FreeCamera>.NativeClassPtr, "SpeedBoostMultiplier");
		FreeCamera.NativeFieldInfoPtr_BonusCustomTargetEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FreeCamera>.NativeClassPtr, "BonusCustomTargetEntity");
		FreeCamera.NativeFieldInfoPtr_LerpLambdas = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FreeCamera>.NativeClassPtr, "LerpLambdas");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FreeCamera>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LerpEnabled;
	private static readonly IntPtr NativeFieldInfoPtr_MouseRotationSensitivity;
	private static readonly IntPtr NativeFieldInfoPtr_SpeedChangeSensitivity;
	private static readonly IntPtr NativeFieldInfoPtr_SpeedCrawlMultiplier;
	private static readonly IntPtr NativeFieldInfoPtr_SpeedBoostMultiplier;
	private static readonly IntPtr NativeFieldInfoPtr_BonusCustomTargetEntity;
	private static readonly IntPtr NativeFieldInfoPtr_LerpLambdas;

	public bool LerpEnabled;

	public float MouseRotationSensitivity;

	public float SpeedChangeSensitivity;

	public float SpeedCrawlMultiplier;

	public float SpeedBoostMultiplier;

	public Entity BonusCustomTargetEntity;

	public FreeCamera.LerpLambdaVars LerpLambdas;

	public struct LerpLambdaVars
	{
		static LerpLambdaVars()
		{
			Il2CppClassPointerStore<FreeCamera.LerpLambdaVars>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<FreeCamera>.NativeClassPtr, "LerpLambdaVars");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FreeCamera.LerpLambdaVars>.NativeClassPtr);
			FreeCamera.LerpLambdaVars.NativeFieldInfoPtr_RotationLambda = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FreeCamera.LerpLambdaVars>.NativeClassPtr, "RotationLambda");
			FreeCamera.LerpLambdaVars.NativeFieldInfoPtr_PositionLambda = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FreeCamera.LerpLambdaVars>.NativeClassPtr, "PositionLambda");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FreeCamera.LerpLambdaVars>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_RotationLambda;
		private static readonly IntPtr NativeFieldInfoPtr_PositionLambda;

		public float RotationLambda;

		public float PositionLambda;
	}
}
```

## Client Systems

- [FreeCameraSystem]({{% relref "systems/client/FreeCameraSystem.md" %}})
