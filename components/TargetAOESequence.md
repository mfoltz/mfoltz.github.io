---
nav_exclude: true
search_exclude: true
---

# TargetAOESequence

```csharp
public struct TargetAOESequence
{
	static TargetAOESequence()
	{
		Il2CppClassPointerStore<TargetAOESequence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TargetAOESequence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TargetAOESequence>.NativeClassPtr);
		TargetAOESequence.NativeFieldInfoPtr_Sequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAOESequence>.NativeClassPtr, "Sequence");
		TargetAOESequence.NativeFieldInfoPtr_ImpactSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAOESequence>.NativeClassPtr, "ImpactSequence");
		TargetAOESequence.NativeFieldInfoPtr_Instance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAOESequence>.NativeClassPtr, "Instance");
		TargetAOESequence.NativeFieldInfoPtr_TimeEvaluateCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAOESequence>.NativeClassPtr, "TimeEvaluateCurve");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TargetAOESequence>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Sequence;
	private static readonly IntPtr NativeFieldInfoPtr_ImpactSequence;
	private static readonly IntPtr NativeFieldInfoPtr_Instance;
	private static readonly IntPtr NativeFieldInfoPtr_TimeEvaluateCurve;

	public SequenceGUID Sequence;

	public SequenceGUID ImpactSequence;

	public SequenceState Instance;

	public CurveReference TimeEvaluateCurve;
}
```
