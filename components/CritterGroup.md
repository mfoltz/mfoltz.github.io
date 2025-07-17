---
nav_exclude: true
search_exclude: true
---

# CritterGroup

```csharp
[StructLayout(2)]
public struct CritterGroup
{
	static CritterGroup()
	{
		Il2CppClassPointerStore<CritterGroup>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CritterGroup");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CritterGroup>.NativeClassPtr);
		CritterGroup.NativeFieldInfoPtr_FleeSoundGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterGroup>.NativeClassPtr, "FleeSoundGuid");
		CritterGroup.NativeFieldInfoPtr_MinMaxCritters = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterGroup>.NativeClassPtr, "MinMaxCritters");
		CritterGroup.NativeFieldInfoPtr_ResetZoneRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterGroup>.NativeClassPtr, "ResetZoneRadius");
		CritterGroup.NativeFieldInfoPtr_ActivationZoneRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterGroup>.NativeClassPtr, "ActivationZoneRadius");
		CritterGroup.NativeFieldInfoPtr_EscapeZoneRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterGroup>.NativeClassPtr, "EscapeZoneRadius");
		CritterGroup.NativeFieldInfoPtr_SpawnZoneRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterGroup>.NativeClassPtr, "SpawnZoneRadius");
		CritterGroup.NativeFieldInfoPtr_MaxAliveTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterGroup>.NativeClassPtr, "MaxAliveTime");
		CritterGroup.NativeFieldInfoPtr_CurrentAliveTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterGroup>.NativeClassPtr, "CurrentAliveTime");
		CritterGroup.NativeFieldInfoPtr_BaseCritterGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterGroup>.NativeClassPtr, "BaseCritterGuid");
		CritterGroup.NativeFieldInfoPtr_NumCritters = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterGroup>.NativeClassPtr, "NumCritters");
		CritterGroup.NativeFieldInfoPtr_InnerActiveSphere = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterGroup>.NativeClassPtr, "InnerActiveSphere");
		CritterGroup.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterGroup>.NativeClassPtr, "State");
		CritterGroup.NativeFieldInfoPtr_IsTemporary = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterGroup>.NativeClassPtr, "IsTemporary");
		CritterGroup.NativeFieldInfoPtr_HasFleeSoundEvent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterGroup>.NativeClassPtr, "HasFleeSoundEvent");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CritterGroup>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FleeSoundGuid;
	private static readonly IntPtr NativeFieldInfoPtr_MinMaxCritters;
	private static readonly IntPtr NativeFieldInfoPtr_ResetZoneRadius;
	private static readonly IntPtr NativeFieldInfoPtr_ActivationZoneRadius;
	private static readonly IntPtr NativeFieldInfoPtr_EscapeZoneRadius;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnZoneRadius;
	private static readonly IntPtr NativeFieldInfoPtr_MaxAliveTime;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentAliveTime;
	private static readonly IntPtr NativeFieldInfoPtr_BaseCritterGuid;
	private static readonly IntPtr NativeFieldInfoPtr_NumCritters;
	private static readonly IntPtr NativeFieldInfoPtr_InnerActiveSphere;
	private static readonly IntPtr NativeFieldInfoPtr_State;
	private static readonly IntPtr NativeFieldInfoPtr_IsTemporary;
	private static readonly IntPtr NativeFieldInfoPtr_HasFleeSoundEvent;
	[FieldOffset(0)]
	public FmodEventGuid FleeSoundGuid;
	[FieldOffset(16)]
	public int2 MinMaxCritters;
	[FieldOffset(24)]
	public float ResetZoneRadius;
	[FieldOffset(28)]
	public float ActivationZoneRadius;
	[FieldOffset(32)]
	public float EscapeZoneRadius;
	[FieldOffset(36)]
	public float SpawnZoneRadius;
	[FieldOffset(40)]
	public float MaxAliveTime;
	[FieldOffset(44)]
	public float CurrentAliveTime;
	[FieldOffset(48)]
	public PrefabGUID BaseCritterGuid;
	[FieldOffset(52)]
	public int NumCritters;
	[FieldOffset(56)]
	public CritterSphere InnerActiveSphere;
	[FieldOffset(60)]
	public CritterGroupState State;
	[FieldOffset(64)]
	[MarshalAs(4)]
	public bool IsTemporary;
	[FieldOffset(65)]
	[MarshalAs(4)]
	public bool HasFleeSoundEvent;
}
