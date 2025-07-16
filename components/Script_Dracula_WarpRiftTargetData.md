# Script_Dracula_WarpRiftTargetData

```csharp
[StructLayout(2)]
public struct Script_Dracula_WarpRiftTargetData
{
	static Script_Dracula_WarpRiftTargetData()
	{
		Il2CppClassPointerStore<Script_Dracula_WarpRiftTargetData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Dracula_WarpRiftTargetData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Dracula_WarpRiftTargetData>.NativeClassPtr);
		Script_Dracula_WarpRiftTargetData.NativeFieldInfoPtr_InActiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftTargetData>.NativeClassPtr, "InActiveSequenceState");
		Script_Dracula_WarpRiftTargetData.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftTargetData>.NativeClassPtr, "Target");
		Script_Dracula_WarpRiftTargetData.NativeFieldInfoPtr_ProxySyncPositionModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftTargetData>.NativeClassPtr, "ProxySyncPositionModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Dracula_WarpRiftTargetData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_InActiveSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_ProxySyncPositionModId;
	[FieldOffset(0)]
	public SequenceState InActiveSequenceState;
	[FieldOffset(8)]
	public NetworkedEntity Target;
	[FieldOffset(20)]
	public ModificationId ProxySyncPositionModId;
}
