---
nav_exclude: true
search_exclude: true
---

# MountBuff

```csharp
[StructLayout(2)]
public struct MountBuff
{
	static MountBuff()
	{
		Il2CppClassPointerStore<MountBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MountBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MountBuff>.NativeClassPtr);
		MountBuff.NativeFieldInfoPtr_AllowJumpFromCliffsModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MountBuff>.NativeClassPtr, "AllowJumpFromCliffsModId");
		MountBuff.NativeFieldInfoPtr_MaxAngleModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MountBuff>.NativeClassPtr, "MaxAngleModId");
		MountBuff.NativeFieldInfoPtr_BuffableStateFlagsModification = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MountBuff>.NativeClassPtr, "BuffableStateFlagsModification");
		MountBuff.NativeFieldInfoPtr_SpeedZoomCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MountBuff>.NativeClassPtr, "SpeedZoomCurve");
		MountBuff.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MountBuff>.NativeClassPtr, "SequenceGuid");
		MountBuff.NativeFieldInfoPtr_FeedProgressTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MountBuff>.NativeClassPtr, "FeedProgressTime");
		MountBuff.NativeFieldInfoPtr_FeedTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MountBuff>.NativeClassPtr, "FeedTime");
		MountBuff.NativeFieldInfoPtr_IsFed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MountBuff>.NativeClassPtr, "IsFed");
		MountBuff.NativeFieldInfoPtr_Name = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MountBuff>.NativeClassPtr, "Name");
		MountBuff.NativeFieldInfoPtr_MaxHealth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MountBuff>.NativeClassPtr, "MaxHealth");
		MountBuff.NativeFieldInfoPtr_Health = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MountBuff>.NativeClassPtr, "Health");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MountBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AllowJumpFromCliffsModId;
	private static readonly IntPtr NativeFieldInfoPtr_MaxAngleModId;
	private static readonly IntPtr NativeFieldInfoPtr_BuffableStateFlagsModification;
	private static readonly IntPtr NativeFieldInfoPtr_SpeedZoomCurve;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_FeedProgressTime;
	private static readonly IntPtr NativeFieldInfoPtr_FeedTime;
	private static readonly IntPtr NativeFieldInfoPtr_IsFed;
	private static readonly IntPtr NativeFieldInfoPtr_Name;
	private static readonly IntPtr NativeFieldInfoPtr_MaxHealth;
	private static readonly IntPtr NativeFieldInfoPtr_Health;
	[FieldOffset(0)]
	public ModificationId AllowJumpFromCliffsModId;
	[FieldOffset(4)]
	public ModificationId MaxAngleModId;
	[FieldOffset(8)]
	public ModificationId BuffableStateFlagsModification;
	[FieldOffset(12)]
	public CurveReference SpeedZoomCurve;
	[FieldOffset(20)]
	public SequenceGUID SequenceGuid;
	[FieldOffset(24)]
	public float FeedProgressTime;
	[FieldOffset(28)]
	public float FeedTime;
	[FieldOffset(32)]
	[MarshalAs(4)]
	public bool IsFed;
	[FieldOffset(34)]
	public FixedString64Bytes Name;
	[FieldOffset(100)]
	public float MaxHealth;
	[FieldOffset(104)]
	public float Health;
}
