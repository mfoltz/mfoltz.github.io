# PlaySequenceOnGameplayEvent

```csharp
[StructLayout(2)]
public struct PlaySequenceOnGameplayEvent
{
	static PlaySequenceOnGameplayEvent()
	{
		Il2CppClassPointerStore<PlaySequenceOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PlaySequenceOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlaySequenceOnGameplayEvent>.NativeClassPtr);
		PlaySequenceOnGameplayEvent.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlaySequenceOnGameplayEvent>.NativeClassPtr, "SequenceGuid");
		PlaySequenceOnGameplayEvent.NativeFieldInfoPtr_SequencePositionTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlaySequenceOnGameplayEvent>.NativeClassPtr, "SequencePositionTarget");
		PlaySequenceOnGameplayEvent.NativeFieldInfoPtr_SequenceRotationTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlaySequenceOnGameplayEvent>.NativeClassPtr, "SequenceRotationTarget");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlaySequenceOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_SequencePositionTarget;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceRotationTarget;
	[FieldOffset(0)]
	public SequenceGUID SequenceGuid;
	[FieldOffset(4)]
	public PlaySequenceOnGameplayEventTarget SequencePositionTarget;
	[FieldOffset(8)]
	public PlaySequenceOnGameplayEventTarget SequenceRotationTarget;
}
