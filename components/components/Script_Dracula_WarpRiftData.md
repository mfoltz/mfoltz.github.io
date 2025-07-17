---
nav_exclude: true
search_exclude: true
---

# Script_Dracula_WarpRiftData

```csharp
[StructLayout(2)]
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
	[CallerCount(11)]
	[CachedScanResults(RefRangeStart = 1063175, RefRangeEnd = 1063186, XrefRangeStart = 1063175, XrefRangeEnd = 1063186, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
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
	[FieldOffset(0)]
	public Script_Dracula_WarpRiftData.RiftState State;
	[FieldOffset(4)]
	public SequenceState OpenSequenceState;
	[FieldOffset(12)]
	public SequenceGUID OpenSequenceGuid;
	[FieldOffset(16)]
	public SequenceState ChannelingSequenceState;
	[FieldOffset(24)]
	public SequenceGUID ChannelingSequenceGuid;
	[FieldOffset(28)]
	public SequenceState ClosedSequenceState;
	[FieldOffset(36)]
	public SequenceGUID ClosedSequenceGuid;
	[FieldOffset(40)]
	public SequenceGUID BeamSequenceGuid;
	[FieldOffset(44)]
	public SequenceGUID EnterSequenceGuid;
	[FieldOffset(48)]
	public SequenceGUID ExitSequenceGuid;
	[FieldOffset(52)]
	public PrefabGUID TeleportBuffGuid;
	[FieldOffset(56)]
	public float TimeUntilWarp;
	[FieldOffset(60)]
	public float Time;
	[FieldOffset(64)]
	public float Radius;
	[FieldOffset(72)]
	public double NextExploitCheckTime;
	public enum RiftState
	{
		Open,
		Channeling,
		Closed
	}
}
