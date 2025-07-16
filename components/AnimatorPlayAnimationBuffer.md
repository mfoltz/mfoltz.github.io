# AnimatorPlayAnimationBuffer

```csharp
[StructLayout(2)]
public struct AnimatorPlayAnimationBuffer
{
	static AnimatorPlayAnimationBuffer()
	{
		Il2CppClassPointerStore<AnimatorPlayAnimationBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "AnimatorPlayAnimationBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AnimatorPlayAnimationBuffer>.NativeClassPtr);
		AnimatorPlayAnimationBuffer.NativeFieldInfoPtr_Animation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorPlayAnimationBuffer>.NativeClassPtr, "Animation");
		AnimatorPlayAnimationBuffer.NativeFieldInfoPtr_StateNameHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorPlayAnimationBuffer>.NativeClassPtr, "StateNameHash");
		AnimatorPlayAnimationBuffer.NativeFieldInfoPtr_SpeedParameterHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorPlayAnimationBuffer>.NativeClassPtr, "SpeedParameterHash");
		AnimatorPlayAnimationBuffer.NativeFieldInfoPtr_NormalizedTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorPlayAnimationBuffer>.NativeClassPtr, "NormalizedTime");
		AnimatorPlayAnimationBuffer.NativeFieldInfoPtr_BlendInTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorPlayAnimationBuffer>.NativeClassPtr, "BlendInTime");
		AnimatorPlayAnimationBuffer.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorPlayAnimationBuffer>.NativeClassPtr, "Duration");
		AnimatorPlayAnimationBuffer.NativeFieldInfoPtr_PlaybackSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorPlayAnimationBuffer>.NativeClassPtr, "PlaybackSpeed");
		AnimatorPlayAnimationBuffer.NativeFieldInfoPtr_AnimationType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorPlayAnimationBuffer>.NativeClassPtr, "AnimationType");
		AnimatorPlayAnimationBuffer.NativeFieldInfoPtr_AnimationScaleMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorPlayAnimationBuffer>.NativeClassPtr, "AnimationScaleMode");
		AnimatorPlayAnimationBuffer.NativeFieldInfoPtr_AnimationLayerEnum = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorPlayAnimationBuffer>.NativeClassPtr, "AnimationLayerEnum");
		AnimatorPlayAnimationBuffer.NativeFieldInfoPtr_NullAnimation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorPlayAnimationBuffer>.NativeClassPtr, "NullAnimation");
		AnimatorPlayAnimationBuffer.NativeMethodInfoPtr_Log_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AnimatorPlayAnimationBuffer>.NativeClassPtr, 100685777);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 308851, XrefRangeEnd = 308904, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Log()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AnimatorPlayAnimationBuffer.NativeMethodInfoPtr_Log_Public_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AnimatorPlayAnimationBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Animation;
	private static readonly IntPtr NativeFieldInfoPtr_StateNameHash;
	private static readonly IntPtr NativeFieldInfoPtr_SpeedParameterHash;
	private static readonly IntPtr NativeFieldInfoPtr_NormalizedTime;
	private static readonly IntPtr NativeFieldInfoPtr_BlendInTime;
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	private static readonly IntPtr NativeFieldInfoPtr_PlaybackSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_AnimationType;
	private static readonly IntPtr NativeFieldInfoPtr_AnimationScaleMode;
	private static readonly IntPtr NativeFieldInfoPtr_AnimationLayerEnum;
	private static readonly IntPtr NativeFieldInfoPtr_NullAnimation;
	private static readonly IntPtr NativeMethodInfoPtr_Log_Public_Void_0;
	[FieldOffset(0)]
	public FixedString64Bytes Animation;
	[FieldOffset(64)]
	public int StateNameHash;
	[FieldOffset(68)]
	public int SpeedParameterHash;
	[FieldOffset(72)]
	public float NormalizedTime;
	[FieldOffset(76)]
	public float BlendInTime;
	[FieldOffset(80)]
	public float Duration;
	[FieldOffset(84)]
	public float PlaybackSpeed;
	[FieldOffset(88)]
	public AnimationTypeEnum AnimationType;
	[FieldOffset(89)]
	public AnimationScaleModeEnum AnimationScaleMode;
	[FieldOffset(92)]
	public AnimationLayerEnum AnimationLayerEnum;
	[FieldOffset(96)]
	[MarshalAs(4)]
	public bool NullAnimation;
}
