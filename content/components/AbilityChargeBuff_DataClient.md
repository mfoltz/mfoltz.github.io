---
nav_exclude: true
search_exclude: true
---

# AbilityChargeBuff_DataClient

```csharp
public struct AbilityChargeBuff_DataClient
{
	static AbilityChargeBuff_DataClient()
	{
		Il2CppClassPointerStore<AbilityChargeBuff_DataClient>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "AbilityChargeBuff_DataClient");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityChargeBuff_DataClient>.NativeClassPtr);
		AbilityChargeBuff_DataClient.NativeFieldInfoPtr_ChargedSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeBuff_DataClient>.NativeClassPtr, "ChargedSequence");
		AbilityChargeBuff_DataClient.NativeFieldInfoPtr_ActiveSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeBuff_DataClient>.NativeClassPtr, "ActiveSequence");
		AbilityChargeBuff_DataClient.NativeFieldInfoPtr_ActiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeBuff_DataClient>.NativeClassPtr, "ActiveSequenceState");
		AbilityChargeBuff_DataClient.NativeFieldInfoPtr_PreviousIsActive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeBuff_DataClient>.NativeClassPtr, "PreviousIsActive");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityChargeBuff_DataClient>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ChargedSequence;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequence;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_PreviousIsActive;

	public SequenceGUID ChargedSequence;

	public SequenceGUID ActiveSequence;

	public SequenceState ActiveSequenceState;

	public bool PreviousIsActive;
}
```
