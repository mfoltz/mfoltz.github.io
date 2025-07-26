# TopdownCamera

```csharp
[StructLayout(2)]
public struct TopdownCamera
{
	static TopdownCamera()
	{
		Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TopdownCamera");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr);
		TopdownCamera.NativeFieldInfoPtr_LookAtHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "LookAtHeight");
		TopdownCamera.NativeFieldInfoPtr_MouseRotationSpeedYaw = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "MouseRotationSpeedYaw");
		TopdownCamera.NativeFieldInfoPtr_MouseRotationSpeedPitch = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "MouseRotationSpeedPitch");
		TopdownCamera.NativeFieldInfoPtr_GamepadRotationSpeedYaw = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "GamepadRotationSpeedYaw");
		TopdownCamera.NativeFieldInfoPtr_GamepadRotationSpeedPitch = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "GamepadRotationSpeedPitch");
		TopdownCamera.NativeFieldInfoPtr_GamepadInputStrengthCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "GamepadInputStrengthCurve");
		TopdownCamera.NativeFieldInfoPtr_ZoomSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "ZoomSpeed");
		TopdownCamera.NativeFieldInfoPtr_CameraSensitivityCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "CameraSensitivityCurve");
		TopdownCamera.NativeFieldInfoPtr_PanFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "PanFactor");
		TopdownCamera.NativeFieldInfoPtr_ResetCameraSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "ResetCameraSpeed");
		TopdownCamera.NativeFieldInfoPtr_GamepadPerspectives = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "GamepadPerspectives");
		TopdownCamera.NativeFieldInfoPtr_LerpLambdas = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "LerpLambdas");
		TopdownCamera.NativeFieldInfoPtr_StandardZoomSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "StandardZoomSettings");
		TopdownCamera.NativeFieldInfoPtr_StandardZoomDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "StandardZoomDistance");
		TopdownCamera.NativeFieldInfoPtr_BuildModeZoomSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "BuildModeZoomSettings");
		TopdownCamera.NativeFieldInfoPtr_BuildZoomEnabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "BuildZoomEnabled");
		TopdownCamera.NativeFieldInfoPtr_BuildModeZoomDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "BuildModeZoomDistance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LookAtHeight;
	private static readonly IntPtr NativeFieldInfoPtr_MouseRotationSpeedYaw;
	private static readonly IntPtr NativeFieldInfoPtr_MouseRotationSpeedPitch;
	private static readonly IntPtr NativeFieldInfoPtr_GamepadRotationSpeedYaw;
	private static readonly IntPtr NativeFieldInfoPtr_GamepadRotationSpeedPitch;
	private static readonly IntPtr NativeFieldInfoPtr_GamepadInputStrengthCurve;
	private static readonly IntPtr NativeFieldInfoPtr_ZoomSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_CameraSensitivityCurve;
	private static readonly IntPtr NativeFieldInfoPtr_PanFactor;
	private static readonly IntPtr NativeFieldInfoPtr_ResetCameraSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_GamepadPerspectives;
	private static readonly IntPtr NativeFieldInfoPtr_LerpLambdas;
	private static readonly IntPtr NativeFieldInfoPtr_StandardZoomSettings;
	private static readonly IntPtr NativeFieldInfoPtr_StandardZoomDistance;
	private static readonly IntPtr NativeFieldInfoPtr_BuildModeZoomSettings;
	private static readonly IntPtr NativeFieldInfoPtr_BuildZoomEnabled;
	private static readonly IntPtr NativeFieldInfoPtr_BuildModeZoomDistance;
	[FieldOffset(0)]
	public float LookAtHeight;
	[FieldOffset(4)]
	public FloatRange MouseRotationSpeedYaw;
	[FieldOffset(12)]
	public FloatRange MouseRotationSpeedPitch;
	[FieldOffset(20)]
	public FloatRange GamepadRotationSpeedYaw;
	[FieldOffset(28)]
	public FloatRange GamepadRotationSpeedPitch;
	[FieldOffset(40)]
	public BlobAssetReference<CurveBlobData> GamepadInputStrengthCurve;
	[FieldOffset(48)]
	public float ZoomSpeed;
	[FieldOffset(56)]
	public BlobAssetReference<CurveBlobData> CameraSensitivityCurve;
	[FieldOffset(64)]
	public float PanFactor;
	[FieldOffset(68)]
	public float ResetCameraSpeed;
	[FieldOffset(72)]
	public BlobAssetReference<PerspectivesBlob> GamepadPerspectives;
	[FieldOffset(80)]
	public TopdownCamera.LerpLambdaVars LerpLambdas;
	[FieldOffset(96)]
	public ZoomSettings StandardZoomSettings;
	[FieldOffset(112)]
	public float StandardZoomDistance;
	[FieldOffset(116)]
	public ZoomSettings BuildModeZoomSettings;
	[FieldOffset(132)]
	[MarshalAs(4)]
	public bool BuildZoomEnabled;
	[FieldOffset(136)]
	public float BuildModeZoomDistance;
	[StructLayout(2)]
	public struct LerpLambdaVars
	{
		static LerpLambdaVars()
		{
			Il2CppClassPointerStore<TopdownCamera.LerpLambdaVars>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<TopdownCamera>.NativeClassPtr, "LerpLambdaVars");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TopdownCamera.LerpLambdaVars>.NativeClassPtr);
			TopdownCamera.LerpLambdaVars.NativeFieldInfoPtr_LookAtPosLambda = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera.LerpLambdaVars>.NativeClassPtr, "LookAtPosLambda");
			TopdownCamera.LerpLambdaVars.NativeFieldInfoPtr_PanLambda = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera.LerpLambdaVars>.NativeClassPtr, "PanLambda");
			TopdownCamera.LerpLambdaVars.NativeFieldInfoPtr_ZoomLambda = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera.LerpLambdaVars>.NativeClassPtr, "ZoomLambda");
			TopdownCamera.LerpLambdaVars.NativeFieldInfoPtr_PitchLambda = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCamera.LerpLambdaVars>.NativeClassPtr, "PitchLambda");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TopdownCamera.LerpLambdaVars>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_LookAtPosLambda;
		private static readonly IntPtr NativeFieldInfoPtr_PanLambda;
		private static readonly IntPtr NativeFieldInfoPtr_ZoomLambda;
		private static readonly IntPtr NativeFieldInfoPtr_PitchLambda;
		[FieldOffset(0)]
		public float LookAtPosLambda;
		[FieldOffset(4)]
		public float PanLambda;
		[FieldOffset(8)]
		public float ZoomLambda;
		[FieldOffset(12)]
		public float PitchLambda;
	}
}
