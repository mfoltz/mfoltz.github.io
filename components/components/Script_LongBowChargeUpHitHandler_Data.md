---
nav_exclude: true
search_exclude: true
---

# Script_LongBowChargeUpHitHandler_Data

```csharp
[StructLayout(2)]
public struct Script_LongBowChargeUpHitHandler_Data
{
	static Script_LongBowChargeUpHitHandler_Data()
	{
		Il2CppClassPointerStore<Script_LongBowChargeUpHitHandler_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_LongBowChargeUpHitHandler_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_LongBowChargeUpHitHandler_Data>.NativeClassPtr);
		Script_LongBowChargeUpHitHandler_Data.NativeFieldInfoPtr_MainDamageParameters = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LongBowChargeUpHitHandler_Data>.NativeClassPtr, "MainDamageParameters");
		Script_LongBowChargeUpHitHandler_Data.NativeFieldInfoPtr_ListenerEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LongBowChargeUpHitHandler_Data>.NativeClassPtr, "ListenerEventId");
		Script_LongBowChargeUpHitHandler_Data.NativeFieldInfoPtr_HitsCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LongBowChargeUpHitHandler_Data>.NativeClassPtr, "HitsCount");
		Script_LongBowChargeUpHitHandler_Data.NativeFieldInfoPtr_MaxHits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LongBowChargeUpHitHandler_Data>.NativeClassPtr, "MaxHits");
		Script_LongBowChargeUpHitHandler_Data.NativeFieldInfoPtr_ChargeRequiredFor2Hits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LongBowChargeUpHitHandler_Data>.NativeClassPtr, "ChargeRequiredFor2Hits");
		Script_LongBowChargeUpHitHandler_Data.NativeFieldInfoPtr_ChargeRequiredFor3Hits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LongBowChargeUpHitHandler_Data>.NativeClassPtr, "ChargeRequiredFor3Hits");
		Script_LongBowChargeUpHitHandler_Data.NativeFieldInfoPtr_MinDamage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LongBowChargeUpHitHandler_Data>.NativeClassPtr, "MinDamage");
		Script_LongBowChargeUpHitHandler_Data.NativeFieldInfoPtr_MaxDamage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LongBowChargeUpHitHandler_Data>.NativeClassPtr, "MaxDamage");
		Script_LongBowChargeUpHitHandler_Data.NativeFieldInfoPtr_DamageReductionPerHit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LongBowChargeUpHitHandler_Data>.NativeClassPtr, "DamageReductionPerHit");
		Script_LongBowChargeUpHitHandler_Data.NativeFieldInfoPtr_OnSpawnFullyChargedEvent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LongBowChargeUpHitHandler_Data>.NativeClassPtr, "OnSpawnFullyChargedEvent");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_LongBowChargeUpHitHandler_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MainDamageParameters;
	private static readonly IntPtr NativeFieldInfoPtr_ListenerEventId;
	private static readonly IntPtr NativeFieldInfoPtr_HitsCount;
	private static readonly IntPtr NativeFieldInfoPtr_MaxHits;
	private static readonly IntPtr NativeFieldInfoPtr_ChargeRequiredFor2Hits;
	private static readonly IntPtr NativeFieldInfoPtr_ChargeRequiredFor3Hits;
	private static readonly IntPtr NativeFieldInfoPtr_MinDamage;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDamage;
	private static readonly IntPtr NativeFieldInfoPtr_DamageReductionPerHit;
	private static readonly IntPtr NativeFieldInfoPtr_OnSpawnFullyChargedEvent;
	[FieldOffset(0)]
	public DealDamageParameters MainDamageParameters;
	[FieldOffset(120)]
	public GameplayEventId ListenerEventId;
	[FieldOffset(128)]
	public int HitsCount;
	[FieldOffset(132)]
	public int MaxHits;
	[FieldOffset(136)]
	public float ChargeRequiredFor2Hits;
	[FieldOffset(140)]
	public float ChargeRequiredFor3Hits;
	[FieldOffset(144)]
	public float MinDamage;
	[FieldOffset(148)]
	public float MaxDamage;
	[FieldOffset(152)]
	public float DamageReductionPerHit;
	[FieldOffset(156)]
	public GameplayEventId OnSpawnFullyChargedEvent;
}
