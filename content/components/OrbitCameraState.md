---
nav_exclude: true
search_exclude: true
---

```csharp
public struct OrbitCameraState
{
	static OrbitCameraState()
	{
		Il2CppClassPointerStore<OrbitCameraState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "OrbitCameraState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OrbitCameraState>.NativeClassPtr);
		OrbitCameraState.NativeFieldInfoPtr_AnchorHeightOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCameraState>.NativeClassPtr, "AnchorHeightOffset");
		OrbitCameraState.NativeFieldInfoPtr_AutomaticRotationSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCameraState>.NativeClassPtr, "AutomaticRotationSpeed");
		OrbitCameraState.NativeFieldInfoPtr_UseCustomLookAtTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCameraState>.NativeClassPtr, "UseCustomLookAtTarget");
		OrbitCameraState.NativeFieldInfoPtr_CustomLookAtTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCameraState>.NativeClassPtr, "CustomLookAtTarget");
		OrbitCameraState.NativeFieldInfoPtr_FollowTargetObjectRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCameraState>.NativeClassPtr, "FollowTargetObjectRotation");
		OrbitCameraState.NativeFieldInfoPtr_LastTargetEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCameraState>.NativeClassPtr, "LastTargetEntity");
		OrbitCameraState.NativeFieldInfoPtr_OverTheShoulderOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCameraState>.NativeClassPtr, "OverTheShoulderOffset");
		OrbitCameraState.NativeFieldInfoPtr_LastTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCameraState>.NativeClassPtr, "LastTarget");
		OrbitCameraState.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCameraState>.NativeClassPtr, "Target");
		OrbitCameraState.NativeFieldInfoPtr_Current = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCameraState>.NativeClassPtr, "Current");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OrbitCameraState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AnchorHeightOffset;
	private static readonly IntPtr NativeFieldInfoPtr_AutomaticRotationSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_UseCustomLookAtTarget;
	private static readonly IntPtr NativeFieldInfoPtr_CustomLookAtTarget;
	private static readonly IntPtr NativeFieldInfoPtr_FollowTargetObjectRotation;
	private static readonly IntPtr NativeFieldInfoPtr_LastTargetEntity;
	private static readonly IntPtr NativeFieldInfoPtr_OverTheShoulderOffset;
	private static readonly IntPtr NativeFieldInfoPtr_LastTarget;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_Current;

	public float AnchorHeightOffset;

	public float AutomaticRotationSpeed;

	public bool UseCustomLookAtTarget;

	public Entity CustomLookAtTarget;

	public bool FollowTargetObjectRotation;

	public Entity LastTargetEntity;

	public float OverTheShoulderOffset;

	public OrbitCameraState.LerpVariables LastTarget;

	public OrbitCameraState.LerpVariables Target;

	public OrbitCameraState.LerpVariables Current;

	public struct LerpVariables
	{
		static LerpVariables()
		{
			Il2CppClassPointerStore<OrbitCameraState.LerpVariables>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<OrbitCameraState>.NativeClassPtr, "LerpVariables");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OrbitCameraState.LerpVariables>.NativeClassPtr);
			OrbitCameraState.LerpVariables.NativeFieldInfoPtr_OrbitDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCameraState.LerpVariables>.NativeClassPtr, "OrbitDistance");
			OrbitCameraState.LerpVariables.NativeFieldInfoPtr_OrbitYaw = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCameraState.LerpVariables>.NativeClassPtr, "OrbitYaw");
			OrbitCameraState.LerpVariables.NativeFieldInfoPtr_OrbitPitch = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCameraState.LerpVariables>.NativeClassPtr, "OrbitPitch");
			OrbitCameraState.LerpVariables.NativeFieldInfoPtr_AnchorPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCameraState.LerpVariables>.NativeClassPtr, "AnchorPosition");
			OrbitCameraState.LerpVariables.NativeFieldInfoPtr_AnchorRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OrbitCameraState.LerpVariables>.NativeClassPtr, "AnchorRotation");
			OrbitCameraState.LerpVariables.NativeMethodInfoPtr_SmoothLerp_Public_Static_LerpVariables_byref_LerpVariables_byref_LerpVariables_byref_LerpVariables_Single_byref_LerpLambdaVars_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<OrbitCameraState.LerpVariables>.NativeClassPtr, 100663886);
		}

		public unsafe static OrbitCameraState.LerpVariables SmoothLerp([In] ref OrbitCameraState.LerpVariables current, [In] ref OrbitCameraState.LerpVariables lastTarget, [In] ref OrbitCameraState.LerpVariables target, float deltaTime, [In] ref OrbitCamera.LerpLambdaVars lerpLambdas)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &current;
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &lastTarget;
			ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &target;
			ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref deltaTime;
			ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &lerpLambdas;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(OrbitCameraState.LerpVariables.NativeMethodInfoPtr_SmoothLerp_Public_Static_LerpVariables_byref_LerpVariables_byref_LerpVariables_byref_LerpVariables_Single_byref_LerpLambdaVars_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OrbitCameraState.LerpVariables>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_OrbitDistance;
		private static readonly IntPtr NativeFieldInfoPtr_OrbitYaw;
		private static readonly IntPtr NativeFieldInfoPtr_OrbitPitch;
		private static readonly IntPtr NativeFieldInfoPtr_AnchorPosition;
		private static readonly IntPtr NativeFieldInfoPtr_AnchorRotation;
		private static readonly IntPtr NativeMethodInfoPtr_SmoothLerp_Public_Static_LerpVariables_byref_LerpVariables_byref_LerpVariables_byref_LerpVariables_Single_byref_LerpLambdaVars_0;

		public float OrbitDistance;

		public float OrbitYaw;

		public float OrbitPitch;

		public float3 AnchorPosition;

		public quaternion AnchorRotation;
	}
}
```

## Client Systems

- [OrbitCameraSystem]({{% relref "systems/client/OrbitCameraSystem.md" %}})
