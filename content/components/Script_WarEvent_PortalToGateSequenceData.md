---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_WarEvent_PortalToGateSequenceData
{
	static Script_WarEvent_PortalToGateSequenceData()
	{
		Il2CppClassPointerStore<Script_WarEvent_PortalToGateSequenceData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared.WarEvents", "Script_WarEvent_PortalToGateSequenceData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_WarEvent_PortalToGateSequenceData>.NativeClassPtr);
		Script_WarEvent_PortalToGateSequenceData.NativeFieldInfoPtr_SequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_PortalToGateSequenceData>.NativeClassPtr, "SequenceState");
		Script_WarEvent_PortalToGateSequenceData.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_PortalToGateSequenceData>.NativeClassPtr, "SequenceGuid");
		Script_WarEvent_PortalToGateSequenceData.NativeFieldInfoPtr_GatePosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_PortalToGateSequenceData>.NativeClassPtr, "GatePosition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_WarEvent_PortalToGateSequenceData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_GatePosition;

	public SequenceState SequenceState;

	public SequenceGUID SequenceGuid;

	public float3 GatePosition;
}
```
