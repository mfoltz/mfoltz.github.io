---
nav_exclude: true
search_exclude: true
---

# LightningRodStation

```csharp
public struct LightningRodStation
{
	static LightningRodStation()
	{
		Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "LightningRodStation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr);
		LightningRodStation.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr, "State");
		LightningRodStation.NativeFieldInfoPtr_ProcessingRecipe = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr, "ProcessingRecipe");
		LightningRodStation.NativeFieldInfoPtr_Progress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr, "Progress");
		LightningRodStation.NativeFieldInfoPtr_ResetTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr, "ResetTime");
		LightningRodStation.NativeFieldInfoPtr_TimeToReset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr, "TimeToReset");
		LightningRodStation.NativeFieldInfoPtr_TimeProgressPerStrike = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr, "TimeProgressPerStrike");
		LightningRodStation.NativeFieldInfoPtr_ConsumerRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr, "ConsumerRadius");
		LightningRodStation.NativeFieldInfoPtr_ReadySequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr, "ReadySequenceGuid");
		LightningRodStation.NativeFieldInfoPtr_ReadySequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr, "ReadySequenceState");
		LightningRodStation.NativeFieldInfoPtr_WorkingSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr, "WorkingSequenceGuid");
		LightningRodStation.NativeFieldInfoPtr_WorkingSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr, "WorkingSequenceState");
		LightningRodStation.NativeFieldInfoPtr_CompleteSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr, "CompleteSequenceGuid");
		LightningRodStation.NativeFieldInfoPtr_CompleteSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr, "CompleteSequenceState");
		LightningRodStation.NativeFieldInfoPtr_OverloadedSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr, "OverloadedSequenceGuid");
		LightningRodStation.NativeFieldInfoPtr_OverloadedSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr, "OverloadedSequenceState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LightningRodStation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_State;
	private static readonly IntPtr NativeFieldInfoPtr_ProcessingRecipe;
	private static readonly IntPtr NativeFieldInfoPtr_Progress;
	private static readonly IntPtr NativeFieldInfoPtr_ResetTime;
	private static readonly IntPtr NativeFieldInfoPtr_TimeToReset;
	private static readonly IntPtr NativeFieldInfoPtr_TimeProgressPerStrike;
	private static readonly IntPtr NativeFieldInfoPtr_ConsumerRadius;
	private static readonly IntPtr NativeFieldInfoPtr_ReadySequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ReadySequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_WorkingSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_WorkingSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_CompleteSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_CompleteSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_OverloadedSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_OverloadedSequenceState;

	public LightningRodStationState State;

	public PrefabGUID ProcessingRecipe;

	public float Progress;

	public float ResetTime;

	public float TimeToReset;

	public float TimeProgressPerStrike;

	public float ConsumerRadius;

	public SequenceGUID ReadySequenceGuid;

	public SequenceState ReadySequenceState;

	public SequenceGUID WorkingSequenceGuid;

	public SequenceState WorkingSequenceState;

	public SequenceGUID CompleteSequenceGuid;

	public SequenceState CompleteSequenceState;

	public SequenceGUID OverloadedSequenceGuid;

	public SequenceState OverloadedSequenceState;
}
```
