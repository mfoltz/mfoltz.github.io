---
nav_exclude: true
search_exclude: false
---

# UserStats

```csharp
public struct UserStats
{
	static UserStats()
	{
		Il2CppClassPointerStore<UserStats>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "UserStats");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UserStats>.NativeClassPtr);
		UserStats.NativeFieldInfoPtr_VampireCreatedUTCTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserStats>.NativeClassPtr, "VampireCreatedUTCTicks");
		UserStats.NativeFieldInfoPtr_VBloodKills = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserStats>.NativeClassPtr, "VBloodKills");
		UserStats.NativeFieldInfoPtr_UnitKills = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserStats>.NativeClassPtr, "UnitKills");
		UserStats.NativeFieldInfoPtr_Deaths = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserStats>.NativeClassPtr, "Deaths");
		UserStats.NativeFieldInfoPtr_OnlineTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserStats>.NativeClassPtr, "OnlineTime");
		UserStats.NativeFieldInfoPtr_DistanceTravelled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserStats>.NativeClassPtr, "DistanceTravelled");
		UserStats.NativeFieldInfoPtr_LitresBloodConsumed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserStats>.NativeClassPtr, "LitresBloodConsumed");
		UserStats.NativeFieldInfoPtr_HasKilledDracula = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserStats>.NativeClassPtr, "HasKilledDracula");
		UserStats.NativeFieldInfoPtr_HasSeenCredits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserStats>.NativeClassPtr, "HasSeenCredits");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UserStats>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VampireCreatedUTCTicks;
	private static readonly IntPtr NativeFieldInfoPtr_VBloodKills;
	private static readonly IntPtr NativeFieldInfoPtr_UnitKills;
	private static readonly IntPtr NativeFieldInfoPtr_Deaths;
	private static readonly IntPtr NativeFieldInfoPtr_OnlineTime;
	private static readonly IntPtr NativeFieldInfoPtr_DistanceTravelled;
	private static readonly IntPtr NativeFieldInfoPtr_LitresBloodConsumed;
	private static readonly IntPtr NativeFieldInfoPtr_HasKilledDracula;
	private static readonly IntPtr NativeFieldInfoPtr_HasSeenCredits;

	public long VampireCreatedUTCTicks;

	public int VBloodKills;

	public int UnitKills;

	public int Deaths;

	public float OnlineTime;

	public float DistanceTravelled;

	public float LitresBloodConsumed;

	public bool HasKilledDracula;

	public bool HasSeenCredits;
}
```

## Server Systems

- [UserAgeSystem](/systems/server/UserAgeSystem)
- [UserDistanceTravelledSystem](/systems/server/UserDistanceTravelledSystem)
