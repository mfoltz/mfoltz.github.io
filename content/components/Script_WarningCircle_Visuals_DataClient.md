---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_WarningCircle_Visuals_DataClient
{
	static Script_WarningCircle_Visuals_DataClient()
	{
		Il2CppClassPointerStore<Script_WarningCircle_Visuals_DataClient>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_WarningCircle_Visuals_DataClient");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_WarningCircle_Visuals_DataClient>.NativeClassPtr);
		Script_WarningCircle_Visuals_DataClient.NativeFieldInfoPtr_FuseSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarningCircle_Visuals_DataClient>.NativeClassPtr, "FuseSequence");
		Script_WarningCircle_Visuals_DataClient.NativeFieldInfoPtr_FuseSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarningCircle_Visuals_DataClient>.NativeClassPtr, "FuseSequenceState");
		Script_WarningCircle_Visuals_DataClient.NativeFieldInfoPtr_OverrideScale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarningCircle_Visuals_DataClient>.NativeClassPtr, "OverrideScale");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_WarningCircle_Visuals_DataClient>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FuseSequence;
	private static readonly IntPtr NativeFieldInfoPtr_FuseSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideScale;

	public SequenceGUID FuseSequence;

	public SequenceState FuseSequenceState;

	public float OverrideScale;
}
```
