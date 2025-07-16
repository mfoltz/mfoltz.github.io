# Script_UndeadLeader_Teleport_DataServer

```csharp
[StructLayout(2)]
public struct Script_UndeadLeader_Teleport_DataServer
{
	static Script_UndeadLeader_Teleport_DataServer()
	{
		Il2CppClassPointerStore<Script_UndeadLeader_Teleport_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_UndeadLeader_Teleport_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_UndeadLeader_Teleport_DataServer>.NativeClassPtr);
		Script_UndeadLeader_Teleport_DataServer.NativeFieldInfoPtr_TeleportDistanceFromTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UndeadLeader_Teleport_DataServer>.NativeClassPtr, "TeleportDistanceFromTarget");
		Script_UndeadLeader_Teleport_DataServer.NativeFieldInfoPtr_StartSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UndeadLeader_Teleport_DataServer>.NativeClassPtr, "StartSequence");
		Script_UndeadLeader_Teleport_DataServer.NativeFieldInfoPtr_CurveReference = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UndeadLeader_Teleport_DataServer>.NativeClassPtr, "CurveReference");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_UndeadLeader_Teleport_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TeleportDistanceFromTarget;
	private static readonly IntPtr NativeFieldInfoPtr_StartSequence;
	private static readonly IntPtr NativeFieldInfoPtr_CurveReference;
	[FieldOffset(0)]
	public float TeleportDistanceFromTarget;
	[FieldOffset(4)]
	public SequenceGUID StartSequence;
	[FieldOffset(8)]
	public CurveReference CurveReference;
}
