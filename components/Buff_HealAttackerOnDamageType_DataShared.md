---
nav_exclude: true
search_exclude: true
---

# Buff_HealAttackerOnDamageType_DataShared

```csharp
public struct Buff_HealAttackerOnDamageType_DataShared
{
	static Buff_HealAttackerOnDamageType_DataShared()
	{
		Il2CppClassPointerStore<Buff_HealAttackerOnDamageType_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Buff_HealAttackerOnDamageType_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Buff_HealAttackerOnDamageType_DataShared>.NativeClassPtr);
		Buff_HealAttackerOnDamageType_DataShared.NativeFieldInfoPtr_LeechFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_HealAttackerOnDamageType_DataShared>.NativeClassPtr, "LeechFactor");
		Buff_HealAttackerOnDamageType_DataShared.NativeFieldInfoPtr_OnDamageTakenListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_HealAttackerOnDamageType_DataShared>.NativeClassPtr, "OnDamageTakenListener");
		Buff_HealAttackerOnDamageType_DataShared.NativeFieldInfoPtr_DamageType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_HealAttackerOnDamageType_DataShared>.NativeClassPtr, "DamageType");
		Buff_HealAttackerOnDamageType_DataShared.NativeFieldInfoPtr_MaxLeech = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_HealAttackerOnDamageType_DataShared>.NativeClassPtr, "MaxLeech");
		Buff_HealAttackerOnDamageType_DataShared.NativeFieldInfoPtr_CurrentLeech = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_HealAttackerOnDamageType_DataShared>.NativeClassPtr, "CurrentLeech");
		Buff_HealAttackerOnDamageType_DataShared.NativeFieldInfoPtr_BonusLeechFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_HealAttackerOnDamageType_DataShared>.NativeClassPtr, "BonusLeechFactor");
		Buff_HealAttackerOnDamageType_DataShared.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_HealAttackerOnDamageType_DataShared>.NativeClassPtr, "Condition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Buff_HealAttackerOnDamageType_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LeechFactor;
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageTakenListener;
	private static readonly IntPtr NativeFieldInfoPtr_DamageType;
	private static readonly IntPtr NativeFieldInfoPtr_MaxLeech;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentLeech;
	private static readonly IntPtr NativeFieldInfoPtr_BonusLeechFactor;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;

	public float LeechFactor;

	public ListenerId OnDamageTakenListener;

	public MainDamageType DamageType;

	public float MaxLeech;

	public float CurrentLeech;

	public float BonusLeechFactor;

	public BlobAssetReference<ConditionBlob> Condition;
}
```
