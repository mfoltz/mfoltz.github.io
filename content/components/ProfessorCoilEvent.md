---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ProfessorCoilEvent
{
	static ProfessorCoilEvent()
	{
		Il2CppClassPointerStore<ProfessorCoilEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ProfessorCoilEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProfessorCoilEvent>.NativeClassPtr);
		ProfessorCoilEvent.NativeFieldInfoPtr_Manager = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilEvent>.NativeClassPtr, "Manager");
		ProfessorCoilEvent.NativeFieldInfoPtr_PreviewTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilEvent>.NativeClassPtr, "PreviewTime");
		ProfessorCoilEvent.NativeFieldInfoPtr_BlastTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilEvent>.NativeClassPtr, "BlastTime");
		ProfessorCoilEvent.NativeFieldInfoPtr_RangeSq = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilEvent>.NativeClassPtr, "RangeSq");
		ProfessorCoilEvent.NativeFieldInfoPtr_BeamPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilEvent>.NativeClassPtr, "BeamPrefabGuid");
		ProfessorCoilEvent.NativeFieldInfoPtr_Priority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilEvent>.NativeClassPtr, "Priority");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProfessorCoilEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Manager;
	private static readonly IntPtr NativeFieldInfoPtr_PreviewTime;
	private static readonly IntPtr NativeFieldInfoPtr_BlastTime;
	private static readonly IntPtr NativeFieldInfoPtr_RangeSq;
	private static readonly IntPtr NativeFieldInfoPtr_BeamPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Priority;

	public Entity Manager;

	public float PreviewTime;

	public float BlastTime;

	public float RangeSq;

	public PrefabGUID BeamPrefabGuid;

	public int Priority;
}
```

## Server Systems

- [ProfessorCoilSystem_Server_OnPersistenceLoaded]({{% relref "systems/server/ProfessorCoilSystem_Server_OnPersistenceLoaded.md" %}})
