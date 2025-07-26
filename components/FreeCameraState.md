# FreeCameraState

```csharp
[StructLayout(2)]
public struct FreeCameraState
{
	static FreeCameraState()
	{
		Il2CppClassPointerStore<FreeCameraState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "FreeCameraState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FreeCameraState>.NativeClassPtr);
		FreeCameraState.NativeFieldInfoPtr_StaticCamera = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FreeCameraState>.NativeClassPtr, "StaticCamera");
		FreeCameraState.NativeFieldInfoPtr_LastTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FreeCameraState>.NativeClassPtr, "LastTarget");
		FreeCameraState.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FreeCameraState>.NativeClassPtr, "Target");
		FreeCameraState.NativeFieldInfoPtr_Current = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FreeCameraState>.NativeClassPtr, "Current");
		FreeCameraState.NativeFieldInfoPtr_MovementSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FreeCameraState>.NativeClassPtr, "MovementSpeed");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FreeCameraState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StaticCamera;
	private static readonly IntPtr NativeFieldInfoPtr_LastTarget;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_Current;
	private static readonly IntPtr NativeFieldInfoPtr_MovementSpeed;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool StaticCamera;
	[FieldOffset(4)]
	public FreeCameraState.LerpVariables LastTarget;
	[FieldOffset(24)]
	public FreeCameraState.LerpVariables Target;
	[FieldOffset(44)]
	public FreeCameraState.LerpVariables Current;
	[FieldOffset(64)]
	public float MovementSpeed;
	[StructLayout(2)]
	public struct LerpVariables
	{
		static LerpVariables()
		{
			Il2CppClassPointerStore<FreeCameraState.LerpVariables>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<FreeCameraState>.NativeClassPtr, "LerpVariables");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FreeCameraState.LerpVariables>.NativeClassPtr);
			FreeCameraState.LerpVariables.NativeFieldInfoPtr_Yaw = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FreeCameraState.LerpVariables>.NativeClassPtr, "Yaw");
			FreeCameraState.LerpVariables.NativeFieldInfoPtr_Pitch = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FreeCameraState.LerpVariables>.NativeClassPtr, "Pitch");
			FreeCameraState.LerpVariables.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FreeCameraState.LerpVariables>.NativeClassPtr, "Position");
			FreeCameraState.LerpVariables.NativeMethodInfoPtr_SmoothLerp_Public_Static_LerpVariables_byref_LerpVariables_byref_LerpVariables_byref_LerpVariables_Single_byref_LerpLambdaVars_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<FreeCameraState.LerpVariables>.NativeClassPtr, 100663862);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1054197, XrefRangeEnd = 1054200, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe static FreeCameraState.LerpVariables SmoothLerp([In] ref FreeCameraState.LerpVariables current, [In] ref FreeCameraState.LerpVariables lastTarget, [In] ref FreeCameraState.LerpVariables target, float deltaTime, [In] ref FreeCamera.LerpLambdaVars lerpLambdas)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &current;
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &lastTarget;
			ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &target;
			ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref deltaTime;
			ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &lerpLambdas;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(FreeCameraState.LerpVariables.NativeMethodInfoPtr_SmoothLerp_Public_Static_LerpVariables_byref_LerpVariables_byref_LerpVariables_byref_LerpVariables_Single_byref_LerpLambdaVars_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FreeCameraState.LerpVariables>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_Yaw;
		private static readonly IntPtr NativeFieldInfoPtr_Pitch;
		private static readonly IntPtr NativeFieldInfoPtr_Position;
		private static readonly IntPtr NativeMethodInfoPtr_SmoothLerp_Public_Static_LerpVariables_byref_LerpVariables_byref_LerpVariables_byref_LerpVariables_Single_byref_LerpLambdaVars_0;
		[FieldOffset(0)]
		public float Yaw;
		[FieldOffset(4)]
		public float Pitch;
		[FieldOffset(8)]
		public float3 Position;
	}
}
