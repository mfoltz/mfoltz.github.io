---
nav_exclude: true
search_exclude: true
---

```csharp
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

	public ModificationId AllowJumpFromCliffsModId;

	public ModificationId MaxAngleModId;

	public ModificationId BuffableStateFlagsModification;

	public CurveReference SpeedZoomCurve;

	public SequenceGUID SequenceGuid;

	public float FeedProgressTime;

	public float FeedTime;

	public bool IsFed;

	public FixedString64Bytes Name;

	public float MaxHealth;

	public float Health;
}
```

## Server Systems

- [MountBuffSpawnSystem_Server]({{% relref "systems/server/MountBuffSpawnSystem_Server.md" %}})
- [MountSystem_Server]({{% relref "systems/server/MountSystem_Server.md" %}})
- [MountSystem_Shared]({{% relref "systems/server/MountSystem_Shared.md" %}})

## Client Systems

- [MountBuffSpawnSystem_Client]({{% relref "systems/client/MountBuffSpawnSystem_Client.md" %}})
- [MountSystem_Shared]({{% relref "systems/client/MountSystem_Shared.md" %}})
- [MountZoomModifierSystem]({{% relref "systems/client/MountZoomModifierSystem.md" %}})
