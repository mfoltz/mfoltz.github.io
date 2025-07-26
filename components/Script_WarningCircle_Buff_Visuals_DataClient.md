# Script_WarningCircle_Buff_Visuals_DataClient

```csharp
[StructLayout(2)]
public struct Script_WarningCircle_Buff_Visuals_DataClient
{
	static Script_WarningCircle_Buff_Visuals_DataClient()
	{
		Il2CppClassPointerStore<Script_WarningCircle_Buff_Visuals_DataClient>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_WarningCircle_Buff_Visuals_DataClient");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_WarningCircle_Buff_Visuals_DataClient>.NativeClassPtr);
		Script_WarningCircle_Buff_Visuals_DataClient.NativeFieldInfoPtr_FuseSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarningCircle_Buff_Visuals_DataClient>.NativeClassPtr, "FuseSequence");
		Script_WarningCircle_Buff_Visuals_DataClient.NativeFieldInfoPtr_FuseSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WarningCircle_Buff_Visuals_DataClient>.NativeClassPtr, "FuseSequenceState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_WarningCircle_Buff_Visuals_DataClient>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FuseSequence;
	private static readonly IntPtr NativeFieldInfoPtr_FuseSequenceState;
	[FieldOffset(0)]
	public SequenceGUID FuseSequence;
	[FieldOffset(4)]
	public SequenceState FuseSequenceState;
}
