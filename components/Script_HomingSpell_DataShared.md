---
nav_exclude: true
search_exclude: true
---

# Script_HomingSpell_DataShared

```csharp
public struct Script_HomingSpell_DataShared
{
	static Script_HomingSpell_DataShared()
	{
		Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Script_HomingSpell_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr);
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_SyncPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "SyncPosition");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_SyncRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "SyncRotation");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_SyncServerTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "SyncServerTime");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_SyncTargetPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "SyncTargetPosition");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_LastSyncedServerTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "LastSyncedServerTime");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_DistanceBasedData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "DistanceBasedData");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_PreHomingSpeedData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "PreHomingSpeedData");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_PreHomingRangeData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "PreHomingRangeData");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_HomingData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "HomingData");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_PreHomingMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "PreHomingMode");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "Type");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_PreHomingDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "PreHomingDuration");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_PreHomingWait = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "PreHomingWait");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_InitialHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "InitialHeight");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_GameplayHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "GameplayHeight");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_HomingInitiated = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "HomingInitiated");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_ResetHitTriggersOnChangeHomingMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "ResetHitTriggersOnChangeHomingMode");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_TriggerHitBeforeReturning = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "TriggerHitBeforeReturning");
		Script_HomingSpell_DataShared.NativeFieldInfoPtr_AllowHomingHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, "AllowHomingHeight");
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_HomingSpell_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SyncPosition;
	private static readonly IntPtr NativeFieldInfoPtr_SyncRotation;
	private static readonly IntPtr NativeFieldInfoPtr_SyncServerTime;
	private static readonly IntPtr NativeFieldInfoPtr_SyncTargetPosition;
	private static readonly IntPtr NativeFieldInfoPtr_LastSyncedServerTime;
	private static readonly IntPtr NativeFieldInfoPtr_DistanceBasedData;
	private static readonly IntPtr NativeFieldInfoPtr_PreHomingSpeedData;
	private static readonly IntPtr NativeFieldInfoPtr_PreHomingRangeData;
	private static readonly IntPtr NativeFieldInfoPtr_HomingData;
	private static readonly IntPtr NativeFieldInfoPtr_PreHomingMode;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_PreHomingDuration;
	private static readonly IntPtr NativeFieldInfoPtr_PreHomingWait;
	private static readonly IntPtr NativeFieldInfoPtr_InitialHeight;
	private static readonly IntPtr NativeFieldInfoPtr_GameplayHeight;
	private static readonly IntPtr NativeFieldInfoPtr_HomingInitiated;
	private static readonly IntPtr NativeFieldInfoPtr_ResetHitTriggersOnChangeHomingMode;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerHitBeforeReturning;
	private static readonly IntPtr NativeFieldInfoPtr_AllowHomingHeight;

	public float3 SyncPosition;

	public Quaternion SyncRotation;

	public double SyncServerTime;

	public float3 SyncTargetPosition;

	public double LastSyncedServerTime;

	public Homing_DistanceBasedData DistanceBasedData;

	public Homing_SpeedLerpData PreHomingSpeedData;

	public Homing_RangeLerpData PreHomingRangeData;

	public Homing_LerpData HomingData;

	public Script_HomingSpell_DataShared.PreHomingModeType PreHomingMode;

	public Script_HomingSpell_DataShared.HomingSpellType Type;

	public float PreHomingDuration;

	public float PreHomingWait;

	public float InitialHeight;

	public float GameplayHeight;

	public bool HomingInitiated;

	public bool ResetHitTriggersOnChangeHomingMode;

	public bool TriggerHitBeforeReturning;

	public bool AllowHomingHeight;
	public enum PreHomingModeType
	{
		None,
		MoveConstantly,
		MoveToRange
	}
	public enum HomingSpellType
	{
		LifeTimeBased,
		DistanceBased
	}
}
```
