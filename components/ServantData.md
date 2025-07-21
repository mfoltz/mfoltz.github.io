---
nav_exclude: true
search_exclude: false
---

# ServantData

```csharp
public struct ServantData
{
	static ServantData()
	{
		Il2CppClassPointerStore<ServantData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ServantData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantData>.NativeClassPtr);
		ServantData.NativeFieldInfoPtr_ConvertDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantData>.NativeClassPtr, "ConvertDuration");
		ServantData.NativeFieldInfoPtr_ReviveDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantData>.NativeClassPtr, "ReviveDuration");
		ServantData.NativeFieldInfoPtr_ReviveCostModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantData>.NativeClassPtr, "ReviveCostModifier");
		ServantData.NativeFieldInfoPtr_IsOnMission = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantData>.NativeClassPtr, "IsOnMission");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ConvertDuration;
	private static readonly IntPtr NativeFieldInfoPtr_ReviveDuration;
	private static readonly IntPtr NativeFieldInfoPtr_ReviveCostModifier;
	private static readonly IntPtr NativeFieldInfoPtr_IsOnMission;

	public float ConvertDuration;

	public float ReviveDuration;

	public float ReviveCostModifier;

	public bool IsOnMission;
}
```

## Server Systems

- [RemoveLingeringServantMissionBuffsSystem](/systems/server/RemoveLingeringServantMissionBuffsSystem)
- [ServantSummonIfIdleOutsideTerritorySystem](/systems/server/ServantSummonIfIdleOutsideTerritorySystem)
