---
nav_exclude: true
search_exclude: true
---

# Script_CreateGameplayEventOnHitBuffPriority_DataServer

```csharp
[StructLayout(2)]
public struct Script_CreateGameplayEventOnHitBuffPriority_DataServer
{
	static Script_CreateGameplayEventOnHitBuffPriority_DataServer()
	{
		Il2CppClassPointerStore<Script_CreateGameplayEventOnHitBuffPriority_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_CreateGameplayEventOnHitBuffPriority_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitBuffPriority_DataServer>.NativeClassPtr);
		Script_CreateGameplayEventOnHitBuffPriority_DataServer.NativeFieldInfoPtr_TargetHitFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitBuffPriority_DataServer>.NativeClassPtr, "TargetHitFilter");
		Script_CreateGameplayEventOnHitBuffPriority_DataServer.NativeFieldInfoPtr_GameplayEventHitId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitBuffPriority_DataServer>.NativeClassPtr, "GameplayEventHitId");
		Script_CreateGameplayEventOnHitBuffPriority_DataServer.NativeFieldInfoPtr_InternalHitCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitBuffPriority_DataServer>.NativeClassPtr, "InternalHitCooldown");
		Script_CreateGameplayEventOnHitBuffPriority_DataServer.NativeFieldInfoPtr_BuffEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitBuffPriority_DataServer>.NativeClassPtr, "BuffEntity");
		Script_CreateGameplayEventOnHitBuffPriority_DataServer.NativeFieldInfoPtr_AddToPriorityListIfHasBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitBuffPriority_DataServer>.NativeClassPtr, "AddToPriorityListIfHasBuff");
		Script_CreateGameplayEventOnHitBuffPriority_DataServer.NativeFieldInfoPtr_TickTimer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitBuffPriority_DataServer>.NativeClassPtr, "TickTimer");
		Script_CreateGameplayEventOnHitBuffPriority_DataServer.NativeFieldInfoPtr_CurrentTickTimer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitBuffPriority_DataServer>.NativeClassPtr, "CurrentTickTimer");
		Script_CreateGameplayEventOnHitBuffPriority_DataServer.NativeFieldInfoPtr_TargetFilterCondition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitBuffPriority_DataServer>.NativeClassPtr, "TargetFilterCondition");
		Script_CreateGameplayEventOnHitBuffPriority_DataServer.NativeFieldInfoPtr_OverrideRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitBuffPriority_DataServer>.NativeClassPtr, "OverrideRadius");
		Script_CreateGameplayEventOnHitBuffPriority_DataServer.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitBuffPriority_DataServer>.NativeClassPtr, "Radius");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitBuffPriority_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetHitFilter;
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEventHitId;
	private static readonly IntPtr NativeFieldInfoPtr_InternalHitCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_BuffEntity;
	private static readonly IntPtr NativeFieldInfoPtr_AddToPriorityListIfHasBuff;
	private static readonly IntPtr NativeFieldInfoPtr_TickTimer;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentTickTimer;
	private static readonly IntPtr NativeFieldInfoPtr_TargetFilterCondition;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideRadius;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	[FieldOffset(0)]
	public HitFilter TargetHitFilter;
	[FieldOffset(4)]
	public GameplayEventId GameplayEventHitId;
	[FieldOffset(12)]
	public float InternalHitCooldown;
	[FieldOffset(16)]
	public PrefabGUID BuffEntity;
	[FieldOffset(20)]
	[MarshalAs(4)]
	public bool AddToPriorityListIfHasBuff;
	[FieldOffset(24)]
	public float TickTimer;
	[FieldOffset(32)]
	public double CurrentTickTimer;
	[FieldOffset(40)]
	public BlobAssetReference<ConditionBlob> TargetFilterCondition;
	[FieldOffset(48)]
	[MarshalAs(4)]
	public bool OverrideRadius;
	[FieldOffset(52)]
	public float Radius;
}
