---
nav_exclude: true
search_exclude: true
---

# Script_UnitBloodQualityBuff_Scholar_DataShared

```csharp
[StructLayout(2)]
public struct Script_UnitBloodQualityBuff_Scholar_DataShared
{
	static Script_UnitBloodQualityBuff_Scholar_DataShared()
	{
		Il2CppClassPointerStore<Script_UnitBloodQualityBuff_Scholar_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_UnitBloodQualityBuff_Scholar_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_UnitBloodQualityBuff_Scholar_DataShared>.NativeClassPtr);
		Script_UnitBloodQualityBuff_Scholar_DataShared.NativeFieldInfoPtr_Modifications = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UnitBloodQualityBuff_Scholar_DataShared>.NativeClassPtr, "Modifications");
		Script_UnitBloodQualityBuff_Scholar_DataShared.NativeFieldInfoPtr_Curve_DamageIncrease = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UnitBloodQualityBuff_Scholar_DataShared>.NativeClassPtr, "Curve_DamageIncrease");
		Script_UnitBloodQualityBuff_Scholar_DataShared.NativeFieldInfoPtr_Curve_HealthIncrease = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UnitBloodQualityBuff_Scholar_DataShared>.NativeClassPtr, "Curve_HealthIncrease");
		Script_UnitBloodQualityBuff_Scholar_DataShared.NativeFieldInfoPtr_Curve_MovementIncrease = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UnitBloodQualityBuff_Scholar_DataShared>.NativeClassPtr, "Curve_MovementIncrease");
		Script_UnitBloodQualityBuff_Scholar_DataShared.NativeFieldInfoPtr_DamageIncreaseMax = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UnitBloodQualityBuff_Scholar_DataShared>.NativeClassPtr, "DamageIncreaseMax");
		Script_UnitBloodQualityBuff_Scholar_DataShared.NativeFieldInfoPtr_HealthIncreaseMax = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UnitBloodQualityBuff_Scholar_DataShared>.NativeClassPtr, "HealthIncreaseMax");
		Script_UnitBloodQualityBuff_Scholar_DataShared.NativeFieldInfoPtr_SpeedIncreaseMax = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UnitBloodQualityBuff_Scholar_DataShared>.NativeClassPtr, "SpeedIncreaseMax");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_UnitBloodQualityBuff_Scholar_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Modifications;
	private static readonly IntPtr NativeFieldInfoPtr_Curve_DamageIncrease;
	private static readonly IntPtr NativeFieldInfoPtr_Curve_HealthIncrease;
	private static readonly IntPtr NativeFieldInfoPtr_Curve_MovementIncrease;
	private static readonly IntPtr NativeFieldInfoPtr_DamageIncreaseMax;
	private static readonly IntPtr NativeFieldInfoPtr_HealthIncreaseMax;
	private static readonly IntPtr NativeFieldInfoPtr_SpeedIncreaseMax;
	[FieldOffset(0)]
	public BloodQualityBuffModifications Modifications;
	[FieldOffset(12)]
	public CurveReference Curve_DamageIncrease;
	[FieldOffset(20)]
	public CurveReference Curve_HealthIncrease;
	[FieldOffset(28)]
	public CurveReference Curve_MovementIncrease;
	[FieldOffset(36)]
	public float DamageIncreaseMax;
	[FieldOffset(40)]
	public float HealthIncreaseMax;
	[FieldOffset(44)]
	public float SpeedIncreaseMax;
}
