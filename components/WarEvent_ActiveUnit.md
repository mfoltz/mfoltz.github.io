---
nav_exclude: true
search_exclude: true
---

# WarEvent_ActiveUnit

```csharp
[StructLayout(2)]
public struct WarEvent_ActiveUnit
{
	static WarEvent_ActiveUnit()
	{
		Il2CppClassPointerStore<WarEvent_ActiveUnit>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared.WarEvents", "WarEvent_ActiveUnit");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WarEvent_ActiveUnit>.NativeClassPtr);
		WarEvent_ActiveUnit.NativeFieldInfoPtr_SpawnTimeTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActiveUnit>.NativeClassPtr, "SpawnTimeTicks");
		WarEvent_ActiveUnit.NativeFieldInfoPtr_Instance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActiveUnit>.NativeClassPtr, "Instance");
		WarEvent_ActiveUnit.NativeFieldInfoPtr_UnitPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActiveUnit>.NativeClassPtr, "UnitPrefab");
		WarEvent_ActiveUnit.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActiveUnit>.NativeClassPtr, "Type");
		WarEvent_ActiveUnit.NativeFieldInfoPtr_PointValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActiveUnit>.NativeClassPtr, "PointValue");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WarEvent_ActiveUnit>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnTimeTicks;
	private static readonly IntPtr NativeFieldInfoPtr_Instance;
	private static readonly IntPtr NativeFieldInfoPtr_UnitPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_PointValue;
	[FieldOffset(0)]
	public Nullable_Unboxed<long> SpawnTimeTicks;
	[FieldOffset(16)]
	public Entity Instance;
	[FieldOffset(24)]
	public PrefabGUID UnitPrefab;
	[FieldOffset(28)]
	public UnitBaseStatsType Type;
	[FieldOffset(32)]
	public int PointValue;
}
