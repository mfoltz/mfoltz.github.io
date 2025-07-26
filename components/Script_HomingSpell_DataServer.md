# Script_HomingSpell_DataServer

```csharp
[StructLayout(2)]
public struct Script_HomingSpell_DataServer
{
	static Script_HomingSpell_DataServer()
	{
		Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_HomingSpell_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr);
		Script_HomingSpell_DataServer.NativeFieldInfoPtr_EventOnHomingStart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr, "EventOnHomingStart");
		Script_HomingSpell_DataServer.NativeFieldInfoPtr_DestroyWhenOwnerReached = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr, "DestroyWhenOwnerReached");
		Script_HomingSpell_DataServer.NativeFieldInfoPtr_DestroyWhenOwnerReachedExtraDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr, "DestroyWhenOwnerReachedExtraDistance");
		Script_HomingSpell_DataServer.NativeFieldInfoPtr_SetSpellTargetToOwnerWhenTargetReached = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr, "SetSpellTargetToOwnerWhenTargetReached");
		Script_HomingSpell_DataServer.NativeFieldInfoPtr_DistanceToTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr, "DistanceToTarget");
		Script_HomingSpell_DataServer.NativeFieldInfoPtr_LockProjectileHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr, "LockProjectileHeight");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventOnHomingStart;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyWhenOwnerReached;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyWhenOwnerReachedExtraDistance;
	private static readonly IntPtr NativeFieldInfoPtr_SetSpellTargetToOwnerWhenTargetReached;
	private static readonly IntPtr NativeFieldInfoPtr_DistanceToTarget;
	private static readonly IntPtr NativeFieldInfoPtr_LockProjectileHeight;
	[FieldOffset(0)]
	public GameplayEventId EventOnHomingStart;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool DestroyWhenOwnerReached;
	[FieldOffset(12)]
	public float DestroyWhenOwnerReachedExtraDistance;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool SetSpellTargetToOwnerWhenTargetReached;
	[FieldOffset(20)]
	public float DistanceToTarget;
	[FieldOffset(24)]
	[MarshalAs(4)]
	public bool LockProjectileHeight;
}
