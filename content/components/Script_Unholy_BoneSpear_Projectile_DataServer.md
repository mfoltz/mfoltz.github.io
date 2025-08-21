---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_Unholy_BoneSpear_Projectile_DataServer
{
	static Script_Unholy_BoneSpear_Projectile_DataServer()
	{
		Il2CppClassPointerStore<Script_Unholy_BoneSpear_Projectile_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Unholy_BoneSpear_Projectile_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Projectile_DataServer>.NativeClassPtr);
		Script_Unholy_BoneSpear_Projectile_DataServer.NativeFieldInfoPtr_SpellDamage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Projectile_DataServer>.NativeClassPtr, "SpellDamage");
		Script_Unholy_BoneSpear_Projectile_DataServer.NativeFieldInfoPtr_ConsumeRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Projectile_DataServer>.NativeClassPtr, "ConsumeRadius");
		Script_Unholy_BoneSpear_Projectile_DataServer.NativeFieldInfoPtr_ExplosionRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Projectile_DataServer>.NativeClassPtr, "ExplosionRadius");
		Script_Unholy_BoneSpear_Projectile_DataServer.NativeFieldInfoPtr_BuffDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Projectile_DataServer>.NativeClassPtr, "BuffDuration");
		Script_Unholy_BoneSpear_Projectile_DataServer.NativeFieldInfoPtr_UnitType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Projectile_DataServer>.NativeClassPtr, "UnitType");
		Script_Unholy_BoneSpear_Projectile_DataServer.NativeFieldInfoPtr_BuffType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Projectile_DataServer>.NativeClassPtr, "BuffType");
		Script_Unholy_BoneSpear_Projectile_DataServer.NativeFieldInfoPtr_ExplosionSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Projectile_DataServer>.NativeClassPtr, "ExplosionSequence");
		Script_Unholy_BoneSpear_Projectile_DataServer.NativeFieldInfoPtr_ChargedBuffType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Projectile_DataServer>.NativeClassPtr, "ChargedBuffType");
		Script_Unholy_BoneSpear_Projectile_DataServer.NativeFieldInfoPtr_ConsumeHitFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Projectile_DataServer>.NativeClassPtr, "ConsumeHitFilter");
		Script_Unholy_BoneSpear_Projectile_DataServer.NativeFieldInfoPtr_ExplosionHitFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Projectile_DataServer>.NativeClassPtr, "ExplosionHitFilter");
		Script_Unholy_BoneSpear_Projectile_DataServer.NativeFieldInfoPtr_IsCharged = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Projectile_DataServer>.NativeClassPtr, "IsCharged");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Projectile_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellDamage;
	private static readonly IntPtr NativeFieldInfoPtr_ConsumeRadius;
	private static readonly IntPtr NativeFieldInfoPtr_ExplosionRadius;
	private static readonly IntPtr NativeFieldInfoPtr_BuffDuration;
	private static readonly IntPtr NativeFieldInfoPtr_UnitType;
	private static readonly IntPtr NativeFieldInfoPtr_BuffType;
	private static readonly IntPtr NativeFieldInfoPtr_ExplosionSequence;
	private static readonly IntPtr NativeFieldInfoPtr_ChargedBuffType;
	private static readonly IntPtr NativeFieldInfoPtr_ConsumeHitFilter;
	private static readonly IntPtr NativeFieldInfoPtr_ExplosionHitFilter;
	private static readonly IntPtr NativeFieldInfoPtr_IsCharged;

	public float SpellDamage;

	public float ConsumeRadius;

	public float ExplosionRadius;

	public float BuffDuration;

	public PrefabGUID UnitType;

	public PrefabGUID BuffType;

	public SequenceGUID ExplosionSequence;

	public PrefabGUID ChargedBuffType;

	public HitFilter ConsumeHitFilter;

	public HitFilter ExplosionHitFilter;

	public bool IsCharged;
}
```
