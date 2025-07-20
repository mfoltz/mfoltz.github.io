---
nav_exclude: true
search_exclude: true
---

# SequencerDebugHistoryInfo

```csharp
public struct SequencerDebugHistoryInfo
{
	static SequencerDebugHistoryInfo()
	{
		Il2CppClassPointerStore<SequencerDebugHistoryInfo>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer.Debugging", "SequencerDebugHistoryInfo");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SequencerDebugHistoryInfo>.NativeClassPtr);
		SequencerDebugHistoryInfo.NativeFieldInfoPtr_StateByteSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequencerDebugHistoryInfo>.NativeClassPtr, "StateByteSize");
		SequencerDebugHistoryInfo.NativeFieldInfoPtr_BlackboardByteSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequencerDebugHistoryInfo>.NativeClassPtr, "BlackboardByteSize");
		SequencerDebugHistoryInfo.NativeFieldInfoPtr_FrameCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequencerDebugHistoryInfo>.NativeClassPtr, "FrameCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SequencerDebugHistoryInfo>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StateByteSize;
	private static readonly IntPtr NativeFieldInfoPtr_BlackboardByteSize;
	private static readonly IntPtr NativeFieldInfoPtr_FrameCount;

	public int StateByteSize;

	public int BlackboardByteSize;

	public int FrameCount;
}
```
