# Script_BloodTrack_HomingSpell_Data

```csharp
[StructLayout(2)]
public struct Script_BloodTrack_HomingSpell_Data
{
	static Script_BloodTrack_HomingSpell_Data()
	{
		Il2CppClassPointerStore<Script_BloodTrack_HomingSpell_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_BloodTrack_HomingSpell_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_BloodTrack_HomingSpell_Data>.NativeClassPtr);
		Script_BloodTrack_HomingSpell_Data.NativeFieldInfoPtr_EventOnHomingStart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BloodTrack_HomingSpell_Data>.NativeClassPtr, "EventOnHomingStart");
		Script_BloodTrack_HomingSpell_Data.NativeFieldInfoPtr_DestroyWhenOwnerReached = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BloodTrack_HomingSpell_Data>.NativeClassPtr, "DestroyWhenOwnerReached");
		Script_BloodTrack_HomingSpell_Data.NativeFieldInfoPtr_DestroyWhenOwnerReachedDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BloodTrack_HomingSpell_Data>.NativeClassPtr, "DestroyWhenOwnerReachedDistance");
		Script_BloodTrack_HomingSpell_Data.NativeFieldInfoPtr_SetSpellTargetToOwnerWhenTargetReached = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BloodTrack_HomingSpell_Data>.NativeClassPtr, "SetSpellTargetToOwnerWhenTargetReached");
		Script_BloodTrack_HomingSpell_Data.NativeFieldInfoPtr_DistanceToTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BloodTrack_HomingSpell_Data>.NativeClassPtr, "DistanceToTarget");
		Script_BloodTrack_HomingSpell_Data.NativeFieldInfoPtr_LockProjectileHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BloodTrack_HomingSpell_Data>.NativeClassPtr, "LockProjectileHeight");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_BloodTrack_HomingSpell_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventOnHomingStart;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyWhenOwnerReached;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyWhenOwnerReachedDistance;
	private static readonly IntPtr NativeFieldInfoPtr_SetSpellTargetToOwnerWhenTargetReached;
	private static readonly IntPtr NativeFieldInfoPtr_DistanceToTarget;
	private static readonly IntPtr NativeFieldInfoPtr_LockProjectileHeight;
	[FieldOffset(0)]
	public GameplayEventId EventOnHomingStart;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool DestroyWhenOwnerReached;
	[FieldOffset(12)]
	public float DestroyWhenOwnerReachedDistance;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool SetSpellTargetToOwnerWhenTargetReached;
	[FieldOffset(20)]
	public float DistanceToTarget;
	[FieldOffset(24)]
	[MarshalAs(4)]
	public bool LockProjectileHeight;
}
