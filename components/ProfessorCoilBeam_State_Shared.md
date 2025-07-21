---
nav_exclude: true
search_exclude: false
---

# ProfessorCoilBeam_State_Shared

```csharp
public struct ProfessorCoilBeam_State_Shared
{
	static ProfessorCoilBeam_State_Shared()
	{
		Il2CppClassPointerStore<ProfessorCoilBeam_State_Shared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ProfessorCoilBeam_State_Shared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProfessorCoilBeam_State_Shared>.NativeClassPtr);
		ProfessorCoilBeam_State_Shared.NativeFieldInfoPtr_Start = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilBeam_State_Shared>.NativeClassPtr, "Start");
		ProfessorCoilBeam_State_Shared.NativeFieldInfoPtr_End = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilBeam_State_Shared>.NativeClassPtr, "End");
		ProfessorCoilBeam_State_Shared.NativeFieldInfoPtr_PreviewTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilBeam_State_Shared>.NativeClassPtr, "PreviewTime");
		ProfessorCoilBeam_State_Shared.NativeFieldInfoPtr_BlastTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilBeam_State_Shared>.NativeClassPtr, "BlastTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProfessorCoilBeam_State_Shared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Start;
	private static readonly IntPtr NativeFieldInfoPtr_End;
	private static readonly IntPtr NativeFieldInfoPtr_PreviewTime;
	private static readonly IntPtr NativeFieldInfoPtr_BlastTime;

	public float3 Start;

	public float3 End;

	public float PreviewTime;

	public float BlastTime;
}
```

## Client Systems

- [ProfessorCoilSystem_Client](/systems/client/ProfessorCoilSystem_Client)
