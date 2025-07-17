---
nav_exclude: true
search_exclude: true
---

# FreeCamera

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool LerpEnabled;
	[FieldOffset(4)]
	public float MouseRotationSensitivity;
	[FieldOffset(8)]
	public float SpeedChangeSensitivity;
	[FieldOffset(12)]
	public float SpeedCrawlMultiplier;
	[FieldOffset(16)]
	public float SpeedBoostMultiplier;
	[FieldOffset(20)]
	public Entity BonusCustomTargetEntity;
	[FieldOffset(28)]
	public FreeCamera.LerpLambdaVars LerpLambdas;
	[StructLayout(2)]
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
		[FieldOffset(0)]
		public float RotationLambda;
		[FieldOffset(4)]
		public float PositionLambda;
	}
}
