---
nav_exclude: true
search_exclude: false
---

# AnimatorPlayAnimationBuffer

```csharp
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

	public FixedString64Bytes Animation;

	public int StateNameHash;

	public int SpeedParameterHash;

	public float NormalizedTime;

	public float BlendInTime;

	public float Duration;

	public float PlaybackSpeed;

	public AnimationTypeEnum AnimationType;

	public AnimationScaleModeEnum AnimationScaleMode;

	public AnimationLayerEnum AnimationLayerEnum;

	public bool NullAnimation;
}
```

## Client Systems

- [SetHybridModelAnimationSystem](/systems/client/SetHybridModelAnimationSystem)
