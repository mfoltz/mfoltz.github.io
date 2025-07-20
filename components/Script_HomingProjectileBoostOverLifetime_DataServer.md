---
nav_exclude: true
search_exclude: true
---

# Script_HomingProjectileBoostOverLifetime_DataServer

```csharp
public struct Script_HomingProjectileBoostOverLifetime_DataServer
{
	static Script_HomingProjectileBoostOverLifetime_DataServer()
	{
		Il2CppClassPointerStore<Script_HomingProjectileBoostOverLifetime_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_HomingProjectileBoostOverLifetime_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_HomingProjectileBoostOverLifetime_DataServer>.NativeClassPtr);
		Script_HomingProjectileBoostOverLifetime_DataServer.NativeFieldInfoPtr_TargetHitFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingProjectileBoostOverLifetime_DataServer>.NativeClassPtr, "TargetHitFilter");
		Script_HomingProjectileBoostOverLifetime_DataServer.NativeFieldInfoPtr_TimeFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingProjectileBoostOverLifetime_DataServer>.NativeClassPtr, "TimeFactor");
		Script_HomingProjectileBoostOverLifetime_DataServer.NativeFieldInfoPtr_DamageParameters = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingProjectileBoostOverLifetime_DataServer>.NativeClassPtr, "DamageParameters");
		Script_HomingProjectileBoostOverLifetime_DataServer.NativeFieldInfoPtr_GameplayEventHitId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingProjectileBoostOverLifetime_DataServer>.NativeClassPtr, "GameplayEventHitId");
		Script_HomingProjectileBoostOverLifetime_DataServer.NativeFieldInfoPtr_TargetFilterCondition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingProjectileBoostOverLifetime_DataServer>.NativeClassPtr, "TargetFilterCondition");
		Script_HomingProjectileBoostOverLifetime_DataServer.NativeFieldInfoPtr_InternalHitCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingProjectileBoostOverLifetime_DataServer>.NativeClassPtr, "InternalHitCooldown");
		Script_HomingProjectileBoostOverLifetime_DataServer.NativeFieldInfoPtr_MinTimer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingProjectileBoostOverLifetime_DataServer>.NativeClassPtr, "MinTimer");
		Script_HomingProjectileBoostOverLifetime_DataServer.NativeFieldInfoPtr_MaxTimer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingProjectileBoostOverLifetime_DataServer>.NativeClassPtr, "MaxTimer");
		Script_HomingProjectileBoostOverLifetime_DataServer.NativeFieldInfoPtr_HitFX_Y_Offset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingProjectileBoostOverLifetime_DataServer>.NativeClassPtr, "HitFX_Y_Offset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_HomingProjectileBoostOverLifetime_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetHitFilter;
	private static readonly IntPtr NativeFieldInfoPtr_TimeFactor;
	private static readonly IntPtr NativeFieldInfoPtr_DamageParameters;
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEventHitId;
	private static readonly IntPtr NativeFieldInfoPtr_TargetFilterCondition;
	private static readonly IntPtr NativeFieldInfoPtr_InternalHitCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_MinTimer;
	private static readonly IntPtr NativeFieldInfoPtr_MaxTimer;
	private static readonly IntPtr NativeFieldInfoPtr_HitFX_Y_Offset;

	public HitFilter TargetHitFilter;

	public float TimeFactor;

	public DealDamageParameters DamageParameters;

	public GameplayEventId GameplayEventHitId;

	public BlobAssetReference<ConditionBlob> TargetFilterCondition;

	public float InternalHitCooldown;

	public float MinTimer;

	public float MaxTimer;

	public float HitFX_Y_Offset;
}
```
