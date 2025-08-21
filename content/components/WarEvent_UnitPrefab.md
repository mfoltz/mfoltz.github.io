---
nav_exclude: true
search_exclude: true
---

```csharp
public struct WarEvent_UnitPrefab
{
	static WarEvent_UnitPrefab()
	{
		Il2CppClassPointerStore<WarEvent_UnitPrefab>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared.WarEvents", "WarEvent_UnitPrefab");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WarEvent_UnitPrefab>.NativeClassPtr);
		WarEvent_UnitPrefab.NativeFieldInfoPtr_UnitPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_UnitPrefab>.NativeClassPtr, "UnitPrefab");
		WarEvent_UnitPrefab.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_UnitPrefab>.NativeClassPtr, "Type");
		WarEvent_UnitPrefab.NativeFieldInfoPtr_PointValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_UnitPrefab>.NativeClassPtr, "PointValue");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WarEvent_UnitPrefab>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnitPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_PointValue;

	public PrefabGUID UnitPrefab;

	public UnitBaseStatsType Type;

	public int PointValue;
}
```
