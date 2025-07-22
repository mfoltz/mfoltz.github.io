---
nav_exclude: true
search_exclude: false
---

# AnimatorNewState

```csharp
public struct AnimatorNewState
{
	static AnimatorNewState()
	{
		Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "AnimatorNewState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr);
		AnimatorNewState.NativeFieldInfoPtr_Animation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "Animation");
		AnimatorNewState.NativeFieldInfoPtr_StartTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "StartTime");
		AnimatorNewState.NativeFieldInfoPtr_StateNameHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "StateNameHash");
		AnimatorNewState.NativeFieldInfoPtr_SpeedParameterHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "SpeedParameterHash");
		AnimatorNewState.NativeFieldInfoPtr_NormalizedTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "NormalizedTime");
		AnimatorNewState.NativeFieldInfoPtr_BlendIn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "BlendIn");
		AnimatorNewState.NativeFieldInfoPtr_BlendOut = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "BlendOut");
		AnimatorNewState.NativeFieldInfoPtr_BlendOutIfRunning = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "BlendOutIfRunning");
		AnimatorNewState.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "Duration");
		AnimatorNewState.NativeFieldInfoPtr_PlaybackSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "PlaybackSpeed");
		AnimatorNewState.NativeFieldInfoPtr_Importance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "Importance");
		AnimatorNewState.NativeFieldInfoPtr_AnimationScaleMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "AnimationScaleMode");
		AnimatorNewState.NativeFieldInfoPtr_AnimationType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "AnimationType");
		AnimatorNewState.NativeFieldInfoPtr_ExitIfRunning = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "ExitIfRunning");
		AnimatorNewState.NativeFieldInfoPtr_CanPlayMultipleTimes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "CanPlayMultipleTimes");
		AnimatorNewState.NativeFieldInfoPtr_HasState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "HasState");
		AnimatorNewState.NativeFieldInfoPtr_UseChestAimIk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "UseChestAimIk");
		AnimatorNewState.NativeFieldInfoPtr_FinishPlaying = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, "FinishPlaying");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AnimatorNewState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Animation;
	private static readonly IntPtr NativeFieldInfoPtr_StartTime;
	private static readonly IntPtr NativeFieldInfoPtr_StateNameHash;
	private static readonly IntPtr NativeFieldInfoPtr_SpeedParameterHash;
	private static readonly IntPtr NativeFieldInfoPtr_NormalizedTime;
	private static readonly IntPtr NativeFieldInfoPtr_BlendIn;
	private static readonly IntPtr NativeFieldInfoPtr_BlendOut;
	private static readonly IntPtr NativeFieldInfoPtr_BlendOutIfRunning;
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	private static readonly IntPtr NativeFieldInfoPtr_PlaybackSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_Importance;
	private static readonly IntPtr NativeFieldInfoPtr_AnimationScaleMode;
	private static readonly IntPtr NativeFieldInfoPtr_AnimationType;
	private static readonly IntPtr NativeFieldInfoPtr_ExitIfRunning;
	private static readonly IntPtr NativeFieldInfoPtr_CanPlayMultipleTimes;
	private static readonly IntPtr NativeFieldInfoPtr_HasState;
	private static readonly IntPtr NativeFieldInfoPtr_UseChestAimIk;
	private static readonly IntPtr NativeFieldInfoPtr_FinishPlaying;

	public FixedString64Bytes Animation;

	public double StartTime;

	public int StateNameHash;

	public int SpeedParameterHash;

	public float NormalizedTime;

	public float BlendIn;

	public float BlendOut;

	public float BlendOutIfRunning;

	public float Duration;

	public float PlaybackSpeed;

	public int Importance;

	public AnimationScaleModeEnum AnimationScaleMode;

	public AnimationTypeEnum AnimationType;

	public bool ExitIfRunning;

	public bool CanPlayMultipleTimes;

	public bool HasState;

	public bool UseChestAimIk;

	public FinishPlayingEnum FinishPlaying;
}
```
