# ProfessorCoilBeam_State_Server

```csharp
[StructLayout(2)]
public struct ProfessorCoilBeam_State_Server
{
	static ProfessorCoilBeam_State_Server()
	{
		Il2CppClassPointerStore<ProfessorCoilBeam_State_Server>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ProfessorCoilBeam_State_Server");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProfessorCoilBeam_State_Server>.NativeClassPtr);
		ProfessorCoilBeam_State_Server.NativeFieldInfoPtr_Event = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilBeam_State_Server>.NativeClassPtr, "Event");
		ProfessorCoilBeam_State_Server.NativeFieldInfoPtr_CoilIndex0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilBeam_State_Server>.NativeClassPtr, "CoilIndex0");
		ProfessorCoilBeam_State_Server.NativeFieldInfoPtr_CoilIndex1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilBeam_State_Server>.NativeClassPtr, "CoilIndex1");
		ProfessorCoilBeam_State_Server.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilBeam_State_Server>.NativeClassPtr, "State");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProfessorCoilBeam_State_Server>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Event;
	private static readonly IntPtr NativeFieldInfoPtr_CoilIndex0;
	private static readonly IntPtr NativeFieldInfoPtr_CoilIndex1;
	private static readonly IntPtr NativeFieldInfoPtr_State;
	[FieldOffset(0)]
	public Entity Event;
	[FieldOffset(8)]
	public int CoilIndex0;
	[FieldOffset(12)]
	public int CoilIndex1;
	[FieldOffset(16)]
	public ProfessorCoilBeamState State;
}
