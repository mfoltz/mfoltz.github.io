---
nav_exclude: true
search_exclude: true
---

# ModifyUnitBaseStatsTypeBuff

```csharp
[StructLayout(2)]
public struct ModifyUnitBaseStatsTypeBuff
{
	static ModifyUnitBaseStatsTypeBuff()
	{
		Il2CppClassPointerStore<ModifyUnitBaseStatsTypeBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ModifyUnitBaseStatsTypeBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyUnitBaseStatsTypeBuff>.NativeClassPtr);
		ModifyUnitBaseStatsTypeBuff.NativeFieldInfoPtr_Priority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitBaseStatsTypeBuff>.NativeClassPtr, "Priority");
		ModifyUnitBaseStatsTypeBuff.NativeFieldInfoPtr_UnitBaseStatsType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitBaseStatsTypeBuff>.NativeClassPtr, "UnitBaseStatsType");
		ModifyUnitBaseStatsTypeBuff.NativeFieldInfoPtr_UnitBaseStatsTypeModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitBaseStatsTypeBuff>.NativeClassPtr, "UnitBaseStatsTypeModId");
		ModifyUnitBaseStatsTypeBuff.NativeFieldInfoPtr_HealthUnitBaseStatsType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitBaseStatsTypeBuff>.NativeClassPtr, "HealthUnitBaseStatsType");
		ModifyUnitBaseStatsTypeBuff.NativeFieldInfoPtr_HealthUnitBaseStatsTypeModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitBaseStatsTypeBuff>.NativeClassPtr, "HealthUnitBaseStatsTypeModId");
		ModifyUnitBaseStatsTypeBuff.NativeFieldInfoPtr_MaxHealthFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitBaseStatsTypeBuff>.NativeClassPtr, "MaxHealthFactor");
		ModifyUnitBaseStatsTypeBuff.NativeFieldInfoPtr_MaxHealthFactorModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitBaseStatsTypeBuff>.NativeClassPtr, "MaxHealthFactorModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyUnitBaseStatsTypeBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Priority;
	private static readonly IntPtr NativeFieldInfoPtr_UnitBaseStatsType;
	private static readonly IntPtr NativeFieldInfoPtr_UnitBaseStatsTypeModId;
	private static readonly IntPtr NativeFieldInfoPtr_HealthUnitBaseStatsType;
	private static readonly IntPtr NativeFieldInfoPtr_HealthUnitBaseStatsTypeModId;
	private static readonly IntPtr NativeFieldInfoPtr_MaxHealthFactor;
	private static readonly IntPtr NativeFieldInfoPtr_MaxHealthFactorModId;
	[FieldOffset(0)]
	public int Priority;
	[FieldOffset(4)]
	public UnitBaseStatsType UnitBaseStatsType;
	[FieldOffset(8)]
	public ModificationId UnitBaseStatsTypeModId;
	[FieldOffset(12)]
	public UnitBaseStatsType HealthUnitBaseStatsType;
	[FieldOffset(16)]
	public ModificationId HealthUnitBaseStatsTypeModId;
	[FieldOffset(20)]
	public float MaxHealthFactor;
	[FieldOffset(24)]
	public ModificationId MaxHealthFactorModId;
}
