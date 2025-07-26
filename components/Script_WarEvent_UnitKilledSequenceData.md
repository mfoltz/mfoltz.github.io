# Script_WarEvent_UnitKilledSequenceData

```csharp
[StructLayout(2)]
public struct Script_WarEvent_UnitKilledSequenceData
{
	static Script_WarEvent_UnitKilledSequenceData()
	{
		Il2CppClassPointerStore<Script_WarEvent_UnitKilledSequenceData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared.WarEvents", "Script_WarEvent_UnitKilledSequenceData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_WarEvent_UnitKilledSequenceData>.NativeClassPtr);
		Script_WarEvent_UnitKilledSequenceData.NativeFieldInfoPtr_SequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_UnitKilledSequenceData>.NativeClassPtr, "SequenceState");
		Script_WarEvent_UnitKilledSequenceData.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_UnitKilledSequenceData>.NativeClassPtr, "SequenceGuid");
		Script_WarEvent_UnitKilledSequenceData.NativeFieldInfoPtr_TargetPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarEvent_UnitKilledSequenceData>.NativeClassPtr, "TargetPosition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_WarEvent_UnitKilledSequenceData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_TargetPosition;
	[FieldOffset(0)]
	public SequenceState SequenceState;
	[FieldOffset(8)]
	public SequenceGUID SequenceGuid;
	[FieldOffset(12)]
	public float3 TargetPosition;
}
