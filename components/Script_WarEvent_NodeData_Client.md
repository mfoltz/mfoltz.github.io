---
nav_exclude: true
search_exclude: true
---

# Script_WarEvent_NodeData_Client

```csharp
public struct Script_WarEvent_NodeData_Client
{
	static Script_WarEvent_NodeData_Client()
	{
		Il2CppClassPointerStore<Script_WarEvent_NodeData_Client>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared.WarEvents", "Script_WarEvent_NodeData_Client");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_WarEvent_NodeData_Client>.NativeClassPtr);
		Script_WarEvent_NodeData_Client.NativeFieldInfoPtr_ActivatedSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_NodeData_Client>.NativeClassPtr, "ActivatedSequenceGuid");
		Script_WarEvent_NodeData_Client.NativeFieldInfoPtr_ActiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_NodeData_Client>.NativeClassPtr, "ActiveSequenceState");
		Script_WarEvent_NodeData_Client.NativeFieldInfoPtr_ActiveSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_NodeData_Client>.NativeClassPtr, "ActiveSequenceGuid");
		Script_WarEvent_NodeData_Client.NativeFieldInfoPtr_InActiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_NodeData_Client>.NativeClassPtr, "InActiveSequenceState");
		Script_WarEvent_NodeData_Client.NativeFieldInfoPtr_InActiveSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_NodeData_Client>.NativeClassPtr, "InActiveSequenceGuid");
		Script_WarEvent_NodeData_Client.NativeFieldInfoPtr_DestroyingSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_NodeData_Client>.NativeClassPtr, "DestroyingSequenceState");
		Script_WarEvent_NodeData_Client.NativeFieldInfoPtr_DestroyingSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_NodeData_Client>.NativeClassPtr, "DestroyingSequenceGuid");
		Script_WarEvent_NodeData_Client.NativeFieldInfoPtr_LastGateState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_NodeData_Client>.NativeClassPtr, "LastGateState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_WarEvent_NodeData_Client>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ActivatedSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_InActiveSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_InActiveSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyingSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyingSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_LastGateState;

	public SequenceGUID ActivatedSequenceGuid;

	public SequenceState ActiveSequenceState;

	public SequenceGUID ActiveSequenceGuid;

	public SequenceState InActiveSequenceState;

	public SequenceGUID InActiveSequenceGuid;

	public SequenceState DestroyingSequenceState;

	public SequenceGUID DestroyingSequenceGuid;

	public Script_WarEvent_NodeData.GateState LastGateState;
}
```
