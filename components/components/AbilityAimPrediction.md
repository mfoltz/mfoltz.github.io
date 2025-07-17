---
nav_exclude: true
search_exclude: true
---

# AbilityAimPrediction

```csharp
[StructLayout(2)]
public struct AbilityAimPrediction
{
	static AbilityAimPrediction()
	{
		Il2CppClassPointerStore<AbilityAimPrediction>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityAimPrediction");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityAimPrediction>.NativeClassPtr);
		AbilityAimPrediction.NativeFieldInfoPtr_AimPredictionFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityAimPrediction>.NativeClassPtr, "AimPredictionFactor");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityAimPrediction>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AimPredictionFactor;
	[FieldOffset(0)]
	public float AimPredictionFactor;
}
