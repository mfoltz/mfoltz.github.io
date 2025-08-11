---
nav_exclude: true
search_exclude: true
---

# AbilityCastSequenceData

```csharp
public struct AbilityCastSequenceData
{
	static AbilityCastSequenceData()
	{
		Il2CppClassPointerStore<AbilityCastSequenceData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AbilityCastSequenceData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityCastSequenceData>.NativeClassPtr);
		AbilityCastSequenceData.NativeFieldInfoPtr_SequencePrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastSequenceData>.NativeClassPtr, "SequencePrefab");
		AbilityCastSequenceData.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastSequenceData>.NativeClassPtr, "Target");
		AbilityCastSequenceData.NativeFieldInfoPtr_GetAITargetAimDistanceFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastSequenceData>.NativeClassPtr, "GetAITargetAimDistanceFactor");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityCastSequenceData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequencePrefab;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_GetAITargetAimDistanceFactor;

	public SequenceGUID SequencePrefab;

	public AbilityCastSequenceData.CastSequenceTarget Target;

	public bool GetAITargetAimDistanceFactor;
	public enum CastSequenceTarget
	{
		Self,
		Unit_Mount,
		Unit_Mounter
	}
}
```
