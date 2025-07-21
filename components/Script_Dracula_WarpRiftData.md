---
nav_exclude: true
search_exclude: false
---

# Script_Dracula_WarpRiftData

```csharp
public struct Script_Dracula_WarpRiftData
{
	static Script_Dracula_WarpRiftData()
	{
		Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Dracula_WarpRiftData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr);
		Script_Dracula_WarpRiftData.NativeFieldInfoPtr_EXPLOIT_CHECK_TIME = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, "EXPLOIT_CHECK_TIME");
		Script_Dracula_WarpRiftData.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, "State");
		Script_Dracula_WarpRiftData.NativeFieldInfoPtr_OpenSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, "OpenSequenceState");
		Script_Dracula_WarpRiftData.NativeFieldInfoPtr_OpenSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, "OpenSequenceGuid");
		Script_Dracula_WarpRiftData.NativeFieldInfoPtr_ChannelingSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, "ChannelingSequenceState");
		Script_Dracula_WarpRiftData.NativeFieldInfoPtr_ChannelingSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, "ChannelingSequenceGuid");
		Script_Dracula_WarpRiftData.NativeFieldInfoPtr_ClosedSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, "ClosedSequenceState");
		Script_Dracula_WarpRiftData.NativeFieldInfoPtr_ClosedSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, "ClosedSequenceGuid");
		Script_Dracula_WarpRiftData.NativeFieldInfoPtr_BeamSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, "BeamSequenceGuid");
		Script_Dracula_WarpRiftData.NativeFieldInfoPtr_EnterSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, "EnterSequenceGuid");
		Script_Dracula_WarpRiftData.NativeFieldInfoPtr_ExitSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, "ExitSequenceGuid");
		Script_Dracula_WarpRiftData.NativeFieldInfoPtr_TeleportBuffGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, "TeleportBuffGuid");
		Script_Dracula_WarpRiftData.NativeFieldInfoPtr_TimeUntilWarp = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, "TimeUntilWarp");
		Script_Dracula_WarpRiftData.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, "Time");
		Script_Dracula_WarpRiftData.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, "Radius");
		Script_Dracula_WarpRiftData.NativeFieldInfoPtr_NextExploitCheckTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, "NextExploitCheckTime");
		Script_Dracula_WarpRiftData.NativeMethodInfoPtr_SetRiftState_Public_Void_RiftState_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, 100664690);
	}

	public unsafe void SetRiftState(Script_Dracula_WarpRiftData.RiftState newState)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref newState;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Script_Dracula_WarpRiftData.NativeMethodInfoPtr_SetRiftState_Public_Void_RiftState_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Dracula_WarpRiftData>.NativeClassPtr, ref this));
	}
	public unsafe static float EXPLOIT_CHECK_TIME
	{
		get
		{
			float result;
			IL2CPP.il2cpp_field_static_get_value(Script_Dracula_WarpRiftData.NativeFieldInfoPtr_EXPLOIT_CHECK_TIME, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(Script_Dracula_WarpRiftData.NativeFieldInfoPtr_EXPLOIT_CHECK_TIME, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_EXPLOIT_CHECK_TIME;
	private static readonly IntPtr NativeFieldInfoPtr_State;
	private static readonly IntPtr NativeFieldInfoPtr_OpenSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_OpenSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ChannelingSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_ChannelingSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ClosedSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_ClosedSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_BeamSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_EnterSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ExitSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_TeleportBuffGuid;
	private static readonly IntPtr NativeFieldInfoPtr_TimeUntilWarp;
	private static readonly IntPtr NativeFieldInfoPtr_Time;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_NextExploitCheckTime;
	private static readonly IntPtr NativeMethodInfoPtr_SetRiftState_Public_Void_RiftState_0;

	public Script_Dracula_WarpRiftData.RiftState State;

	public SequenceState OpenSequenceState;

	public SequenceGUID OpenSequenceGuid;

	public SequenceState ChannelingSequenceState;

	public SequenceGUID ChannelingSequenceGuid;

	public SequenceState ClosedSequenceState;

	public SequenceGUID ClosedSequenceGuid;

	public SequenceGUID BeamSequenceGuid;

	public SequenceGUID EnterSequenceGuid;

	public SequenceGUID ExitSequenceGuid;

	public PrefabGUID TeleportBuffGuid;

	public float TimeUntilWarp;

	public float Time;

	public float Radius;

	public double NextExploitCheckTime;
	public enum RiftState
	{
		Open,
		Channeling,
		Closed
	}
}
```
