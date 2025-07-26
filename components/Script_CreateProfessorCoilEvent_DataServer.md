---
nav_exclude: true
search_exclude: true
---

# Script_CreateProfessorCoilEvent_DataServer

```csharp
public struct Script_CreateProfessorCoilEvent_DataServer
{
	static Script_CreateProfessorCoilEvent_DataServer()
	{
		Il2CppClassPointerStore<Script_CreateProfessorCoilEvent_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_CreateProfessorCoilEvent_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_CreateProfessorCoilEvent_DataServer>.NativeClassPtr);
		Script_CreateProfessorCoilEvent_DataServer.NativeFieldInfoPtr_EventType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateProfessorCoilEvent_DataServer>.NativeClassPtr, "EventType");
		Script_CreateProfessorCoilEvent_DataServer.NativeFieldInfoPtr_BeamCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateProfessorCoilEvent_DataServer>.NativeClassPtr, "BeamCount");
		Script_CreateProfessorCoilEvent_DataServer.NativeFieldInfoPtr_PreviewTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateProfessorCoilEvent_DataServer>.NativeClassPtr, "PreviewTime");
		Script_CreateProfessorCoilEvent_DataServer.NativeFieldInfoPtr_BlastTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateProfessorCoilEvent_DataServer>.NativeClassPtr, "BlastTime");
		Script_CreateProfessorCoilEvent_DataServer.NativeFieldInfoPtr_Range = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateProfessorCoilEvent_DataServer>.NativeClassPtr, "Range");
		Script_CreateProfessorCoilEvent_DataServer.NativeFieldInfoPtr_BeamPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateProfessorCoilEvent_DataServer>.NativeClassPtr, "BeamPrefabGuid");
		Script_CreateProfessorCoilEvent_DataServer.NativeFieldInfoPtr_Priority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateProfessorCoilEvent_DataServer>.NativeClassPtr, "Priority");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_CreateProfessorCoilEvent_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventType;
	private static readonly IntPtr NativeFieldInfoPtr_BeamCount;
	private static readonly IntPtr NativeFieldInfoPtr_PreviewTime;
	private static readonly IntPtr NativeFieldInfoPtr_BlastTime;
	private static readonly IntPtr NativeFieldInfoPtr_Range;
	private static readonly IntPtr NativeFieldInfoPtr_BeamPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Priority;

	public ProfessorCoilEventType EventType;

	public int BeamCount;

	public float PreviewTime;

	public float BlastTime;

	public float Range;

	public PrefabGUID BeamPrefabGuid;

	public int Priority;
}
```
