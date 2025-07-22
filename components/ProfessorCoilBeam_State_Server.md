---
nav_exclude: true
search_exclude: true
---

# ProfessorCoilBeam_State_Server

```csharp
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

	public Entity Event;

	public int CoilIndex0;

	public int CoilIndex1;

	public ProfessorCoilBeamState State;
}
```

## Server Systems

- [ProfessorCoilSystem_Server_OnPersistenceLoaded](/systems/server/ProfessorCoilSystem_Server_OnPersistenceLoaded)
