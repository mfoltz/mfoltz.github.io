---
nav_exclude: true
search_exclude: true
---

```csharp
public struct RadialZone_Sequence
{
	static RadialZone_Sequence()
	{
		Il2CppClassPointerStore<RadialZone_Sequence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Gameplay.Scripting", "RadialZone_Sequence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RadialZone_Sequence>.NativeClassPtr);
		RadialZone_Sequence.NativeFieldInfoPtr_SequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RadialZone_Sequence>.NativeClassPtr, "SequenceState");
		RadialZone_Sequence.NativeFieldInfoPtr_EffectGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RadialZone_Sequence>.NativeClassPtr, "EffectGuid");
		RadialZone_Sequence.NativeFieldInfoPtr_AdditionalRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RadialZone_Sequence>.NativeClassPtr, "AdditionalRadius");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RadialZone_Sequence>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_EffectGuid;
	private static readonly IntPtr NativeFieldInfoPtr_AdditionalRadius;

	public SequenceState SequenceState;

	public SequenceGUID EffectGuid;

	public float AdditionalRadius;
}
```
