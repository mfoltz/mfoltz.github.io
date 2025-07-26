---
nav_exclude: true
search_exclude: true
---

# Script_VampireInteractionSequence_Data

```csharp
public struct Script_VampireInteractionSequence_Data
{
	static Script_VampireInteractionSequence_Data()
	{
		Il2CppClassPointerStore<Script_VampireInteractionSequence_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_VampireInteractionSequence_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_VampireInteractionSequence_Data>.NativeClassPtr);
		Script_VampireInteractionSequence_Data.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_VampireInteractionSequence_Data>.NativeClassPtr, "SequenceGuid");
		Script_VampireInteractionSequence_Data.NativeFieldInfoPtr_SequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_VampireInteractionSequence_Data>.NativeClassPtr, "SequenceState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_VampireInteractionSequence_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceState;

	public SequenceGUID SequenceGuid;

	public SequenceState SequenceState;
}
```
