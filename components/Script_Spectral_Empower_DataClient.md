---
nav_exclude: true
search_exclude: false
---

# Script_Spectral_Empower_DataClient

```csharp
public struct Script_Spectral_Empower_DataClient
{
	static Script_Spectral_Empower_DataClient()
	{
		Il2CppClassPointerStore<Script_Spectral_Empower_DataClient>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Spectral_Empower_DataClient");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Spectral_Empower_DataClient>.NativeClassPtr);
		Script_Spectral_Empower_DataClient.NativeFieldInfoPtr_EmpowerSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Spectral_Empower_DataClient>.NativeClassPtr, "EmpowerSequence");
		Script_Spectral_Empower_DataClient.NativeFieldInfoPtr_EmpowerSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Spectral_Empower_DataClient>.NativeClassPtr, "EmpowerSequenceState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Spectral_Empower_DataClient>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EmpowerSequence;
	private static readonly IntPtr NativeFieldInfoPtr_EmpowerSequenceState;

	public SequenceGUID EmpowerSequence;

	public SequenceState EmpowerSequenceState;
}
```
