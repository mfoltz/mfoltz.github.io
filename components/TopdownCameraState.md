---
nav_exclude: true
search_exclude: false
---

# TopdownCameraState

```csharp
public struct TopdownCameraState
{
	static TopdownCameraState()
	{
		Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TopdownCameraState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr);
		TopdownCameraState.NativeFieldInfoPtr_LastTargetEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "LastTargetEntity");
		TopdownCameraState.NativeFieldInfoPtr_Yaw = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "Yaw");
		TopdownCameraState.NativeFieldInfoPtr_PitchPercent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "PitchPercent");
		TopdownCameraState.NativeFieldInfoPtr_Pan = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "Pan");
		TopdownCameraState.NativeFieldInfoPtr_ConsumeYawInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "ConsumeYawInput");
		TopdownCameraState.NativeFieldInfoPtr_GamepadCurrentPitchStep = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "GamepadCurrentPitchStep");
		TopdownCameraState.NativeFieldInfoPtr_FocusMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "FocusMode");
		TopdownCameraState.NativeFieldInfoPtr_LastTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "LastTarget");
		TopdownCameraState.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "Target");
		TopdownCameraState.NativeFieldInfoPtr_Current = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "Current");
		TopdownCameraState.NativeFieldInfoPtr_RotatedLookAtOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "RotatedLookAtOffset");
		TopdownCameraState.NativeFieldInfoPtr_InBuildMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "InBuildMode");
		TopdownCameraState.NativeFieldInfoPtr_IsRotatingCamera = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "IsRotatingCamera");
		TopdownCameraState.NativeFieldInfoPtr_ZoomSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "ZoomSettings");
		TopdownCameraState.NativeFieldInfoPtr_InstantJump = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "InstantJump");
		TopdownCameraState.NativeFieldInfoPtr_AllowCameraReset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "AllowCameraReset");
		TopdownCameraState.NativeFieldInfoPtr_RotateCameraLock = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "RotateCameraLock");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastTargetEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Yaw;
	private static readonly IntPtr NativeFieldInfoPtr_PitchPercent;
	private static readonly IntPtr NativeFieldInfoPtr_Pan;
	private static readonly IntPtr NativeFieldInfoPtr_ConsumeYawInput;
	private static readonly IntPtr NativeFieldInfoPtr_GamepadCurrentPitchStep;
	private static readonly IntPtr NativeFieldInfoPtr_FocusMode;
	private static readonly IntPtr NativeFieldInfoPtr_LastTarget;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_Current;
	private static readonly IntPtr NativeFieldInfoPtr_RotatedLookAtOffset;
	private static readonly IntPtr NativeFieldInfoPtr_InBuildMode;
	private static readonly IntPtr NativeFieldInfoPtr_IsRotatingCamera;
	private static readonly IntPtr NativeFieldInfoPtr_ZoomSettings;
	private static readonly IntPtr NativeFieldInfoPtr_InstantJump;
	private static readonly IntPtr NativeFieldInfoPtr_AllowCameraReset;
	private static readonly IntPtr NativeFieldInfoPtr_RotateCameraLock;

	public Entity LastTargetEntity;

	public float Yaw;

	public float PitchPercent;

	public float2 Pan;

	public float ConsumeYawInput;

	public int GamepadCurrentPitchStep;

	public TopdownCameraFocusMode FocusMode;

	public TopdownCameraState.LerpVariables LastTarget;

	public TopdownCameraState.LerpVariables Target;

	public TopdownCameraState.LerpVariables Current;

	public float3 RotatedLookAtOffset;

	public bool InBuildMode;

	public bool IsRotatingCamera;

	public ZoomSettings ZoomSettings;

	public bool InstantJump;

	public bool AllowCameraReset;

	public bool RotateCameraLock;

	public struct LerpVariables
	{
		static LerpVariables()
		{
			Il2CppClassPointerStore<TopdownCameraState.LerpVariables>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<TopdownCameraState>.NativeClassPtr, "LerpVariables");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TopdownCameraState.LerpVariables>.NativeClassPtr);
			TopdownCameraState.LerpVariables.NativeFieldInfoPtr_Zoom = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState.LerpVariables>.NativeClassPtr, "Zoom");
			TopdownCameraState.LerpVariables.NativeFieldInfoPtr_LookAtRootPos = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState.LerpVariables>.NativeClassPtr, "LookAtRootPos");
			TopdownCameraState.LerpVariables.NativeFieldInfoPtr_NormalizedLookAtOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState.LerpVariables>.NativeClassPtr, "NormalizedLookAtOffset");
			TopdownCameraState.LerpVariables.NativeFieldInfoPtr_Pitch = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TopdownCameraState.LerpVariables>.NativeClassPtr, "Pitch");
			TopdownCameraState.LerpVariables.NativeMethodInfoPtr_SmoothLerp_Public_Static_LerpVariables_byref_LerpVariables_byref_LerpVariables_byref_LerpVariables_Single_byref_LerpLambdaVars_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TopdownCameraState.LerpVariables>.NativeClassPtr, 100663890);
		}

		public unsafe static TopdownCameraState.LerpVariables SmoothLerp([In] ref TopdownCameraState.LerpVariables current, [In] ref TopdownCameraState.LerpVariables lastTarget, [In] ref TopdownCameraState.LerpVariables target, float deltaTime, [In] ref TopdownCamera.LerpLambdaVars lerpLambdas)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &current;
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &lastTarget;
			ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &target;
			ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref deltaTime;
			ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &lerpLambdas;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TopdownCameraState.LerpVariables.NativeMethodInfoPtr_SmoothLerp_Public_Static_LerpVariables_byref_LerpVariables_byref_LerpVariables_byref_LerpVariables_Single_byref_LerpLambdaVars_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TopdownCameraState.LerpVariables>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_Zoom;
		private static readonly IntPtr NativeFieldInfoPtr_LookAtRootPos;
		private static readonly IntPtr NativeFieldInfoPtr_NormalizedLookAtOffset;
		private static readonly IntPtr NativeFieldInfoPtr_Pitch;
		private static readonly IntPtr NativeMethodInfoPtr_SmoothLerp_Public_Static_LerpVariables_byref_LerpVariables_byref_LerpVariables_byref_LerpVariables_Single_byref_LerpLambdaVars_0;

		public float Zoom;

		public float3 LookAtRootPos;

		public float3 NormalizedLookAtOffset;

		public float Pitch;
	}
}
```
