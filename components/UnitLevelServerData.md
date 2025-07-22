---
nav_exclude: true
search_exclude: true
---

# UnitLevelServerData

```csharp
public struct UnitLevelServerData
{
	static UnitLevelServerData()
	{
		Il2CppClassPointerStore<UnitLevelServerData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UnitLevelServerData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnitLevelServerData>.NativeClassPtr);
		UnitLevelServerData.NativeFieldInfoPtr_HealthUnitBaseStatsTypeInt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitLevelServerData>.NativeClassPtr, "HealthUnitBaseStatsTypeInt");
		UnitLevelServerData.NativeFieldInfoPtr_UnitBaseStatsTypeInt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitLevelServerData>.NativeClassPtr, "UnitBaseStatsTypeInt");
		UnitLevelServerData.NativeMethodInfoPtr_get_HealthUnitBaseStatsType_Public_get_UnitBaseStatsType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnitLevelServerData>.NativeClassPtr, 100665894);
		UnitLevelServerData.NativeMethodInfoPtr_get_UnitBaseStatsType_Public_get_UnitBaseStatsType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnitLevelServerData>.NativeClassPtr, 100665895);
	}
	public unsafe UnitBaseStatsType HealthUnitBaseStatsType
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnitLevelServerData.NativeMethodInfoPtr_get_HealthUnitBaseStatsType_Public_get_UnitBaseStatsType_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe UnitBaseStatsType UnitBaseStatsType
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnitLevelServerData.NativeMethodInfoPtr_get_UnitBaseStatsType_Public_get_UnitBaseStatsType_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnitLevelServerData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HealthUnitBaseStatsTypeInt;
	private static readonly IntPtr NativeFieldInfoPtr_UnitBaseStatsTypeInt;
	private static readonly IntPtr NativeMethodInfoPtr_get_HealthUnitBaseStatsType_Public_get_UnitBaseStatsType_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_UnitBaseStatsType_Public_get_UnitBaseStatsType_0;

	public ModifiableInt HealthUnitBaseStatsTypeInt;

	public ModifiableInt UnitBaseStatsTypeInt;
}
```

## Server Systems

- [MinionSpawnSystem](/systems/server/MinionSpawnSystem)
