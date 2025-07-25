---
nav_exclude: true
search_exclude: true
---

# AnimatorLastState

```csharp
public struct AnimatorLastState
{
	static AnimatorLastState()
	{
		Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "AnimatorLastState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr);
		AnimatorLastState.NativeFieldInfoPtr_Animation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "Animation");
		AnimatorLastState.NativeFieldInfoPtr_StartTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "StartTime");
		AnimatorLastState.NativeFieldInfoPtr_StateNameHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "StateNameHash");
		AnimatorLastState.NativeFieldInfoPtr_SpeedParameterHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "SpeedParameterHash");
		AnimatorLastState.NativeFieldInfoPtr_BlendIn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "BlendIn");
		AnimatorLastState.NativeFieldInfoPtr_BlendOut = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "BlendOut");
		AnimatorLastState.NativeFieldInfoPtr_BlendOutIfRunning = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "BlendOutIfRunning");
		AnimatorLastState.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "Duration");
		AnimatorLastState.NativeFieldInfoPtr_Importance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "Importance");
		AnimatorLastState.NativeFieldInfoPtr_FullBodyLayerWeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "FullBodyLayerWeight");
		AnimatorLastState.NativeFieldInfoPtr_UpperBodyLayerWeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "UpperBodyLayerWeight");
		AnimatorLastState.NativeFieldInfoPtr_AnimationType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "AnimationType");
		AnimatorLastState.NativeFieldInfoPtr_AnimationLayer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "AnimationLayer");
		AnimatorLastState.NativeFieldInfoPtr_UseChestAimIk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "UseChestAimIk");
		AnimatorLastState.NativeFieldInfoPtr_ExitIfRunning = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "ExitIfRunning");
		AnimatorLastState.NativeFieldInfoPtr_HasTransitionedOut = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "HasTransitionedOut");
		AnimatorLastState.NativeFieldInfoPtr_HasTransitionedOutIfMoving = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "HasTransitionedOutIfMoving");
		AnimatorLastState.NativeFieldInfoPtr_HasState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "HasState");
		AnimatorLastState.NativeFieldInfoPtr_FinishPlaying = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, "FinishPlaying");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AnimatorLastState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Animation;
	private static readonly IntPtr NativeFieldInfoPtr_StartTime;
	private static readonly IntPtr NativeFieldInfoPtr_StateNameHash;
	private static readonly IntPtr NativeFieldInfoPtr_SpeedParameterHash;
	private static readonly IntPtr NativeFieldInfoPtr_BlendIn;
	private static readonly IntPtr NativeFieldInfoPtr_BlendOut;
	private static readonly IntPtr NativeFieldInfoPtr_BlendOutIfRunning;
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	private static readonly IntPtr NativeFieldInfoPtr_Importance;
	private static readonly IntPtr NativeFieldInfoPtr_FullBodyLayerWeight;
	private static readonly IntPtr NativeFieldInfoPtr_UpperBodyLayerWeight;
	private static readonly IntPtr NativeFieldInfoPtr_AnimationType;
	private static readonly IntPtr NativeFieldInfoPtr_AnimationLayer;
	private static readonly IntPtr NativeFieldInfoPtr_UseChestAimIk;
	private static readonly IntPtr NativeFieldInfoPtr_ExitIfRunning;
	private static readonly IntPtr NativeFieldInfoPtr_HasTransitionedOut;
	private static readonly IntPtr NativeFieldInfoPtr_HasTransitionedOutIfMoving;
	private static readonly IntPtr NativeFieldInfoPtr_HasState;
	private static readonly IntPtr NativeFieldInfoPtr_FinishPlaying;

	public FixedString64Bytes Animation;

	public double StartTime;

	public int StateNameHash;

	public int SpeedParameterHash;

	public float BlendIn;

	public float BlendOut;

	public float BlendOutIfRunning;

	public float Duration;

	public int Importance;

	public float FullBodyLayerWeight;

	public float UpperBodyLayerWeight;

	public AnimationTypeEnum AnimationType;

	public AnimationLayerEnum AnimationLayer;

	public bool UseChestAimIk;

	public bool ExitIfRunning;

	public bool HasTransitionedOut;

	public bool HasTransitionedOutIfMoving;

	public bool HasState;

	public FinishPlayingEnum FinishPlaying;
}
```

## Client Systems

- [ChestAimTargetWeightAnimationSystem](/systems/client/ChestAimTargetWeightAnimationSystem)
