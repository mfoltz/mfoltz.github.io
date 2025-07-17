---
nav_exclude: true
search_exclude: true
---

# UnitCompositionGroupUnitEntry

```csharp
[StructLayout(2)]
public struct UnitCompositionGroupUnitEntry
{
	static UnitCompositionGroupUnitEntry()
	{
		Il2CppClassPointerStore<UnitCompositionGroupUnitEntry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UnitCompositionGroupUnitEntry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnitCompositionGroupUnitEntry>.NativeClassPtr);
		UnitCompositionGroupUnitEntry.NativeFieldInfoPtr_Unit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionGroupUnitEntry>.NativeClassPtr, "Unit");
		UnitCompositionGroupUnitEntry.NativeFieldInfoPtr_IsVBloodUnit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionGroupUnitEntry>.NativeClassPtr, "IsVBloodUnit");
		UnitCompositionGroupUnitEntry.NativeFieldInfoPtr_CustomVBloodUnit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionGroupUnitEntry>.NativeClassPtr, "CustomVBloodUnit");
		UnitCompositionGroupUnitEntry.NativeFieldInfoPtr_UnitBaseStatsType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionGroupUnitEntry>.NativeClassPtr, "UnitBaseStatsType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnitCompositionGroupUnitEntry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Unit;
	private static readonly IntPtr NativeFieldInfoPtr_IsVBloodUnit;
	private static readonly IntPtr NativeFieldInfoPtr_CustomVBloodUnit;
	private static readonly IntPtr NativeFieldInfoPtr_UnitBaseStatsType;
	[FieldOffset(0)]
	public PrefabGUID Unit;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool IsVBloodUnit;
	[FieldOffset(8)]
	public PrefabGUID CustomVBloodUnit;
	[FieldOffset(12)]
	public UnitBaseStatsType UnitBaseStatsType;
}
